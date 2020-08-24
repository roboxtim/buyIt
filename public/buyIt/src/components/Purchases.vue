<template>

    <div class="login">

        <div class="container">



        </div>

    </div>

</template>

<script lang="ts">
    import Vue from 'vue';
    import {mapState} from 'vuex';
    import store from "@/store";

    export default Vue.extend({
        name: 'Purchases',
        data: () => {
            return {

            }
        },
        mounted: () => {
            store.commit('changeTitle', 'Purchases');
        },
        computed: {

        },
        methods: {

        }
    });

</script>
