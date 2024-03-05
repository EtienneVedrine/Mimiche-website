<script>
import { onMount } from 'svelte';

let products = [];

onMount(async () => {
    const res = await fetch(`http://localhost:8055/content/product`);
    products = await res.json();
});

    // const getProducts = async() => {
	// 	const rest = await fetch("http://localhost:8055/admin/content/product");
	// 	const data = await res.json();
	// 	console.log(data);
	// 	return data;
	// };

	
</script>

<!-- {#await getProducts()}
{:then data}
    {JSON.stringify(data)}
    {/await}
-->

<main>
    Voici la page sur les miches
</main>