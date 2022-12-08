import { banWords } from "./banwords.js";
(function () {

    let password = window.document.querySelector('#password');
    let comment = document.querySelector('.reviews');
    let mainComment = document.querySelector('.main-comment');

    // for Weak password box
    let rightBox = document.querySelector('.box-right');
    let content = document.querySelector('#contentID');
    let recommendMsg = document.querySelector('.warning');


    // array for all types of comments.
    let bad = ["I'm not sure if that's a password or a $knock-knock$ joke.", "Is that your password or your $shoe$ size?", "That password is so bad, even a $caveman$ would be embarrassed to use it.", "That password is an insult to the concept of $security$", "Try again, and this time use your $brain$.", "Oh darling. go $buy$ a brain.", "I $hope$ this account isn't important.", "May god have $mercy$ on your email account.", "Is that how you protect your account from your $partner?$", "This password needs more $emoji$", "Don't come $crying$ to me when you're hacked.", "Really, you call $that!$ a password?", "Find your $patience$ before i lose mine", "I'm afraid about your $wifi$ password", "Do you even know what a password $is!?$", "I May Look Calm, But Inside My Mind, I’ve $Killed$ You 20 Times", "Are you taking this $seriously?$", "How old are you? $5$ ??", "Now its $enough$", "I've seen $dogs$ with better passwords.", "I am busy right now, can i $ignore$ you some other time?", "Mashing your $head$ on the keyboard would be more secure", "I was $ignoring$ you from the very first attempt"];
    let medium = ["You must really love that $'medium'$ security level.", "Nice try, but I'm not falling for your $mediocre$ password.", "That password is so average, it's practically $yawn$-inducing.", "I'm sorry, but that password is only $mediocre$ at best", "I guess it's $better$ than having no password at all!", "I can't wait to see what your $strong$ password will be like!", "Wow, you really put a lot of $thought$ into that one!", "Looks like someone's trying to be a little more $creative$ with their password", "Well, at least it's not $password123$!", "I'm sorry, but that password is just $average$", "That password is $so-so$. It's not terrible, but it's not great either", "$Zombies$ Eat Brains. You’re Safe", "You're Starting To $Understand.$", "Fair, But Not Your $Best$ Work."];
    let good = ["I'm $impressed$ by your password choice. It's not often that people come up with something so strong and unique.", "I hope you're proud of yourself for choosing such a $secure$ and unguessable password.", "Using a strong password like that is like hiring a personal $bodyguard$ for your account", "Looks like you're taking your password security $seriously$. Good job!", "I'm $impressed$, that's a pretty strong password you've got there. Keep up the good work!", "I Would $Almost$ Use This.", "I $might$ use this.", "Who $Wrote$ This For You?", "Now You Are $Taking!!$", "I'll Give You An $A$ For Effort.", "Its Pretty Strong... I $Guess$."];
    let length = ["having a $long$ password doesn't automatically make it strong.", "This is pretty $pathetic.$", "You're $joking$ right?", "$Advice:$ Stop pressing the keys!!", "Worst. Password. $Ever.$", "$Size$ Doesn't Matter try harder buddy.", "Perhaps this was good 10 $years$ ago.", "Yeah, Like You're Going To $Remember$ This.", "You lack $creativity.$"];


    // Regex for password strength
    let strongRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
    let mediumRegex = /((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))/;


    //Random value generator for array
    function randomValue(array) {
        return Math.floor(Math.random() * array.length);
    }


    let storageRandom;

    // funtion for printing comments
    function addComment(array) {
        comment.classList.add('animate');

        let random = randomValue(array);
        while (storageRandom === random) {

            random = randomValue(array);
        }
        storageRandom = random;


        let commentString = array[random];
        let coloredString = commentString.split('$')


        let coloredText = `${coloredString[0]}<span class="colored">${coloredString[1]}</span>${coloredString[2]}`;
        mainComment.innerHTML = coloredText;


        let div = `<h4 class="animate">${coloredText}</h4>`
        comment.innerHTML = div;

    }

    //import file
    let stringArray = banWords.split(",");

    password.addEventListener('input', () => {


        let level;
        let passwordValue = password.value;

        if (stringArray.includes(passwordValue)) {
            level = 0;
        }
        else {
            if (strongRegex.test(passwordValue)) {
                level = 3;
            }
            else if (mediumRegex.test(passwordValue)) {
                level = 2;

            }
            else if (passwordValue.length > 20) {
                level = 4;
            }
            else {
                level = 1;
            }

        }

        switch (level) {
            case 1:
                addComment(bad);
                break;
            case 2:
                addComment(medium);
                break;
            case 3:
                addComment(good);
                break;
            case 4:
                addComment(length);
                break;
        }


    });


    // suggestion button

    let suggestionBtn = document.querySelector('#needSuggestion');
    let scroll;
    let suggestionBox = document.querySelector('.suggestion-div');


    suggestionBtn.addEventListener('click', function () {

        suggestionBox.classList.toggle('showBox');


        scroll = setTimeout(function () {
            window.scrollTo({
                top: suggestionBox.offsetTop,
                behavior: 'smooth'
            });

        }, 100);


    });




    (function ShowContent() {

        rightBox.addEventListener('click', function () {
            content.classList.toggle('content')
            rightBox.classList.toggle('showBoxContent');
            recommendMsg.innerHTML = "Use these passwords so that hackers can hack you";

            if (rightBox.classList.contains('showBoxContent')) {
                scroll = setTimeout(function () {
                    window.scrollTo({
                        top: rightBox.offsetTop,
                        behavior: 'smooth'
                    });

                }, 100);
            }
        })
    })();




    (function weakPasswordsSection() {

        let allWeakPasswords = ["Password", "Secure", "123456", "Password123", "Peanuts"];
        let weakPasswords = document.querySelector('.weakPasswords');


        for (let i = 0; i < 5; i++) {
            let insert = allWeakPasswords[i];
            let list = document.createElement('li');
            list.appendChild(document.createTextNode(insert));
            weakPasswords.appendChild(list);
        }


    })();

})();
