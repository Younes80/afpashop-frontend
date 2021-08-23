import Head from 'next/head';
import ProductsList from '../components/ProductsList';
import { fetchAPI } from '../lib/api';

export default function Home({ products }) {
	return (
		<div>
			<Head>
				<title>AFPA - formation next.js</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ProductsList products={products} />
		</div>
	);
}

export async function getStaticProps() {
	const products = await fetchAPI('/products');
	return {
		props: {
			products,
		},
		revalidate: 1,
	};
}
