import { Card, CardContent } from "@/components/ui/card"

interface MenuItem {
  name: string
  description: string
  price: string
  image: string
}

const menuCategories = {
  hotCoffees: [
    {
      name: "Espresso",
      description: "Rich, bold shot of premium coffee",
      price: "70 ETB",
      image: "/Espresso.jpg",
    },
    {
      name: "Double Espresso",
      description: "Two shots of intense coffee flavor",
      price: "130 ETB",
      image: "/double espresso.jfif",
    },
    {
      name: "Macchiato",
      description: "Espresso marked with foamed milk",
      price: "80 ETB",
      image: "/barista-latte-art.png",
    },
    {
      name: "Double Macchiato",
      description: "Double espresso with milk foam",
      price: "185 ETB",
      image: "/Double Macchiato.jfif",
    },
    {
      name: "Cappuccino",
      description: "Espresso with steamed milk and foam",
      price: "200 ETB",
      image: "/capichino.jpg",
    },
    {
      name: "Café Latte",
      description: "Creamy espresso with steamed milk",
      price: "185 ETB",
      image: "/Café Latte.jpg",
    },
    {
      name: "Fasting Macchiato",
      description: "Traditional Ethiopian fasting coffee",
      price: "190 ETB",
      image: "/fasting macchiato.jfif",
    },
    {
      name: "Mocha",
      description: "Chocolate and espresso blend",
      price: "210 ETB",
      image: "/Mocha.webp",
    },
    {
      name: "Americano",
      description: "Smooth espresso with hot water",
      price: "170 ETB",
      image: "/americano.jpg",
    },
    {
      name: "Flat White",
      description: "Espresso with velvety microfoam",
      price: "195 ETB",
      image: "/Flat White.jfif",
    },
    {
      name: "Hot Chocolate",
      description: "Rich and creamy chocolate drink",
      price: "200 ETB",
      image: "/Hot Chocolate.jfif",
    },
  ],
  culturalCoffees: [
    {
      name: "Jebena Buna",
      description: "Traditional Ethiopian coffee ceremony",
      price: "45 ETB",
      image: "/jebena buna.jpg",
    },
    {
      name: "Bunna Be Tena Adam",
      description: "Coffee with rue - traditional blend",
      price: "70 ETB",
      image: "/cofee with chena adam.jfif",
    },
    {
      name: "Spiced Coffee",
      description: "With cardamom & cinnamon",
      price: "90 ETB",
      image: "/cofee.jpg",
    },
    {
      name: "Steam Coffee",
      description: "Steamed coffee with milk",
      price: "80 ETB",
      image: "/steam cofee.jfif",
    },
    {
      name: "Perfect Coffee",
      description: "Our signature house blend",
      price: "120 ETB",
      image: "/perfect cofee.jfif",
    },
  ],
  coldDrinks: [
    {
      name: "Iced Coffee",
      description: "Chilled coffee over ice",
      price: "95 ETB",
      image: "/iced cofee.jfif",
    },
    {
      name: "Iced Latte",
      description: "Cold latte with milk",
      price: "185 ETB",
      image: "/iced late.jfif",
    },
    {
      name: "Iced Mocha",
      description: "Cold chocolate coffee blend",
      price: "210 ETB",
      image: "/Iced Mocha.jfif",
    },
    {
      name: "Fresh Juice",
      description: "Mango, Avocado, or Mixed",
      price: "140 ETB",
      image: "/fresh fruit juices.jfif",
    },
    {
      name: "Smoothies",
      description: "Fresh fruit smoothies",
      price: "170 ETB",
      image: "/mango smoothe.jpg",
    },
    {
      name: "Bottled Water",
      description: "500ml purified water",
      price: "45 ETB",
      image: "/bottled water.jfif",
    },
    {
      name: "Soft Drinks",
      description: "Assorted soft drinks",
      price: "55 ETB",
      image: "/soft drinks.jfif",
    },
  ],
  sandwiches: [
    {
      name: "Egg Sandwich",
      description: "Fresh eggs on toasted bread",
      price: "150 ETB",
      image: "/egg sandwish.jpg",
    },
    {
      name: "Tuna Sandwich",
      description: "Fresh tuna with vegetables",
      price: "180 ETB",
      image: "/tuna sandwich.jfif",
    },
    {
      name: "Chicken Sandwich",
      description: "Grilled chicken with fresh toppings",
      price: "300 ETB",
      image: "/sandwitch.jpg",
    },
    {
      name: "Club Sandwich",
      description: "Triple-decker with turkey, bacon, lettuce, tomato",
      price: "250 ETB",
      image: "/Club Sandwich - Triple-decker presentation.jfif",
    },
    {
      name: "Croissant (Plain)",
      description: "Buttery, flaky French pastry",
      price: "100 ETB",
      image: "/Plain Croissant - Golden, flaky pastry.jpg",
    },
    {
      name: "Croissant (Chocolate)",
      description: "Chocolate-filled croissant",
      price: "120 ETB",
      image: "/Chocolate Croissant - With visible chocolate fillin.jfif",
    },
    {
      name: "Muffins",
      description: "Fresh baked muffins",
      price: "90 ETB",
      image: "/Muffins - Fresh baked muffins.jfif",
    },
  ],
  desserts: [
    {
      name: "Cheesecake",
      description: "Creamy New York style cheesecake",
      price: "250 ETB",
      image: "/Cheesecake - New York style slice.jfif",
    },
    {
      name: "Chocolate Cake",
      description: "Rich, moist chocolate layer cake",
      price: "220 ETB",
      image: "/Chocolate Cake - Rich, moist slice.jfif",
    },
    {
      name: "Brownies",
      description: "Fudgy chocolate brownies",
      price: "150 ETB",
      image: "/Brownies - Fudgy chocolate brownies.jfif",
    },
  ],
}

function MenuCategory({ title, items, accentColor }: { title: string; items: MenuItem[]; accentColor: string }) {
  return (
    <div className="mb-16">
      <h3 className="font-serif font-bold text-3xl mb-8 text-center" style={{ color: accentColor }}>
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="h-48 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-300 bg-gray-50"
                loading="lazy"
              />
            </div>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-serif font-semibold text-lg text-[#4E342E]">{item.name}</h4>
                <span className="font-bold text-lg" style={{ color: accentColor }}>
                  {item.price}
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export function MenuSection() {
  return (
    <section id="menu" className="py-20 bg-[#FAF3E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl md:text-5xl mb-4 text-[#4E342E]">Our Menu</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully crafted selection of premium coffee, traditional Ethiopian brews, fresh smoothies, delicious sandwiches, and artisanal desserts
          </p>
        </div>

        <MenuCategory title="Hot Coffees" items={menuCategories.hotCoffees} accentColor="#4E342E" />
        <MenuCategory title="Cultural Coffees" items={menuCategories.culturalCoffees} accentColor="#6B8E23" />
        <MenuCategory title="Cold Drinks" items={menuCategories.coldDrinks} accentColor="#4E342E" />
        <MenuCategory title="Sandwiches & Light Bites" items={menuCategories.sandwiches} accentColor="#6B8E23" />
        <MenuCategory title="Desserts" items={menuCategories.desserts} accentColor="#4E342E" />
      </div>
    </section>
  )
}
