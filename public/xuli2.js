let socket = io("http://localhost:3000/chat");
socket.on("list-user-online", (listUsers) => {
    // $(".chat_list").html("")
    $(".chat_list").html('cccccccc')
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
$(document).ready(() => {

});