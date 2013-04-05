SmugMug Form Value Objectifier Thingy
=====================================

Adds a `Y.DOM.formToObject(identifier)` method to extract form input, select,
and textarea values from a form and return them in an object, keyed by input
name.

Usage
-----

```
var valueMap = Y.DOM.formToObject(identifier, includeDisabled);
```

* Ignores disabled form fields unless a second, truthy, argument is passed
  (e.g. `var valuesIncludingDisabled = Y.DOM.formToObject('#my-form', true)`;
* If a checkbox is not checked or no radio in a radio group is selected, no
  property will be included in the returned object for that field name.
* If no `<option>` is selected in a single selection `<select>`, the first
  `<option>` will be used.
* If no `<option>` is selected in a multi-select `<select>`, no property will be
  included in the returned object for that field name.
* If an `<option>` isn't assigned a `value` attribute, its text content will be
  used.
* If more than one field has the same `name` or the field is a multi-select
  `<select>`, the values will be in an array.

All DOM values are strings.

Examples
--------

```
// Assuming a <form> with <input name="foo" value="bar">
var values = Y.DOM.formToObject('#my-form');
// or
var values = Y.DOM.formToObject(document.getElementById('my-form'));
// or
var values = Y.DOM.formToObject(Y.one('#my-form'));

console.log(values.foo); // => "bar"
```

License
-------

Copyright (c) 2013 SmugMug, Inc.

Redistribution and use of this software in source and binary forms, with or
without modification, are permitted provided that the following conditions are
met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.

  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation
    and/or other materials provided with the distribution.

  * Neither the name of SmugMug, Inc. nor the names of this project's
    contributors may be used to endorse or promote products derived from this
    software without specific prior written permission of SmugMug, Inc.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
