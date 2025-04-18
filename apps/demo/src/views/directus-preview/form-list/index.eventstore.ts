import FormController from "@/controllers/form.controller";
import type { FormListItem } from 'dymik-core';
import { forms } from "@/views/directus-preview/form-list/index.viewmodel";

export function eventStore() {
    FormController.getForms().then(list => {
        forms.value = list as FormListItem[];
    });
}