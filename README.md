 Crie uma nova página HTML e um arquivo JavaScript. Implemente um formulário de cadastro com os 
seguintes campos e regras de validação. A validação deve ocorrer após o clique no botão de submissão. 
Uma mensagem de erro geral ou de sucesso deve ser exibida em um local apropriado na página.
 Campos Obrigatórios:
 1. Nome Completo:
 ○ Tipo de input: text
 ○ Validação: Não pode estar vazio.
 2. E-mail:
 ○ Tipo de input: email
 ○ Validação: Deve incluir o caractere @.
 3. Senha:
 ○ Tipo de input: password
 ○ Validação: Deve ter no mínimo 8 caracteres.
 4. Data de Nascimento:
 ○ Tipo de input: date
 ○ Validação: O campo não pode estar vazio.
 5. Aceito os Termos:
 ○ Tipo de input: checkbox
 ○ Validação: A caixa precisa estar marcada
# Instruções

 Crie a estrutura do formulário no HTML, utilizando a tag <form> e os inputs apropriados. Dê ids 
únicos para cada input e para o botão.
 No JavaScript, selecione cada um dos inputs, o botão e um elemento para exibir as mensagens (pode 
ser um <p> ou <div>).
 Adicione um evento de onclick ao botão de submissão.
 Lembre-se de usar event.preventDefault() no início da sua função de clique.
 Dentro da função, use if/else para verificar o valor (.value) ou o estado (.checked para o checkbox) 
de cada campo.
 Se alguma validação falhar, exiba uma mensagem de erro. Se tudo estiver correto, exiba uma mensagem 
de sucesso
