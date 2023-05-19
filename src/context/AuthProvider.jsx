/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
	signInWithPopup,
	GoogleAuthProvider,
	GithubAuthProvider,
} from 'firebase/auth';
import app from '../firebase/firebase.config';

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const githubAuthProvider = new GithubAuthProvider();

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	// REGISTER
	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// ADD NAME AND PHOTO URL
	const updateUserData = (userName, photoUrl) => {
		return updateProfile(auth.currentUser, {
			displayName: userName,
			photoURL: photoUrl,
		});
	};

	// SIGN IN
	const signIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	// GOOGLE SIGN IN
	const signInWithGoogle = () => {
		return signInWithPopup(auth, googleAuthProvider);
	};

	// GITHUB SIGN IN
	const signInWithGithub = () => {
		return signInWithPopup(auth, githubAuthProvider);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
			setUser(loggedUser);
			setLoading(false);
		});

		return () => unsubscribe();
	}, []);

	// LOGOUT
	const logout = () => {
		setLoading(true);
		return signOut(auth);
	};

	const authInfo = {
		user,
		setUser,
		createUser,
		signIn,
		signInWithGoogle,
		signInWithGithub,
		updateUserData,
		logout,
		loading,
	};

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
