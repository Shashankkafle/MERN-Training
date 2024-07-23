// const fetchUsers = () => {
//   return fetch("https://dummyjson.com/users").then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json(); // Return the parsed JSON directly
//   });
// };

// console.log(fetchUsers());

// fetchUsers()
//   .then((users) => {
//     console.log(users);
//   })
//   .catch((error) => {
//     console.error("Error fetching users:", error);
//   });

// const fetchUsers = async () => {
//   const response = await fetch("https://dummyjson.com/users");
//   if (!response.ok) {
//     throw new Error(`HTTP error! Status: ${response.status}`);
//   }
//   return response.json(); // Return the parsed JSON directly
// };

// (async () => {
//   const users = await fetchUsers();
//   console.log(users);
// })();

const fetchPokemanData = async (id) => {
  // function 1
  const response = fetch(`https://pokeapi.co/api/v2/pokemon/${id}`); // different fucnntion which is returned by fetch
  const result = await response;
  const pokemanData = await result.json();
  console.log(pokemanData);
  console.log("this is response", pokemanData.id, pokemanData.height);
};

fetchPokemanData(56);
