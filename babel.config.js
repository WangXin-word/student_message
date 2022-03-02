/*
 * @Author: 汪鑫
 * @Date: 2022-02-10 14:52:58
 * @Annotate: 输入这页的内容
 * @LastEditTime: 2022-02-25 18:49:43
 * @LastEditors: 汪鑫
 * @Description: 
 * @FilePath: /management/babel.config.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
    // "presets": [["@babel/preset-env", { "modules": false }]],
    "plugins": [
      [
        "component",
        {
          "libraryName": "element-ui",
          "styleLibraryName": "theme-chalk"
        },
      ]
    ]
}
