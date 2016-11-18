module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "globals": {
        "describe": false,
        "it": false,
        "expect": false,
        "document": false
    },
    "rules": {
    	"no-param-reassign": "off",
    	"no-console": "off",
        "comma-dangle": ["error", "never"],
        "quote-props": ["error", "consistent"],
        "dot-notation": "off",
        "no-prototype-builtins": "off",
        "no-restricted-syntax": ["off", "FunctionExpression", "ForInStatement"]
    }
};