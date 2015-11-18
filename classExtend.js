/**
 * Created by star on 15/11/18.
 */
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
//定义修饰符默认是共有的public 如果想在类中定义私有参数，使用private
var Person = (function () {
    function Person() {
    }
    Person.prototype.print = function () {
        return this.name + "----" + this.age;
    };
    return Person;
})();
var Student = (function (_super) {
    __extends(Student, _super);
    function Student() {
        _super.apply(this, arguments);
    }
    Student.prototype.print = function () {
        return this.name + ":" + this.school;
    };
    return Student;
})(Person);
var s = new Student();
s.name = "蒯灵敏";
s.age = 30;
s.school = "北大";
console.log(s.print());
//# sourceMappingURL=classExtend.js.map