const express = require('express');
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");

const app = express();
const port = 3177;

dotenv.config();

app.use(cookieParser());
app.use(express.json());
app.use(
	cors({
		origin: [
			"http://localhost:3000","https://blood-donation-client-5pa3.onrender.com",
		],
		credentials: true,
	})
);

const connectDB = async ()=>{
	try {
		mongoose.connect(process.env.CONNECT, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (e) => {
			console.log(e ? e : "Connected successfully to database");
		});
	} catch (error) {
		console.log("Connection failed..");
	}
}
connectDB();

app.use("/auth", require("./routers/authRouter"));
app.use("/user", require("./routers/userRouter"));
app.use("/bank", require("./routers/bankRouter"));
app.use("/camps", require("./routers/campRouter"));

app.listen(port, () =>
	console.log(`Server running at http://localhost:${port}`)
);