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

    // RENDERIZAR GRAFICO
    let grafico_pizza_contactados = new Chart(ctx_pizza, {
        type: 'pie',
        data: data
    });
}

gerarGraficoPizzaContactadoVsNaoContactado();