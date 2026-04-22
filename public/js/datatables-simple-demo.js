
window.addEventListener('DOMContentLoaded', () => {
    const table = document.getElementById('datatablesSimple');
    if (!table) return;

    if (typeof window.DataTable !== 'function') {
        console.error(
            '[datatables-simple-demo] window.DataTable is not defined. ' +
            'Make sure app.js is loaded before this script and that it runs ' +
            '`import { DataTable } from "simple-datatables"; window.DataTable = DataTable;`.'
        );
        return;
    }

    new window.DataTable(table, {
        searchable: true,
        fixedHeight: true,
        perPage: 10,
    });
});
