function runSpam()
{
  function createTimerClick()
  {
    setInterval(function()
    {
         if ($(".compose-btn-send").length)
         {
            $(".compose-btn-send").click();
         }
      }, 205);
  }
  i=0;
  function myLoop () {
     setTimeout(function () {
        $(".pluggable-input-body").sendkeys(mensaje);
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
