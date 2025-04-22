import type { StandardSchemaV1 as StandardSchema } from "@standard-schema/spec";

export interface FormListItem {
  name: string;
  description?: string;
  id: string;
}

export interface FormItem {
  name: string;
  description?: string;
  id?: string;
  fields: FormField[];
  css_classes?: string;
  submit_endpoint?: string;
  invalid?: boolean;
  disabled?: boolean;
}

export interface FormField {
  label?: string;
  name: string;
  type: string;
  required?: boolean;
  disabled?: boolean;
  required_text?: string;
  props: any;
  error?: string;
  classes?: string;
  value?: any;
  validation_rules?: ValidationRule[];
  // Ensure ValidationRule is defined or imported
}

export interface ValidationRule {
  type:
  | 'string'
  | 'number'
  | 'boolean'
  | 'date'
  | 'regex'
  | 'min'
  | 'max'
  | 'minLength'
  | 'maxLength'
  | 'email'
  | 'url'
  | 'custom';
  message?: string;
  value?: string | number | boolean | ((value: any, formValue: any) => boolean);
}


export interface IValidatorLib {

  schemas: Record<ValidationRule['type'], () => StandardSchema> | {};

  validate(rule: ValidationRule, value: any): boolean;

  schemaFactory: (type: ValidationRule['type'], ruleValue: any) => StandardSchema;
}