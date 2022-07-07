from datetime import datetime
from functools import wraps


def log(file_name):
    def log_inner(func):
        @wraps(func)
        def wrapper():
            file = open(file_name, "a")
            file.write(
                "{} was called at {} \n"
                .format(func.__name__, datetime.today()))
            file.close()
            func()
        return wrapper
    return log_inner


@log("log_file.txt")
def say_hello():
    print("Hello")


say_hello()
say_hello()
say_hello()
