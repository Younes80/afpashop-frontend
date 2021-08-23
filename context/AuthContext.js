import { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Magic } from 'magic-sdk';
import { MAGIC_PUBLIC_KEY } from '../lib/urls';

const AuthContext = createContext();

let magic;

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const router = useRouter();

	/**
	 * Adds a email to user
	 * @param {string} email
	 */
	const loginUser = async email => {
		try {
			await magic.auth.loginWithMagicLink({ email });
			setUser({ email });
			router.push('/');
		} catch (error) {
			setUser(null);
		}
	};

	/**
	 * Deletes user state
	 */
	const logoutUser = async () => {
		try {
			await magic.user.logout();
			setUser(null);
			router.push('/');
		} catch (error) {
			console.log(error);
			setUser(null);
		}
	};

	useEffect(() => {
		magic = new Magic(MAGIC_PUBLIC_KEY);
	}, []);

	return (
		<AuthContext.Provider value={{ user, loginUser, logoutUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
