import React, { useContext } from "react";
import SiteContext from "../pageContext";
import defaultButtons from "../EditMenu/defaultButtons";
import EditItem from "./DDEditor/EditItem";
import ColorPicker from "../utils/ui/ColorPicker";
import { useState } from "react";

const shapes = {
  square: (color, stroke) => <SquareIcon color={color} stroke={stroke} />,
  circle: (color, stroke) => <CircleIcon color={color} stroke={stroke} />,
  triangle: (color, stroke) => <TriangleIcon color={color} stroke={stroke} />,
  start: (color, stroke) => <StarIcon color={color} stroke={stroke} />,
  heart: (color, stroke) => <HeartIcon color={color} stroke={stroke} />,
  diamond: (color, stroke) => <DiamondIcon color={color} stroke={stroke} />,
};

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
        {shapes[elemData.name] &&
          shapes[elemData.name](
            elemData.style.backgroundColor,
            elemData.style.borderColor
          )}
      </EditItem>
    </>
  );
}
/////FIGURAS///////
const SquareIcon = ({ color = "black", stroke = "black" }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill={color} stroke={stroke} d="M1 1h48v48h-48z" />
    </svg>
  );
};

const CircleIcon = ({ color = "black", stroke = "black" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
    >
      <circle
        cx="50"
        cy="50"
        r="50"
        fill={color}
        stroke={stroke}
        strokeWidth="2"
      />
    </svg>
  );
};

const TriangleIcon = ({ color = "black", stroke = "black" }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={color}
        stroke={stroke}
        d="M21.9,19.3l-9-15.6c-0.1-0.1-0.2-0.2-0.3-0.3c-0.5-0.3-1.1-0.2-1.4,0.3l-9,15.6C2,19.4,2,19.6,2,19.8c0,0.6,0.4,1,1,1h18c0.2,0,0.3,0,0.5-0.1C22,20.4,22.1,19.8,21.9,19.3z"
      />
    </svg>
  );
};
const StarIcon = ({ color = "black", stroke = "black" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
    >
      <path
        fill={color}
        stroke={stroke}
        d="M22,9.81a1,1,0,0,0-.83-.69l-5.7-.78L12.88,3.53a1,1,0,0,0-1.76,0L8.57,8.34l-5.7.78a1,1,0,0,0-.82.69,1,1,0,0,0,.28,1l4.09,3.73-1,5.24A1,1,0,0,0,6.88,20.9L12,18.38l5.12,2.52a1,1,0,0,0,.44.1,1,1,0,0,0,1-1.18l-1-5.24,4.09-3.73A1,1,0,0,0,22,9.81Z"
      />
    </svg>
  );
};

const HeartIcon = ({ color = "black", stroke = "black" }) => {
  return (
    <svg
      height="100%"
      width="100%"
      viewBox="0 0 15 15"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={color}
        stroke={stroke}
        d="M13.91 6.75c-1.17 2.25-4.3 5.31-6.07 6.94a.5.5 0 0 1-.67 0C5.39 12.06 2.26 9 1.09 6.75-1.48 1.8 5-1.5 7.5 3.45c2.5-4.95 8.98-1.65 6.41 3.3z"
      />
    </svg>
  );
};
const DiamondIcon = ({ color = "black", stroke = "black" }) => {
  return (
    <svg
      height="100%"
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={color}
        stroke={stroke}
        d="M11.7831 0H3.21691L0.0712554 5.24275C-0.0349835 5.41982 -0.0214476 5.64398 0.105326 5.80697L7.10533 14.807C7.20005 14.9288 7.34571 15 7.5 15C7.6543 15 7.79995 14.9288 7.89468 14.807L14.8947 5.80697C15.0215 5.64398 15.035 5.41982 14.9287 5.24275L11.7831 0Z"
      />
    </svg>
  );
};

export default DraggableShape;
