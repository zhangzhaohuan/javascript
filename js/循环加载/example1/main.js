console.log("main starting");
const a = require("./a.js");
const b = require("./b.js"); 
console.log("in main, a.done = %j, b.done = %j", a.done, b.done);

/**
 * 参考资料node commonJS循环加载
 * 加载 a.js 时，a.js 依次加载 b.js。 此时，b.js 尝试加载 a.js。 
 * 为了防止无限循环，将 a.js 导出对象的 未完成的副本 返回给 b.js 模块。 然后 b.js 完成加载，并将其 exports 对象提供给 a.js 模块
 * 
 * 分析：
 * 当 main.js 加载 a.js 时，a.js 依次加载 b.js。 此时，b.js 尝试加载 a.js。 
 * 为了防止无限循环，将 a.js 导出对象的 未完成的副本 返回给 b.js 模块。 然后 b.js 完成加载，并将其 exports 对象提供给 a.js 模块。
 * 
 * 
 * 参考资料node commonJS缓存
 * 模块在第一次加载后被缓存。 这意味着（类似其他缓存）每次调用 require('foo') 都会返回完全相同的对象（如果解析为相同的文件）
 * 如果 require.cache 没有被修改，则多次调用 require('foo') 不会导致模块代码被多次执行。 这是重要的特性。 有了它，可以返回 "部分完成" 对象，从而允许加载传递依赖，即使它们会导致循环。
 * 要让模块多次执行代码，则导出函数，然后调用该函数。
 * 
 * 分析：const a = require("./a.js");执行后，a.js，b.js被缓存，后面多次调用require，a.js、b.js代码不会多次执行
 * 
 * 
$ node main.js
main starting
a starting
b starting
in b, a.done = false
b done
in a, b.done = true
a done
in main, a.done = true, b.done = true 
 * 
 * 
 * 
 * 
 */
