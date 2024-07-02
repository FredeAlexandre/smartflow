import baseConfig, { restrictEnvAccess } from "@smartflow/eslint-config/base";
import nextjsConfig from "@smartflow/eslint-config/nextjs";
import reactConfig from "@smartflow/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
];
