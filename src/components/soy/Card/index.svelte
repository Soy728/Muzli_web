<script lang="ts">
	export let style: string = '';
	import { Sidebar } from '@src/component-route/soy/sidebar';
	import { Button } from '@src/components/soy/button';
	export let watched: string = '0';
	export let shared: string = '0';
</script>

<div class="card-container" {style}>
	<div class="sidebar-container">
		<Sidebar />
	</div>
	<div class="content-container">
		<div class="text-container">
			<div class="text-header">
				<slot name="card-header">header</slot>
			</div>
			<div class="text-content">
				<slot name="card-content">content</slot>
			</div>
		</div>

		<div class="bottom-container">
			<div class="bottom-Lcontainer">
				<Button
					style="background-image:url(/soy/asset/icon/muzli_icon.svg); background-color:white"
					size="small"
					variant="contained"
				/>
				<Button
					style="background-image:url(/soy/asset/icon/muzli_icon.svg); background-color:white"
					size="small"
					variant="contained"
				/>
			</div>
			<div class="bottom-Rcontainer">
				<div class="watched">
					{watched}K
				</div>
				<div class="shared">
					{shared}
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	$bottom-content: 6rem; //bottom content의 height
	.card-container {
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		width: 100%;
		height: 100%;
		position: relative;
		border-radius: 1rem;
		overflow: hidden;
		.sidebar-container {
			position: absolute;
			top: 0;
			right: 0;
			opacity: 0;
			z-index: 1;
			transition: 0.5s;
		}

		&:hover .sidebar-container,
		.bottom-container {
			opacity: 100%;
		}

		&:hover .content-container {
			bottom: $bottom-content;
		}
		.content-container {
			position: absolute;
			bottom: 0;
			width: 100%;
			transition: bottom 0.5s;
			.text-container {
				color: white;
				padding-left: 1rem;
				padding-bottom: 1rem;

				.text-header {
					font-size: 2rem;
				}
			}
			.bottom-container {
				display: flex;
				flex-direction: row;
				width: 100%;
				height: $bottom-content;
				background-color: rgba(0, 0, 0, 0.3);
				position: absolute;
				bottom: -$bottom-content;
				align-items: center;
				transition: bottom 0.5s, opacity 0.5s;

				.bottom-Lcontainer {
					display: flex;
					position: absolute;
					padding-left: 1rem;
				}

				.bottom-Rcontainer {
					display: flex;
					position: absolute;
					right: 1rem;
					color: white;

					.shared {
						padding-left: 1rem;
					}
				}
			}
		}
	}
</style>
