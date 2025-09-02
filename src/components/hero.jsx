import React from "react";

export function Hero() {
  return (
    <section
      id="sobre-mi"
      className="w-full md:w-[720px] container mx-auto pt-28"
    >
      <article>
        <h2 className="flex gap-2 items-center text-4xl md:text-5xl font-bold mb-6 text-white">
          <svg
            data-aos="fade-right"
            data-aos-duration="1000"
            className="mt-2 size-9 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="Code"
          >
            <path
              d="M6 6a2 2 0 0 1 2-2 1 1 0 0 0 0-2 4 4 0 0 0-4 4v3a2 2 0 0 1-2 2 1 1 0 0 0 0 2 2 2 0 0 1 2 2v3a4 4 0 0 0 4 4 1 1 0 0 0 0-2 2 2 0 0 1-2-2v-3a4 4 0 0 0-1.38-3A4 4 0 0 0 6 9Zm16 5a2 2 0 0 1-2-2V6a4 4 0 0 0-4-4 1 1 0 0 0 0 2 2 2 0 0 1 2 2v3a4 4 0 0 0 1.38 3A4 4 0 0 0 18 15v3a2 2 0 0 1-2 2 1 1 0 0 0 0 2 4 4 0 0 0 4-4v-3a2 2 0 0 1 2-2 1 1 0 0 0 0-2Z"
              fill="#ffffff"
              className="color000000 svgShape"
            ></path>
          </svg>
          <span data-aos="fade-right" data-aos-duration="1000">
            Camila Oyarzún{" "}
          </span>
        </h2>

        <p
          data-aos="fade-right"
          data-aos-duration="2000"
          className="text-2xl text-balance text-gray-300/90"
        >
          Soy Camila,
          <span className="text-sky-300"> estudiante de informática </span>
          apasionada por el{" "}
          <span className="text-yellow-300">
            diseño web y la ciencia de datos.
          </span>{" "}
          Me gusta crear experiencias{" "}
          <span className="text-green-300">
            interactivas y visualmente atractivas.
          </span>
        </p>
      </article>
    </section>
  );
}
