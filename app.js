let link = document.getElementById('link');
let reduce_button = document.getElementById('reduce-button');
let reduce_result = document.getElementById('reduce-result');

reduce_button.addEventListener('click', function () {
    let url = link.value;
    reduce_result.innerText = ''

    if (url.startsWith('http://') || url.startsWith('https://')) {
        if (url.includes('.')) {
            const cutUrl = acortarEnlace(url)
            createResult(cutUrl)
        }
    }
});


function acortarEnlace(url) {
    let urlSinProtocolo = url.replace(/^https?:\/\//, '');

    let partesUrl = urlSinProtocolo.split('/');
    let dominio = partesUrl[0];
    let rutaCorta = partesUrl.slice(1, 3).join('/');

    let urlCorta = dominio + '/' + rutaCorta;

    if (urlCorta.length > 30) {
        urlCorta = urlCorta.substring(0, 30) + '...';
    }

    return urlCorta;
}

function createResult(res) {
    const result = document.createElement('span');
    result.innerText = res;

    //resultado
    reduce_result.appendChild(result);
    link.value = ''
}