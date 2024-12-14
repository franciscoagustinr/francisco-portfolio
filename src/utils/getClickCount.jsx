import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';

export const getClickCount = async () => {
  try {
    const counterRef = doc(db, 'clickCounters', 'avatarClickCount');

    const docSnap = await getDoc(counterRef);

    if (docSnap.exists()) {
      const count = docSnap.data().count;
      return count;
    } else {
      console.log('No se encontró el documento.');
      return null;
    }
  } catch (error) {
    console.error('Error al obtener la cantidad de clics:', error);
    return null;
  }
};
