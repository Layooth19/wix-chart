document.addEventListener("DOMContentLoaded", function () {
  // Generate random data
  const xValues = Array.from({ length: 10 }, (_, i) => i * 5); // x from 0 to 45
  const yValues = xValues.map(() => Math.floor(Math.random() * 190 + 10)); // y from 10 to 200

  const trace = {
    x: xValues,
    y: yValues,
    mode: 'lines+markers',
    type: 'scatter',
    name: 'Random Data',
    hovertemplate: 'x: %{x}<br>y: %{y}<extra></extra>',
    marker: { color: 'blue' },
    line: { color: 'lightblue' }
  };

  const layout = {
    title: 'Interactive Line Chart',
    xaxis: { title: 'X Axis', range: [0, 50] },
    yaxis: { title: 'Y Axis', range: [10, 200] },
    hovermode: 'closest'
  };

  Plotly.newPlot('chart', [trace], layout);
});
