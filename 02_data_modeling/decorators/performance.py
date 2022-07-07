import time
from functools import wraps


def write_execution_time(file_name, time, func_name):
    file = open(file_name, 'a')
    file.write(
        "{} was called and took {:.2f} seconds to comlete\n"
        .format(func_name, time))
    file.close()


def performance(file_name):
    def performance_inner(func):
        @wraps(func)
        def measure_time_execution():
            start_time = time.time()
            print(func())
            end_time = time.time()
            
            write_execution_time(
                file_name,
                end_time - start_time,
                func.__name__)
        return measure_time_execution
    return performance_inner


@performance("log.txt")
def wait_for_two_seconds():
    time.sleep(2)
    return "I am done"


wait_for_two_seconds()
