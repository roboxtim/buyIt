<template>

    <div class="footer">

        <md-bottom-bar md-type="shift">

            <md-bottom-bar-item id="bottom-bar-item-home"
                                md-icon="arrow_back"
                                @click="goBack()">

            </md-bottom-bar-item>

            <md-bottom-bar-item id="bottom-bar-item-home"
                                md-icon="account_box"
                                @click="goToRoute('/login')">

            </md-bottom-bar-item>

            <md-bottom-bar-item id="bottom-bar-item-home"
                                md-icon="list"
                                @click="goToRoute('/')">

            </md-bottom-bar-item>

        </md-bottom-bar>

    </div>

</template>

<script lang="ts">
    import Vue from 'vue';
    import {mapState} from 'vuex';
    import router from '../router';

    export default Vue.extend({
        name: 'Footer',

        computed: {
            currentPath : function() {
                return this.$route.path;
            }
        },

        mounted : function() {

        },

        methods : {
            goBack() {
                router.go(-1);
            },
            goToRoute(route) {
                if(route !== this.$route.path) this.$router.push(route);
            }
        }

    });

</script>
