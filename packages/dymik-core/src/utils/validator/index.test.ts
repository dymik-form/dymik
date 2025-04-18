import ValidatorUtils from "./index";
import type { IValidatorLib, ValidationRule } from "../../interfaces";
import { describe, expect, it, beforeEach } from "vitest";
import { StandardSchemaV1 } from "@standard-schema/spec";

describe("ValidatorUtils", () => {
    beforeEach(() => {
        ValidatorUtils.setLib("zod");
        ValidatorUtils.customValidators = {};
    });

    it("should validate using the default library (zod)", () => {
        const rule: ValidationRule = { type: "string" };
        const value = "test";
        expect(ValidatorUtils.validate(rule, value, {})).toBe(true);
    });

    it.skip("should switch to a different library and validate", () => {
        ValidatorUtils.setLib("ark_type");
        const rule: ValidationRule = { type: "string" };
        const value = "test";
        expect(ValidatorUtils.validate(rule, value, {})).toBe(true);
    });

    it("should throw an error when switching to an unsupported library", () => {
        expect(() => ValidatorUtils.setLib("unsupported_lib")).toThrow(
            'Validator library "unsupported_lib" is not supported.'
        );
    });

    it("should add a custom validator and validate using it", () => {
        ValidatorUtils.customValidators["isEven"] = (value) => value % 2 === 0;

        const rule: ValidationRule = { type: "custom", value: "isEven" };
        expect(ValidatorUtils.validate(rule, 4, {})).toBe(true);
        expect(ValidatorUtils.validate(rule, 3, {})).toBe(false);
    });

    it("should throw an error if a custom validator is not found", () => {
        const rule: ValidationRule = { type: "custom", value: "nonExistentValidator" };
        expect(() => ValidatorUtils.validate(rule, 4, {})).toThrow(
            'Custom validation function "nonExistentValidator" not found.'
        );
    });

    it("should validate string schema", () => {
        const rule: ValidationRule = { type: "string" };
        expect(ValidatorUtils.validate(rule, "test", {})).toBe(true);
        expect(ValidatorUtils.validate(rule, 123, {})).toBe(false);
    });

    it("should validate number schema", () => {
        const rule: ValidationRule = { type: "number" };
        expect(ValidatorUtils.validate(rule, 123, {})).toBe(true);
        expect(ValidatorUtils.validate(rule, "test", {})).toBe(false);
    });

    it("should validate boolean schema", () => {
        const rule: ValidationRule = { type: "boolean" };
        expect(ValidatorUtils.validate(rule, true, {})).toBe(true);
        expect(ValidatorUtils.validate(rule, "true", {})).toBe(false);
    });

    it("should validate email schema", () => {
        const rule: ValidationRule = { type: "email" };
        expect(ValidatorUtils.validate(rule, "test@example.com", {})).toBe(true);
        expect(ValidatorUtils.validate(rule, "invalid-email", {})).toBe(false);
    });

    it("should validate url schema", () => {
        const rule: ValidationRule = { type: "url" };
        expect(ValidatorUtils.validate(rule, "https://example.com", {})).toBe(true);
        expect(ValidatorUtils.validate(rule, "invalid-url", {})).toBe(false);
    });

    it("should validate minLength schema", () => {
        const rule: ValidationRule = { type: "minLength", value: 5 };
        expect(ValidatorUtils.validate(rule, "12345", {})).toBe(true);
        expect(ValidatorUtils.validate(rule, "123", {})).toBe(false);
    });

    it("should validate maxLength schema", () => {
        const rule: ValidationRule = { type: "maxLength", value: 5 };
        expect(ValidatorUtils.validate(rule, "12345", {})).toBe(true);
        expect(ValidatorUtils.validate(rule, "123456", {})).toBe(false);
    });

    it("should validate min schema", () => {
        const rule: ValidationRule = { type: "min", value: 10 };
        expect(ValidatorUtils.validate(rule, 15, {})).toBe(true);
        expect(ValidatorUtils.validate(rule, 5, {})).toBe(false);
    });

    it("should validate max schema", () => {
        const rule: ValidationRule = { type: "max", value: 10 };
        expect(ValidatorUtils.validate(rule, 5, {})).toBe(true);
        expect(ValidatorUtils.validate(rule, 15, {})).toBe(false);
    });

    it("should validate regex schema", () => {
        const rule: ValidationRule = { type: "regex", value: "^test$" };
        expect(ValidatorUtils.validate(rule, "test", {})).toBe(true);
        expect(ValidatorUtils.validate(rule, "not-test", {})).toBe(false);
    });

    it("should validate date schema", () => {
        const rule: ValidationRule = { type: "date" };
        expect(ValidatorUtils.validate(rule, new Date().toISOString(), {})).toBe(true);
        expect(ValidatorUtils.validate(rule, "invalid-date", {})).toBe(false);
    });

    it("should validate custom schema", () => {
        ValidatorUtils.customValidators["isPositive"] = (value) => value > 0;
        const rule: ValidationRule = { type: "custom", value: "isPositive" };
        expect(ValidatorUtils.validate(rule, 5, {})).toBe(true);
        expect(ValidatorUtils.validate(rule, -5, {})).toBe(false);
    });
});

describe("ValidatorUtils with ArkType library", () => {
    beforeEach(() => {
        ValidatorUtils.setLib("ark_type");
    });

    it("should validate string schema", () => {
        const rule: ValidationRule = { type: "string" };
        
        expect(ValidatorUtils.validate(rule, "test", {})).toBe(true);
        expect(ValidatorUtils.validate(rule, 123, {})).toBe(false);
    });

    it("should validate number schema", () => {
        const rule: ValidationRule = { type: "number" };
        expect(ValidatorUtils.validate(rule, 123, {})).toBe(true);
        expect(ValidatorUtils.validate(rule, "test", {})).toBe(false);
    });

    it("should validate boolean schema", () => {
        const rule: ValidationRule = { type: "boolean" };
        expect(ValidatorUtils.validate(rule, true, {})).toBe(true);
        expect(ValidatorUtils.validate(rule, "true", {})).toBe(false);
    });

    it("should validate email schema", () => {
        const rule: ValidationRule = { type: "email" };
        expect(ValidatorUtils.validate(rule, "test@example.com", {})).toBe(true);
        expect(ValidatorUtils.validate(rule, "invalid-email", {})).toBe(false);
    });

    it("should validate url schema", () => {
        const rule: ValidationRule = { type: "url" };
        expect(ValidatorUtils.validate(rule, "https://example.com", {})).toBe(true);
        expect(ValidatorUtils.validate(rule, "invalid-url", {})).toBe(false);
    });

    it("should validate minLength schema", () => {
        const rule: ValidationRule = { type: "minLength", value: 5 };
        expect(ValidatorUtils.validate(rule, "12345", {})).toBe(true);
        expect(ValidatorUtils.validate(rule, "123", {})).toBe(false);
    });

    it("should validate maxLength schema", () => {
        const rule: ValidationRule = { type: "maxLength", value: 5 };
        expect(ValidatorUtils.validate(rule, "12345", {})).toBe(true);
        expect(ValidatorUtils.validate(rule, "123456", {})).toBe(false);
    });

    it("should validate min schema", () => {
        const rule: ValidationRule = { type: "min", value: 10 };
        expect(ValidatorUtils.validate(rule, 15, {})).toBe(true);
        expect(ValidatorUtils.validate(rule, 5, {})).toBe(false);
    });

    it("should validate max schema", () => {
        const rule: ValidationRule = { type: "max", value: 10 };
        expect(ValidatorUtils.validate(rule, 5, {})).toBe(true);
        expect(ValidatorUtils.validate(rule, 15, {})).toBe(false);
    });

    it("should validate regex schema", () => {
        const rule: ValidationRule = { type: "regex", value: "^test$" };
        expect(ValidatorUtils.validate(rule, "test", {})).toBe(true);
        expect(ValidatorUtils.validate(rule, "not-test", {})).toBe(false);
    });

    it("should validate date schema", () => {
        const rule: ValidationRule = { type: "date" };
        expect(ValidatorUtils.validate(rule, new Date().toISOString(), {})).toBe(true);
        expect(ValidatorUtils.validate(rule, "invalid-date", {})).toBe(false);
    });


    it("should validate custom schema", () => {
        ValidatorUtils.customValidators["isPositive"] = (value) => value > 0;
        const rule: ValidationRule = { type: "custom", value: "isPositive" };
        expect(ValidatorUtils.validate(rule, 5, {})).toBe(true);
        expect(ValidatorUtils.validate(rule, -5, {})).toBe(false);
    });
});
