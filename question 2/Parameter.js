
var url = 'https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby';

var parameter='utm_medium';

let value=getUrlParameterValue(url,parameter);

console.log(value);


function getUrlParameterValue(url, parameter){
    let parameters=new URLSearchParams(url);
    return parameters.get(parameter);
}