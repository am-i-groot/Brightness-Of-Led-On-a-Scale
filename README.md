# Brightness-Of-Led-On-a-Scale
## It’s Movie Time! Switch lights on dim with a click!
We will learn how to control the LED using Bolt Cloud.

# Problem Instance
Imagine you are watching a movie on your laptop and you want to turn off/dim the light of the room to get the feel of a movie hall. What if you can do the same by just one click while sitting on your bed. Sound's interesting!!

Therefore, we will learn how to create code for the LED in this project, that will allow you to have a remote-control interface for the lights in your room.

At this point, we believe that you guys are familiar with Bolt cloud i.e how to create a product and link it to the bolt device. In case you don't know, then you can refer *'Building your first IoT sensor project'* lesson.

# Components used in this project
BOLT Wi-Fi module, Resistor, LED, Mobile adapter, controller device. 

Executed the JavaScript development codes on BOLT-IOT cloud.

# What this device will help you with?
This device when deployed will help you with the following: -

•	Energy Efficiency: Lowering the intensity when full brightness is not required helps save energy and extends the lifespan of the LEDs.

•	Accessibility: For people with mobility issues or disabilities, remote control LED intensity provides easy access to adjust lighting without the need to move around physically.

•	Mood and Ambiance: Remote control LED intensity lets you set the perfect ambiance for different occasions and moods.

# Steps to follow
## HTML code to ON/OFF only

**Step 1**: Go to [cloud.boltiot.com](url) and create a new product. While creating the product, choose product type as Output Device and interface type as GPIO. After creating the product, select the recently created product and then click on configure icon.

**Step 2**: Move to the code tab and write the following code to control the LED.
In the header, we will include a javascript file which has some pre-defined function like *DigitalRead*, *digitalWrite* etc already hosted on our Bolt Cloud.

Script to be included is given below:
```
<script type="text/javascript "src="https://cloud.boltiot.com/static/js/boltCommands.js "></script >
```
**Note**: If you want to see the source code of the same open [https://cloud.boltiot.com/static/js/boltCommands.js](url) link in the browser.

Now the next step is to set the API key and device name. Syntax for the same is given below:

`<script type="text/javascript ">setKey('{{ApiKey}}','{{Name}}');</script >`

**Note**: API key and Device name will be auto-initialized by Bolt cloud. You don 't have to replace the device name and API key in the above code.

Now inside the  `<body >`  tag you have to place two buttons, one for turning the LED on and other to turn it off. The syntax for the same is given below:
```
<body>
  <center>
    <button>ON</button>
    <button>OFF</button>
  </center>
</body>

```
In the above code, we have place 2 buttons and put the text as `ON` and `OFF` respectively. You can change the text as per your choice.

**Note**: We have put both the buttons inside the  `<center ></center >`  tag to make the button align center.

Now we have to make these 2 buttons clickable. To do so, we have to call a javascript function named as  `onclick()`  which you have already read in lesson 'Creating your functions in Javascript '. Inside the onclick function, we are calling a function named  `digitalWrite()` .

`<button onclick="digitalWrite(0, 'HIGH ');">ON </button >`

`<button onclick="digitalWrite(0, 'LOW ');">OFF </button >`

`digitalWrite()`  function has two parameter. The first parameter is pin number and the second parameter state.

To turn the LED `ON`, the state would be `HIGH` and to turn it `OFF` state would be `LOW`.

**Note**: In the above example, the first parameter has value 0 which means LED is connected to pin 0. You can change this value based on your connection where have you connected the LED.

Below is the complete code:
```
<!DOCTYPE html>
<html>
    <head>
        <title>Bolt IoT Platform</title>
        <script type="text/javascript" src="https://cloud.boltiot.com/static/js/boltCommands.js"></script>
        <script>
        setKey('{{ApiKey}}','{{Name}}');
        </script>
    </head>
    <body>
        <center>
        <button onclick="digitalWrite(0, 'HIGH');">ON</button>
        <button onclick="digitalWrite(0, 'LOW');">OFF</button>
        </center>
    </body>
</html>
```
**Step 3**: Once you have written the complete code in the editor, give the file name as *ledcontrol* and in the drop-down select the file extension as *html*. Below is the screenshot how it looks after this step.
![image](https://github.com/user-attachments/assets/f69e8b5b-07d7-4c78-a9fd-a2bcaa786b89)

**Step 4**: Now click on save icon to save the code. Now go back to the dashboard by clicking on `X` icon.

**Step 5**: In the products tab, select the product created and then click on the link icon. Select your Bolt device in the popup and then click the `Done` button.

**Step 6**: Now click on view this device icon to view the page that you have designed. Below is the screenshot of the final output.
![image](https://github.com/user-attachments/assets/e3a703ec-779c-4c90-9a5b-4dff9d4f81da)

Now click on `ON` button, it will turn the LED on. Similarly, clicking on `OFF` button will turn LED off.

Is it working as expected? Awesome!! Now as an assignment connect the LED to different pins and try to turn it *ON/OFF*.

### Troubleshooting:
In case your LED is not turning ON/OFF below are some of the steps to troubleshoot what went wrong:

1. Go back to products configuration page and check whether the code that you have written is properly saved or not. If the code is not present, then again copy the code from above and paste in the editor and save the code.

2. Check your connection whether the LED is properly connected or not. Refer the previous lesson for the circuit connections.

3. Check on which pin the LED is connected. Make sure you have passed the same value in  `digitalWrite()`  function as the first parameter.

4. Make sure your API key is enabled. You can check the same by clicking on API icon on the left side of your dashboard.

That's it. In the next lesson, we will learn how to build Safety Alert system using Bolt.


## JS code to dim also
In the previous lesson, we wrote the HTML code to control the LED. What If I tell you, you can control the led just by writing a single line of JavaScript code on the Hardware configuration page. Let try it out.

Go to the product configuration page where you had written the HTML code for the led. And then remove the HTML code and from the file extension, choose **.js**
![image](https://github.com/user-attachments/assets/366ac242-85b4-4c1e-8033-feff55db582a)

Then write the below JavaScript code -
```
singleButton({name:"Led On", action:"digitalWrite",pin:"0", value:"HIGH"})
```
Save the file and Go to the control page of the device and refresh the page.
![image](https://github.com/user-attachments/assets/9749a47f-2b0b-4d52-b80a-f476447fe9c5)

As you can see in the above output, there is one Led On button is present. Now when you click on this button, the led will get switched on at pin 0.

**Note** - This code will only work if you choose the .js extension from the code tab. This feature will work with a graph and without graph code. If you write this code inside your graph code, then the graph will come first and then the control buttons will appear.

Now let's understand the parameter of singleButton function.

1. **name** - the name of the button that will appear on the page.
2. **action** - action button is the name of the command that will be executed on the click of the button. The commands are below,
   - *digitalWrite*
   - *analogWrite*
3. **pin** - pin number where you want to send the command. It could be
   - A0, 0, 1, 2, 3, 4
4. **value** - The state of the pin. It could be
   - *HIGH* - On digital pins
   - *LOW* - On digital pin
   - *0-255* - On analog pin

Ok Now, let's add on more button to switch off the led. So your whole code will look something like the below code snippet.
```
singleButton({name:"Led On", action:"digitalWrite", pin:"0", value:"HIGH"})

singleButton({name:"Led Off", action:"digitalWrite", pin:"0", value:"LOW"})
```
Save the above code and refresh the control page. Now you have two buttons, one is to switch on the led and another one is to switch off the led. And when you click on the Led On button, it will switch on the LED on *pin 0* and when you click on Led Off it will switch off the LED on *pin 0*.
![image](https://github.com/user-attachments/assets/92193439-c30a-4ee3-b199-92c77502aaaa)

But What if I want to customize the style of the button, so add some style to the button.
![image](https://github.com/user-attachments/assets/ef2adc31-0289-46d7-88b1-aab01787816c)

```
singleButton({name:"Led On", action:"digitalWrite", 
        pin:"0", value:"HIGH",bgcolor:"green",
        shape:"rectangle",align:"left","text_color":"white" })

singleButton({name:"Led Off", action:"digitalWrite", 
              pin:"0", value:"LOW", bgcolor:"red",
              shape:"rectangle", align:"left", text_color:"black"})

singleButton({name:"Fan On", action:"analogWrite", 
              pin:"0", value:"230",bgcolor:"#ffa500",
              shape:"circle", align:"right","text_color":"white" })

singleButton({name:"Fan Off", action:"analogWrite", 
              pin:"0", value:"0",bgcolor:"#6a5acd",
              shape:"circle", align:"right", text_color:"white"})
```    
  
Save the above code and refresh the control page and you will get the output as below.
![image](https://github.com/user-attachments/assets/abb6a9d1-0e85-4e63-b4fb-73a51397658f)


