// (function() {
//   'use strict';

//   setTimeout(function() {
//     document.querySelector('.greating_picture').classList.add('m--show');
//   }, 1000);
// })();

import {square, MyClass} from './module';

// 25
console.log(square(5));

var cred = {
    name: 'Юрий Кучма',
    enrollmentNo: 11115078
}

var x = new MyClass(cred);

console.log(x.getName());