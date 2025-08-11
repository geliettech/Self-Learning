class Flight():
    def __init__(self, capacity):
        self.capacity = capacity
        self.passengers = []

        def add_passenger(self, name):
            if self.open_open_seat():
                return False
            self.passengers.append(name)
            return True

        def open_seats(self):
            return self.capacity - len(self.passengers)

flight = Flight(3)# 3 people can go inside the flight but not more than 3
people = ["Harry", "Ron", "Hermione", "Ginny"]
for person in people:
    success = flight.add_passenger(person)
    if success:
        print (f"Added {person} to flight successfully.")
    else:
        print("No available seats {person}")
