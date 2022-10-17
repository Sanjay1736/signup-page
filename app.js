const checkInput=(event)=>{
    const errorElement=Array.from(event.target.parentNode.querySelectorAll('span'));
    if(event.target.value==="" && errorElement.length){
      event.target.insertAdjacentHTML('afterEnd','<span class="text-danger">Requried</span>')
    }
    if(errorElement&&event.target.value!==''){
      errorElement.forEach(elem=>elem.remove);
    }
  };
  document.getElementById("username").addEventListener('blur',checkInput);
