<template>

    <div class="purchase">

        <md-progress-spinner md-mode="indeterminate" v-if="status === 'loading'"></md-progress-spinner>

        <div class="inner" v-else>

            <div class="centered">
                <md-speed-dial class="add_purchases">

                    <md-speed-dial-target @click="showCreateDialog = true">
                        <md-icon>add</md-icon>
                    </md-speed-dial-target>

                </md-speed-dial>
            </div>

            <md-empty-state
                    v-if="!purchasesNum"
                    class="md-primary"
                    md-icon="list"
                    md-label="Nothing here"
                    md-description="Create new purchase in list.">
            </md-empty-state>


            <div class="purchases_list" v-else>

                <md-table md-card>

                    <md-table-row v-for="(purchase, purchase_key) in purchases"
                                  @click="completePurchase(purchase)"
                                  :class="{'md-selected-single md-primary' : purchase['completed']}"
                                  v-bind:key="purchase_key" md-selectable="single">

                        <md-table-cell md-label="Name">{{ purchase.name }}</md-table-cell>

                        <md-table-cell md-label="Delete" class="delete">
                            <md-button class="md-icon-button md-list-action"
                                       @click="deletePurchases(purchase._id, purchase_key)">
                                <md-icon>delete</md-icon>
                            </md-button>
                        </md-table-cell>

                    </md-table-row>

                </md-table>

            </div>

        </div>

        <!--Create new-->
        <md-dialog-prompt
                :md-active.sync="showCreateDialog"
                v-model="purchasesList"
                md-title="Purchase name"
                md-input-maxlength="30"
                md-input-placeholder="Enter purchase name"
                @md-confirm="savePurchases"
                md-confirm-text="Save"/>

    </div>

</template>

<script lang="ts">
    import Vue from 'vue';
    import {mapState} from 'vuex';
    import {IStatePurchase} from "@/store/purchase/interface";
    import _ from 'lodash';

    export default Vue.extend({
        name: 'Purchases',
        data: () => {
            return {
                purchasesList: '',
                showCreateDialog: false,
            }
        },
        mounted() {
            this.getPurchases();
        },
        computed: {
            ...mapState<IStatePurchase>({
                status: state => state.purchase.status,
                purchases: state => state.purchase.purchases,
                page: state => state.purchase.page,
                purchasesNum: state => state.purchase.purchases.length
            }),
        },
        methods: {
            listID: function () {
                return this.$route.params.list_id
            },
            getPurchases: function () {
                let _this = this;
                this.$store.dispatch('purchase/getPurchase', {list_id: _this.listID()});
            },
            savePurchases: function () {
                let _this = this;
                _this.$store.dispatch('purchase/savePurchase', {name: _this.purchasesList, list_id: _this.listID()})
                    .then((res) => {
                        _this.purchasesList = '';
                    });
            },
            deletePurchases: function (_id, purchases_key) {
                let _this = this;
                if (!confirm('Delete this purchases list?')) return false;
                _this.$store.dispatch('purchase/deletePurchase', {
                    id: _id,
                    key: purchases_key,
                    list_id: _this.listID()
                });
            },
            updatePurchases: _.throttle(function (this, purchase) {
                let _this = this;
                this.$store.dispatch('purchase/updatePurchase', {
                    id: purchase._id,
                    name: purchase.name,
                    list_id: _this.listID()
                });
            }),
            completePurchase : function(purchase) {
                let _this = this;

                let completed = !purchase['completed'];

                this.$store.dispatch('purchase/purchaseStatus', {
                    id: purchase._id,
                    name: purchase.name,
                    list_id: _this.listID(),
                    completed: completed,
                });

                _this.$set(purchase, 'completed', completed);

            }
        }
    });

</script>