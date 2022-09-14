<script lang="ts">
	export let icon: string = '';
	export let placeholder: string = '';
</script>

<div class="searchbar-container">
	<i class="icon-search">{icon}</i>
	<input type="text" {placeholder} />
</div>

<style lang="scss">
	.searchbar-container {
		border-radius: 3rem;
		padding: 0.5rem 1rem;
		background-color: white;
		width: 30rem;

		input {
			border: none;
		}
	}
</style>
