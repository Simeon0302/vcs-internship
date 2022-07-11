def accepts(*types_of_args):
    def inner(func):
        def wrapper(*func_args):
            for index in range(0, len(types_of_args)):
                if not isinstance(func_args[index], types_of_args[index]):
                    raise TypeError(
                        "Argument {} of {} is not {}!"
                        .format(index,
                                func.__name__,
                                types_of_args[index].__name__))
            return func(*func_args)
        return wrapper
    return inner


# Tests
@accepts(str)
def say_hello(name):
    return "Hello, I am {}".format(name)


print(say_hello(4))


@accepts(str)
def say_hello(name):
    return "Hello, I am {}".format(name)


print(say_hello("Hacker"))


@accepts(str, int)
def deposit(name, money):
    print("{} sends {} $!".format(name, money))
    return True


deposit("Fred", 10)
