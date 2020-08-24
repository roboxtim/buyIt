<template>

    <div class="login">

        <div class="container" v-bind:class="[status]">

            <div class="md-layout md-gutter">

                <div class="md-layout-item">

                    <md-field>
                        <label>Email</label>
                        <md-input v-model="email" name="email"></md-input>
                    </md-field>

                    <md-field v-if="isRegistering">
                        <label>Name</label>
                        <md-input v-model="name" name="name"></md-input>
                    </md-field>

                    <md-field>
                        <label>Password</label>
                        <md-input v-model="password" :type="'password'" name="password"></md-input>
                    </md-field>

                    <md-field v-if="isRegistering">
                        <label>Repeat Password</label>
                        <md-input v-model="passwordRepeat" :type="'password'" name="password"></md-input>
                    </md-field>

                    <md-card-actions md-alignment="space-between" v-if="!isRegistering">
                        <md-button class="md-raised md-primary" @click="login">Login</md-button>
                        <md-button class="md-primary" @click="createAccount">Create account</md-button>
                    </md-card-actions>

                    <md-card-actions md-alignment="space-between" v-else>
                        <md-button class="md-raised md-primary" @click="register">Register</md-button>
                        <md-button class="md-primary" @click="loginAccount">I have an account</md-button>
                    </md-card-actions>

                </div>

            </div>

            <md-snackbar :md-position="'center'" :md-duration="4000" :md-active.sync="showSnackbar" md-persistent>
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
                showSnackbar: false,

                name: '',
                email: '',
                password: '',
                passwordRepeat: '',

            }
        },
        mounted: () => {
        },
        computed: {
            ...mapState<IStateProfile>({
                status: state => state.auth.status,
                message: state => state.auth.message,
            }),
        },
        methods: {
            register: function () {
                let email = this.email;
                let name = this.name;
                let password = this.password;
                let passwordRepeat = this.passwordRepeat;

                if (password !== passwordRepeat) {
                    store.commit('auth/change_message', 'Passwords do not match');
                    this.showShack();
                    return false;
                }

                this.$store.dispatch('auth/registration', {email, name, password})
                    .then(() => {
                        this.$router.push('/');
                    })
                    .catch(err => console.log(err));

                this.showShack();
            },
            login: function () {
                let email = this.email;
                let password = this.password;
                this.$store.dispatch('auth/login', {email, password})
                    .then(() => {
                        this.$router.push('/');
                    })
                    .catch(err => console.log(err));

                this.showShack();
            },
            createAccount: function () {
                this.isRegistering = true;
                store.commit('changeTitle', 'Register');
            },
            loginAccount: function () {
                this.isRegistering = false;
                store.commit('changeTitle', 'Login');
            },
            showShack: function () {
                this.$set(this, 'showSnackbar', true);
            }
        }
    });

</script>
