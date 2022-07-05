def groupby(func, seq):
    dictionary = dict()

    for item in seq:
        func_result = func(item)
        if func_result in dictionary.keys():
            dictionary[func_result].append(item)
        else:
            dictionary[func_result] = [item]
    print(dictionary)


groupby(lambda x: x % 2, [0, 1, 2, 3, 4, 5, 6, 7])
