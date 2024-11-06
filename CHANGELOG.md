# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
