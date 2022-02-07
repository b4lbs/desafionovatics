'''
Resolvendo o Problema 2
'''

def verificaLinha(linha):
        verificador = [i for i in linha if i != "."]
        if len(verificador) != len(set(verificador)):
                return False
        return True

board = [["5","3",".",".","7",".",".",".","."]
        ,["6",".",".","1","9","5",".",".","."]
        ,[".","9","8",".",".",".",".","6","."]
        ,["8",".",".",".","6",".",".",".","3"]
        ,["4",".",".","8",".","3",".",".","1"]
        ,["7",".",".",".","2",".",".",".","6"]
        ,[".","6",".",".",".",".","2","8","."]
        ,[".",".",".","4","1","9",".",".","5"]
        ,[".",".",".",".","8",".",".","7","9"]]

resultado = True

# CHECK LINES
for list in board:
    if verificaLinha(list) == False:
        resultado = False

# CHECK COLUMNS
for i in range(9):
    lista = []
for j in range(9):
    lista.append(board[j][i])
if verificaLinha(lista) == False:
    resultado = False

# CHECK SQUARES
for i in [0,3,6]:
    for j in [0,3,6]:
        lista = [board[i][j], board[i+1][j], board[i+2][j], board[i][j+1], board[i+1][j+1], board[i+2][j+1], board[i][j+2], board[i+1][j+2], board[i+2][j+2]]
if verificaLinha(lista) == False:
    resultado = False

print(resultado)