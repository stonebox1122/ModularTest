// 引入其他的模块
// 语法：import xxx from 'PATH';
import $ from 'jquery';

import {foo, bar} from './module1';
import {fun, fun2} from './module2';
import module3 from './module3';

$('body').css('background','deeppink');

foo();
bar();
fun();
fun2();
module3.foo();
