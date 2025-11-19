// test.js
// external test client for UFC GraphQL server

const axios = require("axios");

async function runTests() {
  const query = `
    query {
      fighterByName(name: "Max Holloway") {
        fullName
        nickname
        wins
        losses
        heightMeters
        weightClass
        fightingOutOf
      }
    }
  `;

  try {
    const res = await axios.post("http://localhost:4000/", {
      query,
    });

    console.log(JSON.stringify(res.data, null, 2));
  } catch (err) {
    console.error("Request failed:", err.message);
  }
}

runTests();
