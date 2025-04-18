import { z } from "zod";
import type { IValidatorLib, ValidationRule } from "@/interfaces";

export default class ZodValidatorLib implements IValidatorLib {

    schemas: Record<ValidationRule['type'], () => z.ZodTypeAny> = {} as Record<ValidationRule['type'], () => z.ZodTypeAny>;

    validate({ type, value: ruleValue }: ValidationRule, value: any): boolean {
        try {
            const schema = this.schemaFactory(type, ruleValue);
            // Zod does not support date validation directly, so we need to convert the value to a Date object if the type is "date"
            schema.parse(type === "date" ? new Date(value) : value);

            return true;
        } catch {
            return false;
        }
    }

    schemaFactory(type: ValidationRule['type'], ruleValue: any) {
        this.schemas = {
            string: () => z.string(),
            number: () => z.number(),
            boolean: () => z.boolean(),
            email: () => z.string().email(),
            url: () => z.string().url(),
            minLength: () => z.string().min(Number(ruleValue)),
            maxLength: () => z.string().max(Number(ruleValue)),
            min: () => z.number().min(Number(ruleValue)),
            max: () => z.number().max(Number(ruleValue)),
            regex: () => {
                if (typeof ruleValue === "string") {
                    return z.string().regex(new RegExp(ruleValue));
                } else {
                    throw new Error("Invalid rule value for regex validation. Expected a string.");
                }
            },
            date: () => z.date(),
            custom: () => {
                if (typeof ruleValue === "function") {
                    return z.custom(ruleValue);
                } else {
                    throw new Error("Invalid rule value for custom validation. Expected a function.");
                }
            },
        };

        const schema = this.schemas[type]();
        if (!schema) throw new Error(`Unsupported rule type: ${type}`);

        return schema;
    }
}
