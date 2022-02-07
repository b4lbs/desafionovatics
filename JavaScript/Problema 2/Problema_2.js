/*
Resolvendo o Problema 2
*/

const board = [["5", "3", ".", ".", "7", ".", ".", ".", "."]
             , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
             , [".", "9", "8", ".", ".", ".", ".", "6", "."]
             , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
             , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
             , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
             , [".", "6", ".", ".", ".", ".", "2", "8", "."]
             , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
             , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]

let tabela_valida = true

// Verifica se há elementos repetidos em uma lista
function verificadorLinha(lista) {
    for (a = 0; a < lista.length; a++) {
        let contador = 0
        if (lista[a] === '.') {
            continue
        }
        else {
            for (b = 0; b < lista.length; b++) {
                if (lista[b] == lista[a]) { contador++ }
                if (contador > 1) {
                    return false

                }
            }
        }
    }
    return true
}

// Verifica todas as linhas do board
for (c = 0; c < board.length; c++) {
    if (verificadorLinha(board[c]) == false) {
        tabela_valida = false
    }
}

// Verifica todas as colunas do board
for (d = 0; d < 9; d++) {
    let coluna = []
    for (e = 0; e < 9; e++) {
        coluna.push(board[e][d])
        if (verificadorLinha(coluna) == false) {
            tabela_valida = false
        }
    }
}

// Verifica os quadrados do board
const ref_quad = [0, 3, 6]
for (i = 0; i < ref_quad.length; i++) {
    for (j = 0; j < ref_quad.length; j++) {
        let quadrado = [board[ref_quad[i]][ref_quad[j]], board[ref_quad[i] + 1][ref_quad[j]], board[ref_quad[i] + 2][ref_quad[j]],
        board[ref_quad[i]][ref_quad[j] + 1], board[ref_quad[i] + 1][ref_quad[j] + 1], board[ref_quad[i] + 2][ref_quad[j] + 1],
        board[ref_quad[i]][ref_quad[j] + 2], board[ref_quad[i] + 1][ref_quad[j] + 2], board[ref_quad[i] + 2][ref_quad[j] + 2]]
        if (verificadorLinha(quadrado) == false) {
            tabela_valida = false
        }
    }
}

console.log(tabela_valida)
