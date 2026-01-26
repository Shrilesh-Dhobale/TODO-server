import express from 'express';

const app = express();
app.use(express.json());

const PORT=8008;

app.get('/health', (req, res) => {
    return res.json({
        success: true,
        message: "Server is healthy"
    })
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});