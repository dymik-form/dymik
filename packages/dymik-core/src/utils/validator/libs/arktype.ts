import { ArkErrors, type, Type } from "arktype";
import type { IValidatorLib, ValidationRule } from "@/interfaces";

export default class ArktypeValidatorLib implements IValidatorLib {
    schemas: Record<ValidationRule['type'], (ruleValue?: any) => Type<any>> = {} as Record<ValidationRule['type'], () => Type>;

    validate({ type: ruleType, value: ruleValue }: ValidationRule, value: any): boolean {
        const schema = this.schemaFactory(ruleType, ruleValue);
        const result = schema(value);

        return !(result instanceof ArkErrors);
    }

    schemaFactory(validationType: ValidationRule['type'], ruleValue: any): Type<any> {
        this.schemas =  {
            string: () => type("string"),
            number: () => type("number"),
            boolean: () => type("boolean"),
            email: () => type("string.email"),
            url: () => type("string.url"),
            minLength: () => type(`string >= ${Number(ruleValue)}`),
            maxLength: () => type(`string <= ${Number(ruleValue)}`),
            min: () => type(`number >= ${Number(ruleValue)}`),
            max: () => type(`number <= ${Number(ruleValue)}`),
            regex: () => type(`string & /${ruleValue}/`),
            date: () => type("string.date"),
            custom: () => {
                if (typeof ruleValue === "function") {
                    return type((val: any) => ({
                        data: val,
                        problems: ruleValue(val) ? undefined : [{ path: [], message: "Custom validation failed" }],
                    }));
                } else {
                    throw new Error("Invalid rule value for custom validation. Expected a function.");
                }
            },
        };
    
        const schemaGenerator = this.schemas[validationType];
        if (!schemaGenerator) {
            throw new Error(`Unsupported rule type: ${type}`);
        }
        return schemaGenerator(ruleValue);
    }
}
