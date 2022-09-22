# react-sf-building-blocks

> Basic building blocks of the Superflows component system

[![NPM](https://img.shields.io/npm/v/react-sf-themes.svg)](https://www.npmjs.com/package/react-sf-themes) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Node.js CI](https://github.com/superflows-dev/react-sf-themes/actions/workflows/node.js.yml/badge.svg)](https://github.com/superflows-dev/react-sf-themes/actions/workflows/node.js.yml)


## Documentation

<a href="http://superflows.dev/docs/category/building-blocks">Read 📖</a>

<br />

## On This Page

- [Introduction](#introduction)
- [Quickstart](#quickstart)
- [Button](#button)
- [Input](#input)
- [Nav](#nav)
- [Tests](#tests)

<br />

## Introduction

This package assumes that you have understood the basic philosophy of Superflows and are ready to explore further. Use this package to access the primary building blocks of the Superflows component system. Building blocks are atomic components with a simplistic functionality that are customizable. 

<br />

## Quickstart

### Before You Begin

Install the necessary dependencies first.

```bash
npm install --save react-bootstrap-icons
npm install --save react-sf-themes
```

### Installation

Install the react-sf-building-blocks package to gain access to the building blocks.

```bash
npm install --save react-sf-building-blocks
```

<br />

## Button

The button component is **SfButton**.

### Props

| Prop          | Type           | Mandatory | Description 
|---------------|----------------|-----------|---------------------------------
| variant       | string         | yes       | theme variant such as primary, secondary, danger, etc.
| type          | string         | yes       | theme type such as filled or outlined
| caption       | string         | yes       | button text
| onClick       | callback       | yes       | onClick callback function
| disabled      | boolean        | no        | flag to disable the button
| theme         | object         | no        | superflows theme object
| icon          | object         | no        | bootstrap icon to be shown after the text
| className     | string         | no        | any classes that need to passed to the SfButton component
| styles        | string         | no        | any styles that need to passed to the SfButton component

### Basic Usage

```tsx
import React from 'react'

import { SfButton } from 'react-sf-building-blocks'

const App = () => {

  return <div>
    <SfButton variant={'primary'} type={'filled'} caption={'Next'} onClick={(event) => {console.log('clicked', event);}}/>
  </div>
}

export default App
```

### Detailed Usage

For detailed usage please read the <a href="http://superflows.dev/docs/building-blocks/button">documentation 📖</a>

## Input

The input component is **SfInput**.

### Props

| Prop                 | Type           | Mandatory | Description 
|----------------------|----------------|-----------|---------------------------------
| variant              | string         | yes       | theme variant such as primary, secondary, danger, etc.
| caption              | string         | yes       | button text
| inputType            | string         | yes       | type of input - "name"
| onComplete           | callback       | yes       | callback function when correct input is inserted
| value                | string         | no        | value to pre-fill the inputwith
| onEnterPressed       | callback       | no        | callback function when user presses enter key
| hint                 | string         | no        | placeholder value
| disabled             | boolean        | no        | flag to disable the button
| autoFocus            | boolean        | no        | flag, which sets autofocus on load
| mode                 | string         | no        | "day" / "night"
| theme                | object         | no        | superflows theme object
| icon                 | object         | no        | bootstrap icon to be shown after the text
| classNameContainer   | string         | no        | any classes that need to passed to the container
| classNameInput       | string         | no        | any classes that need to passed to the inputs
| stylesContainer      | string         | no        | any styles that need to passed to the container
| stylesInput          | string         | no        | any styles that need to passed to the inputs

### Basic Usage

```tsx
import React from 'react'

import {SfInput} from 'react-sf-building-blocks'

const App = () => {

  return <div>
    <SfInput inputType="name" variant={'primary'} caption={'Next'} onComplete={(event: any) => {console.log('clicked', event);}}/>
  </div>
}

export default App
```

### Detailed Usage

For detailed usage please read the <a href="http://superflows.dev/docs/building-blocks/input">documentation 📖</a>

## Nav

The input component is **SfNav**.

### Props

| Prop                       | Type           | Mandatory | Description 
|----------------------------|----------------|-----------|---------------------------------
| variant                    | string         | no        | theme variant such as primary, secondary, danger, etc.
| theme                      | object         | no        | superflows theme object
| brand                      | string         | no        | brand name 
| brandLogo                  | img            | no        | brand logo image
| menu                       | json object    | no        | json object which renders the menu
| menuIcon                   | icon           | no        | icon for menu  in portrait view
| optionsIcon                | icon           | no        | icon for options in portrait view
| showSearch                 | boolean        | no        | flag, which shows / hides search input
| showSignIn                 | boolean        | no        | flag, which shows / hides sign in button
| searchCaption              | string         | no        | caption of the search input
| searchIcon                 | object         | no        | icon for the search input
| stylesBrand                | json object    | no        | styles object to customize the brand name
| stylesBrandLogo            | json object    | no        | styles object to customize the brand logo
| stylesSignIn               | json object    | no        | styles object to customize the sign in button
| stylesSearchContainer      | json object    | no        | styles object to customize the search input container
| stylesSearchInput          | json object    | no        | styles object to customize the search input
| stylesContainerDesktop     | json object    | no        | styles object to customize the nav container for landscape view
| stylesContainerMobile      | json object    | no        | styles object to customize the nav container for portrait view
| stylesContainerRightMenu   | json object    | no        | styles object to customize the right menu container for portrait view
| onHomePressed              | callback       | no        | callback after clicking on home button 
| onSearchPressed            | callback       | no        | callback after search text is entered
| onSignInPressed            | callback       | no        | callback after clicking on sign in button
| onMenuClicked              | callback       | no        | callback after clicking on any menu

### Usage

```tsx
import React from 'react'

import {SfNav} from 'react-sf-building-blocks'

const App = () => {

  return <div>
    <SfNav brand='Superflows' brandLogo="https://superflows.dev/img/superflows_gray_transparent_200.png" menu={[{caption: "About", link: "about"}, [{caption: "Solutions", link: "solutions"}, {caption: "Products", link: "products"}, {caption: "Services", link: "services"}, {caption: "Resources", link: "resources"}], {caption: "Team", link: "team"}, [{caption: "Contact", link: "contact"}, {caption: 'Instagram', link: "instagram"}, {caption: "Facebook", link: "facebook"}]]} onSearchPressed={(value) => {console.log('search pressed = ' + value);}} onMenuClicked={(link) => {console.log(link);}} onSignInPressed={() => {console.log('sign in pressed');}} onHomePressed={() => {console.log('home pressed')}} />
  </div>
}

export default App
```

### Detailed Usage

For detailed usage please read the <a href="http://superflows.dev/docs/building-blocks/nav">documentation 📖</a>


## Tests

### How To Run

To run tests locally:

```bash
npm test
```

### Results

--------------|----------|----------|----------|----------|-------------------|
File          |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
--------------|----------|----------|----------|----------|-------------------|
All files     |      100 |    82.25 |    96.36 |      100 |                   |
 Services.js  |      100 |      100 |      100 |      100 |                   |
 SfButton.tsx |      100 |    71.43 |      100 |      100 | 28,38,39,40,41,94 |
 SfInput.tsx  |      100 |    80.63 |    97.92 |      100 |... 52,653,683,684 |
 SfNav.tsx    |      100 |    84.68 |    91.67 |      100 |... 47,248,293,417 |
 Util.tsx     |      100 |    83.63 |      100 |      100 |... 48,254,257,260 |
 index.tsx    |        0 |        0 |        0 |        0 |                   |
--------------|----------|----------|----------|----------|-------------------|
Test Suites: 1 passed, 1 total
Tests:       55 passed, 55 total
Snapshots:   0 total
Time:        231.431s
Ran all test suites.

<br />


## License

MIT © [superflows-dev](https://github.com/superflows-dev)
