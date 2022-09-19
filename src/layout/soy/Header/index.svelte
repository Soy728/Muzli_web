<script lang="ts">
	import { Button } from '@src/components/soy/button';
	import { SearchBar } from '@src/components/soy/search';
	const placeholder: string[] = ['Search on Muzli', 'or Google'];
</script>

<div class="header">
	<div class="logo-container">
		<Button
			style="background-image:url(/soy/asset/icon/muzli_icon.svg);"
			size="large"
			variant="none"
		/>
		<div class="line" />
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
		<Button text="소희" size="medium" variant="contained" --backgroundColor="pink" />
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
		align-items: center; //가운데 정렬

		box-shadow: 0 0.1rem 3rem 0 rgb(145 145 145 / 20%);
		.logo-container {
			display: flex;
			width: 9rem;
			height: 100%;
			padding: 0rem 1rem;

			.line {
				margin-left: 1rem;
				background-color: rgba(0, 0, 0, 0.1);
				width: 0.1rem;
				height: 100%;
			}
		}

		.search-container {
			flex: 1 0;
			max-width: 65rem;
			min-width: 20rem;
			padding-left: 20rem;
		}

		.right-container {
			display: flex;
			width: 30rem;
			height: 5rem;
			justify-content: space-between; //내일또보기!
			flex-wrap: wrap;
		}
	}
</style>
