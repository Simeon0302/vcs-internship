def double(x):
    return 2 * x


def iterate(func):
    counter = 0

    def _executor(num):
        result = num
        for i in range(0, counter):
            result = func(result)
        return result

    while True:
        yield _executor
        counter += 1


i = iterate(double)

f = next(i)  # 3

print(f(3))

f = next(i)  # 3

print(f(3))

f = next(i)  # 3

print(f(3))
