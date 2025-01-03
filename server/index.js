const cookieSession = require("cookie-session");
const authRoute = require("./routes/auth");
const passport = require("passport");
const express = require("express");
const cors = require("cors");
require('dotenv').config()
require("./passport.js");

const app = express();

app.use(                                                                         // a day
    cookieSession({ name: "session", keys: [process.env.COOKIE_SESSION_KEY], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize())
app.use(passport.session())

app.use(
    cors({
      origin: "http://localhost:3000",
      methods: "GET,POST,PUT,DELETE",
      credentials: true,
    })
);

app.use("/auth", authRoute)

app.listen("5000", () => console.log('listening on port 5000'))