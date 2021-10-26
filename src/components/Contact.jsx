import React from "react";
import { Link } from "react-router-dom";

function Contact({ setPage }) {
  return (
    <div>
      <div className="container">
        <div className="card shadow mt-3 p-3 movie-bg">
          <h1 className="mb-3 mt-3">Contacto</h1>
          <hr />
          <div className="d-flex">
            <div className="d-flex flex-column justify-content-center">
              <div className="d-flex">
                <p className="my-3 ms-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus aliquid iure nostrum corrupti quibusdam odit
                  deleniti similique maxime minus at totam expedita, aperiam
                  maiores error explicabo quod quidem rem sapiente, vero
                  necessitatibus hic veritatis ab eos velit. Consequuntur quis
                  voluptatem saepe, soluta earum quibusdam nesciunt doloremque,
                  placeat repudiandae pariatur, voluptates rem necessitatibus
                  optio. Voluptatum dicta doloribus explicabo officiis, tenetur
                  saepe ipsam. Odio commodi aut veritatis similique repellendus
                  numquam sapiente nihil nam ullam accusantium? Nihil
                  voluptatibus eveniet eos quia doloremque cupiditate quidem!
                  Accusamus sed odit natus iure, assumenda reiciendis quo totam
                  quas quidem in magni repudiandae perspiciatis iste neque aut,
                  doloribus explicabo cum laborum commodi omnis et. Repellendus
                  a perferendis pariatur soluta vitae aperiam voluptatibus,
                  natus magni consequuntur! Distinctio dolore maiores similique
                  vitae autem illo magnam asperiores tenetur delectus laudantium
                  rem voluptas, itaque ullam numquam iusto quis cumque doloribus
                  sapiente vero, quam rerum id? Quod possimus officia tempora
                  consequuntur vero labore, sit molestias provident. Eligendi
                  ducimus sapiente veniam et earum, voluptates in fugit nostrum
                  voluptatem nam odit mollitia beatae excepturi aliquam, vel
                  unde corporis fugiat non! Laborum autem temporibus atque
                  similique commodi quam, ullam odio, perspiciatis velit maxime
                  veniam expedita, soluta eveniet quibusdam repellat sunt magni
                  reiciendis deserunt dolor veritatis quidem?{" "}
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div className="text-start">
            <Link to="/" className="text-dark" onClick={() => setPage(1)}>
              <i className="fas fa-arrow-left me-1"></i>Volver
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
