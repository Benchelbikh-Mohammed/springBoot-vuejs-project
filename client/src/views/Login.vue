<template>
    <v-card
        width="500"
        class="mt-5 mx-auto pa-7"
        :shaped="shaped"
        :outlined="outlined"
        v-resize="onResize"
    >
        <v-card-title class="mb-5">
            <h1 class="display-1 text-center" style="width : 100%">Login</h1>
        </v-card-title>
        <v-card-text>
            <v-form @submit.prevent="login">
                <v-row>
                    <v-text-field
                        label="Email"
                        prepend-inner-icon="mdi-email"
                        outlined
                        placeholder="  enter your email"
                        v-model="credentials.email"
                    />
                </v-row>
                <v-row>
                    <v-text-field
                        :type="showPassword ? 'text' : 'password'"
                        label="Password"
                        prepend-inner-icon="mdi-lock"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="showPassword = !showPassword"
                        outlined
                        placeholder="  enter your password"
                        v-model="credentials.password"
                    />
                </v-row>
                <v-row justify="end">
                    <v-btn class="text-overline" text :to="{ name: 'signup' }"
                        >Don't have an account ?</v-btn
                    >
                </v-row>
                <v-row class="mt-8">
                    <v-btn
                        type="submit"
                        color="indigo darken-1"
                        dark
                        width="100%"
                        >Login</v-btn
                    >
                </v-row>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            showPassword: false,
            shaped: false,
            outlined: false,
            credentials: {
                email: 'Admin@nk.test',
                password: 'secret',
            },
        };
    },
    methods: {
        onResize() {
            this.shaped = this.$vuetify.breakpoint.smAndUp;
            this.outlined = !this.shaped;
        },

        login() {
            this.$store
                .dispatch('login', this.credentials)
                .then(() => {
                    this.$router.push({ name: 'dashboard' });
                })
                .catch(err => {
                    if (!err.response) {
                        this.$router.push({ name: 'network-issue' });
                    } else {
                        this.errors = err.response.data.errors;
                    }
                });
        },
    },
};
</script>

<style></style>
