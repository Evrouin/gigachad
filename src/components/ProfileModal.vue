<template>
    <v-dialog max-width="400px" persistent v-model="modal">
        <v-toolbar color="grey darken-4" dark>
            Edit Profile
            <v-spacer></v-spacer>
            <v-btn icon dark @click="closeModal"><v-icon>mdi-close</v-icon></v-btn>
        </v-toolbar>
        <v-form ref="form" v-model="form.valid" lazy-validation @submit.prevent="updateProfile">
            <v-card class="px-5" flat>
                <v-card-text>
                    <v-row no-gutters>
                        <h4 class="pa-1 my-1">Personal Information</h4>
                    </v-row>
                    <v-row no-gutters>
                        <v-col class="pa-1" cols="12">
                            <v-text-field v-model="form.data.name" :rules="form.rules.name" outlined dense label="Name"></v-text-field>
                        </v-col>
                        <v-col class="pa-1" cols="12">
                            <v-select :items="items" v-model="form.data.fitness_level" :rules="form.rules.fitness_level" outlined dense label="Fitness Level"></v-select>
                        </v-col>
                        <v-col class="pa-1" cols="12">
                            <v-text-field type="date" v-model="form.data.birthdate" :rules="form.rules.birthdate" outlined dense label="Birthdate"></v-text-field>
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
        props: ["data"],
        data() {
            return {
                items: ["Beginner", "Intermediate", "Advanced"],
                form: {
                    valid: true,
                    rules: {
                        name: [(v) => /^[A-Za-z]+$/.test(v) || "Must only contain letters and no spaces", (v) => !!v || "Name is required"],
                        fitness_level: [(v) => !!v || "Fitness Level is required"],
                        birthdate: [(v) => !!v || "Birthdate is required"],
                    },
                    data: {
                        name: null,
                        fitness_level: null,
                        birthdate: "",
                    },
                },
                modal: false,
            };
        },
        created() {
            this.modal = true;
            this.form.data.name = this.data.name;
            this.form.data.fitness_level = this.data.fitness_level;
            this.form.data.birthdate = this.data.birthdate;
        },
        methods: {
            closeModal() {
                this.$emit("updateProfileModal");
            },
            updateProfile() {
                if (this.$refs.form.validate()) {
                    this.form.data.name = this.form.data.name.charAt(0).toUpperCase() + this.form.data.name.slice(1);
                    localStorage.setItem("name", this.form.data.name);
                    localStorage.setItem("fitness_level", this.form.data.fitness_level);
                    localStorage.setItem("birthdate", this.form.data.birthdate);
                    this.$emit("updateProfileModal");
                }
            },
        },
    };
</script>
