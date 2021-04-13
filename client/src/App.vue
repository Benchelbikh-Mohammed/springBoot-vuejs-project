<template>
    <v-app>
        <v-card
            v-if="$vuetify.breakpoint.xsOnly && !loggedIn"
            class="d-flex"
            flat
            tile
            color="grey-lighten-4"
        >
            <v-btn
                class="px-2 py-6 text-center"
                text
                outlined
                tile
                width="50%"
                color="indigo lighten-1"
                :to="{ name: 'login' }"
                >Login</v-btn
            >
            <v-btn
                class="px-2 py-6 text-center"
                text
                outlined
                tile
                width="50%"
                color="indigo lighten-1"
                :to="{ name: 'signup' }"
                >Sign Up</v-btn
            >
        </v-card>
        <v-app-bar
            v-if="$vuetify.breakpoint.smAndUp"
            fixed
            app
            color="white"
            elevate-on-scroll
        >
            <v-toolbar-title>Covid tracker</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
                v-for="(link, index) in links"
                :key="index"
                v-show="!link.requireAuth || loggedIn"
                text
                rounded
                class="my-2 mx-1"
                :to="{ name: link.name }"
                exact
            >
                {{ link.label }}
            </v-btn>
            <template v-if="!loggedIn">
                <!-- <v-btn
                    text
                    rounded
                    class="my-2 mx-1"
                    :to="{ name: 'login' }"
                    exact
                    >Login</v-btn
                > -->
                <v-btn
                    text
                    rounded
                    class="my-2 mx-1"
                    :to="{ name: 'signup' }"
                    exact
                    >Register new citizen</v-btn
                >
            </template>
            <v-btn
                color="indigo darken-4"
                v-if="loggedIn"
                @click="logout"
                rounded
            >
                Logout
            </v-btn>
        </v-app-bar>
        <v-main class="white">
            <router-view></router-view>
        </v-main>
        <v-footer color="primary lighten-1" padless>
            <v-bottom-navigation
                v-if="loggedIn && $vuetify.breakpoint.xsOnly"
                color="indigo lighten-2"
                horizontal
            >
                <v-btn
                    v-for="{ name, icon, label } of links"
                    :key="name"
                    :to="{ name }"
                    exact
                >
                    <span>{{ label }}</span>

                    <v-icon>{{ icon }}</v-icon>
                </v-btn>
            </v-bottom-navigation>
            <v-layout justify-center wrap>
                <v-flex primary lighten-2 py-2 text-center white--text xs12>
                    {{ new Date().getFullYear() }} —
                    <strong>Benchelbikh Mohammed</strong>
                </v-flex>
            </v-layout>
        </v-footer>
    </v-app>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'App',
    data() {
        return {
            links: [
                {
                    label: 'Home',
                    name: 'home',
                    requireAuth: true,
                    value: 'home',
                    icon: 'mdi-home',
                },
                {
                    label: 'Dashboard',
                    name: 'dashboard',
                    requireAuth: true,
                    value: 'dashbord',
                    icon: 'mdi-view-dashboard',
                },
            ],
            bottomNav: '',
        };
    },
    methods: {
        logout() {
            this.$store.dispatch('logout');
        },
    },

    computed: mapGetters(['loggedIn']),
};
</script>

<style lang="scss">
@import '@/sass/variables.scss';

body {
    font-family: $body-font-family;
}
</style>
