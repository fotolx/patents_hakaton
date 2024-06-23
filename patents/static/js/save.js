document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById('sale-file').addEventListener('click', function () {
        generateExcel();
    });
    
    function generateExcel() {
        var tableItems = document.querySelectorAll('.table-doc__item');
        var data = [];
    
        tableItems.forEach(function (item) {
            var rowData = [
                item.querySelector('.table-doc__column-2').textContent,
                item.querySelector('.table-doc__column-4').textContent,
                item.querySelector('.table-doc__column-5').textContent,
                item.querySelector('.table-doc__column-6').textContent,
                item.querySelector('.table-doc__column-7').textContent,
                item.querySelector('.table-doc__column-8').textContent.trim(),
                item.querySelector('.table-doc__column-9').textContent.trim(),
                item.querySelector('.table-doc__column-10').textContent
            ];
            data.push(rowData);
        });
    
        var header = ['№', '№ Документа', 'Название', 'Вид документа', 'Тема', 'Статус', 'Страна', 'ИНН'];
        var wsData = [header, ...data];
    
        var ws = XLSX.utils.aoa_to_sheet(wsData);
    
        ws['!rows'] = [{ hpx: 20, outlineLevel: 0 }];
        header.forEach(function (col, i) {
            var cellRef = XLSX.utils.encode_cell({ r: 0, c: i });
            if (!ws[cellRef]) ws[cellRef] = {};
            ws[cellRef].s = { alignment: { horizontal: 'center', vertical: 'center' } };
        });
    
        ws['!cols'] = [
            { wch: 5 },  // №
            { wch: 25 }, // № Документа
            { wch: 40 }, // Название
            { wch: 18 }, // Вид документа
            { wch: 18 }, // Тема
            { wch: 18 }, // Статус
            { wch: 18 }, // Страна
            { wch: 18 }  // ИНН
        ];
    
        var wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Документы');
        XLSX.writeFile(wb, 'documents.xlsx');
    }
})
