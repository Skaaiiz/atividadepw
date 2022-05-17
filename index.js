// index.js

/**
 * Required External Modules
 */

 const express = require("express");
 const path = require("path");

/**
 * App Variables
 */

 const app = express();
 const port = process.env.PORT || "8000";

/**
 *  App Configuration
 */

 app.set("views", path.join(__dirname, "views"));
 app.set("view engine", "ejs");

/**
 * Routes Definitions
 */

  app.get("/", (req, res) => {
    res.render("home", { title: "Home" });
  });

  app.get("/login", (req, res) => {
    res.render("login", { title: "Login" });
  });

  app.get("/signin", (req, res) => {
    res.render("signIn", { title: "SignIn" });
  });

  app.get("/about", (req, res) => {
    res.render("about", { title: "About" });
  });

  app.get("/mainNotLogged", (req, res) => {
    res.render("mainNotLogged", { title: "Main" });
  });

/**
 * Server Activation
 */

 app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });