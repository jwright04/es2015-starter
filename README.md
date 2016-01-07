# ES2015 & Babel Starter Project

Quick ES2015 starer without all of the bells and whistles.

<h5>STEP 1: Setup Babel CommandLine Utility [https://babeljs.io/docs/setup/]</h5>
```
npm install -g babel-cli
```
<h5>STEP 2: Install Babel Preset for ES2015</h5>
```
npm install babel-preset-es2015
```
<h5>STEP 3: Create .babelrc File </h5>
```
{
    "presets": [
        "es2015"
    ]
}
```
<h5>STEP 4: Create Project Structure </h5>
```
-dist
-src
 - main.js
-index.html
```
<h5>STEP 5: index.html</h5>
```
<!DOCTYPE html>
<html>
    <head>
        <title>ES6 Starter</title>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="description" content="Starter project">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="#">
        <style type="text/css"></style>
    </head>
    <body>
        <p>Let the game begin!</p>
    </body>
    <script type="text/javascript" src="dist/main.js"></script>
</html>
```

<h5>STEP 6: main.js</h5>
```
"use strict";
const USERNAME = "jwright04";
let greeting = "Username is";
console.log(greeting + ":" + USERNAME);
```
<h5>STEP 7: Setup package.json</h5>
```
npm init
go through the steps
```

<h5>STEP 8: Configure package.json</h5>
```
{
  "name": "es6-starter",
  "version": "1.0.0",
  "description": "starter for es6",
  "main": "dist/main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "babel src --out-dir dist --source-maps",
    "watch": "babel src --watch --out-dir dist --source-maps"
  },
  "author": "",
  "license": "MIT"
}

```


<h5>STEP 9: Run the Application</h5>
Update the dist/main.js file whenever a change is made to src/main.js

```
npm run watch
```
or

Update the dist/main.js manually

```
npm run build
```
<p>Why Source-Maps? Demo: http://www.thecssninja.com/demo/source_mapping/</p>