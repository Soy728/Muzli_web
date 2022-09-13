<script lang="ts">
	import { Button } from '../components/button';
	const text: string = 'A';
</script>

<Button {text} size="small" variant="none" />
<Button {text} size="medium" variant="contained" --backgroundColor="gray" />
<Button {text} size="large" variant="outlined" />
