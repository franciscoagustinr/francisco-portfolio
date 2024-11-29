import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebaseConfig"; // Asegúrate de que la configuración de Firebase esté importada

export const getClickCount = async () => {
  try {
    // Referencia al documento donde se guarda el contador
    const counterRef = doc(db, "clickCounters", "avatarClickCount");

    // Obtiene el documento
    const docSnap = await getDoc(counterRef);

    if (docSnap.exists()) {
      // Accede al campo 'count' del documento
      const count = docSnap.data().count;
      console.log("Cantidad de clics:", count);
      return count;
    } else {
      console.log("No se encontró el documento.");
      return null;
    }
  } catch (error) {
    console.error("Error al obtener la cantidad de clics:", error);
    return null;
  }
};
