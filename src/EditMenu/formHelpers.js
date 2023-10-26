import { jsxToJson } from "jsx-to-json";
import { useForm, FormProvider, useFormContext } from "react-hook-form";

// Función de ayuda para el envío del formulario (por completar según tus necesidades)
export const submitHelper = (e) => {
  // Realiza acciones relacionadas con el envío del formulario
};

// Función para transformar elementos JSX en una estructura de formulario
export const formTransformer = (elemDataText) => {
  console.log("---Inicio de la transformación", elemDataText);

  // Realiza la transformación de elementos JSX a la estructura deseada (por completar)
  const formChildren = [];

  const jsonArray = jsxToJson(elemDataText);

  console.log("---Transformación completada", jsonArray);

  return formChildren;
};

// Componente FormExpander para renderizar elementos del formulario
export const FormExpander = (props) => {
  const { formChildren } = props;
  const { register } = useFormContext(); // Obtiene todos los métodos de React Hook Form

  return formChildren.map((eachChild, index) => {
    return (
      <input
        key={index}
        {...register(eachChild.name)} // Registra el campo en el formulario
        placeholder={eachChild.placeholder} // Agrega un marcador de posición
        // Agrega otros atributos según sea necesario
      />
    );
  });
};

// Componente Formulario principal que utiliza React Hook Form
export const FormComponent = (props) => {
  const methods = useForm(); // Obtiene los métodos de React Hook Form

  return (
    <FormProvider {...methods}>
      <form onSubmit={submitHelper}>
        {/* Renderiza los elementos del formulario utilizando FormExpander */}
        <FormExpander formChildren={props.formChildren} />
        <button type="submit">Enviar</button>
      </form>
    </FormProvider>
  );
};
