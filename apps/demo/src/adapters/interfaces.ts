import type { FormItem } from "dymik-core";

export interface FormMetadataServiceAdapter {
    loadList(): Promise<FormItem[]>;
    loadItem(id: string): Promise<FormItem>;
}
