<script lang="ts">

    export let data
const pros : any = data.res
const { Component} = data
</script>
<section>
    {#each pros as pro  (pro.id)}
         <Component product={pro} />

         {/each}
</section>
