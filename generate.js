
var Twit = require("twit");
var NBA = require("nba.js");

var T = new Twit({
  consumer_key:         'aYZuMiAGSXekVqrxBhzAdS5cb',
  consumer_secret:      'HIh2CG8leomnymz9J6v1Oqrq60e1bhZZ3nfFuWGIz3qZMaunnz',
  access_token:         '878314620376580097-zEWbtamd2rSMwUVENjUKYZCGKNQtzoc',
  access_token_secret:  'A1fc5NuZGRlgoqyw0j363F7WWBAXRMEk04hBexCsheOnR'
});



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.log('generate.js has been started');

var params = {
	LeagueID: '00',
	Season: '2016-17'
}

var playerName;
var playerName2;
var teamName;
var teamName2;
var index = 17;


function composeTweet(){

	function getPlayerName() {
		return new Promise(function(resolve, reject){

			NBA.stats.allPlayers(params, getRandomPlayer);

			function getRandomPlayer (err, data) {
				var players = data.CommonAllPlayers;
				var i = Math.floor(Math.random() * players.length);
				playerName = players[i].display_first_last;

				resolve(playerName);		
			}

		});
	};

	function getPlayerName2() {
		return new Promise(function(resolve, reject){

			NBA.stats.allPlayers(params, getRandomPlayer2);

			function getRandomPlayer2(err, data) {
				var players = data.CommonAllPlayers;
				var i = Math.floor(Math.random() * players.length);

				if(playerName == players[i].display_first_last) {
					getPlayerName2();
					console.log('same player dummy, try again!');
				} else {
					playerName2 = players[i].display_first_last;
					resolve(playerName2);
				}
			}	
		});
	}


	function getTeamName() {
		return new Promise(function(resolve, reject){

			NBA.stats.teamGeneralStats(params, getRandomTeam);

			function getRandomTeam(err, data) {
				var teams = data.LeagueDashTeamStats;
				var j = Math.floor(Math.random() * teams.length);
				teamName = teams[j].team_name;

				resolve(teamName);
			}
		});
	};


	function getTeamName2() {
		return new Promise(function(resolve, reject){

			NBA.stats.teamGeneralStats(params, getRandomTeam2);

			function getRandomTeam2(err, data) {
				var teams = data.LeagueDashTeamStats;
				var j = Math.floor(Math.random() * teams.length);

				if(teamName == teams[j].team_name) {
					getTeamName2();
					console.log('same team dummy, try again!');
				} else {
					teamName2 = teams[j].team_name;
					resolve(teamName2);
				}
			}	
		});
	}



	getPlayerName().then(function(){
		return getTeamName();
	}).then(function(){
		return getTeamName2();
	}).then(function(){

		var tweets = [

			'The ' + teamName + ' and ' + teamName2 + ' have begun talks over a ' + playerName + ' trade.',
			'The ' + teamName + ' are looking to trade ' + playerName + ' to the ' + teamName2 + ' for a future first round draft pick.',
			'Sources: ' + playerName + ' has expressed interest in signing with the ' + teamName + '.',
			'According to league sources, ' + playerName + ' will sign a free agent deal with the ' + teamName + '.',
			'The ' + teamName + ' will waive ' + playerName + ', league sources say.',
			'The ' + teamName + ' are reportedly offering ' + playerName + ' to the Cleveland Cavaliers in a multi-team trade for LeBron James.', 
			'Sources: ' + playerName + ' wants LeBron James to come to the ' + teamName + '.',
			'League sources say the ' + teamName + "'s top priority is signing talent to support " + playerName + '.',
			playerName + " says he'd love to stay with the " + teamName + '.',
			playerName + "'s name continues to surface in trade talks with the " + teamName + ' and the ' + teamName2 + '.',
			'Proposed multi-team trade could have sent ' + playerName + ' to the ' + teamName + ' for ' + playerName2 + '.',
			'The ' + teamName + ' waive key assets to make room for ' + playerName + '.',
			'The' + teamName + ' puts pressure on the ' + teamName2 + ' in race for ' + playerName +'.',
			'The ' + teamName + ' have agreed to trade ' + playerName + ' and a future lottery pick to the ' + teamName2 + ' or two future first round draft picks.',
			'The ' + teamName + ' announced today that they have traded '+ playerName + ' to the '+ teamName2+' in exchange for cash considerations.',
			'Sources: Free agent ' + playerName + ' hosts meetings with interested suitors, including the ' + teamName + 'and the ' + teamName2 + ' this weekend.',
			'The ' + teamName + ' have traded ' + playerName + ' to Houston for cash and a 2018 second-round pick, per league sources.',
			'Sources: ' + teamName + ' working to land both ' + playerName + ' and ' + playerName2 + '.',
			'the ' + teamName + ' is exercising its $1.5M team option on ' + playerName + ', league sources tell @2017_NBA_Trades.'
		];	

		var text = tweets[index];	
		index = (index + 1)% tweets.length;

		// console.log(tweets[index]);
	
		T.post ('statuses/update', {
		status: text + " #NBA #NBATrades #NBATradeNews🏀" }, 

		function(err, data, response) {
  			console.log("*** new tweet posted to @2017_NBA_Trades ***");
		})

	}).catch(function(fromReject) {
		console.log('error');
	});


	
}

composeTweet();




//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~




// jen's is 3041956282

var stream = T.stream('statuses/filter', {
	follow: '23065057',
});

stream.on('tweet', tweetEvent);

function tweetEvent (eventMsg) {

	if (eventMsg.user.id == 23065057) {
		console.log('*** TWEET FOUND ***   ' + index);
		composeTweet();
	} else {
		console.log('nah   ' + index);
	}
}







