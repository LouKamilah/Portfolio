import React from "react";
import pdf from "/CV-CAMILA-2024.pdf";

export function PdfDownloadButton() {
  return (
    <div
      className="mx-auto text-right w-full md:w-[720px] my-10"
      data-aos="fade-left"
      data-aos-duration="2000"
    >
      <a
        href={pdf}
        download="CV-CAMILA-2024.pdf"
        className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition shadow-xl shadow-blue-700/50"
      >
        Descargar CV
      </a>
    </div>
  );
}
