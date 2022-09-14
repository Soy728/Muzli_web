<script lang="ts">
	import { CardItems } from '@src/component-route/soy/CardItems';
	import { Card } from '@src/components/soy/Card';
	import { Navigation } from '@src/layout/soy/Navigation';
	let main: boolean = true;
</script>

<div class="content-container">
	<div class="main-content">
		<CardItems {main}>
			<Card>
				<div slot="card-header">Card Name 1</div>
				<div slot="card-content">Card content 1</div>
				<div slot="card-footer">Card Footer 1</div>
			</Card>
			<Card>
				<div slot="card-header">Card Name 2</div>
				<div slot="card-content">Card content 2</div>
				<div slot="card-footer">Card Footer 2</div>
			</Card>
			<Card>
				>
				<div slot="card-header">Card Name 3</div>
				<div slot="card-content">Card content 3</div>
				<div slot="card-footer">Card Footer 3</div>
			</Card>
			<Card>
				<div slot="card-header">Card Name 4</div>
				<div slot="card-content">Card content 4</div>
				<div slot="card-footer">Card Footer 4</div>
			</Card>
			<Card>
				<div slot="card-header">Card Name 5</div>
				<div slot="card-content">Card content 5</div>
				<div slot="card-footer">Card Footer 5</div>
			</Card>
		</CardItems>
	</div>
	<div class="navigation">
		<Navigation />
	</div>
	<div class="sub-content">
		<CardItems>
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</CardItems>
	</div>
</div>

<style lang="scss">
	.content-container {
		max-width: 80vw;
		margin-left: auto;
		margin-right: auto;
		padding-top: 20rem;
	}
</style>
