<template>

    <div class="header">

        <md-toolbar :md-elevation="1">
            <h3 class="md-title" style="flex: 1" v-html="pageTitle"></h3>
            <md-button @click="back()" class="md-icon-button md-primary">
                <md-icon>undo</md-icon>
            </md-button>
        </md-toolbar>

    </div>

</template>

<script lang="ts">
    import Vue from 'vue';
    import {mapState} from 'vuex';
    import router from '../router';
    import {IStateRoot} from "@/store/interface";

    export default Vue.extend({
        name: 'Header',

        computed: {
            ...mapState<IStateRoot>({
                pageTitle: state => state.pageTitle,
            }),
        },

        methods : {
            back : () => {
                router.go(-1);
            }
        }

    });

</script>
