<template>

    <div class="purchases">

        <div class="container">

            <md-progress-spinner md-mode="indeterminate" v-if="status === 'loading'"></md-progress-spinner>

            <div class="inner" v-else>

                <md-speed-dial>

                    <md-speed-dial-target>
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

            </div>

        </div>

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

            }
        },
        mounted: function() {
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
                this.$store.dispatch('purchases/getPurchases')
                    .then((res) => {
                        //console.log(res);
                    })
                    .catch(err => console.log(err));
            }
        }
    });

</script>
