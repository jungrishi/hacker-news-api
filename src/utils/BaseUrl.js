const rootUrl = 'https://hacker-news.firebaseio.com/v0/';

function getUrl(appendUrl) {
    return rootUrl + appendUrl;
}

export default getUrl;