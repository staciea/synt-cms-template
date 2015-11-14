# Synteagle cms project template

Template with cms adjusted structure, based on [front-end-scaffold](https://github.com/orlovmax/front-end-scaffold), with common used technologies and tools.

Please note, this README relates to Grunt template that placed in master folder, if you want to use Gulp template  - you can find it in gulp branch of this repository.

## Contents
* [Folder structure](#folder-and-file-structure)
* [Requirements](#requirements)
* [How to start](#how-to-start)
	- [Editorconfig](#editorconfig)
	- [Package.json dependencies](#packagejson-dependencies)
	- [bower.json dependencies](#bowerjson-dependencies)
* [Tasks](#tasks)
	- [Default](#default)
	- [Start](#start)
	- [Regenerate](#regenerate)
	- [Build](#build)
	- [Deploy](#deploy)
	- [Zip](#zip)
	- [Server](#server)
	- [Sprite](#sprite)
* [Live reload](#live-reload)
* [Changelog](#changelog)
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

## Requirements:

- [Ruby](http://www.ruby-lang.org/)
- [Node.js](http://nodejs.org/)
- [Grunt](http://gruntjs.com/) (`npm install -g grunt-cli`)
- [Bower](http://bower.io/) (`npm install -g bower`)

## How to start
If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to use [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins.

* Before start you need to have _npm_ installed now, as well as a _grunt_.
* Then you need to download this files. You can chose `Download zip` option or clone this repo to your local maschine.
* Now go to this project folder in terminal. Once you're familiar with grunt installation process, you may install all this things with this command: `npm install`.This will create `node_moduldes` folder, that's normal.
* Run `grunt`, and it will compile your files and watch for all changes. See [Tasks](#Tasks) chapter for more details.

This template is ready for work with [Bower](https://github.com/bower/bower). So at the root was created `bower.json` file with project dependencies. To install dependencies you need globally instaled Bower. 
Bower depends on [Node.js](http://nodejs.org/) and [npm](http://npmjs.org/). Also make sure that [git](http://git-scm.com/) is installed as some bower
packages require it to be fetched and installed. To install Bower - just run this `$ npm install -g bower`.

Now we are ready to install components:
```sh
# install dependencies listed in bower.json
$ bower install

# install a package and add it to bower.json
$ bower install <package> --save
```

### Editorconfig
This project have .editorconfig file at the root that used by your code editor with editorconfig plugin. It describes codestyle like indent style, trailing whitespaces etc. See more details [here](http://editorconfig.org/) 

### Package.json dependencies 
* ["grunt"](https://github.com/gruntjs)
* ["grunt-autoprefixer"](https://github.com/nDmitry/grunt-autoprefixer)
* ["grunt-browser-sync"](https://github.com/BrowserSync/grunt-browser-sync)
* ["grunt-cache-bust"](https://github.com/hollandben/grunt-cache-bust)
* ["grunt-combine-media-queries"](https://github.com/buildingblocks/grunt-combine-media-queries)
* ["grunt-contrib-clean"](https://github.com/gruntjs/grunt-contrib-clean)
* ["grunt-contrib-concat"](https://github.com/gruntjs/grunt-contrib-concat)
* ["grunt-contrib-compress"](https://github.com/gruntjs/grunt-contrib-compress)
* ["grunt-contrib-coffee"](https://github.com/gruntjs/grunt-contrib-coffee)
* ["grunt-contrib-imagemin"](https://github.com/gruntjs/grunt-contrib-imagemin)
* ["grunt-contrib-jade"](https://github.com/gruntjs/grunt-contrib-jade)
* ["grunt-contrib-sass"](https://github.com/gruntjs/grunt-contrib-sass)
* ["grunt-contrib-stylus"](https://github.com/gruntjs/grunt-contrib-stylus)
* ["grunt-contrib-uglify"](https://github.com/gruntjs/grunt-contrib-uglify)
* ["grunt-contrib-watch"](https://github.com/gruntjs/grunt-contrib-watch)
* ["grunt-csscomb"](https://github.com/csscomb/grunt-csscomb)
* ["grunt-csso"](https://github.com/t32k/grunt-csso)
* ["grunt-newer"](https://github.com/tschaub/grunt-newer)
* ["grunt-processhtml"](https://github.com/dciccale/grunt-processhtml)
* ["grunt-shell"](https://github.com/sindresorhus/grunt-shell)
* ["grunt-spritesmith"](https://github.com/Ensighten/grunt-spritesmith)
* ["grunt-sync"](https://github.com/tomusdrw/grunt-sync)
* ["main-bower-files"](https://github.com/ck86/main-bower-files)

### bower.json dependencies 
* "jquery"
* "modernizr"
* "respond"
* "html5shiv"

## Tasks
Here comes groups of grunt tasks with some explanations

### Default `grunt`
```
- 'newer:coffee'                        Compile newer coffescript
- 'newer:concat'                        Concatenate newer javascript
- 'newer:sass'                          Compile newer Sass stylesheets
- 'newer:stylus'                        Compile newer Stylus stylesheets
- 'newer:jade'                          Compile newer Jade templates
- 'newer:imagemin'                      Minify newer images
- 'sync'                                Sync helpers and other assets
- 'watch'                               Watch for changes
```

### Start `grunt start`
```
- 'bower'                               Copy bower components to dev folders
- 'clean:gitkeep'                       Remove gitkeep files
```

### Regenerate `grunt regen`
```
- 'coffee'                               Compile coffescript
- 'concat'                               Concatenate javascript
- 'sass'                                 Compile Sass stylesheets
- 'stylus'                               Compile Stylus stylesheets
- 'jade'                                 Compile Jade templates
- 'imagemin'                             Minify images
- 'sync'                                 Sync helpers and other assets
- 'clean:build'                          Remove minified files with timestamps
```

### Build `grunt build`
```
- 'processhtml'                          Replace assets paths in html
- 'cmq'                                  Combine media queries in css files
- 'autoprefixer'                         Add vendor prefixes in css
- 'csscomb'                              Applie styleguide to stylesheets
- 'uglify'                               Minify javascripts
- 'csso'                                 Minify stylesheets
- 'cacheBust'                            Cache static and add timestamps
```

### Deploy `grunt deploy`
```
- 'shell:deploy'                         Deploy build version to github
```

### Zip `grunt zip`
```
- 'compress'                             Compress build version
```

### Server `grunt server`
```
- 'browserSync'                          Run server on `http://localhost:3000`
```

### Sprite `grunt sprite`
```
- 'sprite'                               Create images sprite and related css
```

## Live reload 
For this project I use live.js which minified version and  and link to this script in final html will be removed after running build task.

## Changelog
Youc can find full changelog [HERE](https://github.com/synteagle/synteagle-cms-template/blob/master/CHANGELOG.md)

## License
[MIT](http://opensource.org/licenses/MIT)
