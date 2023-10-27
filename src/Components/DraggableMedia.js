import React, { useState, useEffect, useContext } from "react";
import { Input } from "../utils/helpers";
import SiteContext from "../pageContext";
import EditItem from "./DDEditor/EditItem";

function DraggableMedia(props) {
  const { elemData, selected } = props;
  const siteData = useContext(SiteContext);
  const {
    setSelected: onSelect,
    onUpdateDiv: onUpdated,
    mode,
    setModal,
  } = siteData;

  const [mediaType, setMediaType] = useState("image"); // Default to image

  function onLocalUpdate(newProps) {
    var updatedProps = {
      ...newProps,
    };
    onUpdated(elemData.id, updatedProps);
  }

  function setMediaUri(uri) {
    onLocalUpdate({ mediaUri: uri });
  }

  async function loadMediaToUri() {
    const [file] = await window.showOpenFilePicker();
    const locFile = await file.getFile();
    const stream = await locFile.arrayBuffer();
    var blob = new Blob([stream], { type: locFile.type });
    var urlCreator = window.URL || window.webkitURL;
    var mediaUrl = urlCreator.createObjectURL(blob);

    setMediaUri(mediaUrl);
  }

  function PanelControls() {
    return (
      <>
        <Input
          placeholder={"src"}
          value={elemData.mediaUri}
          onChange={(value) => {
            setMediaUri(value);
          }}
        />

        <div
          className={"cbutton cbuttoninner"}
          onClick={() => {
            loadMediaToUri();
          }}
        >
          <img
            style={{
              width: "18px",
              height: "18px",
              marginLeft: "8px",
            }}
            src="https://i.imgur.com/rFn3Kjx.png"
          />
        </div>

        <div
          className={"cbutton cbuttoninner"}
          style={{ marginLeft: "8px" }}
          onClick={() => {
            onLocalUpdate({ maxWidth: !elemData.maxWidth });
          }}
        >
          <i className="fas fa-arrows-alt-h" />
        </div>
        <select
          value={mediaType}
          onChange={(e) => setMediaType(e.target.value)}
        >
          <option value="image">Image</option>
          <option value="video">Video</option>
          <option value="audio">Audio</option>
        </select>
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
        {mediaType === "image" ? (
          !elemData.mediaUri ? (
            <center>Set an image URL</center>
          ) : (
            <img
              style={{ width: "100%", height: "100%" }}
              src={elemData.mediaUri} // Utiliza la propiedad mediaUri para mostrar la imagen
            />
          )
        ) : mediaType === "video" ? (
          !elemData.mediaUri ? (
            <center>Set a video URL</center>
          ) : (
            <video controls style={{ width: "100%", height: "100%" }}>
              <source src={elemData.mediaUri} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )
        ) : (
          !elemData.mediaUri ? (
            <center>Set an audio URL</center>
          ) : (
            <audio controls style={{ width: "100%" }}>
              <source src={elemData.mediaUri} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          )
        )}
      </EditItem>
    </>
  );
}

export default DraggableMedia;
