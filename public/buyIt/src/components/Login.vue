<template>

    <div class="login">

        <md-toolbar :md-elevation="1">
            <span class="md-title">Login/Register</span>
        </md-toolbar>

        <div class="container">

            <div class="md-layout md-gutter">

                <div class="md-layout-item">

                    <md-field>
                        <label>Email</label>
                        <md-input v-model="email" name="email"></md-input>
                    </md-field>

                    <md-field>
                        <label>Password</label>
                        <md-input v-model="password" :type="'password'"  name="pasword"></md-input>
                    </md-field>

                    <md-button class="md-raised md-primary">Primary</md-button>

                </div>

            </div>

        </div>

    </div>

</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: 'Login',
        data: () => {
            return {
                isRegistering: false,

                email: '',
                password: '',

            }
        },
    });

</script>
