# Eleventy boilerplate for Visual Framework 1.3

This allows you to use the [11ty](https://www.11ty.io) static site generator
with direct access to Visual Framework 1.3 and 2.0 components.

This is possible as the VF 2.0 is [no-conflict with VF 1.3](https://visual-framework.github.io/vf-welcome/).

**This is in active development as of 2019.08.16**

- We recommend using this over [EBI-Boilerplate-Jekyll](https://github.com/ebiwd/EBI-Boilerplate-Jekyll)
as node+Eleventy facilitates more flexible solutions and frees a Ruby dependency.

## 1. Creating a new project powered by ebi-eleventy-boilerplate

There are two methods you can use:

1. ~~Use the interactive npm template [RECOMMENDED]~~ Not yet implemented
    - If you don't have npm, [install it](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
    - The [`create-vf-eleventy`](https://github.com/visual-framework/create-vf-eleventy) project allows you to interactively create a new site by typing<br/> `npm init @visual-framework/vf-eleventy your-new-site-name ebi-eleventy-boilerplate`
    - Follow the prompts
1. The GitHub template
    - Click the "[Use this template](https://help.github.com/en/articles/creating-a-repository-from-a-template)" method; quick url: https://github.com/visual-framework/ebi-eleventy-boilerplate/generate
    - Follow the prompts and then clone the new project to your local machine

## 2. Configuring your new site

- In `package.json` update `vfConfig`
- In `elevnety.js` update `pathPrefix`
- Update `./src/site/_data/siteConfig.js`

Otherwise configure gulp and eleventy as you would for any other project.

## 3. Developing your new site

1. You'll need to [install npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
1. If you don't have `yarn`, install it
   - https://yarnpkg.com/lang/en/docs/install/
1. Install all the things
   - `yarn install`
1. Generate the site in `/build`
   - `gulp dev` renders and serves
   - `gulp build` build static assets
1. Edit all the things:
   - pages: `./src/site/`
   - templates: `.src/site/_includes`
   - site information: `./src/site/_data`
   - local css: `./src/scss`

## 4. Adding Visual Framework components

To add a component you can use npm/Yarn or install it manually.

In either case you'll need to re-run `gulp dev` to ensure the component is fully loaded.

### By package

- installation: `yarn add @visual-framework/vf-logo`
- updating components: `yarn upgrade-interactive --latest`
  - alias: `npm run update-components`

### Manual installation for customisation

1. Download a pattern
2. Copy it to `./src/components/vf-component-name`

### Create your own local component

You can add a custom VF-compatible component to `./src/components` and use it in
your site.

- `gulp vf-component`

You'll find a `vf-sample` component already placed in `./src/components`

## 5. Deploying

- to come

## 6. Footnotes

- Why `yarn` and not `npm`?
  For the particular structure of the Visual Framework components, Yarn is considerably
  faster at installing and does so more efficiently (about half the total file size). You'll
  also be able to use `yarn upgrade-interactive --latest`, which makes it easier to update
  VF components.
