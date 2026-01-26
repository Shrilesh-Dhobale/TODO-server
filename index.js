import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

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

app.delete('/todos', (req, res) => {
    const { todo } = req.body;

    const index = ToDo_Items.indexOf(todo);
    if (index === -1) {
        return res.json({
            success: false,
            message: "TODO item not found"
        });
    }
    else {
        ToDo_Items.splice(index, 1);
        return res.json({
            success: true,
            data: todo,
            message: "TODO item deleted successfully"
        });
    }   
});

app.put('/todos', (req, res) => {
    const { oldTodo, newTodo } = req.body;
    const index = ToDo_Items.indexOf(oldTodo);

    if (index === -1) {
        return res.json({
            success: false,
            message: "Old TODO item not found"
        });
    }
    ToDo_Items[index] = newTodo;
    return res.json({
        success: true,
        data: newTodo,
        message: "TODO item updated successfully"
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});