const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  env: {
    GOOGLE_MAPS_KEY: process.env.GOOGLE_MAPS_KEY,
  }
}
