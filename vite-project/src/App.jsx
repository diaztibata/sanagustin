import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  const iniciarRespiracion = () => {
    setMensaje("Inhala... 🫁");

    setTimeout(() => {
      setMensaje("Exhala... 🌬️");
    }, 4000);

    setTimeout(() => {
      setMensaje("Bien hecho 🙌");
    }, 8000);
  };

  // SPLASH
  if (loading) {
    return (
      <div className="Splash">
        <img src="/Splash.png" alt="Splash" className="Splash-img" />
        <h1>🌊 Respira Libre</h1>
        <p>Preparando tu momento de calma...</p>
      </div>
    );
  }

  // APP
  return (
    <div className="app">
      <h1>🌊 Respira Libre</h1>
      <p>Relájate con ejercicios de respiración</p>

      <button className="btn" onClick={iniciarRespiracion}>
        Iniciar respiración
      </button>

      <h2 className="mensaje">{mensaje}</h2>

      <div className="info">
        <h3>¿Qué hace esta app?</h3>
        <p>
          Esta aplicación te guía para controlar tu respiración y reducir el
          estrés.
        </p>
      </div>
    </div>
  );
}

export default App;