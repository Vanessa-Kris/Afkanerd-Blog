const search = () =>{
    const searchbox = document.getElementById("myInput").value.toUpperCase();
    const topics = document.getElementById("topics")
    const topic = document.querySelectorAll(".topic")
    const tname = topics.getElementsByTagName("h2")

    for(var i=0; i < tname.length; i++){
        let match = topic[i].getElementsByTagName('h2')[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                topic[i].style.display = "";
            } else{
                topic[i].style.display = "none";
            }
        }
    }
}

