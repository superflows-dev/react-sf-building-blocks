# react-sf-building-blocks

> Basic building blocks of the Superflows component system

[![NPM](https://img.shields.io/npm/v/react-sf-themes.svg)](https://www.npmjs.com/package/react-sf-themes) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Node.js CI](https://github.com/superflows-dev/react-sf-themes/actions/workflows/node.js.yml/badge.svg)](https://github.com/superflows-dev/react-sf-themes/actions/workflows/node.js.yml)

<br />

## On This Page

- [Introduction](#introduction)
- [Quickstart](#quickstart)
- [Button](#button)
- [Tests](#tests)

<br />

## Introduction

This package assumes that you have understood the basic philosophy of Superflows and are ready to explore further. Use this package to access the primary building blocks of the Superflows component system. This package provides the following components:

- Button

<br />

## Quickstart

### Before You Begin

#### Bootstrap

Superflows is designed using Bootstrap hence it is important to install the necessary dependencies first.

```bash
npm install --save bootstrap
npm install --save react-bootstrap
npm install --save react-bootstrap-icons
```

#### Superflows Customization

For customizing the building blocks, react-sf-themes package is used. Install it.

```bash
npm install --save react-sf-themes
```

### Installation

Install the react-sf-building-blocks package to gain access to the building blocks.

```bash
npm install --save react-sf-building-blocks
```

<br />

## Button

Button component supports the following props:

| Prop          | Type           | Mandatory | Description 
|---------------|----------------|-----------|---------------------------------
| variant       | string         | yes       | theme variant such as primary, secondary, danger, etc.
| type          | string         | yes       | theme type such as filled or outlined
| caption       | string         | yes       | button text
| onClick       | callback       | yes       | onClick callback function
| disabled      | boolean        | no        | flag to disable the button
| theme         | object         | no        | superflows theme object
| icon          | object         | no        | bootstrap icon to be shown after the text

### Basic Usage

```tsx
import React from 'react'

import { SfButton } from 'react-sf-building-blocks'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  return <div>
    <SfButton variant={'primary'} type={'filled'} caption={'Next'} onClick={(event) => {console.log('clicked', event);}}/>
  </div>
}

export default App
```

### Disabled Button

```tsx
<SfButton variant={'danger'} type={'outlined'} caption={'Next'} onClick={(event) => {console.log('clicked', event);}} disabled={true}/>
```

### Icon Button

Import the icon from bootstrap icons and then pass it in the props.

```tsx
import { ArrowRight } from 'react-bootstrap-icons';
.
.
.
<SfButton variant={'warning'} type={'filled'} caption={'Next'} onClick={(event) => {console.log('clicked', event);}} icon={<ArrowRight />}/>
```

## Tests

### How To Run

To run tests locally:

```bash
npm test
```

### Results

PASS src/index.test.tsx (8.613s)
- ✓ SfButton: Basic Render Primary Filled (232ms)
- ✓ SfButton: Basic Render Secondary Filled (208ms)
- ✓ SfButton: Basic Render Danger Filled (208ms)
- ✓ SfButton: Basic Render Warning Filled (208ms)
- ✓ SfButton: Basic Render Success Filled (208ms)
- ✓ SfButton: Basic Render Info Filled (206ms)
- ✓ SfButton: Basic Render Dark Filled (207ms)
- ✓ SfButton: Basic Render Light Filled (207ms)
- ✓ SfButton: Basic Render Primary Outlined (207ms)
- ✓ SfButton: Basic Render Secondary Outlined (205ms)
- ✓ SfButton: Basic Render Danger Outlined (206ms)
- ✓ SfButton: Basic Render Warning Outlined (207ms)
- ✓ SfButton: Basic Render Success Outlined (206ms)
- ✓ SfButton: Basic Render Info Outlined (205ms)
- ✓ SfButton: Basic Render Dark Outlined (205ms)
- ✓ SfButton: Basic Render Light Outlined (205ms)
- ✓ SfButton: Basic Render Light Outlined (205ms)
- ✓ SfButton: Color inversion mouseevents (1315ms)
- ✓ SfButton: Color inversion mouseevents (1313ms)
- ✓ SfButton: onClick (308ms)

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
