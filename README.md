# Api handler
**A simple NodeJs module to use a RESTful API**

[![Build Status](https://travis-ci.org/talonbragg/apihandler.svg?branch=master)](https://travis-ci.org/talonbragg/apihandler)

**Installation:**
`npm install apihandlerrestful`


**Usage:**

```javascript
let handler = require('apihandlerrestful');

handler("https://yourapi.com/")
  .then(data => {
    console.log(data.value);

    //Just do whatever you want with "data"
  })
```
