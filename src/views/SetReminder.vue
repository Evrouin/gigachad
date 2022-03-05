<template>
    <div>
        <v-dialog v-model="reminder.modal" transition="dialog-bottom-transition" fullscreen hide-overlay persistent>
            <v-toolbar color="grey darken-4" dark>
                Reminder
                <v-spacer></v-spacer>
                <v-btn icon dark :to="{ path: '/home' }"><v-icon>mdi-close</v-icon></v-btn>
            </v-toolbar>
            <v-card>
                <v-card-text class="pa-10">
                    <v-row no-gutters>
                        <h4 class="mb-3">Reminder Time</h4>
                        <v-spacer></v-spacer>
                        <v-btn dark color="green" small class="float-right" @click="reminder.edit.modal = true" icon>Edit</v-btn>
                    </v-row>
                    <v-row no-gutters>
                        <v-col cols="12" sm="4">
                            <v-text-field readonly v-model="reminder.time" type="time" outlined dense prepend-inner-icon="mdi-clock-outline"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row no-gutters>
                        <h4 class="mb-3">Target body per day</h4>
                    </v-row>
                    <v-row no-gutters>
                        <v-col cols="12" sm="6">
                            <v-combobox readonly small-chips dense outlined multiple prepend-inner-icon="mdi-calendar-range" v-model="reminder.target_body.abs" :items="reminder.items" label="ABS"></v-combobox>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-combobox readonly small-chips dense outlined multiple prepend-inner-icon="mdi-calendar-range" v-model="reminder.target_body.chest" :items="reminder.items" label="CHEST"></v-combobox>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-combobox readonly small-chips dense outlined multiple prepend-inner-icon="mdi-calendar-range" v-model="reminder.target_body.arm" :items="reminder.items" label="ARM"></v-combobox>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-combobox readonly small-chips dense outlined multiple prepend-inner-icon="mdi-calendar-range" v-model="reminder.target_body.leg" :items="reminder.items" label="LEG"></v-combobox>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-combobox readonly small-chips dense outlined multiple prepend-inner-icon="mdi-calendar-range" v-model="reminder.target_body.shoulder_back" :items="reminder.items" label="SHOULDER & BACK"></v-combobox>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-dialog>
        <v-dialog v-model="reminder.edit.modal" transition="dialog-bottom-transition" fullscreen hide-overlay persistent>
            <v-toolbar color="grey darken-4" dark>
                Set Reminder
                <v-spacer></v-spacer>
                <v-btn icon dark @click="reminder.edit.modal = false"><v-icon>mdi-close</v-icon></v-btn>
            </v-toolbar>
            <v-card>
                <v-card-text class="pa-10">
                    <v-form ref="form" @submit.prevent="setReminder" lazy-validation>
                        <h4 class="mb-3">Set time for daily reminder</h4>
                        <v-row no-gutters>
                            <v-col cols="12" sm="4">
                                <v-text-field v-model="reminder.edit.time" :rules="reminder.edit.rules.time" type="time" label="Set Time" outlined dense></v-text-field>
                            </v-col>
                        </v-row>
                        <h4 class="mb-3">Set day for each target body</h4>
                        <v-row no-gutters>
                            <v-col cols="12" sm="6">
                                <v-combobox small-chips deletable-chips hide-selected dense outlined multiple prepend-inner-icon="mdi-calendar-range" v-model="reminder.edit.target_body.abs" :rules="reminder.edit.rules.abs" :items="reminder.edit.items" label="ABS"></v-combobox>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-combobox small-chips deletable-chips hide-selected dense outlined multiple prepend-inner-icon="mdi-calendar-range" v-model="reminder.edit.target_body.chest" :rules="reminder.edit.rules.chest" :items="reminder.edit.items" label="CHEST"></v-combobox>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-combobox small-chips deletable-chips hide-selected dense outlined multiple prepend-inner-icon="mdi-calendar-range" v-model="reminder.edit.target_body.arm" :rules="reminder.edit.rules.arm" :items="reminder.edit.items" label="ARM"></v-combobox>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-combobox small-chips deletable-chips hide-selected dense outlined multiple prepend-inner-icon="mdi-calendar-range" v-model="reminder.edit.target_body.leg" :rules="reminder.edit.rules.leg" :items="reminder.edit.items" label="LEG"></v-combobox>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-combobox small-chips deletable-chips hide-selected dense outlined multiple prepend-inner-icon="mdi-calendar-range" v-model="reminder.edit.target_body.shoulder_back" :rules="reminder.edit.rules.shoulder_back" :items="reminder.edit.items" label="SHOULDER & BACK"></v-combobox>
                            </v-col>
                        </v-row>

                        <v-btn type="submit" dark depressed color="green" small class="float-right">Submit</v-btn>
                        <v-btn dark depressed color="red" small class="float-right mr-5" @click="resetForm">Reset</v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    export default {
        name: "SetReminder",
        created() {
            this.initiliaze();
        },
        data() {
            return {
                reminder: {
                    time: "",
                    target_body: {
                        abs: [],
                        chest: [],
                        arm: [],
                        leg: [],
                        shoulder_back: [],
                    },
                    items: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    modal: true,
                    edit: {
                        modal: false,
                        rules: {
                            time: [(v) => !!v || "Time is required"],
                            abs: [(v) => !!v || "Required Field", (v) => v.length <= 2 || "Must choose at least one day and no more than two days."],
                            chest: [(v) => !!v || "Required Field", (v) => v.length <= 2 || "Must choose at least one day and no more than two days."],
                            arm: [(v) => !!v || "Required Field", (v) => v.length <= 2 || "Must choose at least one day and no more than two days."],
                            leg: [(v) => !!v || "Required Field", (v) => v.length <= 2 || "Must choose at least one day and no more than two days."],
                            shoulder_back: [(v) => !!v || "Required Field", (v) => v.length <= 2 || "Must choose at least one day and no more than two days."],
                        },
                        time: "",
                        target_body: {
                            abs: [],
                            chest: [],
                            arm: [],
                            leg: [],
                            shoulder_back: [],
                        },
                        items: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    },
                },
            };
        },
        methods: {
            initiliaze() {
                const hours = parseInt(localStorage.getItem("time_reminder").split(/:| /)[0]) < 10 ? "0" + localStorage.getItem("time_reminder").split(/:| /)[0] : localStorage.getItem("time_reminder").split(/:| /)[0];
                const minutes = localStorage.getItem("time_reminder").split(/:| /)[1];
                const format = localStorage.getItem("time_reminder").split(/:| /)[2];
                this.reminder.time = format == "PM" ? parseInt(hours) + 12 + ":" + minutes : hours + ":" + minutes;

                this.reminder.target_body.abs = localStorage.getItem("abs_reminder").split(",") !== "" ? localStorage.getItem("abs_reminder").split(",") : [];
                this.reminder.target_body.chest = localStorage.getItem("chest_reminder").split(",") !== "" ? localStorage.getItem("chest_reminder").split(",") : [];
                this.reminder.target_body.arm = localStorage.getItem("arm_reminder").split(",") !== "" ? localStorage.getItem("arm_reminder").split(",") : [];
                this.reminder.target_body.leg = localStorage.getItem("leg_reminder").split(",") !== "" ? localStorage.getItem("leg_reminder").split(",") : [];
                this.reminder.target_body.shoulder_back = localStorage.getItem("shoulder_back_reminder").split(",") !== "" ? localStorage.getItem("shoulder_back_reminder").split(",") : [];

                this.reminder.edit.time = format == "PM" ? parseInt(hours) + 12 + ":" + minutes : hours + ":" + minutes;

                this.reminder.edit.target_body.abs = localStorage.getItem("abs_reminder").split(",") !== "" ? localStorage.getItem("abs_reminder").split(",") : [];
                this.reminder.edit.target_body.chest = localStorage.getItem("chest_reminder").split(",") !== "" ? localStorage.getItem("chest_reminder").split(",") : [];
                this.reminder.edit.target_body.arm = localStorage.getItem("arm_reminder").split(",") !== "" ? localStorage.getItem("arm_reminder").split(",") : [];
                this.reminder.edit.target_body.leg = localStorage.getItem("leg_reminder").split(",") !== "" ? localStorage.getItem("leg_reminder").split(",") : [];
                this.reminder.edit.target_body.shoulder_back = localStorage.getItem("shoulder_back_reminder").split(",") !== "" ? localStorage.getItem("shoulder_back_reminder").split(",") : [];
            },
            // adjustDays(value) {
            //     this.reminder.edit.items = this.reminder.edit.items.filter((item) => {
            //         return !value.includes(item);
            //     });

            //     // this.reminder.edit.items =
            // },
            setReminder() {
                if (this.$refs.form.validate()) {
                    const hours = parseInt(this.reminder.edit.time.split(":")[0]);
                    const minutes = parseInt(this.reminder.edit.time.split(":")[1]);
                    const format = hours > 12 ? "PM" : "AM";
                    this.reminder.edit.time = `${hours > 12 ? hours - 12 : hours}:${minutes < 10 ? "0" + minutes : minutes} ${format}`;

                    localStorage.setItem("abs_reminder", this.reminder.edit.target_body.abs);
                    localStorage.setItem("chest_reminder", this.reminder.edit.target_body.chest);
                    localStorage.setItem("arm_reminder", this.reminder.edit.target_body.arm);
                    localStorage.setItem("leg_reminder", this.reminder.edit.target_body.leg);
                    localStorage.setItem("shoulder_back_reminder", this.reminder.edit.target_body.shoulder_back);
                    localStorage.setItem("time_reminder", this.reminder.edit.time);
                    this.reminder.edit.modal = false;
                    this.initiliaze();
                }
            },
            resetForm() {
                this.$refs.form.reset();
            },
        },
    };
</script>
