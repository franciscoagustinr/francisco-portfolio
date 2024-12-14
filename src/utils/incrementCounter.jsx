import { doc, updateDoc, increment } from 'firebase/firestore';
import { db } from './firebaseConfig'; // Importa la configuración de Firebase

export const incrementCounter = async () => {
  try {
    const counterRef = doc(db, 'clickCounters', 'avatarClickCount');

    await updateDoc(counterRef, {
      count: increment(1),
    });
  } catch (error) {
    console.error('Error al incrementar el contador:', error);
  }
};
