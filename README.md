<h1>Tooltip for Google Apps Script </h1>
<hr>
<h3>HTML FILE </h3>
<br>In the HTML file you add three data-* tags to identify the tooltip.
<br><b>data-tooltipposition=""</b> <br>To indicate the position relative to the object you want to add the tooltip to. 
<br> "top" to place the tooltip above the object.
<br> "left" to place the tooltip to left of the object
<br> "right" to place the tooltip to the right of the object
<br> "bottom" to place the tooltip bellow the object.
<br><b>data-tooltiptype="" </b><br>To indicate the kind of tooltip you want to use.
<br> "normal" for a black tooltip.
<br> "warning" for a red tooltip. 
<br> "info" for a blue tooltip. 
<br><b>data-tooltiptext=""</b><br> The text you want to place in the tooltip. 
<br> 
<br>For example 
```html
<div id="mydiv" data-tooltipposition="top" data-tooltiptype="warning" data-tooltiptext="Warning Top">Error Top</div>
```
or in case of the tooltip for GS
```html
<p  class="testgs" id="testgs"  data-tooltipposition="bottom" data-tooltiptype="normal" >
```
<hr>
<h3>GODE.GS </h3>
<br>In the Code.gs file off the project add the functions 
<br><b>doGet()</b> function calling the HTML service.
<br><b>tooltipGS()</b> function where you can create a tooltip interacting with Google Apps Script Services.
<br>
<hr>
<h3>style.html</h3>
<br>Appart from the normal style markup for html, add the specific tooltip styles.
<br>In the style.html file it is all the part bellow the comment.
```css
/*
/*  From here on is the tooltip 
*/
/* Tooltip that goes on top of the text */
.tooltip_top {
    color:#fff
    ;opacity:1
    ;margin:6px
    ;padding-top:5px
    ;padding-left:8px
    ;padding-right:8px
    ;padding-bottom:5px
    
}

.tooltip_top:after,
.tooltip_top:before {
	position: absolute;
	top: 100%;
	width: 0;
	height: 0;
	border: solid transparent;
	content: " ";
	pointer-events: none;
}

.tooltip_top:after {
	left: 50%;
	margin-left: -5px;
	border-width: 5px;
	border-top-color: inherit;
}


/* Continue till the end off the style file */
```
<hr>
<h3>javascript.html</h3>
There are vife functions:
<br><b>focus()</b>
<br>The function that builds, shows and positions the Tooltip.
<br><b>nofocus()</b>
<br>The function that removes and positions the Tooltip.
<br><b>bindTooltip()</b>
<br>The function that binds an html element to the Google Apps Script in order to get interactive content.
<br><b>tooltipJS()</b>
<br>The function that receives the parameters from the tooltipGS script.
<br><b>showError()</b>
<br>In case the Google Apps Script resolves an error this function will write a message.
<br>
<br>The functions are bound to the html elements with the js function  ```addEventListener()```.
<br>So the script does not need Jquery.
<br>
<hr>
<h3>Working Example</h3>
A [working example](http://devtest.lagaroo.com.br/dev-test/dev-test-tooltip) on dev test.










