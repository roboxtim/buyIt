<template>

    <div class="purchases">

        <div class="container">
            Purchases
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
            store.commit('changeTitle', 'Purchases');
            this.getPurchases();
        },
        computed: {
            ...mapState<IStatePurchases>({
                purchases: state => state.auth.status,
            }),
        },
        methods: {
            getPurchases : function() {
                this.$store.dispatch('purchases/getPurchases')
                    .then((res) => {
                        console.log(res);
                    })
                    .catch(err => console.log(err));
            }
        }
    });

</script>
