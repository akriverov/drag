import React, { useState } from "react";

// Componente funcional que representa un modal genérico
function GenericModal(props) {
  return (
    <div className="dragd-modal" style={{ zIndex: 999999999999 }}>
      {/* Fondo del modal, se cierra el modal al hacer clic en él */}
      <div className="dragd-modal-background" onClick={() => props.onDone()} />
      <div className="modal-content">
        <div className="card-content">
          {/* Contenido del modal, se muestra el contenido proporcionado */}
          {props.content && props.content}
        </div>
      </div>
    </div>
  );
}

export default GenericModal;
