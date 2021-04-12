<template>
    <v-container>
        <v-row>
            <v-col
                v-for="(event, index) in event.events"
                :key="event.id"
                :cols="!(index % 3) ? 12 : 6"
                sm="6"
                md="4"
            >
                <Card :url="randomImage" :event="event" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Card from '@/components/Card.vue';
import { mapState } from 'vuex';

export default {
    components: {
        Card,
    },

    created() {
        this.$store.dispatch('fetchEvents').then(() => {
            console.log('fetched');
        });
    },

    computed: mapState(['event']),

    methods: {
        randomImage() {
            return `https://picsum.photos/id/${(Math.random() * 100) | 0}/500`;
        },
    },
};
</script>

<style></style>
