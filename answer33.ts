function myfunc(){
    let numbers1: number[]=[1,2,3,4,5,6,7,8,9];
    for(let numbers of numbers1){
        let ordinal:string;
        if(numbers === 1){
            ordinal ='!st';
        }else if(numbers === 2){
            ordinal = "2nd";
        }else if(numbers ===3){
            ordinal = "3nd";
        }else {
            ordinal = numbers.toString() +"th";
        }
        console.log(ordinal);
    }
}
myfunc();