let url = "https://icanhazdadjoke.com";

async function getJoke() {

    try{
        const config = { headers: { Accept: "application/json"} };
        let res = await axios.get(url, config);

        console.log(res.data);
    }catch(e){
        console.log("Error: ",e);
    }
}