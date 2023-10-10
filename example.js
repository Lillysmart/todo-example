//@ts-check

let value = 3;

const increase = () => {
  value += 1;
};

const decrease = () => {
  value -= 1;
};


const counter = {
  value: 1,

  /**
 * increases counter value by 1
 */
  increase() {
   counter.value+=1
  },
  /**
 * decreases counter value by 1
 */
  decrease() {
    counter.value-=1
  },
  /**
 *logs the value to the console
 */
  display (){
    console.log(counter.value)
  }
};
counter.increase()
counter.increase()
counter.display()

const createCounter =()=>{
    let value = 1;

    const increase = () =>{value+=1} 
    
    const decrease = () =>{value-=1} 
     
  const  display =()=> console.log(value) 

  return 
}