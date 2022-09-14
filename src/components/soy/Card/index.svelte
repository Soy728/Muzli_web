<script lang="ts">
</script>

<div class="card-container">
	<slot name="card-header">header</slot>
	<slot name="card-content">content</slot>
	<slot name="card-footer">footer</slot>
</div>

<style lang="scss">
	.card-container {
		width: 100%;
		height: 100%;
		border: solid 1px;
	}
</style>
