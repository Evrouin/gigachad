<template>
    <div>
        <v-app-bar app color="grey darken-4" dark>
            <div class="d-flex align-center">
                <router-link style="text-decoration: none; color: inherit;" to="/home">
                    <h2>gigachad</h2>
                </router-link>
            </div>
            <v-spacer></v-spacer>
            <v-menu>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn class="mr-2" small icon v-bind="attrs" v-on="on"><v-icon>{{ target_body.length === 0 ? 'mdi-bell' : 'mdi-bell-badge' }}</v-icon></v-btn>
                </template>
                <v-list>
                    <v-list-item>
                        {{ target_body.length === 0 ? 'No new notifications' : target_body.length > 1 ? 'You target body for today are ' + target_body.join(', ') : 'You target body for today is ' + target_body[0] }}
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </v-app-bar>
        <v-navigation-drawer temporary v-model="drawer" fixed>
            <v-list nav dense>
                <v-list-item-group v-model="group">
                    <div v-for="(item, i) in items" :key="i">
                        <v-list-item :to="item.link">
                            <v-list-item-title><v-icon>{{ item.icon }}</v-icon>&nbsp;&nbsp;{{ item.text }}</v-list-item-title>
                        </v-list-item>
                    </div>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
    export default {
        name: "Navbar",
        props: ["target_body"],
        watch: {
            group() {
                this.drawer = false;
            },
        },
        data() {
            return {
                drawer: false,
                group: null,
                items: [
                    { icon: "mdi-account", text: "Profile", link: "/profile" },
                    // { icon: 'mdi-chart-bar', text: 'Report', link: '/report' },
                    { icon: "mdi-clock", text: "Reminder", link: "/reminder" },
                    { icon: "mdi-food", text: "Dietary Tips", link: "/diet" },
                    // { icon: 'mdi-cog', text: 'Settings', link: '/settings' },
                    { icon: "mdi-restart", text: "Restart Progess", link: "/restart" },
                ],
                notifications: [],
            };
        },
        methods: {
            test() {
                console.log("test");
            },
        },
    };
</script>
