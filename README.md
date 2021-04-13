# Form creater

### Form createrCreating form from JSON Object

- You can look at json format and edit it here: https://github.com/Dihlofos/form-creator/blob/main/src/services/FormJsonValidator/schema.json
- By pushing on Apply button in Config the json validation starts and as it succeed, Result tab opens;
- Form data is connected with store
- You can add buttons and point out an action which will be called by onClick event. (now it works with "edit" button, just for example)
- So, to submit a form, you should add button with action, and do submit logic as this action is called, fetched form data from redux state

# Usage

Dev start

```shell script
npm run dev
```

Prod start (with server and optimizations)

```shell script
npm run start
```

Syntax linting checks

```shell script
npm run lint
```

Tests

```shell script
npm run test
```
