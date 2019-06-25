# EdukasyonPH Component Generator

It generates initial files of the component, following the code standards of the company. 

## Getting Started

### Generate Component
Run the command below with the name of the `Component`.
```
node src/core/generator generate component <Component>
```
or simple use the npm script that is already defined in `package.json`
```
npm run g:c <Component>
```

### Example Usage

```
npm run g:c Badge
```
it would output the following.

```
> node src/core/generator generate component "Badge"

 created  src/UIKit/Badge/Badge.component.vue
 created  src/UIKit/Badge/Badge.config.js
 created  tests/unit/components/Badge.spec.js
 created  scss/components/_badges.scss
 updated  src/app.js
```