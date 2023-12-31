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
          icon: "fas fa-square-full",
          name: 'square',
          type: "shapes",
          size: {
            width: 100,
            height: 100,
          },
          style: {}
        },
      },
      circle: {
        icon: "fas fa-circle",
        label: "Circle",
        action: "add",
        object: {
          icon: "fas fa-circle",
          name: 'circle',
          type: "shapes",
          size: {
            width: 100,
            height: 100,
          },
          style: {}
        },
      },
      triangle: {
        icon: "fas fa-play",
        label: "triangle",
        action: "add",
        object: {
          icon: "fas fa-play",
          name: 'triangle',
          type: "shapes",
          size: {
            width: 100,
            height: 100,
          },
          style: {}
        },
      },
      pentagon: {
        icon: "fas fa-star",
        label: "star",
        action: "add",
        object: {
          icon: "fas fa-star",
          name: 'start',
          type: "shapes",
          size: {
            width: 100,
            height: 100,
          },
          style: {}
        },
      },
      heart: {
        icon: "fas fa-heart",
        label: "Heart",
        action: "add",
        object: {
          icon: "fas fa-heart",
          name: 'heart',
          type: "shapes",
          size: {
            width: 100,
            height: 100,
          },
          style: {}
        },
      },
      diamond: {
        icon: "fas fa-gem",
        label: "Diamond",
        action: "add",
        object: {
          icon: "fas fa-gem",
          name: 'diamond',
          type: "shapes",
          size: {
            width: 100,
            height: 100,
          },
          style: {}
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
        label: "Add Media",
        action: "add",
        object: {
          type: "media",
          size: {
            width: 100,
            height: 100,
          },
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
};

export default defaultButtons;