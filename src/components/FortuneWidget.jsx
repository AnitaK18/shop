// src/components/FortuneWidget.jsx
import { useEffect, useState } from "react";

const fortunes = [
  "Сьогодні чудовий день, щоб почати щось нове.",
  "Очікуй приємну несподіванку від близької людини.",
  "Не поспішай — рішення прийде саме.",
  "Зроби паузу і прислухайся до себе.",
  "Удача вже на шляху до тебе.",
  "Будь відкритим до змін — це приведе до зростання.",
];

export default function FortuneWidget() {
  const [fortune, setFortune] = useState("");

  useEffect(() => {
    const random = fortunes[Math.floor(Math.random() * fortunes.length)];
    setFortune(random);
  }, []);

  return (
    <div style={styles.widget}>
      <h3 style={styles.title}>🌟 Передбачення на сьогодні</h3>
      <p style={styles.text}>{fortune}</p>
    </div>
  );
}

const styles = {
  widget: {
    background: "#f9f9f9",
    padding: "1rem",
    borderRadius: "1rem",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    maxWidth: "300px",
    margin: "2rem auto",
    textAlign: "center",
  },
  title: {
    marginBottom: "0.5rem",
    fontWeight: "bold",
  },
  text: {
    fontStyle: "italic",
  },
};