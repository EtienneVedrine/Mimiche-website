// To add JS elements or dynamic data


//This file's load function will be responsible to fetch the data on the client and on the server during Server Side Rendering.

/** @type {import('./$types').PageLoad} */
import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';

// We use the Directus SDK to read the global collection//
export async function load({ fetch }) {
	const directus = getDirectusInstance(fetch)
	return {
		global: await directus.request(readItems('global')),
	};
}