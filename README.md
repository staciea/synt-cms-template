# Synteagle cms project template

Template with cms adjusted structure, based on [front-end-scaffold](https://github.com/orlovmax/front-end-scaffold), with common used technologies and tools.

Please note, this README relates to Grunt template that placed in master folder, if you want to use Gulp template  - you can find it in gulp branch of this repository.

## Contents
* [Folder structure](#folder-and-file-structure)
* [Requirements](#requirements)
* [Editorconfig](#editorconfig)
* [Package.json dependencies](#packagejson-dependencies)
* [bower.json dependencies](#bowerjson-dependencies)
* [Tasks](#tasks)
	- [Default task](#default-task)
	- [Bower dev task](#bower-dev-task)
	- [Build task](#build-task)
	- [Deploy task](#deploy-task)
	- [Server task](#server-task)
	- [Sprite task](#sprite-task)
* [Live reload](#live-reload)
* [Additional things](#additional-things)
* [License](#license)

## Folder and file structure
```
.
├── .editorconfig
├── Gruntfile.js
├── package.json
├── bower.json
├── README.md
├── Rakefile
├──grunt                                       * grunt tasks
|   ├── task.js
│   └── aliases.yml 
├── test_screenshots
└── theme
	├── favicon.ico
	├── index.html
	├── robots.txt
	├── screenshot.jpg
	├── style.css
	└── static
		├── blocks                             * Website blocks library
		│   └── block
		│       ├── block.scss
		│       └── block.jade
		├── css                                * compiled css
		│   ├── ie.css
		│   └── screen.css
		├── images                             * image sources
		│   └── *.png, *.jpg, *.gif
		├── jade                               * templates
		│   ├── pages                          * main pages templates
		│   │   └── index.jade
		│   ├── general                        * common src
		│   └── layouts                        * page layouts
		│       └── default.jade
		├── js                                 * scripts
		│   ├── assembled.js
		│   ├── ie                             * ie compat scripts
		│   │   └── ie.js
		│   └── vendor                         * vendor scripts
		│       └── vendor.js
		├── scss                               * less preprocessor styles
		│   ├── screen.scss
		│   ├── general                        * general styles
		│   └── helpers                        * mixins and vars
		│       └── _mixins, variables, gs
		├── fonts                              * font sources
		└── devtools                           * some developer tools

```
