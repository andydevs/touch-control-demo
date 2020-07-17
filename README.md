Web Template
===========================================================

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/andydevs/web-boilerplate)

Use this template for building basic static websites.

Development
-----------------------------------------------------------

This boilerplate code uses Grunt for running and managing
tasks, and Webpack for building and bundling code. To build
the program, just run

    $ grunt

The boilerplate also provides a development server which
could be run with

    $ grunt serve

Webpack emits build outputs to the `public` directory. The
javascript and scss (this boilerplate uses SCSS) files are 
in the `app` directory, with the SCSS files being in `style`. 
The `pages` directory contains the html pages for the website, 
and the `assets` directory contains images, fonts, and other 
assets and resources for the website. Webpack automatically 
copies these files into the website directory.

`grunt serve` will automatically open the built page in a web 
browser and start watching for changes in any of these files.
It will automatically rebuild the files if any changes occur.
Due to the structure of this boilerplate (namely the html
pages being copied over every build), the web browser will
need to refresh the webpage a couple times for it to
update with the changes.