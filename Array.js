// let days:string[]=["Monday","Tuesday","Wednesday"]
// console.log("Before",days)
// days.push("Thursday")  // push use for adding last in array 
// console.log("using push ",days)
// days.pop() // pop for removing last eleement in array
// console.log("using pop ",days)
// days.shift() // for removing first element from array
// console.log("using shift ",days)
// days.unshift("Sunday") // for adding in first in array
// console.log("using unshift ",days)
// days.splice(0,1,"Saturday","Sunday","Monday")
// console.log("using splice ",days)
// let myTodos:string[] = [];
// do{
// console.log("------MY TODOS -------")
// console.log("1.Add Todo")
// console.log("2.Remove Todo")
// console.log("3.View Todo")
// console.log("0. exit")
// var choice:number = 0;
//     switch (choice) {
//         case 1:
//             console.log("add")
//             //  addTodo();
//             break;
//             case 2:
//                 // removeTodo();
//                 console.log("remove");
//                 break;
//                 case 3:
//                     // viewTodo();
//                     console.log("view");
//                     break;
//             case 0 :
//             console.log("exiting")
//             break;
//         default:
//             console.log("inValid Choice")
//             break;
//     }
// }while(choice != 0);
// let i = 1;
// while (i<=10) {
//     var result = i*5;
//     console.log("5 * " + i + " = " + result);
//     i++;
// }
// console.log("USING FOR LOOP")
// for ( var index = i  ; index <= 10; index++) {
//     var result = index*4;
//     console.log("4 * " + index + " = " + result);
// }
// while(i<10){
// console.log("Hello world !")
// i = i+1
// }
// var new1:number = 2+7 + i++ ;
// var new2:number = 2+7 + ++i ;
// console.log("new1",new1)
// console.log("new2",new2)
var sum = 0;
var List = [];
for (var i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        List.push(i);
        sum = i + sum;
    }
}
console.log(sum, List);
