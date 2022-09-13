<script lang="ts">
	import type { ButtonSize, ButtonVariant } from '.';
	export let text: string = '';
	export let variant: ButtonVariant;
	export let size: ButtonSize;
</script>

<div class="button" button-size={size} button-variant={variant}>
	{text}
</div>

<style lang="scss">
	.button {
		margin: 0.5rem;
		text-align: center;
		background-color: transparent;
		border-radius: 0.5rem;

		&[button-size='small'] {
			width: 1rem;
			height: 1rem;
			font-size: 1rem;
			border-radius: 5px;
		}
		&[button-size='medium'] {
			width: 2rem;
			height: 2rem;
			font-size: 2rem;
		}
		&[button-size='large'] {
			width: 3rem;
			height: 3rem;
			font-size: 3rem;
		}

		&[button-variant='none'] {
			border: 0;
		}
		&[button-variant='contained'] {
			border: 0;
			background-color: var(--backgroundColor);
		}
		&[button-variant='outlined'] {
			border: 0.05rem solid rgb(83, 83, 83, 0.4);
		}
	}
</style>
