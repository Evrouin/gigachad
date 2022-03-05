<template>
    <div>
        <v-toolbar color="grey darken-4" dark>
            Profile
            <v-spacer></v-spacer>
            <v-btn icon dark :to="{ path: '/home' }"><v-icon>mdi-close</v-icon></v-btn>
        </v-toolbar>
        <v-container>
            <v-card flat>
                <v-card-text>
                    <v-row no-gutters>
                        <h4 class="pa-1 mb-1">Personal Information</h4>
                        <v-spacer></v-spacer>
                        <v-btn class="pa-1 mb-1" small color="green" @click="openProfileModal()" text>Edit</v-btn>
                    </v-row>
                    <v-row no-gutters>
                        <v-col class="pa-1" cols="12" sm="6">
                            <v-text-field readonly outlined dense label="Name" v-model="profile.data.name"></v-text-field>
                        </v-col>
                        <v-col class="pa-1" cols="12" sm="6">
                            <v-text-field readonly outlined dense label="Fitness Level" v-model="profile.data.fitness_level"></v-text-field>
                        </v-col>
                        <v-col class="pa-1" cols="12" sm="6">
                            <v-text-field readonly outlined dense label="Birthdate" v-model="profile.data.birthdate"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-divider></v-divider>
                    <v-row no-gutters>
                        <h4 class="pa-1 my-1">Fitness Information</h4>
                        <v-spacer></v-spacer>
                        <v-btn class="pa-1 my-1" small color="green" text @click="openBMIModal()">Edit</v-btn>
                    </v-row>
                    <v-row no-gutters>
                        <v-col class="pa-1" cols="12" sm="6">
                            <v-text-field readonly outlined dense label="Height" v-model="profile.data.height" suffix="cm"></v-text-field>
                        </v-col>
                        <v-col class="pa-1" cols="12" sm="6">
                            <v-text-field readonly outlined dense label="Weight" v-model="profile.data.weight" suffix="kg"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-menu v-if="menu" class="pa-1" cols="12">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn small icon v-bind="attrs" v-on="on"><v-icon>mdi-lightbulb-on-outline</v-icon></v-btn>
                        </template>
                        <v-list>
                            <v-list-item>
                                The recommended fitness level for you is {{ recommended_fitness_level }}
                            </v-list-item>
                        </v-list>
                    </v-menu>
                    <v-row no-gutters>
                        <v-col class="pa-1" cols="12" sm="6">
                            <v-text-field class="mt-1" readonly outlined dense :value="bmi">
                                <template v-slot:label>
                                    BMI (kg/m<sup>2</sup>)
                                </template>
                            </v-text-field>
                        </v-col>
                    </v-row>
                    <v-dialog v-model="modal.calorie" fullscreen persistent>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn small icon v-bind="attrs" v-on="on">
                                <v-icon>mdi-lightbulb-on-outline</v-icon>
                            </v-btn>
                        </template>
                        <v-toolbar color="grey darken-4" dark>
                            Calorie Intake
                            <v-spacer></v-spacer>
                            <v-btn icon dark @click="modal.calorie = false"><v-icon>mdi-close</v-icon></v-btn>
                        </v-toolbar>
                        <v-card>
                            <v-card-text>
                                <br />
                                <h4>How to Count Them</h4>
                                The calorie calculator is based on determining your resting energy expenditure <b>(REE)</b> and non-resting energy expenditure <b>(NREE)</b>. <br />
                                <b>REE</b> refers to the number of calories a person burns at rest, while <b>NREE</b> indicates calories burned during activity and digestion. <br />
                                Adding <b>REE</b> and <b>NREE</b> gives you the total number of calories burned in a day, also known as total daily energy expenditure <b>(TDEE)</b>. In order to determine your overall calorie needs, you can
                                either use a simple online calculator or the <b>Mifflin-St. Jeor equation</b>:
                                <ul>
                                    <li><b>Men:</b> calories/day = 10 x weight (kg) + 6.25 x height (cm) – 5 x age (y) + 5</li>
                                    <li><b>Women:</b> calories/day = 10 x weight (kg) + 6.25 x height (cm) – 5 x age (y) – 161</li>
                                </ul>
                                <br />
                                Then, multiply your result by an activity factor — a number that represents different levels of activity <br />
                                <ul>
                                    <li><b>Sedentary:</b> x 1.2 (limited exercise)</li>
                                    <li><b>Lightly active:</b> x 1.375 (light exercise less than three days per week)</li>
                                    <li><b>Moderately active:</b> x 1.55 (moderate exercise most days of the week)</li>
                                    <li><b>Very active:</b> x 1.725 (hard exercise every day)</li>
                                    <li><b>Extra active: x 1.9</b> (strenuous exercise two or more times per day)</li>
                                </ul>
                                <br />
                                The end result gives you your <b>TDEE</b>. <br />
                                <br />
                                Calories can either be added or subtracted from your total expenditure in order to reach different goals.
                                <br />
                                <br />
                                In other words, those trying to lose weight should consume fewer calories than they expend, while those looking to gain muscle mass should increase calories.
                                <br />
                            </v-card-text>

                            <v-divider></v-divider>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="green darken-2" small dark text @click="modal.calorie = false">
                                    I understand
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-row no-gutters>
                        <v-col class="pa-1" cols="12" sm="6">
                            <v-text-field class="mt-1" readonly outlined dense :value="calorie_count">
                                <template v-slot:label>
                                    Average Daily Calorie Intake
                                </template>
                            </v-text-field>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-container>
        <BMIModal v-if="modal.bmi" v-on:updateBMIModal="updateBMIModal" />
        <ProfileModal v-if="modal.profile" :data="profile.data" v-on:updateProfileModal="updateProfileModal" />
    </div>
</template>

<script>
    import Navbar from "../components/Navbar.vue";
    import BMIModal from "../components/BMIModal.vue";
    import ProfileModal from "../components/ProfileModal.vue";
    export default {
        name: "Profile",
        components: { Navbar, BMIModal, ProfileModal },
        created() {
            this.userData();
        },
        computed: {
            bmi() {
                var weight = parseInt(this.profile.data.weight);
                var height = parseInt(this.profile.data.height) / 100;
                var activity_factor = parseFloat(this.profile.data.activity_factor);
                var bmi = weight / (height * height);
                if (bmi < 18.5) {
                    this.recommended_fitness_level = "Beginner";
                    this.menu = true;
                    return "Underweight: " + bmi.toFixed(2);
                } else if (bmi >= 18.5 && bmi <= 24.9) {
                    if (activity_factor < 1.55) {
                        this.recommended_fitness_level = "Beginner";
                        this.menu = true;
                    } else if(activity_factor > 1.55) {
                        this.recommended_fitness_level = "Advanced";
                        this.menu = true;
                    }else {
                        this.recommended_fitness_level = "Intermediate";
                        this.menu = true;
                    }
                    return "Normal: " + bmi.toFixed(2);
                } else if (bmi >= 25 && bmi <= 29.9) {
                    this.recommended_fitness_level = "Beginner";
                    this.menu = true;
                    return "Overweight: " + bmi.toFixed(2);
                } else if (bmi >= 30) {
                    this.recommended_fitness_level = "Beginner";
                    this.menu = true;
                    return "Obesity: " + bmi.toFixed(2);
                }
            },
            calorie_count() {
                var weight = parseInt(this.profile.data.weight);
                var height = parseInt(this.profile.data.height);
                var age = parseInt(this.profile.data.age);
                var activity_factor = parseFloat(this.profile.data.activity_factor);
                if (this.profile.data.gender == "Male") {
                    var calorie_count = (10 * weight + 6.25 * height - 5 * age + 5) * activity_factor;
                    return calorie_count;
                } else if (this.profile.data.gender == "Female") {
                    var calorie_count = (10 * weight + 6.25 * height - 5 * age - 161) * activity_factor;
                    return calorie_count;
                }
            },
        },
        data() {
            return {
                items: ["Beginner", "Intermediate", "Advanced"],
                profile: {
                    data: {
                        name: "",
                        email: "",
                        fitness_level: "",
                        bmi: "",
                        height: "",
                        weight: "",
                        birthdate: "",
                        age: "",
                        gender: "",
                        activity_factor: "",
                    },
                },
                recommended_fitness_level: "",
                modal: {
                    bmi: false,
                    profile: false,
                    calorie: false,
                },
                menu: false,
            };
        },
        methods: {
            userData() {
                this.profile.data.email = localStorage.getItem("email");
                this.profile.data.name = localStorage.getItem("name");
                this.profile.data.fitness_level = localStorage.getItem("fitness_level");
                this.profile.data.birthdate = localStorage.getItem("birthdate");
                this.profile.data.height = localStorage.getItem("height");
                this.profile.data.weight = localStorage.getItem("weight");
                this.profile.data.age = localStorage.getItem("age");
                this.profile.data.gender = localStorage.getItem("gender");
                this.profile.data.activity_factor = localStorage.getItem("activity_factor");
            },
            updateFitnessLevel(v) {
                localStorage.setItem("fitness_level", v);
            },
            openBMIModal() {
                this.modal.bmi = true;
            },
            openProfileModal() {
                this.modal.profile = true;
                this.profile.data.name = localStorage.getItem("name");
                this.profile.data.fitness_level = localStorage.getItem("fitness_level");
                this.profile.data.birthdate = localStorage.getItem("birthdate");
            },
            updateBMIModal() {
                this.modal.bmi = false;
                this.profile.data.height = localStorage.getItem("height");
                this.profile.data.weight = localStorage.getItem("weight");
                this.profile.data.age = localStorage.getItem("age");
                this.profile.data.gender = localStorage.getItem("gender");
                this.profile.data.activity_factor = localStorage.getItem("activity_factor");
            },
            updateProfileModal() {
                this.modal.profile = false;
                this.userData();
            },
        },
    };
</script>
