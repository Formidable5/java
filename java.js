function reversedstr(str){
    let result ='';
    for(let char of str){
        result = char+result
    }
    return result
}

reversedstr('saywara')
