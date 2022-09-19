<script lang="ts">
	import { CardItems } from '@src/component-route/soy/cardItems';
	import { Card } from '@src/components/soy/card';
	import { Navigation } from '@src/layout/soy/navigation';
	import { Button } from '@src/components/soy/button';
	let main: boolean = true;
	let shared: string = '0';
	let watched: string = '0';
</script>

<div class="content-container">
	<div class="main-content">
		<CardItems {main}>
			<Card style="background-image:url(/soy/asset/image/main.png);" watched="1.3" shared="100">
				<div slot="card-header">Card Name 1</div>
				<div slot="card-content">Card content 1</div>
			</Card>
			<Card style="background-image:url(/soy/asset/image/main.png);" watched="2.5" shared="250">
				<div slot="card-header">Card Name 2</div>
				<div slot="card-content">Card content 2</div>
			</Card>
			<Card style="background-image:url(/soy/asset/image/main.png);">
				<div slot="card-header">Card Name 3</div>
				<div slot="card-content">Card content 3</div>
			</Card>
			<Card style="background-image:url(/soy/asset/image/main.png);">
				<div slot="card-header">Card Name 4</div>
				<div slot="card-content">Card content 4</div>
			</Card>
			<Card style="background-image:url(/soy/asset/image/main.png);">
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
			<Card style="background-image:url(/soy/asset/image/main.png);" />
			<Card style="background-image:url(/soy/asset/image/main.png);" />
			<Card style="background-image:url(/soy/asset/image/main.png);" />
			<Card style="background-image:url(/soy/asset/image/main.png);" />
			<Card style="background-image:url(/soy/asset/image/main.png);" />
			<Card style="background-image:url(/soy/asset/image/main.png);" />
			<Card style="background-image:url(/soy/asset/image/main.png);" />
			<Card style="background-image:url(/soy/asset/image/main.png);" />
		</CardItems>
	</div>
	<div class="footer-container" />
</div>

<style lang="scss">
	.content-container {
		max-width: 115rem;
		margin-left: auto;
		margin-right: auto;
		padding-top: 18rem;

		.navigation {
			padding-top: 5rem;
		}
		.sub-content {
			padding-top: 1rem;
		}

		.footer-container {
			height: 10rem;
		}
	}
</style>
