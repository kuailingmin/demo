/**
 * Created by star on 15/11/18.
 */

//创建类
class Greeter{
    name:String;
    age:number;
    sex:boolean;
    constructor(name:string,age:number,sex:boolean){
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    print(){
        return "姓名：" + this.name + "--年龄：" + this.age + "---性别:" + this.sex;
    }
}


class star extends Greeter{
    text:string;
    print(){
        return "继承调用：" + this.name + ":" + this.text + (this.sex==false)?"女":"男";
    }

}

//var p = new Greeter("star",10);

var s = new star("star",10,false);
console.log(s.print());

