import _ from 'underscore';

/**
 * Crea y mezcla un deck completo de blackjack.
 *
 * @param {string[]} tiposDeCartas
 * @param {string[]} tiposEspeciales
 * @returns {string[]} deck mezclado
 */
export const crearDeck = (tiposDeCartas, tiposEspeciales) => {
    if (!tiposDeCartas || tiposDeCartas.length === 0) {
        throw new Error('tiposDeCartas es obligatorio como un arreglo de string');
    }

    if (!tiposEspeciales || tiposEspeciales.length === 0) {
        throw new Error('tiposEspeciales es obligatorio como un arreglo de string');
    }

    const deck = [];

    for (let i = 2; i <= 10; i++) {
        for (const tipo of tiposDeCartas) {
            deck.push(`${i}${tipo}`);
        }
    }

    for (const tipo of tiposDeCartas) {
        for (const especial of tiposEspeciales) {
            deck.push(`${especial}${tipo}`);
        }
    }

    return _.shuffle(deck);
};