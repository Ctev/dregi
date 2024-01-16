window.onload = function() 
{
	/*
	var audioTracks = [
		"audios/0.mp3",
		"audios/1.mp3",
		"audios/2.mp3", 
		"audios/3.mp3",
		"audios/4.mp3", 
		"audios/5.mp3", 
		"audios/6.mp3",
		"audios/7.mp3", 
		"audios/8.mp3", 
		"audios/9.mp3",
		"audios/10.mp3"
	];
	*/

	///*
	var audioTracks = [];

	for (var i = 0; i < 31; i++) 
	{
    	var audio = "audios/" + i + ".mp3";
    	audioTracks.push(audio);
	}
	//*/

	var randomIndex = Math.floor(Math.random() * audioTracks.length);
	var audio = document.getElementById("mainAudio");
	
	audio.src = audioTracks[randomIndex];
	audio.load();
	audio.volume = 0.2;

	var video = document.getElementById("mainVideo");

	video.onplay = function() {
		audio.play();
	};

	video.onpause = function() {
		audio.pause();
	};

	video.ontimeupdate = function() {
  		if (video.currentTime >= 45 && video.currentTime <= 48) {
    		audio.pause();
    		// Если ты хочешь включить другую звуковую дорожку
    		//audio.src = "new_audio.mp3";
    		//audio.play();

    		video.muted = false;

    		// Или если ты хочешь использовать звук из видео
    		// video.muted = true; // Если видео должно быть без звука, или false, если должен быть звук
  		}
  		else {
  			audio.play();
  			video.muted = true;
  		}
	};
}