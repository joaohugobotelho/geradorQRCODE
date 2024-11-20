const btn = document.querySelector('button');
const input = document.querySelector('#input');
const image = document.querySelector('#qrImg');

image.removeAttribute('alt')


  



function gerarQR() {
    if(input.value.length > 0) {
        image.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
    }
    else {
        input.classList.add("error");
        setTimeout(() => {
            input.classList.remove("error");
      }, 1000)
    }
  }
