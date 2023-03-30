// ==UserScript==
// @name         Vimeo Based Automatic Subtitles
// @version      1.0
// @author       william-vanschaik  
// @description  A userscript that turns on subtitles when the video loads
// @include      *embed.vhx.tv*
// @grant        none
// ==/UserScript==

//Wait until video is loaded
(function() {    
	function find_video() {
		console.log("Polling for video");
		video = document.querySelector("video");
		if (video) {
			console.log("Video Found");
			clearInterval(poll);
			console.log("Enabling subtitles");
			element = document.querySelector('[aria-label="Choose captions"]').click() ;
      text = 'English';
      matches = [];
      for (const div of document.querySelectorAll('span')) {
        if (div.textContent.includes(text)) {
          matches.push(div);
        }
      }
      console.log(matches);
      matches[0].click();
      setTimeout(function() {
        element = document.querySelector('[aria-label="Choose captions"]').click(); 
      }, 1000);
		}
	}

	const poll = setInterval(find_video, 500)
})();
