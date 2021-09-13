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
    let bad = ["Oh darling. go $buy$ a brain.", "I $hope$ this account isn't important.", "May god have $mercy$ on your email account.", "Is that how you protect your account from your $partner?$", "This password needs more $emoji.$", "Don't come $crying$ to me when you're hacked.", "Really, you call $that!$ a password?", "Find your $patience$ before i lose mine.", "I'm afraid about your $wifi$ password.", "Do you even know what a password $is!?$", "Are you taking this $seriously?$", "How old are you? $5$ ??", "Apse $better$ ummeed kiye the hum.", "I've seen $dogs$ with better passwords.", "I am busy right now, can i $ignore$ you some other time?", "Mashing your $head$ on the keyboard would be more secure.", "Yaar kuch aur type karo $mzaa$ nhi aa rha.", "I was $ignoring$ you from the very first attempt."]
    //let bad = ["Oh darling. Go $buy$ a brain.", "I $hope$ this account isn't important.", "May god have $mercy$ on your email account.", "Is that how you protect your account from your $Partner?$", "This password needs more $emoji$", "Are You Always This $Retarded$ Or You Making A Special Effort?", "Don't come $crying$ to me when you're hacked.", "Really, you call $that!$ a password?", "Find Your $Patience$ Before I Lose Mine", "I'm Afraid About Your $Wifi$ Password", "Do You Even Know What A Password $Is!?$", "Are you taking this $seriously?$", "How Old Are You? $5$ ??", "Now its $Enough$", "I've seen $dogs$ with better passwords.", "I Am Busy Right Now, Can I $Ignore$ You Some Other Time?", "Mashing your $head$ on the keyboard would be more secure", "Yaar kuch aur type karo $mzaa$ nhi aa rha.", "I Was $Ignoring$ You From The Very First Attempt"];
    let medium = ["I May Look Calm, But Inside My Mind, I’ve $Killed$ You 20 Times.", "$Zombies$ Eat Brains. You’re Safe.", "You're Starting To $Understand.$", "Fair, But Not Your $Best$ Work."];
    let good = ["I Would $Almost$ Use This.", "I $might$ use this.", "Who $Wrote$ This For You?", "Now You Are $Taking!!$", "Thodi aur $mehenat$ ki zarurat hai.", "I'll Give You An $A$ For Effort.", "Its Pretty Strong... I $Guess$."];
    let length = ["This is pretty $pathetic.$","Kuch kam dhanda kar lo $faltu$ me type karne se acha.", "You're $joking$ right?", "$Advice:$ Stop pressing the keys!!", "Worst. Password. $Ever.$", "$Size$ Doesn't Matter try harder buddy.", "Perhaps this was good 10 $years$ ago.", "Yeah, Like You're Going To $Remember$ This.", "Kuch bhi type karne se $password$ nhi ban jata!", "You lack $creativity.$", "Matlab $Kuch$ Bhi Huh ?? "];


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
