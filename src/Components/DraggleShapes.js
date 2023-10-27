import React, { useContext } from "react";
import SiteContext from "../pageContext";
import defaultButtons from "../EditMenu/defaultButtons";
import EditItem from "./DDEditor/EditItem";

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
          <i className={elemData.icon}></i>
      </EditItem>
    </>
  );
}

export default DraggableShape;