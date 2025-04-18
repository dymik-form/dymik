import FarcadeService from "@/services/farcade.service";

export default class FormController {
    static async getForms() {
        const formList = await FarcadeService.formMetadataService.loadList();

        return formList;
    }

    static async getForm(id: string) {
        const form = await FarcadeService.formMetadataService.loadItem(id);

        return form;
    }
}