
// Inicializa los elementos de Carbon Design System
window.onload = () => {
    CarbonComponents.settings.disableAutoInit = true;
    CarbonComponents.init();
};

let stepIndex = 0;
const steps = document.querySelectorAll('.step');

// Función para avanzar al siguiente paso
function nextStep() {
    if (stepIndex < steps.length - 1) {
        steps[stepIndex].classList.add('hidden');
        stepIndex++;
        steps[stepIndex].classList.remove('hidden');
    } else {
        showFinalView();
    }
}

// Muestra la vista final para resumen y generación del PDF
function showFinalView() {
    const finalView = document.getElementById('final-view');
    finalView.classList.remove('hidden');

    // Obtiene los datos de los pasos completados
    const purpose = document.getElementById('purpose').value;

    // Muestra el resumen usando los componentes de Carbon (Accordion)
    document.getElementById('summary').innerHTML = `
        <h3 class="bx--type-expressive-heading-03">Propósito</h3>
        <p>${purpose}</p>
    `;
}

// Función para generar el PDF
function generatePDF() {
    const summaryContent = document.getElementById('summary').innerText;
    const doc = new jsPDF();
    doc.text(summaryContent, 10, 10);
    doc.save('documento_planificacion.pdf');
}
