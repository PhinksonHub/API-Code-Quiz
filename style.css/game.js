game.js
const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let availableQuestions = []

question: 'What day comes before Tuesday'
choice1: 'Sunday'
choice2: 'Monday'
choice3: 'Wednewsday'
choice4: 'Thursday'
answer: 2

question: 'What are the colors of the Polish flag'
choices1: 'Red and blue'
choice2: 'Blue and white'
choice3: 'red and white'
choice4: 'white and red'
answer: 4

question: 'What does the L mean in HTML'
choices1: 'Love'
choice2: 'List'
choice3: 'list'
choice4: 'link'
answer: 4

question: 'what is 10 x 10'
choices1: '10'
choice2: '100'
choice3: '1000'
choice4: '10000'
answer: 2

question: 'the plura of fish is'
choices1: 'fishes'
choice2: 'fishies'
choice3: 'fish'
choice4: 'fisheses'
answer: 3

const SCORE_POINTS = 100
const MAX_QUESTIONS = 5

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestions()
}

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questioncounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('/end.html')
    }
}

questionCounter++
progressText.innertext = '${(questionCounter/MAX_QUESTION) * 100}%'

const questionIndex = Math.floor(Math.random() * availableQuestions.length)
currentQuestion = availableQuestions[questionsIndex]
question.innerText = currentQuestion.question

choices.forEach(choice.dataset['number'])
choice.innerText = currentQuestion['choice' + number]


availableQuestions.splice(questionIndex, 1)
acceptingAnswers = true
}
choices.forEach(choice => {
    choice.addEventListener('click, e => {
        if (!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']
        let classToApply = selectorAnswer == currentQuestion.answer ? 'correct';
        'incorrect'
        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }
        selectedChoice.parentElement.classList.add(classToApply) setTimeout(() => { selectedChoice.parentElement.classList.remove(classToApply) }))
    getNewQuestion()

}, 1000

})
incrementScore = num => {
    score += num => {
        scoreText.innerText = score
    }
}
startGame()