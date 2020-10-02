let catsArray = [];
let offset = 0;
export let getCats = () =>{
    const Http = new XMLHttpRequest();
    offset+=12;
    const url='https://api.giphy.com/v1/gifs/search?api_key=eNQxGH72IKM3FYNbw7J0zzKqLfpWr4iK&q=cats&limit=12&offset='+offset+'&rating=g&lang=en';
    Http.open("GET", url);
    Http.send();

//When we receive the Request Content:
    Http.onreadystatechange = (e) => {
        let responseObjectData = JSON.parse(Http.responseText).data;
        for(let i in responseObjectData){
            let completeURL = responseObjectData[i].images.original.url;
            catsArray.push(completeURL.substring(0, completeURL.indexOf("?")));
        }
    }
    console.log(catsArray.length);
    return catsArray;
};