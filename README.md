# Angular QS issue MCVE
This is a [Minimal, Complete, and Verifiable example](https://stackoverflow.com/help/mcve) that tries to demonstrate the error raised in AngularJS when using CasperJS (PhantomJS/Webkit engine). The sample was taken from the [auth0-angularjs-samples](https://github.com/auth0-samples/auth0-angularjs-samples/tree/master/01-Login) repository.

The error received is:

```js
Error: Error: [$injector:unpr] Unknown provider: authServiceProvider <- authService
http://errors.angularjs.org/1.6.8/$injector/unpr?p0=authServiceProvider%20%3C-%20authService
```

## Configuration

Open the file `sample/auth0-variables.js` and replace the `CLIENT_ID` and `DOMAIN` placeholders with a valid Auth0 client information.

## How to run

Install Docker and Docker Compose. Refer to their [documentation](https://docs.docker.com/engine/installation/) for more information.

Then run:

```sh
docker-compose up --build --abort-on-container-exit
```

The containers should stop after the test execution finishes. If that doesn't happen, you can exit the container by pressing `CTRL+C`.

To clear any orphan container run:

```sh
docker-compose down
```

## FAQ and Issues

- The container image doesn't seem to be recreated when running `docker-compose up`. --> This seems to be the intended behavior as the developers describe [here](https://github.com/docker/compose/issues/1487#issuecomment-107048571). You can force a recreate by calling `docker-compose build` from the project root.