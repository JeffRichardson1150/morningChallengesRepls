/*
Write a fat arrow async function that does the following:
- Uses await to fetch data from this endpoint - 'https://swapi.co/api/people/<number here>'
- Uses await to jsonify the response received from the fetch
- console.log the results of the fetch before returning a message saying 'this should print last'
- our string of 'this should print last' should be accessed using a promise resolver chained to the call of the function.
*/


const request = async () => {
    const response = await fetch('https://swapi.co/api/people/3');
    const json = await response.json();
    console.log(json);
    return 'this should print last';
}

request().then((stringFromRequest) => {
    console.log(stringFromRequest);
})
