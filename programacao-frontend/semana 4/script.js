async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const users = await response.json();
    displayUsers(users);
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
  }
}
// inicialmente eu tenho uma função que faz o contato com a API e está inserida em uma estrutura try catch, ela faz tratamento de erros
function displayUsers(users) {
  const userList = document.getElementById("user-list");
  userList.innerHTML = ""; // Limpa a lista existente

  users.forEach((user) => {
    const listItem = document.createElement("li");
    listItem.textContent = user.name;
    listItem.onclick = () => showUserDetails(user);
    userList.appendChild(listItem);
  });
}
// essa função captura o ID da UL e cria 5 sub-itens, sendo eles: nome, email, enddereço, telefone e site.
fetchUsers(); // Chama a função ao carregar a página

function showUserDetails(user) {
  const userDetails = document.getElementById("user-details");
  userDetails.innerHTML = `
        <h1>${user.name}</h1>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.phone}</p>
        <p>Website: <a href="http://${user.website}" target="_blank">${user.website}</a></p>
        <p>Address: ${user.address.street}, ${user.address.city}</p>
    `;
}
