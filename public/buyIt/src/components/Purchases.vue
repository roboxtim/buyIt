<template>

    <div class="purchases">

        <md-progress-spinner md-mode="indeterminate" v-if="status === 'loading'"></md-progress-spinner>

        <div class="inner container" v-else>

            <md-speed-dial class="add_purchases">

                <md-speed-dial-target @click="showCreateDialog = true">
                    <md-icon>add</md-icon>
                </md-speed-dial-target>

            </md-speed-dial>

            <md-empty-state
                    v-if="!purchasesNum"
                    class="md-primary"
                    md-icon="list"
                    md-label="Nothing here"
                    md-description="Create new purchases list.">
            </md-empty-state>


            <div class="purchases_list" v-else>

                <md-table md-card>

                    <md-table-row v-for="(purchase, purchase_key) in purchases"
                                  v-bind:key="purchase_key">

                        <md-table-cell class="content">
                            <div class="inner" @click="goToPurchase(purchase)">

                                <span class="md-list-item-text" v-html="purchase.name" v-if="!purchase['edit']"></span>

                                <md-field v-else>
                                    <md-input v-model="purchase.name" @keyup="updatePurchases(purchase)"></md-input>
                                </md-field>

                            </div>

                        </md-table-cell>

                        <md-table-cell class="edit">
                            <md-button class="md-icon-button md-list-action"
                                       @click="$set(purchase, 'edit', !purchase['edit'])">
                                <md-icon>edit</md-icon>
                            </md-button>
                        </md-table-cell>

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
                md-title="Purchase list name"
                md-input-maxlength="30"
                md-input-placeholder="List name"
                @md-confirm="savePurchases"
                md-confirm-text="Save"/>

    </div>

</template>

<script lang="ts">
    import Vue from 'vue';
    import {mapState} from 'vuex';
    import {IStatePurchases} from "@/store/purchases/interface";
    import _ from 'lodash';
    import router from '../router';

    export default Vue.extend({
        name: 'Purchases',
        data: () => {
            return {
                purchasesList: '',
                showCreateDialog: false
            }
        },
        mounted() {
            this.getPurchases();
        },
        computed: {
            ...mapState<IStatePurchases>({
                status: state => state.purchases.status,
                purchases: state => state.purchases.purchases,
                page: state => state.purchases.page,
                purchasesNum: state => state.purchases.purchases.length
            }),
        },
        methods: {
            goToPurchase: function (purchase) {
                let _this = this;
                console.log(purchase);
                if (!_this['edit']) router.push('/list/' + purchase._id);
            },
            getPurchases: function () {
                this.$store.dispatch('purchases/getPurchases');
            },
            savePurchases: function () {
                let _this = this;
                _this.$store.dispatch('purchases/savePurchases', {name: _this.purchasesList})
                    .then((res) => {
                        _this.purchasesList = '';
                    });
            },
            deletePurchases: function (_id, purchases_key) {
                let _this = this;
                if (!confirm('Delete this purchases list?')) return false;
                _this.$store.dispatch('purchases/deletePurchases', {id: _id, key: purchases_key});
            },
            updatePurchases: _.throttle(function (this, purchase) {
                this.$store.dispatch('purchases/updatePurchases', {id: purchase._id, name: purchase.name});
            }),
        }
    });

</script>