<template>
    <v-toolbar>
        <!-- <v-app-bar-nav-icon name="icon"></v-app-bar-nav-icon> -->

        <v-toolbar-title><strong>STOCK</strong>TRADER</v-toolbar-title>

        <v-btn value="left">
            <router-link tag="a" value="left" to="/" exact>Home</router-link>
        </v-btn>
        <v-btn value="left">
            <router-link tag="a" value="left" to="/portfolio">Portifolio</router-link>
        </v-btn>
        <v-btn value="left">
            <router-link tag="a" value="left" to="/stocks">Ações</router-link>
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
    </v-toolbar>
    <!-- <v-card
        color="grey lighten-4"
        flat
        height="200px"
        tile
    >
    </v-card> -->
    <!-- <v-toolbar  activator="dark">
        <v-toolbar-title></v-toolbar-title> 
        <v-btn-toggle
        v-model="text"
        tile
        color="deep-purple accent-3"
        group
        >
        </v-btn-toggle>
    </v-toolbar> -->
</template>

<script>

export default {

}
</script>

<style>

</style>
