<script lang="ts">
	import { Button } from '../components/button';
	const text:string = "A";
</script>

<Button {text} size="small" variant="none"></Button>
<Button {text} size="medium" variant="contained" --backgroundColor=#bae8e8></Button>
<Button {text} size="large" variant="outlined" class = "icon-plus-lite"></Button>

