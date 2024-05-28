var count =0
function addFriendHandler(){
    
    let inputtext = document.getElementById("input").value
    let detail = document.getElementById("detail")
    
    console.log("test")
    count++;
    detail.innerHTML += `<div class="detail2">
                                    <h4>0${count}</h4>
                                    <h4>${inputtext}</h4>
                                    <h4 id='incre' onclick='increamentHandler(event)'>0</h4>
                        </div>`
   document.getElementById("input").value =''                   
}




function increamentHandler(event){
    let incre = document.getElementById("incre")
    incre = event.target;
    let count = incre.innerHTML
    count++
    incre.innerHTML = count
    

}






