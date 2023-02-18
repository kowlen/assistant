chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		let assistant = `
				<p>верстка</p>
		`;

		document.querySelector('body').append(assistant);

		console.log('Скрипт подключен')
		// var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
		// recognition.lang = 'en-US';
		// recognition.interimResults = false;
		// recognition.maxAlternatives = 5;
		// recognition.start();



	}
	}, 10);
});
