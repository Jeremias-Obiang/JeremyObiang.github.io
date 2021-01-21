const input=document.querySelector('input');
const btn=document.querySelector('.addTask>button');


input.addEventListener("keyup",(e)=>{
    (e.keyCode===13 ? addList(e):null);
})
  

      
   


btn.addEventListener('click',addList);



function addList(e){
    const notCompleted=document.querySelector('.notCompleted');
    const Completed=document.querySelector('.Completed');


    const newLi=document.createElement('li');
    const checkBtn= document.createElement('button');
    const delBtn=document.createElement('button');

    checkBtn.innerHTML='<i class="fas fa-check"></i>';
    delBtn.innerHTML='<i class="fas fa-trash"></i>';



    if(input.value!=='')
    {
        newLi.textContent=input.value;
        input.value='';
        notCompleted.appendChild(newLi);
        newLi.appendChild(checkBtn);
        newLi.appendChild(delBtn);
    }

    

    checkBtn.addEventListener('click',()=>{
        const parent=newLi;
        parent.parentNode.removeChild(parent);
        Completed.appendChild(parent);
        checkBtn.style.display='none';
    })

    delBtn.addEventListener('click',()=>{
        const parent=newLi;
        parent.parentNode.removeChild(parent);
    })

}




