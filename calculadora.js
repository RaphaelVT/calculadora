const prompt = require("prompt-sync")();
while(true){

    console.log(`Selecione abaixo a operação que deseja para realizar o calculo:
        
        1 - Adição        ( + )
        2 - Subtração     ( - ) 
        3 - Multiplicação ( * )
        4 - Divisão       ( / )
        5 - Porcentagem   ( % )
    
    `)

    let selecione = prompt();

    let num1 = +prompt(`Digite o primeiro número que deseja calcular: `)
    let num2 = +prompt(`Digite o segundo número que deseja calcular: `)
    
        if (isNaN(num1) || isNaN(num2)) {
            console.log(`
            
            Por favor, insira um número válido.
            
            `);
            continue
        }     
    
    if (selecione === '+' || selecione === '1' || selecione === 'Adição') {
        console.log(`
        
        A sua soma é: ${soma(num1, num2)}
        
        `);
        
    } else if (selecione === '-' || selecione === '2' || selecione === 'Subtração') {
        console.log(`
        
        A sua subtração é: ${subtração(num1, num2)}
        
        `);
        
    } else if (selecione === '*' || selecione === '3' || selecione === 'Multiplicação') {
        console.log(`
        
        A sua multiplicação é: ${multiplicação(num1, num2)}
        
        `);
        
        
    } else if (selecione === '/' || selecione === '4' || selecione === 'Divisão') {
        console.log(`
        
        A sua divisão é: ${divisão(num1, num2)}
        
        `);
        
    } else if (selecione === '%' || selecione === '5' || selecione === 'Porcentagem') {
        console.log(`
        
        A sua porcentagem é: ${porcentagem(num1, num2)}
        
        `);
        
    } else {
        console.log(`
        
    Atenção: Opção inválida, selecione uma operação para realizar o cálculo!
        
        `);
    continue

    }
    
}
function soma(a, b) {
    return a + b 

} 
function subtração(a, b) {
    return a - b
}
function multiplicação(a, b) {
    return a * b
}
function divisão(a, b) {
    if (b === 0) {
        return "Número inválido";
    }
    return a / b
}
function porcentagem(a, b) {
    return (a / b) * 100
}