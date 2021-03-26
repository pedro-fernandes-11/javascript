const schedule = require('node-schedule')

// Segundo (opcional), minuto, hora, dia do mês, mês, dia da semana
const tarefa1 = schedule.scheduleJob('*/1 * * * * 6', function (){
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function (){
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 5000) // acontece depois de x milissegundos

// setImmediate() acontece imediatamente
// setInterval() acontece a cada x milissegundos

const regra = new schedule.RecurrenceRule()
regra.hour = 20
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log("Executando Tarefa 2!", new Date().getSeconds())
})