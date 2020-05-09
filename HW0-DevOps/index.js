const got    = require("got");
const chalk  = require('chalk');
const os     = require('os');

var config = {};

config.token = process.env.NCSU_DOTOKEN;

if( !config.token )
{
	console.log(chalk`{red.bold NCSU_DOTOKEN is not defined!}`);
	console.log(`Please set your environment variables with appropriate token.`);
	console.log(chalk`{italic You may need to refresh your shell in order for your changes to take place.}`);
	process.exit(1);
}

console.log(chalk.green(`Your token is: ${config.token.substring(0,4)}...`));

const headers =
{
	'Content-Type':'application/json',
	Authorization: 'Bearer ' + config.token
};


class DigitalOceanProvider
{
	
	async createDroplet (dropletName, region, imageName )
	{
		if( dropletName == "" || region == "" || imageName == "" )
		{
			console.log( chalk.red("You must provide non-empty parameters for createDroplet!") );
			return;
		}

		var data = 
		{
			"name": dropletName,
			"region":region,
			"size":"512mb",
			"image":imageName,
			"ssh_keys":["01:d5:66:97:6a:d0:04:3e:c9:40:21:f5:8a:92:11:e9"],
			"backups":false,
			"ipv6":false,
			"user_data":null,
			"private_networking":null
		};

		console.log("Attempting to create: "+ JSON.stringify(data) );

		 let response = await got.post("https://api.digitalocean.com/v2/droplets", 
		 {
		 	headers:headers,
		 	json:true,
		 	body: data
		 }).catch( err => 
		 	console.error(chalk.red(`createDroplet: ${err}`)) 
		 );

		 if( !response ) return;

		 //console.log(response.statusCode);
		 //console.log(response.body);

		 if(response.statusCode == 202)
		 {
			 console.log(chalk.green(`Created droplet id ${response.body.droplet.id}`));
			 return response.body.droplet.id
		 }
	}

	async dropletInfo (id)
	{
		if( typeof id != "number" )
		{
			console.log( chalk.red("You must provide an integer id for your droplet!") );
			return;
		}
		var s='https://api.digitalocean.com/v2/droplets/';
		var l= s+id
		console.log(l)
		let response = await got(l, { headers: headers, json:true })
							 .catch(err => console.error(`listimage ${err}`));
		
		
		if( !response ) return;
		
		if( response.body.droplet )
		{
			let droplet = response.body.droplet;
			//console.log(droplet);
			console.log(response.body.droplet.networks.v4[0].ip_address)
			// Print out IP address
		}

	}

};


async function provision()
{
	let client = new DigitalOceanProvider();

	var name = "rjain27"+os.hostname();
	var region = "nyc3"; // Fill one in from #1
	var image = "ubuntu-14-04-x32-do"; // Fill one in from #2
	var ans= await client.createDroplet(name, region, image);

	var dropletId = ans;

	await client.dropletInfo(dropletId);

}


(async () => {
	await provision();
})();
