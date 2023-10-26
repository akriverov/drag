import React, { useState, useRef, useContext } from "react";
import EditItem from "../DDEditor/EditItem";
import SiteContext from "../../pageContext";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import PanelControls from "./PanelControls";

const defaultTextSize = 24;

function DraggableHtml(props) {
  const { elemData, selected } = props;

  const siteData = useContext(SiteContext);
  const {
    setSelected: onSelect,
    onUpdateDiv: onUpdated,
    mode,
    setModal,
  } = siteData;

  // Función para actualizar datos locales y notificar al contexto
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
        onSelect={onSelect}
        onUpdated={onUpdated}
        selected={selected}
        onLocalUpdate={onLocalUpdate}
        renderPanel={selected && PanelControls}
        mode={mode}
      >
        {elemData.subtype === "html" && (
          // Mostrar contenido HTML crudo
          <div dangerouslySetInnerHTML={{ __html: elemData.text }}></div>
        )}
        {elemData.subtype === "md" && (
          // Mostrar contenido Markdown procesado
          <div className={"content"}>
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              children={elemData.text}
              allowDangerousHtml
            />
          </div>
        )}
      </EditItem>
    </>
  );
}

export default DraggableHtml;
