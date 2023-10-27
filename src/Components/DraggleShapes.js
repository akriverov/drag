import React, { useContext } from "react";
import EditItem from "./DDEditor/EditItem";
import SiteContext from "../pageContext";
import defaultButtons from "../EditMenu/defaultButtons";

function DraggableShape(props) {
  const { elemData } = props;
  const siteData = useContext(SiteContext);
  const { setSelected: onSelect, onUpdateDiv: onUpdated, mode } = siteData;

  // Función para actualizar las propiedades locales del elemento
  function onLocalUpdate(newProps) {
    const updatedProps = {
      ...newProps,
    };
    onUpdated(elemData.id, updatedProps);
  }

  // Función para renderizar una forma (shape) específica
  function renderShape(shapeType, style) {
    const shapes = defaultButtons.shapes;
    const shapeData = shapes.objects[shapeType];

    return (
      <>
        <div
          style={{
            width: style.size.width,
            height: style.size.height,
            backgroundColor: style.backgroundColor,
            borderRadius: style.borderRadius || "0",
          }}
        />
      </>
    );
  }
  return (

    <>
      <EditItem
        elemData={elemData}
        onSelect={onSelect}
        onUpdated={onUpdated}
        selected={props.selected}
        key={props.elemData.id + "__item"}
        mode={mode}
      >
        <div style={{ width: "100%", height: "100%", ...elemData.style }}>
          {renderShape(elemData.shapeType, elemData.style)}
          
        </div>
      </EditItem>
    </>
  );
}

export default DraggableShape;
