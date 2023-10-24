//Heading code
const heading = document.createElement('h1');
heading.textContent = 'Brightness of LED on a Scale';
heading.style.textAlign = 'center';
document.body.appendChild(heading);

//Intensity scale Buttons and api calls using built in functions from bolt cloud 
singleButton({name:"100%", action:"analogWrite", pin:"0", value:"255",bgcolor:"#40ff01", shape:"rectangle",align:"center","text_color":"white" });
singleButton({name:"80%", action:"analogWrite", pin:"0", value:"204", bgcolor:"#d8ff01", shape:"rectangle", align:"center", text_color:"white"});
singleButton({name:"60%", action:"analogWrite", pin:"0", value:"153",bgcolor:"#efff01", shape:"rectangle", align:"center","text_color":"white" });
singleButton({name:"40%", action:"analogWrite", pin:"0", value:"102",bgcolor:"#ffd101", shape:"rectangle", align:"center", text_color:"white"});
singleButton({name:"20%", action:"analogWrite", pin:"0", value:"51",bgcolor:"#ff9c01", shape:"rectangle", align:"center", text_color:"white"});
singleButton({name:"LED Off", action:"analogWrite", pin:"0", value:"0",bgcolor:"#fd4001", shape:"rectangle", align:"center", text_color:"white"});