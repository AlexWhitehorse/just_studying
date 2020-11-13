class StringVar():
    def __init__(self, string = ""):
        self.__string = string

    def setString(self, string):
        self.__string = string

    def getString(self):
        return self.__string


def main():
    s = StringVar()
    s.setString("Vasia")

    s2 = StringVar("Kolia")

    print(s.getString())
    print(s2.getString())

main()
