import React from "react";
import { data } from "./data";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import "./styles.css";

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((prev) => (prev < people.length - 1 ? prev + 1 : (prev = 0)));
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span> reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((p, personIndex) => {
          const { id, image, name, title, quote } = p;
          let position = "nextSlide";
          if (index === personIndex) {
            position = "activeSlide";
          }

          if (personIndex === index - 1) {
            position = "lastSlide";
          }

          if (index === 0 && personIndex === people.length - 1) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" fill="crimson" />
            </article>
          );
        })}

        <button
          className="prev"
          onClick={() =>
            setIndex((prev) =>
              prev > 0 ? prev - 1 : (prev = people.length - 1)
            )
          }
        >
          <FiChevronLeft />
        </button>
        <button
          className="next"
          onClick={() =>
            setIndex((prev) =>
              prev < people.length - 1 ? prev + 1 : (prev = 0)
            )
          }
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
