<template>
    <v-container class="login-container" fluid fill-height>
        <v-app-bar app color="grey darken-4" dark>
            <div class="d-flex align-center">
                <h2>gigachad</h2>
            </div>
            <v-spacer></v-spacer>
        </v-app-bar>
        <v-row no-gutters>
            <v-col cols="12">
                <v-card ref="login" class="login-content elevation-0 px-3 px-sm-7 px-md-5 py-5 py-sm-10 py-md-5 rounded" tile>
                    <v-container class="mt-n16 mt-sm-n16 mt-md-0" fluid fill-height>
                        <v-row justify="center">
                            <v-col class="d-none d-md-flex" sm="12" md="6" lg="6" xl="6">
                                <v-card class="d-flex flex-column elevation-0" width="100%">
                                    <v-img src="../assets/gigachad.png"></v-img>
                                </v-card>
                            </v-col>
                            <v-col sm="12" md="6" lg="6" xl="6">
                                <v-form ref="form" lazy-validation v-model="form.valid" @submit.prevent="login">
                                    <v-card class="d-flex flex-column elevation-0" style="height: 100%;">
                                        <div class="mb-10">
                                            <v-img max-width="200" contain></v-img>
                                        </div>
                                        <div>
                                            <h1>Getting Started</h1>
                                            <p class="d-sm-flex">Get your GigaChad journey started</p>
                                        </div>
                                        <div class="d-flex flex-column">
                                            <div class="form-container">
                                                <p class="form-label">What should we call you?</p>
                                                <v-text-field type="text" v-model="form.data.name" :rules="form.rules.name" outlined autofocus></v-text-field>
                                            </div>
                                            <div class="form-container">
                                                <p class="form-label">Fitness Level</p>
                                                <v-select v-model="form.data.fitness_level" :rules="form.rules.fitness_level" single-line outlined :items="items"></v-select>
                                            </div>
                                        </div>
                                        <div class="mb-auto">
                                            <v-btn type="submit" color="blue-grey darken-3" dark block elevation="0" large :loading="form.loading">Start</v-btn>
                                        </div>
                                        <div class="mt-5 mt-sm-8 mt-md-10">
                                            <p class="mb-0">2022 Gigachad. All rights reserved.</p>
                                        </div>
                                    </v-card>
                                </v-form>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                items: ["Beginner", "Intermediate", "Advanced"],
                form: {
                    valid: true,
                    loading: false,
                    data: {
                        name: '',
                        fitness_level: ''
                    },
                    rules: {
                        name: [(v) => /^[A-Za-z]+$/.test(v) || "Must only contain letters and no spaces", (v) => !!v || "Name is required"],
                        fitness_level: [(v) => !!v || "Fitness Level is required"],
                    },
                },
            }
        },
        methods: {
            login() {
                if(this.$refs.form.validate()) {
                    localStorage.setItem('name', this.form.data.name)
                    localStorage.setItem('fitness_level', this.form.data.fitness_level)
                    localStorage.setItem('token', true)
                    this.$router.push('/home')
                }
            },
        },
    };
</script>
