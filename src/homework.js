
// fibonacci(0) = 0, fibonacci(1) = 1

export function fibonacci(n) {
    if (n < 0) throw new Error("Номер не может быть отрицательным");
    if (n === 0) return 0;
    if (n === 1) return 1;
    
    let prev = 0;
    let current = 1;
    
    for (let i = 2; i <= n; i++) {
        const next = prev + current;
        prev = current;
        current = next;
    }
    
    return current;
}

/*  
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
}); 

readline.question('Введите номер числа Фибоначчи (начиная с 0): ', (input) => {
    const n = parseInt(input);
    
    // Проверка корректности ввода
    if (isNaN(n)) {
        console.log('Ошибка: пожалуйста, введите целое число');
    } else if (n < 0) {
        console.log('Ошибка: номер не может быть отрицательным');
    } else {
        try {
            const result = fibonacci(n);
            console.log(`Число Фибоначчи с индексом ${n} равно: ${result}`);
        } catch (error) {
            console.log(`Ошибка: ${error.message}`);
        }
    }
    
    readline.close();
});
*/
