# API Documentation

Chromeless provides TypeScript typings.

**Chromeless methods**
- [`end()`](#api-end)

**Chrome methods**
- [`goto(url: string)`](#api-goto)
- [`setUserAgent(useragent: string)`](#api-setuseragent)
- [`click(selector: string)`](#api-click)
- [`wait(timeout: number)`](#api-wait-timeout)
- [`wait(selector: string)`](#api-wait-selector)
- [`wait(fn: (...args: any[]) => boolean, ...args: any[])`] - Not implemented yet
- [`clearCache()`](docs/api.md#api-clearcache)
- [`focus(selector: string)`](#api-focus)
- [`press(keyCode: number, count?: number, modifiers?: any)`](#api-press)
- [`type(input: string, selector?: string)`](#api-type)
- [`back()`](#api-back) - Not implemented yet
- [`forward()`](#api-forward) - Not implemented yet
- [`refresh()`](#api-refresh) - Not implemented yet
- [`mousedown(selector: string)`](#api-mousedown)
- [`mouseup(selector: string)`](#api-mouseup)
- [`scrollTo(x: number, y: number)`](#api-scrollto)
- [`scrollToElement(selector: string)`](#api-scrolltoelement)
- [`setHtml(html: string)`](#api-sethtml)
- [`setViewport(options: DeviceMetrics)`](#api-setviewport)
- [`evaluate<U extends any>(fn: (...args: any[]) => void, ...args: any[])`](#api-evaluate)
- [`inputValue(selector: string)`](#api-inputvalue)
- [`exists(selector: string)`](#api-exists)
- [`screenshot()`](#api-screenshot)
- [`pdf(options?: PdfOptions)`](#api-pdf)
- [`html()`](#api-html)
- [`cookies()`](#api-cookies)
- [`cookies(name: string)`](#api-cookies-name)
- [`cookies(query: CookieQuery)`](#api-cookies-query) - Not implemented yet
- [`allCookies()`](#api-all-cookies)
- [`setCookies(name: string, value: string)`](#api-setcookies)
- [`setCookies(cookie: Cookie)`](#api-setcookies-one)
- [`setCookies(cookies: Cookie[])`](#api-setcookies-many)
- [`deleteCookies(name: string)`](#api-deletecookies)
- [`clearCookies()`](#api-clearcookies)


---------------------------------------

<a name="api-end" />

### end(): Promise<T>

End the Chromeless session. Locally this will disconnect from Chrome. Over the Proxy, this will end the session, terminating the Lambda function.
It returns the last value that has been evaluated.

```js
await chromeless.end()
```

---------------------------------------

<a name="api-goto" />

### goto(url: string): Chromeless<T>

Navigate to a URL.

__Arguments__
- `url` - URL to navigate to

__Example__

```js
await chromeless.goto('https://google.com/')
```

---------------------------------------

<a name="api-setuseragent" />

### setUserAgent(useragent: string): Chromeless<T>

Set the useragent of the browser. It should be called before `.goto()`.

__Arguments__
- `useragent` - UserAgent to use

__Example__

```js
await chromeless.setUserAgent('Custom Chromeless UserAgent x.x.x')
```

---------------------------------------

<a name="api-click" />

### click(selector: string): Chromeless<T>

Click on something in the DOM.

__Arguments__
- `selector` - DOM selector for element to click

__Example__

```js
await chromeless.click('#button')
```

---------------------------------------

<a name="api-wait-timeout" />

### wait(timeout: number): Chromeless<T>

Wait for some duration. Useful for waiting for things download.

__Arguments__
- `timeout` - How long to wait, in ms

__Example__

```js
await chromeless.wait(1000)
```

---------------------------------------

<a name="api-wait-selector" />

### wait(selector: string): Chromeless<T>

Wait until something appears. Useful for waiting for things to render.

__Arguments__
- `selector` - DOM selector to wait for

__Example__

```js
await chromeless.wait('div#loaded')
```

---------------------------------------

<a name="api-wait-fn" />

### wait(fn: (...args: any[]) => boolean, ...args: any[]): Chromeless<T>

Not implemented yet

Wait until a function returns.

__Arguments__
- `fn` - Function to wait for
- `[arguments]` - Arguments to pass to the function

__Example__

```js
await chromeless.wait(() => { return console.log('@TODO: put a better example here') })
```

---------------------------------------

<a name="api-clearcache" />

### clearCache(): Chromeless<T>

Clears browser cache.

Service workers and Storage (IndexedDB, WebSQL, etc) needs to be cleared separately. More information at the [Chrome Devtools Protocol website](https://chromedevtools.github.io/devtools-protocol/tot).

__Example__

```js
await chromeless.clearCache()
```

---------------------------------------

<a name="api-focus" />

### focus(selector: string): Chromeless<T>

Provide focus on a DOM element.

__Arguments__
- `selector` - DOM selector to focus

__Example__

```js
await chromeless.focus('input#searchField')
```

---------------------------------------

<a name="api-press" />

### press(keyCode: number, count?: number, modifiers?: any): Chromeless<T>

Send a key press. Enter, for example.

__Arguments__
- `keyCode` - Key code to send
- `count` - How many times to send the key press
- `modifiers` - Modifiers to send along with the press (e.g. control, command, or alt)

__Example__

```js
await chromeless.press(13)
```

---------------------------------------

<a name="api-type" />

### type(input: string, selector?: string): Chromeless<T>

Type something (into a field, for example).

__Arguments__
- `input` - String to type
- `selector` - DOM element to type into

__Example__

```js
const result = await chromeless
  .goto('https://www.google.com')
  .type('chromeless', 'input[name="q"]')
```

---------------------------------------

<a name="api-back" />

### back() - Not implemented yet

Not implemented yet

---------------------------------------

<a name="api-forward" />

### forward() - Not implemented yet

Not implemented yet

---------------------------------------

<a name="api-refresh" />

### refresh() - Not implemented yet

Not implemented yet

---------------------------------------

<a name="api-mousedown" />

### mousedown(selector: string): Chromeless<T>

Send mousedown event on something in the DOM.

__Arguments__
- `selector` - DOM selector for element to send mousedown event

__Example__

```js
await chromeless.mousedown('#item')
```

---------------------------------------

<a name="api-mouseup" />

### mouseup(selector: string): Chromeless<T>

Send mouseup event on something in the DOM.

__Arguments__
- `selector` - DOM selector for element to send mouseup event

__Example__

```js
await chromeless.mouseup('#placeholder')
```

---------------------------------------

<a name="api-scrollto" />

### scrollTo(x: number, y: number): Chromeless<T>

Scroll to somewhere in the document.

__Arguments__
- `x` - Offset from top of the document
- `y` - Offset from the left of the document

__Example__

```js
await chromeless.scrollTo(500, 0)
```

---------------------------------------

<a name="api-scrolltoelement" />

### scrollToElement(selector: string): Chromeless<T>

Scroll to location of element. Behavior is simiar to `<a href="#fragment"></a>` — target element will be at the top of viewport

__Arguments__
- `selector` - DOM selector for element to scroll to

__Example__

  ```js
await chromeless.scrollToElement('.button')
  ```

  ---------------------------------------

<a name="api-sethtml" />

### setHtml(html: string): Chromeless<T>

Sets given markup as the document's HTML.

__Arguments__
- `html` - HTML to set as the document's markup.

__Example__

```js
await chromeless.setHtml('<h1>Hello world!</h1>')
```

---------------------------------------

<a name="api-setviewport" />

### setViewport(options:DeviceMetrics)

Resize the viewport. Useful if you want to capture more or less of the document in a screenshot.

__Arguments__
- `options` - DeviceMetrics object

__Example__

```js
await chromeless.setViewport({width: 1024, height: 600, scale: 1})
```

---------------------------------------

<a name="api-evaluate" />

### evaluate<U extends any>(fn: (...args: any[]) => void, ...args: any[]): Chromeless<U>

Evaluate Javascript code within Chrome in the context of the DOM. Returns the resulting value or a Promise.

__Arguments__
- `fn` - Function to evaluate within Chrome, can be async (Promise).
- `[arguments]` - Arguments to pass to the function

__Example__

```js
await chromeless.evaluate(() => {
    // this will be executed in Chrome
    const links = [].map.call(
      document.querySelectorAll('.g h3 a'),
      a => ({title: a.innerText, href: a.href})
    )
    return JSON.stringify(links)
  })
```

---------------------------------------

<a name="api-inputvalue" />

### inputValue(selector: string): Chromeless<string>

Get the value of an input field.

__Arguments__
- `selector` - DOM input element

__Example__

```js
await chromeless.inputValue('input#searchField')
```

---------------------------------------

<a name="api-exists" />

### exists(selector: string): Chromeless<boolean>

Test if a DOM element exists in the document.

__Arguments__
- `selector` - DOM element to check for

__Example__

```js
await chromeless.exists('div#ready')
```

---------------------------------------

<a name="api-screenshot" />

### screenshot(): Chromeless<string>

Take a screenshot of the document as framed by the viewport.
When running Chromeless locally this returns the local file path to the screenshot image.
When run over the Chromeless Proxy service, a URL to the screenshot on S3 is returned.

__Example__

```js
const screenshot = await chromeless
  .goto('https://google.com/')
  .screenshot()

console.log(screenshot) // prints local file path or S3 URL
```

---------------------------------------

<a name="api-pdf" />

### pdf(options?: PdfOptions) - Chromeless<string>

Print to a PDF of the document as framed by the viewport.
When running Chromeless locally this returns the local file path to the PDF.
When run over the Chromeless Proxy service, a URL to the PDF on S3 is returned.

Requires that Chrome be running headless-ly. [More](https://github.com/graphcool/chromeless/issues/146)


__Arguments__
- `options` - An object containing overrides for [printToPDF() parameters](https://chromedevtools.github.io/devtools-protocol/tot/Page/#method-printToPDF)

__Example__

```js
const pdf = await chromeless
  .goto('https://google.com/')
  .pdf({landscape: true})

console.log(pdf) // prints local file path or S3 URL
```

---------------------------------------

<a name="api-html" />

### html(): Chromeless<string>

Get full HTML of the loaded page.

__Example__

```js
const html = await chromeless
  .setHtml('<h1>Hello world!</h1>')
  .html()

console.log(html) // <html><head></head><body><h1>Hello world!</h1></body></html>
```

---------------------------------------

<a name="api-cookies" />

### cookies(): Chromeless<Cookie[] | null>

Returns all browser cookies for the current URL.

__Example__

```js
await chromeless.cookies()
```

---------------------------------------

<a name="api-cookies-name" />

### cookies(name: string): Chromeless<Cookie | null>

Returns a specific browser cookie by name for the current URL.

__Arguments__
- `name` - Name of the cookie to get

__Example__

```js
const cookie = await chromeless.cookies('creepyTrackingCookie')
```

---------------------------------------

<a name="api-cookies-query" />

### cookies(query: CookieQuery) - Not implemented yet

Not implemented yet

---------------------------------------

<a name="api-all-cookies" />

### allCookies(): Chromeless<Cookie[]>

Returns all browser cookies. Nam nom nom.

__Example__

```js
await chromeless.allCookies()
```

---------------------------------------

<a name="api-setcookies" />

### setCookies(name: string, value: string): Chromeless<T>

Sets a cookie with the given name and value.

__Arguments__
- `name` - Name of the cookie
- `value` - Value of the cookie

__Example__

```js
await chromeless.setCookies('visited', '1')
```

---------------------------------------

<a name="api-setcookies-one" />

### setCookies(cookie: Cookie): Chromeless<T>

Sets a cookie with the given cookie data; may overwrite equivalent cookies if they exist.

__Arguments__
- `cookie` - The cookie data to set

__Example__

```js
await chromeless.setCookies({
  url: 'http://google.com/',
  domain: 'google.com',
  name: 'userData',
  value: '{}',
  path: '/',
  expires: 0,
  size: 0,
  httpOnly: false,
  secure: true,
  session: true,
})
```

---------------------------------------

<a name="api-setcookies-many" />

### setCookies(cookies: Cookie[]): Chromeless<T>

Sets many cookies with the given cookie data; may overwrite equivalent cookies if they exist.

__Arguments__
- `url` - URL to navigate to

__Example__

```js
await chromeless.setCookies([
  {
    url: 'http://google.com/',
    domain: 'google.com',
    name: 'userData',
    value: '{}',
    path: '/',
    expires: 0,
    size: 0,
    httpOnly: false,
    secure: true,
    session: true,
  }, {
    url: 'http://bing.com/',
    domain: 'bing.com',
    name: 'userData',
    value: '{}',
    path: '/',
    expires: 0,
    size: 0,
    httpOnly: false,
    secure: true,
    session: true,
  }
])
```

---------------------------------------

<a name="api-deletecookies" />

### deleteCookies(name: string) - Not implemented yet

Delete a specific cookie.

__Arguments__
- `name` - name of the cookie

__Example__

```js
await chromeless.deleteCookies('cookieName')
```

---------------------------------------

<a name="api-clearcookies" />

### clearCookies(): Chromeless<T>

Clears all browser cookies.

__Example__

```js
await chromeless.clearCookies()
```
---------------------------------------

<a name="api-clearInput" />

### clearInput(selector: string): Chromeless<T>

Clear input text.


__Example__

```js
await chromeless.clearInput('#username')
```
---------------------------------------

<a name="api-set-file-input" />

### setFileInput(selector: string, files: string | string[]): Chromeless<T>

Set file(s) for selected file input.

Currently not supported in the Proxy. Progress tracked in [#186](https://github.com/graphcool/chromeless/issues/186)


__Example__

```js
await chromeless.setFileInput('.uploader', '/User/Me/Documents/img.jpg')
```
