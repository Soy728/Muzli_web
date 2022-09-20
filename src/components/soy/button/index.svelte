<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import type { ButtonSize, ButtonVariant } from '.';
	export let text: string = '';
	export let variant: ButtonVariant;
	export let size: ButtonSize;
	export let style: string = '';
	const dispatch = createEventDispatcher<{ click: MouseEvent }>();
</script>

<div
	class="button"
	{style}
	data-size={size}
	data-variant={variant}
	on:click={(e) => dispatch('click', e)}
>
	{#if text !== ''}
		<div class="text">
			{text}
		</div>
	{/if}
</div>

<style lang="scss">
	.button {
		margin: 0.5rem;
		align-items: center;
		justify-content: center;
		background-color: transparent;
		display: flex;
		min-width: 4rem;
		min-height: 4rem;

		cursor: pointer;
		background-size: 1.6rem;
		background-repeat: no-repeat;
		background-position: center;

		&:hover {
			opacity: 50%;
		}

		&[data-size='small'] {
			min-width: 2.5rem;
			min-height: 2.5rem;
			font-size: 0.8rem;
			height: 2.5rem;
			background-size: 1.3rem;
			border-radius: 2rem;
			padding: 0.4rem 0.7rem;
		}
		&[data-size='medium'] {
			font-size: 1.4rem;
			border-radius: 2rem;
			height: 4rem;
			background-size: 1.6rem;
			padding: 0.5rem 1rem;
		}
		&[data-size='large'] {
			font-size: 1.8rem;
			border-radius: 3rem;
			background-size: 2.5rem;
			padding: 0.5rem 1.5rem;
		}

		&[data-variant='none'] {
			border: 0;
		}
		&[data-variant='contained'] {
			border: 0;
		}
		&[data-variant='outlined'] {
			border: 0.05rem solid rgb(83, 83, 83, 0.4);
		}
	}
</style>
