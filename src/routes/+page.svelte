<script lang="ts">
	import { Button } from '../components/button';
	const text: string = 'buttooon';
</script>

<Button {text} size="small" variant="none" />
<Button {text} size="small" variant="outlined" />
<Button {text} size="medium" variant="contained" --backgroundColor="gray" />
<Button {text} size="large" variant="outlined" />
