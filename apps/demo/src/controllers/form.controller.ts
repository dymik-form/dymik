import FormMetadataService from "@/services/form.service";

export default class FormController {
    static async getForms() {
        const formList = await FormMetadataService.loadList();

        return formList;
    }

    static async getForm(id: string) {
        const form = await FormMetadataService.loadItem(id);

        return form;
    }
}