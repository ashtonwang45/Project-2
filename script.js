// Raw JSON dataset from Project 1
const rawJsonData = `
{
  "products": [
    {
      "productId": "PROD-001",
      "name": "Mechanical Keyboard",
      "category": "Electronics",
      "price": 129.99,
      "stock": 45
    },
    {
      "productId": "PROD-002",
      "name": "4K Gaming Monitor",
      "category": "Electronics",
      "price": 499.50,
      "stock": 18
    },
    {
      "productId": "PROD-003",
      "name": "Noise-Cancelling Headphones",
      "category": "Audio",
      "price": 249.00,
      "stock": 32
    },
    {
      "productId": "PROD-004",
      "name": "Standing Desk",
      "category": "Furniture",
      "price": 389.00,
      "stock": 12
    },
    {
      "productId": "PROD-005",
      "name": "HD Webcam",
      "category": "Accessories",
      "price": 89.95,
      "stock": 25
    }
  ],
  "customers": [
    {
      "customerId": "CUST-001",
      "firstName": "Alice",
      "lastName": "Smith",
      "email": "alice.smith@example.com",
      "phone": "555-0101",
      "address": "123 Maple St",
      "city": "Springfield",
      "state": "IL",
      "zipCode": "62701",
      "status": "Active"
    },
    {
      "customerId": "CUST-002",
      "firstName": "Bob",
      "lastName": "Johnson",
      "email": "bob.j@example.com",
      "phone": "555-0102",
      "address": "456 Oak Ave",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "status": "Inactive"
    },
    {
      "customerId": "CUST-003",
      "firstName": "Carol",
      "lastName": "Williams",
      "email": "carol.w@example.com",
      "phone": "555-0103",
      "address": "789 Pine Rd",
      "city": "Gotham",
      "state": "NJ",
      "zipCode": "07001",
      "status": "Active"
    },
    {
      "customerId": "CUST-004",
      "firstName": "David",
      "lastName": "Brown",
      "email": "dbrown@example.com",
      "phone": "555-0104",
      "address": "321 Elm St",
      "city": "Star City",
      "state": "CA",
      "zipCode": "90210",
      "status": "Active"
    },
    {
      "customerId": "CUST-005",
      "firstName": "Eve",
      "lastName": "Davis",
      "email": "eve.davis@example.com",
      "phone": "555-0105",
      "address": "654 Birch Blvd",
      "city": "Central City",
      "state": "OH",
      "zipCode": "43215",
      "status": "Pending"
    }
  ],
  "offices": [
    {
      "officeId": "OFF-001",
      "name": "Global Headquarters",
      "address": "100 N Riverside Plaza",
      "city": "Chicago",
      "state": "IL",
      "phone": "312-555-0199",
      "employees": 240
    },
    {
      "officeId": "OFF-002",
      "name": "Northeast Branch",
      "address": "450 Lexington Ave",
      "city": "New York",
      "state": "NY",
      "phone": "212-555-0144",
      "employees": 115
    },
    {
      "officeId": "OFF-003",
      "name": "West Coast Tech Hub",
      "address": "500 Howard St",
      "city": "San Francisco",
      "state": "CA",
      "phone": "415-555-0177",
      "employees": 180
    },
    {
      "officeId": "OFF-004",
      "name": "Southern Operations",
      "address": "701 Brazos St",
      "city": "Austin",
      "state": "TX",
      "phone": "512-555-0122",
      "employees": 95
    }
  ]
}
`;

// 1. Ingest the data
const database = JSON.parse(rawJsonData);

// 2. Find container elements in the HTML document
const productsContainer = document.getElementById('products-container');
const customersContainer = document.getElementById('customers-container');
const officesContainer = document.getElementById('offices-container');

// 3. Iterate over products
console.log("=== PRODUCTS REPORT ===");
for (const product of database.products) {
  const id = product.productId;
  const name = product.name;
  const category = product.category;
  const price = `$${product.price.toFixed(2)}`;
  const stock = `${product.stock} units`;

  // Console output
  console.log(`Product ID:  ${id}`);
  console.log(`Name:        ${name}`);
  console.log(`Category:    ${category}`);
  console.log(`Price:       ${price}`);
  console.log(`Stock:       ${stock}`);
  console.log("--------------------------------------------------");

  // Create HTML card
  const cardDiv = document.createElement('div');
  cardDiv.className = 'card';
  cardDiv.innerHTML = `
    <h3>${name} (#${id})</h3>
    <p><strong>Category:</strong> ${category}</p>
    <p><strong>Price:</strong> ${price}</p>
    <p><strong>Stock Level:</strong> ${stock}</p>
  `;

  // Click to highlight
  cardDiv.addEventListener('click', () => {
    cardDiv.classList.toggle('highlighted');
  });

  productsContainer.appendChild(cardDiv);
}
console.log(`Total Products: ${database.products.length}\n\n`);

// 4. Iterate over customers
console.log("=== CUSTOMERS REPORT ===");
for (const customer of database.customers) {
  const id = customer.customerId;
  const fullName = `${customer.firstName} ${customer.lastName}`;
  const email = customer.email;
  const phone = customer.phone;
  const address = `${customer.address}, ${customer.city}, ${customer.state} ${customer.zipCode}`;
  const status = customer.status;

  // Console output
  console.log(`Customer ID: ${id}`);
  console.log(`Name:        ${fullName}`);
  console.log(`Contact:     ${email} | ${phone}`);
  console.log(`Address:     ${address}`);
  console.log(`Status:      ${status}`);
  console.log("--------------------------------------------------");

  // Create HTML card
  const cardDiv = document.createElement('div');
  cardDiv.className = 'card';
  cardDiv.innerHTML = `
    <h3>${fullName} (#${id})</h3>
    <p><strong>Contact:</strong> ${email} | ${phone}</p>
    <p><strong>Address:</strong> ${address}</p>
    <p><strong>Status:</strong> ${status}</p>
  `;

  // Click to highlight
  cardDiv.addEventListener('click', () => {
    cardDiv.classList.toggle('highlighted');
  });

  customersContainer.appendChild(cardDiv);
}
console.log(`Total Customers: ${database.customers.length}\n\n`);

// 5. Iterate over offices
console.log("=== OFFICES REPORT ===");
for (const office of database.offices) {
  const id = office.officeId;
  const name = office.name;
  const location = `${office.address}, ${office.city}, ${office.state}`;
  const phone = office.phone;
  const employees = `${office.employees} employees`;

  // Console output
  console.log(`Office ID:   ${id}`);
  console.log(`Name:        ${name}`);
  console.log(`Location:    ${location}`);
  console.log(`Phone:       ${phone}`);
  console.log(`Employees:   ${employees}`);
  console.log("--------------------------------------------------");

  // Create HTML card
  const cardDiv = document.createElement('div');
  cardDiv.className = 'card';
  cardDiv.innerHTML = `
    <h3>${name} (#${id})</h3>
    <p><strong>Location:</strong> ${location}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Staff Size:</strong> ${employees}</p>
  `;

  // Click to highlight
  cardDiv.addEventListener('click', () => {
    cardDiv.classList.toggle('highlighted');
  });

  officesContainer.appendChild(cardDiv);
}
console.log(`Total Offices: ${database.offices.length}\n\n`);

const totalProcessed = database.products.length + database.customers.length + database.offices.length;
console.log(`Total Database Records Processed: ${totalProcessed}`);
