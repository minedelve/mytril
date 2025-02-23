---
head:
  title: Changelog
---

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.5.0] - 2025-01-31 - insiders

**Mytril has been update on Svelte 5**

Is a most big update to mytril, is first beta release.

New requirement for use Mytril:

- Svelte 5.16 or more for use Runes and new process Class

- Optimize package 0.4.14 to 0.5.0
- Size: 284 kB to 170 kB
- Files: 230 to 169

### Features legacy and removed

- Mytril utilities has been deleted on Mytril 0.5.0

### Added

- New cli for generate CSS
- New bin env for install Mytril in your local project
- New service on **Svelte 5 (5.16)**
- New colorscheme
- New theme generator
- New customize variables for all components Mytril
- Use Runes and snippets in all components Mytril
- New root variables

### Changed

- New breakpoints system `xxl` changed on `2xl` for example

### Fixed

- Fix bad theme load with theme select in local
- Fix latency display axis for component Menu and Tooltip

## [0.4.14] - 2025-01-25

### Added

- Add first CLI for publish mytril !

## [0.4.13] - 2025-01-02

### Added

- Add new utilities `margin` and `padding` for \*\*-inline-start propertie
- Add new utilities `margin` and `padding` for \*\*-inline-end propertie

## [0.4.12] - 2025-01-01

### Changed

- Updated component `btn` not apply automatically link if use href props.

## [0.4.11] - 2024-12-31

### Fixed

- Fix colors `getColor()` variables not working

## [0.4.10] - 2024-12-30

### Added

- Add new props contentClass on toolbar component [62](https://github.com/minedelve/mytril/issues/62)

### Fixed

- Fix Col not working on GridCol [64](https://github.com/minedelve/mytril/issues/64)
- Change order for load mytril css [63](https://github.com/minedelve/mytril/issues/63)

## [0.4.9] - 2024-12-26

### Fixed

- fix background color not display on `html` DOM
- fix bad sub class for breakpoint 0. all class utilities not working 0 width screensize

## [0.4.8] - 2024-12-24

### Fixed

- New patch for component `Icon` for support @iconify/svelte libs

## [0.4.7] - 2024-12-24

### Fixed

- Add `peerDependencies` to `@iconify/svelte` for fix [plugin:vite:import-analysis] Failed to resolve import

## [0.4.6] - 2024-12-24

### Fixed

- display Css load bad preset on crash all app...

## [0.4.5] - 2024-12-24

### Fixed

- fix on CLI import CSS path not have `/n` space on file client

## [0.4.4] - 2024-12-24

### Fixed

- fix throw new ERR_MODULE_NOT_FOUND /utils on CLI in CSS logic
- fix bad path on package.json
- fix alignement on logo Mytril on prompt

## [0.4.3] - 2024-12-23

### Fixed

- fix throw new ERR_MODULE_NOT_FOUND /utils on CLI

## [0.4.2] - 2024-12-23

### Added

Mytril have the first version to CLI for config mytril on your project !

- Add `Layout` component (alpha).
- New logic for load all css Mytril directly on your `css` local.
- First version to CLI mytril

### Changed

- Updated `colors` with new variables names `--myt-color`.
- Updated `rounded` with new variables names `--myt-shape-coner`.
- Updated `text` with new variables names `--myt-typescale`.
- Update mytril theme default by new key and color for light and dark nuance.
- Optimize plugin mytril/vite for load and render.

### Fixed

- Fix vite plugin not working if mytril has not configured
- Fix css not optimize by postcss
- Fix bad compatibility with other styles

## [0.4.1] - 2024-12-18

### Added

- Add `Switch` component.
- Add `BottomView` component.

### Changed

- Updated `Container` component name to Grid for unify logic grid on Mytril.
- Updated `Row` component name to GridRow for unify logic grid on Mytril.
- Updated `Col` component name to GridCol for unify logic grid on Mytril.

## [0.4.0] - 2024-12-13

### Added

- Add `Alert` component.
- Add `AlertTitle` component.
- Add `BottomNavigation` component.
- Add `Btn` component.
- Add `Chip` component.
- Add `Dialog` component.
- Add `Divider` component.
- Add `ExpansionPanels` component.
- Add `ExpansionPanel` component.
- Add `List` component.
- Add `ListSubheader` component.
- Add `ListGroup` component.
- Add `ListItem` component.
- Add `ListItemSubtitle` component.
- Add `ListItemTitle` component.
- Add `ListItemTitle` component.
- Add `Menu` component.
- Add `SystemBar` component.
- Add `Tooltip` component.

- Add in store **innerWith** and **innerHeight** for orientation position in all component Mytril.
- Add first reader properties for use breakpoints size on components Btn.

### Changed

- Updated `App` component with a new provider for prepare for use context.

### Fixed

- Fix CSS surcharge not load correctly on build.

## [0.3.9] - 2024-12-02

### Fixed

- Fix **critial crash**, with iconify package is undefined on local project.

## [0.3.8] - 2024-11-21

### Fixed

- Fix **critial crash**, with bad path file for `app-bar-title.css`.

## [0.3.7] - 2024-11-21

### Added

- Add `Toolbar` component.
- Add `ToolbarItems` component.
- Add `ToolbarTitle` component.
- Add `AppBar` component.
- Add `AppBarTitle` component.

## [0.3.6] - 2024-11-18

### Fixed

- Fix **getLocalTheme** has not exported

## [0.3.5] - 2024-11-17

### Added

- Add `CardItem` component.
- Add `CardTitle` component.
- Add `CardSubtitle` component.
- Add `CardText` component.
- Add `CardActions` component.

### Changed

- Disabled prose heading for `h1`, `h2`, `h3`, `h4`, `h5`, `h6` .
- Update reset.css for new condition + add new value global CSS.

## [0.3.4] - 2024-11-14

### Added

- Add `Card` component.
- Delete **background** and **color** on component `Container`.
- Add new system color for generate key color on Mytil component.
- Add x11 Colors on Mytril.

### Fixed

- Fix no update store on launch local application
- Fix color not working on derived store

## [0.3.3] - 2024-11-12

### Fixed

- Variable Root CSS rounded default not working

## [0.3.2] - 2024-11-11

### Added

- Add `Img` component.
- Add `Responsive` component.
- Add aspectRatio logic for display images and content.

## [0.3.1] - 2024-11-06

### Added

- Add `Container` component.
- Add `Row` component.
- Add `Col` component.
- Add `Spacer` component.
- Add new global class **fill-height**.
- Add **offset** class.

### Fixed

- Duplication all class in max media queries in css parser

## [0.3.0] - 2024-11-02

### Added

- Add **float** class.
- Add **overflow** class.
- Add **flex** class.
- New process for customize mytril mytril.config.js to plugins/mytril.ts or js
- Mytril support Typescript and Javascript standard
- Minimify CSS files
- First components `App`
- Add new tools `useDisplay`

### Fixed

- Class `display` duplicate with min and max media queries.
- Duplication all class in max media queries
- Optimize CSS
- Fix store not working for `useTheme`

## [0.2.6] - 2024-10-27

### Added

- Add **flex-direction** class.
- Add **justify-content** class.
- Add **align-items** class.
- Add **align-self** class.
- Add **align-content** class.
- Add **flex-wrap** class.
- Add **order** class.
- Add **flex-shrink** class.
- Add **flex-grow** class.

### Fixed

- Class `display` duplicate with min and max media queries.
- Class `display` max media screen not working.
- Class `rounded` not working because **;** has generated on CLI.

## [0.2.5] - 2024-10-24

### Mytril to Svelte v5

Add support Svelte v5 for Mytril

## [0.2.4] - 2024-10-23

### Added

- Add **display** class.
- Add new api tools
- Add new function `useCapitalize` on your project

### Fixed

- Bad properties for class `position`.

## [0.2.3] - 2024-10-22

### Changed

- Change All class position with prexif `.d-{n}` to `.{n}`.

## [0.2.2] - 2024-10-19

### Added

- Add **custom config** with `mytril.config.js`.
  - New key `palette` for choice palette color in your project (**tailwind** or **material**).

### Changed

- New palette colors default on preset theme
- Delete **propertie noPalette** on `mytril.config.js`.

### Fixed

- Node dev environements errors for packPackages.

## [0.2.1] - 2024-10-18

### Changed

- New meta data on package.json

## [0.2.0] - 2024-10-18

### Added

- Add **custom config** with `mytril.config.js`.
  - New key `defaultTheme` for define default theme CSS.
  - New key `noPalette` for disabled color palette.
  - New key `colors` for custom theme for mytril.
  - New key `thresholds` for custom breakpoint or you interface.
  - New key `family` for custom font family.
  - New key `transform` for custom font transform.
  - New key `align` for custom font align.
  - New key `weight` for custom font weight.
  - New key `style` for custom style font.
  - New key `rounded` for custom border radius.
  - New key `spacing` for custom margin, padding and gap style.
- Add new key color in theme.

### Changed

- Refacto Mytril for a new core
- Change structure package
- Update preprocessor with Vite.js
- Clear legacy code

### Fixed

- **store** use too much memory
- style mytril no load correctly on first launch

## [0.1.2] - mytril - 2024-09-18

### Added

- Add **thresholds** api for call all breakpoint preset list

### Changed

- Update Readme.md for command line

## [0.1.1] - mytril - 2024-09-14

### Changed

- Add new color shadow in themes api and css

## [0.1.0] - mytril - 2024-09-09

### Changed

- Add official links for Readme
- Add License

## [0.1.0] - mytril-tools - 2024-09-09

### Changed

- Add official links for Readme
- Add License

## [0.0.10] - mytril - 2024-09-09

### Changed

- Change colors bg variables on dark default theme.

## [0.0.9] - mytril - 2024-09-06

### Fixed

- Fix error console for first install mytril on svelte project #6

## [0.0.8] - mytril - 2024-09-06

### Added

- Add **getLocalTheme** for get localstorage theme selected

### Fixed

- Clear `console.log`

## [0.0.7] - mytril - 2024-09-05

### Fixed

- css-parser crash because call bad path colors api.

## [0.0.6] - mytril - 2024-09-05

### Added

- Add **useTheme** and **setTheme** hook for set et use theme switcher
- Add internal store in `mytril core`

### Docs

- Add new documentation for customize theme and theme switcher

## [0.0.5] - mytril - 2024-09-02

### Changed

- Add eslintignore in mytril project
- Optimise size package
- Reduce size 359kB to 33.5kB (147 files to 27 files)

## [0.0.4] - mytril - 2024-09-02

### Changed

- Change preprocess for generate style mytril
- Delete legacy code
- Update plugin `mytril/plugin-vite` for create `mytril.config.js`.

## [0.0.3] - mytril - 2024-09-02

### Added

- Add generator `mytril.config.js` for edit config in local project.
- Add compile themes for generate css.
- Add plugin `mytril/plugin-vite` for vite.config.js on local project.

### Changed

- Update api themes, for var() color has load correctly.
- Update preprocess for prepare package.
- Change logique for generate theme.

## [0.0.2] - mytril - 2024-08-30

### Added

- Add api `themes` on `mytril/api` for access all thèmes on mytril.
- Add `mytril/styles` for import `css` on your projet.

### Changed

- Change palette `colors` list.

## [0.0.1] - mytril - 2024-08-29

### Added

- Add first `mytril/api` to access all `colors` list on mytril.

## [0.0.4] - mytril-tools - 2024-08-29

### Added

- `capitalize` first function for adapte your prose on render.
