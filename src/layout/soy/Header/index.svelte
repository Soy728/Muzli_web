<script lang="ts">
	import { Button } from '@src/components/soy/button';
	import { SearchBar } from '@src/components/soy/search';
	const text: string = 'B';
	const placeholder: string = 'Search on Muzli';
	const icon: string = '아이콘';
</script>

<div class="header">
	<div class="logo-container">
		<Button {text} size="medium" variant="none" />
	</div>
	<div class="search-container">
		<SearchBar {placeholder} {icon} />
	</div>
	<div class="right-container">
		<Button {text} size="medium" variant="outlined" />
		<Button {text} size="medium" variant="outlined" />
		<Button {text} size="medium" variant="outlined" />
		<Button {text} size="medium" variant="outlined" />
	</div>
</div>

<style lang="scss">
	.header {
		background-color: aqua;
		height: 6.5rem;
		position: fixed;
		z-index: 1;
		width: 100%;
		display: flex;
		justify-content: space-between;

		.search-container {
			padding-top: 2rem;
		}
	}
</style>
