'''
Resolvendo o Problema 1 sem a função sort()
'''

vetor = [8, 5, 10, 5, 2, 4, 4, 3]


def ordenador(lista):

    lista2 = []
    resultado = []

    #Função while organizando a lista
    while lista:
        menor_num = lista[0]
        for item in lista:
            if item < menor_num:
                menor_num = item
        lista2.append(menor_num)
        lista.remove(menor_num)

    #Função for removendo itens repetidos    
    for item in lista2:
        if item not in resultado:
            resultado.append(item)
    
    return resultado

print(ordenador(vetor))

