const obj = document.querySelector('.title');
const day = document.querySelector('.date');
const exp = document.querySelector('#exp');
const read = document.querySelector('.read');
const btn = document.querySelector('.btn');
const pic = document.querySelector('.img');
const dat = document.querySelector('.data');
const main = document.querySelector('#main');
const body = document.querySelector('#body');
const heart = document.querySelector('#heart');
const good = document.querySelector('.like');
const hdImg = document.querySelector('#hdImg');
const calendary = document.querySelector('#calendary');
const birth = document.querySelector('#birth');
const value = document.querySelector('#value');

window.addEventListener('load', function(){
	calendary.addEventListener('change', function(){
		let infoDate = calendary.value;

		const xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function (){
        if(this.readyState == 4 && this.status == 200){
            let data = JSON.parse(this.responseText);

            let copyrigth = data['copyright'];
            let $date = data['date'];
            let explanation = data['explanation'];
            let hdurl = data['hdurl'];
            let media_type = data['media_type'];
            let title = data['title'];
            let url = data['url'];

            obj.innerHTML = title;
            day.innerHTML = $date;
            exp.innerHTML = explanation;
            pic.src = url;
            hdImg.href = hdurl;
            }
};

    const queryFull = "https://api.nasa.gov/planetary/apod?api_key=tFmSHw4Cbk373YGbVAf4qo0FOj6rj1toJ0SLOhSD";
    const queryDate = "&date=" + infoDate + "&";
    const queryUrl = queryFull + queryDate;

    xmlhttp.open("GET", queryUrl, true );
    xmlhttp.send();
	});
});

btn.addEventListener('click', like)
let num = 0;

function like(){
    num ++;
    heart.style.display = 'flex';
    heart.style.color = 'white';
    good.style.display = 'none';
    if(num === 2){
        num = 0;
        heart.style.display = 'none';
        good.style.display = 'flex';
    }
}


