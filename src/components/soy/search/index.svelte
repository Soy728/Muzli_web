<script lang="ts">
	export let icon: string = '';
	export let placeholder: string = '';
</script>

<div class="searchbar-container">
	<i class="icon-search">{icon}</i>
	<input type="text" {placeholder} data-main />
	<input type="text" {placeholder} data-sub />
</div>

<style lang="scss">
	.searchbar-container {
		display: flex; //이해안감
		flex: 1 0; // 이해안감
		box-sizing: border-box;
		border-radius: 3rem;
		padding: 1rem 1rem;
		background-color: #575764;
		align-items: center; //이해안감
		justify-content: center; //이해안감

		height: 4rem;
		position: relative;

		i {
			position: absolute;
			left: 1rem;
		}

		input {
			position: absolute;
			border: none;
			background-color: #f6f6f7;
			height: 100%;
			&[data-main] {
				left: 3.5rem;
				width: 60%;
			}

			&[data-sub] {
			}
			&:active,
			&:focus {
				border: none;
				outline: none;
			}
		}
	}
</style>
