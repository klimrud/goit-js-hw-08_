import lodashThrottle from 'lodash.throttle'


const formEl = document.querySelector('.feedback-form')
const inputEl = document.querySelector('input');
const texTareaEl = document.querySelector('textarea');
const btnEl = document.querySelector('button');

// console.log(formEl);
// console.log(inputEl);
// console.log(texTareaEl);
// console.log(btnEl);

 formEl.addEventListener('submit', onFormSubmitFeedbeck)

// inputEl.addEventListener("input", onInputChange);

// function onInputChange(event) {

//     const efgg = inputEl.textContent;
// //    outputEl.textContent = event.currentTarget.value ? event.currentTarget.value : 'Anonymous'
//     // console.log(outputEl);
//    console.log(inputEl.value);
//   addFeedbeckToStorage(efgg)
// };



function onFormSubmitFeedbeck(event) {
    event.preventDefault();
   
   const {elements : { email, message}
  } = event.currentTarget;
   const mailValue = email.value;
    const formValue = { email: email.value, message : message.value }
   if (mailValue === '') { 
   const messageE = (" полe повиннo бути заповненo.")
    return  alert(messageE);  
    } 
    console.log(formValue);
//  console.log('Name:', mailValue);
//  console.log('message:', message.value);
   event.currentTarget.reset();

   addFeedbeckToStorage(formValue)

}




function save(key, value){
    try{
   const  serializeData = JSON.stringify(value);
   localStorage.setItem(key, serializeData); 
}catch (err){
    console.log(err);
}
};

const STIRAGE_KEY = 'feedback-form-state'
// save(STIRAGE_KEY, {
//     mail : "ho",
// })


function load(key, value){
    try{
//    const  serializeData = JSON.stringify(value);
   const serializeState = localStorage.getItem(key); 
  return serializeState === null ? undefined : JSON.parse(serializeState);


}catch (err){
    console.log(err);
}
};

console.log(load(STIRAGE_KEY));

function createFeedbeckObj(data,isDone ){
    return {
        data,
        isDone,
    };
};

function addFeedbeckToStorage(data, isDone = false){
    const currentState = load(STIRAGE_KEY);
    if (currentState === undefined) {
        save(STIRAGE_KEY, [createFeedbeckObj(data, isDone)])
    } else{
        currentState.push(createFeedbeckObj(data,isDone));
        save(STIRAGE_KEY, currentState);
    }
}