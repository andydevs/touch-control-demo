Touch Control Demo
===========================================================

Development
-----------------------------------------------------------

### Application Architecture

_Technologies_

| Part              |  System |
|:------------------|--------:|
| Task Runner       |   Grunt |
| Web Code Bundling | Webpack |
| Stylesheets       |    SCSS |
| Transpilation     |   Babel |

_Folder Structure_

| Folder      |                             Use |
|:------------|--------------------------------:|
| `app`       |                Application Code |
| `app/style` |                SCSS Stylesheets |
| `pages`     |                   HTML Pages \* |
| `assets`    |   Static Assets for the Site \* |
| `public`    | Build Output Directory for Site |

\* _Folder contents (subfolders included) are copied over to the `public` directory_

### Building and Running

To build the app, run

    $ grunt

The boilerplate also provides a development server which
could be run with

    $ grunt serve

`grunt serve` will automatically open the built page in a web 
browser and start watching for changes in any of these files.
Due to the structure of this boilerplate (namely the html
pages being copied over every build), you may need to fully 
reload the webpage a couple times for it to update with the 
changes.
