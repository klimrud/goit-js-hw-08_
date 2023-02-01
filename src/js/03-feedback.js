 import throttle from 'lodash.throttle'


const formEl = document.querySelector('.feedback-form')
const inputEl = document.querySelector('input');
const texTareaEl = document.querySelector('textarea');
const btnEl = document.querySelector('button');

// console.log(formEl);
//  console.log(inputEl.value);
// console.log(texTareaEl);
// console.log(btnEl);

   const STIRAGE_KEY = 'feedback-form-state';
   let formValue = {
      email: '',
      message: '',
     };

     
  

formEl.addEventListener('submit', onFormSubmit );
//  texTareaEl.addEventListener('input', onTextInput);
// inputEl.addEventListener('input', onMailInput);
formEl.addEventListener('input', throttle(onFormInput, 500));

// console.log(localStorage);
// localStorage.setItem('feedback-form-state', JSON.stringify(formValue ));
// const saveFeedback = localStorage.getItem('feedback-form-state');
// const parstFeedback = JSON.parse(saveFeedback);
// console.log( 'saveFeedback',saveFeedback);
// console.log('parstFeedback',parstFeedback );


feedbackMess();

// ===============================================
function onFormInput(e){
    e.preventDefault();
   //  console.log('ho');
    try{
   //  const email = formValue.email;
   //  const message = formValue.message;
   // console.log(email);
   // console.log(message);
   // console.log(e.target.value);
    formValue[e.target.name] = e.target.value;
   //  console.log(formValue);
    localStorage.setItem(STIRAGE_KEY, JSON.stringify(formValue));
   // save(STIRAGE_KEY, formValue);

}catch (err){
      console.log(err);
  };
}

// =============================================
// function onMailInput(e){
//    // console.log('hi');
//    const email = e.currentTarget.value;
//     console.log(email);
//    //   localStorage.setItem(STIRAGE_KEY, email); 
//  }

//  отсл по умолч
//  чистим хранил
//  чистим форму
function onFormSubmit(e){
   e.preventDefault();
  
//  console.log('sos');
   //   if (formValue.email === '') { 
   //    const messageE = (" Поле Email повиннo бути заповненo!")
   //     return  alert(messageE);  
   //     } 
     
        console.log(formValue);
     e.target.reset();
     localStorage.removeItem(STIRAGE_KEY);
};


// // получ знач формы
// // сохр в хран
// function onTextInput(e){
//    // console.log('good')
//    const message = e.currentTarget.value; 
//    console.log(message);
//    // localStorage.setItem(STIRAGE_KEY, message);
// }

// данные из хранилища
// function feedbackMess(){
//    const saveFeedbak = localStorage.getItem(STIRAGE_KEY);
//    const saveFeedbackParse = JSON.parse(saveFeedbak)
//       if(saveFeedbackParse) {
//          inputEl.value = saveFeedbackParse.email;
//          texTareaEl.value = saveFeedbackParse.message;
//     }
// };


function feedbackMess() {
   const saveFeedbak = localStorage.getItem(STIRAGE_KEY);
   const saveFeedbackParse = JSON.parse(saveFeedbak);
   if (saveFeedbackParse) {
     inputEl.value = saveFeedbackParse?.email;
     texTareaEl.value = saveFeedbackParse?.message;
     formValue.email = saveFeedbackParse?.email;
     formValue.message = saveFeedbackParse?.message;
   }
 }











