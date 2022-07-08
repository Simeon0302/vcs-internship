def encrypt_character(ch, key):
    if ch == " ":
        return " "
    elif ch.isupper():
        return chr(((ord(ch) - 65 + key) % 26) + 65)
    else:
        return chr(((ord(ch) - 97 + key) % 26) + 97)


def encrypt(key):
    def inner(func):
        text_to_encrypt = func()
        result = ""
        for ch in text_to_encrypt:
            result += encrypt_character(ch, key)
        print(result)
    return inner


@encrypt(2)
def get_low():
    return "Get get get low"
