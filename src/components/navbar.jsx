import React from "react";

export function Navbar() {
  return (
    <header className="flex justify-center items-center mx-auto sticky bottom-0 md:top-0 w-full md:w-[720px] py-10 z-10">
      <nav className="hidden md:flex gap-1 bg-white px-4 py-0.5 rounded-full text-xl">
        <a
          href="/#sobre-mi"
          className="py-0.5 px-4 font-medium rounded-full transition duration-300 ease-in-out hover:text-gray-700"
        >
          Sobre mí
        </a>
        <a
          href="/#proyectos"
          className="py-0.5 px-4 font-medium rounded-full transition duration-300 ease-in-out hover:text-gray-700"
        >
          Proyectos
        </a>
        <a
          href="/#redes"
          className="py-0.5 px-4 font-medium rounded-full transition duration-300 ease-in-out hover:text-gray-700"
        >
          Redes
        </a>
        <a
          href="/#contacto"
          className="py-0.5 px-4 font-medium rounded-full transition duration-300 ease-in-out hover:text-gray-700"
        >
          Contacto
        </a>
      </nav>
    </header>
  );
}
