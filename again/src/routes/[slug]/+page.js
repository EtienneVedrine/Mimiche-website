// Page sur les miches


/** @type {import('./$types').PageLoad} */
import getDirectusInstance from '$lib/directus';
import { readItem } from '@directus/sdk';

// We use the Directus SDK to read the collection//
export async function load({ fetch, params }) {
	const directus = getDirectusInstance(fetch)
		return { category: await directus.request(readItem('category', params.slug))}}