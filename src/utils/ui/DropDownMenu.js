import React, { useRef, useState } from "react";

// Componente funcional que representa un menú desplegable
export default function DropDownMenu({
  options,
  selectedOption,
  onSelect,
  type,
}) {
  const [selected, setSelected] = useState(false);
  const [scrollLimit, setScrollLimit] = useState(20);
  const listInnerRef = useRef();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="dropdown">
        <button
          className="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          onClick={() => {
            setSelected(!selected);
          }}
        >
          {type && type == "font" && (
            <>
              {/* Enlaces de fuentes web si el tipo es "font" */}
              <link rel="preconnect" href="https://fonts.googleapis.com"></link>
              <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin
              ></link>
              <link
                href={`https://fonts.googleapis.com/css2?family=${
                  selectedOption && selectedOption.split(" ").join("+")
                }&display=swap`}
                rel="stylesheet"
              ></link>
            </>
          )}
          <span
            style={type && type == "font" ? { fontFamily: selectedOption } : {}}
          >
            {selectedOption}
          </span>
          <span className="icon is-small">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
        {selected && (
          <div
            className="dropdown-content"
            id="dropdown-menu"
            role="menu"
            onBlur={() => {
              setSelected(false);
            }}
          >
            <div
              ref={listInnerRef}
              className="dropdown-content"
              style={{ maxHeight: "400px", overflowY: "scroll" }}
              onScroll={() => {
                if (listInnerRef.current) {
                  const { scrollTop, scrollHeight, clientHeight } =
                    listInnerRef.current;
                  if (scrollTop + clientHeight === scrollHeight) {
                    setScrollLimit(scrollLimit + 10);
                  }
                }
              }}
            >
              {options.slice(0, scrollLimit).map((elem) => {
                return (
                  <>
                    <a
                      href="#"
                      onClick={(e) => {
                        onSelect(elem);
                        setSelected(false);
                      }}
                      style={{ fontFamily: elem }}
                      className={`dropdown-item ${
                        elem == selectedOption && "is-active"
                      }`}
                    >
                      {type && type == "font" && (
                        <>
                          {/* Enlaces de fuentes web si el tipo es "font" */}
                          <link
                            rel="preconnect"
                            href="https://fonts.googleapis.com"
                          ></link>
                          <link
                            rel="preconnect"
                            href="https://fonts.gstatic.com"
                            crossOrigin
                          ></link>
                          <link
                            href={`https://fonts.googleapis.com/css2?family=${elem
                              .split(" ")
                              .join("+")}&display=swap`}
                            rel="stylesheet"
                          ></link>
                        </>
                      )}

                      {elem}
                    </a>
                    <br />
                  </>
                );
              })}
              {/* Línea divisoria opcional */}
              {/* <hr className="dropdown-divider" /> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
