async function fetchUserData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const dataContainer = document.getElementById("api-data");
  try {
    const response = await fetch(apiUrl);
    const users = await response.json();
    dataContainer.innerHTML = "";
    const userList = document.createElement("ul");

    users.forEach((element) => {
      const li = document.createElement("li");
      li.textContent = element.name;
      userList.appendChild(li);
    });

    dataContainer.appendChild(userList);
   
  } catch (error) {
    console.error(error);
    dataContainer.innerHTML = '';
    dataContainer.textContent = 'Failed to load user data.'
  }
}
document.addEventListener('DOMContentLoaded',fetchUserData)
