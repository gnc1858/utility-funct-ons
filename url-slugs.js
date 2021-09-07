

function getUrlSlug(url){
    return url
        .replace(/\s+/g,"-")
        .toLowerCase();
}

console.log(getUrlSlug("here is My   url"))