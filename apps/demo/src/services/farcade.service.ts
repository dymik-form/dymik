import getApdater from "@/adapters";
import DirectusService from "./directus.service";
import FormMetadataService from "./form.service";

export default class FarcadeService {
    static directusService: DirectusService;

    static formMetadataService: FormMetadataService;

    static setup() {
        this.directusService = new DirectusService(import.meta.env.VITE_DIRECTUS_URL, import.meta.env.VITE_DIRECTUS_STATIC_TOKEN);

        this.formMetadataService = new FormMetadataService(getApdater('directus'));
    }

}