// Page sur les miches


/** @type {import('./$types').PageLoad} */
import getDirectusInstance from '$lib/directus';
import { error } from '@sveltejs/kit';
import { readItem } from '@directus/sdk';

// We use the Directus SDK to read the collection//
export async function load({ fetch, params }) {
	const directus = getDirectusInstance(fetch)

		// return { category: await directus.request(readItem('category'))}}

		try {
			// Chargez les éléments de la catégorie en fonction des paramètres fournis
			const categoryItems = await directus.items('category').readMany({
				filter: {
					category_id: params.categoryId // Utilisez le paramètre `categoryId` pour filtrer les éléments par catégorie
				}
			});
			
			// Retournez les éléments de la catégorie chargés
			return { categoryItems };
		} catch (error) {
			// Gérez les erreurs éventuelles
			console.error('Erreur lors du chargement des éléments de la catégorie :', error);
			return { error: 'Une erreur s\'est produite lors du chargement des éléments de la catégorie.' };
		}
	}
