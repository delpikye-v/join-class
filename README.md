<div align="center">
    <h1>join-class-z</h1>
</div>

---

#### Description
+ Join and convert list class (ES6)
+ Simple for test (classNames)

---
### Usage

Install the package

```js
npm install --save join-class-z
```

Import the module in the place you want to use:
```js
import joinClass from "join-class-z";

```
#### Snippet

```js

joinClass('abcd', 'abcd    ', undefined, false) => 'abcd'
joinClass(['abcd', 'abcd ', undefined, false]) => 'abcd'
joinClass({ 'abcd': true }, null, '', 'z') => 'abcd z'
joinClass({ 'abcd': true }, null, '   ', 'z') => 'abcd z'

const clazz = { 'abcd': true }
const clazz2 = ['abcd', 'defg']
joinClassz(clazz, clazz2, null, '', 'z') => 'abcd defg z'
```


### License

MIT
