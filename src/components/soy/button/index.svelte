<script lang="ts">
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';

	import type { ButtonSize, ButtonVariant } from '.';
	export let text: string = '';
	export let icon: string = '';
	export let variant: ButtonVariant;
	export let size: ButtonSize;
	const dispatch = createEventDispatcher<{ click: MouseEvent }>(); //generic -> 타입
</script>

<div class="button" data-size={size} data-variant={variant} on:click={(e) => dispatch('click', e)}>
	{#if icon !== ''}
		<div class="icon">
			<img src={icon} alt="" />
		</div>
	{/if}
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
		min-width: 4rem; //동그래짐!!!!! 편안 그 잡채
		min-height: 4rem;
		cursor: pointer;

		&:hover {
			background: rgba(0, 0, 0, 0.1);
		}
		.icon {
			padding-top: 0.5rem;

			img {
				width: 1.6rem;
				height: 1.6rem;
			}
		}

		&[data-size='small'] {
			font-size: 0.8rem;
			border-radius: 2rem;
			padding: 0.4rem 0.7rem;
		}
		&[data-size='medium'] {
			font-size: 1.4rem;
			border-radius: 2rem;
			padding: 0.5rem 1rem;
		}
		&[data-size='large'] {
			font-size: 1.8rem;
			border-radius: 3rem;
			padding: 0.5rem 1.3rem;
		}

		&[data-variant='none'] {
			border: 0;
		}
		&[data-variant='contained'] {
			border: 0;
			background-color: var(--backgroundColor);
		}
		&[data-variant='outlined'] {
			border: 0.05rem solid rgb(83, 83, 83, 0.4);
		}
	}
</style>
