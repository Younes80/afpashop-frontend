import Link from 'next/link';
import NextImage from 'next/image';
import logo from '../public/logo-afpa.png';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const Navbar = () => {
	const { user } = useContext(AuthContext);
	return (
		<nav className="flex justify-between items-center ml-6 mr-6 mt-4">
			<div className="flex-grow animate-pulse">
				<Link href="/">
					<a>
						<NextImage
							src={logo}
							objectFit="contain"
							width="300"
							height="88"
							alt="home"
						/>
					</a>
				</Link>
			</div>
			<ul>
				<Link href="/">
					<a className="p-3.5 font-bold hover:bg-greenAfpa hover:rounded   hover:font-bold">
						Home
					</a>
				</Link>

				{user ? (
					<Link href="/">
						<a className="p-3.5 font-bold">{user}</a>
					</Link>
				) : (
					<Link href="/login">
						<a className="p-3.5 font-bold hover:bg-greenAfpa hover:rounded  hover:font-bold">
							Login
						</a>
					</Link>
				)}

				<Link href="/">
					<a className="p-3.5 font-bold rounded bg-greenAfpa hover:bg-black hover:rounded hover:font-bold">
						Cart
					</a>
				</Link>
			</ul>
		</nav>
	);
};

export default Navbar;
