import"./assets/styles-C422v4Dy.js";const t={email:"",message:""},a=document.querySelector(".feedback-form"),l="feedback-form-state";a.addEventListener("input",s);function s(e){t[e.target.name]=e.target.value.trim(),localStorage.setItem(l,JSON.stringify(t))}a.addEventListener("submit",e=>{e.preventDefault(),!t.email||!t.message?alert("Fill please all fields"):(console.log(t),localStorage.removeItem(l),a.reset())});function o(){const e=JSON.parse(localStorage.getItem(l));console.log(e),e&&(a.elements.email.value=e.email,a.elements.message.value=e.message,t.email=e.email,t.message=e.message,console.log(a.elements))}o();
//# sourceMappingURL=2-form.js.map
