const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'ssc',
  password: 'postgres',
  port: 5432,
});

const getUsers = async (request, response) => {
  const users = await pool.query('SELECT * FROM users', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const validateUser = async (request, response) => {
  let submittedUsername = request.body.username;
  let query = 'SELECT username, password FROM users WHERE username=\'' + submittedUsername + '\''
  const users = await pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    let hold = results.rows;
    let password = '';
    if (hold.length > 0) {
      password = hold[0].password;
    }
    let success = password == request.body.password;
    response.status(200).json({"value": success});
  })
}

const signupUser = async (request, response) => {
  let submittedUsername = request.body.username;
  let submittedPassword = request.body.password;
  let query1 = 'SELECT username FROM users WHERE username=\'' + submittedUsername + '\''
  let exists = false;
  let query2 = 'INSERT INTO users(username, password) VALUES(\'' + submittedUsername + '\', \'' + submittedPassword + '\')'
  const users = await pool.query(query1, async (error, results) => {
    if (error) {
      throw error
    }
    exists = results.rowCount > 0;
    if (exists) {
      response.status(200).json({"value": false});
    } else {
      const use = await pool.query(query2, (e2, r2) => {
        if (error) {
          throw error
        }
        response.status(200).json({"value": true});
      })
    }
  })
}

const getUserInfo = async (request, response) => {
  let submittedUsername = request.body.username;
  let query = 'SELECT fname, lname, major, gradyear FROM profiles WHERE username=\'' + submittedUsername + '\''
  const users = await pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    console.log(results.rows);
    response.status(200).json(results.rows)
  })
}

const setUserInfo = async (request, response) => {
  let submittedUsername = request.body.username;
  let submittedFirstName = request.body.firstName;
  let submittedLastName = request.body.lastName;
  let submittedMajor = request.body.major;
  let submittedGradYear = request.body.gradYear;
  let query = 'INSERT INTO profiles(username, fname, lname, major, gradyear) VALUES (\'' + submittedUsername + '\', \'' + submittedFirstName + '\', \'' + submittedLastName + '\', \'' + submittedMajor + '\', \'' + submittedGradYear + '\')'
  const users = await pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    console.log(results.rows);
    response.status(200).json(results.rows)
  })
}

module.exports = {
    getUsers,
    validateUser,
    signupUser,
    getUserInfo,
    setUserInfo
  }