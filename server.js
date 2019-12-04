const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/*
 * The 'express.static' middleware provides some services Express can use to
 * serve files from a directory - in this case, the 'public' subdirectory of
 * this project.
 *
 * The 'app.use' function attaches middleware to our Express application, so
 * that when the application is running, it can serve static files. In this
 * case, we mount it over the entire app: any web request that GETs a path that
 * exists in the 'public' directory will be handled by the middleware. The
 * middleware also serves the 'index.html' file in a directory (if it exists)
 * whenever a client requests the directory itself.
 *
 * The 'public' directory for this project, in turn, contains all the HTML,
 * Javascript, and CSS files needed to run a simple chat client connected to
 * this server. Accessing this server's root URL will serve 'public/index.html',
 * which contains our chat client. This gives users an easy way to connect to
 * the server and interact with other users.
 *
 * See also:
 *  - Express: Serving static files in Express
 *    https://expressjs.com/en/starter/static-files.html
 *  - Express: express.static()
 *    https://expressjs.com/en/4x/api.html#express.static
 *  - Express: Using middleware
 *    https://expressjs.com/en/guide/using-middleware.html
 *  - Express: app.use()
 *    https://expressjs.com/en/4x/api.html#app.use
 */
app.use(express.static('public'));

    /* Function to check for unique values */
    function contains(arr, value) {
      for(let i=0; i<arr.length; i++){
        if(arr[i] === value){
          continue;
        } else {
        return false;
        }
      }
      return true;
    }


app.get('dropdown', (req, res) => {
  const baseURL = 'https://data.princegeorgescountymd.gov/resource/mnkf-cu5c.json';
  fetch(baseURL)
    .then((r) => r.json())
    .then((data) => {
    /* Function to check for unique values */
    function contains(arr, value) {
      if(arr.length === 0){
        return false;
      }
      for(let i=0; i<arr.length; i++){
        if(arr[i] === value){
          continue;
        } else {
        return false;
        }
      }
      return true;
    }
    /* Get the districts */
    let alldistricts = [];
    alldistricts = data.map(c => c.district); 

    /* Creating unique district */
    let uniquedistricts = []
    for(let i=0; i<alldistricts.length; i++){
      if(!contains(uniquedistricts, alldistricts[i])){
        uniquedistricts.push(alldistricts[i]);
        }
      }
    /* Send arr of unique districts to front end */
      res.send({ uniquedistricts: uniquedistricts});
    })
    
    .catch((err) => {
      console.log(err);
      res.redirect('/error');
    });
});


app.get('leaflet', (req, res) => {
  const baseURL = 'https://data.princegeorgescountymd.gov/resource/mnkf-cu5c.json';
  fetch(baseURL)
    .then((r) => r.json())
    .then((data) => {
      res.send({ data: data });
    })
    .catch((err) => {
      console.log(err);
      res.redirect('/error');
    });
}); 

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
