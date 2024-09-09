import { initializeApp, getApps } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { FIREBASE_API_KEY } from '@env';

const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: "headstrong-ea612.firebaseapp.com",
    projectId: "headstrong-ea612",
    storageBucket: "headstrong-ea612.appspot.com",
    messagingSenderId: "199264210050",
    appId: "1:199264210050:web:564e1ebc06fa0396f8f89b",
    measurementId: "G-DXRR8TF6J1"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const signUp = async(email: string, password: string): Promise<User> => {
    try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const user = userCredential.user;
    return userCredential.user;
    await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        uid: user.uid,
        createdAt: new Date().toISOString()
        });
        return user;
    } catch (error) {
        console.error('error in signUp', error);
        throw error;
    }
};

export const signIn = async(email: string, password: string): Promise<User> => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
};
export const logOut = async (): Promise<void> => {
    await signOut(auth);
};

export const getCurrentUser = (): User | null => {
    return auth.currentUser;
};