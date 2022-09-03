let burger = document.getElementsByClassName('burger-menu');

 // BURGER OPEN CLOSE
burger[0].addEventListener('click',(e)=>{
    let navbar = document.getElementsByClassName('navbar');
    navbar[0].classList.toggle('active');
    burger[0].classList.toggle('active')
    
})

let modalOpen = document.getElementsByClassName('main__button');
let closeModal = document.getElementsByClassName('block__header__close');
modalOpen[0].addEventListener('click',(e)=>{
    let modal = document.getElementsByClassName('modal');
    modal[0].classList.toggle('active');
    
    
})
closeModal[0].addEventListener('click',(e)=>{
    let modal = document.getElementsByClassName('modal');
    modal[0].classList.toggle('active');
    
    
})


// Modal check counts words

class CheckedWords{
    constructor(textareaEl,inputEl,arrExceptions = ["the", "a", "an"]){
        this.numberWords = 100;
        this.textareaEl = textareaEl;
        this.inputEl = inputEl;
        this.arrExceptions = arrExceptions;
        
    }

    getCountWords(){
        if(Number.isNaN(+this.inputEl.value)){
            this.inputEl.classList.add('modal__error');
            return
        }
        this.numberWords = +this.inputEl.value;
        this.inputEl.classList.remove('modal__error');
        let maxWords = document.getElementsByClassName('words__max');
        maxWords[0].innerText = this.numberWords;
    }
    numberOfWords(){
        let text = this.textareaEl.value;
        let arrtext = text.split(" ");
        let arrFilter = arrtext.filter((el)=>{
            for(let i = 0;i<this.arrExceptions.length;i++){
                if(el === this.arrExceptions[i])
                    return false;
            }
            return true
        })
        let wordsWroten = document.getElementsByClassName("words__wroten");
        wordsWroten[0].innerText = arrFilter.length;
        if(this.numberWords < arrFilter.length-1){
            console.log("ERROR");
            console.log(this.numberWords)
            this.textareaEl.classList.add('modal__error');
            return
        }
        this.textareaEl.classList.remove('modal__error');

    }
}



let inputChek = document.getElementsByClassName('modal__input');
let textAreaChek = document.getElementById('textArea');
let cheked = new CheckedWords(textAreaChek,inputChek[0]);
inputChek[0].addEventListener('input',(e)=>{
    cheked.getCountWords();
})

console.log(cheked.numberOfWords)
textAreaChek.addEventListener('input',(e)=>{
    
    cheked.numberOfWords();
    
})