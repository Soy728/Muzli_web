<script lang="ts">
	import { Button } from '@src/components/soy/button';
</script>

<div class="container">
	<div class="left-container">
		<Button icon="/soy/asset/icon/bookmark_icon.svg" size="small" variant="outlined" />
		<Button icon="/soy/asset/icon/bookmark_icon.svg" size="small" variant="none" />
	</div>
	<div class="right-container">
		<p>2.4K</p>
	</div>
</div>

<style lang="scss">
	.container {
		background-color: rgb(182, 182, 182, 0.3);
		display: flex;
		position: relative;
		height: 8rem;

		.left-container {
			position: absolute;
			left: 0;
		}
		.right-container {
			position: absolute;
			right: 0;
		}
	}
</style>
