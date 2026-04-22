// public/demo/chart-pie-demo.js
// Chart.js v4 compatible. Expects window.Chart to exist (set in resources/js/app.js).
//
// This targets a <canvas id="myPieChart"></canvas> somewhere in your Blade view.
// If your canvas has a different id, change CANVAS_ID below.

const CANVAS_ID = 'myPieChart';

window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById(CANVAS_ID);
    if (!canvas) return; // page doesn't have a pie chart — nothing to do

    if (typeof window.Chart !== 'function') {
        console.error('[chart-pie-demo] window.Chart is not defined. Load app.js before this file.');
        return;
    }

    new window.Chart(canvas, {
        type: 'pie',
        data: {
            labels: ['Blue', 'Red', 'Yellow', 'Green', 'Purple'],
            datasets: [{
                label: 'Share',
                data: [12.21, 15.58, 11.25, 8.32, 22.46],
                backgroundColor: [
                    'rgba(2, 117, 216, 0.85)',
                    'rgba(220, 53, 69, 0.85)',
                    'rgba(240, 173, 78, 0.85)',
                    'rgba(40, 167, 69, 0.85)',
                    'rgba(111, 66, 193, 0.85)',
                ],
                borderColor: '#ffffff',
                borderWidth: 2,
                hoverOffset: 6,
            }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { boxWidth: 14, padding: 12 },
                },
                tooltip: {
                    callbacks: {
                        label: (ctx) => {
                            const value = ctx.parsed;
                            const total = ctx.dataset.data.reduce((a, b) => a + b, 0);
                            const pct = total ? ((value / total) * 100).toFixed(1) : 0;
                            return `${ctx.label}: ${value} (${pct}%)`;
                        },
                    },
                },
            },
        },
    });
});
