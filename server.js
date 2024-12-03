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
    res.json(postData);
    res.end();
});

// New test data

// Post PlayerById information
app.get('/PlayerById/:id', (req, res) => {

  const headerToken = req.get('token');
  const id = parseInt(req.params.id);
  console.log("/PlayerById/:id "+ id)
  if(!headerToken || !ValidateToken(headerToken)) {
      res.status(403).json({ error: 'Not authorised, no token supplied' });
  }

/**
 * 
 * {
  "PlayerID": "177224",
  "PlayerProfile": {
    "FirstName": "EnrlORDS",
    "LastName1": "AutoTKOA",
    "Suffix": "Ms.",
    "PreferredName": "EnrlORDS",
    "FullName": "EnrlORDS AutoTKOA Ms.",
    "PlayerRank": "0",
    "RankName": "Evergreen",
    "BirthDate": "1995-01-01T00:00:00",
    "GenderType": "F",
    "LocaleCode": "E",
    "PlayerProperty": "1",
    "JunketRepId": "-1",
    "RegisteredDateTime": "2024-11-04T00:00:00",
    "RegisteredEmployee": "1382",
    "PlayerActive": true,
    "GUID": "yyy",
    "ExternalSystemId": null,
    "SourceCode": "ORCLClient"
  }
}
 * 
 */


  const postData = JSON.stringify({
    "PlayerID": "177224",
    "PlayerProfile": {
      "FirstName": "EnrlORDS",
      "LastName1": "AutoTKOA",
      "Suffix": "Ms.",
      "PreferredName": "EnrlORDS",
      "FullName": "EnrlORDS AutoTKOA Ms.",
      "PlayerRank": "0",
      "RankName": "Evergreen",
      "BirthDate": "1995-01-01T00:00:00",
      "GenderType": "F",
      "LocaleCode": "E",
      "PlayerProperty": "1",
      "JunketRepId": "-1",
      "RegisteredDateTime": "2024-11-04T00:00:00",
      "RegisteredEmployee": "1382",
      "PlayerActive": true,
      "GUID": "yyy",
      "ExternalSystemId": null,
      "SourceCode": "ORCLClient"
    }
  });

  // Send the POST data
  res.json(postData);
  res.end();
});


// Post player information
app.get('/PlayerInfo_Get/:id', (req, res) => {

  const headerToken = req.get('token');
  const id = parseInt(req.params.id);
  console.log("/playerInfo_Get/:id "+ id)

  if(!headerToken || !ValidateToken(headerToken)) {
      res.status(403).json({ error: 'Not authorised, no token supplied' });
  }

/**
 * Request - GET
- Authorization (for token, accept any string)

*/

  const postData = JSON.stringify({
    "Items": [    
      {
        "PlayerID": "177297",
        "PlayerProfile": {
          "FirstName": "one",
          "LastName1": "test",
          "PreferredName": "one",
          "FullName": "one test",
          "PlayerRank": "0",
          "RankName": "Evergreen",
          "BirthDate": "1975-10-10T00:00:00",
          "MaritalState": "",
          "GenderType": "U",
          "LocaleCode": "E",
          "PlayerProperty": "1",
          "JunketRepId": "-1",
          "RegisteredDateTime": "2024-11-18T00:00:00",
          "RegisteredEmployee": "1382",
          "PlayerActive": true,
          "GUID": "yyy",
          "ExternalSystemId": null,
          "SourceCode": "ORCLClient"
        }
      },
      {
        "PlayerID": "177296",
        "PlayerProfile": {
          "FirstName": "One",
          "LastName1": "Yadav",
          "PreferredName": "One",
          "FullName": "One Yadav",
          "PlayerRank": "0",
          "RankName": "Evergreen",
          "BirthDate": "1999-01-01T00:00:00",
          "MaritalState": "",
          "GenderType": "U",
          "LocaleCode": "E",
          "PlayerProperty": "1",
          "JunketRepId": "-1",
          "RegisteredDateTime": "2024-11-18T00:00:00",
          "RegisteredEmployee": "1382",
          "PlayerActive": true,
          "GUID": "yyy1",
          "ExternalSystemId": null,
          "SourceCode": "ORCLClient"
        }
      },
      {
        "PlayerID": "177289",
        "PlayerProfile": {
          "FirstName": "EnrlVKOL",
          "LastName1": "AutoRIVV",
          "PreferredName": "EnrlVKOL",
          "FullName": "EnrlVKOL AutoRIVV Ms",
          "PlayerRank": "0",
          "RankName": "Evergreen",
          "BirthDate": "1995-01-01T00:00:00",
          "MaritalState": "",
          "GenderType": "F",
          "LocaleCode": "E",
          "PlayerProperty": "1",
          "JunketRepId": "-1",
          "RegisteredDateTime": "2024-11-18T00:00:00",
          "RegisteredEmployee": "1382",
          "PlayerActive": true,
          "GUID": "yyy2",
          "ExternalSystemId": null,
          "SourceCode": "ORCLClient"
        }
      },
      {
        "PlayerID": "177288",
        "PlayerProfile": {
          "FirstName": "VOneEZVD",
          "LastName1": "AutEnrlIGIC",
          "PreferredName": "VOneEZVD",
          "FullName": "VOneEZVD AutEnrlIGIC Ms",
          "PlayerRank": "0",
          "RankName": "Evergreen",
          "BirthDate": "1985-01-01T00:00:00",
          "MaritalState": "",
          "GenderType": "F",
          "LocaleCode": "E",
          "PlayerProperty": "1",
          "JunketRepId": "-1",
          "RegisteredDateTime": "2024-11-18T00:00:00",
          "RegisteredEmployee": "1382",
          "PlayerActive": true,
          "GUID": "yyy3",
          "ExternalSystemId": null,
          "SourceCode": "ORCLClient"
        }
      },
      {
        "PlayerID": "177287",
        "PlayerProfile": {
          "FirstName": "EnrlFTEN",
          "LastName1": "AutoMNQA",
          "PreferredName": "EnrlFTEN",
          "FullName": "EnrlFTEN AutoMNQA Ms",
          "PlayerRank": "0",
          "RankName": "Evergreen",
          "BirthDate": "1995-01-01T00:00:00",
          "MaritalState": "",
          "GenderType": "F",
          "LocaleCode": "E",
          "PlayerProperty": "1",
          "JunketRepId": "-1",
          "RegisteredDateTime": "2024-11-18T00:00:00",
          "RegisteredEmployee": "1382",
          "PlayerActive": true,
          "GUID": "yyy4",
          "ExternalSystemId": null,
          "SourceCode": "ORCLClient"
        }
      },
    ],
    "NextPageLink": "https://my.secret.website.com/ATI.nConnectOasis/api/v1/PlayerInfo?$skip=176276"
  });

  // Send the POST data
  res.json(postData);
  res.end();
});

// Post player information
app.get('/PlayerInfo_AccountsById/:id', (req, res) => {

  const headerToken = req.get('token');
  const id = parseInt(req.params.id);
  console.log("/PlayerInfo_AccountsById/:id "+ id)

  if(!headerToken || !ValidateToken(headerToken)) {
      res.status(403).json({ error: 'Not authorised, no token supplied' });
  }

/**
 * Request - GET
- Authorization (for token, accept any string)
- PlayerId string
- AccountId string

{
  "PlayerAccount": [
    {
      "AccountId": "654480",
      "AccountName": "Points",
      "AccountType": "1",
      "ExpirationDays": 0,
      "AccountActiveField": true,
      "AccountOwnership": true
    }
  ],
  "PlayerBalance": [
    {
      "AccountId": "654480",
      "AccountFrozenDate": null,
      "AccountBalance": 0
    }
  ]
}
 */

  const postData = JSON.stringify({
    "PlayerAccount": [
      {
        "AccountId": "654480",
        "AccountName": "Points",
        "AccountType": "1",
        "ExpirationDays": 0,
        "AccountActiveField": true,
        "AccountOwnership": true
      }
    ],
    "PlayerBalance": [
      {
        "AccountId": "654480",
        "AccountFrozenDate": null,
        "AccountBalance": 0
      }
    ]
  });

  // Send the POST data
  res.json(postData);
  res.end();
});

// Post player information
app.get('/PlayerInfo_Accounts/:id', (req, res) => {

  const headerToken = req.get('token');
  const id = parseInt(req.params.id);
  console.log("/playerInfo_Accounts/:id "+ id)

  if(!headerToken || !ValidateToken(headerToken)) {
      res.status(403).json({ error: 'Not authorised, no token supplied' });
  }

/**
 * Request - GET
- Authorization (for token, accept any string)
- PlayerId string


[
  {
    "PlayerAccount": [
      {
        "AccountId": "654480",
        "AccountName": "Points",
        "AccountType": "1",
        "ExpirationDays": 0,
        "AccountActiveField": true,
        "AccountOwnership": true
      },
      {
        "AccountId": "654481",
        "AccountName": "Comps",
        "AccountType": "2",
        "ExpirationDays": 0,
        "AccountActiveField": true,
        "AccountOwnership": true
      },
      {
        "AccountId": "654490",
        "AccountName": "Promo",
        "AccountType": "4",
        "ExpirationDays": 0,
        "AccountActiveField": true,
        "AccountOwnership": true
      }
    ],
    "PlayerBalance": [
      {
        "AccountId": "654480",
        "AccountFrozenDate": null,
        "AccountBalance": 0
      },
      {
        "AccountId": "654481",
        "AccountFrozenDate": null,
        "AccountBalance": 0
      },
      {
        "AccountId": "654490",
        "AccountFrozenDate": null,
        "AccountBalance": 0
      }
    ]
  }
]
 */



  const postData = JSON.stringify([
    {
      "PlayerAccount": [
        {
          "AccountId": "654480",
          "AccountName": "Points",
          "AccountType": "1",
          "ExpirationDays": 0,
          "AccountActiveField": true,
          "AccountOwnership": true
        },
        {
          "AccountId": "654481",
          "AccountName": "Comps",
          "AccountType": "2",
          "ExpirationDays": 0,
          "AccountActiveField": true,
          "AccountOwnership": true
        },
        {
          "AccountId": "654490",
          "AccountName": "Promo",
          "AccountType": "4",
          "ExpirationDays": 0,
          "AccountActiveField": true,
          "AccountOwnership": true
        }
      ],
      "PlayerBalance": [
        {
          "AccountId": "654480",
          "AccountFrozenDate": null,
          "AccountBalance": 0
        },
        {
          "AccountId": "654481",
          "AccountFrozenDate": null,
          "AccountBalance": 0
        },
        {
          "AccountId": "654490",
          "AccountFrozenDate": null,
          "AccountBalance": 0
        }
      ]
    }
  ]);

  // Send the POST data
  res.json(postData);
  res.end();
});
