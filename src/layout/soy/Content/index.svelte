<script lang="ts">
	import { CardItems } from '@src/component-route/soy/cardItems';
	import { Card } from '@src/components/soy/card';
	import { Navigation } from '@src/layout/soy/navigation';
	let main: boolean = true;
	let src: string = '';
</script>

<div class="content-container">
	<div class="main-content">
		<CardItems {main}>
			<Card img="/soy/asset/image/main.png">
				<div slot="card-header">Card Name 1</div>
				<div slot="card-content">Card content 1</div>
			</Card>
			<Card img="/soy/asset/image/main.png">
				<div slot="card-header">Card Name 2</div>
				<div slot="card-content">Card content 2</div>
			</Card>
			<Card img="/soy/asset/image/main.png">
				<div slot="card-header">Card Name 3</div>
				<div slot="card-content">Card content 3</div>
			</Card>
			<Card img="/soy/asset/image/main.png">
				<div slot="card-header">Card Name 4</div>
				<div slot="card-content">Card content 4</div>
			</Card>
			<Card img="/soy/asset/image/main.png">
				<div slot="card-header">Card Name 5</div>
				<div slot="card-content">Card content 5</div>
			</Card>
		</CardItems>
	</div>
	<div class="navigation">
		<Navigation />
	</div>
	<div class="sub-content">
		<CardItems>
			<Card img="/soy/asset/image/main.png" />
			<Card img="/soy/asset/image/main.png" />
			<Card img="/soy/asset/image/main.png" />
			<Card img="/soy/asset/image/main.png" />
			<Card img="/soy/asset/image/main.png" />
			<Card img="/soy/asset/image/main.png" />
			<Card img="/soy/asset/image/main.png" />
			<Card img="/soy/asset/image/main.png" />
		</CardItems>
	</div>
</div>

<style lang="scss">
	.content-container {
		max-width: 80vw;
		margin-left: auto;
		margin-right: auto;
		padding-top: 18rem;
	}
	.navigation {
		padding-top: 5rem;
	}
	.sub-content {
		padding-top: 1rem;
	}
</style>
