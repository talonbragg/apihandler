# Api handler
**A simple NodeJs module to use a RESTful API**

[![Build Status](https://travis-ci.org/talonbragg/apihandler.svg?branch=master)](https://travis-ci.org/talonbragg/apihandler)
[![npm version](https://badge.fury.io/js/apihandlerrestful.svg)](https://badge.fury.io/js/apihandlerrestful)
<a href="https://codecov.io/gh/talonbragg/apihandler"><img src="https://codecov.io/gh/talonbragg/apihandler/branch/master/graph/badge.svg" alt="Code Coverage"></a>

**Installation:**
`npm install apihandlerrestful`


**Usage:**

```javascript
let handler = require('apihandlerrestful');

handler("http://yourapi.com/")
  .then(data => {
    console.log(data.value);

    //Just do whatever you want with data
  })
```

**Important: You are not able to use an API with https://, use normal http://**
