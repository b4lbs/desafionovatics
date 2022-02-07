'''
Resolvendo o Problema 1 da forma mais rápida
'''

vetor = [8, 5, 10, 5, 2, 4, 4, 3]

def ordenador(lista):
    return sorted(list(set(lista)))

print(ordenador(vetor))
