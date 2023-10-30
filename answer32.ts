function arr(){
    let current_user: string[]=['jhon','jane','basil','bob','eve'];
    let newuser:string[]=['mary','shazil','hamza','jhon','kate'];
    for (let newusers of newuser){
         let isDuplicate =false;
         for(let current_users of current_user){
            if(newusers.toLowerCase() === current_users.toLowerCase()){
                isDuplicate = true;
                break;
            }
         }
         if(isDuplicate){
            console.log(`The  username ${newuser} is not available please enter a new  username`);

         }else{
            console.log(`The username ${newuser} is available`);
         }

    }
}
arr();