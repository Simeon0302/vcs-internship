from functools import reduce


def concat3(x, y, z):
    return x + y + z


def zip_with(func, *iterables):
    min_length = len(reduce(
    lambda a, b: a if len(a) < len(b) else b,
    iterables))

    for i in range(0, min_length):
        arguments_for_func = []
        for iterable in iterables:
            arguments_for_func.append(iterable[i])
        yield func(*arguments_for_func)


first_names = ['John', 'Miles']
last_names = ['Coltrane', 'Davis']
spaces = [' '] * 2

print(list(zip_with(concat3, first_names, spaces, last_names)))
