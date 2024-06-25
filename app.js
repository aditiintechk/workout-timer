const workoutBtn = document.getElementById('workout-btn')
const homeContainer = document.querySelector('.home-container')
const workoutContainer = document.querySelector('.workout-container')
const walkContainer = document.querySelector('.walk-container')

function handleWorkoutContainer() {
	homeContainer.style.display = 'none'
	workoutContainer.style.display = 'block'
}
