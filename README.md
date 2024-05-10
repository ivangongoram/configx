# ConfigXD
ConfigXD is an npm library designed to environment variable management in your Node.js applications, simplifies the management of environment variables in your Node.js application by allowing you to load and access configuration files in a structured way. It provides an easy and effective way to access and manage environment variables, allowing you to configure your applications dynamically according to the environment in which they run.

## How to Use ConfigXD
To use ConfigXD, follow these steps:

### Organizing Configuration Files
- Config folder: Create a folder called config in the root directory of your project. All configuration files should be placed within this folder.
- Configuration files: Configuration files should have a .js extension and export an object with the environment variables.
- File names: The names of the configuration files should match the main key of the JSON object they export. For example, if you have a file named services.js, it should export an object with the main key services.
```
-> ./config/services.js
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
- If you're wondering how to obtain environment variables at this point, the example shows the use of the dotenv library, but remember that with the latest updates to Node.js, you can do this natively

The following example shows how to use the bool function and the dotenv library:
```
-> ./config/app.js
const env = require('dotenv').config().parsed;
const {bool} = require('configxd')

module.exports = {
    app: {
        debug: bool(env['DEBUG]),
        token: env['TOKEN],
        client_id: env['CLIENT_ID'],
        keys: {
            public_key: env['PUBLIC_KEY'],
            private_key: env['PRIVATE_KEY']
        },
    }
}
```

### Loading Configuration Files with ConfigXD
To load configuration files and access the environment variables using ConfigXD, you can use the following approach:
1. First, import the config function from ConfigXD.
2. Use the config function to access specific environment variables. Pass the key in dot notation to specify the desired configuration.
```
const {config} = require('configxd');

config("app.token");

config("app.keys.public_key");
```

In this example, you import the config function from configxd and use it to access the keys app.token and app.keys.public_key from the configuration. This function returns the value of the specified key.

By following this structure and using ConfigXD in this way, you can effectively manage and access environment variables in your Node.js application.

## Contributing
Contributions are welcome! If you have an idea to improve the library or have found an issue, feel free to open a pull request or an issue on our GitHub repository.

## License
This project is licensed under the MIT License. Please review the file for more details.

## Contact
If you have questions or comments, feel free to contact us via GitHub.

Thank you for using ConfigXD!
