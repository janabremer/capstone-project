export default function getPhoto(queryParam) {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "563492ad6f9170000100000171d02304f5cb4f27af21cfdd6441ef0a");
    myHeaders.append("Cookie", "__cfduid=d7f813d0b0ba48aa2770e52f585f84bb01606308963");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`https://api.pexels.com/v1/search?per_page=1&query=${queryParam}`, requestOptions)
        .then(res => res.json()) 
} 