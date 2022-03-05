<template>
    <v-card color="grey lighten-4 elevation-0" class="my-5 px-5">
        <v-row>
            <v-col cols="12">
                <div class="text-center">
                    <h4 class="display-2">{{ day }}</h4>
                    <h1 class="display-3">{{ time }}</h1>
                    <h6 v-if="reminder" class="overline">Workout Starts at: {{ reminder }}</h6>
                    <h6 v-if="!reminder" class="overline">No wourkout reminder set</h6>
                </div>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
    export default {
        name: "Clock",
        watch: {
            time() {
                if (this.time === localStorage.getItem("time_reminder")) {
                    this.notifications.push("You have a workout reminder!");
                    localStorage.setItem("notifications", this.notifications);
                }
            },
        },
        created() {
            const today = new Date();
            const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const hours = today.getHours() > 12 ? today.getHours() - 12 : today.getHours();
            const minutes = today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();
            const format = today.getHours() > 12 ? "PM" : "AM";
            this.time = `${hours}:${minutes} ${format}`;
            this.reminder = localStorage.getItem("time_reminder");
            this.day = day[today.getDay()];
        },
        mounted() {
            setInterval(() => {
                this.getCurrentTime();
            }, 1000);
        },
        data() {
            return {
                time: "",
                reminder: "",
                day: "",
            };
        },
        methods: {
            getCurrentTime() {
                const today = new Date();
                const hours = today.getHours() > 12 ? today.getHours() - 12 : today.getHours();
                const minutes = today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();
                const format = today.getHours() > 12 ? "PM" : "AM";
                this.time = `${hours}:${minutes} ${format}`;
            },
        },
    };
</script>
