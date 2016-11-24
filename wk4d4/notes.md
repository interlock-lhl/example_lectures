
## Errors and promises

### Tip'O'The'Day

`python -m SimpleHTTPServer 8080`

### Throw

- Immediately halts the code on the line that throws
 - nothing after that line is run
- You have seen these as stack traces when you have encounter syntax and data errors.
- You can throw your own errors to communicate fatal events:
 - `throw new Error('Something bad happened')`
 - Opinions differ, but ideally we only throw errors when we absolutely have to.
 - the callback pattern that uses the first argument as an error is a perfectly acceptable
 alternative to throwing (and desirable for common error that we can easily recover and handle)

[throw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)

### try ... catch... and sometimes finally

- If we are running code that expects an error of the thrown variety we can wrap that
code in `try { } catch (err) { }`.
- Our job when we catch these errors is to either recover gracefully; or;
- Fail in a shower of fireworks, ideally log any useful information about what happened to
get to this point. Then exit the program.
- You my optionally add a `finally` to your try ... catch if you have some code that needs
to run after the try block every time, regardless if the catch was triggered. It also
happens to run after the catch block every time as well, which gives us a handy way to
clean up any mess the exception created.

[try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

### Manual AJAX with XHR

- https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest

### Callback errors

### Promise Errors

### Wrappers to common npm's that add promises:
- [request-promise](https://www.npmjs.com/package/request-promise)
- [pg-then](https://www.npmjs.com/package/pg-then)
- [promised-mongo](https://www.npmjs.com/package/promised-mongo)
- [promisifier](https://www.npmjs.com/package/promisifier)
