/* ***************************
  JWD JavaScript Assessment

  This code is unfinished. You will need to study it to figure out what it does. Then you will need to use this and
  your own code, to finish the app. 
  
  The tasks you need to do are below.

    TASKS TODO:
      1. Calculate the score as the total of the number of correct answers


      2. Add an Event listener for the submit button, which will display the score and highlight 
         the correct answers when the button is clicked. Use the code from lines 67 to 86 to help you.

      3. Add 2 more questions to the app (each question must have 4 options).

      4. Reload the page when the reset button is clicked (hint: search window.location)

      5. Add a countdown timer - when the time is up, end the quiz, display the score and highlight the correct answers
*************************** */

const quizArray = [
	{
		q: 'Which is the third planet from the sun?',
		o: ['Saturn', 'Earth', 'Pluto', 'Mars'],
		a: 1, // array index 1 - so Earth is the correct answer here
	},
	{
		q: 'Which is the largest ocean on Earth?',
		o: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
		a: 3,
	},
	{
		q: 'What is the capital of Australia',
		o: ['Sydney', 'Canberra', 'Melbourne', 'Perth'],
		a: 1,
	},
	// TASK 3
	{
		q: 'Where is the World Cup 2022 held?',
		o: ['Argentina', 'USA', 'Australia', 'Qatar'],
		a: 3,
	},
	{
		q: 'What is the current name of Generation Junior Web Developers cohort?',
		o: ['JWD2022', 'Generation Rock!', 'JWD09', 'Dreamchasers'],
		a: 2,
	},
];

window.addEventListener('DOMContentLoaded', () => {
	// Main
	const startBtn = document.querySelector('a.btn.btn-primary');
	startBtn.style.color = 'white';
	const start = document.querySelector('#start');

	start.addEventListener('click', function (e) {
		document.querySelector('#quizBlock').style.display = 'block';
		start.style.display = 'none';

		const submitButton = document.getElementById('btnSubmit');
		submitButton.addEventListener('click', calculateScore); // TASK 2

		// TASK2 continue
		const modalSaveButton = document.getElementById('modalSave');
		modalSaveButton.addEventListener('click', saveScore);

		// TASK 4
		const resetButton = document.getElementById('btnReset');
		resetButton.addEventListener('click', resetQuiz);
	});

	// quizArray QUESTIONS & ANSWERS
	// q = QUESTION, o = OPTIONS, a = CORRECT ANSWER
	// Basic ideas from https://code-boxx.com/simple-javascript-quiz/

	// function to Display the quiz questions and answers from the object
	const displayQuiz = () => {
		const quizWrap = document.querySelector('#quizWrap');
		let quizDisplay = '';
		quizArray.map((quizItem, index) => {
			quizDisplay += `<ul class="list-group">
                   Q - ${quizItem.q}
                    <li class="list-group-item mt-2" id="li_${index}_0"><input type="radio" name="radio${index}" id="radio_${index}_0"> ${quizItem.o[0]}</li>
                    <li class="list-group-item" id="li_${index}_1"><input type="radio" name="radio${index}" id="radio_${index}_1"> ${quizItem.o[1]}</li>
                    <li class="list-group-item"  id="li_${index}_2"><input type="radio" name="radio${index}" id="radio_${index}_2"> ${quizItem.o[2]}</li>
                    <li class="list-group-item"  id="li_${index}_3"><input type="radio" name="radio${index}" id="radio_${index}_3"> ${quizItem.o[3]}</li>
                    </ul>
                    <div>&nbsp;</div>`;
			quizWrap.innerHTML = quizDisplay;
		});
	};

	let score = 0;

	// Calculate the score
	const calculateScore = () => {
		console.log('click!');
		quizArray.map((quizItem, index) => {
			for (let i = 0; i < 4; i++) {
				let li = `li_${index}_${i}`;
				let r = `radio_${index}_${i}`;
				liElement = document.querySelector('#' + li);
				radioElement = document.querySelector('#' + r);

				if (quizItem.a == i) {
					liElement.style.background = 'blue';
					liElement.style.color = 'white';
					liElement.style.fontWeight = 'bold';
				}

				if (radioElement.checked) {
					let correct = i === quizItem.a;
					if (correct) {
						score++; // TASK 1
						console.log('correct:', score);
					}
				}
			}
		});

		console.log('score', score);
		const modalBody = document.querySelector('.modal-body');
		modalBody.innerText = `Score: ${score} correct answers`;
	};

	const saveScore = () => {
		// TASK 2
		const scoreContent = document.querySelector('#score');
		scoreContent.innerText = `Your score: ${score}`;
	};

	// TASK 4
	const resetQuiz = () => {
		window.location.reload();
	};

	displayQuiz();
});
