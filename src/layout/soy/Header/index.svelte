<script lang="ts">
	import { Button } from '@src/components/soy/button';
	import { SearchBar } from '@src/components/soy/search';
	const text: string = 'button';
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
		<Button text="Submit your work" size="medium" variant="outlined" />
		<Button {text} size="medium" variant="outlined" />
		<Button {text} size="medium" variant="outlined" />
		<Button {text} size="medium" variant="outlined" />
	</div>
</div>

<style lang="scss">
	.header {
		background-color: white;
		height: 6.5rem;
		position: fixed;
		z-index: 1;
		width: 100%;
		display: flex;
		justify-content: space-between;
		box-shadow: 0 0.1rem 3rem 0 rgb(145 145 145 / 20%);
		.logo-container {
			width: 7.5rem;
		}
		.search-container {
			width: calc(100% - 37.5rem);
			max-width: 40rem;
			// padding: 1.5rem 0rem 0rem 9rem;
		}

		.right-container {
			display: flex;
			width: 30rem;
		}
	}
</style>
