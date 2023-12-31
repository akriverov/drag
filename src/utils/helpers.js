import React, { useState, useRef, useEffect } from "react";

// Custom hook que obtiene el valor previo de una variable de estado
export function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

// Función que verifica si el dispositivo es móvil basándose en el agente del usuario
export function isMobile() {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return true; // Verdadero si es un dispositivo móvil
  } else {
    return false; // Falso si no es un dispositivo móvil
  }
}

// Función que verifica si el ancho de la ventana es menor que 600 píxeles (viewport móvil)
export function isMobileViewport() {
  if (typeof window !== "undefined" && window.innerWidth < 600) return true;
}

// Función que calcula la relación de escala en dispositivos móviles
export function getMobileScaleRatio() {
  return isMobileViewport() ? window.innerWidth / 600 : 1;
}

// Función que obtiene la posición de un elemento en la página
export function getElementOffset(element) {
  var de = typeof window !== "undefined" && document.documentElement;
  var box = element.getBoundingClientRect();
  var top = box.top + window.pageYOffset - de.clientTop;
  var left = box.left + window.pageXOffset - de.clientLeft;
  var height = box.height;
  var width = box.width;
  return {
    top: top,
    left: left,
    height,
    width,
    center: { x: left + width / 2, y: top + height / 2 },
  };
}

// Función que genera un GUID (Identificador único global)
export function guidGenerator() {
  var S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (
    S4() +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    S4() +
    S4()
  );
}

// Función que calcula el ángulo entre dos puntos
export const getAngle = ({ x: x1, y: y1 }, { x: x2, y: y2 }) => {
  const dot = x1 * x2 + y1 * y2;
  const det = x1 * y2 - y1 * x2;
  const angle = (Math.atan2(det, dot) / Math.PI) * 180;
  return (angle + 360) % 360;
};

// Función que convierte grados a radianes
export const degToRadian = (deg) => {
  return (deg * Math.PI) / 180;
};

// Función que calcula la longitud de un vector (distancia)
export const getLength = (x, y) => {
  return Math.sqrt(x * x + y * y);
};

// Componente de entrada de texto controlado
export const Input = (props) => {
  const { value = "", onChange, placeholder, defaultValue, style } = props;
  const [text, setText] = useState(value);

  function update(event) {
    setText(event.target.value);
    if (typeof onChange === "function") {
      onChange(event.target.value);
    }
  }

  return (
    <input
      type="text"
      {...props}
      placeholder={placeholder}
      onChange={update}
      defaultValue={defaultValue}
    />
  );
};

// Componente de columna flexible
export const Column = (props) => {
  return (
    <div
      {...props}
      style={{ ...props.style, display: "flex", flexDirection: "column" }}
    >
      {props.children}
    </div>
  );
};

// Componente de fila flexible
export const Row = (props) => {
  return (
    <div
      {...props}
      style={{ ...props.style, display: "flex", flexDirection: "row" }}
    >
      {props.children}
    </div>
  );
};

// Función de debounce para limitar la frecuencia de llamadas a una función
export function debounce(func, wait) {
  var timeout;

  return (...args) => {
    var context = this;

    var later = () => {
      func.apply(context, args);
    };

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);
  };
}

// Función que verifica si un valor es un objeto
export function isObject(item) {
  return item && typeof item === "object" && !Array.isArray(item);
}

// Función para combinar objetos de forma profunda
export function mergeDeep(target, source) {
  let output = Object.assign({}, target);
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        if (!(key in target)) Object.assign(output, { [key]: source[key] });
        else output[key] = mergeDeep(target[key], source[key]);
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }
  return output;
}

// Función que verifica si un color de fondo es oscuro
export function isDarkColor(bgColor) {
  if (typeof bgColor === "undefined") return false;
  var color = bgColor.charAt(0) === "#" ? bgColor.substring(1, 7) : bgColor;
  var r = parseInt(color.substring(0, 2), 16); // hexToR
  var g = parseInt(color.substring(2, 4), 16); // hexToG
  var b = parseInt(color.substring(4, 6), 16); // hexToB
  return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? false : true;
}
