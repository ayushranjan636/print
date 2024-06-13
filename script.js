const fileInput = document.getElementById('file-input');
const fileNameElement = document.getElementById('file-name');
const nextButton = document.getElementById('next-btn');
const resetButton = document.getElementById('reset-btn');
const errorElement = document.getElementById('error-msg');

fileInput.addEventListener('change', (e) => {
    const file = fileInput.files[0];
    fileNameElement.textContent = file.name;
});

nextButton.addEventListener('click', (e) => {
    e.preventDefault();
    const file = fileInput.files[0];
    if (!file) {
        errorElement.textContent = 'Please select a file';
        return;
    }
    const fileType = file.type;
    if (!['image/jpeg', 'image/png', 'application/pdf', 'application/msword'].includes(fileType)) {
        errorElement.textContent = 'Unsupported file type';
        return;
    }
    // Send the file to the printer
    printFile(file);
});

resetButton.addEventListener('click', (e) => {
    e.preventDefault();
    fileInput.value = '';
    fileNameElement.textContent = '';
    errorElement.textContent = '';
});

function printFile(file) {
    // TO DO: Implement the logic to send the file to the printer
    console.log('File sent to printer:', file.name);
}
