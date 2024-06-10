import globals from "globals";
import pluginJs from "@eslint/js";
import tslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import unusedImports from "eslint-plugin-unused-imports";
import { fixupConfigRules } from "@eslint/compat";


export default [
    pluginJs.configs.recommended,
    ...tslint.configs.recommended,
    ...fixupConfigRules(pluginReactConfig),
    {
        languageOptions: {
            globals: globals.browser
        },
        plugins: {
            "unused-imports": unusedImports
        },
        rules: {
            "react/display-name": "off",
            "react/prop-types": "off",
            "@typescript-eslint/no-unused-vars": "off",
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/ban-types": "warn",
            "unused-imports/no-unused-imports": "error",
            "unused-imports/no-unused-vars": [
                "warn",
                {
                    "vars": "all",
                    "varsIgnorePattern": "^_",
                    "args": "after-used",
                    "argsIgnorePattern": "^_",
                },
            ]
        }
    }
];
