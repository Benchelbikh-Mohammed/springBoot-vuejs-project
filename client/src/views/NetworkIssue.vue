<template>
    <v-container>
        <v-sheet max-height="600" height="68vh">
            <v-row class="pa-7">
                <v-col cols="12">
                    <h1 class="text-h1 text-center">Network isuues</h1>
                </v-col>
                <v-col cols="12">
                    <h3>
                        looks like you're experiencing some network errors
                        please click back and try again
                    </h3>
                </v-col>
                <v-col>
                    <v-btn :to="{ name: 'dashboard' }"
                        >or go to the home page</v-btn
                    >
                </v-col>
            </v-row>
        </v-sheet>
    </v-container>
</template>

<script>
export default {};
</script>

<style></style>
