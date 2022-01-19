# Modale plugin for React

A ready-to-use Modal component for React projects.

## Features

Display and quit modale
### Download

[modale-react](https://www.npmjs.com/package/modale-react)

### Requirements

- React 17.0.2+

### Installation

- using NPM
  `npm i modale-react`

### Usage

To use the plugin, import it in your React component.
It needs 3 props to work: `handleChange`, `content` and `value`

_MyComponent.js_

```javascript
import Modal from "datatables-plugin-react"

const MyComponent = () => {
  <Modal content={content} handleChange={labels} value={boolean} />;
};
```