# Api handler
**A simple NodeJs module to use a RESTful API**

**Installation:**
`npm install restapihandler`

**Usage:**

```javascript
  require('restapihandler');
  
  handler("https://yourapi.com/")
    .then(data => {
      console.log(data.value);

      //Just do whatever you want with "data"
    })
```
