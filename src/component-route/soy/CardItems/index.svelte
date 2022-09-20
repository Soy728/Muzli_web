<script lang="ts">
	export let main: boolean = false;
</script>

<div class="grid-container" data-main={main}>
	<slot />
</div>

<style lang="scss">
	.grid-container {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: 20rem 20rem;
		grid-gap: 2rem;
	}

	:global(.grid-container[data-main='true'] > div:first-child) {
		grid-column-start: 1;
		grid-column-end: 3;
		grid-row-start: 1;
		grid-row-end: 3;
	}
</style>
	