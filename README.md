# ConfigXD
ConfigXD is an npm library designed for managing environment variables in your Node.js applications. It simplifies managing environment variables by allowing you to load and access configuration files in a structured way. Additionally, it provides an easy, effective, and secure way to access and manage environment variables.

## How to Use
To use ConfigXD, follow these steps:

### Organizing Configuration Files
1. Config folder: Create a folder called config in the root directory of your project. All configuration files should be placed within this folder.

```
Project
├── config
│   ├── app.js
│   └── services.js
├── src
│   └── files
└── index.js
```

2. Configuration files: Configuration files should have a .js extension and export an object with the environment variables.
3. File names: The names of the configuration files should match the main key of the JSON object they export. For example, if you have a file named services.js, it should export an object with the main key services:

`-> ./config/services.js`
```js
module.exports = {
    services: {
        trivia: {
            url: env['TRIVIA_URL'],
            token: env['TRIVIA_TOKEN']
        },
        example: {
            url: env['EXAMPLE_URL'],
            token: env['EXAMPLE_TOKEN']
        }
    }
}
```

### Tips
- We know that defining boolean variables can be a headache, so you can use the bool function by importing it from the library. It can be used directly in JSON, just like other native functions.
- If you're wondering how to obtain environment variables at this point, we've shown you using the dotenv library, but remember that with the latest updates to Node.js, you can do this natively

The following example shows how to use the bool function and the dotenv library:

`-> ./config/app.js`
```js
const env = require('dotenv').config().parsed;
const {bool} = require('configxd')

module.exports = {
    app: {
        debug: bool(env['DEBUG']),
        token: env['TOKEN'],
        client_id: env['CLIENT_ID'],
        keys: {
            public_key: env['PUBLIC_KEY'],
            private_key: env['PRIVATE_KEY']
        },
    }
}
```

### Loading and Accessing to Configuration Files
To load configuration files and access the environment variables, you can use the following approach:
1. First, import the config function from `configxd`.
2. Use the config function to access specific environment variables. Pass the key in dot notation to specify the desired configuration.

`-> ./index.js`
```js
const {config} = require('configxd');

const token = config("app.token");
const publicKey = config("app.keys.public_key");

console.log({
    token: token,
    public_key: publicKey
});
```

In this example, you import the config function from configxd and use it to access the keys app.token and app.keys.public_key from the configuration. This function returns the value of the specified key.

By following this structure and using ConfigXD in this way, you can effectively manage and access environment variables in your Node.js application.

## Contributing
Contributions are welcome! If you have an idea to improve the library or have found an issue, feel free to open a pull request or an issue on our GitHub repository.

## License
This project is licensed under the MIT License. Please review the file for more details.

## Contact
If you have questions or comments, feel free to contact me via GitHub.

Thank you for using ConfigXD!
