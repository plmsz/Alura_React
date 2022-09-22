Event Loop, Call Stack e Task Queue. O Event Loop é um ciclo que monitora e executa as ações que mandamos para o JavaScript. O processo de leitura do código só é finalizado quando não existem mais ações a serem executadas. A call stack é um mecanismo que organiza como irá funcionar o script quando existem muitas funções: qual função está sendo executada, quais estão sendo chamadas dentro de alguma função, etc. Por fim, a task queue é a fila de tarefas assíncronas.

```js
const deliver = new Promise(function(resolve, reject) {
    if(delivered === true){
        resolve(`You've got a mail`)
    }else{
        reject('Delivery failed')
    }
}
```
