import React from "react";

export function Contacto() {
  const email = "contactokamy@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      alert("Email copiado al portapapeles.");
    });
  };

  return (
    <section
      id="contacto"
      className="w-full md:w-[720px] container mx-auto "
      data-aos="fade-left"
      data-aos-duration="1500"
    >
      <h2 className="flex gap-2 items-center text-4xl md:text-4xl font-bold mb-8 text-white">
        <svg
          className="size-10 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          id="email"
        >
          <path
            fill="white"
            d="M53.42 53.32H10.58a8.51 8.51 0 0 1-8.5-8.5V19.18a8.51 8.51 0 0 1 8.5-8.5h42.84a8.51 8.51 0 0 1 8.5 8.5v25.64a8.51 8.51 0 0 1-8.5 8.5ZM10.58 13.68a5.5 5.5 0 0 0-5.5 5.5v25.64a5.5 5.5 0 0 0 5.5 5.5h42.84a5.5 5.5 0 0 0 5.5-5.5V19.18a5.5 5.5 0 0 0-5.5-5.5Z"
          ></path>
          <path
            fill="white"
            d="M32 38.08a8.51 8.51 0 0 1-5.13-1.71L3.52 18.71a1.5 1.5 0 1 1 1.81-2.39L28.68 34a5.55 5.55 0 0 0 6.64 0l23.35-17.68a1.5 1.5 0 1 1 1.81 2.39L37.13 36.37A8.51 8.51 0 0 1 32 38.08Z"
          ></path>
          <path
            fill="white"
            d="M4.17 49.14a1.5 1.5 0 0 1-1-2.62l18.4-16.41a1.5 1.5 0 0 1 2 2.24L5.17 48.76a1.46 1.46 0 0 1-1 .38zm55.66 0a1.46 1.46 0 0 1-1-.38l-18.4-16.41a1.5 1.5 0 1 1 2-2.24l18.39 16.41a1.5 1.5 0 0 1-1 2.62z"
          ></path>
        </svg>
        <span id="Redes">Contacto</span>
      </h2>

      <div className="grid grid-cols-8 flex-wrap md:flex-nowrap items-center gap-3 mb-16">
        <article className="col-span-8 md:col-span-6 w-full px-4 py-2 border-2 bg-slate-900 border-slate-700 rounded-xl overflow-hidden line-clamp-1">
          <input
            id="email"
            autoComplete="false"
            className="text-lg bg-transparent w-full text-white outline-none"
            value={email}
            readOnly={true} // Establece el campo como solo lectura
          />
        </article>
        <a
          href={`mailto:${email}`}
          className="col-span-4 md:col-span-1 relative px-4 py-2 group/copy text-black bg-sky-300 rounded-lg grid place-content-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4.698 4.034l16.302 7.966l-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124z"></path>
            <path d="M6.5 12h14.5"></path>
          </svg>
          <span className="absolute top-0 left-[50%] -translate-x-[50%] -translate-y-12 px-4 py-2 rounded-xl bg-white text-black w-[125px] transition-all duration-200 ease-out opacity-0 group-hover/copy:opacity-100 text-center">
            Enviar email
          </span>
        </a>
        <button
          onClick={copyEmail}
          id="button-copy-email"
          className="col-span-4 md:col-span-1 relative px-4 py-2 group/copy text-black bg-sky-300 rounded-lg grid place-content-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"></path>
            <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"></path>
          </svg>
          <span
            id="tooltip-email"
            className="absolute top-0 left-[50%] -translate-x-[50%] -translate-y-12 px-4 py-2 rounded-xl bg-white text-black w-[125px] transition-all duration-200 ease-out opacity-0 group-hover/copy:opacity-100 text-center"
          >
            Copiar
          </span>
        </button>
      </div>
    </section>
  );
}
