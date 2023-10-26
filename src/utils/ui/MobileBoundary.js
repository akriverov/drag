import React from "react";

// Componente principal que representa una línea divisoria en función del ancho de la ventana
export default function MobileBoundary({ mobileWidth = 600 }) {
  return (
    window.innerWidth > mobileWidth && (
      <>
        {/* Renderiza la línea divisoria a la izquierda de la ventana */}
        <Boundary mobileWidth={mobileWidth} />
        {/* Renderiza la línea divisoria a la derecha de la ventana */}
        <Boundary mobileWidth={mobileWidth} right />
      </>
    )
  );
}

// Componente Boundary que representa una línea divisoria
function Boundary({ mobileWidth, right }) {
  return (
    <>
      <div
        className={"mobile-align-bg"}
        style={{
          position: "fixed",
          left: right ? undefined : `0px`,
          right: right ? `0px` : undefined,
          width: `calc((100vw - ${mobileWidth}px)/2)`,
          height: "100vh",
        }}
      >
        {/* Renderiza una guía de alineación a la izquierda o derecha de la línea divisoria */}
        <div
          className={"page-align-guide mobile-align-guide active"}
          style={{
            position: "absolute",
            right: right ? undefined : "0px",
            left: right ? "0px" : undefined,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "100%",
            top: "50vh",
            textAlign: "center",
          }}
        >
          {/* Texto que se muestra en la línea divisoria */}
          ««« Not visible on phone »»»
        </div>
      </div>
    </>
  );
}
