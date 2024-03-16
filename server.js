// connectToMongoDB();
const express = require('express');
const path = require('path');
const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');

const app = express();
const PORT = process.env.PORT || 3000;

const isLogin = true;

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB connection URL and database name
const url = 'mongodb://localhost:27017';
const dbName = 'coursera';

async function connectToMongoDB() {
  try {
    const client = new MongoClient(url);
    await client.connect();
    console.log('Connected to MongoDB');
    const db = client.db(dbName);

    // Start the server after successfully connecting to MongoDB
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });

    // Endpoint to serve the homepage
    app.get("/", (req, res)=>{
      res.sendFile(__dirname + "/public/homepage.html");
    });

    // Endpoint to serve the login page
    app.get('/login', (req, res) => {
      // Check if redirected from signup page
      const message = req.query.signup ? 'You are now a registered user. Please login.' : null;
      res.render('login.ejs', { isLogin: true, message });
    });

    // Endpoint for login
    app.post('/login', async (req, res) => {
      const { username, password } = req.body;
      const collection = db.collection('users');
      const user = await collection.findOne({ username });
      if (user && await bcrypt.compare(password, user.password)) {
        // Redirect to dashboard after successful login
        res.redirect('/dashboard');
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    });

    app.get("/about", (req, res)=>{
      res.sendFile(__dirname + "/public/about.html")
    })

    app.get("/courses", (req, res)=>{
      res.sendFile(__dirname + "/public/courses.html");
    })

    app.get("/teachers", (req, res)=>{
      res.sendFile(__dirname + "/public/teacher.html");
    })

    app.get("/faqs", (req, res)=>{
      res.sendFile(__dirname + "/public/faqs.html");
    })

    app.get("/contact", (req, res)=>{
      res.sendFile(__dirname + "/public/contact.html")
    })

    // Endpoint to serve the signup page
    app.get('/signup', (req, res) => {
      res.render('login', { isLogin: false });
    });

    // Endpoint for signup
    app.post('/signup', async (req, res) => {
      const { username, password } = req.body;
      if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
      }
      const hashedPassword = await bcrypt.hash(password, 10); // 10 rounds of salting
      const collection = db.collection('users');
      
      // Check if username exists
      const existingUser = await collection.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ message: 'Username already exists' });
      }

      try {
        await collection.insertOne({ username, password: hashedPassword });
        userLogin = true
        res.redirect('/login?signup=true',{
          userLogin: userLogin
        });
      } catch (error) {
        console.error('Error inserting user into the database:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
    });

   
    // Endpoint to serve the dashboard page
  app.get('/dashboard', (req, res) => {
    // Assuming you have a dashboard.ejs file in your views directory
    res.sendFile(__dirname + "/public/homepage.html"); 
  });

  app.get("/create-course", (req, res)=>{
    res.sendFile(__dirname + "/public/add-course.html");
  })

  app.post("/add_course", (req, res)=>{
    res.send("The course is added");
  })

    
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}

connectToMongoDB();
