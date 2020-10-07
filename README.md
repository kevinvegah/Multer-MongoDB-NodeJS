## Multer-MongoDB-NodeJS

### ¿How to run the application?

Execute the following command in the terminal to install the dependencies of the `package.json`:

```
$ npm install
```

Create an .env file and place the following environment variables:

```
MONGO_URI = "put here the database URL. EX: mongodb://localhost:27017/your-mongoDB "
```

You can modify the PORT in the `config.js` file. The default port is `4000` for local.

Once the previous settings have been made, run the following command in the terminal to run the application:

#### Developer mode

```
$ npm run dev
```

If the command was executed correctly, the following information will appear:

```
Environment:  development
Listening to the port 4000
ONLINE database
```

Or if you want to run the application in production mode, you can use the next command:

#### Production mode

```
$ npm start
```

If the command was executed correctly, the following information will appear:

```
Environment:  production
Listening to the port 4000
ONLINE database
```

Once the application is executed correctly, we can use the url `http://localhost:4000` to interact with the API.

## Documentation API

You can use the next endpoints:

```
add the routes here.
```
