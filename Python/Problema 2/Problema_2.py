from sys import exit

board = [["5","3",".",".","7",".",".",".","."]
        ,["6",".",".","1","9","5",".",".","."]
        ,[".","9","8",".",".",".",".","6","."]
        ,["8",".",".",".","6",".",".",".","3"]
        ,["4",".",".","8",".","3",".",".","1"]
        ,["7",".",".",".","2",".",".",".","6"]
        ,[".","6",".",".",".",".","2","8","."]
        ,[".",".",".","4","1","9",".",".","5"]
        ,[".",".",".",".","8",".",".","7","9"]]

tabela_valida = True

def verificadorLinha(lista):
    for item in lista:
        if item == ".":
            continue
        else: 
            if lista.count(item) > 1:
                return False  
    return True

for lista in board: 
    if verificadorLinha(lista) == False:
        print(False)
        exit()


for i in range(0,8):
    coluna = []
    for j in range(0,8):
        coluna.append(board[j][i])
    if verificadorLinha(coluna) == False:
        print(False)
        exit()

for i in [0,3,6]:
    for j in [0,3,6]:
        quadrado = [board[i][j], board[i+1][j], board[i+2][j], 
                 board[i][j+1], board[i+1][j+1], board[i+2][j+1], 
                 board[i][j+2], board[i+1][j+2], board[i+2][j+2]]
        if verificadorLinha(quadrado) == False:
            print(False)
            exit()

print(tabela_valida)
        








