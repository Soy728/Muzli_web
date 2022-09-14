<script lang="ts">
	export let main: boolean = false;
</script>

{#if main === true}
	<div class="main-grid-container">
		<slot />
	</div>
{:else}
	<div class="grid-container" >
		<slot />
	</div>
{/if}

<style lang="scss">
	.main-grid-container,
	.grid-container {
		display: grid;
		border: solid 1px;
		grid-template-columns: repeat(4, 1fr);

		grid-gap: 2rem;
	}

	:global(.main-grid-container > div:first-child) {
		grid-column-start: 1;
		grid-column-end: 3;
		grid-row-start: 1;
		grid-row-end: 3;
	}
</style>
