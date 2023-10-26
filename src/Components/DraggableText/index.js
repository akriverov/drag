import React, { useState, useRef, useContext, useEffect } from "react";
import EditItem from "../DDEditor/EditItem";
import SiteContext from "../../pageContext";
import PanelControls from "./PanelControls";

const defaultTextSize = 24;
const fontList = ["Arial", "Times New Roman", "Courier New"];

function DraggableText(props) {
  const { elemData, mode, selected } = props;
  const siteData = useContext(SiteContext);

  // Verifica si la fuente no es una fuente predeterminada y la carga desde Google Fonts
  const fontSource = !fontList.includes(
    elemData.style && elemData.style.fontFamily
  )
    ? "google"
    : "";

  // Función para actualizar los datos locales y notificar al contexto
  function onLocalUpdate(newProps) {
    const updatedProps = {
      ...newProps,
    };
    siteData.onUpdateDiv(elemData.id, updatedProps);
  }

  return (
    <>
      <EditItem
        elemData={elemData}
        selected={props.selected}
        renderPanel={props.selected && PanelControls}
        onLocalUpdate={onLocalUpdate}
        mode={mode}
      >
        {/* Carga la fuente desde Google Fonts si es necesario */}
        {fontSource === "google" && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link
              href={`https://fonts.googleapis.com/css2?family=${
                elemData.style &&
                elemData.style.fontFamily &&
                elemData.style.fontFamily.split(" ").join("+")
              }&display=swap`}
              rel="stylesheet"
            ></link>
          </>
        )}
        {/* Componente EditableDiv para el texto */}
        <EditableDiv
          value={elemData.text}
          contentEditable={props.selected}
          key={elemData.id + "-" + elemData.fontSize}
          onChange={(text) => {
            onLocalUpdate({ text: text });
          }}
          style={{
            ...elemData.style,
          }}
        />
      </EditItem>
    </>
  );
}

export default DraggableText;

// Componente EditableDiv para texto editable
function EditableDiv(props) {
  const { value, contentEditable, onChange, style } = props;
  const [text, setText] = useState(value);
  const [mobileEditing, setMobileEditing] = useState(false);
  const [cursor, setCursor] = useState(null);
  const [dragMove, setDragMove] = useState(false);
  const inputRef = useRef();
  const inputFakeRef = useRef(null);

  useEffect(() => {
    if (mobileEditing) {
      inputFakeRef.current.focus();
    }
  }, [mobileEditing]);

  // Función para emitir un cambio cuando el contenido se modifica
  function emitChange() {
    const updatedValue = inputRef.current.innerHTML;
    onChange && onChange(updatedValue);
  }

  // Función para pegar el contenido en formato texto plano
  function onPaste(e) {
    e.preventDefault();
    const text = e.clipboardData.getData("text/plain");
    document.execCommand("insertText", false, text);
  }

  // Función para habilitar el uso de atajos de teclado (Ctrl+C y Ctrl+V)
  function onKeyDown(e) {
    if (e.key === "c" && (e.ctrlKey || e.metaKey)) {
      document.execCommand("copy");
      e.preventDefault();
    } else if (e.key === "v" && (e.ctrlKey || e.metaKey)) {
      document.execCommand("paste");
      e.preventDefault();
    }
  }

  return (
    <>
      {/* Div editable para texto */}
      {!mobileEditing && (
        <div
          ref={inputRef}
          onPaste={onPaste}
          onInput={emitChange}
          onBlur={emitChange}
          contentEditable={contentEditable}
          onTouchStart={() => {
            !contentEditable && setDragMove(true);
          }}
          onTouchMove={() => {
            setDragMove(true);
          }}
          onTouchEndCapture={() => {
            contentEditable && !dragMove && setMobileEditing(true);
            setDragMove(false);
          }}
          onFocus={() => {
            setCursor("pointer");
          }}
          onKeyDown={onKeyDown}
          style={{ cursor: cursor, ...style }}
        >
          {text}
        </div>
      )}
      {/* Textarea para edición móvil */}
      {mobileEditing && (
        <div>
          <textarea
            style={{
              cursor: cursor,
              border: "none",
              background: "rgba(0,0,0,0)",
              width: "100%",
              height: "100%",
              ...style,
            }}
            defaultValue={text}
            ref={inputFakeRef}
            onInput={(e) => {
              onChange(value);
            }}
            onBlur={() => {
              setMobileEditing(false);
            }}
          ></textarea>
        </div>
      )}
    </>
  );
}
