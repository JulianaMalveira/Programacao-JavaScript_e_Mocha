// Testes automatizados de unidade para a função buscarTituloDoLivroPorID

import { buscarTituloDoLivroPorID } from '../src/gestaoLivros.js';
import assert from 'node:assert';

describe('Testando Gestão de Livros', function () {
    describe('buscarTituloDoLivroPorID', function () {
        
        it('Deve retornar o título quando o ID é válido', function () {
            // Arrange
            const idValido = 1;
            const tituloEsperado = 'Comer, Rezar e Amar';

            // Act
            const resultado = buscarTituloDoLivroPorID(idValido);

            // Assert
            assert.equal(resultado, tituloEsperado);
        });

        it('Deve lançar erro quando o ID não é encontrado', function () {
            // Arrange
            const idNaoEncontrado = 999;

            // Assert
            assert.throws(
                function () {
                    buscarTituloDoLivroPorID(idNaoEncontrado);
                },
                {
                    message: 'Livro não encontrado'
                }
            );
        });

        it('Deve lançar erro quando o ID é menor que 1', function () {
            // Arrange
            const idMenorQue1 = 0;

            // Assert
            assert.throws(
                function () {
                    buscarTituloDoLivroPorID(idMenorQue1);
                },
                {
                    message: 'id deve ser maior que zero'
                }
            );
        });

        it('Deve lançar erro quando o ID é igual a nulo (null)', function () {
            // Arrange
            const idNulo = null;

            // Assert
            assert.throws(
                function () {
                    buscarTituloDoLivroPorID(idNulo);
                },
                {
                    message: 'id deve ser maior que zero'
                }
            );
        });

        it('Deve lançar erro quando o ID não é informado (undefined)', function () {
            // Arrange - não passa argumentos

            // Assert
            assert.throws(
                function () {
                    buscarTituloDoLivroPorID();
                },
                {
                    message: 'Livro não encontrado'
                }
            );
        });

        it('Deve lançar erro quando o ID é negativo', function () {
            // Arrange
            const idNegativo = -1;

            // Assert
            assert.throws(
                function () {
                    buscarTituloDoLivroPorID(idNegativo);
                },
                {
                    message: 'id deve ser maior que zero'
                }
            );
        });

        
        });
    });
