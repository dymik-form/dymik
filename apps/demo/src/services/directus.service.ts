import { Directus } from "@directus/sdk";

export default class DirectusService {

    instance: Directus<any>;

    constructor(url: string, token: string) {
        this.instance = new Directus<any>(url, {
            auth: {
                staticToken: token,
            },
        });
    }

}