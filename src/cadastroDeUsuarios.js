/* Pré-requisitos:
Declare um vetor contendo informações sobre usuários de um site, contendo as propriedades: 
id, nome, email, senha e expirado (boleano, pode ser true ou false). 
Adicione ao menos um dos usuarios como expirado sendo true.
*/
const usuarios = [
    {
        id: 1,
        nome: 'João das Couves',
        email: 'joaodascouves@gmail.com.br',
        senha: '111111',
        expirado: false // (boleano, pode ser true ou false). 
    },

    {
        id: 2,
        nome: 'Maria da Silva',
        email: 'mariadasilva@yahoo.com',
        senha: '222222',
        expirado: true // Adicione ao menos um dos usuarios como expirado sendo true.
    },

    {
        id: 3,
        nome: 'Joana Angélica',
        email: 'joanaangelica@microsoft.com',
        senha: '333333',
        expirado: false
    },

    {
        id: 4,
        nome: 'Ana da Silva',
        email: 'anadasilva@yahoo.com',
        senha: '444444',
        expirado: true
    },

    {
        id: 5,
        nome: 'Maria do Carmo',
        email: 'mariadocarmo@gmail.com',
        senha: '555555',
        expirado: false
    }
]

/* Desafio:
- Construa uma função de para realizar login. 
*/
export function RealizarLogin(email, senha) {

    //validação para campos em branco
    if (email == '' || senha == '') {
        throw new Error('Os campos Email e senha não podem estar vazios');
    }

    for (let i = 0; i < usuarios.length; i++) {

        const usuario = usuarios.at(i);

        //Quem usar a função deverá receber uma mensagem dizendo que o login foi realizado com sucesso caso exista um usuário com 
        // email e senha iguais aos informados. 
        if (usuario.email === email && usuario.senha === senha) {

            if (usuario.expirado === true) {
                throw new Error('Suas credenciais expiraram. Renove suas credenciais');
            }

            return 'Login realizado com sucesso';
        }
    }

    throw new Error('Suas credenciais estão incorretas');
}
