
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {

    const userMessage = req.body.message;

    if (!userMessage) {
        return res.json({
            reply: "Please enter a message."
        });
    }

    // AI API connection yahan add hoga
    // API key ko yahan directly mat rakhna

    res.json({
        reply: "You asked: " + userMessage + 
        "\n\nAI backend is ready. API connection will be added next."
    });

});

app.listen(3000, () => {
    console.log("ToolNest server running on port 3000");
});
```
