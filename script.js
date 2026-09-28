


fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => console.log("2. Fetch con Promesa:", data))
  .catch(error => console.error("Error en Fetch:", error));



async function obtenerConAsyncAwait() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    console.log("3. Async/Await:", data);
  } catch (error) {
    console.error("Error en Async/Await:", error);
  }
}

obtenerConAsyncAwait();