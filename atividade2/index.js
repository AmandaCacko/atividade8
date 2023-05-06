const prompt =  require('prompt-sync')()

const salario = Number(prompt('Digite o valor atual do salario: '))
const reajuste = Number(prompt('Digite o valor do reajuste em porcentagem: ')) 

const novoSalario =  salario*reajuste/100+salario

console.log(novoSalario)

