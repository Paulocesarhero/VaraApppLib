// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo", "prettier", "plugin:@typescript-eslint/recommended"],
  plugins: ["prettier", "@typescript-eslint", "react-native"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "lf",
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
