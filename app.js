const express = require('express');
const app = express();
const port = 3000;
const server = require('http').Server(app);
const io = require('socket.io')(server);
app.use(express.static('./public/'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('login');
})
app.get('/chat', (req, res) => {
    res.render('chat');
})
var users = ["a"];
io.on("connection", (socket) => {
    console.log("user connection" + socket.id);
    socket.on("client-login", (data) => {
        if (users.indexOf(data) >= 0) {
            socket.emit("login-fail");
        } else {
            socket.userName = data;
            users.push(data);
            // io.sockets.emit("list-user-online", users);
            socket.emit("login-success", data);
        }
    })
})
server.listen(port, () => {
    console.log(`server start port http://localhost:${port}`);
})