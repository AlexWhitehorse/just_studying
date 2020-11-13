def find_all_serviceable_cars(cars, under_repair):
    serviceable = []

    for car in cars:
        if car in under_repair:
            serviceable.append(car)

    return serviceable

def make_one_array(arr):
    ret_arr = []

    for i in arr:
        for j in i:
            ret_arr.append(j)
    
    return ret_arr



serviceable_cars = []
all_cars = ['Audi', 'Wolvo', 'Mers']
all_trucks = ['Scania_truck', 'Vovlvo_truck', 'Mers_truck']
under_repair = ['Wolvo', 'Mers_truck', 'Audi']

serviceable_cars.append(find_all_serviceable_cars(all_cars, under_repair))
serviceable_cars.append(find_all_serviceable_cars(all_trucks, under_repair))

print(make_one_array(serviceable_cars))
