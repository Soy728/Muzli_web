<script lang="ts">
	export let img: string = '';
	import { Sidebar } from '@src/component-route/soy/Sidebar';
	import { BottomBar } from '@src/component-route/soy/BottomBar';
</script>

<div class="card-container">
	<!-- <div class="image" style="background-image:url({img})" /> -->
	<img src={img} alt="" />
	<div class="sidebar-container">
		<Sidebar />
	</div>
	<div class="text-container">
		<slot name="card-header">header</slot>
		<slot name="card-content">content</slot>
	</div>
	<!-- <div class="bottom-container">
		<BottomBar />
	</div> -->
</div>

<style lang="scss">
	.card-container {
		width: 100%;
		height: 100%;
		position: relative;
		//border-radius: 50%; //border-radius가 먹질 않음.
		.sidebar-container {
			position: absolute;
			top: 0;
			right: 0;
			visibility: hidden;
		}

		&:hover .sidebar-container {
			visibility: visible;
		}

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}

		.text-container {
			position: absolute;
			bottom: 0;
			color: white;
			padding-left: 1rem;
			padding-bottom: 1rem;

			:global([slot='card-header']) {
				//slot selector로 쓰는 방법 알아두기
				font-size: 2rem;
			}
		}
	}
</style>
