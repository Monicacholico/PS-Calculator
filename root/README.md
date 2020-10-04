# women-in-tech-website

Hey Ladies,
I worked with Ryan yesterday to install some more necessary 
node packages so that our project runs similarly to the movies project.

Once you pull from master, you will see the list of npm libraries that need
to be installed...

```java
"dependencies": {
    "babel-core": "^6.26.3",
    "babel-loader": "^7.1.4",
    "babel-preset-env": "^1.7.0",
    "concurrently": "^3.5.1",
    "jquery": "^3.3.1",
    "json-server": "^0.13.0",
    "moment": "^2.22.2",
    "npm": "^6.1.0",
    "promise-polyfill": "^8.0.0",
    "webpack": "^4.11.1",
    "webpack-cli": "^3.0.3",
    "webpack-dev-server": "^3.1.4",
    "whatwg-fetch": "^2.0.4"
  }
```
  
  
Just run:  
    
    npm install

This should install all the existing dependencies from the package.json.

If it does not, use

    npm install LIBRARY_NAME
    
to install missing libraries. 


Once everything is installed just run: 

    npm run dev
    
Then visit http://localhost:1313/

This points to the "index.html" page (currently blank in master, will be our home page).

Let me know if you have questions! 

Thanks! 

-Emily

