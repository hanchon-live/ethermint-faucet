# Ethermint Faucet Frontend

Frontend that works with this [Faucet](https://github.com/hanchon/faucet).

## Configuration

Set the oauth env variables:
`REACT_APP_AUTH0_DOMAIN`
`REACT_APP_AUTH0_CLIENT_ID`
`REACT_APP_AUTH0_AUDIENCE`

## Build

```sh
yarn install
yarn build
```

## Run locally

```sh
yarn install
yarn start
```

## TODOs:

Validate wallet encoding before sending it to the API.
Add admin views if the user has the `manage:faucet` scope set.
