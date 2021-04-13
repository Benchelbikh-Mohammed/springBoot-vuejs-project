<template>
    <v-container>
        <!-- <v-card tile>
            <v-img
                height="250"
                :src="
                    citoyen.isSuspect
                        ? 'https://res.cloudinary.com/db4y2bix8/image/upload/v1611066403/istockphoto-1024230944-612x612_vwkk5r.jpg'
                        : isInfected
                        ? 'https://res.cloudinary.com/db4y2bix8/image/upload/v1611069027/t%C3%A9l%C3%A9chargement_emflgn.png'
                        : 'https://res.cloudinary.com/db4y2bix8/image/upload/v1611070803/images_blu0kl.jpg'
                "
            >
                <v-row align="end">
                    <v-col align-self="start" class="pa-0" cols="12">
                        <v-avatar class="profile" color="grey" size="164" tile>
                            <v-img
                                src="https://res.cloudinary.com/db4y2bix8/image/upload/v1611070714/Unknown_person_ow98su.jpg"
                            ></v-img>
                        </v-avatar>
                    </v-col>
                    <v-col class="py-0">
                        <v-list-item color="rgba(0, 0, 0, .4)" dark>
                            <v-list-item-content>
                                <v-list-item-title class="title">
                                    Marcus Obrien
                                </v-list-item-title>
                                <v-list-item-subtitle
                                    >Network Engineer</v-list-item-subtitle
                                >
                            </v-list-item-content>
                        </v-list-item>
                    </v-col>
                </v-row>
            </v-img>
        </v-card> -->
        <v-row>
            <v-col cols="12" md="4">
                <v-text-field :value="citoyen.cin" label="Cin"></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
                <v-text-field
                    :value="citoyen.prenom"
                    label="First name"
                ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
                <v-text-field
                    :value="citoyen.name"
                    label="Last name"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-btn @click="modify()">modifier</v-btn>
            <v-btn @click="sup()">supprimer</v-btn>
        </v-row>
    </v-container>
</template>

<script>
export default {
    props: {
        citoyen: {
            type: Object,
            required: true,
        },
        infected: {
            type: Array,
            required: true,
        },
    },

    data: () => ({}),

    methods: {
        modify() {
            console.log('modified');
        },

        sup() {
            console.log('supp');
        },
    },

    computed: {
        isInfected() {
            return (
                this.infected.find(
                    infected => infected.citoyensID == this.citoyen.citoyensID,
                ) != null
            );
        },
    },
};
</script>

<style></style>
