/**
 * Created by star on 15/11/18.
 */

//创建类
class Greeter{
    name:String;
    age:number;
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
    print(){
        return "姓名：" + this.name + "--年龄：" +this.age;
    }
}

var p = new Greeter("star",10);
console.log(p.print());

