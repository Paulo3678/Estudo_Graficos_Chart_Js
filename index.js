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

function gerarGraficoLinhaTendencia() {
    let canvas_linha_tendencia = document.getElementById('grafico-linha-tendencia');
    let ctx = canvas_linha_tendencia.getContext('2d');

    // Define os dados para o gráfico de linha com tendência
    let dados = [
        // x = mês; y= nº de contatos
        { x: 'Jan', y: 10 },
        { x: 'Fev', y: 15 },
        { x: 'Mar', y: 20 },
        { x: 'Abr', y: 12 },
        { x: 'Mai', y: 18 },
        { x: 'Jun', y: 22 },
        { x: 'Jul', y: 25 },
        { x: 'Ago', y: 30 },
        { x: 'Set', y: 28 },
        { x: 'Out', y: 35 },
        { x: 'Nov', y: 40 },
        { x: 'Dez', y: 1 }
    ];

    // CALCULA A LINHA DE TENDÊNCIA
    let result = regression.linear(dados.map(d => [dados.indexOf(d) + 1, d.y]));

    // CONVERTE OS DADOS DA LINHA DE TENDÊNCIA NO FORMATO ADEQUADO PARA O GRÁFICO
    let tendencia = {
        label: 'Tendência',
        data: [
            { x: 1, y: result.predict(1)[1] },
            { x: dados.length, y: result.predict(dados.length)[1] }
        ],
        fill: false
    };

    // DEFINE OS DADOS PARA O GRÁFICO DE LINHA COM OS DADOS E ALINHA DE TENDÊNCIA
    let data = {
        labels: dados.map(d => d.x),
        datasets: [
            {
                label: 'Contatos Realizados',
                data: dados.map(d => d.y),
                fill: false
            },
            tendencia
        ]
    };

    let options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    // RENDERIZAR GRÁFICO
    let grafico_linha_tendencia = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
    });
}

function gerarGraficoBarra() {
    let canvas_grafico_barra = document.getElementById('grafico-barra');
    let ctx = canvas_grafico_barra.getContext('2d');

    // DADOS DO GRÁFICO
    let data = {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [
            {
                label: 'Clientes contactados',
                data: [50, 80, 120, 70, 90, 100],
            }
        ]
    };

    let options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    // RENDERIZAR GRÁFICO
    let grafico_barra = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });
}

function gerarGraficoBarraHorizontal() {
    const canvas_grafico_barra_horizontal = document.getElementById('grafico-barra-horizontal');
    const ctx = canvas_grafico_barra_horizontal.getContext('2d');

    // DADOS DO GRAFICO
    const data = {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [
            {
                label: 'Contatos recebidos',
                data: [50, 80, 120, 70, 90, 100],
            }
        ]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            indexAxis: 'y',
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true
                }
            }
        }
    };

    const grafico_barra_horizontal = new Chart(ctx, config);
}

gerarGraficoPizzaContactadoVsNaoContactado();
gerarGraficoLinhaFrequencia();
gerarGraficoLinhaTendencia();
gerarGraficoBarra();
gerarGraficoBarraHorizontal();