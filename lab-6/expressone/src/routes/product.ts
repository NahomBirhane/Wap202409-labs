import Router from 'express';

const router = Router();

// Predefined list of IT courses (products)
const itCourses = [
  { id: 1, name: "Full Stack Web Development", price: "$1000" },
  { id: 2, name: "Data Science and Machine Learning", price: "$1200" },
  { id: 3, name: "Cybersecurity Fundamentals", price: "$900" },
  { id: 4, name: "Cloud Computing with AWS", price: "$1100" },
  { id: 5, name: "DevOps Engineering", price: "$1050" },
  { id: 6, name: "Artificial Intelligence with Python", price: "$1250" },
  { id: 7, name: "Mobile App Development with React Native", price: "$950" }
];

// GET route to display the list of IT courses (products) in HTML
router.get('/', (req, res) => {
  let coursesList = `<h3>List of IT Courses (Products):</h3><ul>`;
  
  // Dynamically generate list items for each product (IT course)
  itCourses.forEach(course => {
    coursesList += `<li>${course.id}. ${course.name} - ${course.price}</li>`;
  });
  
  coursesList += `</ul>`;
  
  // Send HTML response
  res.send(coursesList);
});

// POST route to add a new product (IT course)
router.post('/', (req, res) => {
  const newProduct = req.body;
  itCourses.push({ id: itCourses.length + 1, ...newProduct });
  res.send(`Product added: ${JSON.stringify(newProduct)}`);
});

export default router;
