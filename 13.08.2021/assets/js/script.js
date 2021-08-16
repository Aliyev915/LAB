let titles = document.querySelectorAll('.title');
let descriptions = document.querySelectorAll('.description');

function clearActives(){
    descriptions.forEach(description=>{
        description.classList.remove('active');
        description.previousElementSibling.firstElementChild.innerText = 'open me'
    })
}

titles.forEach(title=>{
    title.addEventListener('click',function(){
        clearActives();
        if(title.nextElementSibling.classList.contains('active')){
            title.querySelector('h3').innerText = 'open me';
        }else{
            title.querySelector('h3').innerText = 'close me';
        }
        title.nextElementSibling.classList.add('active');
    })
})