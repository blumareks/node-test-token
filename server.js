const express = require('express');
const app = express();

const sessionToken = 'whateverTokenThisLikes123';

const port = process.env.PORT || 3001; // Use the port provided by the host or default to 3000
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

function ValidateToken(headerToken) {
    if(!headerToken || headerToken !== sessionToken) {
        return false;
    }
    return true;
}

// Define a route to handle incoming requests
app.get('/', (req, res) => {
res.send('Hello, Express!');
});

// Read (GET) a web token
app.get('/startWebSession', (req, res) => {
    const token = {
        token: sessionToken
    };
    res.json(token);
  });

// Read (GET) a specific player by ID
app.get('/player/:id', (req, res) => {
    const headerToken = req.get('token');
    const id = parseInt(req.params.id);
    const item = {
        "name": "Joe Bloggs",
        "age": 22,
        "gender": "male",
    };

    if (!item || !ValidateToken(headerToken)) {
      res.status(404).json({ error: 'Not authorised, no token supplied' });
    } else {

      if(id === 888) {
        res.json(item);
      }
      else {
        res.status(404).json({ error: `No player found with id ${id}` });
      }
    }
});

// Post player information
app.get('/playerInfo/:id', (req, res) => {

    const headerToken = req.get('token');

    if(!headerToken || !ValidateToken(headerToken)) {
        res.status(403).json({ error: 'Not authorised, no token supplied' });
    }

    const postData = JSON.stringify({
        trackingID: "200234",
        statType: "info",
        startDatetime: "2024-11-04T16:39:40.022Z",
        startDateTimeOffset: "2022-11-04T16:39:40.022Z",
        endDatetime: "2024-11-04T16:39:40.022Z",
        endDateTimeOffset: "2024-11-04T16:39:40.022Z",
        gamingDate: "2024-11-04T16:39:40.022Z",
        machineID: "Acme1",
        shiftID: "1000",
        timePlayed: 0,
        denom: 0,
        cashIn: 0,
        promoPlay: 0,
        moneyPlay: 0,
        cashOut: 0,
        jackpot: 0,
        theoWin: 0,
      });

    // Send the POST data
    res.write(postData);
    res.end();
});