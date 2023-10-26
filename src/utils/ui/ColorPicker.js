import React from "react";
import { RgbaStringColorPicker } from "react-colorful";

// Componente funcional que representa un selector de color amigable
export default function ColorPicker({ color, onChange, onClose }) {
  return (
    <div className="color-picker-container">
      <h2 className="color-picker-title">Selector de Color</h2>
      <div className="color-picker">
        {/* Selector de color */}
        <RgbaStringColorPicker
          color={color || "black"} // Color inicial (predeterminado: negro)
          onChange={onChange} // Función llamada cuando cambia el color
        />
      </div>
      <button className="color-picker-close" onClick={onClose}>
        Cerrar
      </button>
    </div>
  );
}
