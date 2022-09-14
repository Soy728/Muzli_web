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
		box-sizing: border-box;
		border-radius: 3rem;
		padding: 1rem 1rem;
		background-color: #f6f6f7;
		width: 30vw;
		height: 4rem;
		position: relative;

		i {
			position: absolute;
		}

		input {
			border: none;
			background-color: #f6f6f7;
			padding-left: 1rem;

			width: 100%;
			height: 100%;

			&:active,
			&:focus {
				border: none;
				outline: none;
			}
		}
	}
</style>
