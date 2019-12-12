// The ESLint browser environment defines all browser globals as valid,
// even though most people don't know some of them exist (e.g. `name` or `status`).
// This is dangerous as it hides accidentally undefined variables.
// We blacklist the globals that we deem potentially confusing.
// To use them, explicitly reference them, e.g. `window.name` or `window.status`.
const restrictedGlobals = require("confusing-browser-globals");

module.exports = {
    "root": true,
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "node": true,
        "mocha": true,
        "es6": true
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "settings": {
        "import/resolver": {
            "node": {
                "extensions": [
                    ".js",
                    ".jsx",
                    ".json"
                ]
            }
        },
        "react": {
            "pragma": "React",
            "version": "16.6"
        },
        "propWrapperFunctions": [
            "forbidExtraProps",
            // https://www.npmjs.com/package/airbnb-prop-types
            "exact",
            // https://www.npmjs.com/package/prop-types-exact
            "Object.freeze"
            // https://tc39.github.io/ecma262/#sec-object.freeze
        ]
    },
    "globals": {
        "mechanic": true,
        "yarify": true,
        "L": true
    },
    "plugins": [
        "jsx-a11y",
        "import",
        "react",
        "promise",
        "react-hooks"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:promise/recommended",
        "plugin:import/errors",
        "plugin:import/warnings"
    ],
    "rules": {

        // Disable until issues fixed related to below items.
        "require-atomic-updates": "off",

        "import/no-cycle": "off",
        "prefer-destructuring": "off",
        "no-console": "off",
        "dot-notation": "off",
        "quote-props": "off",
        "comma-dangle": "off",
        "padded-blocks": "off",
        "no-trailing-spaces": "off",
        "no-else-return": "off",
        "max-len": [
            "warn",
            200
        ],
        "no-template-curly-in-string": "error",
        "no-loop-func": "error",
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 2,
                "maxEOF": 2
            }
        ],
        "semi": "error",
        "no-var": "error",
        // disallow unnecessary semicolons
        "brace-style": [
            "error",
            "stroustrup"
        ],
        "curly": "error",
        // Not working correctly refer to
        // admin_auth_controller.js
        //
        //    "camelcase": [
        //      "warn",
        //      {
        //        "properties": "never",
        //        "ignoreDestructuring": true
        //      }
        //    ],

        "quotes": [
            "error",
            "double"
        ],
        "handle-callback-err": [
            "error",
            "^(err|error|errors)$"
        ],
        "eqeqeq": "error",
        "no-underscore-dangle": "off",
        "no-multi-spaces": [
            "error",
            {
                "exceptions":
                    {
                        "Property": false
                    }
            }
        ],
        "space-unary-ops": [
            "error",
            {
                "words": true,
                "nonwords": false
            }
        ],
        "object-curly-spacing": [
            "warn",
            "never"
        ],
        "object-curly-newline": "off",
        "keyword-spacing": [
            "error",
            {
                "before": true,
                "after": true
            }
        ],
        "template-curly-spacing": "off",
        "guard-for-in": "error",
        "no-return-assign": "error",
        "comma-style": [
            "error",
            "last"
        ],
        "comma-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "space-before-function-paren": [
            "error",
            {
                "anonymous": "always",
                "named": "never"
            }
        ],
        "lines-between-class-members": [
            "error",
            "always",
            {
                exceptAfterSingleLine: true
            }
        ],
        "space-in-parens": [
            "error",
            "never"
        ],
        "no-shadow": [
            "error",
            {
                "allow": [
                    "resolve",
                    "reject",
                    "error",
                    "err"
                ]
            }
        ],
        "no-unused-vars": "warn",
        "no-use-before-define": [
            "error",
            {
                "functions": false,
                "classes": false,
                "variables": false
            }
        ],
        "arrow-parens": [
            "error",
            "always"
        ],
        "no-confusing-arrow": [
            "error",
            {
                "allowParens": true
            }
        ],
        "no-unreachable": "error",
        "no-path-concat": "error",
        "prefer-arrow-callback": [
            "error",
            {
                "allowNamedFunctions": true
            }
        ],
        "no-await-in-loop": "off",
        "prefer-template": "error",
        "no-useless-concat": "error",
        "function-paren-newline": [
            "error",
            "consistent"
        ],
        "no-param-reassign": [
            "error",
            {
                "props": false
            }
        ],
        // http://eslint.org/docs/rules/
        "array-callback-return": "warn",
        "default-case": ["warn", {"commentPattern": "^no default$"}],
        "dot-location": ["warn", "property"],
        "new-parens": "warn",
        "no-array-constructor": "warn",
        "no-caller": "warn",
        "no-cond-assign": "error",
        "no-const-assign": "error",
        "no-control-regex": "warn",
        "no-delete-var": "warn",
        "no-dupe-args": "error",
        "no-dupe-class-members": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-empty-character-class": "error",
        "no-empty-pattern": "warn",
        "no-eval": "error",
        "no-ex-assign": "error",
        "no-extend-native": "warn",
        "no-extra-bind": "warn",
        "no-extra-label": "warn",
        "no-fallthrough": "warn",
        "no-func-assign": "error",
        "no-implied-eval": "error",
        "no-invalid-regexp": "warn",
        "no-iterator": "error",
        "no-labels": "error",
        "no-lone-blocks": "warn",
        "no-mixed-operators": [
            "warn",
            {
                "groups": [
                    ["&", "|", "^", "~", "<<", ">>", ">>>"],
                    ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
                    ["&&", "||"],
                    ["in", "instanceof"]
                ],
                "allowSamePrecedence": false
            }
        ],
        "no-multi-str": "warn",
        "no-native-reassign": "warn",
        "no-unsafe-negation": "error",
        "no-new-func": "warn",
        "no-new-object": "error",
        "no-new-symbol": "error",
        "no-new-wrappers": "error",
        "no-obj-calls": "warn",
        "no-octal": "warn",
        "no-octal-escape": "warn",
        // TODO: Remove this option in the next major release of CRA.
        // https://eslint.org/docs/user-guide/migrating-to-6.0.0#-the-no-redeclare-rule-is-now-more-strict-by-default
        "no-redeclare": ["error", {"builtinGlobals": false}],
        "no-regex-spaces": "error",
        "no-restricted-syntax": ["warn", "WithStatement"],
        "no-script-url": "warn",
        "no-self-assign": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-shadow-restricted-names": "error",
        "no-sparse-arrays": "error",
        "no-this-before-super": "warn",
        "no-throw-literal": "warn",
        "no-undef": "error",
        "no-restricted-globals": ["error"].concat(restrictedGlobals),
        "no-unexpected-multiline": "warn",
        "no-unused-expressions": [
            "error",
            {
                "allowShortCircuit": true,
                "allowTernary": true,
                "allowTaggedTemplates": true,
            }
        ],
        "no-useless-computed-key": "warn",
        "no-useless-constructor": "warn",
        "no-useless-rename": [
            "warn",
            {
                "ignoreDestructuring": false,
                "ignoreImport": false,
                "ignoreExport": false
            }
        ],
        "no-whitespace-before-property": "warn",
        "require-yield": "warn",
        "rest-spread-spacing": ["warn", "never"],
        "no-restricted-properties": [
            "error",
            {
                "object": "require",
                "property": "ensure",
                "message":
                    "Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting",
            },
            {
                "object": "System",
                "property": "import",
                "message":
                    "Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting",
            }
        ],

        // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
        "import/first": "error",
        "import/no-amd": "error",
        "import/no-webpack-loader-syntax": "error",

        // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
        "react/forbid-foreign-prop-types": ["warn", {"allowInPropTypes": true}],
        "react/jsx-no-comment-textnodes": "warn",
        "react/jsx-no-target-blank": "warn",
        "react/jsx-no-undef": "error",
        "react/jsx-uses-react": "warn",
        "react/no-danger-with-children": "warn",
        // Disabled because of undesirable warnings
        // See https://github.com/facebook/create-react-app/issues/5204 for
        // blockers until its re-enabled
        // "react/no-deprecated": "warn",
        "react/no-direct-mutation-state": "warn",
        "react/no-is-mounted": "warn",
        "react/react-in-jsx-scope": "error",
        "react/require-render-return": "error",

        "react/destructuring-assignment": "off",
        "react/require-default-props": "off",
        "react/jsx-filename-extension": "off",
        "react/no-unused-prop-types": "warn",

        "react/jsx-closing-bracket-location": [
            "warn",
            {
                "selfClosing": "tag-aligned",
                "nonEmpty": "after-props"
            }
        ],
        "react/jsx-indent": [
            "error",
            4
        ],
        "react/jsx-indent-props": [
            "error",
            4
        ],
        "react/jsx-tag-spacing": [
            "warn",
            {
                "closingSlash": "never",
                "beforeSelfClosing": "never",
                "afterOpening": "never",
                "beforeClosing": "never"
            }
        ],
        "react/jsx-one-expression-per-line": [
            "warn",
            {
                "allow": "single-child"
            }
        ],

        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",

        // Disallow multiple spaces between inline JSX props
        // https://github.com/yannickcr/eslint-plugin-react/blob/ac102885765be5ff37847a871f239c6703e1c7cc/docs/rules/jsx-props-no-multi-spaces.md
        "react/jsx-props-no-multi-spaces": "error",
        // Prevent this from being used in stateless functional components
        // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/no-this-in-sfc.md
        "react/no-this-in-sfc": "error",
        // Ensures inline tags are not rendered without spaces between them
        "react/jsx-child-element-spacing": "off",
        // Prevent usage of button elements without an explicit type attribute
        // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/button-has-type.md
        "react/button-has-type": [
            "error",
            {
                "button": true,
                "submit": true,
                "reset": false
            }
        ],
        // Prevent using this.state within a this.setState
        // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/no-access-state-in-setstate.md
        "react/no-access-state-in-setstate": "error",
        "react/jsx-curly-brace-presence": [
            "error",
            {
                "props": "never",
                "children": "never"
            }
        ],
        "react/no-typos": "error",
        // Prevent unused state values
        // https://github.com/yannickcr/eslint-plugin-react/pull/1103/
        "react/no-unused-state": "warn",
        // Prevent usage of shouldComponentUpdate when extending React.PureComponent
        // https://github.com/yannickcr/eslint-plugin-react/blob/9e13ae2c51e44872b45cc15bf1ac3a72105bdd0e/docs/rules/no-redundant-should-component-update.md
        "react/no-redundant-should-component-update": "error",
        // Require style prop value be an object or var
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
        "react/style-prop-object": "error",
        // Prevent invalid characters from appearing in markup
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
        "react/no-unescaped-entities": "error",
        // Prevent usage of .bind() in JSX props
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
        "react/jsx-no-bind": [
            "error",
            {
                "ignoreRefs": true,
                "allowArrowFunctions": true,
                "allowFunctions": false,
                "allowBind": false,
                "ignoreDOMComponents": true
            }
        ],
        // Enforce event handler naming conventions in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
        //    "react/jsx-handler-names": [
        //      "warn",
        //      {
        //        "eventHandlerPrefix": "handle",
        //        "eventHandlerPropPrefix": "on"
        //      }
        //    ],

        // Prevent duplicate props in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
        "react/jsx-no-duplicate-props": [
            "error",
            {
                "ignoreCase": true
            }
        ],
        // Enforce PascalCase for user-defined JSX components
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
        "react/jsx-pascal-case": "warn",
        // Prevent variables used in JSX to be incorrectly marked as unused
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
        "react/jsx-uses-vars": "error",
        // Prevent usage of dangerous JSX properties
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
        "react/no-danger": "warn",
        // Prevent usage of deprecated methods
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
        "react/no-deprecated": "warn",
        /*
         Override jsx-a11y rules
       */
        "jsx-a11y/href-no-hash": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/aria-activedescendant-has-tabindex": "warn",
        "jsx-a11y/aria-props": "warn",
        "jsx-a11y/aria-proptypes": "warn",
        "jsx-a11y/aria-role": "warn",
        "jsx-a11y/aria-unsupported-elements": "warn",
        "jsx-a11y/heading-has-content": "warn",
        "jsx-a11y/iframe-has-title": "warn",
        "jsx-a11y/img-redundant-alt": "warn",
        "jsx-a11y/no-access-key": "warn",
        "jsx-a11y/no-distracting-elements": "warn",
        "jsx-a11y/no-redundant-roles": "warn",
        "jsx-a11y/role-has-required-aria-props": "warn",
        "jsx-a11y/role-supports-aria-props": "warn",
        "jsx-a11y/scope": "warn"
    }
};
