# Synteagle cms project template

Template with cms adjusted structure, based on [front-end-scaffold](https://github.com/orlovmax/front-end-scaffold), with common used technologies and tools.

## Contents
* [Folder structure](#folder-and-file-structure)
* [Requirements](#requirements)
	- [Editorconfig](#editorconfig)
* [How to start](#how-to-start)
* [Site configuration](#site-configuration)
* [Tasks](#tasks)
	- [Start](#start)
	- [Dev](#dev)
	- [Build](#build)
	- [Rebuild](#rebuild)
	- [Server](#server)
	- [Sprite](#sprite)
* [Live reload](#live-reload)
* [License](#license)

## Folder and file structure
```
./
├── .editorconfig
├── bower.json
├── README.md
├── automation.sh
|
├── gulp_tasks/                                * gulp tasks
|   ├── config/                                * gulp tasks config
│   |	├── paths.js
│   |	├── settings.js
│   |	└── aliases.js
│   |
|   └── task.js
│
├── gulpfile.js
├── package.json
|
├── screenshots/                               * responsive test screenshots
|
└── theme/                                     * main theme folder
	├── index.html
	├── page.html
	└── static/                                * static assets
		├── css/                               * compiled css
		|
		├── images/                            * image sources
		|
		├── jade/                              * templates
		|	├── blocks/                        * blocks library
		│   |   └── block.jade
		│   ├── helpers/                       * helper mixins
		│   ├── layouts/                       * page layouts
		│   └── page.jade
		|
		├── js/                                * scripts
		|   ├── vendor/                        * vendor scripts library
		|   ├── lib/                           * site scripts library
		│   └── body.js                        * vendor scripts
		|
		├── sass/                              * sass preprocessor styles
		|	├── blocks/                        * blocks library
		│   |   └── block.sass
		|   ├── helpers/                       * mixins and vars
		│   ├── vendor/                        * third-party code
		|   ├── custom.sass
		|   └── screen.sass
		|
		├── helpers/                           * additional resources
		|	├── index.html                     * Project page-list
		|	├── index_bg.jpg
		|	└── favicon.ico
		|
		├── fonts/                             * font sources
		|
		└── data/                              * configs and data for templates

```

## Requirements:
- [Node.js](http://nodejs.org/)
- [Gulp](http://gulpjs.com/)
- [Bower](http://bower.io/)
- Optionally: [Editorconfig](http://editorconfig.org/)

#### Editorconfig
This project have .editorconfig file at the root that used by your code editor with editorconfig plugin. It describes codestyle like indent style, trailing whitespaces etc. See more details [here](http://editorconfig.org/)

## How to start

If you haven't used [Gulp](http://gulpjs.com/) before, be sure to check out the [Getting Started](https://github.com/gulpjs/gulp/blob/master/docs/README.md) guide, as it explains how to use [Gulp.js](https://github.com/google/web-starter-kit/blob/master/gulpfile.js), also check these [recips](https://github.com/gulpjs/gulp/tree/master/docs/recipes#recipes) 

Before start you need to have installed _npm_ , as well as _grunt_ and _bower_ globally.

**A few simple simple steps to start:**
* Download these files. You can chose `Download zip` option or clone this repo to your local maschine.
* Install dependencies from `package.json` by running: `npm install` and bower dependencies from `bower.json`: `bower install`. This will create `node_moduldes` and `bower_components` folders.
* Run tasks from the list below and start devevelopment! 
* Edit general settings in `dev/data/config.json` See [Site configuration](#site-configuration) section

Also `bower install` included into `start` task using shell plugin. It will install dependencies and copy them to related folder. See tasks for more details.

**bower.json dependencies**
* "jquery"

## Site configuration
This boilerplate use Jade templates with external data configs. 
Main settings can be found in `dev/data/config.json` file. And they're available for usage in templates with `config.key-name`

## Tasks
Here comes groups of grunt and gulp tasks with some explanations

#### Start 
Install bower dependencies and place them to dev folders.
Gulp: `gulp start`

* Install bower components
* Copy bower components to dev folder
* Remove gitkeep files

#### Dev
Dev task with static server.
Gulp: `gulp dev`

* Concatenate javascripts
* Compile Sass stylesheets
* Add vendor prefixes in css
* Combine media queries in css files
* Compile Jade templates
* Sync helpers and other assets
* Run BrowserSync static server with live reload using 
* Watch for changes and run dev task


#### Build 
Build task.
Gulp: `gulp build`

* Minify images
* Apply styleguide to stylesheets
* Minify javascript files
* Minify stylesheets
* Run BrowserSync static server


#### Rebuild 
Regenerate and build project by running all tasks.
Gulp: `gulp rebuild`

* Concatenate javascripts
* Compile Sass stylesheets
* Add vendor prefixes in css
* Combine media queries in css files
* Compile Jade templates
* Sync helpers and other assets
* Minify images
* Apply styleguide to stylesheets
* Minify javascript files
* Minify stylesheets

#### Server 
Run server without watching for changes.
Gulp: `gulp server`

* Run BrowserSync static server


#### Sprite 
Sprite creation task. Should be configured before running.
Gulp: `gulp sprite`

* Create images sprite and related css


## Live reload  
This project uses BrowserSync as static server with enabled and configured live reload option.

## License
[MIT](http://opensource.org/licenses/MIT)
