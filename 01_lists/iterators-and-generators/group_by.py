def create_list_and_add_value(dict, key, item_to_add):
    dict[key] = []
    dict[key].append(item_to_add)

def groupby(func, seq):
    dictionary = dict()

    for item in seq:
        func_result = func(item)
        if func_result in dictionary.keys():
            if dictionary[func_result] is None:
                create_list_and_add_value(dictionary, func_result, item)
            else:
                dictionary[func_result].append(item)
        else:
            create_list_and_add_value(dictionary, func_result, item)
    print(dictionary)

groupby(lambda x: x % 2, [0, 1, 2, 3, 4, 5, 6, 7])