import { auth, db } from './firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';

export async function registerUser(email, password, plan = "Starter") {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;
  // Set user profile in Firestore
  await setDoc(doc(db, "users", user.uid), {
    email,
    plan,
    createdAt: Date.now()
  });
  return user;
}

export async function loginUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export async function logoutUser() {
  return signOut(auth);
}

export function subscribeToAuthChanges(cb) {
  return onAuthStateChanged(auth, cb);
}

export async function getUserProfile(uid) {
  const docSnap = await getDoc(doc(db, "users", uid));
  return docSnap.exists() ? docSnap.data() : null;
}