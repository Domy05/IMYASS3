<template>
  <div>
    <header>
      <h1>My Blog</h1>
      <nav>
        <NuxtLink to="/">Home</NuxtLink> |
        <NuxtLink to="/search">Search</NuxtLink>
      </nav>
    </header>

    <main>
      <NuxtPage /> <!-- this is where the page content renders -->
    </main>
    <!-- <footer>
      <p>Dominiqu Nigatu</p>
      <p>Contact at: <a href="dom.nigatu@imy.com">dom.nigatu@imy.com</a></p>
      <p>&copy; 2025 My Blog. All rights reserved.</p>
    </footer> -->
  </div>
</template>

<style scoped>
header {
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
  border-bottom: 2px solid #444;
}
header h1 {
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
}
nav {
  margin-top: 0.5rem;
}
nav a {
  color: white;
  margin: 0 0.5rem;
  text-decoration: none;
  font-weight: bold;
}
nav a:hover {
  text-decoration: underline;
}

main {
  padding: 2rem;
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

/* footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
  border-top: 2px solid #444;
}
footer p {
  margin: 0.5rem 0;
}
footer a {
  color: #00bfff;
  text-decoration: none;
}
footer a:hover {
  text-decoration: underline;
} */
</style>