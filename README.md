Web Template
===========================================================

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/andydevs/web-boilerplate)

Use this template for building basic static websites [EDIT THIS PART WITH THE DESCRIPTION OF YOUR SITE].

Create A new Website [DELETE THIS SECTION IN YOUR SITE]
-----------------------------------------------------------

On the repository webpage, you can either click 
`Use this Template` which will create a new repository with
the template code, or you can click `Deploy to Netlify` in
the README, which will both create a new repository and
deploy a new website to Netlify.

Development
-----------------------------------------------------------

### Technologies

| Part              |  System |
|:------------------|--------:|
| Task Runner       |   Grunt |
| Web Code Bundling | Webpack |
| Stylesheets       |    SCSS |
| Transpilation     |   Babel |

### Folder Structure

| Folder      |                             Use |
|:------------|--------------------------------:|
| `app`       |                Application Code |
| `app/style` |                SCSS Stylesheets |
| `pages`     |                 HTML Pages [^1] |
| `assets`    | Static Assets for the Site [^1] |
| `public`    | Build Output Directory for Site |

[^1]: Folder contents (subfolders included) are copied over to the `public` directory

### Running

To build the program, run

    $ grunt

The boilerplate also provides a development server which
could be run with

    $ grunt serve

`grunt serve` will automatically open the built page in a web 
browser and start watching for changes in any of these files.
It will automatically rebuild the files if any changes occur.
Due to the structure of this boilerplate (namely the html
pages being copied over every build), you may need to fully 
reload the webpage a couple times for it to update with the 
changes.