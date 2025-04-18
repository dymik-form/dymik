import type { IValidatorLib, ValidationRule } from "../../interfaces";
import ArkTypeValidatorLib from "./libs/arktype";
import ZodValidatorLib from "./libs/zod";

export default class ValidatorUtils {
    private static lib: string = 'ark_type';

    public static customValidators: Record<string, (value: any, formValue: any) => boolean> = {};

    private static validatorLibs: { [key: string]: IValidatorLib } = {
        zod: new ZodValidatorLib(),
        ark_type: new ArkTypeValidatorLib(),
    };

    public static addLib(name: string, lib: IValidatorLib) {
        this.validatorLibs[name] = lib;
    }

    public static setLib(lib: string) {
        if (this.validatorLibs[lib]) {
            this.lib = lib;
        } else {
            throw new Error(`Validator library "${lib}" is not supported.`);
        }
    }

    static validate(rule: ValidationRule, value: any, formValue: any): boolean {

        if (rule.type === 'custom') {
            // Resolve the custom validation function from the map
            const customValidation = this.customValidators[rule.value as string];

            if (customValidation) {
                return customValidation(value, formValue);
            } else {
                throw new Error(`Custom validation function "${rule.value}" not found.`);
            }
        }

        return this.validatorLibs[this.lib].validate(rule, value);
    }
}