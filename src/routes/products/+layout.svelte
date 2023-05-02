<script>
    export let data
const feature = data.res
</script>
<slot />
<h2>{data.username}</h2>
{#each feature as item}
     <!-- content here -->
     <div class="">
    <h2>{item.title}</h2>
    <b>{item.price}</b>
    </div>
{/each}