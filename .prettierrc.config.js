module.exports = {
  trailingComma: "all", // 末尾のカンマあり
  tabWidth: 2, // tab の長さは半角スペース 2 つ
  semi: true, // セミコロンあり
  singleQuote: true, // シングルクォーテーションに統一
  jsxSingleQuote: true, //jsx もシングルクォーテーションに統一
  plugins: [require("prettier-plugin-tailwindcss")],
};
