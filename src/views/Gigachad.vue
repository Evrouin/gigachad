<template>
    <v-card>
        <Navbar :target_body="target_body" />
        <v-container fluid>
            <v-col cols="12">
                <Clock />
                <v-dialog v-if="target_body.length > 0" v-model="reminder" persistent max-width="400px">
                    <v-card>
                        <v-card-title>
                            <v-spacer></v-spacer>
                            <h4>Daily Reminder</h4>
                            <v-spacer></v-spacer>
                        </v-card-title>
                        <v-card-text class="pa-5">
                            <h4 class="overline text-center">{{ target_body.length > 1 ? 'YOUR TARGET BODY FOR TODAY ARE:' : 'YOUR TARGET BODY FOR TODAY IS:' }}</h4>
                            <h4 class="overline text-center">{{ target_body.join(', ') }}</h4>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn small color="green darken-2" dark depressed @click="reminder = false">OK</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <v-row>
                    <v-col cols="12">
                        <h2 class="text-center">{{ fitness_level.name }} WORKOUTS</h2>
                    </v-col>
                    <v-col v-for="(target_body, i) in fitness_level.target_body_list" :key="i" cols="12" md="4">
                        <v-card class="elevation-1 rounded-1">
                            <v-card-title @click="openModal(target_body)"> <h5>{{ target_body.name }}</h5></v-card-title>
                            <v-card-text @click="openModal(target_body)">
                                <v-img :lazy-src="target_body.image_source" :src="target_body.image_source"></v-img>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
            <WorkoutListModal v-if="modal" :data="data" v-on:updateModal="updateModal" />
        </v-container>
    </v-card>
</template>

<script>
    import Navbar from "../components/Navbar.vue";
    import fitness_level from "../assets/workout.json";
    import user_stats from "../assets/user_stats.json";
    import WorkoutListModal from "../components/WorkoutListModal.vue";
    import Clock from "../components/Clock.vue";
    export default {
        components: { Navbar, WorkoutListModal, Clock },
        name: "Gigachad",
        created() {
            this.getUserFitnessLevel();
            this.getTargetBody();
            this.user_stats = user_stats;
        },
        data() {
            return {
                fitness_level: {},
                reminder: true,
                user_stats: {},
                modal: false,
                data: {},
                target_body: [],
            };
        },
        methods: {
            getUserFitnessLevel() {
                switch (localStorage.getItem("fitness_level")) {
                    case "Beginner":
                        this.fitness_level = fitness_level.BEGINNER;
                        break;
                    case "Intermediate":
                        this.fitness_level = fitness_level.INTERMEDIATE;
                        break;
                    case "Advanced":
                        this.fitness_level = fitness_level.ADVANCE;
                        break;
                    default:
                        this.fitness_level = {};
                }
            },
            getTargetBody() {
                const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                const abs = localStorage.getItem("abs_reminder").split(",");
                const chest = localStorage.getItem("chest_reminder").split(",");
                const arm = localStorage.getItem("arm_reminder").split(",");
                const legs = localStorage.getItem("leg_reminder").split(",");
                const back_shoulders = localStorage.getItem("shoulder_back_reminder").split(",");

                const today = day[new Date().getDay()];

                if (abs.includes(today)) {
                    this.target_body.push("ABS");
                }
                if (chest.includes(today)) {
                    this.target_body.push("CHEST");
                }
                if (arm.includes(today)) {
                    this.target_body.push("ARM");
                }
                if (legs.includes(today)) {
                    this.target_body.push("LEGS");
                }
                if (back_shoulders.includes(today)) {
                    this.target_body.push("SHOULDER & BACK");
                }
            },
            openModal(target_body) {
                this.modal = true;
                this.data = target_body;
            },
            async updateModal() {
                this.modal = false;
            },
        },
    };
</script>
