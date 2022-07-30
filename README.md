# @flexcodelabs/$button

[![npm](https://img.shields.io/npm/v/@flexcodelabs/$button)](https://www.npmjs.com/package/@flexcodelabs/$button) [![NPM](https://img.shields.io/npm/l/@flexcodelabs/$button)](https://www.npmjs.com/package/@flexcodelabs/$button)

- [Packe Component](#@flexcodelabs/$button)
  - [Features](#features)
  - [Installation](#Installation)
  - [Usage](#usage)
  - [Examples](#examples)
  - [Props](#props)

## Features

- Loader
- Disabled
- Icon or Text or Both
- can be used as link

## Installation

`npm install @flexcodelabs/$button`

or

`yarn add @flexcodelabs/$button`

## Usage

```js
...
import PackageName from '@flexcodelabs/button';

<PackageName
  {...props}
/>
```

## Examples

[Source code](https://github.com/flexcodelabs/flexcodelabs-button)

## Props

| Name      | Type                                     | Default | Required | Description                                  |
| --------- | ---------------------------------------- | ------- | -------- | -------------------------------------------- |
| label     | `ReactNode or string`                    | ``      | false    | Button content                               |
| style     | `CSSProperties`                          | ``      | false    | Custome styles                               |
| className | `string`                                 | ``      | false    | Custom classname                             |
| ripple    | `boolean`                                | ``      | false    | Whether to add ripple effect on button click |
| disabled  | `boolean`                                | ``      | false    | Button disabled status                       |
| type      | `button or submit or reset or undefined` | ``      | false    |                                              |
| href      | `string`                                 | ``      | false    | destination for next projects                |
| to        | `string`                                 | ``      | false    | destination for react router dom             |
| Link      | `any`                                    | ``      | false    | can be Link from react router or next/link   |
