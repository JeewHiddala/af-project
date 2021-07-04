const dotenv = require('dotenv');       //environmental variables
const Attendee = require('../models/attendee.model');
const Presenter = require('../models/presenter.model');
const Admin = require('../models/admin.model');
const Reviewer = require('../models/reviewer.model');
const Editor = require('../models/editor.model');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
dotenv.config();

//get jwt secret key
const JWT_SECRET = process.env.JWT_SECRET;

const login = async (req, res) => {
  const { username, password } = req.body;

  // Check empty fields
  if (!username || !password) {
    return res.status(500).send({ error: 'Please fill all fields' });
  }

  const user = await Attendee.findOne({ username });

  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign({ id: user._id }, JWT_SECRET);
    const data = user._id;
    const Utype = "attendee";
    res.json({
      token,
      data,
      Utype
    });
  } else {
    const userP = await Presenter.findOne({ username });
    if (userP && bcrypt.compareSync(password, userP.password)) {
      const token = jwt.sign({ id: userP._id }, JWT_SECRET);
      const data = userP._id;
      const Utype = "presenter";
      //res.status(200).send({ data: data._id });
      res.json({
        token,
        data,
        Utype
      });
    } else {
      let userName = username;
      const userA = await Admin.findOne({ userName });
      if (userA && !password.localeCompare(userA.password)) {
        const token = jwt.sign({ id: userA._id }, JWT_SECRET);
        const data = userA._id;
        const Utype = "admin";
        //res.status(200).send({ data: data._id });
        res.json({
          token,
          data,
          Utype
        });
      } else {
        let userName = username;
        const userR = await Reviewer.findOne({ userName });
        if (userR && !password.localeCompare(userR.password)) {
          const token = jwt.sign({ id: userR._id }, JWT_SECRET);
          const data = userR._id;
          const Utype = "reviewer";
          //res.status(200).send({ data: data._id });
          res.json({
            token,
            data,
            Utype
          });
        } else {
          let userName = username;
          const userE = await Editor.findOne({ userName });
          if (userE && !password.localeCompare(userE.password)) {
            const token = jwt.sign({ id: userE._id }, JWT_SECRET);
            const data = userE._id;
            const Utype = "editor";
            //res.status(200).send({ data: data._id });
            res.json({
              token,
              data,
              Utype
            });
          }
        }
      }
    }

    res.status(400).send({ error: 'Username or password is incorrect' });
  }
}
module.exports = {
  login
}