import { fetchAPI } from '../../../lib/api';
import NextImage from 'next/image';
import Link from 'next/link';
import { getStrapiMedia } from '../../../lib/medias';

const product = ({ product }) => {
	// console.log(product.image);
	return (
		<div>
			<div className=" flex justify-center">
				<div className="max-w-prose">
					<div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
						<NextImage
							// loader={getStrapiMedia(product.image.formats.thumbnail.url)}
							className="rounded-t-lg"
							src={getStrapiMedia(product.image.url)}
							width={product.image.width}
							height={product.image.height}
							objectFit="contain"
							alt={product.name}
						/>
						<div className="py-6 px-8 rounded-lg bg-white">
							<h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">
								{product.name}
							</h1>
							<p className="text-gray-700 tracking-wide">{product.content}</p>
							<div className="flex justify-around rounded-lg text-center my-8">
								<Link href="/">
									<button className="py-3 px-6 text-white rounded-lg bg-gray-700 shadow-md hover:bg-gray-600 hover:shadow-lg transition duration-300 block md:inline-block">
										Back to homepage
									</button>
								</Link>
								<button className=" py-3 px-6 bg-greenAfpa text-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
									S'inscrire à la formation
								</button>
							</div>
						</div>
						<div className="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
							<span className="text-md text-greenAfpa">{product.price} €</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export async function getStaticPaths() {
	const products = await fetchAPI(`/products`);

	return {
		paths: products.map(product => ({
			params: {
				slug: product.slug,
			},
		})),
		fallback: false,
	};
}

export async function getStaticProps(context) {
	const product = await fetchAPI(`/products?slug=${context.params.slug}`);

	return {
		props: {
			product: product[0],
		},
		revalidate: 1,
	};
}

export default product;
