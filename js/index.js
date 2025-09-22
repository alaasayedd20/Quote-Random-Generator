var qoutes = [
    {Phrase:"Be yourself; everyone else is already taken.",
    author:"Oscar Wilde"
    },
    {Phrase:"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    author:"Marilyn Monroe"
    },
    {Phrase:"So many books, so little time.",
    author:"Frank Zappa"
    },
    {Phrase:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author:"Albert Einstein"
    },
    {Phrase:"A room without books is like a body without a soul.",
    author:"Marcus Tullius Cicero"
    },
    {Phrase:"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    author:"Bernard M. Baruch"
    },
    {Phrase:"You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    author:"Dr. Seuss"
    },
    {Phrase:"You only live once, but if you do it right, once is enough.",
    author:"Mae West"
    },
    {Phrase:"Be the change that you wish to see in the world.",
    author:"Mahatma Gandhi"
    },
    {Phrase:"In three words I can sum up everything I've learned about life: it goes on.",
    author:"Robert Frost"
    },

];
var x = Math.floor((Math.random() * qoutes.length));
var y = 0;
function show(){
    while(x===y){
        x = Math.floor((Math.random() * qoutes.length));
    }
    console.log(x);
    
    document.getElementById("demo").innerHTML = `
    <p>"${qoutes[x].Phrase}"</p>
    <p>-${qoutes[x].author}-</p>
    `
    y = x;
}




