import { Directus } from "@directus/sdk";

export default class DirectusService {

    static instance: Directus<any>;

    static init(url: string, token: string) {
        this.instance = new Directus<any>(url, {
            auth: {
                staticToken: token,
            },
        });
        
        return this.instance;
    }

    


}