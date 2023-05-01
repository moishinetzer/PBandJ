<h1 align="center"><img src="https://raw.githubusercontent.com/moishinetzer/PBandJ/main/public/logo.png" width="400px" /></h1>

<p align="center">
  <b>The Zero-Config Reusable Component Framework For React</b>
</p>

---

## Introduction

PBandJ is an all-in-one tool to quickly create and publish a high-quality component library, taking care of tedious setup and ensuring best practices. Publish your library to be reused across projects or shared with others!

> PBandJ works just as well for publishing vanilla TypeScript libraries too!

## What's Inside

- ⚛️ React, with TypeScript by default

- 📦 Tsup for building and bundling

- 🤖 GitHub Actions for publishing to npm and testing

- 📕 Storybook v7 running on Vite for instant HMR

- ⚡ Vite playground dev server

- 🦋 Changesets for versioning

- 🧪 Vitest for testing

- 🕵️‍♂️ Eslint for linting

- 💅 Prettier for formatting

## Getting Started

To get started run the following:

```sh
npx pbandj@latest
```

This will run you through the CLI to get your project set up with all the tools you need to get started!

---

## 🚀 Publishing

To publish your library to npm, you need to follow the steps below.

### 1. Generate a Personal Access Token

To publish your library to npm, you need to generate a personal access token. This is a token that is used to authenticate you when publishing to npm. You can generate one [here][npm-token].

If your account requires 2FA, you will need to generate an `Automation` token, otherwise, a `Publish` token will suffice.

### 2. Add the Token to GitHub Secrets

Once you have generated your token, you need to add it to your GitHub repository as a secret. This is so that the GitHub Action can use it to publish your library to npm. You can find out how to do this [here][github-secrets].

Set the name of the secret to `NPM_TOKEN` and the value to your token.

### 3. Change the GitHub Workflow Permissions

This can be done by going to the `Settings` tab of your repository, then going to `Actions` and then `General` and changing the Workflow Permissions to allow "Read and Write permissions", and make sure the box that says "Allow GitHub Actions to create and approve pull requests" is checked.

### 4. Commit a Changeset

Once you have added your token to GitHub secrets, you need to commit a changeset. Generate your first changeset by running:

```sh
npx changeset
```

Then commit the changeset log to trigger the GitHub Action.

See [below](#-changesets) for more information on how to use changesets.

> Note: PBandJ has been configured assuming projects use the `main` branch as the default branch. If you use a different branch, you will need to change the `publish.yml` file in the `.github/workflows` folder to use your default branch. You will also need to change the `config.json` file in the `.changeset` folder to use your default branch.

### 5. Merge the Release PR

Once the GitHub Action has been triggered, it will create a PR that will publish your library to npm. Once the PR has been merged, your library will be published to npm!

> Note: Sometimes the GitHub Action can fail, this can be due to a number of reasons most likely it is to do with the name of your package. If this happens, change the name of your package in `package.json`, and either rerun the action or try again from step 4.

## 📦 Bundling

This project uses [tsup][] for bundling.

Everything that PBandJ uses is hot-swappable. Meaning, if you don't want to use tsup as a bundler for whatever reason you can easily change it to your favourite bundler. Change the `build` scripts in `package.json` to whatever you want.

You can edit the `tsup.config.ts` file to your liking.

For example, if you wanted to enable code-splitting and minify the code your config would look like this:

```ts
// tsup.config.ts

export default defineConfig({
  // ...
  splitting: true,
  minify: true,
});
```

### CSS Caveat

Most bundlers don't bundle CSS by default at all. When they do, it usually requires injecting the styles directly into the head tag, which means that any classes you define could potentially clash with any other project that uses your library.

For this reason, we _highly_ recommend only using CSS Modules (which is what the `css-check` script checks for) and PostCSS plugins for other transformations.

## 📕 Storybook

[Storybook][] has been preconfigured to run on Vite, which means that you get instant HMR when developing your components. This is a huge productivity boost when developing components.

To start storybook run:

```sh
npm run storybook
```

PBandJ utilises version 7 of Storybook, which means that you can use the new Component Story Format (CSF) to write your stories.

Check out the [official documentation][] for more information on how to make the most out of the awesome features that Storybook provides.

## ⚡ Vite Dev Server

Each project is preconfigured with a [Vite][] dev server that can be started by running:

```sh
npm run dev
```

This has been provided for those that like to create components in a playground rather than a storybook-first approach.

## 🦋 Changesets

[Changesets][] are used to version your library, and publish it to npm.

To create a changesets run:

```sh
npx changeset
```

Commit the generated changelog to trigger the GitHub Action mentioned [below](#-github-actions).

The files that you commit alongside the generated changeset log are the changes that will be referenced in the release notes. This means you can commit the changeset log by itself to just trigger the publish without referencing the exact files.

## 🤖 GitHub Actions

There are two actions provided out of the box located in the `.github/workflows` folder.

`main.yml`:

- This action is run on all branches.
- It runs linting, tests, and typechecking.
- It runs typechecking, and performs a build to make sure it can be built safely.

`publish.yml`

- This action is run on the `main` branch
- If there is a changeset that was committed, a PR is created that when merged will automatically publish that version to npm.
- If a publishing PR already exists, the changes are added to that release PR.

## 🧪 Testing

There are several approaches to testing components that have been provided out of the box.

### Vitest

[Vitest][] is a testing framework that is built on top of Vite. It is a great choice for testing components, as it provides a fast and easy way to test components. It's mainly used to test the functionality of components, rather than the visual aspects, however it can be used for both.

To run the tests, run:

```sh
npm run test
```

### Storybook Tests

The recommended way to run storybook tests is to use the [Chromatic][] integration. This is a service that allows you to run visual regression tests on your components.

The setup steps can be found [here][chromatic-setup].

Once that has been set up, you can use the Storybook play function to run integration tests on your components. See the [official documentation][storybook-play-functions] for more information.

## Future Features

There is a planned configuration to be added to the CLI, that will allow simple setup of popular styling frameworks.

These are an example of some that could be added to help users get set up automatically.

- [TailwindCSS][]
- [ChakraUI][]
- [Ant Design][]
- [Emotion][]
- [Styled Components][]
- [Material UI][]
- [Chromatic][]

## Made With PBandJ

Get us started by sharing your component library!

Open up an issue [here][new-project-issue].

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://mnetzer.com"><img src="https://avatars.githubusercontent.com/u/11411486?v=4?s=100" width="100px;" alt="Moishi Netzer"/><br /><sub><b>Moishi Netzer</b></sub></a><br /><a href="https://github.com/moishinetzer/PBandJ/commits?author=moishinetzer" title="Code">💻</a> <a href="https://github.com/moishinetzer/PBandJ/commits?author=moishinetzer" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.alexmaldonado.dev/"><img src="https://avatars.githubusercontent.com/u/66364639?v=4?s=100" width="100px;" alt="Alex Maldonado"/><br /><sub><b>Alex Maldonado</b></sub></a><br /><a href="#question-AlexMNet" title="Answering Questions">💬</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Zonalds"><img src="https://avatars.githubusercontent.com/u/50281058?v=4?s=100" width="100px;" alt="Paschal"/><br /><sub><b>Paschal</b></sub></a><br /><a href="#question-Zonalds" title="Answering Questions">💬</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## License

This project is licensed under the terms of the MIT license.

[npm-token]: https://docs.npmjs.com/creating-and-viewing-access-tokens#creating-access-tokens
[github-secrets]: https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository
[tsup]: https://tsup.egoist.dev/
[storybook]: https://storybook.js.org/
[official documentation]: https://storybook.js.org/docs/7.0/react/get-started/introduction
[vite]: https://vitejs.dev/
[changesets]: https://github.com/changesets/changesets
[vitest]: https://vitest.dev/
[chromatic-setup]: https://storybook.js.org/docs/7.0/react/writing-tests/visual-testing#setup-chromatic-addon
[storybook-play-functions]: https://storybook.js.org/docs/7.0/react/writing-tests/interaction-testing
[tailwindcss]: https://tailwindcss.com/
[chakraui]: https://chakra-ui.com/
[ant design]: https://ant.design/
[emotion]: https://emotion.sh/
[styled components]: https://styled-components.com/
[material ui]: https://material-ui.com/
[chromatic]: https://www.chromatic.com/

[new-project-issue]: https://github.com/moishinetzer/PBandJ/issues/new?title=[Example%20Project]:%20&body=Please%20add%20this%20project%20that%20was%20created%20with%20PBandJ%20to%20the%20README:
