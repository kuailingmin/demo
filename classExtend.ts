/**
 * Created by star on 15/11/18.
 */

    //定义修饰符默认是共有的public 如果想在类中定义私有参数，使用private

class Person{
    public name:string;
    private age:number;
    print(){
        return this.name + "----" + this.age;
    }
}

class Student extends Person{
    school:string;
    print(){
        return this.name + ":" + this.school;
    }
}

var s = new Student();
s.name = "蒯灵敏";
s.school="北大";

console.log(s.print());