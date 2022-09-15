<script lang="ts">
	export let icon: string = '';
	export let placeholder: string[] = [];
</script>

<div class="searchbar-container">
	<img class="icon-search" src={icon} alt="" />
	<input type="text" placeholder={placeholder[0]} data-main />
	<input type="text" placeholder={placeholder[1]} data-sub />
</div>

<style lang="scss">
	.searchbar-container {
		display: flex; //이해안감
		flex: 1 0; // 이해안감
		box-sizing: border-box;
		border-radius: 3rem;
		background-color: #f6f6f7;
		align-items: center;
		justify-content: center;
		height: 4rem;
		position: relative;

		.icon-search {
			position: absolute;
			left: 1rem;
			width: 1.5rem;
			opacity: 0.3;
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
				right: 1.5rem;
				width: 20%;
				padding-left: 2rem;
				border-left: solid 0.1rem rgb(231, 231, 231);
			}
			&:active,
			&:focus {
				border: none;
				outline: none;
			}
		}
	}
</style>
