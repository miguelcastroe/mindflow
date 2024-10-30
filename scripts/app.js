let stepIndex = 1;
const steps = document.querySelectorAll('.step');

// Function to update progress bar
function updateProgress() {
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = `${(stepIndex / 6) * 100}%`;
}

function nextStep() {
    document.getElementById(`step-${stepIndex}`).classList.add('hidden');
    stepIndex++;
    document.getElementById(`step-${stepIndex}`).classList.remove('hidden');
    updateProgress();
}

function showFinalView() {
    document.getElementById(`step-${stepIndex}`).classList.add('hidden');
    document.getElementById('final-view').classList.remove('hidden');
    updateProgress();
}
