# Reproduction for [cssnano/cssnano#1202](https://github.com/cssnano/cssnano/issues/1202)

Setup:

```sh
# Clone this repository
git clone https://github.com/loilo/repro-cssnano-ordererdvalues.git

# cd into the cloned folder
cd repro-cssnano-ordererdvalues

# Install npm dependencies
npm ci
```

Show broken minification:
```sh
npx postcss --config default-config stylesheet.css
```

Show proper minification (with `orderedValues` option disabled):
```sh
npx postcss --config fixed-config stylesheet.css
```
