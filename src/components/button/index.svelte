<script lang="ts">
	import type { ButtonProps, ButtonSize } from '.';

	import './style.scss';
	export let text: string;
	// export let props: ButtonProps;
	// export let size: ButtonSize;
</script>

<div class="name">
	{text}
	<!-- {props.text} -->
</div>

<style lang="scss" global>
	.name {
		color: red;
	}
</style>
