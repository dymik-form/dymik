import type { FormField, FormItem } from "../interfaces";
import FormValidator from "../utils/form-validator";

export default class FormModel implements FormItem {
    name: string;
    description?: string | undefined;
    id: string;
    fields: FormField[];
    css_classes?: string | undefined;
    submit_endpoint?: string | undefined;
    invalid: boolean;

    constructor(form: FormItem) {
        this.name = form.name;
        this.id = form.id;
        this.fields = form.fields;
        this.css_classes = form.css_classes;
        this.submit_endpoint = form.submit_endpoint;
        this.invalid = false;
    }

    public validateField(name: string, value: any): boolean {
        const field = this.fields.find((field) => field.name === name);
        if (field) {
            field.error = ''; // Reset error message


            if (field.required && !value) {
                field.error = 'This field is required';
                this.invalid = true;
                return false;
            }

            if (field.validation_rules) {

                if (!field.required && !value) {
                    field.error = '';
                    return true;
                }

                for (const rule of field.validation_rules) {
                    const fieldValid = FormValidator.validate(rule, value);

                    if (!fieldValid) {
                        field.error = rule.message || `Invalid value for ${field.label}`;
                        this.invalid = true;
                        return false;
                    }
                }
            }
        }
        return field?.error ? false : true;
    }

    public validate(): boolean {
        this.invalid = false;
        for (const field of this.fields) {
            if (!this.validateField(field.name, field.value)) {
                this.invalid = true;
            }
        }
        return !this.invalid;
    }

    public getFormValue(): Record<string, any> {
        const formValue: Record<string, any> = {};
        for (const field of this.fields) {
            if (field.value !== undefined) {
                formValue[field.name] = field.value;
            }
        }
        return formValue;
    }

    public async submitToEndpoint(): Promise<any> {
        if (this.submit_endpoint) {
            const response = await fetch(this.submit_endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.getFormValue())
            });

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }
        }
    }


}