document.addEventListener('DOMContentLoaded', ()=>{ startTimer = setInterval(counterIncrease,1000)}
)
document.addEventListener('DOMContentLoaded', handleComment)
// Set up const
const counterDisplay = document.querySelector("#counter")
const minusBtn = document.querySelector("#minus") 
const plusBtn = document.querySelector("#plus")
const heartBtn = document.querySelector("#heart")
const pauseBtn = document.querySelector("#pause")
let count = parseInt(counterDisplay.textContent)
const submitBtn = document.querySelector("#submit")




//DOM render functions  
    
function counterIncrease(){
    counterDisplay.textContent = count++
}

function counterDecreaseOne(){
    counterDisplay.textContent = count -=1
}
function counterIncreaseOne(){
    counterDisplay.textContent = count +=1
}

function buildLikeDescription(){
    let likeDescription = document.createElement('li')
    likeDescription.textContent = `${counterDisplay.textContent} has been liked 1 time`
    document.querySelector(".likes").appendChild(likeDescription)   
}

function disableBtn(){
    minusBtn.disabled = true;
    plusBtn.disabled = true;
    heartBtn.disabled = true;   
}

function pauseCounter(){
    // let pauseBtnText = pauseBtn.textContent;
    // pauseBtnText === "pause"? pauseBtnText = "resume" : pauseBtnText = "pause";
    clearInterval(startTimer)
    }

function changeOnClick(){
    pauseBtn.textContent = 'Resume';
    pauseBtn.addEventListener('click', () => {
        minusBtn.disabled = false;
        plusBtn.disabled = false;
        heartBtn.disabled = false;  
            pauseBtn.textContent = 'Pause'
    })
        
    let restartCounterNumber = document.querySelector("#counter").innerText        
            pauseBtn.addEventListener('click', () =>{
            startimer = setInterval(counterIncrease, 1000)
             } )
}

    
function handleComment(e){
    e.preventDefault()
    let form = document.querySelector("#comment-form")
    console.log(form)
    form.addEventListener('submit', renderComment)
}

function renderComment(e){
    e.preventDefault()
    let form = document.querySelector("#comment-form")
    let commentBox = document.getElementById("comment-input")
 console.log(commentBox);
  let comment = commentBox.value
  console.log(comment)
    let list = document.createElement('li')
    list.innerText = comment
    form.appendChild(list)
}
    

//     function handleSubmitUser(e){
//     e.preventDefault()
//      document.querySelector("#github-form").addEventListener('submit',getUsers)
//  }


// //DOM Render Functions
// function renderUser(users){
//     const listContainer = document.querySelector("#user-list");
//     let specificUser = users.items
//     specificUser.forEach(gitUser => {
//         let list = document.createElement('li')
//         list.innerHTML = `
//         <h2 class = "user_login">${gitUser.login}</h2>
//         `
//     list.addEventListener('click',getUsersRepos)
// }
    


// Event Listeners

minusBtn.addEventListener('click', counterDecreaseOne)
plusBtn.addEventListener('click', counterIncreaseOne)
heartBtn.addEventListener('click', buildLikeDescription)
pauseBtn.addEventListener('click', pauseCounter)
pauseBtn.addEventListener('click', disableBtn)
pauseBtn.addEventListener('click', changeOnClick)
