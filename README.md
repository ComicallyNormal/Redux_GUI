# Redux GUI

Redux GUI is a web facing frontend for the Redux Project. Built using React with Next.js server side rendering, it is a highly modern and highly 
interactive web user interface. Redux uses a mixture of Material Design (MUI) components and react-bootstrap components. From a user perspective, it allows them to enter, modify, reduce, solve, and visualize any problem implemented
in Redux.

## Installation

Clone the project using [this url](https://github.com/marckade/Redux_GUI.git) to get Redux GUI on your machine.

```bash
git clone https://github.com/marckade/Redux_GUI.git
```

## Usage

To use the Redux GUI on your machine, please note that it is **integrally linked to the Redux REST API.** This means that that you can make superficial changes to the Redux GUI application as long as you don't need new types of API calls that are not yet implemented. If you do need to work on the Redux GUI and the Redux API at the same time, then you will need to do the following:

````
1. clone the Redux API
2. launch the Redux API using dotnet run
3. launch the Redux GUI development server on port 3000 by using:
 npm run dev

````
This will allow you to immediately use any unmerged and undeployed changes that you make to the backend on the frontend.

## Deployment

This application can be deployed by building a binary only standalone version of the app with a next.js build script. Assuming you have npm installed, 
and you are in the project's root directory, you can run the following:

````
npm install
npm build
npm start
````

This will start a production server on the port 3000 of your host machine. 

<br>

This application can be also be deployed via a docker docker image. To do so run the following:

````
npm run build
docker build -t reduxgui .
docker run -it --rm -p 3000:3000 --name reduxgui reduxgui

````
This will start a local server via docker. Note that this server is using production binaries, so warnings will be distinct from the development environment described in the usage section.
<br><br>


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

Please author any changes or new features that you add to the application, so that we can give credit where credit is due.

## License
All Rights Reserved

