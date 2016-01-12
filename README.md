# portfolio
Portfolio website

## Setup

Clone the repo with git:
```
git clone git@github.com:sjaakluthart/portfolio.git
```

Requirements:
* [Node.js](https://nodejs.org/en/)
* [NPM](https://www.npmjs.com/)
* [Gulp](http://gulpjs.com/)
* [Sass](http://sass-lang.com/)
* [SCSS Lint](https://github.com/brigade/scss-lint)
* [SCSS Lint reporter checkstyle](https://github.com/Sweetchuck/scss_lint_reporter_checkstyle)
* [Bourbon](http://bourbon.io/)

Install the node modules
```
npm install
```

After installing the listed requirements you can start developing! :)

To compile Sass run:
```
gulp sass
```

To watch for Sass changes run:
```
gulp watch
```

## Code Styling and Linting

I've installed some node modules to help with my code styling.

To check scss code styling run:
```
gulp scss
```

To check js code styling run:
```
gulp jscs
```

To check js linting run:
```
gulp lint
```

## Generating Build

To compress the project folder run:
```
gulp compress
```
This will compile all Sass files and create an archive.gz file in the build directory.

To deploy the website run:
```
gulp deploy
```
This will compile all Sass files and deploy the website using gulp-ftp.

### License
<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank"><img alt="Creative Commons-Licentie" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a>


```
  ELEVATE!
          /
     ____
   .'    '=====<0
   |======|
   |======|
   [IIIIII[\--()
   |_______|
   C O O O D
  C O  O  O D
 C  O  O  O  D
 C__O__O__O__D
[_____________]
```
