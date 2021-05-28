const toys = [
   {
      id: 1,
      name: "Spider-Man",
      type: "action figure",
      maker: "Hasbro",
      price: 13.99      
   },
   {
      id: 2,
      name: "Lego Hogwarts Castle",
      type: "building blocks set",
      maker: "The Lego Group",
      price: 399.99
   },
   {
      id: 3,
      name: "Play Station 5",
      type: "gaming console",
      maker: "Sony",
      price: 499.99
   }
]

console.log(toys)

for (const toy of toys) {
   console.log(`${toy.name} is made by ${toy.maker}`)
}

const chopper = {
   id: 4,
   name: "Chopper",
   type: "tricycle",
   maker: "Radio Flyer",
   price: 79.99
}

const crayons = {
   id: 5,
   name: "Crayons",
   type: "art supplies",
   maker: "Crayola",
   price: 14.99
}

toys.push(chopper)
toys.push(crayons)

console.log(toys)

const toyToFind = 2

for (const toy of toys) {
   if (toyToFind === toy.id) {
      toy.price = toy.price * 1.05;
      console.log(`The ${toy.name} ${toy.type} produced by ${toy.maker} can be purchased for $${toy.price}.`)
   }
}