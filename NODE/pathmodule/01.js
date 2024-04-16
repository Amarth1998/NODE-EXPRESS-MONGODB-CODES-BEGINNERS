const path=require('path');
console.log(path.dirname("C:/Users/amart/OneDrive/Desktop/Node js/thaapa/pathmodule/01.js"));
//C:/Users/amart/OneDrive/Desktop/Node js/thaapa/pathmodule

console.log(path.extname("C:/Users/amart/OneDrive/Desktop/Node js/thaapa/pathmodule/01.js"));
//.js

console.log(path.basename("C:/Users/amart/OneDrive/Desktop/Node js/thaapa/pathmodule/01.js"));
//01.js

console.log(path.parse("C:/Users/amart/OneDrive/Desktop/Node js/thaapa/pathmodule/01.js"))
// {
//     root: 'C:/',
//     dir: 'C:/Users/amart/OneDrive/Desktop/Node js/thaapa/pathmodule',
//     base: '01.js',
//     ext: '.js',
//     name: '01'
//   }
const a = path.parse("C:/Users/amart/OneDrive/Desktop/Node js/thaapa/pathmodule/01.js")
console.log(a.base,a.name,a.base,a.ext)
//01.js 01 01.js .js