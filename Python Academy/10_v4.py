class Bird:
    def __init__(self):
        self.color = None
        self.age = None
        self.height = None

    def fly(self):
        pass

    def description_bird(self):
        pass

class Сhicken(Bird):
    def __init__(self, color, age, height):
        self.color = color
        self.age = age
        self.height = height

    def fly(self):
        return None

    def description_bird(self):
        print("The chicken: \ncolor - %s\nage - %s\nheight - %s" % (self.color, self.age, self.height))

class Ostrich(Bird):
    def __init__(self, color, age, height):
        self.color = color
        self.age = age
        self.height = height

    def fly(self):
        return None

    def description_bird(self):
        print("The ostrich: \ncolor - %s\nage - %s\nheight - %s" % (self.color, self.age, self.height))

def describe_bird(bird):
    bird.description_bird()

def main():
    chicken = Сhicken("white", 1, 45)
    ostrich = Ostrich("black", 5, 240)

    describe_bird(chicken)
    print("\n")
    describe_bird(ostrich)

if __name__ == '__main__':
    main()