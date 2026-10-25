const loadIncrement = async () => {
  const [{ db }, { doc, updateDoc, increment }] = await Promise.all([
    import('./firebaseConfig'),
    import('firebase/firestore'),
  ]);
  return { db, doc, updateDoc, increment };
};

export const incrementCounter = async () => {
  try {
    const { db, doc, updateDoc, increment } = await loadIncrement();
    const counterRef = doc(db, 'clickCounters', 'avatarClickCount');

    await updateDoc(counterRef, {
      count: increment(1),
    });
  } catch (error) {
    console.error('Error al incrementar la cantidad de clics:', error);
  }
};
