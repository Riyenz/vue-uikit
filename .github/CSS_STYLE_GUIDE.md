# EdukasyonPH CSS Style Guide

## General

### Don’ts

- Avoid using HTML tags in CSS selectors
  - E.g. Prefer `.eduk-modal {}` over `div.eduk-modal {}`
  - Always prefer using a class over HTML tags (with some exceptions like CSS resets)
- Don't use ids in selectors
  - `#header` is overly specific compared to, for example `.header` and is much harder to override
  - Read more about the headaches associated with IDs in CSS [here](http://csswizardry.com/2011/09/when-using-ids-can-be-a-pain-in-the-class/).
- Don’t nest more than 3 levels deep
  - Nesting selectors increases specificity, meaning that overriding any CSS set therein needs to be targeted with an even more specific selector. This quickly becomes a significant maintenance issue.
- Avoid using nesting for anything other than pseudo selectors and state selectors.
  - E.g. nesting `:hover`, `:focus`, `::before`, etc. is OK, but nesting selectors inside selectors should be avoided.
- Don't `!important`
  - Ever. Never use important on component classes.
  - If you must, it should be a utility class having one property. leave a comment, and prioritise resolving specificity issues before resorting to `!important`.
  - `!important` greatly increases the power of a CSS declaration, making it extremely tough to override in the future. It’s only possible to override with another `!important` declaration later in the cascade.
- Avoid shorthand properties (unless you really need them)
  - It can be tempting to use, for instance, `background: #fff` instead of `background-color: #fff`, but doing so overrides other values encapsulated by the shorthand property. (In this case, `background-image` and its associative properties are set to “none.”
  - This applies to all properties with a shorthand: border, margin, padding, font, etc.

### Spacing

- Two spaces for indenting code
- Put spaces after `:` in property declarations
  - E.g. `color: red;` instead of `color:red;`
- Put spaces before `{` in rule declarations
  - E.g. `.o-modal {` instead of `.o-modal{`
- Write your CSS one line per property
- Add a line break after `}` closing rule declarations
- When grouping selectors, keep individual selectors on a single line
- Place closing braces `}` on a new line
- Add a new line at the end of .scss files
- Trim excess whitespace

### Formatting

- All selectors are lower case, hyphen separated aka “spinal case” eg. `.my-class-name`
- Always prefer Sass’s double-slash `//` commenting, even for block comments
- Avoid specifying units for zero values, e.g. `margin: 0;` instead of `margin: 0px;`
- Always add a semicolon to the end of a property/value declaration
- Use leading zeros for decimal values `opacity: 0.4;` instead of `opacity: .4;`
- Put spaces before and after child selector `div > span` instead of `div>span`

---

## Sass Specifics

### Internal order of a .scss file

- Imports
- Variables
- Base Styles
  - Blocks
  - Elements
  - Modifiers
  - @ Rules or Pseudo and State selectors
- Media Queries Styles

Example:

```scss
// Imports
@import "../variables";
@import "../helpers";

// Variables
$modal-namespace: "eduk-modal";
$modal-padding: 32px;

$modal-background: #fff;
$modal-background-alt: color(gray, x-light);

// Base styles

// Block
.eduk-modal {
  ...
  // Elemets
  &__container {
    ...
    // @ Rules or Pseudo and State selectors
    @include hover { ... }
    
    // Modifiers
    &--sm { ... }

  }

// Media queries
@media only screen and (min-device-width : 320px) { ... )
```

### Variables

- Define all variables in scss/\_variables.scss
- Namespace local variables with the component name
  - eg `btn` →`$btn-font-weight: 600;`
- variables should be `kebab-case`

### Color

- Lowercase all hex values `#fffff`
- Limit alpha values to a maximum of two decimal places. Always use a leading zero.

Example:

```scss
// Bad
.c-link {
  border-color: #fff;
  background-color: rgba(#fff, 0.0625);
}

// Good
.c-link {
  border-color: #ffffff;
  background-color: rgba(#ffffff, 0.1);
}
```

---

## Rule Ordering

Properties and nested declarations should appear in the following order, with line breaks between groups:

1. Any `@` rules
2. Layout and box-model properties

- margin, padding, box-sizing, overflow, position, display, width/height, etc.

3. Typographic properties

- E.g. font-_, line-height, letter-spacing, text-_, etc.

4. Stylistic properties

- color, background-\*, animation, border, etc.

5. UI properties

- appearance, cursor, user-select, pointer-events, etc.

6. Pseudo-elements

- ::after, ::before, ::selection, etc.

7. Pseudo-selectors

- :hover, :focus, :active, etc.

8. Modifier classes
9. Nested elements

Here’s a comprehensive example:

```scss
.eduk-btn {
  @extend %link--plain;

  display: inline-block;
  padding: 6px 12px;

  text-align: center;
  font-weight: 600;

  background-color: color(blue);
  border-radius: 3px;
  color: white;

  &::before {
    content: '';
  }

  &:focus,
  &:hover {
    box-shadow: 0 0 0 1px color(blue, 0.3);
  }

  &--lg {
    padding: 12px 24px;
  }

  > .eduk-icon {
    margin-right: 6px;
  }
}
```

---

## Nesting

- As a general rule of thumb, avoid nesting selectors more than 3 levels deep
- Prefer using nesting as a convenience to extend the parent selector over targeting nested elements. For example:

  ```scss
  .block {
    padding: 24px;

    &--mini {
      padding: 12px;
    }
  }
  ```

Nesting can be really easily avoided by smart class naming (with the help of BEM) and avoiding bare tag selectors.

---

## BEM

Block: Unique, meaningful names for a logical unit of style.

Element: styles that only apply to children of a block. Elements can also be blocks themselves. Class name is a concatenation of the block name, two underscores and the element name. Examples:

- `.alert-box__close`
- `.expanding-section__container`

Modifier: override or extend the base styles of a block or element with modifier styles. Class name is a concatenation of the block (or element) name, two hyphens and the modifier name. Examples:

- `.alert-box--success`
- `.expanding-section--expanded`

### BEM Best practices

Don't `@extend` block modifiers with the block base.

- Good: `<div class="my-block my-block--modifier">`
- Bad: `<div class="my-block--modifier">`

Don't create elements inside elements. If you find yourself needing this, consider converting your element into a block.

- Bad: `.alert-box__close__button`

Choose your modifiers wisely. These two rules have very different meaning:

```scss
.block--modifier .block__element {
  color: red;
}
.block__element--modifier {
  color: red;
}
```

---

## Selector Naming

- Try to use [BEM-based](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) naming for your class selectors
  - When using modifier classes, always require the base/unmodified class is present
- Use Sass’s nesting to manage BEM selectors like so:

  ```scss
  .block {
    &--modifier {
      // compiles to .block--modifier
      text-align: center;
    }

    &__element {
      // compiles to .block__element
      color: red;

      &--modifier {
        // compiles to .block__element--modifier
        color: blue;
      }
    }
  }
  ```

---

## Namespaced Classes

There are a few reserved namespaces for classes to provide common and globally-available abstractions.

- `.eduk-{any}` for all css styles in UIKit to avoid clashing to the existing styles of the project.
- `.eduk-{component}` for CSS components. Components are designed pieces of UI—think buttons, inputs, modals, and banners.
- `.eduk-u-{utility}` for helpers and utilities. Utility classes are usually single-purpose and have high priority. Things like floating elements, trimming margins, etc.
---

## Separation of Concerns (One Thing Well™)

You should always try to spot common code—padding, font sizes, layout patterns—and abstract them to reusable, namespaced classes that can be chained to elements and have a single responsibility. Doing so helps prevent overrides and duplicated rules, and encourages a separation of concerns.

```scss
// Bad code
// HTML:
// <div class="modal compact">...</div>
.modal {
  padding: 32px;
  background-color: color(gray, x-light);

  &.compact {
    padding: 24px;
  }
}

// Good code
// HTML:
// <div class="eduk-modal eduk-u-p-4">...</div>
// <div class="eduk-modal eduk-u-p-3">...</div>

// components/_modal.scss
.eduk-modal {
  background-color: color(gray, x-light);
  ...
}

// uitilities/_spacing.scss
.eduk-u-p-4 {
  padding: 32px;
}

.eduk-u-p-3 {
  padding: 24px;
}
```

---

## Media Queries

Media queries should be within the CSS selector as per SMACSS

```scss
.selector {
  float: left;

  @media only screen and (max-width: 767px) {
    float: none;
  }
}
```

Create variables for frequently used breakpoints

```scss
$breakpoint-sm-max: 'max-width: 767px';

.selector {
  float: left;

  @media only screen and ($breakpoint-sm-max) {
    float: none;
  }
}
```
