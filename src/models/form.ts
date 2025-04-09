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
    disabled?: boolean;

    constructor(form: FormItem) {
        this.name = form.name;
        this.id = form.id;
        this.description = form.description;
        this.fields = form.fields;
        this.css_classes = form.css_classes;
        this.submit_endpoint = form.submit_endpoint;
        this.invalid = false;
        this.disabled = form.disabled || false;
    }

    public validateField(name: string, value: any): boolean {
        const field = this.fields.find((field) => field.name === name);
        if (field) {
            field.error = ''; // Reset error message


            if (field.required && !value) {
                field.error = field.required_text || `${field.label} is required`;
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

    public setFormValue(value: Record<string, any>): void {
        for (const field of this.fields) {
            if (value.hasOwnProperty(field.name)) {
                field.value = value[field.name];
            }
        }
    }

    public setFieldValue(name: string, value: any): void {
        const field = this.fields.find((field) => field.name === name);
        if (field) {
            field.value = value;
        }
    }

    public reset(): void {
        for (const field of this.fields) {
            field.value = undefined;
            field.error = '';
        }

        this.invalid = false;
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

            this.reset();

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }
        }
    }


}