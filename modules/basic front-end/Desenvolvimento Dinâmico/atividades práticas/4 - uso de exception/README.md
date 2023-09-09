### Título da Prática:  Como usamos exception?

<hr>

**Objetivos:** Implementar uso de exception


**Prática**

Você está trabalhando no desenvolvimento de um sistema para uma empresa que gerencia funcionários. Sua tarefa é **implementar o código em JavaScript que modele essa situação, utilizando classes, herança, exceções e elementos do DOM**.

O código deve possuir as classes Funcionario, Gerente e Desenvolvedor, que representam diferentes tipos de funcionários. Cada classe possui atributos específicos e métodos para se apresentar, trabalhar e realizar tarefas relacionadas ao seu cargo. Fizemos esse código na prática 10, onde pedimos que fosse desenvolvido um código da seguinte forma:

Imagine que você está desenvolvendo um sistema para uma empresa que possui diferentes tipos de funcionários, como gerentes e desenvolvedores. Seu objetivo é implementar o código em JavaScript que modele essa situação utilizando classes e herança.

Você precisa criar as classes Funcionario, Gerente e Desenvolvedor. A classe Funcionario deve ter os atributos nome, idade e cargo, além dos métodos seApresentar() e trabalhar(). A classe Gerente deve herdar da classe Funcionario e ter um atributo adicional departamento, além do método gerenciar(). Já a classe Desenvolvedor deve herdar da classe Funcionario e ter um atributo adicional de linguagem, além do método programar().

Depois de implementar as classes, crie instâncias de um gerente e de um desenvolvedor, definindo valores para seus atributos. Em seguida, chame os métodos apropriados para cada um dos funcionários, exibindo as saídas corretas no console.

Agora, seu objetivo é aprimorar o código, **adicionando tratamento de exceções (usando try-catch) e interação com elementos do DOM**. Você precisa obter os valores preenchidos em um **formulário HTML, que possui campos para nome, idade, cargo, departamento e linguagem de programação**. Certifique-se de que todos os campos estão preenchidos corretamente antes de criar as instâncias das classes.

Após obter os valores dos campos do formulário, crie instâncias de um **gerente e de um desenvolvedor**, utilizando os valores preenchidos. Em seguida, chame os métodos apropriados para cada um dos funcionários e exiba as informações relevantes na página, como a apresentação do funcionário e as tarefas que ele realiza.

Caso ocorra algum erro durante a execução do código, trate as exceções usando a função **exibirErro()**, que exibirá uma mensagem de erro na página.

Lembre-se de testar o código, preencher todos os campos corretamente e também de testar situações em que os campos não estejam preenchidos ou contenham valores inválidos.

