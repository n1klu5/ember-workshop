# SETUP

## Prerequisites

You will need the following **accounts**:

* GitHub
* Heroku 
* Cirle CI

You will need the following **things properly installed** on your computer.

* [Git](https://git-scm.com/)
  * test `git --version`
* [Ember CLI](https://ember-cli.com/)
  * [Node.js](https://nodejs.org/) (with Yarn)
    * for macOS, linux use [nvm](https://github.com/creationix/nvm#install-script) `nvm install 8.4.0`; for windows use official installer
    * install yarn `npm i -g yarn`
  * install ember cli `yarn global add ember@2.14.2`
  * test: `ember -v`
* [Watchman](https://facebook.github.io/watchman/docs/install.html) only on macOS, Linux
  * test: `watchman -v`
* [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
  * test: `heroku -v` 

### On Windows 10 

TODO 

## Installation

* within your own github account fork the repository.
* `git clone <repository-url>` (remember fork of this repository)
* `cd ember-primer-exercises`
* `yarn install`

## Running / Development

* `ember serve` or `🐹 s`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `ember test`
* `ember test --server` 

You can run also specific tests

* `ember test --server -f acceptance`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## TOOLS 

## BROWSERS

### FIREFOX

* [FIREFOX DEVELOPER EDITION](https://www.mozilla.org/pl/firefox/developer/)
* [ember inspector](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

### CHROME  

* [CHROME](https://www.google.com/chrome/browser/desktop/index.html)
* [ember inspector](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)

### Editor - Visual Studio Code 

[Visusal Studio Code](https://code.visualstudio.com/download)

#### EXTENSIONS 

* [Ember.js Extension Pack](https://marketplace.visualstudio.com/items?itemName=emberjs.emberjs) - emberjs.emberjs
* [Ember Colorizer](https://marketplace.visualstudio.com/items?itemName=ciena-blueplanet.vsc-ember-frost) - ciena-blueplanet.vsc-ember-frost
* [Ember Syntax](https://marketplace.visualstudio.com/items?itemName=dhedgecock.ember-syntax) - dhedgecock.ember-syntax
* [ES Mocha Snippets](https://marketplace.visualstudio.com/items?itemName=spoonscen.es6-mocha-snippets) - spoonscen.es6-mocha-snippets
* [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - esbenp.prettier-vscode
* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - dbaeumer.vscode-eslint
* [Mithril Emmet](https://marketplace.visualstudio.com/items?itemName=FallenMax.mithril-emmet) - FallenMax.mithril-emmet

```` bash
code --install-extension emberjs.emberjs
code --install-extension dhedgecock.ember-syntax
code --install-extension ciena-blueplanet.vsc-ember-frost
code --install-extension spoonscen.es6-mocha-snippets
code --install-extension esbenp.prettier-vscode
code --install-extension dbaeumer.vscode-eslint
code --install-extension FallenMax.mithril-emmet
````

* [and if you like Vim Language :-)](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim) - vscodevim.vim `code --install-extension vscodevim.vim`


#### Base ShortCuts

Run Command - shift+cmd+p
Find File - cmd+p
Related Files - cmd+alt+r

New Terminal - shift+ctrl+`
Toggle Terminal - ctrl+`

Hide left side panel - cmd+b

#### CONFIG 

have a look at settings.json in the repo
