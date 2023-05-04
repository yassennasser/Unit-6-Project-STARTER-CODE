// Declare your genre arrays here
let action=["https://assets-prd.ignimgs.com/2022/05/24/call-of-duty-modern-warfare-2-button-02-1653417394041.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQZB2Scy1UMToDfAZEaGoo8rze4S37xRRnfg1cktulfg&usqp=CAU&ec=48665698","https://assets-prd.ignimgs.com/2022/03/11/image002-1646960925814.png"];
console.log(action);
//let favlove=action[1];
let fun=["https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000047794/40f9e2f6d344d2607d4be72c6c4ebd3c18717ff87a56d6bbc303c42e58dd570d","https://m.media-amazon.com/images/M/MV5BMzgyZWEzMDgtMzI0YS00ZDMwLTllNjQtZjE3ZmVkNWM3YzliXkEyXkFqcGdeQXVyMTYxNzI4OTYx._V1_FMjpg_UX1000_.jpg"
,"https://cdn1.epicgames.com/offer/9773aa1aa54f4f7b80e44bef04986cea/EGS_RocketLeague_PsyonixLLC_S3_2560x1440-1434001758900f513cab0c885121744a"
];
console.log(fun);
//let bestfunny=fun[2];

let horror=["https://static1.thegamerimages.com/wordpress/wp-content/uploads/2020/12/PHASMOPHOBIA.jpg",
"https://play-lh.googleusercontent.com/yT_LBq_tyKeIDohKDsqN_Qt18jGIPUYIxY2C-1-E2YA9Qd60uZW08pua17qBmIiDPA=w240-h480-rw", "https://play-lh.googleusercontent.com/Nw94mAWc9yMVq0jqzDesYe6r0uh1532D6TDMmCl2W2rvANyn2aRWief3zkk-lkr8rA"];
console.log(horror);
//let bestorror=horror[3];
// Make sure to declare your HTML elements as variables!
let result = document.querySelector(".result");
let Button1 = document.querySelector(".Button1");
let Button2 = document.querySelector(".Button2");
// Submit Button
let submitButton = document.querySelector(".button1");
submitButton.onclick = function(){
let genreInput = document.querySelector(".input1").value;
    if(genreInput === "action"){
        for (let actiongame of action) {
           let img = "<img src=" + actiongame + ">";
        result.insertAdiacentHTML("beforeend", img);
        }
    } else if (genreInput === "fun") {
        for(let fungame of fun) {
            let img = "<img src=" + fungame + ">";   
            result.insertAdjacentHTML("beforeend", img);}
    } else if (genreInput === "horror"){
        for (let horrorgame of horror) {
           let img = "<img src=" + horrorgame + ">";
           result.insertAdjacentHTML("beforeend", img);}
    }
    
};


let suggestbutton=document.querySelector(".button2");
suggestbutton.onclick= function() {
    let photoInput=
document.querySelector (".input2").value;
    action.push(photoInput);
    fun.push(photoInput);
    horror.push(photoInput);
    let img = "<img src=" + photoInput + ">";
    result.insertAdjacentHTML("beforebegin",img + "yassen");
};
    
