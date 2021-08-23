import Navbar from './Navbar';

const Layout = ({ children }) => {
	return (
		<div className="flex justify-center bg-gray-700 text-white">
			<div className="max-w-screen-lg flex sm:flex-col min-h-screen w-full">
				<Navbar />
				<div className="flex-grow">{children}</div>
				{/* <div>Footer</div> */}
			</div>
		</div>
	);
};

export default Layout;
