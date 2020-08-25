<template>

    <div class="purchases">

        <div class="container">

            <md-progress-spinner md-mode="indeterminate" v-if="status === 'loading'"></md-progress-spinner>

            <div class="inner" v-else>

                <md-speed-dial>

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


                <md-list v-else>
                    <md-list-item v-for="purchase in purchases">{{purchase.name}}</md-list-item>
                </md-list>

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
                md-confirm-text="Save" />

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
                purchasesList : '',
                showCreateDialog : false
            }
        },
        mounted () {
            console.log(this);
            this.getPurchases();
        },
        computed: {
            ...mapState<IStatePurchases>({
                status: state => state.purchases.status,
                purchases: state => state.purchases.purchases,
                page: state => state.purchases.page,
            }),
            purchasesNum : (state) : number => {
                return state.purchases.length;
            }
        },
        methods: {
            getPurchases : function() {
                this.$store.dispatch('purchases/getPurchases');
            },
            savePurchases : function() {
                this.$store.dispatch('purchases/savePurchases', {name : this.purchasesList})
                    .then((res) => {
                        //console.log(res);
                    })
                    .catch(err => console.log(err));
            }
        }
    });

</script>
