<script>
	import MimiSandwicherie from '$lib/images/Mimi sandwicherie.png';
</script>

<header class="grid sm:grid-cols-3 gap-3 items-center bg-yellow-100 border-solid border border-black ">

	<div class="mx-auto">
		<h2 class="font-bold">MIMICHE</h2>
	</div>

	<!-- Logo -->
	<div class="max-w-96 mx-auto">
	<img src={MimiSandwicherie} alt="logo"/>
	</div>

	<div class="mx-auto">
		<h2 class="font-bold">MARSEILLE</h2>
	</div>

	<!-- Contacts -->
	<div class=" sm:grid-cols-subgrid  sm:col-span-2 p-2 ">
		<span class="sm:mx-4 hover:underline">mimiche.marseille@gmail.com</span>
	</div>

	<div class="sm:grid-cols-subgrid  p-2">
		<span class="sm:mx-4 hover:underline">mimiche.marseille</span>
	</div>

</header>
