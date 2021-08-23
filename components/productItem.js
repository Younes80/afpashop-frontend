import NextImage from 'next/image';
import Link from 'next/link';
import { getStrapiMedia } from '../lib/medias';

const productItem = ({ product }) => {
	const truncate = input =>
		input.length > 5 ? `${input.substring(0, 120)}...` : input;
	return (
		<div>
			<div className="max-w-md mx-auto my-3 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
				<div className="md:flex items-center">
					<div className="md:flex-shrink-0 relative">
						<NextImage
							// loader={getStrapiMedia(product.image.formats.thumbnail.url)}
							src={getStrapiMedia(product.image.formats.thumbnail.url)}
							width={product.image.formats.thumbnail.width}
							height={product.image.formats.thumbnail.height}
							objectFit="contain"
							alt={product.name}
						/>
					</div>
					<div className="p-8">
						<Link href="/products/[slug]" as={`/products/${product.slug}`}>
							<a className="block mt-1 text-lg leading-tight font-medium text-greenAfpa hover:underline">
								{product.name}
							</a>
						</Link>
						<p className="mt-2 text-gray-500">{truncate(product.content)}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default productItem;
