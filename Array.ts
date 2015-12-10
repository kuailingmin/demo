/**
 * Created by star on 15/11/18.
 */
    //定义数组
var list:any[] = [1,2,"string"];

var list1:Array<any> = ["klm",false];
var list2:Array<boolean> = [false,true];

function tell(){
    console.log(list[1]);
    console.log(list1[0]);
    console.log(list2[1] + "---state-----");
}
tell();

