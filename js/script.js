// ini javascript

console.log('Javascript tersambung')

function validateForm(){
    console.log('Validasi berhasil terpanggil');
    const inputSuhu = document.getElementById('input-suhu').value;

    if (inputSuhu == '') {
        alert('Inputan anda kosong');
    }else{
        calculate(inputSuhu);
    }
        

}

function calculate(value) {
    let result = parseFloat(value*9/5) + 32;
    document.getElementById('hasil-suhu').value = result;
    document.getElementById('how-to-suhu').value = '(' + value + ' x 9/5) + 32 = ' + result;
}


function reset() {

    document.getElementById('input-suhu').value = '' ;
    document.getElementById('hasil-suhu').value = '' ;
    document.getElementById('how-to-suhu').value = '' ;
}