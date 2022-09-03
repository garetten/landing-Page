'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var burger = document.getElementsByClassName('burger-menu');

// BURGER OPEN CLOSE
burger[0].addEventListener('click', function (e) {
    var navbar = document.getElementsByClassName('navbar');
    navbar[0].classList.toggle('active');
    burger[0].classList.toggle('active');
});

var modalOpen = document.getElementsByClassName('main__button');
var closeModal = document.getElementsByClassName('block__header__close');
modalOpen[0].addEventListener('click', function (e) {
    var modal = document.getElementsByClassName('modal');
    modal[0].classList.toggle('active');
});
closeModal[0].addEventListener('click', function (e) {
    var modal = document.getElementsByClassName('modal');
    modal[0].classList.toggle('active');
});

// Modal check counts words

var CheckedWords = function () {
    function CheckedWords(textareaEl, inputEl) {
        var arrExceptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ["the", "a", "an"];

        _classCallCheck(this, CheckedWords);

        this.numberWords = 100;
        this.textareaEl = textareaEl;
        this.inputEl = inputEl;
        this.arrExceptions = arrExceptions;
    }

    _createClass(CheckedWords, [{
        key: 'getCountWords',
        value: function getCountWords() {
            if (Number.isNaN(+this.inputEl.value)) {
                this.inputEl.classList.add('modal__error');
                return;
            }
            this.numberWords = +this.inputEl.value;
            this.inputEl.classList.remove('modal__error');
            var maxWords = document.getElementsByClassName('words__max');
            maxWords[0].innerText = this.numberWords;
        }
    }, {
        key: 'numberOfWords',
        value: function numberOfWords() {
            var _this = this;

            var text = this.textareaEl.value;
            var arrtext = text.split(" ");
            var arrFilter = arrtext.filter(function (el) {
                for (var i = 0; i < _this.arrExceptions.length; i++) {
                    if (el === _this.arrExceptions[i]) return false;
                }
                return true;
            });
            var wordsWroten = document.getElementsByClassName("words__wroten");
            wordsWroten[0].innerText = arrFilter.length;
            if (this.numberWords < arrFilter.length - 1) {
                console.log("ERROR");
                console.log(this.numberWords);
                this.textareaEl.classList.add('modal__error');
                return;
            }
            this.textareaEl.classList.remove('modal__error');
        }
    }]);

    return CheckedWords;
}();

var inputChek = document.getElementsByClassName('modal__input');
var textAreaChek = document.getElementById('textArea');
var cheked = new CheckedWords(textAreaChek, inputChek[0]);
inputChek[0].addEventListener('input', function (e) {
    cheked.getCountWords();
});

console.log(cheked.numberOfWords);
textAreaChek.addEventListener('input', function (e) {

    cheked.numberOfWords();
});