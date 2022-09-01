fetch("http://api.github.com/users").then((res) => res.json())
.then((data) =>{
    // console.log(data)
    console.log(data[0])
    document.getElementById("img1").setAttribute("src",data[0].avatar_url);
    document.getElementById("username1").innerHTML = data[0].login;
    document.getElementById("visitbtn1").setAttribute("href",data[0].html_url);
    console.log(data[1])
    document.getElementById("img2").setAttribute("src",data[1].avatar_url);
    document.getElementById("username2").innerHTML = data[1].login;
    document.getElementById("visitbtn2").setAttribute("href",data[1].html_url);
    console.log(data[2])
    document.getElementById("img3").setAttribute("src",data[2].avatar_url);
    document.getElementById("username3").innerHTML = data[2].login;
    document.getElementById("visitbtn3").setAttribute("href",data[2].html_url);
    console.log(data[3])
    document.getElementById("img4").setAttribute("src",data[3].avatar_url);
    document.getElementById("username4").innerHTML = data[3].login;
    document.getElementById("visitbtn4").setAttribute("href",data[3].html_url);
    console.log(data[4])
    document.getElementById("img5").setAttribute("src",data[4].avatar_url);
    document.getElementById("username5").innerHTML = data[4].login;
    document.getElementById("visitbtn5").setAttribute("href",data[4].html_url);
    console.log(data[5])
    document.getElementById("img6").setAttribute("src",data[5].avatar_url);
    document.getElementById("username6").innerHTML = data[5].login;
    document.getElementById("visitbtn6").setAttribute("href",data[5].html_url);
    console.log(data[6])
    document.getElementById("img7").setAttribute("src",data[6].avatar_url);
    document.getElementById("username7").innerHTML = data[6].login;
    document.getElementById("visitbtn7").setAttribute("href",data[6].html_url);
    console.log(data[7])
    document.getElementById("img8").setAttribute("src",data[7].avatar_url);
    document.getElementById("username8").innerHTML = data[7].login;
    document.getElementById("visitbtn8").setAttribute("href",data[7].html_url);
    console.log(data[8])
    document.getElementById("img9").setAttribute("src",data[8].avatar_url);
    document.getElementById("username9").innerHTML = data[8].login;
    document.getElementById("visitbtn9").setAttribute("href",data[8].html_url);
    console.log(data[9])
    document.getElementById("img10").setAttribute("src",data[9].avatar_url);
    document.getElementById("username10").innerHTML = data[9].login;
    document.getElementById("visitbtn10").setAttribute("href",data[9].html_url);
    console.log(data[10])
    document.getElementById("img11").setAttribute("src",data[10].avatar_url);
    document.getElementById("username11").innerHTML = data[10].login;
    document.getElementById("visitbtn11").setAttribute("href",data[10].html_url);
    console.log(data[11])
    document.getElementById("img12").setAttribute("src",data[11].avatar_url);
    document.getElementById("username12").innerHTML = data[11].login;
    document.getElementById("visitbtn12").setAttribute("href",data[11].html_url);
});