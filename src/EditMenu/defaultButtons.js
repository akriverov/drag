const defaultButtons = {
  text: {
    icon: "fas fa-font", // Icono para el botón
    label: "Add Text", // Etiqueta del botón
    action: "add", // Acción al hacer clic: "add" agrega un elemento
    object: {
      type: "text", // Tipo de elemento a agregar (en este caso, texto)
      text: "click to edit!", // Contenido de texto predeterminado
      fontSize: "48px", // Tamaño de fuente
      color: "black", // Color del texto
      size: {
        width: 200,
        height: 100,
      },
    },
  },
  button: {
    icon: "fas fa-link",
    action: "modal",
    selector: "button",
    label: "Add Button",
  },
  shapes: {
    icon: "fas fa-shapes",
    label: "Add Shape",
    action: "menu",
    objects: {
      square: {
        icon: "fas fa-square-full",
        label: "Rectangle",
        action: "add",
        object: {
          type: "color",
          size: {
            width: 100,
            height: 100,
          },
          style: {
            backgroundColor: "grey",
          },
        },
      },
      circle: {
        icon: "fas fa-circle",
        label: "Circle",
        action: "add",
        object: {
          type: "color",
          size: {
            width: 100,
            height: 100,
          },
          style: {
            backgroundColor: "blue",
            borderRadius: 9999999,
          },
        },
      },
      triangle: {
        icon: "fas fa-play",
        label: "Triangle",
        action: "add",
        object: {
          type: "color",
          size: {
            width: 100,
            height: 100,
          },
          style: {
            backgroundColor: "green",
          },
        },
      },
      pentagon: {
        icon: "fas fa-star",
        label: "Pentagon",
        action: "add",
        object: {
          type: "color",
          size: {
            width: 100,
            height: 100,
          },
          style: {
            backgroundColor: "orange",
          },
        },
      },
      heart: {
        icon: "fas fa-heart",
        label: "Heart",
        action: "add",
        object: {
          type: "color",
          size: {
            width: 100,
            height: 100,
          },
          style: {
            backgroundColor: "red",
          },
        },
      },
      diamond: {
        icon: "fas fa-gem",
        label: "Diamond",
        action: "add",
        object: {
          type: "color",
          size: {
            width: 100,
            height: 100,
          },
          style: {
            backgroundColor: "purple",
          },
        },
      },
      star: {
        icon: "fas fa-star",
        label: "Star",
        action: "add",
        object: {
          type: "color",
          size: {
            width: 100,
            height: 100,
          },
          style: {
            backgroundColor: "yellow",
          },
        },
      },
    },
  },
  media: {
    icon: "fas fa-photo-video",
    label: "Add Media",
    action: "menu",
    objects: {
      image: {
        icon: "fas fa-image",
        label: "Add Image",
        action: "add",
        object: {
          type: "image",
          size: {
            width: 100,
            height: 100,
          },
          imageUri:
            "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
        },
      },
      video: {
        icon: "fas fa-film",
        label: "Add Video",
        action: "add",
        object: {
          type: "video", // Tipo de elemento a agregar (en este caso, video)
          size: {
            width: 100,
            height: 100,
          },
          videoUri: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // URL del video
        },
      },
      audio: {
        icon: "fas fa-volume-up",
        label: "Add Audio",
        action: "add",
        object: {
          type: "audio", // Tipo de elemento a agregar (en este caso, audio)
          size: {
            width: 100,
            height: 100,
          },
          audioUri: "https://example.com/audio.mp3",
        },
      },
    },
  },
  giphy: {
    icon: "far fa-laugh-beam",
    action: "selector",
    selector: "giphy",
    label: "Add Sticker",
  },
  code2: {
    icon: "fas fa-code",
    label: "Add Code",
    action: "add",
    object: {
        type: "crypto",
        size: {
            width: 100,
            height: 100,
        },
        text: "Add your code here!",
    },
},
  template: {
    icon: "far fa-object-group",
    action: "modal",
    selector: "template",
    label: "Add Template",
  },
  head: {
    icon: "fas fa-sliders-h",
    label: "Add Head",
    selector: "headconf",
    action: "selector",
  },
};

export default defaultButtons;
