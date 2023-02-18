chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		let assistant = `
		<div class="chat" id="chat"></div>
		<div class="question-wrap" onclick="openChat()">
          <div class="question"> </div>
         </div>
		`;

		document.querySelector('body').append(assistant);

		console.log('Скрипт подключен')

		function openChat () {
			const chat = document.getElementById("chat");
			
			if (chat.style.display === "none") {
				chat.style.display = "block";
			} else {
				chat.style.display = "none";
			}
		}
		// var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
		// recognition.lang = 'en-US';
		// recognition.interimResults = false;
		// recognition.maxAlternatives = 5;
		// recognition.start();



	}
	}, 10);
});
