import { z } from "zod";
import type { ValidationRule } from "../interfaces";

export default class FormValidator {
    static validate(rule: ValidationRule, value: any): boolean {
        const type = rule.type;
        const ruleValue = rule.value;

        try {
            switch (type) {
                case "string":
                    z.string().parse(value);
                    break;
                case "number":
                    z.number().parse(value);
                    break;
                case "boolean":
                    z.boolean().parse(value);
                    break;
                case "minLength":
                    z.string().min(Number(ruleValue)).parse(value);
                    break;
                case "maxLength":
                    z.string().max(Number(ruleValue)).parse(value);
                    break;
                case "min":
                    z.number().min(Number(ruleValue)).parse(value);
                    break;
                case "max":
                    z.number().max(Number(ruleValue)).parse(value);
                    break;
                case "email":
                    z.string().email().parse(value);
                    break;
                case "url":
                    z.string().url().parse(value);
                    break;
                case "date":
                    z.date().parse(new Date(value));
                    break;
                case "regex":
                    if (typeof ruleValue === "string") {
                        z.string().regex(new RegExp(ruleValue)).parse(value);
                    } else {
                        throw new Error("Invalid rule value for regex validation. Expected a string.");
                    }
                    break;
                default:
                    throw new Error(`Unsupported validation type: ${type}`);
            }
            return true;
        } catch (e) {
            return false;
        }
    }
}