<script type="text/javascript">
var time; var on = false; var seconds = 0; var minutes = 0;
 
var startTime = function(){
        seconds++;
        time = setTimeout("startTime()",1000);
        if(seconds > 59)  {seconds = 0; minutes++;}
        document.getElementById("minutes").value = minutes;
        // Mostar segundos
        document.getElementById("seconds").value = seconds;
        // Mostar segundos
}
 
var stopStart = function(){
        document.getElementById("time").innerHTML = !on ? "Stop" : "Start";
        if(!on){
            on = true;  startTime();
        }else{
            on = false; clearTimeout(time);
        }
}
</script>
 
<button onClick="stopStart()" id="time">Start</button>
<input type="text" id="minutes" value="0" />
<!-- //Aquí los minutos -->
<input type="text" id="seconds" value="0" />
<!-- // Aquí los segundos -->