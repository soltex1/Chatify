const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
