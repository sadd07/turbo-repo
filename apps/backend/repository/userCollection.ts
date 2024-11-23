import { db } from '../config/firebaseConfig';
import { collection, doc, getDocs, getDoc, addDoc } from 'firebase/firestore';
import { User } from '../entities/user';

const usersCollection = collection(db, 'users');

export const getUsers = async (): Promise<{ id: string, data: User}[]> => {
  const snapshot = await getDocs(usersCollection);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    data: doc.data() as User,
  }));
};

export const addUser = async (user: User): Promise<void> => {
  await addDoc(usersCollection, user);
};

export const getUserById = async (id: string): Promise<User | null> => {
  const userDoc = doc(db, 'users', id);
  const userSnapshot = await getDoc(userDoc);

  if (userSnapshot.exists()) {
    return userSnapshot.data() as User;
  } else {
    return null;
  }
};
