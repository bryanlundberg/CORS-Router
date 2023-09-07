# **CORS-Router**

CORS-Router is a flexible proxy solution specifically to simplify Cross-Origin Resource Sharing (CORS) challenges within serverless web applications. It effortlessly enables you to bypass CORS limitations while accessing external API's.

### How It Works

By sending your HTTP requests through CORS-Handler using the following format:

`https://cors-router.onrender.com/proxy/https://your-url-to-fetch` 

Usage example:

    https://cors-router.onrender.com/proxy/https://pokeapi.co/api/v2/pokemon/ditto

This makes sure your frontend apps can easily fetch data without any CORS issues in production.

### Key Features

-   Seamlessly resolve CORS issues in your serverless projects.
-   Preserve the original response, whether it succeeds or fails.
-   Lightweight and easy to use.


### License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/bryanlundberg/CORS-Handler/blob/main/README.md) file for details.

----------

**Note:** CORS-Handler is not intended for malicious purposes and should be used responsibly and in compliance with all relevant regulations and policies.
