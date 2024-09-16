import Router from 'express';

const router = Router();

// Predefined list of users
const users = [
  { id: 1, name: "Nahom Birhane" },
  { id: 2, name: "Henok James" },
  { id: 3, name: "Michal Tesfu" },
  { id: 4, name: "Mengis Tekle" }
];

// GET route to display the list of users in HTML
router.get('/', (req, res) => {
  let userList = `<h3>List of Users:</h3><ul>`;
  
  // Dynamically generate list items for each user
  users.forEach(user => {
    userList += `<li>${user.id}. ${user.name}</li>`;
  });
  
  userList += `</ul>`;
  
  // Send HTML response
  res.send(userList);
});

// POST route to add a new user
router.post('/', (req, res) => {
  const newUser = req.body;
  
  // Add new user to the array, assigning an ID based on the current length
  users.push({ id: users.length + 1, ...newUser });
  
  // Respond with a confirmation message and the newly added user
  res.send(`User Added: ${JSON.stringify(newUser)}`);
});

export default router;
