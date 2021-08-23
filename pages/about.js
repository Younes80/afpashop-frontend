import NextImage from 'next/image';
import logo from '../public/logo-afpa.png';
const about = () => {
	return (
		<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
			<div class="md:flex items-center">
				<div class="md:flex-shrink-0">
					<NextImage
						class=" w-full object-contain md:w-48"
						src={logo}
						width="300"
						height="88"
						alt="Man looking at item at a store"
					/>
				</div>
				<div class="p-8">
					<div class="uppercase tracking-wide text-sm text-greenAfpa font-semibold">
						Case study
					</div>
					<a
						href="#"
						class="block mt-1 text-lg leading-tight font-medium text-gray-800 hover:underline">
						Finding customers for your new business
					</a>
					<p class="mt-2 text-gray-500">
						Getting a new business off the ground is a lot of hard work. Here
						are five ideas you can use to find your first customers.
					</p>
				</div>
			</div>
		</div>
	);
};

export default about;
