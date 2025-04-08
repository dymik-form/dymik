export interface FormListItem {
  name: string;
  description?: string;
  id: string;
}

export interface FormItem {
  name: string;
  description?: string;
  id: string;
  fields: FormField[];
  css_classes?: string;
  submit_endpoint?: string;
  invalid: boolean;
}

export interface FormField {
  label: string;
  name: string;
  type: string;
  required: boolean;
  props: any;
  error: string;
  classes?: string;
  value?: any;
  validation_rules: ValidationRule[]; // Ensure ValidationRule is defined or imported
}

export interface ValidationRule {
  type: 
  | 'string'
  | 'number'
  | 'boolean'
  | 'date'
  | 'enum'
  | 'regex'
  | 'min'
  | 'max'
  | 'minLength'
  | 'maxLength'
  | 'email'
  | 'url'
  | 'custom';
  message?: string;
  value?: string | number | boolean;
}
