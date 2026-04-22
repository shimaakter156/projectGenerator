// public/demo/datatables-demo.js
// Works with the bundled `simple-datatables` exposed as window.DataTable in resources/js/app.js.

window.addEventListener('DOMContentLoaded', () => {
    const table = document.getElementById('datatablesSimple');
    if (!table) return;

    if (typeof window.DataTable !== 'function') {
        console.error(
            '[datatables-demo] window.DataTable is not defined. Make sure app.js loads before ' +
            'this file and that app.js runs `window.DataTable = DataTable` after importing.'
        );
        return;
    }

    new window.DataTable(table, {
        searchable: true,
        fixedHeight: true,
        perPage: 10,
    });
});
