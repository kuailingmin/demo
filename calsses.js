/**
 * Created by star on 15/11/18.
 */
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
//创建类
var Greeter = (function () {
    function Greeter(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    Greeter.prototype.print = function () {
        return "姓名：" + this.name + "--年龄：" + this.age + "---性别:" + this.sex;
    };
    return Greeter;
})();
var star = (function (_super) {
    __extends(star, _super);
    function star() {
        _super.apply(this, arguments);
    }
    star.prototype.print = function () {
        return "继承调用：" + this.name + ":" + this.text + (this.sex == false) ? "女" : "男";
    };
    return star;
})(Greeter);
//var p = new Greeter("star",10);
var s = new star("star", 10, false);
console.log(s.print());
//# sourceMappingURL=calsses.js.map