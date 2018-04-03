# Api handler
**A simple NodeJs module to use a RESTful API**

**Installation:**
`npm install apihandlerrestful`

**Usage:**

```javascript
require('apihandlerrestful');

handler("https://yourapi.com/")
  .then(data => {
    console.log(data.value);

    //Just do whatever you want with "data"
  })
```
