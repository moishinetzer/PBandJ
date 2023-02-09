<h1 align="center"><img src="https://raw.githubusercontent.com/moishinetzer/PBandJ/main/public/logo.png" width="400px" /></h1>

<p align="center">
  <b>The Reusable Component Framework For React</b>
</p>

---

## Introduction

PBandJ is an all-in-one tool to quickly create and publish a high-quality component library, taking care of tedious setup and ensuring best practices. Publish your library to be reused across projects or shared with others!

## What's Inside

- ⚛️ React, with TypeScript by default

- 📦 Tsup for building and bundling

- 🤖 GitHub Actions for publishing to npm and testing

- 📕 Storybook v7 running on Vite for instant HMR

- ⚡ Vite playground dev server

- 🦋 Changesets for versioning

## Installation

To get started run the following:

```sh
npx pbandj@latest
```

This will run you through the CLI to get your project set up with all the tools you need to get started!

---

## 📦 Bundling

This project uses [tsup][] for bundling.

Everything that PBandJ uses is hot-swappable. Meaning, if you don't want to use tsup as a bundler for whatever reason you can easily change it to your favourite bundler.

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
- It runs typechecking, and performs a build to make sure it can be built safely.

`publish.yml`

- This action is run on the `main` branch
- If there is a changeset that was committed, a PR is created that when merged will automatically publish that version to npm.
- If a publishing PR already exists, the changes are added to that release PR.

## 🧪 Testing

## Future Features

There is a planned configuration to be added to the CLI, that will allow simple setup of popular styling frameworks.

These are an example of some that could be added to help users get set up automatically.

- TailwindCSS
- ChakraUI
- MUI
- Bootstrap
- Ant Design

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://mnetzer.com"><img src="https://avatars.githubusercontent.com/u/11411486?v=4?s=100" width="100px;" alt="Moishi Netzer"/><br /><sub><b>Moishi Netzer</b></sub></a><br /><a href="https://github.com/moishinetzer/PBandJ/commits?author=moishinetzer" title="Code">💻</a> <a href="https://github.com/moishinetzer/PBandJ/commits?author=moishinetzer" title="Documentation">📖</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## License

This project is licensed under the terms of the MIT license.

[tsup]: https://tsup.egoist.dev/
[vite]: https://vitejs.dev/
[changesets]: https://github.com/changesets/changesets
