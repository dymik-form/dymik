import DirectusAdapter from "./directus.adapter";
import type { FormMetadataServiceAdapter } from "./interfaces";

const adapter = {
    directus: new DirectusAdapter(),
}


const getApdater = (adapterName: 'directus') => {
    const adapterInstance = adapter[adapterName];
    if (!adapterInstance) {
        throw new Error(`Adapter ${adapterName} not found`);
    }

    return adapterInstance as FormMetadataServiceAdapter;
}

export default getApdater;