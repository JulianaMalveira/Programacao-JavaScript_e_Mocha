// Testes automatizados de unidade para a função RealizarLogin

import { RealizarLogin } from '../src/cadastroDeUsuarios.js';
import assert from 'node:assert';


describe("Teste de Login com sucesso", () => {
    it("deve realizar login com sucesso para usuário válido não expirado", () => {
        const result = RealizarLogin('joaodascouves@gmail.com.br', '111111');
        assert.equal(result, 'Login realizado com sucesso');
    });
});

describe("Testes de Erros de autenticação", () => {
    it("deve falhar para credencial expirada", () => {
        assert.throws(() => RealizarLogin('mariadasilva@yahoo.com', '222222'), { message: 'Suas credenciais expiraram. Renove suas credenciais' });
    });

    it("deve falhar quando usuário não existe", () => {
        assert.throws(() => RealizarLogin('usuarioinexistente@gmail.com', '123456'), { message: 'Suas credenciais estão incorretas' });
    });

    it("deve falhar para senha incorreta de usuário válido", () => {
        assert.throws(() => RealizarLogin('joanaangelica@microsoft.com', 'senhaerrada123'), { message: 'Suas credenciais estão incorretas' });
    });
});

describe("Validação de campos", () => {
    it("deve falhar para email vazio", () => {
        assert.throws(() => RealizarLogin('', '333333'), { message: 'Os campos Email e senha não podem estar vazios' });
    });

    it("deve falhar para senha vazia", () => {
        assert.throws(() => RealizarLogin('mariadocarmo@gmail.com', ''), { message: 'Os campos Email e senha não podem estar vazios' });
    });

    it("deve falhar para email e senha vazios", () => {
        assert.throws(() => RealizarLogin('', ''), { message: 'Os campos Email e senha não podem estar vazios' });
    });
});
