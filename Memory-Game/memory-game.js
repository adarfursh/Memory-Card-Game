
var contain = document.getElementById("container");
var clickedIdArray = [];
var matchingPairs = 0;

// Music plays once page is loaded
window.onload = function () {
    document.getElementById("my_audio").play();
}

//change theme
$('#themeButton').click(function () {
    document.getElementById("my_audio").pause();
    document.getElementById("my_audio2").play();
    $('button').css("display", "none");
    $('.card').css("border", "3px solid silver");
    $('body').css("background-image", "url(http://inn.spb.ru/images/800/DSC100805560.jpg)");
    $(this).css("border", "3px solid lightgrey");
});


function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
//create cards and make them clickable
$(document).ready(function createCards() {
    var newId = 0;
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 4; j++) {
            var singleCard = document.createElement('div');
            singleCard.className = "card";
            singleCard.addEventListener("click", flipCard);
            (contain).appendChild(singleCard);

            singleCard.id = newId++;
        }
    }

    imgs = shuffle(imgs);
});



function flipBack() {
    clickedIdArray.forEach(function (card) {
        card.style.cssText = '';
    })
}
function flipCard(e) {
    if ($(this).hasClass('flipped') || (clickedIdArray.length === 2)) {
        // do nothing
    }
    else {
        if (clickedIdArray.length < 2) {
            $(this).addClass("flipped");
            $(this).css("background", "url(" + imgs[e.target.id] + ")");
            $(this).css("background-size", "100% 100%");
            $(this).css("background-repeat", "no-repeat");

            clickedIdArray.push(e.target);
        }

    }

    if (clickedIdArray.length === 2) {
        if ((clickedIdArray[0].style.background) === (clickedIdArray[1].style.background)) {
            console.log('cards are the same');
            matchingPairs++;
            clickedIdArray = [];
            if (matchingPairs === 1) {
                document.getElementById('my_audio3').play();
                gameOver();

            }
        }
        else {
            console.log('cards are not the same');

            setTimeout(function () {
                //alert(clickedIdArray.length);
                clickedIdArray[0].style.cssText = '';
                clickedIdArray[1].style.cssText = '';
                clickedIdArray = [];
                $('.flipped').removeClass('flipped');

            }, 1000)

        }
    }
}

function gameOver() {
    document.querySelector('.my-modal').style.display = "flex";

}


var imgs = ['https://acclaimmag.com/wp-content/uploads/2015/01/ODB.jpg',
    'https://escobar300.files.wordpress.com/2011/10/method-man-1.jpg?w=640',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Z91ya30NLkV4VBzqQcJt7w9Rgue98WZpbAFdbFErm72ytpSJ',
    'https://sslg.ulximg.com/image/750x750/cover/1370991926_c0bb81774afdb9dc5b4679464f80c244.jpg/4744ac818adcf627a630621584971076/1370991926_e4f69720ecefef377a0579a31278385f.jpg',
    'https://ksassets.timeincuk.net/wp/uploads/sites/55/2017/11/2017_rza_Beats1_161117-920x584.jpg',
    'https://i.ytimg.com/vi/DYhW7vHaoJQ/maxresdefault.jpg',
    'https://acclaimmag.com/wp-content/uploads/2015/01/ODB.jpg',
    'https://escobar300.files.wordpress.com/2011/10/method-man-1.jpg?w=640',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Z91ya30NLkV4VBzqQcJt7w9Rgue98WZpbAFdbFErm72ytpSJ',
    'https://sslg.ulximg.com/image/750x750/cover/1370991926_c0bb81774afdb9dc5b4679464f80c244.jpg/4744ac818adcf627a630621584971076/1370991926_e4f69720ecefef377a0579a31278385f.jpg',
    'https://ksassets.timeincuk.net/wp/uploads/sites/55/2017/11/2017_rza_Beats1_161117-920x584.jpg',
    'https://i.ytimg.com/vi/DYhW7vHaoJQ/maxresdefault.jpg',

];









