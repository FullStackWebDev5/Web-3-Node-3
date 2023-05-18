const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('./public'))

app.set('view engine', 'ejs')

app.get("/", (req, res) => {
  res.json("Working!");
});

const DUMMY_DB = {
	vaishnavi: {
    firstName: "Vaishnavi",
    batchNo: 3,
    techStack: "MERN",
    country: "India",
		hobbies: ['Playing', 'Singing', 'Dancing'],
		experience: '',
		image: 'https://www.w3schools.com/w3images/avatar6.png'
  },
	shakib: {
    firstName: "Shakib",
    batchNo: 4,
    techStack: "MEAN",
    country: "USA",
		hobbies: ['Coding'],
		experience: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
		image: ''
  },
	sujit: {
		firstName: "Sujit",
    batchNo: 5,
    techStack: "MEVN",
    country: "UAE",
		hobbies: ['Cycling', 'Swimming'],
		experience: '',
		image: 'https://www.nicepng.com/png/detail/186-1866063_dicks-out-for-harambe-sample-avatar.png'
	}
}

app.get("/user-details/:username", (req, res) => {
	let username = req.params.username;
	let userDetails = DUMMY_DB[username]
	if(userDetails) {
		res.render("user-details", userDetails);
	} else {
		res.render('not-found')
	}
});

app.get("/users/:id/posts/:postId", (req, res) => {
	console.log(req.params.id, req.params.postId)
	res.send()
});

app.listen(3000, () => {
	console.log('Server is running on port http://localhost:3000')
})






























/*
	View Engines: (Also known as Template engines)
	 - Dynamic HTML webpages
	 - res.render()
	 	- First argument: EJS file inside views folder
		- Second argument: Variables object (Key value pairs)

	- EJS: Embedded JavaScript templating (https://ejs.co/)

	- Express Route parameters
*/