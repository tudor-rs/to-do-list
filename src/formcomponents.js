import { Ui } from "./ui";
const ui = new Ui();

class FormComponents {
  constructor() {}

  createTitleInput(placeholder, value) {
    const title = ui.createTextInput();
    if (placeholder) title.placeholder = "Title";
    if (value) title.value = value;
    return title;
  }

  createDescriptionInput(placeholder, value) {
    const description = ui.createTextArea();
    if (placeholder) description.placeholder = placeholder;
    if (value) description.value = value;
    return description;
  }

  createPrioritySelect(value) {
    const priority = ui.createSelect(["Low", "Medium", "High"]);
    if (value) priority.value = value;
    return priority;
  }

  createLabelSelect(allLabels, name, currentLabel) {
    const wrapper = document.createElement("div");
    allLabels.forEach((element) => {
      const radioButton = document.createElement("input");
      radioButton.type = "radio";
      radioButton.name = name;
      radioButton.id = element;
      radioButton.value = element;
      wrapper.appendChild(radioButton);

      const labelFor = document.createElement("label");
      labelFor.htmlFor = element;
      labelFor.textContent = element;
      wrapper.appendChild(labelFor);

      //   pre-select label
      if (element === currentLabel) {
        radioButton.checked = true;
      }
    });
    return wrapper;
  }
}

export { FormComponents };
