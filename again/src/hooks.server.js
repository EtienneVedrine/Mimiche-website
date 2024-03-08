// Pour que les headers nécessaires pour fetch du JS soient retournés par le serveur SvelteKit


export async function handle({ event, resolve }) {
	return await resolve(event, {
		filterSerializedResponseHeaders: (key, value) => {
			return key.toLowerCase() === 'content-type';
		},
	});
}