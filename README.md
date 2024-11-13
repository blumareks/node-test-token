API written in Javascript and using express server

Do npm install, then run npm run server.js to run this API.

## simple test

start the session:
```sh
curl --location 'http://127.0.0.1:3001/startWebSession'
```
the result is the token:
```json
{
    "token": "whateverTokenThisLikes123"
}
```

use token in the consecutive calls:
```sh
curl --location 'http://127.0.0.1:3001/player/888' \
--header 'token: whateverTokenThisLikes123'
```

the result is the following:

```json
{
    "name": "Joe Bloggs",
    "age": 22,
    "gender": "male"
}
```

if the token is not provided - there should be an error 404;

