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
let func = function func(){

    const USERNAME = "jwright04";

    let returnedName = "Smith";
    let realName = "Phil";

    class Person{

        constructor(){
        }

        getName(){
            return returnedName;
        }

        setName(newName){
            returnedName = newName;
        }
    }

    let otherPerson = new Person();
    otherPerson.setName("Jacob");
    console.log("Real Name is:", realName);
    console.log("Username is:", USERNAME);
    console.log("Other persons name is:", otherPerson.getName());
}
func();
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
    "build": "babel src --out-dir dist --source-maps && npm run uglify",
    "watch": "babel src --watch --out-dir dist --source-maps",
    "uglify": "uglifyjs --compress --mangle --output dist/main.js -- dist/main.js"
  },
  "author": "",
  "license": "MIT",
  "dependencies": {
    "uglify-js": "^2.6.1"
  }
}

```

```
npm install
```


<h5>STEP 9: Run the Application</h5>
Development build to update the dist/main.js file whenever a change is made to src/main.js with no minification

```
npm run watch
```
or

Production build to update the dist/main.js with UglifyJS2 minification 

```
npm run build
```
<p>Why Source-Maps? Demo: http://www.thecssninja.com/demo/source_mapping/</p>