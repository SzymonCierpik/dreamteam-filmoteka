# FILMOTEKA - DREAM TEAM

The project involves the development of a website using HTML and CSS. The main goal is to create a responsive and visually appealing web page. Here is a technical description of the project:  

## HTML Structure:  
The HTML structure follows a semantic approach, ensuring proper usage of HTML tags for different sections and content. The page layout is designed with three breakpoints to accommodate different screen sizes: mobile, tablet, and desktop. 

## CSS Styling:
The CSS stylesheet is organized and modular, with separate files for different sections and components. CSS rules are written efficiently, making use of selectors, classes, and IDs to target specific elements. The styling is consistent and follows the project's design guidelines. CSS properties such as colors, typography, spacing, and layout are implemented to enhance the visual presentation. Images:  All images used in the project are stored in the "src/images" directory. Images are optimized for web viewing and consider retina displays, ensuring high-quality visuals. Proper image compression techniques are employed to minimize file sizes without compromising quality. 

## Favicon:
The project includes a favicon, which is displayed as the icon in the browser tab. The favicon is properly linked and displayed across different browsers. 

## Error-free Code:
The developer console is free of errors and warnings. 

## Git and Version Control:
Git is utilized for version control and collaboration. Proper branching strategies are followed, with the main branch serving as the primary development branch. Working branches are created for specific features or bug fixes and are later merged into the main branch. 

## Deployment:
The final version of the project is deployed and hosted on GitHub Pages or a similar platform. The deployed website is accessible and functions correctly across different browsers and devices. This technical description provides an overview of the project's implementation, covering HTML structure, CSS styling, image optimization, code quality, version control, and deployment aspects. 


----------------


### Dependencies
You need to have the LTS version of Node.js installed on your computer.

```shell
npm ci
```

### Development
Start the development server.

```shell
npm run dev
```
Open your browser and go to [http://localhost:1234](http://localhost:1234) to view the project.

### Deployment
The code will automatically build and deploy the current version of the project to GitHub Pages, specifically the gh-pages branch, whenever changes are made to the main branch. For example, after a direct push or when a pull request is merged. To make this work, you need to modify the homepage field and the build script in the package.json file, replacing username and repository-name with your own.

```json
"homepage": "https://username.github.io/repository-name",
"scripts": {
  "build": "parcel build src/*.html --public-url /repository-name/"
},
```
After some time, you will be able to see the live website at the URL specified in the updated homepage property, for example, https://username.github.io/repository-name.

### Files and Folders
All style partials should be located in the src/sass folder and imported into src/sass/main.scss.
Add images to the src/images folder, and make sure to optimize them before adding. The build process simply copies the used images to avoid optimizing them each time, as it can be time-consuming on slower computers.

----------------
