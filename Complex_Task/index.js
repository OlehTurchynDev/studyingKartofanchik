// Create a class Product with the following properties:

// id (a unique identifier for the product)
// name (the name of the product)
// price (the price of the product)
// category (the category to which the product belongs)
// inStock (the quantity of the product in stock)
// Create a class User with the following properties:

// id (a unique identifier for the user)
// name (the user's name)
// email (the user's email address)
// cart (an array to store products added to the user's shopping cart)
// Create a class Order with the following properties:

// id (a unique identifier for the order)
// user (an instance of the User class representing the customer who placed the order)
// items (an array of objects representing the products and their quantities in the order)
// Create a class Marketplace with the following properties and methods:

// products (an array to store instances of the Product class)
// users (an array to store instances of the User class)
// Methods:

// addProduct(product) - Adds an instance of the Product class to the marketplace's inventory.
// addUser(user) - Adds an instance of the User class to the marketplace's user list.
// addToCart(user, productId, quantity) - Adds a specified quantity of a product to a user's shopping cart.
// checkout(user) - Completes a purchase for a user, creating an instance of the Order class with the items from their cart.
// getTotalSalesByCategory(category) - Returns the total sales amount for products in a specific category.
// getMostValuableCustomer() - Returns the user who has made the highest total purchase amount.
// getOutOfStockProducts() - Returns a list of products that are out of stock.
// You need to implement these classes and methods, allowing for the management of products, users, orders, and advanced operations such as calculating total sales, identifying the most valuable customer, and more.