fetch('https://icanhazdadjoke.com/slack')
.then(data=>data.json())
.then(jsonData=>{ 
    const data=jsonData.attachments[0].text;
    const para=document.getElementById('para');
    para.innerHTML=data;
})