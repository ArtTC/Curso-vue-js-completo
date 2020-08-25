<template>
	<div id="app">
		<!-- <h1>Stock Trader</h1> -->
		<router-view name="menu"></router-view>
        <v-container fluid>
            <!-- <v-row>
                <v-col
                    cols="12"
                    sm="6"
                    class="py-2"
                > -->
					<router-view></router-view>
                <!-- </v-col>
            </v-row> -->
        </v-container>
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

</style>

