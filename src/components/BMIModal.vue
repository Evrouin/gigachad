<template>
    <v-dialog max-width="400px" persistent v-model="modal">
        <v-toolbar color="grey darken-4" dark>
            BMI Calculator
            <v-spacer></v-spacer>
            <v-btn icon dark @click="closeModal"><v-icon>mdi-close</v-icon></v-btn>
        </v-toolbar>
        <v-form ref="form" v-model="form.valid" lazy-validation @submit.prevent="updateBMI">
            <v-card class="px-5" flat>
                <v-card-text>
                    <v-row no-gutters>
                        <h4 class="pa-1 my-1">Fitness Information</h4>
                    </v-row>
                    <v-row no-gutters>
                        <v-col class="pa-1" cols="12">
                            <v-text-field v-model="form.data.age" :rules="form.rules.age" outlined dense label="Age" suffix="years"></v-text-field>
                        </v-col>
                        <v-col class="pa-1" cols="12">
                            <v-radio-group v-model="form.data.gender" :rules="form.rules.gender" row class="pa-0 ma-0">
                                <v-radio v-for="n in genders" :key="n" :label="n" :value="n"></v-radio>
                            </v-radio-group>
                        </v-col>
                        <v-col class="pa-1" cols="12">
                            <v-text-field v-model="form.data.height" :rules="form.rules.height" outlined dense label="Height" suffix="cm"></v-text-field>
                        </v-col>
                        <v-col class="pa-1" cols="12">
                            <v-text-field v-model="form.data.weight" :rules="form.rules.weight" outlined dense label="Weight" suffix="kg"></v-text-field>
                        </v-col>
                        <v-col class="pa-1" cols="12">
                            <v-select v-model="form.data.activity_factor" :rules="form.rules.activity_factor" outlined dense label="Acitivity Factor" :items="activity_factors" item-text="text" item-value="value"></v-select>
                        </v-col>
                    </v-row>
                    <v-row no-gutters>
                        <v-spacer></v-spacer>
                        <v-btn type="submit" small dark color="green" class="mb-5">Update</v-btn>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-form>
    </v-dialog>
</template>

<script>
    export default {
        name: "BMIModal",
        data() {
            return {
                genders: ["Male", "Female"],
                activity_factors: [
                    { text: "Sedentary", value: "1.2" },
                    { text: "Lightly active", value: "1.375" },
                    { text: "Moderately active", value: "1.55" },
                    { text: "Very active", value: "1.725" },
                    { text: "Extra Active", value: "1.9" },
                ],
                form: {
                    valid: true,
                    rules: {
                        height: [(v) => !!v || "Height is required"],
                        weight: [(v) => !!v || "Weight is required"],
                        gender: [(v) => !!v || "Gender is required"],
                        age: [(v) => !!v || "Age is required"],
                    },
                    data: {
                        height: null,
                        weight: null,
                        age: null,
                        gender: null,
                        activity_factor: {},
                    },
                },
                modal: false,
            };
        },
        created() {
            this.modal = true;
        },
        methods: {
            closeModal() {
                this.$emit("updateBMIModal");
            },
            updateBMI() {
                if (this.$refs.form.validate()) {
                    localStorage.setItem("height", this.form.data.height);
                    localStorage.setItem("weight", this.form.data.weight);
                    localStorage.setItem("age", this.form.data.age);
                    localStorage.setItem("gender", this.form.data.gender);
                    localStorage.setItem("activity_factor", this.form.data.activity_factor);
                    this.$emit("updateBMIModal");
                }
            },
        },
    };
</script>
