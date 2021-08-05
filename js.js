//setting box
var icon = document.querySelector(".fa-cog");
icon.onclick = function () {
  this.classList.toggle("fa-spin");
  document.querySelector(".setting-box").classList.toggle("open");
}
//end setting box

//chang background
let main1 = document.getElementById("home")
let array = ["back.jpg", "a.jpg", "b.jpg", "c.jpg", "d.jpg"];
var set = setInterval(() => {
  let randnumber = Math.floor(Math.random() * array.length);
  main1.style.backgroundImage = 'url("imgs/' + array[randnumber] + '")';
  main1.style.transition = '0.5s all';
}, 1000);
//stop work randombackground
var no = document.querySelector(".no")
no.addEventListener("click", function () {

  clearInterval(set);
})
// end chang background

//chang color
var colotlist = document.querySelectorAll(".color-list li");

colotlist.forEach(li => {
  //console.log(li);
  li.addEventListener("click", element => {
    var e = element.target.dataset.color;// هو اللوان  ل e
    document.documentElement.style.setProperty("--main-color", e);
    //console.log(element);
    colotlist.forEach(li => {
      li.classList.remove("active");
      if (li.dataset.color === e) {
        li.classList.add("active");
      }
    })

  })
})
// end chang color

//scroll Apartment span
window.onscroll = function () {
  var Apartment = document.querySelector(".Apartment");
  spans = document.querySelectorAll(".progoess span"),
    lia = document.querySelector(".liApartment"),
    scorllApartmentoffsettop = Apartment.offsetTop, // Apartment يجلب بدايه العنصر ل 
    scorllonApartmentheight = Apartment.offsetHeight, // Apartment   ارتفاع ل
    windowheight = this.innerHeight, //scorll الكولي
    windowscrolltop = this.pageYOffset; //يظهر واين وصل لscroll

  if (windowscrolltop > (scorllApartmentoffsettop + scorllonApartmentheight - windowheight)) {
    spans.forEach(span => {
      span.style.width = span.dataset.porgress;
      span.style.background = "yello"
    });
  }
};
//img
var imgs = document.querySelectorAll(".about img")
imgs.forEach(img => {
  img.addEventListener("click", event => {
    var divjs = document.createElement("div")
    divjs.className = "classcreatejs";
    document.body.appendChild(divjs)
    var divjs2 = document.createElement("div")
    divjs2.className = "classcreatejs2";
    var h3 = document.createElement("h3");
    h3.textContent = img.alt;
    divjs2.appendChild(h3);
    var spa = document.createElement("p")
    spa.textContent = "x";
    divjs2.appendChild(spa);
    var imgnow = document.createElement("img")
    imgnow.src = img.src;
    divjs2.appendChild(imgnow);
    divjs.appendChild(divjs2)
    //document.body.appendChild(divjs2)
    spa.onclick = function () {
      divjs2.parentElement.remove("classcreatejs2")
    }
  })
})
//scrollicon down


var scrolln = $(".icon");//هنا دا ابرمج اني خافيه  الايقونه اكله من انزل و scroll يصير 700 اظهري الايقونه 

$(window).scroll(function () {
  //console.log($(this).scrollTop())

  if ($(this).scrollTop() >= 300) {
    scrolln.show();
  }
  else {
    scrolln.hide();

  }
});

scrolln.click(function () {
//window.scrollTo(0,0); هاي تشتغل مابيه شي بس بسرعه يصعد ىفوك مابيه مرونه شويه
  $('html,body').animate({ scrollTop: (0) }, '2000');
});


//document.querySelector(".fa-chevron-circle-down").addEventListener("click" ,e =>{
//$("html, body").animate({ scrollTop: 0 },400);



// nav bage
var bag = document.querySelector("#contennav"),
  navmove = document.querySelector("#navmove"),

  navno = document.querySelector(".no2"),
  navyas = document.querySelector(".yas");


navno.onclick = function () {
  bag.style.display = 'none';


}
navyas.onclick = function () {
  console.log("d");
  bag.style.display = 'block';

}






/* yas.addEventListener("click",function(){
 
var set=setInterval(() => {
    let randnumber=Math.floor(Math.random() * array.length);
    main1.style.backgroundImage='url("imgs/'+ array[randnumber]+'")';
    main1.style.transition = '0.5s all';
}, 100);
}
no.addEventListener("click",function(){
var set=setInterval(() => {
   let randnumber=Math.floor(Math.random() * array.length);
   main1.style.backgroundImage='url("imgs/'+ array[randnumber]+'")';
   main1.style.transition = '0.5s all';
   clearInterval(set).style.transition='0.3s all';
}, 100);
}
)*/





function mtfun(e) {
  e.target.parentElement.querySelectorAll(".active").forEach(element => {
    element.classList.remove("active");
  }); e.target.classList.add("active");
}





//الاعلان
var my = setTimeout(() => {
  var divjs = document.createElement("div")
  divjs.className = "classcreatejs";
  document.body.appendChild(divjs)
  var divjs2 = document.createElement("div")
  divjs2.className = "classcreatejs2";
  var spa = document.createElement("p")
  spa.textContent = "x";
  divjs2.appendChild(spa);
  var h = document.createElement("h1")
  h.textContent = "اعلان";
  divjs2.appendChild(h);


  divjs.appendChild(divjs2)
  //document.body.appendChild(divjs2)
  spa.onclick = function () {

    divjs2.parentElement.remove("classcreatejs2")
  }
}, 3000);




//الالة الكتابه
var h1 = document.querySelector(".Typewriter"),
i = 0,
text = h1.textContent;
h1.textContent="";


var setin = setInterval(() => {
  h1.textContent += text[i];
  i +=1;
  if (i > text.length-1) {
    clearInterval(setin);
  }
}, 50);





//function myonclick(url){
//window.location=url;
//}
