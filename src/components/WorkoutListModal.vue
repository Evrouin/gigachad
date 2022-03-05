<template>
    <v-dialog v-model="workoutlist.modal" width="800px" persistent>
        <v-toolbar color="grey darken-4" dark>
            {{ data.name }}
            <v-spacer></v-spacer>
            <v-btn dark small color="green darken-4" @click="openModal()"> START </v-btn>
            <v-btn icon dark @click="closeModal"><v-icon>mdi-close</v-icon></v-btn>
        </v-toolbar>
        <v-card>
            <v-card-text>
                <v-data-table class="pt-5" disable-filtering disable-sort dense hide-default-footer :items="data.workout_list" :headers="headers">
                    <template v-slot:[`item.name`]="{ item }">
                        <div>{{ item.name }}</div>
                    </template>
                </v-data-table>
            </v-card-text>
        </v-card>
        <WorkoutModal v-if="workout.modal" :data="data" v-on:updateModal="updateModal" />
    </v-dialog>
</template>

<script>
    import WorkoutModal from "../components/WorkoutModal.vue";
    export default {
        name: "WorkoutListModal",
        components: { WorkoutModal },
        data() {
            return {
                workoutlist: {
                    modal: false,
                },
                workout: {
                    modal: false,
                },
                headers: [
                    { text: "Workout Name", value: "name", sortable: false },
                    { text: "Description", value: "description", sortable: false, align: "center" },
                ],
            };
        },
        props: ["data"],
        created() {
            this.workoutlist.modal = true;
        },
        methods: {
            closeModal() {
                this.$emit("updateModal");
            },
            openModal() {
                this.workout.modal = true;
            },
            updateModal() {
                this.workout.modal = false;
            },
        },
    };
</script>
