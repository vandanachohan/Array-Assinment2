

// Define the Product type Lipsticks
type Product = {
  name: string;
  price: number;
  inventory: {
    stock: number;
    colorOptions: string[];
  };
};

// Create an array of products
const products: Product[] = [
  {
    name: "Product 1",
    price: 100,
    inventory: {
      stock: 20,
      colorOptions: ["Ruby Red","Pink Petal"," Coral Crush","Baby Pink"],
    },
  },
  {
    name: "Product 2",
    price: 200,
    inventory: {
      stock: 50,
      colorOptions: ["red", "baby pink"],
    },
  },
  {
    name: "Product 3",
    price: 300,
    inventory: {
      stock: 30,
      colorOptions: ["Burgundy Bliss", "Soft Peach"],
    },
  },
];

// Implement the changeColor function
function changeColor(product: Product, newColor: string) {
  // Update the color property
  product.inventory.colorOptions.push(newColor);

  // Adjust the price based on the new color
  if (newColor === "red") {
    product.price *= 1.1; // increase by 10%
  } else if (newColor === "baby pink") {
    product.price *= 0.95; // decrease by 5%
  }
}

// Display each product's details
products.forEach((product) => {
  console.log(`Name: ${product.name}`);
  console.log(`Price: ${product.price}`);
  console.log(`Stock: ${product.inventory.stock}`);
  console.log(`Available Colors: ${product.inventory.colorOptions.join(", ")}`);
  console.log("---");
});
