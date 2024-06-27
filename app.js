const workoutBtn = document.getElementById('workout-btn')
const workoutTimerContainer = document.querySelector('.timer-workout')
const startTimerContainer = document.querySelector('.start-workout')
const timerDisplay = document.getElementById('timer')
const countTracker = document.getElementById('count-tracker')
const message = document.querySelector('.message')
const startAudio = document.getElementById('start-audio')
const endAudio = document.getElementById('end-audio')
const completeAudio = document.getElementById('complete-audio')

startAudio.load()
endAudio.load()
completeAudio.load()

function handleStartWorkoutBtn() {
	startTimerContainer.style.visibility = 'hidden'
	workoutTimerContainer.style.visibility = 'visible'
	timerDisplay.textContent = '00:15'
	startTimer()
}

// Start the Timer
function startTimer() {
	let count = 1
	message.textContent = 'Count: 0'

	const runTimer = () => {
		let seconds = 30
		displayTime(seconds)
		startAudio.play()
		const countdown = setInterval(() => {
			seconds--
			if (seconds > 0) {
				displayTime(seconds)
			} else {
				clearInterval(countdown)
				timerDisplay.textContent = '00:00'
				message.textContent = `Count: ${count}`
				if (count < 10) {
					endAudio.play()
					setTimeout(runTimer, 3000)
				} else if (count === 10) {
					message.textContent = 'Workout complete!'
					completeAudio.play()
					setTimeout(() => {
						backToHome()
					}, 2000)
				}
				count++
			}
		}, 1000)
	}

	runTimer()
}

function backToHome() {
	startTimerContainer.style.visibility = 'visible'
	workoutTimerContainer.style.visibility = 'hidden'
}

// Render current time on the screen
function displayTime(seconds) {
	timerDisplay.textContent = displayTimeInFormat(seconds)
}

// Display time on the screen in appropriate format
function displayTimeInFormat(seconds) {
	const remainingMinutes = Math.floor(seconds / 60)
	const remainingSeconds = seconds % 60
	const display = `${remainingMinutes < 10 ? '0' : ''}${remainingMinutes}:${
		remainingSeconds < 10 ? '0' : ''
	}${remainingSeconds}`
	return display
}
