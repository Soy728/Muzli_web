<script lang="ts">
	import { Button } from '@src/components/soy/button';
	import { SearchBar } from '@src/components/soy/search';
	const placeholder: string[] = ['Search on Muzli', 'or Google'];
</script>

<div class="header">
	<div class="logo-container">
		<Button
			style="background-image:url(/soy/asset/icon/muzli_icon.svg); width:100%"
			size="large"
			variant="none"
		/>
	</div>

	<div class="search-container">
		<SearchBar {placeholder} icon="/soy/asset/icon/search_icon.svg" />
	</div>
	<div class="right-container">
		<Button text="Submit your work" size="medium" variant="outlined" />
		<Button
			style="background-image:url(/soy/asset/icon/muzli_icon.svg);"
			size="medium"
			variant="outlined"
		/>
		<Button
			style="background-image:url(/soy/asset/icon/muzli_icon.svg);"
			size="medium"
			variant="outlined"
		/>
		<Button text="소희" size="medium" variant="contained" style="background-color:pink" />
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
		align-items: center;
		box-shadow: 0 0.1rem 3rem 0 rgb(145 145 145 / 20%);

		.logo-container {
			display: flex;
			width: 7.5rem;
			height: 100%;
			border-right: solid 0.1px rgba(0, 0, 0, 0.2);
		}

		.search-container {
			display: flex;
			flex: 1 0;
			min-width: 20rem;
			justify-content: center;
			height: 100%;
			align-items: center;
			padding-left: 23rem;
		}

		.right-container {
			display: flex;
			width: 29rem;
			height: 100%;
			justify-content: space-between;
			flex-wrap: wrap;
			align-items: center;
		}
	}
</style>
