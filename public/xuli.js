let socket = io("http://localhost:3000/");

socket.on("login-fail", () => {
    $(".login-fail").html("userName đã tồn tại !!!");
})

socket.on("list-user-online", (listUsers) => {
    listUsers.forEach(element => {
        $("#chat").append("<div>Test</div>");
    });

    // listUsers.forEach(element => {
    //     $(".chat_list").html('cccccccc')
    // //     <div class="chat_people">
    // //     <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png"
    // //             alt="sunil"> </div>
    // //     <div class="chat_ib">
    // //         <h5>${element} <span class="chat_date">${new Date()}</span></h5>
    // //     </div>
    // // </div>
    // });
})
socket.on("login-success", () => {
    window.location.href = "http://localhost:3000/chat";
})
$(document).ready(() => {
    $(".btnLogin").click((e) => {
        // e.preventDefault();
        socket.emit("client-login", $("#login").val());
    })

})