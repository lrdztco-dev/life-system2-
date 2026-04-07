import { useState, useEffect } from "react";

export default function Home() {
  const [ideas, setIdeas] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("ideas");
    if (saved) setIdeas(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("ideas", JSON.stringify(ideas));
  }, [ideas]);

  const addIdea = () => {
    if (!input) return;
    setIdeas([...ideas, input]);
    setInput("");
  };

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: "auto" }}>
      <h1>Life System</h1>

      <h2>Ideas</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Nueva idea..."
      />
      <button onClick={addIdea}>Agregar</button>

      <ul>
        {ideas.map((idea, i) => (
          <li key={i}>{idea}</li>
        ))}
      </ul>
    </div>
  );
}
