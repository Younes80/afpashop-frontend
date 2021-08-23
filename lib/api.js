export const getStrapiURL = (path = '') => {
	return `${
		process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'
	}${path}`;
};

export const fetchAPI = async path => {
	const req = getStrapiURL(path);
	const res = await fetch(req);
	const data = await res.json();

	return data;
};
