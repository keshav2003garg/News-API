let newsAccordion = document.getElementById("newsAccordion")
const xhr = new XMLHttpRequest()
let source = "the-times-of-india"
let apiKey = "d093053d72bc40248998159804e0e67d"
xhr.open("GET", `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true)
xhr.onload = function(){
    if(this.status === 200){
        let articles = JSON.parse(this.responseText).articles
        let newsHtml = ""
        articles.forEach(function(element, index){
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                                    <b>Breaking News ${index+1}:</b> ${element["title"]}</button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse show" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" style="text-decoration: none;">Read more here</a></div>
                            </div>
                        </div>`;
            newsHtml += news
        })
        newsAccordion.innerHTML = newsHtml
    }
    else{
        console.log("Some Error Occured")
    }
}
xhr.send()  