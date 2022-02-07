'''
Resolvendo o Problema 1 com função sort()
'''

vetor = [8, 5, 10, 5, 2, 4, 4, 3]

def ordenador(lista):

    resultado = []

    #Ordena a lista
    lista.sort()

    #Adiciona os elementos únicos a uma segunda lista, logo, remove elementos repetidos
    for item in lista:
        if item not in resultado:
            resultado.append(item)
    
    return resultado 


print(ordenador(vetor))

