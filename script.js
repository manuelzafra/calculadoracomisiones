// Definición de pasarelas y sus fórmulas de comisión
const pasarelas = [
    { 
        nombre: "Stripe", 
        calcularComision: (ventasAnuales, numeroTransacciones) => 
            ventasAnuales * 0.014 + numeroTransacciones * 0.25
    },
    { 
        nombre: "GoCardless", 
        calcularComision: (ventasAnuales, numeroTransacciones) => 
            ventasAnuales * 0.01 + numeroTransacciones * 0.20
    },
    // Añade más pasarelas aquí con sus fórmulas específicas
];

function calcularComisiones() {
    const ventasAnuales = parseFloat(document.getElementById('ventasAnuales').value);
    const numeroTransacciones = parseInt(document.getElementById('numeroTransacciones').value);

    if (isNaN(ventasAnuales) || isNaN(numeroTransacciones)) {
        alert("Por favor, introduce valores numéricos válidos.");
        return;
    }

    let resultadosHTML = "<h2>Resultados:</h2>";

    pasarelas.forEach(pasarela => {
        const comision = pasarela.calcularComision(ventasAnuales, numeroTransacciones);
        resultadosHTML += `<p>${pasarela.nombre}: ${comision.toFixed(2)} €</p>`;
    });

    document.getElementById('resultados').innerHTML = resultadosHTML;
}