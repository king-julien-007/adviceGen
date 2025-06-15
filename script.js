
document.addEventListener('DOMContentLoaded', async function () {
    async function getAdvice() {
        
    
    const response = await fetch('https://api.api-ninjas.com/v1/advice',
        {
            method: 'GET',
            headers: {
                'X-Api-Key': 'BWWW60cexQO3iXDuo1I5Jw==tY5MtYsL8OkuoEmC'},
            'Content-Type': 'application/json'
        }
    )

    const data = await response.json();
    document.getElementById('advice').innerHTML = data.advice;}

    getAdvice();
    document.getElementById('butn').addEventListener('click', getAdvice)
})