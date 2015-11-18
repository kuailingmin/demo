/**
 * Created by star on 15/11/18.
 */
//对值得下标可以自定义索引值
var color;
(function (color) {
    color[color["red"] = 1] = "red";
    color[color["blue"] = 2] = "blue";
    color[color["green"] = 3] = "green";
})(color || (color = {}));
var colorName = color[1];
var colorName1 = color[2];
var colorName2 = color[3];
var c = 1 /* red */;
console.log(colorName);
console.log(colorName1);
console.log(colorName2);
console.log(c + "呼呼呼呼呼");
//# sourceMappingURL=enum.js.map