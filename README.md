# Portfolio 👩🏽‍🚀

-   [Why React?](#-why-react) <!-- Added new section link -->
-   [Features](#-features)
-   [Getting started](#-getting-started)
-   [Installation and Setup Instructions](#-installation-and-setup-instructions)
-   [Folder structure](#-folder-structure)
-   [Configurations](#-configurations)


## ❓ Why React?

This project leverages React over traditional HTML, JavaScript, and CSS for several reasons:

- **Component-Based Architecture**: React's component-based structure allows for reusable and modular code, making it easier to manage and scale the application.
- **Virtual DOM**: React's virtual DOM improves performance by minimizing direct manipulation of the actual DOM, leading to faster and more efficient updates.
- **State Management**: React's state management enables dynamic and interactive user interfaces, allowing for real-time updates and seamless user experiences.
- **Ecosystem and Community**: React has a vast ecosystem of libraries and a strong community, providing a wealth of resources, tools, and support for developers.
- **Developer Experience**: React's declarative syntax and developer tools enhance productivity and make debugging and testing more straightforward.

By using React, this project aims to provide a modern, efficient, and maintainable codebase for building a high-quality web application.

## 📙 Features

-   📖 Multi-Page Layout
    -   Home
    -   About
    -   Projects
    -   Contact
-   📱 Fully Responsive
-   🛠 Easy configurations

## 📚 Getting started

Clone down this repository. You will need `NodeJS` and `git` installed globally on your machine.

## 🛠 Installation and Setup Instructions

1. Installation: `npm install`

2. Run the project: `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.

## 📁 Folder structure

-   `/public`: publicly accessible contents (ex: images, media).
-   `/src`: all the components used in this project.
    -   `/src/components/`: each reusable components of each pages.
    -   `/src/data`: configurations of the web app.
    -   `/src/pages`: pages that include in the web app.

## ⚙️ Configurations

Since this is a public and open source project, you can make any changes to it. If you are a ReactJS developer you can do it easily. But if you are a beginner, I have extracted the configurable data into a single directory, so you can edit the files in that directory to configure the entire web application.

Directory: `/src/data/`

-   `user.js`

    From this you can change the content of each page of the web application.


-   `seo.js`

    The SEO.js file is a module that contains an array of objects, with each object representing metadata for a specific page of a React website. The purpose of this file is to centralize and manage the SEO (Search Engine Optimization) information for different pages.


-   `styles.css`

    From this you can change the font colors and font families of the web application.

    ```css
    :root {
    	/* ------- colors ------- */
    	--primary-color: #27272a;
    	--secondary-color: #65656d;
    	--tertiary-color: #acacb4;
    	--quaternary-color: #e4e4e7;
    	--link-color: #14b8a6;
    	/* ---------------------- */

    	/* ------- fonts ------- */
    	--primary-font: "Heebo", sans-serif;
    	--secondary-font: "Roboto", sans-serif;
    	/* --------------------- */
    }
    ```

