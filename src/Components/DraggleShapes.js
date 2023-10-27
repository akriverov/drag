import React, { useContext } from "react";
import SiteContext from "../pageContext";
import defaultButtons from "../EditMenu/defaultButtons";
import EditItem from "./DDEditor/EditItem";
import ColorPicker from "../utils/ui/ColorPicker";
import { useState } from "react";
const shapes = {
  square: (color, stroke) => <StarIcon color={color} stroke={stroke}/>
}
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
  function setBgColor(color) {
    onLocalUpdate({
      style: {
        ...elemData.style,
        backgroundColor: color,
      },
    });
  }

  function setBorderColor(color) {
    onLocalUpdate({
      style: {
        ...elemData.style,
        borderColor: color,
      },
    });
  }

  function PanelControls({ setPanelControls }) {
    const [active, setActive] = useState(false);
    return (
      <>
        <div
          onClick={() => {
            if (!active) {
              setActive(true);
              setPanelControls(
                <>
                  <div>
                    <ColorPicker
                      color={elemData.style.backgroundColor || "black"}
                      onChange={(color) => {
                        setBgColor(color);
                      }}
                      onClose={() => {
                        setActive(false);
                        setPanelControls(null);
                      }}
                    />
                  </div>
                </>
              );
            } else {
              setActive(false);
              setPanelControls();
            }
          }}
          style={{
            borderRadius: 5,
            width: 25,
            height: 25,
            backgroundColor: elemData.style && elemData.style.backgroundColor,
            border: "2px solid black",
          }}
        ></div>
        <div style={{ padding: 5 }} />
        <div
          onClick={() => {
            if (!active) {
              setActive(true);
              setPanelControls(
                <>
                  <div>
                    <ColorPicker
                      color={elemData.style.backgroundColor || "black"}
                      onChange={(color) => {
                        setBorderColor(color);
                      }}
                      onClose={() => {
                        setActive(false);
                        setPanelControls(null);
                      }}
                    />
                  </div>
                </>
              );
            } else {
              setActive(false);
              setPanelControls();
            }
          }}
          style={{
            borderRadius: 5,
            width: 25,
            height: 25,
            borderStyle: "solid",
            borderColor: elemData.style && elemData.style.borderColor,
            borderWidth: 2,
          }}
        ></div>
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
        renderPanel={PanelControls}
        mode={mode}
      >
          {shapes[elemData.name] && shapes[elemData.name](elemData.style.backgroundColor, elemData.style.borderColor)}
      </EditItem>
    </>
  );
}
const StarIcon = ({ color = 'black', stroke = 'black' }) => {
  return (
    <svg height="100%" width="100%" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  
	 viewBox="0 0 47.94 47.94" >
      <path fill={color} stroke={stroke} d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
        c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
        c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
        c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
        c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
        C22.602,0.567,25.338,0.567,26.285,2.486z"/>
    </svg>
  )
}
export default DraggableShape;