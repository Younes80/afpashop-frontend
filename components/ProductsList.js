import ProductItem from './productItem';

const ProductsList = ({ products }) => {
	return (
		<>
			<h1 className="text-5xl text-center py-10">
				Découvrez tous nos formations
			</h1>
			{products.map(product => (
				<ProductItem key={product.id} product={product} />
			))}
		</>
	);
};

export default ProductsList;
