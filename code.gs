function doGet(e) 
{
   return HtmlService.createTemplateFromFile("dev_test_tooltip").evaluate()
    .setTitle("DEV TEST Tooltip")
    .setSandboxMode(HtmlService.SandboxMode.NATIVE);
}  


function testGS(toolTipPosition,toolTipType,rect, divid, halfOffSetWith)
{
  // here I can do anything with the gs services 
  // and return it to my JS function
  var toolTipText = "The tooltip comes from here"
  return  [ toolTipPosition,toolTipType,toolTipText,rect,divid,halfOffSetWith ]
}  

