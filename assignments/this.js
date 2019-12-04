/* The four principles of "this";

* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding:
* 2. Implicit Binding:
* 3. Explicit Binding:
* 4. new Binding:


* write out a code example of each explanation above
*/

// Principle 1

function f1() {
  return this;
}



// code example for Window Binding

// Principle 2

function f() {
return this.a;
}

var g = f.bind({a: 'azerty'});
console.log(g()); // azerty

var h = g.bind({a: 'yoo'}); // bind only works once!
console.log(h()); // azerty

var o = {a: 37, f: f, g: g, h: h};
console.log(o.a, o.f(), o.g(), o.h()); // 37,37, azerty, azerty

// code example for Implicit Binding



// Principle 3

function C() {
  this.a = 37;
}

var o = new C();
console.log(o.a); // 37


function C2() {
  this.a = 37;
  return {a: 38};
}

o = new C2();
console.log(o.a); // 38


// code example for New Binding

// Principle 4

function strict1(str) {
  'use strict';
  return eval(str); // str will be treated as strict mode code
}
function strict2(f, str) {
  'use strict';
  return f(str); // not eval(...): str is strict if and only
                 // if it invokes strict mode
}
function nonstrict(str) {
  return eval(str); // str is strict if and only
                    // if it invokes strict mode
}

strict1("'Strict mode code!'");
strict1("'use strict'; 'Strict mode code!'");
strict2(eval, "'Non-strict code.'");
strict2(eval, "'use strict'; 'Strict mode code!'");
nonstrict("'Non-strict code.'");
nonstrict("'use strict'; 'Strict mode code!'");

// code example for Explicit



