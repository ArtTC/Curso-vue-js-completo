<template>
	<div id="app">
        <v-app>
            <router-view name="menu"></router-view>
            <!-- <v-main> -->
                <!-- <v-container fluid>
                </v-container> -->
                <div class="content">
                    <router-view></router-view>
                </div>
            <!-- </v-main> -->

            <v-footer app>
            </v-footer>
        </v-app>
	</div>
</template>

<script>
export default {
	data() {
		return {
		}
	}
}
</script>

<style>

    .content {
        padding-top: 2rem;
        padding-left: 8rem;
        padding-right: 8rem;
    }

</style>

