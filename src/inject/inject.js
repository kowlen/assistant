chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		let assistant = `
		<div class="chat" id="chat" style="display:none">
		    <div class="chat_header">
			<div></div>
			   <div class="chat-header__title">Персональный ассистент</div>
			   <button class="close__btn sent__btn"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
			   	<path d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z" fill="black"/>
			   </svg></button>
			</div>
		    <div class="board container">
			   <div class="sent">
			     <div class="sent__messege">Где найти шаблон для заполнения расходов?</div>
			     <div class="board-time">10:29</div>
			   </div>
			</div>
		    <div class="sent__container container">
			    <button class="sent__btn add-btn">
					<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M13.9993 20.6666C14.3771 20.6666 14.694 20.5386 14.95 20.2826C15.2051 20.0275 15.3327 19.7111 15.3327 19.3333V15.3333H19.366C19.7438 15.3333 20.0549 15.2053 20.2993 14.9493C20.5438 14.6942 20.666 14.3777 20.666 14C20.666 13.6222 20.538 13.3053 20.282 13.0493C20.0269 12.7942 19.7105 12.6666 19.3327 12.6666H15.3327V8.63329C15.3327 8.25551 15.2051 7.9444 14.95 7.69996C14.694 7.45551 14.3771 7.33329 13.9993 7.33329C13.6216 7.33329 13.3051 7.46085 13.05 7.71596C12.794 7.97196 12.666 8.28885 12.666 8.66663V12.6666H8.63268C8.2549 12.6666 7.94379 12.7942 7.69935 13.0493C7.4549 13.3053 7.33268 13.6222 7.33268 14C7.33268 14.3777 7.46024 14.6942 7.71535 14.9493C7.97135 15.2053 8.28824 15.3333 8.66602 15.3333H12.666V19.3666C12.666 19.7444 12.794 20.0555 13.05 20.3C13.3051 20.5444 13.6216 20.6666 13.9993 20.6666ZM13.9993 27.3333C12.1549 27.3333 10.4216 26.9831 8.79935 26.2826C7.17713 25.5831 5.76602 24.6333 4.56602 23.4333C3.36602 22.2333 2.41624 20.8222 1.71668 19.2C1.01624 17.5777 0.666016 15.8444 0.666016 14C0.666016 12.1555 1.01624 10.4222 1.71668 8.79996C2.41624 7.17774 3.36602 5.76663 4.56602 4.56663C5.76602 3.36663 7.17713 2.4164 8.79935 1.71596C10.4216 1.0164 12.1549 0.666626 13.9993 0.666626C15.8438 0.666626 17.5771 1.0164 19.1993 1.71596C20.8216 2.4164 22.2327 3.36663 23.4327 4.56663C24.6327 5.76663 25.5825 7.17774 26.282 8.79996C26.9825 10.4222 27.3327 12.1555 27.3327 14C27.3327 15.8444 26.9825 17.5777 26.282 19.2C25.5825 20.8222 24.6327 22.2333 23.4327 23.4333C22.2327 24.6333 20.8216 25.5831 19.1993 26.2826C17.5771 26.9831 15.8438 27.3333 13.9993 27.3333ZM13.9993 24.6666C16.9549 24.6666 19.4718 23.628 21.55 21.5506C23.6273 19.4724 24.666 16.9555 24.666 14C24.666 11.0444 23.6273 8.52751 21.55 6.44929C19.4718 4.37196 16.9549 3.33329 13.9993 3.33329C11.0438 3.33329 8.52735 4.37196 6.45002 6.44929C4.37179 8.52751 3.33268 11.0444 3.33268 14C3.33268 16.9555 4.37179 19.4724 6.45002 21.5506C8.52735 23.628 11.0438 24.6666 13.9993 24.6666Z" fill="#8D8D8D"/>
					</svg>
		        </button>
				<div class="sent__input-container">
					<input class="sent__input" type="text" placeholder="Где заказать суши?"> 
					<button class="sent__btn" onclick="">
						<svg width="20" height="28" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.0003 19.75C11.5253 19.75 12.9878 19.1442 14.0662 18.0659C15.1445 16.9875 15.7503 15.525 15.7503 14V6C15.7503 4.47501 15.1445 3.01247 14.0662 1.93414C12.9878 0.855802 11.5253 0.25 10.0003 0.25C8.4753 0.25 7.01277 0.855802 5.93443 1.93414C4.8561 3.01247 4.2503 4.47501 4.2503 6V14C4.2503 15.525 4.8561 16.9875 5.93443 18.0659C7.01277 19.1442 8.4753 19.75 10.0003 19.75ZM5.7503 6C5.7503 4.87283 6.19806 3.79183 6.99509 2.9948C7.79212 2.19777 8.87313 1.75 10.0003 1.75C11.1275 1.75 12.2085 2.19777 13.0055 2.9948C13.8025 3.79183 14.2503 4.87283 14.2503 6V14C14.2503 15.1272 13.8025 16.2082 13.0055 17.0052C12.2085 17.8022 11.1275 18.25 10.0003 18.25C8.87313 18.25 7.79212 17.8022 6.99509 17.0052C6.19806 16.2082 5.7503 15.1272 5.7503 14V6ZM19.6878 15.0875C19.438 17.3431 18.4082 19.4406 16.7764 21.0177C15.1445 22.5948 13.0131 23.5523 10.7503 23.725V27C10.7503 27.1989 10.6713 27.3897 10.5306 27.5303C10.39 27.671 10.1992 27.75 10.0003 27.75C9.80138 27.75 9.61062 27.671 9.46997 27.5303C9.32931 27.3897 9.2503 27.1989 9.2503 27V23.725C6.98749 23.5523 4.85605 22.5948 3.2242 21.0177C1.59235 19.4406 0.562581 17.3431 0.312796 15.0875C0.295371 14.9871 0.298604 14.8841 0.3223 14.785C0.345995 14.6858 0.389656 14.5925 0.450613 14.5108C0.511571 14.4291 0.588546 14.3607 0.676838 14.3097C0.765129 14.2588 0.862882 14.2263 0.964127 14.2144C1.06537 14.2025 1.16798 14.2114 1.26569 14.2405C1.3634 14.2695 1.45415 14.3182 1.53241 14.3836C1.61066 14.4489 1.67478 14.5295 1.72084 14.6204C1.7669 14.7114 1.79394 14.8108 1.8003 14.9125C2.02356 16.9312 2.98363 18.7966 4.49664 20.1515C6.00966 21.5064 7.96929 22.2556 10.0003 22.2556C12.0313 22.2556 13.9909 21.5064 15.504 20.1515C17.017 18.7966 17.977 16.9312 18.2003 14.9125C18.2067 14.8108 18.2337 14.7114 18.2798 14.6204C18.3258 14.5295 18.3899 14.4489 18.4682 14.3836C18.5464 14.3182 18.6372 14.2695 18.7349 14.2405C18.8326 14.2114 18.9352 14.2025 19.0365 14.2144C19.1377 14.2263 19.2355 14.2588 19.3238 14.3097C19.412 14.3607 19.489 14.4291 19.55 14.5108C19.6109 14.5925 19.6546 14.6858 19.6783 14.785C19.702 14.8841 19.7052 14.9871 19.6878 15.0875Z" fill="#8D8D8D"/>
						</svg>
					</button>
				</div>
	        </div>
		</div>
		<div class="question-wrap" >
          <div class="question" onclick=""> 
          	<div class="white">
          		<svg width="22" height="22" viewBox="0 0 22 36" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M6.43709 23.7934V22.0291C6.43709 20.9483 6.58808 19.9947 6.89007 19.1682C7.19205 18.3258 7.67682 17.5311 8.34437 16.7841C9.01192 16.0212 9.89404 15.2424 10.9907 14.4477C11.9762 13.7483 12.7629 13.1205 13.351 12.5642C13.955 12.0079 14.3921 11.4596 14.6623 10.9192C14.9483 10.3629 15.0914 9.7351 15.0914 9.03576C15.0914 8.00265 14.7099 7.21589 13.947 6.6755C13.1841 6.1351 12.1192 5.8649 10.7523 5.8649C9.38543 5.8649 8.02649 6.07947 6.6755 6.50861C5.3404 6.93775 3.98146 7.50199 2.59868 8.20132L0 2.98013C1.5894 2.09007 3.31391 1.37483 5.17351 0.834437C7.03311 0.278146 9.06755 0 11.2768 0C14.6781 0 17.3086 0.818543 19.1682 2.45563C21.0437 4.07682 21.9815 6.14305 21.9815 8.6543C21.9815 9.9894 21.7669 11.1497 21.3377 12.1351C20.9245 13.1046 20.2887 14.0106 19.4305 14.853C18.5881 15.6795 17.5311 16.5536 16.2596 17.4755C15.306 18.1748 14.5748 18.7629 14.0662 19.2397C13.5576 19.7166 13.2079 20.1934 13.0172 20.6702C12.8424 21.1311 12.755 21.6954 12.755 22.3629V23.7934H6.43709ZM5.67417 31.947C5.67417 30.453 6.07947 29.404 6.89007 28.8C7.71656 28.196 8.70993 27.894 9.8702 27.894C10.9987 27.894 11.9682 28.196 12.7788 28.8C13.6053 29.404 14.0185 30.453 14.0185 31.947C14.0185 33.3775 13.6053 34.4106 12.7788 35.0464C11.9682 35.6821 10.9987 36 9.8702 36C8.70993 36 7.71656 35.6821 6.89007 35.0464C6.07947 34.4106 5.67417 33.3775 5.67417 31.947Z" fill="white"/>
				</svg>
			</div>
          	<div class="black">
          		<svg width="22" height="22" viewBox="0 0 22 36" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M6.43709 23.7934V22.0291C6.43709 20.9483 6.58808 19.9947 6.89007 19.1682C7.19205 18.3258 7.67682 17.5311 8.34437 16.7841C9.01192 16.0212 9.89404 15.2424 10.9907 14.4477C11.9762 13.7483 12.7629 13.1205 13.351 12.5642C13.955 12.0079 14.3921 11.4596 14.6623 10.9192C14.9483 10.3629 15.0914 9.7351 15.0914 9.03576C15.0914 8.00265 14.7099 7.21589 13.947 6.6755C13.1841 6.1351 12.1192 5.8649 10.7523 5.8649C9.38543 5.8649 8.02649 6.07947 6.6755 6.50861C5.3404 6.93775 3.98146 7.50199 2.59868 8.20132L0 2.98013C1.5894 2.09007 3.31391 1.37483 5.17351 0.834437C7.03311 0.278146 9.06755 0 11.2768 0C14.6781 0 17.3086 0.818543 19.1682 2.45563C21.0437 4.07682 21.9815 6.14305 21.9815 8.6543C21.9815 9.9894 21.7669 11.1497 21.3377 12.1351C20.9245 13.1046 20.2887 14.0106 19.4305 14.853C18.5881 15.6795 17.5311 16.5536 16.2596 17.4755C15.306 18.1748 14.5748 18.7629 14.0662 19.2397C13.5576 19.7166 13.2079 20.1934 13.0172 20.6702C12.8424 21.1311 12.755 21.6954 12.755 22.3629V23.7934H6.43709ZM5.67417 31.947C5.67417 30.453 6.07947 29.404 6.89007 28.8C7.71656 28.196 8.70993 27.894 9.8702 27.894C10.9987 27.894 11.9682 28.196 12.7788 28.8C13.6053 29.404 14.0185 30.453 14.0185 31.947C14.0185 33.3775 13.6053 34.4106 12.7788 35.0464C11.9682 35.6821 10.9987 36 9.8702 36C8.70993 36 7.71656 35.6821 6.89007 35.0464C6.07947 34.4106 5.67417 33.3775 5.67417 31.947Z" fill="black"/>
				</svg>
			</div>
          </div>
         </div>
		     
		 <div id="window">
			<div style="text-align: center;">
				<img src="https://81.161.220.59:8100/templates/ezgif-2-07d3d62b66.gif" alt="this slowpoke moves"  width="250" />
			</div>
		</div>
		`;

		$('body').append(assistant);

		console.log('Скрипт подключен');

		const chat = $('.chat');

		$('.question-wrap').on('click', function () {

			console.log("it works")

			if(chat.css('display') === 'none'){
				chat.fadeIn()
			} else {
				chat.fadeOut()
			}
		});

		$('.close__btn').on('click', function () {
			
				chat.fadeOut()
			
		});


		// $("DOMContentLoaded", pageLoaded);

		const board = document.querySelector(".board");
		const btnText = document.querySelector(".sent__btn");
		// const wsUri = "wss://echo-ws-service.herokuapp.com";
		const input = document.querySelector(".sent__input");


		var windowOptions = {
			actions: ["Custom", "Minimize", "Maximize", "Close"],
			draggable: true,
			resizable: true,
			width: "500px",
			title: "EGG CHAIR",
			visible: true,
		};




		$("#window").kendoWindow(windowOptions);

		$('.sent__input-container .sent__btn').on('click', function () {

			// getting result
			var result = document.getElementById("result");
			// getting user action
			var event = document.getElementById("event");
			// new speech recognition object
			var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
			var recognition = new SpeechRecognition();

			// This runs when the speech recognition service starts
			// recognition.onstart = function() {
			// 	event.innerHTML = "Listening .....";
			// };

			// recognition.onspeechend = function() {
			// 	event.innerHTML = "stopped listening, hope you are done...";
			// 	recognition.stop();
			// }

			// This runs when the speech recognition service returns result
			recognition.onresult = function(event) {
				var transcript = event.results[0][0].transcript;
				var confidence = event.results[0][0].confidence;
				$('#chat .sent__input').val(transcript);
			};

			// start speech recognition
			recognition.start();
		})

		// function pageLoaded() {
		// 	let socket = new WebSocket(wsUri);
		//
		// 	// socket.onopen = () => {
		// 	//   console.log("Соединение установлено");
		// 	// }
		//
		// 	// socket.onmessage = (event) => {
		// 	// 	writeToChat(event.data, true);
		// 	//   }
		//
		// 	  // socket.onerror = () => {
		// 		// console.log("При передаче данных произошла ошибка");
		// 	  // }
		//
		// 	  btnText.addEventListener("click", sendMessage);
		//
		// 	  // function sendMessage() {
		// 		// if (!input.value) return;
		// 		// socket.send(input.value);
		// 		// writeToChat(input.value, false);
		// 		// input.value === "";
		// 	  // }
		//
		// 	  function writeToChat(message, isRecieved) {
		// 		let messageHTML = `<div class="${isRecieved? "recieved" : "sent"}">${message}</div>`;
		// 		board.innerHTML += messageHTML;
		// 	  }
		//
		//
		//
		// }

		// var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
		// recognition.lang = 'en-US';
		// recognition.interimResults = false;
		// recognition.maxAlternatives = 5;
		// recognition.start();



	}
	}, 10);
});


