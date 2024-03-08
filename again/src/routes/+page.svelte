<!-- Homepage -->

<script>
	// import load function 
	/** @type {import('./$types').PageData} */
	export let data;

	import portrait2 from '$lib/images/portrait2.jpg';
	import bob from '$lib/images/Dessin levain.jpg';


</script>

<svelte:head>
	<title>Mimiche</title>
	<meta name="description" content="Homepage" />
</svelte:head>

<!-- Access the values of the load function -->
<h1>{data.global.title}</h1>
<p>{data.global.description}</p>

<main>


		<!-- Section 1 -->
	<section id="section1" class="grid place-items-center sm:grid-cols-2">
		<!-- Présentation -->
		<div class=" border p-6">
			Texte de présentation. Texte de présentation. Texte de présentation. Texte de présentation.
			Texte de présentation. Texte de présentation. Texte de présentation. Texte de présentation.
			Texte de présentation. Texte de présentation. Texte de présentation. Texte de présentation.
			Texte de présentation. Texte de présentation. Texte de présentation. Texte de présentation.
			Texte de présentation. Texte de présentation. Texte de présentation.
		</div>

		<img src={portrait2} alt="portrait" class="max-w-80 p-2 sm:max-w-96" />

		<img src={bob} alt="bobLeLevain" class="mx-2 max-w-80 p-2 sm:max-w-96" />
		<div class="border p-6">
			Voici bob le levain! Voici bob le levain! Voici bob le levain! Voici bob le levain! Voici bob
			le levain! Voici bob le levain! Voici bob le levain! Voici bob le levain! Voici bob le levain!
			Voici bob le levain! Voici bob le levain! Voici bob le levain! Voici bob le levain! Voici bob
			le levain! Voici bob le levain! Voici bob le levain! Voici bob le levain! Voici bob le levain!
		</div>
	</section>

	<!-- Section 2 -->
	<section id="section2" class="bg-amber-300">
		<nav>
			<ul id="main-list" role="menu" aria-labelledby="menubutton">
				<li role="menuitem">
					<a href="/miches" class="" aria-label="Page produit sur les miches" use:link
						>MICHES
					</a>
				</li>
				<li role="menuitem">
					<a href="/toasties" class="" aria-label="Page produit sur les toasties" use:link
						>TOASTIES
					</a>
				</li>
				<li role="menuitem">
					<a href="/brioches" class="" aria-label="Page produit sur les brioches" use:link
						>BRIOCHES
					</a>
				</li>
				<li role="menuitem">
					<a href="/patisseriescroustillantes" class="" aria-label="Page produit sur les pâtisseries croustillantes" use:link
						>PATISSERIES CROUSTILLANTES
					</a>
				</li>
				<li role="menuitem">
					<a href="/patisseriesmoelleuses" class="" aria-label="Page produit sur les pâtisseries moelleuses" use:link
						>PATISSERIES MOELLEUSES
					</a>
				</li>
				<li role="menuitem">
					<a href="/tartes&tartelettes" class="" aria-label="Page produit sur les tartes et tartelettes" use:link
						>TARTES ET TARTELETTES
					</a>
				</li>
				<li role="menuitem">
					<a href="/autres" class="" aria-label="Autres" use:link
						>AUTRES
					</a>
				</li>
			</ul>
		</nav>
	</section>
</main>
