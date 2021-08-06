let array = [3,4,7,[1,2],[3,4,[1,5,[0,2]]]];
/// Flat


function customFlat(array){
    let newArr = [];
    for (let i=0; i<array.length; i++) {
        if(typeof array[i] ==='object'){
            newArr=newArr.concat(customFlat(array[i]));
        }else{
            newArr.push(array[i]);
        }
    }
    return newArr;
}

// console.log(customFlat(array));


/// Natural

function natural(n){
    let count=0;
    while(n>0){
        let sum=sumOfDigit(n);
        n-=sum;
        count++;
    }
    return count;
}

function sumOfDigit(n){
    let sum=0;
    while(n>0){
        sum+=n%10;
        n=(n-n%10)/10;
    }
    return sum;
}

// console.log(natural(44));


// custom for 
let c=0;
function loop(n){
    if(c<n){
        c++;
        console.log(c);
        loop(n);
    }
    c=0;
}

// loop(5);
// loop(6);





/// DOM
let body = document.querySelector('body');
let container = document.createElement('div');
container.classList.add('container','mt-5');
let card = document.createElement('div');
card.classList.add('card');
card.style.width = '18rem';

let img = document.createElement('img');
img.setAttribute('src','./assets/200x100.png');
img.classList.add('card-img-top');

let cardBody = document.createElement('div');
cardBody.classList.add('card-body');

let h5 =  document.createElement('h5');
h5.classList.add('card-title');
h5.innerText='Card title';

let p = document.createElement('p')
p.classList.add('card-text');
p.innerText="Some quick example text to build on the card title and make up the bulk of the card's content";

let a = document.createElement('a');
a.setAttribute('href','#');
a.classList.add('btn','btn-primary');
a.innerText='Go somewhere';


cardBody.append(h5,p,a);

card.append(img,cardBody);

container.append(card);
body.prepend(container);














