const api_url = "https://www.boredapi.com/api/activity";

async function myFunction(){
    let check = document.querySelector('#sel');
    let temp = check.value;
    let new_url;
    if(temp==="What kind of activity would you want to find?"){
        new_url = api_url;
    }
    else{
        let temp2 = "?type="
        temp = temp2.concat(temp);
        new_url = api_url.concat(temp);
    }
    console.log(new_url)
    const response = await fetch(new_url);
    const data = await response.json(); 
    const task =  data.activity;
    document.getElementById("result").innerHTML = task;
    if(data.link!=""){
        document.getElementById("refer").style.display="block";
        document.getElementById("referen").style.display="block";
        document.getElementById("refer").innerHTML = data.link;
        document.getElementById("refer").href = data.link;
    }
    else{
        document.getElementById("refer").style.display = "none";
        document.getElementById("referen").style.display = "none";
    }
}
