const workoutBtn = document.getElementById('workout-btn')
const workoutTimerContainer = document.querySelector('.timer-workout')
const startTimerContainer = document.querySelector('.start-workout')
const timerDisplay = document.getElementById('timer')
const countTracker = document.getElementById('count-tracker')
const message = document.querySelector('.message')
const startAudio = document.getElementById('start-audio')
const endAudio = document.getElementById('end-audio')

startAudio.load()
endAudio.load()

function handleStartWorkoutBtn() {
	startTimerContainer.style.visibility = 'hidden'
	workoutTimerContainer.style.visibility = 'visible'
	timerDisplay.textContent = '00:15'
	startTimer()
}

// Start the Timer
function startTimer() {
	let count = 1

	const runTimer = () => {
		let seconds = 15
		displayTime(seconds)
		startAudio.play()
		const countdown = setInterval(() => {
			seconds--
			if (seconds > 0) {
				displayTime(seconds)
			} else {
				clearInterval(countdown)
				timerDisplay.textContent = '00:00'
				countTracker.textContent = count
				if (count < 20) {
					setTimeout(runTimer, 3000)
				} else {
					message.textContent = 'Workout complete!'
					setTimeout(() => {
						backToHome()
					}, 2000)
				}
				count++
				endAudio.play()
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
