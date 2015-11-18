/**
 * Created by star on 15/11/18.
 */
//创建类
var Greeter = (function () {
    function Greeter(name, age) {
        this.name = name;
        this.age = age;
    }
    Greeter.prototype.print = function () {
        return "姓名：" + this.name + "--年龄：" + this.age;
    };
    return Greeter;
})();
var p = new Greeter("star", 10);
console.log(p.print());
//# sourceMappingURL=calsses.js.map