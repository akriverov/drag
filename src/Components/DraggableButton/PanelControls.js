import React, { useState, useEffect, useContext } from "react";
import { Input } from "../../utils/helpers";
import ColorPicker from "../../utils/ui/ColorPicker";
import SiteContext from "../../pageContext";

export default function PanelControls({ elemData, setPanelControls }) {
  const siteData = useContext(SiteContext);
  const { onUpdateDiv: onUpdated } = siteData;

  const [colorPickerActive, setColorPickerActive] = useState(false);

  const handleColorChange = (color) => {
    const updatedStyle = { ...elemData.style, backgroundColor: color };
    onLocalUpdate({ style: updatedStyle });
  };

  const onLocalUpdate = (newProps) => {
    const updatedProps = {
      ...newProps,
    };
    onUpdated(elemData.id, updatedProps);
  };

  useEffect(() => {
    if (!colorPickerActive) {
      setPanelControls(null);
    }
  }, [colorPickerActive]);

  return (
    <>
      <div
        onClick={() => {
          if (!colorPickerActive) {
            setColorPickerActive(true);
            setPanelControls(
              <ColorPicker
                color={elemData.style?.backgroundColor || "black"}
                onChange={handleColorChange}
                onClose={() => {
                  setColorPickerActive(false);
                }}
              />
            );
          } else {
            setColorPickerActive(false);
          }
        }}
        style={{
          borderRadius: 5,
          width: 25,
          height: 25,
          backgroundColor: elemData.style?.backgroundColor,
          border: "1px solid black",
          marginRight: "10px",
        }}
      ></div>
      <Input
        placeholder="Button Label"
        defaultValue={elemData.label}
        key={`${elemData.id}-input`}
        onChange={(value) => {
          onLocalUpdate({ label: value });
        }}
      />
    </>
  );
}
