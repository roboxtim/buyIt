<template>

    <div class="purchases">

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
                    md-description="Create new purchases list.">
            </md-empty-state>


            <md-list v-else>
                <md-list-item v-for="(purchase, purchase_key) in purchases" v-bind:key="purchase_key">
                    {{purchase.name}}
                </md-list-item>
            </md-list>

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
    import store from "@/store";
    import {IStatePurchases} from "@/store/purchases/interface";

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
            getPurchases: function () {
                this.$store.dispatch('purchases/getPurchases');
            },
            savePurchases: function () {
                this.$store.dispatch('purchases/savePurchases', {name: this.purchasesList})
                    .then((res) => {
                        //console.log(res);
                    })
                    .catch(err => console.log(err));
            }
        }
    });

</script>