export const getStrapiMedia = url => {
	if (url === null) {
		return null;
	}

	if (url.startsWith('http')) {
		return url;
	}
	return `${
		process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'
	}${url}`;
};
