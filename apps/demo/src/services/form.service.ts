import type { FormMetadataServiceAdapter } from '@/adapters/interfaces';
import type { FormItem } from 'dymik-core';

export default class FormMetadataService {


    constructor(public readonly adapter: FormMetadataServiceAdapter) { }

    async loadList() {
        return this.adapter.loadList();
    }

    async loadItem(id: string): Promise<FormItem> {

        return this.adapter.loadItem(id);

    }
}