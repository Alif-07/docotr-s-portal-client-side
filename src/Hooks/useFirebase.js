import { useEffect, useState } from 'react';
import initFirebaseAuth from '../Pages/Login/Firebase/Firebase.init';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
	updateProfile,
	getIdToken,
} from 'firebase/auth';

initFirebaseAuth();

const useFirebase = () => {
	const [user, setUser] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [authError, setAuthError] = useState('');
	const [admin, setAdmin] = useState(false);
	const [token, setToken] = useState('');

	const provider = new GoogleAuthProvider();
	const auth = getAuth();

	const googleSignIn = (location, history) => {
		setIsLoading(true);
		signInWithPopup(auth, provider)
			.then((result) => {
				const user = result.user;
				saveUser(user.email, user.displayName, 'PUT');
				const destination = location?.state?.from || '/';
				history.replace(destination);
				setAuthError('');
			})
			.catch((error) => {
				setAuthError(error.message);
			})
			.finally(() => setIsLoading(false));
	};
	const registerUser = (email, password, name, history) => {
		setIsLoading(true);
		createUserWithEmailAndPassword(auth, email, password)
			.then((result) => {
				setAuthError('');
				const newUser = { email, displayName: name };
				setUser(newUser);
				//Save user to the database
				saveUser(email, name, 'POST');
				//send name to firebase after creation
				updateProfile(auth.currentUser, {
					displayName: name,
				})
					.then(() => {})
					.catch((error) => {});
				history.replace('/');
			})
			.catch((error) => {
				setAuthError(error.message);
			})
			.finally(() => setIsLoading(false));
	};

	const saveUser = (email, displayName, method) => {
		const user = { email, displayName };
		fetch('https://enigmatic-eyrie-83123.herokuapp.com/users', {
			method: method,
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(user),
		}).then();
	};

	const logOut = () => {
		setIsLoading(true);
		signOut(auth)
			.then(() => {
				// Sign-out successful.
			})
			.catch((error) => {
				// An error happened.
			})
			.finally(() => setIsLoading(false));
	};

	const loginUser = (email, password, location, history) => {
		setIsLoading(true);
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const destination = location?.state?.from || '/';
				history.replace(destination);
				setAuthError('');
			})
			.catch((error) => {
				setAuthError(error.message);
			})
			.finally(() => setIsLoading(false));
	};

	useEffect(() => {
		fetch(`https://enigmatic-eyrie-83123.herokuapp.com/users/${user.email}`)
			.then((res) => res.json())
			.then((data) => setAdmin(data.admin));
	}, [user.email]);

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
				getIdToken(user).then((idToken) => {
					setToken(idToken);
				});
			} else {
				setUser({});
			}
			setIsLoading(false);
		});
		return () => unSubscribe;
	}, [auth]);
	return {
		user,
		admin,
		token,
		registerUser,
		logOut,
		loginUser,
		isLoading,
		setIsLoading,
		authError,
		googleSignIn,
	};
};

export default useFirebase;
