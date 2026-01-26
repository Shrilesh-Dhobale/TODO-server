import express from 'express';

const app = express();
app.use(express.json());

const PORT=8008;

const ToDo_Items = ["Learn Express.js", "Build a REST API", "Test the API"];

app.get('/health', (req, res) => {
    return res.json({
        success: true,
        message: "Server is healthy"
    })
});

app.get('/', (req, res) => {
    return res.json({
        success: true,
        message: "Welcome to TODO API"
    })
});

app.get('/todos', (req, res) => {
    return res.json({
        success: true,
        data: ToDo_Items,
        message: "List of TODO items"
    });
});

app.post('/todos', (req, res) => {
    const { todo } = req.body;

    if (!todo) {
        return res.json({
            success: false,
            message: "TODO item is empty"
        });
    }

    ToDo_Items.push(todo);
    return res.json({
        success: true,
        data: todo,
        message: "TODO item added successfully"
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});