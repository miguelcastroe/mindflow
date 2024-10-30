window.onload = () => {
    CarbonComponents.settings.disableAutoInit = true;
    CarbonComponents.init();
};

let stepIndex = 1;
const steps = document.querySelectorAll('.step');

function nextStep() {
    document.getElementById(`step-${stepIndex}`).classList.add('hidden');
    stepIndex++;
    document.getElementById(`step-${stepIndex}`).classList.remove('hidden');
}

function showFinalView() {
    document.getElementById(`step-${stepIndex}`).classList.add('hidden');
    const finalView = document.getElementById('final-view');
    finalView.classList.remove('hidden');

    const summaryContent = `
        <h3>Propósito</h3>
        <p>${document.getElementById('purpose').value}</p>
        <h3>Descripción del Problema</h3>
        <p>${document.getElementById('problem').value}</p>
        <h3>Preguntas Clave</h3>
        <p>${document.getElementById('questions').value}</p>
        <h3>Oportunidades Identificadas</h3>
        <p>${document.getElementById('opportunities').value}</p>
        <h3>Plan de Acción</h3>
        <p>${document.getElementById('actionPlan').value}</p>
        <h3>Reflexiones y Ajustes</h3>
        <p>${document.getElementById('evaluation').value}</p>
    `;

    document.getElementById('summary').innerHTML = summaryContent;
}

function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.text(document.getElementById('summary').innerText, 10, 10);
    doc.save('documento_planificacion.pdf');
}
