import FormController from "../../controllers/form.controller";
import FormModel from "../../models/form";
import { currentForm } from "./index.viewmodel";

export function eventStore() {
    const urlParams = new URLSearchParams(window.location.search);
    const formId = urlParams.get('formId');

    if (formId) {
        FormController.getForm(formId).then(item => {
            console.log('Form item from query:', item);
            currentForm.value = new FormModel(item);
        }).catch(error => {
            console.error('Error fetching form:', error);
        });
    }
}


export function onFormSubmit(value: any) {
    console.log('Form submitted with value: ' + JSON.stringify(value));
}