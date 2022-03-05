<template>
    <v-dialog fullscreen hide-overlay persistent v-model="workoutlist.dialog">
        <v-card>
            <v-toolbar dark color="grey darken-4">
                <v-btn icon dark>
                    <v-icon @click="closeModal">mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title><h5 font-weight-regular>{{ data.name }}</h5></v-toolbar-title>
            </v-toolbar>
            <v-container fluid>
                <v-carousel hide-delimiters height="100vh">
                    <v-carousel-item v-for="(workout, i) in data.workout_list" :key="i">
                        <v-card flat class="pt-10 px-10">
                            <h4 class="text-center">{{ workout.name }}</h4>
                            <v-card-text>
                                <h1 class="text-center">{{ workout.description }}</h1>
                                <v-row class="mt-10 d-flex align-center justify-center" no-gutters>
                                    <v-col cols="12" md="6">
                                        <v-img v-if="workout.gif" contain max-width="480" max-height="360" :src="workout.gif"></v-img>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <h6 class="text-center">{{ workout.steps }}</h6>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-card>
                    </v-carousel-item>
                </v-carousel>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "WorkoutModal",
        data() {
            return {
                workoutlist: {
                    dialog: false,
                },
            };
        },
        props: ["data"],
        created() {
            this.workoutlist.dialog = true;
        },
        methods: {
            closeModal() {
                this.$emit("updateModal");
            },
        },
    };
</script>
