const loadFirestore = async () => {
  const [{ db }, { doc, getDoc }] = await Promise.all([
    import('./firebaseConfig'),
    import('firebase/firestore'),
  ]);
  return { db, doc, getDoc };
};

export const getClickCount = async () => {
  try {
    const { db, doc, getDoc } = await loadFirestore();
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
