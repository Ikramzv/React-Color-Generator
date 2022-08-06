import React from "react";
import { useState } from "react";
import Value from "values.js";
import "./styles.css";
import { rgbToHex } from "./convertRgbToHex";

function App() {
  const [color, setColor] = useState("");
  const [colorList, setColorList] = useState([]);
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setError("");
      const newColor = new Value(color);
      setColorList(newColor.all());
    } catch (error) {
      setError(error.message);
    }
  };

  const copy = (e) => {
    navigator.clipboard.writeText(e.target.textContent);
    alert("Text copied to keyboard");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1 className="title">Color generator : </h1>
        <input
          type="text"
          name="color"
          placeholder="#222"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className={`${error ? "error" : ""}`}
        />
        <button type="submit">Generate</button>
      </form>
      <section className="colors">
        {colorList.map((color, index) => {
          const { rgb } = color;
          return (
            <article key={index}>
              <div
                style={{ background: `rgb(${rgb.join(",")})` }}
                onClick={copy}
              >
                #{rgbToHex(rgb).join("").toLocaleLowerCase()}
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}

export default App;
