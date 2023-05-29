const express = require("express");

const cors = require("cors");

const cookieParser = require("cookie-parser");

const bodyParser = require("body-parser");

const csrf = require("csurf");

const routes = require("./routes/routes");

const sequelize = require("./utils/database");

const app = express();

app.use(bodyParser.json());

var csrfProtect = csrf({ cookie: true });

app.use(cors());

app.use("/user", routes);

app.get("/user/contact", csrfProtect, function (req, res) {
  // Generate a tocken and send it to the view
  res.render("send", { csrfToken: req.csrfToken() });
});

app.use(function (req, res, next) {
  res.locals.csrf = req.csrfToken();
});

sequelize.sync().then(() => {
  app.listen(4000);
});
