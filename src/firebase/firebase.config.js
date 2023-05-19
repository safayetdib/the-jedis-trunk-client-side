// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAe2BsEq23PRKWHzk9yeUNYFyDgguFGrOo',
	authDomain: 'the-jedis-trunk.firebaseapp.com',
	projectId: 'the-jedis-trunk',
	storageBucket: 'the-jedis-trunk.appspot.com',
	messagingSenderId: '680577149922',
	appId: '1:680577149922:web:1c17859f4c2d13221567bb',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
