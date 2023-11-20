function love(){


alert("Jus Fun, See and Go man ");

var yourName = document.getElementById("yourname").value;
var yourGender = document.querySelector('input[name="yourgender"]:checked').value;

var yourCrushName = document.getElementById("crushname").value;
var yourCrushGender = document.querySelector('input[name="yourcrushgender"]:checked').value;



var loveScore = Math.floor(Math.random()*100);
// document.getElementById('ll').innerHTML = loveScore + "%";



if (loveScore >= 80 ) 
{ 
    document.getElementById("ll").innerHTML ="Your ❤️ score is "+loveScore+"%. You Both are realy cute ❤️"
    // console.log("Your score is "+trueloves+"%. You Both are realy cute ❤️");
}
else if (loveScore >= 50 ) 
{
    document.getElementById("ll").innerHTML ="Your ❤️ score is "+loveScore+"%. Its okey, you both are very nice ❤️"
    // console.log("Your score is "+trueloves+"%. Its okey, you both are very nice ❤️");
}
else if (loveScore >= 30 ) 
{
    document.getElementById("ll").innerHTML ="Your ❤️ score is " +loveScore+"%. Hey You Need to talk with your ❤️"
    // console.log("Your score is " +trueloves+"%. Hey You Need to talk with your ❤️");
}
else
{  
    document.getElementById("ll").innerHTML = "Your ❤️ score is " +loveScore+ "%. Hey Guys, Its a crazy game not to be taken as serious , You know that you both are so cute ❤️"
    // console.log("Your score is " + trueloves + "%. Hey Guys, Its a crazy game not to be taken as serious , You know that you both are so cute ❤️");
}

var quotes = `"The best thing to hold onto in life is each other." - Audrey Hepburn ooo

"Love is friendship that has caught fire. It is quiet understanding, mutual confidence, sharing, and forgiving. It is loyalty through good and bad times. It settles for less than perfection and makes allowances for human weaknesses." - Ann Landers ooo

"In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine." - Maya Angelou ooo

"Love does not consist of gazing at each other, but in looking outward together in the same direction." - Antoine de Saint-Exupéry ooo

"Love isn’t something you find. Love is something that finds you." - Loretta Young ooo

"The best love is the kind that awakens the soul and makes us reach for more, that plants a fire in our hearts and brings peace to our minds." - Nicholas Sparks ooo

"Love is like the wind, you can’t see it but you can feel it." - Nicholas Sparks ooo

"I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more." - Angelita Lim ooo

"To love is nothing. To be loved is something. But to love and be loved, that’s everything." - T. Tolis ooo

"Love is a canvas furnished by nature and embroidered by the imagination." - Voltaire] ooo`

var quotess = quotes.split("ooo");
var computerchoice = Math.floor(Math.random()*11);
var computerchoices = quotess[computerchoice]
// console.log(computerchoices)
document.getElementById("llll").innerHTML = computerchoices ;

alert("Hey " +" " +yourName +",  This love calculator is designed for entertainment purposes only. The results generated are not scientifically proven and should not be used as a basis for any relationship decisions. Love and compatibility are complex and individual experiences that cannot be accurately measured by a simple calculator. We do not collect or store any personal information entered into the calculator. Please use this tool with a lighthearted approach and remember that genuine relationships are built on communication, understanding, and mutual respect.")


}





