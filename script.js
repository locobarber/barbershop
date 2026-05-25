// Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Tu configuración
const firebaseConfig = {
  apiKey: "AIzaSyCh9Q0ww6mhzwWiRxy_hdPn2JnGv0q9fzA",
  authDomain: "loco-barber.firebaseapp.com",
  projectId: "loco-barber",
  storageBucket: "loco-barber.firebasestorage.app",
  messagingSenderId: "582539662475",
  appId: "1:582539662475:web:0fc678aee77818c31f708e",
  measurementId: "G-YTZH2PRSNC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Formulario
const form = document.getElementById("turnoForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const telefono = document.getElementById("telefono").value;
  const servicio = document.getElementById("servicio").value;
  const fecha = document.getElementById("fecha").value;
  const hora = document.getElementById("hora").value;

  try {
    await addDoc(collection(db, "turnos"), {
      nombre,
      telefono,
      servicio,
      fecha,
      hora,
      creado: new Date()
    });

    alert("Turno reservado con éxito");
    form.reset();

  } catch (error) {
    console.error(error);
    alert("Error al guardar turno");
  }
});