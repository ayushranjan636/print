const fileInput = document.getElementById('file-input');
const fileName = document.getElementById('file-name');
const resetBtn = document.getElementById('reset-btn');
const errorMsg = document.getElementById('error-msg');

fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (file) {
        fileName.textContent = file.name;
        errorMsg.textContent = '';
        printFile(file);
    }
});

resetBtn.addEventListener('click', () => {
    fileInput.value = '';
    fileName.textContent = '';
    errorMsg.textContent = '';
});

function printFile(file) {
    if (!['image/jpeg', 'image/png', 'application/pdf', 'application/msword'].includes(file.type)) {
        errorMsg.textContent = 'Unsupported file type. Please upload a.jpg,.png,.pdf, or.docx file.';
        return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
        const fileContent = fileReader.result;
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
            <html>
                <head>
                    <title>Print File</title>
                </head>
                <body>
                    ${file.type === 'application/pdf'? `<embed src="${fileContent}" type="${file.type}" width="100%" height="100%">` : `<img src="${fileContent}" alt="${file.name}">`}
                </body>
            </html>
        `);
        printWindow.document.close();
        printWindow.print();
    };
    fileReader.readAsDataURL(file);
}
