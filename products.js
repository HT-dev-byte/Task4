const products = [
  { name: "Laptop", category: "electronics", price: 750, rating: 4.5 },
  { name: "Shirt", category: "clothing", price: 40, rating: 4.0 },
  { name: "Phone", category: "electronics", price: 550, rating: 4.8 },
  { name: "Jeans", category: "clothing", price: 30, rating: 3.9 }
];

function renderProducts() {
  const container = document.getElementById('productList');
  const categorySelect = document.getElementById('categoryFilter');
  const sortSelect = document.getElementById('sortFilter');

  if (!container || !(categorySelect instanceof HTMLSelectElement) || !(sortSelect instanceof HTMLSelectElement)) {
    return; // Exit safely if elements are missing
  }

  const category = categorySelect.value;
  const sortBy = sortSelect.value;
  let filtered = [...products];

  if (category !== 'all') {
    filtered = filtered.filter(p => p.category === category);
  }

  if (sortBy === 'price') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  container.innerHTML = '';
  filtered.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<h3>${p.name}</h3>
                      <p>Category: ${p.category}</p>
                      <p>Price: $${p.price}</p>
                      <p>Rating: ⭐${p.rating}</p>`;
    container.appendChild(card);
  });
}
