import { doc, updateDoc, increment } from "firebase/firestore";
import { db } from "./firebaseConfig"; // Importa la configuración de Firebase

export const incrementCounter = async () => {
  try {
    // Referencia al documento donde se guarda el contador
    const counterRef = doc(db, "clickCounters", "avatarClickCount");

    // Incrementa el valor en 1
    await updateDoc(counterRef, {
      count: increment(1),
    });

    console.log("Contador incrementado exitosamente");
  } catch (error) {
    console.error("Error al incrementar el contador:", error);
  }
};
