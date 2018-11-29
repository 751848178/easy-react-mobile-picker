const generateScopedName = require("./build/util");

module.exports = {
    plugins: [
        "@babel/plugin-proposal-class-properties",
        [
            "react-css-modules",
            {
                filetypes: {
                    ".scss": {
                        "syntax": "postcss-scss"
                    }
                },
                generateScopedName: generateScopedName
            }
        ]
    ],
    presets: [
        "@babel/preset-react",
        "@babel/preset-env"
    ]
}