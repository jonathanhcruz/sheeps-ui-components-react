# sheeps-ui-components-react

This project was created with the intention of simplifying the creation of personal projects and practicing new concepts.

---

# Install package

to install this library it’s only run the next script in your terminal.

```bash
npm i name-package
```

## Uses

```tsx
import { component } from "name-package"
```

---

## Technologies

[Vite](https://github.com/vitejs/vite)

[Typescript](https://www.typescriptlang.org/) 

[SWC](https://swc.rs/) 

[React](https://react.dev/) 

[Vitest](https://vitest.dev/)

[Storybook](https://storybook.js.org/) 

---

## Environment development

For this project it is important to use **node** in version 18 or higher.

### Install dependencies

```bash
npm run i 
```

---

# Scripts

That part is only used in the development process.

### Storybook

We use workspace isolation in Storybook to construct and document components.

```bash
npm run storybook
```

![storybook references!](https://raw.githubusercontent.com/jonathanhcruz/sheep-ui-components/main/public/storybook.png "storybook")

### Build-storybook

We can build the project using Storybook and publish this page as documentation.

```bash
nom run build-storybook
```

### Build

This option is only for constructing the app to publish it in package stores.

```bash
npm run build 
```

### Test

We can use this option to test the components in the terminal.

```bash
npm run test
```
![test references!](https://raw.githubusercontent.com/jonathanhcruz/sheep-ui-components/main/public/test.png "test")

### Test-coverage

We can use this option to test the components in the terminal and check the coverage 

```bash
npm run test-coverage
```

![test coverage references!](https://raw.githubusercontent.com/jonathanhcruz/sheep-ui-components/main/public/test-coverage.png "test coverage")


### Test-watch

We can use this option when you want to keep track of changes in the test.

```bash
npm run test-watch
```

![test watch references!](https://raw.githubusercontent.com/jonathanhcruz/sheep-ui-components/main/public/test-watch.png "test watch")

### Test-ui

This option is used when you want to see the test in the web UI.

```bash
nom run test-ui
```

![test ui references!](https://raw.githubusercontent.com/jonathanhcruz/sheep-ui-components/main/public/test-ui.png "test ui")


![test ui web references!](https://raw.githubusercontent.com/jonathanhcruz/sheep-ui-components/main/public/test-ui-web.png "test ui web")

---

# GitHub actions

This project has two different implementations: one for creating a pull request and another for when it is finished.

[GITHUB config](./.github/workflows/README.md)

### Test

![Github Action test references!](https://raw.githubusercontent.com/jonathanhcruz/sheep-ui-components/main/public/github-action-test.png "Github Action test")

### Deploy

![Github Action deploy references!](https://raw.githubusercontent.com/jonathanhcruz/sheep-ui-components/main/public/github-action-deploy.png "Github Action deploy")

---

### Setup created by [@jonathanhcruz](https://github.com/jonathanhcruz)
 