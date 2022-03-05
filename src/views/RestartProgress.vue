<template>
    <v-dialog v-model="dialog" persistent max-width="500px">
        <v-toolbar color="grey darken-4" dark>
            Restart Progress
            <v-spacer></v-spacer>
            <v-btn icon dark :to="{ path: '/home' }"><v-icon>mdi-close</v-icon></v-btn>
        </v-toolbar>
        <v-card>
            <v-card-text class="pa-10 text-center">
                <h3>This will restart all your data. Are you sure?</h3>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="restartProgress()">
                    Accept
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "RestartProgress",
        created() {
            this.dialog = true;
        },
        data() {
            return {
                dialog: false,
            };
        },
        methods: {
            removeLocalStorage() {
                localStorage.removeItem("birthdate");
                localStorage.removeItem("gender");
                localStorage.removeItem("age");
                localStorage.removeItem("shoulder_back_reminder");
                localStorage.removeItem("activity_factor");
                localStorage.removeItem("chest_reminder");
                localStorage.removeItem("arm_reminder");
                localStorage.removeItem("name");
                localStorage.removeItem("fitness_level");
                localStorage.removeItem("time_reminder");
                localStorage.removeItem("height");
                localStorage.removeItem("weight");
                localStorage.removeItem("abs_reminder");
                localStorage.removeItem("leg_reminder");
                localStorage.removeItem("token");
            },
            restartProgress() {
                this.removeLocalStorage();
                this.dialog = false;
                this.$router.push("/");
            },
        },
    };
</script>
