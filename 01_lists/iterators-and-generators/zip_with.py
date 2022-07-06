from functools import reduce


def concat3(x, y, z):
    return x + y + z


def zip_with(func, first_iterable, second_iterable, third_iterable):
    list = [first_iterable, second_iterable, third_iterable]
    min_length = len(reduce(lambda a, b: a if len(a) < len(b) else b, list))

    for i in range(0, min_length):
        yield func(first_iterable[i], second_iterable[i], third_iterable[i])


first_names = ['John', 'Miles']
last_names = ['Coltrane', 'Davis']
spaces = [' '] * 2

print(list(zip_with(concat3, first_names, spaces, last_names)))
