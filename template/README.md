# dvhb web app

> Based on [@dvhb/template-react](https://github.com/dvhb/template-react).

> ![logo](./app-logo.svg)

## Stack

- craco `5.6.2`
- react `16.12.0`
- typescript `3.7.2`
- storybook `5.3.12`

## E2E tests

To run e2e tests use the following commands (tests will be launched in the dev environment):

- with ui: `npm run test:cypress:open`
- headless: `npm run test:cypress:ci`

If you want to launch tests in other environment use:

- with ui: `npm run test:cypress:open {env}`
- headless: `npm run test:cypress:ci {env}`

where {env} is one of `local/dev/stage`, e.g. `npm run test:cypress:open stage`.

Note: run `npm start` before launch tests in local environment.
