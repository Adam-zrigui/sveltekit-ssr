<script>
	import { page } from '$app/stores';
    export let data 
    const { username} = data
</script>
<p>{$page.data.banner || 'shit'}</p>
<div class="">welcome , {username}</div>
<slot />