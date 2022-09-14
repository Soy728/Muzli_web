<script lang="ts">
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';

	import type { ButtonSize, ButtonVariant } from '.';
	export let text: string = '';
	export let variant: ButtonVariant;
	export let size: ButtonSize;

	const dispatch = createEventDispatcher<{
		click: MouseEvent;
		submit: string;
	}>(); //generic -> 타입

	function handleClick(event: MouseEvent) {
		dispatch('click', event);
	}
</script>

<div class="button" button-size={size} button-variant={variant} on:click={handleClick}>
	{text}
</div>

<style lang="scss">
	.button {
		margin: 0.5rem;
		text-align: center;
		background-color: transparent;
		display: inline-block; //button context에 따라 크기 조정

		&[button-size='small'] {
			font-size: 0.8rem;
			border-radius: 2rem;
			padding: 0.4rem 0.7rem;
		}
		&[button-size='medium'] {
			font-size: 1.4rem;
			border-radius: 3rem;
			padding: 0.5rem 1rem;
		}
		&[button-size='large'] {
			font-size: 2rem;
			border-radius: 3rem;
			padding: 0.5rem 1.3rem;
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
