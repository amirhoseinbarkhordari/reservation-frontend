import type { Keyable } from '../../types/Keyable';

const formElementsData = (formElement: HTMLFormElement): Keyable => {

  let data: Keyable = {};
  const inputElements = formElement.querySelectorAll<HTMLInputElement>("input,textarea");
  inputElements.forEach((el) => {
    let value: any = null;
    switch (el.type) {
      case "textarea":
        value = el.value === "" ? null : el.value;
        break;
      case "number":
        value = el.value === "" ? null : parseInt(el.value as string);
        break;
      default:
        value = el.value === "" ? null : el.value;
        break;
    }
    data[el.name] = value;
  })
  return data;
};

export default formElementsData;