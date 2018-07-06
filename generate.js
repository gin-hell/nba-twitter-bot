
// ~~~~~~~~~~ include twitter and NBA stats APIs, authenticate twitter account:

var Twit = require("twit");
var NBA = require("nba");
// var Promise = require("promise");

var T = new Twit({
  consumer_key:         'aYZuMiAGSXekVqrxBhzAdS5cb',
  consumer_secret:      'HIh2CG8leomnymz9J6v1Oqrq60e1bhZZ3nfFuWGIz3qZMaunnz',
  access_token:         '878314620376580097-zEWbtamd2rSMwUVENjUKYZCGKNQtzoc',
  access_token_secret:  'A1fc5NuZGRlgoqyw0j363F7WWBAXRMEk04hBexCsheOnR'
});


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


console.log('\n===== generate.js has been started =====\n' );

var params = {
	LeagueID: '00',
	Season: '2017-18'
}

var playerName;
var playerName2;
var teamName;
var teamName2;
var index = 16;
var players = NBA.players;
var teams = NBA.teams;



// ~~~~~~~~~~ called when follwed account sends tweet:

function composeTweet(){

	function getPlayerName() {

		return new Promise(function(resolve, reject){

			var i = Math.floor(Math.random()*players.length);
			playerName = players[i].fullName;
			resolve(playerName);
		});
	};

	function getPlayerName2() {

		return new Promise(function(resolve, reject){

			var i = Math.floor(Math.random()*players.length);
			if(playerName == players[i].fullName) {
				getPlayerName2();
			} else {
				playerName2 = players[i].fullName;
				resolve(playerName2);
			}
		});
	};

	function getTeamName() {

		return new Promise(function(resolve, reject){

			var i = Math.floor(Math.random()*teams.length);
			teamName = teams[i].teamName;
			resolve(teamName);
		});
	};

	function getTeamName2() {

		return new Promise(function(resolve, reject){

			var i = Math.floor(Math.random()*teams.length);
			if(teamName == teams[i].teamName) {
				getTeamName2();
			} else {
				teamName2 = teams[i].teamName;
				resolve(teamName2);
			}
		});
	};

	getPlayerName()
		.then(function(){return getPlayerName2()})
		.then(function(){return getTeamName()})
		.then(function(){return getTeamName2()})
		.then(function(){



// ~~~~~~~~~~ array of tweet templates
var tweets = [

			'The ' + teamName + ' and ' + teamName2 + ' have begun talks over a ' + playerName + ' trade.',
			'The ' + teamName + ' is looking to trade ' + playerName + ' to the ' + teamName2 + ' for a future first round draft pick.',
			'Sources: ' + playerName + ' has expressed interest in signing with the ' + teamName + '.',
			'According to league sources, ' + playerName + ' will sign a free agent deal with the ' + teamName + '.',
			'Free agent ' + playerName + ' is finalizing a one-year deal to return to the ' + teamName + '.',
			'The ' + teamName + ' will waive ' + playerName + ', per league sources.',
			'The ' + teamName + ' is reportedly offering ' + playerName + ' to the '+ teamName2 +' in a multi-team trade for ' + playerName2 + '.', 
			playerName + "'s name continues to surface in trade talks with the " + teamName + ' and the ' + teamName2 + '.',
			'Proposed multi-team trade could have sent ' + playerName + ' to the ' + teamName + ' for ' + playerName2 + '.',
			'The ' + teamName + ' waive key assets to make room for ' + playerName + '.',
			teamName + ' putting pressure on the ' + teamName2 + ' in race for ' + playerName +'.',
			'The ' + teamName + ' has agreed to trade ' + playerName + ' and a future lottery pick to the ' + teamName2 + ' for two future first round draft picks.',
			'The ' + teamName + ' announced today that they have traded '+ playerName + ' to the '+ teamName2+' in exchange for cash considerations.',
			'Sources: Free agent ' + playerName + ' hosts meetings with interested suitors, including the ' + teamName + 'and ' + teamName2 + ' this weekend.',
			'The ' + teamName + ' has traded ' + playerName + ' to Houston for cash and a 2018 second-round pick, per league sources.',
			'Sources: ' + teamName + ' working to land both ' + playerName + ' and ' + playerName2 + '.',
			'The ' + teamName + ' is exercising its $1.5M team option on ' + playerName + ', according to league source.',
			'Trade Rumors: ' + teamName + ' could look to acquire '+ playerName + ' from ' + teamName2 + '.',
			playerName + ' has agreed to a 4-yr, $24.5M deal with the ' + teamName + '.',
			'The ' + teamName + ', having lost ' + playerName + ' in the ' + teamName2 + ' trade, begins talks with ' + playerName2 + ', per sources.',
			playerName + ' has agreed to a two-way deal with the ' + teamName + ', league sources tell ESPN.',
			'League sources tell ESPN that ' + playerName + ' has agreed to a one-year deal with the ' + teamName + '.',
			'Free agent ' + playerName + ' has signed a one-year contract worth $5M to remain with the ' + teamName + '.',
			'The ' + teamName + ' has traded ' + playerName + ' and a draft consideration to the ' + teamName2 + '.',
			'League Sources tell ESPN that ' + playerName + ', ' + teamName + ' finalizing a two-year, $12M deal.',
			'The ' + teamName + ' withdrew qualifying offer on ' + playerName + ', who will become an unrestricted free agent.',
			'The ' + teamName + ' is re-signing ' + playerName + ', a source told ESPN.',
			teamName + ' restricted free agent ' + playerName + ' has agreed to a three-year, $30M contract extension.',
			playerName + ' and the ' + teamName + ' are progressing toward finalizing a four-year, $80M contract extension, league sources tell ESPN.',
			playerName + ' has committed to sign a deal with the ' + teamName + '.',
			'Sources on ESPN: ' + teamName + ' player ' + playerName + ' to opt-out, clearing the way to free-agency.',
			'The ' + teamName + ' has declined the option on ' + playerName + '. He will become a free agent.'
			]
// ~~~~~~~~~~ get text from list of tweets:
		var text = tweets[index];
		
		T.post ('statuses/update', {
			status: text + " #NBATrades #NBAFreeAgency" }, 
			function(err, data, response) {
	  			console.log('\n********** new tweet: index ' + index + ' **********');
				console.log(text);
			});

		index = (index + 1)% tweets.length;

	}).catch(function(fromReject) {
		console.log('error');
	});
	
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// nbaespn - 74518740
// hoopshype - 20444254
// me - 3041956282
// test - 1015266531486429185
// woj - 50323173
// shams - 178580925

// ~~~~~~~~~~ follow the main account, woj, and shams:

var stream = T.stream('statuses/filter', {
	follow: '1015266531486429185'
});
var stream2 = T.stream('statuses/filter', {
	follow: '50323173'
});
var stream3 = T.stream('statuses/filter', {
	follow: '178580925'
});

stream.on('tweet', tweetEvent);
stream2.on('tweet', retweetEvent);
stream3.on('tweet', retweetEvent2);

function tweetEvent (eventMsg) {

	if (eventMsg.user.id == 1015266531486429185) {
		// console.log('*** TWEET ' + index + ' found ***');
		composeTweet();
	}
}

function retweetEvent (eventMsg) {

	if (eventMsg.user.id == 50323173) {
		T.post('statuses/retweet/:id', {id: eventMsg.id_str})
		console.log('RETWEET: \n' + eventMsg.text)
	}
}
function retweetEvent2 (eventMsg) {

	if (eventMsg.user.id == 178580925) {
		T.post('statuses/retweet/:id', {id: eventMsg.id_str})
		console.log('RETWEET: \n' + eventMsg.text)
	}
}


// ~~~~~~~~~~ print out a nice little pattern every 10 minutes:

setInterval(function(){console.log("_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-")}, 600000);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



