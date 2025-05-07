console.log('start');

async function isPrime(number) {
    
}

(async () => {
    try {
        const result = await isPrime(7);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
})();

console.log('end');
