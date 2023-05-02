<script lang="ts">
    export let product : import("../../lib/interface").IPro;
</script>
<a href={`/products/${product.id}`}><h1>{product.title}</h1></a>
<p>{product.description}</p>

<hr>