chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// var script = document.createElement('script');
		// script.type = 'text/javascript';
		// script.src = '.';
		//
		// document.head.appendChild(script);

		let assistant = `
				<p>фывфывфывф</p>
		`;

		$('body').append(assistant);

		let textWindow = `
				<p id="window"></p>
		`;


		$('body').append(textWindow);

		$('#window').draggable({
			// handle: tr_top,
			containment: "window"
		});

		console.log('Скрипт подключен')
		// var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
		// recognition.lang = 'en-US';
		// recognition.interimResults = false;
		// recognition.maxAlternatives = 5;
		// recognition.start();




	}
	}, 10);
});
