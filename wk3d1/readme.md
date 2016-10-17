# Vanilla CSS

Tip: Easy mode static HTTP server `python -m SimpleHTTPServer 8888`

## Preview of Tweeter Project for this week

- local demo

## House Keeping

- expectations for learning at this point
- CSS frameworks
- SCSS is coming
- CSS is hard to write well, even we are still figuring it out
- CSS used to be worse across browsers, but it's fairly uniform now
- Remember to choose your battles for what to dig deep into and what to push to the side

## HTML, the 10 minute primer

- https://developer.mozilla.org/en/docs/Web/HTML/Element

## Put the box on the page

_how hard could it be?_

### Box model
- the default, it sucks
- `box-sizing: border-box`
- float: left vs display: inline-block
- centring elements: `margin: 0 auto` for blocks

### Well maybe blocks are better?

- `display: inline or inline-block`
- whitespace gets in the way... WHY???
- oh, but the parent element doesn't get collapsed, so that's a plus!
- secret note: `display: table-cell`

### Lets float some stuff

- great for column layouts!
- have to clear floats after you use them: `clear: both`
- parent element does something weird, which can be a problem at times...

### Position "Absolute"

- positions elements within the last position: relative element (the document if none have been made)
- So, if you want to position something relative to a div it is in, make that div, `position: relative`
- You may want to look at `position: fixed` as well, but use lightly


### Closing

- Flexbox, coming to the web near you
 - fixes a lot of the inconsistent and unintuitive behaviours in old box model
- We often use CSS reset and normalization scripts to remove any differences between browsers
 - http://necolas.github.io/normalize.css/
- MDN > W3C. Also, CSS-tricks site is great for those little work arounds.
- Don't use tables/iframes for layouts: http://www.warnerbros.com/archive/spacejam/movie/jam.htm
