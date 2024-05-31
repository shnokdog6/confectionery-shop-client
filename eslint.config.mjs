import globals from "globals";
import pluginJs from "@eslint/js";
import tslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";


export default [
    pluginJs.configs.recommended,
    ...tslint.configs.recommended,
    ...fixupConfigRules(pluginReactConfig),
    {
        languageOptions: {
            globals: globals.browser
        },
        rules: {
            "react/display-name": "off",
        }
    }
];
