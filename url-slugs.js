

function getUrlSlug(url){
    return url
        .trim()
        .replace(/\s+/g,"/")
        .toLowerCase();
}

console.log(getUrlSlug("here is My   url  "))
