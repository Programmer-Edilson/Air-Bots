let delay = 500;

let timerId = setTimeout(function request() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/server', true);

    xhr.onload = function () {
       if(this.status == 200){
            const success = document.getElementById('success')
            success.style.color = 'gree';
            success.innerText = this.responseText
       } else {
            console.log('error');
       }
    delay *= 2;
    };

    xhr.send(null);

  }

  timerId = setTimeout(request, delay);

}, delay);
