export function add(a, b){
    return a + b;
}

export function substrac(a, b){
    return a - b;
}

export function multiplay(a,b){
    return a * b
}

export function divide(a,b){
    if(b == 0){
        return "no se puede dividir por 0"
    }else{
        return a / b
    }
}
