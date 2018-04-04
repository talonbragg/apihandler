# Api handler
**A simple NodeJs module to use a RESTful API**

[![Build Status](https://travis-ci.org/talonbragg/apihandler.svg?branch=master)](https://travis-ci.org/talonbragg/apihandler)
<a href="https://codecov.io/gh/talonbragg/apihandler"><img src="https://codecov.io/gh/talonbragg/apihandler/branch/master/graph/badge.svg" alt="Code Coverage"></a>

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
