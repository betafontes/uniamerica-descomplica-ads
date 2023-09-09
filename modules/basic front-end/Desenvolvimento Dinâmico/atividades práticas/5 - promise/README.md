### Título da Prática: O que é uma Promise?

<hr>

 **Objetivos:** Implementar uso de promise


**Prática :**

Essa prática consiste em criar um código em JavaScript que utilize **Promises, arrays, funções e o recurso ‘setTimeout’**. O objetivo é processar um array de números de forma assíncrona, **verificando se cada número é par ou ímpar e exibindo uma mensagem correspondente para cada um.**

Para isso, é necessário implementar a **função ‘processarItem’**, que recebe um número como argumento. Essa função **retorna uma Promise** que será resolvida após um atraso de 1 segundo, simulado pelo **‘setTimeout’**. Caso o número seja par, a Promise é resolvida com uma mensagem informando que o número é par. Caso contrário, a Promise é rejeitada com uma mensagem indicando que o número é ímpar.

Além disso, deve ser criada a **função ‘processarArray’**, que recebe um array de números como parâmetro. Essa função mapeia cada número do array para uma chamada de **‘processarItem’** correspondente, gerando um array de Promises. Em seguida, **utiliza o ‘Promise.all’** para aguardar a resolução de todas as Promises.

No código principal, um array de números é definido e passado como argumento para a **função ‘processarArray’**. Em seguida, são encadeados os **métodos ‘then’** para tratar os resultados das Promises resolvidas e ‘catch’ para lidar com possíveis erros.

