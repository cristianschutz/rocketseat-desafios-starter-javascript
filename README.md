# Desafio do Starter (Curso de Javascript) da Rocketseat

Hoje tirei um tempinho pra relembrar alguns conceitos e funções do javascript. Principalmente pra quem vem do mundo do jQuery como eu, vale muito a pena parar e assistir os cursos starter da Rocketseat.
Com a evolução do javascript e os novos conceitos de desenvolvendo através de libs muito mais enxutas, que ajudam a resolver problemas mais específicos, o uso de um framework como o jQuery (que tem muitos recursos, e que muitas vezes nem são utilizados no projeto), tem sido cada vez mais questionado.

## 1º exercício

Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 2
segundos retornará se usuário é maior ou não que 18 anos. Se o usuário ter mais que 18 anos de
idade o resultado deve cair no .then, caso contrário, no .catch

## 2º exercício

Crie uma tela com um <input> que deve receber o nome de um usuário no Github. Após digitar o
nome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github (conforme
URL abaixo) os dados de repositórios do usuário e mostrá-los em tela:
URL de exemplo: https://api.github.com/users/diego3g/repos
Basta alterar "diego3g" pelo nome do usuário.
<input type="text" name="user">
<button onclick="">Adicionar</button>
Depois de preencher o input e adicionar, a seguinte lista deve aparecer abaixo:

## 3º exercício

A partir do resultado do exemplo anterior adicione um indicador de carregamento em tela no lugar
da lista apenas enquanto a requisição estiver acontecendo:

<li>Carregando...</li>
Além disso, adicione uma mensagem de erro em tela caso o usuário no Github não exista.
Dica: Quando o usuário não existe, a requisição irá cair no .catch com código de erro 404.

## PDF com os exercícios

[Pdf com os exercícios](https://skylab.rocketseat.com.br/api/files/1566499182493.pdf)

[Link do curso](https://skylab.rocketseat.com.br)
