function runSpam()
{
  function createTimerClick()
  {
    setInterval(function()
    {
         if ($('.icon-send').length)
         {
            $('.icon-send').click();
         }
      }, 205);
  }
  i=0;
  function myLoop () {
     setTimeout(function () {
        $(".input").sendkeys(mensaje);
        i++;
        if (i < parseInt(veces)) {
           myLoop();
        }
     }, 200)
  }
  createTimerClick();
  myLoop();
}
runSpam();
