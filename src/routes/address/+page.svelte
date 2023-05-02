<script>
    let address= ''
    export let data
const {list } = data
</script>
<h1>select</h1>

<select bind:value={address}>
<option value="">pick</option>
{#each list as item }
     <option value={item}>{item}</option>
{/each}
</select>