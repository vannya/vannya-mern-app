# Versions  
## 2.0.6 
###### *Sept 20, 2020*  

Update packages to latest versions.
Update setupProxy for changes from latest version of http-proxy-middleware.

## 2.0.3  
###### *May 26, 2019*  

Found and corrected an error with the generation of package.json in relation to npm installation.  

## 2.0.0  
###### *May 26, 2019*  

### Updates:  
__Packages__: Updated all packages to the current versions  
__Generator__: 
    1. Updated key/values in package.json generation to not retain information from the generator.  
    2. Changed the scripts around so npm start is the main script again.   
    3. Changed install script for CRA to `npx` format.   
    4. Removed Sass configuration and package.   
    5. Updated README that is built with the application.   
    6. Added new proxy connection code per CRA instructions.  
    7. Added error handling for when the application is built without keys.  Process will now exit if codes are not supplied.  
__Documentation__:  Added CHANGELOG and updated README.