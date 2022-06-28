<div align="center">
    <h1>joinclass</h1>
    <br />
    <a href="https://codesandbox.io/u/delpi.k">LIVE EXAMPLE</a>
</div>

---

#### Description
+ Join and convert list class
+ Simple for test (classNames)

---
### Usage

Install the package

```js
npm install --save joinclass
```

Import the module in the place you want to use:
```js
import classes from "joinclass";

```
#### Snippet

```js

classes('abcd', 'abcd    ', undefined, false) => 'abcd'
classes(['abcd', 'abcd ', undefined, false]) => 'abcd'
classes({ 'abcd': true }, null, '', 'z') => 'abcd z'
classes({ 'abcd': true }, null, '   ', 'z') => 'abcd z'

const clazz = { 'abcd': true }
const clazz2 = ['abcd', 'defg']
classes(clazz, clazz2, null, '', 'z') => 'abcd defg z'
```


### License

MIT