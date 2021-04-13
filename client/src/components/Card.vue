<template>
    <v-card
        :max-width="($vuetify.breakpoint.smAndUp && 'auto') || '100%'"
        class="mx-auto"
    >
        <v-list-item>
            <v-list-item-avatar color="grey"></v-list-item-avatar>
            <v-list-item-content>
                <v-list-item-title class="headline">{{
                    event.sujet
                }}</v-list-item-title>
                <v-list-item-subtitle
                    >by {{ event.organisateur }}</v-list-item-subtitle
                >
            </v-list-item-content>
        </v-list-item>

        <v-img
            :src="Url"
            lazy-src="@/assets/808080.png"
            height="194"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            ><template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                    ></v-progress-circular>
                </v-row>
            </template>
        </v-img>

        <v-card-title>
            {{ event.service }}
        </v-card-title>

        <v-card-subtitle>
            N Salle ({{ event.salle_id }}) -{{ event.date }} @{{ event.time }}
        </v-card-subtitle>

        <v-card-actions>
            <v-btn color="indigo lighten-2" text>
                Explore
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
                <v-icon>{{
                    show ? 'mdi-chevron-up' : 'mdi-chevron-down'
                }}</v-icon>
            </v-btn>
        </v-card-actions>

        <v-expand-transition>
            <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                    {{ event.description }}
                </v-card-text>
            </div>
        </v-expand-transition>
    </v-card>
</template>

<script>
export default {
    name: 'CardEvent',
    props: {
        event: {
            type: Object,
            required: true,
        },
        url: {
            type: Function,
            required: true,
        },
    },

    data: () => ({
        show: false,
        Url: '',
    }),

    created() {
        this.Url = this.url();
    },
};
</script>

<style></style>
