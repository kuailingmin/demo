/**
 * Created by star on 15/11/16.
 */
////创建一个接口
//interface StringValidator{
//    isModule(s:string):boolean;
//}
//
////对字母进行的正则匹配
//var letterRegexp = /^[A-Za-z]+$]/;
////对数字进行的正则匹配
//var numberRegexp = /^[0-9]+$]/;
//
//
//
////创建一个类继承接口,并进行验证
//class classLetterTest implements StringValidator{
//    isModule(s:string):boolean{
//        return letterRegexp.test(s);
//    }
//}
//class classNumberTest implements StringValidator{
//    isModule(s:string):boolean{
//        return s.length == 5 && numberRegexp.test(s);
//    }
//}
//typescript 模块化开发
var Validation;
(function (Validation) {
    var stringRegexp = /^[A-Za-z]+$]/;
    var numberRegexp = /^[0-9]+$]/;
    var LetterTest = (function () {
        function LetterTest() {
        }
        LetterTest.prototype.isValidator = function (s) {
            return stringRegexp.test(s);
        };
        return LetterTest;
    })();
    Validation.LetterTest = LetterTest;
    var NumberTest = (function () {
        function NumberTest() {
        }
        NumberTest.prototype.isValidator = function (s) {
            return s.length == 5 && numberRegexp.test(s);
        };
        return NumberTest;
    })();
    Validation.NumberTest = NumberTest;
})(Validation || (Validation = {}));
//# sourceMappingURL=module.js.map