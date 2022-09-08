# react-sf-building-blocks

> Basic building blocks of the Superflows component system

[![NPM](https://img.shields.io/npm/v/react-sf-themes.svg)](https://www.npmjs.com/package/react-sf-themes) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Node.js CI](https://github.com/superflows-dev/react-sf-themes/actions/workflows/node.js.yml/badge.svg)](https://github.com/superflows-dev/react-sf-themes/actions/workflows/node.js.yml)


## Documentation

[Read 📖](#http://superflows.dev/docs/category/building-blocks)

<br />

## On This Page

- [Introduction](#introduction)
- [Quickstart](#quickstart)
- [Button](#button)
- [Input](#input)
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

For detailed usage please read the [documentation 📖](#http://superflows.dev/docs/building-blocks/button)

## Input

The input component is **SfInput**.

### Props

| Prop           | Type           | Mandatory | Description 
|----------------|----------------|-----------|---------------------------------
| variant        | string         | yes       | theme variant such as primary, secondary, danger, etc.
| caption        | string         | yes       | button text
| inputType      | string         | yes       | type of input - name
| onComplete     | callback       | yes       | callback function when correct input is inserted
| value          | string         | no        | value to pre-fill the inputwith
| onEnterPressed | callback       | no        | callback function when user presses enter key
| hint           | string         | no        | placeholder value
| disabled       | boolean        | no        | flag to disable the button
| autoFocus      | boolean        | no        | flag, which sets autofocus on load
| theme          | object         | no        | superflows theme object
| icon           | object         | no        | bootstrap icon to be shown after the text
| className      | string         | no        | any classes that need to passed to the SfButton component
| styles         | string         | no        | any styles that need to passed to the SfButton component

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

For detailed usage please read the [documentation 📖](#http://superflows.dev/docs/building-blocks/input)

## Tests

### How To Run

To run tests locally:

```bash
npm test
```

### Results

PASS src/index.test.tsx (8.613s)

--------------|----------|----------|----------|----------|-------------------|
File          |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
--------------|----------|----------|----------|----------|-------------------|
All files     |      100 |    80.38 |      100 |      100 |                   |
 SfButton.tsx |      100 |    71.43 |      100 |      100 |       34,35,36,69 |
 Util.tsx     |      100 |    81.25 |      100 |      100 |... 56,162,165,168 |
 index.tsx    |        0 |        0 |        0 |        0 |                   |
--------------|----------|----------|----------|----------|-------------------|
Test Suites: 1 passed, 1 total
Tests:       20 passed, 20 total
Snapshots:   0 total
Time:        9.912s
Ran all test suites.

<br />


## License

MIT © [superflows-dev](https://github.com/superflows-dev)
