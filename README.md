# Ember-ted-shed

## Installation

#### shed.css

```
ember install ember-ted-shed
```

You're ready to go with shed.css! Check out the [docs](http://tedconf.github.io/shed-css/) docs for usage.

#### TED theme

```
ember install ember-cli-sass
```

```
// app.scss

@import "ember-ted-shed/colors";
@import "ember-ted-shed/borders";
```

## Usage

There are two ways to use `ember-ted-shed`:

1. use ember-ted-shed based UI components
2. use ember-ted-shed to write your own custom styles

Full details on both methods are available on the [docs site](http://tedconf.github.io/ember-ted-shed).

## Contributing

* `git clone git@github.com:tedconf/ember-ted-shed.git` this repository
* `cd ember-ted-shed`
* `npm install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

## For maintainers:

### Updating the GitHub pages docs site
* `ember github-pages:commit --message "update gh-pages"`
* `git push origin gh-pages`

### Creating a new release and publishing to npm

* `npm version $TYPE -m "message about this version"` where $TYPE indicates the semver release type, eg. `patch`, `major` or `minor`. see the [npm-version docs](https://docs.npmjs.com/cli/version) and (semver docs)[http://semver.org/] if you're not sure which applies
* `npm publish`
* `git push --tags`
* document the changes by [creating a new release](https://github.com/tedconf/ember-ted-shed/releases)
