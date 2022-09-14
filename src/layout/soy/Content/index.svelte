<script lang="ts">
	import { CardItems } from '@src/component-route/soy/CardItems';
	import { Card } from '@src/components/soy/Card';
	let main: boolean = true;
</script>

<div class="content-container">
	<div class="main-content">
		<CardItems {main}>
			<Card>
				<div slot="card-header">Card Name</div>
				<div slot="card-content">Card content</div>
				<div slot="card-footer">Card Footer</div>
			</Card>
			<Card />
			<Card />
			<Card />
			<Card />
		</CardItems>
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
		padding: 0 13.5rem 20rem 13.5rem;
		.main-content {
			padding-top: 20rem;
		}
	}
</style>
