function gerarGraficoPizzaContactadoVsNaoContactado() {
    let canva_pizza = document.getElementById('grafico-pizza');
    let ctx_pizza = canva_pizza.getContext('2d');

    // DADOS DO GRÁFICO
    let data = {
        labels: ['Contactado', 'Não Contactado'],
        datasets: [{
            data: [12, 19],

        }]
    };

    // RENDERIZAR GRÁFICO
    let grafico_pizza_contactados = new Chart(ctx_pizza, {
        type: 'pie',
        data: data
    });
}

function gerarGraficoLinhaFrequencia() {
    let canvas_linha_frequencia = document.getElementById('grafico-linha-frequencia');
    let ctx = canvas_linha_frequencia.getContext('2d');

    // DADOS DO GRÁFICO
    let data = {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'], // PARTE INFERIOR
        datasets: [{
            label: 'Frequência',
            data: [10, 15, 7, 12, 9, 11], // DADOS QUE SERÃO APRESENTADOS
            fill: false
        }]
    };

    // RENDERIZAR GRÁFICO
    let grafico_linha_frequencia = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}


gerarGraficoPizzaContactadoVsNaoContactado();
gerarGraficoLinhaFrequencia();