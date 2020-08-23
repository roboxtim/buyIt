<template>

    <div class="login">

        <div class="container" v-bind:class="[status]">


            <div class="md-layout md-gutter">

                <div class="md-layout-item">

                    <md-field>
                        <label>Email</label>
                        <md-input v-model="email" name="email"></md-input>
                    </md-field>

                    <md-field>
                        <label>Password</label>
                        <md-input v-model="password" :type="'password'" name="pasword"></md-input>
                    </md-field>

                    <md-card-actions>
                        <md-button class="md-raised md-primary" @click="login">Login</md-button>
                    </md-card-actions>

                </div>

            </div>

            <md-snackbar :md-position="'center'" :md-duration="4000" :md-active.sync="message" md-persistent>
                <span v-html="message"></span>
            </md-snackbar>

        </div>

    </div>

</template>

<script lang="ts">
    import Vue from 'vue';
    import {mapState} from 'vuex';
    import store from "@/store";
    import {IStateProfile} from "@/store/profile/interface";

    export default Vue.extend({
        name: 'Login',
        data: () => {
            return {
                isRegistering: false,

                email: '',
                password: '',

            }
        },
        mounted : () => {
            store.commit('changeTitle', 'Login');
        },
        computed: {
            ...mapState<IStateProfile>({
                status: state => state.auth.status,
                message: state => state.auth.message,
            })
        },
        methods: {
            login: function () {
                let email = this.email;
                let password = this.password;
                this.$store.dispatch('auth/login', {email, password})
                    .then(() => this.$router.push('/'))
                    .catch(err => console.log(err))
            }
        }
    });

</script>
