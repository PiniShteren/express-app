const express = require('express');
const app = express();
const PORT = 8000;

app.get("/" ,(req, res) => {
      res.send("Hello to my server AWS!");
});

app.get("/products" ,(req, res) => {
      res.send([
            {
                  id: 34082,
                  name: "Bamba",
                  price: 23
            },
            {
                  id: 33452,
                  name: "Tzips",
                  price: 20
            },
            {
                  id: 836643,
                  name: "Bisli",
                  price: 21
            }
      ]);
});

app.listen(PORT, () => {
      console.log(`Server runnig on ${PORT}`);
});
