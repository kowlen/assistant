chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		let assistant = `
		<div class="chat" id="chat">
		    <div class="board"></div>
		    <div class="sent__container">
			    <button class="sent__btn">
					<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M13.9993 20.6666C14.3771 20.6666 14.694 20.5386 14.95 20.2826C15.2051 20.0275 15.3327 19.7111 15.3327 19.3333V15.3333H19.366C19.7438 15.3333 20.0549 15.2053 20.2993 14.9493C20.5438 14.6942 20.666 14.3777 20.666 14C20.666 13.6222 20.538 13.3053 20.282 13.0493C20.0269 12.7942 19.7105 12.6666 19.3327 12.6666H15.3327V8.63329C15.3327 8.25551 15.2051 7.9444 14.95 7.69996C14.694 7.45551 14.3771 7.33329 13.9993 7.33329C13.6216 7.33329 13.3051 7.46085 13.05 7.71596C12.794 7.97196 12.666 8.28885 12.666 8.66663V12.6666H8.63268C8.2549 12.6666 7.94379 12.7942 7.69935 13.0493C7.4549 13.3053 7.33268 13.6222 7.33268 14C7.33268 14.3777 7.46024 14.6942 7.71535 14.9493C7.97135 15.2053 8.28824 15.3333 8.66602 15.3333H12.666V19.3666C12.666 19.7444 12.794 20.0555 13.05 20.3C13.3051 20.5444 13.6216 20.6666 13.9993 20.6666ZM13.9993 27.3333C12.1549 27.3333 10.4216 26.9831 8.79935 26.2826C7.17713 25.5831 5.76602 24.6333 4.56602 23.4333C3.36602 22.2333 2.41624 20.8222 1.71668 19.2C1.01624 17.5777 0.666016 15.8444 0.666016 14C0.666016 12.1555 1.01624 10.4222 1.71668 8.79996C2.41624 7.17774 3.36602 5.76663 4.56602 4.56663C5.76602 3.36663 7.17713 2.4164 8.79935 1.71596C10.4216 1.0164 12.1549 0.666626 13.9993 0.666626C15.8438 0.666626 17.5771 1.0164 19.1993 1.71596C20.8216 2.4164 22.2327 3.36663 23.4327 4.56663C24.6327 5.76663 25.5825 7.17774 26.282 8.79996C26.9825 10.4222 27.3327 12.1555 27.3327 14C27.3327 15.8444 26.9825 17.5777 26.282 19.2C25.5825 20.8222 24.6327 22.2333 23.4327 23.4333C22.2327 24.6333 20.8216 25.5831 19.1993 26.2826C17.5771 26.9831 15.8438 27.3333 13.9993 27.3333ZM13.9993 24.6666C16.9549 24.6666 19.4718 23.628 21.55 21.5506C23.6273 19.4724 24.666 16.9555 24.666 14C24.666 11.0444 23.6273 8.52751 21.55 6.44929C19.4718 4.37196 16.9549 3.33329 13.9993 3.33329C11.0438 3.33329 8.52735 4.37196 6.45002 6.44929C4.37179 8.52751 3.33268 11.0444 3.33268 14C3.33268 16.9555 4.37179 19.4724 6.45002 21.5506C8.52735 23.628 11.0438 24.6666 13.9993 24.6666Z" fill="#8D8D8D"/>
					</svg>
		        </button>
				<div class="sent__input-container">
					<input class="sent__input" type="text" placeholder="Где заказать суши на сайте?"> 
					<button class="sent__btn">
							<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M24.4494 11.11L2.4494 0.110006C2.27697 0.0237731 2.08329 -0.0107787 1.89167 0.0105114C1.70006 0.0318016 1.51869 0.108026 1.3694 0.230006C1.22682 0.349499 1.1204 0.506393 1.06211 0.68305C1.00381 0.859707 0.995944 1.04912 1.0394 1.23001L3.9994 12L0.999396 22.74C0.958623 22.8911 0.953863 23.0496 0.9855 23.2028C1.01714 23.356 1.08429 23.4997 1.18156 23.6223C1.27882 23.7448 1.40349 23.8428 1.54553 23.9084C1.68757 23.9741 1.84303 24.0054 1.9994 24C2.15594 23.9991 2.31007 23.9614 2.4494 23.89L24.4494 12.89C24.6132 12.8061 24.7507 12.6786 24.8467 12.5216C24.9426 12.3645 24.9934 12.1841 24.9934 12C24.9934 11.816 24.9426 11.6355 24.8467 11.4785C24.7507 11.3214 24.6132 11.1939 24.4494 11.11ZM3.5494 21.11L5.7594 13H14.9994V11H5.7594L3.5494 2.89001L21.7594 12L3.5494 21.11Z" fill="#8D8D8D"/>
							</svg>
					</button>
				</div>
	        </div>
		</div>
		<div class="question-wrap"  onclick="openChat()">
          <div class="question"> </div>
         </div>
		`;

		$('body').append(assistant);

		console.log('Скрипт подключен')

		function openChat () {

			console.log("it works")
			const chat = $('#chat');

			if (chat.style.display === "none") {
				chat.style.display = "block";
			} else {
				chat.style.display = "none";
			}
		}

		$("DOMContentLoaded", pageLoaded);

		const board = document.querySelector(".board");
		const btnText = document.querySelector(".sent__btn");
		const wsUri = "wss://echo-ws-service.herokuapp.com"; 
		const input = document.querySelector(".sent__input");

		function pageLoaded() {
			let socket = new WebSocket(wsUri);
			
			socket.onopen = () => {
			  console.log("Соединение установлено");
			}
		
			socket.onmessage = (event) => {
				writeToChat(event.data, true);
			  }
			  
			  socket.onerror = () => {
				console.log("При передаче данных произошла ошибка");
			  }
			  
			  btnText.addEventListener("click", sendMessage);
			  
			  function sendMessage() {
				if (!input.value) return;
				socket.send(input.value);
				writeToChat(input.value, false);
				input.value === "";
			  }
			  
			  function writeToChat(message, isRecieved) {
				let messageHTML = `<div class="${isRecieved? "recieved" : "sent"}">${message}</div>`;
				board.innerHTML += messageHTML;
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
