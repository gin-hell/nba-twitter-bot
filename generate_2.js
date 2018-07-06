
var Twit = require("twit");
var NBA = require("nba");
// var Promise = require("promise");

var T = new Twit({
  consumer_key:         'aYZuMiAGSXekVqrxBhzAdS5cb',
  consumer_secret:      'HIh2CG8leomnymz9J6v1Oqrq60e1bhZZ3nfFuWGIz3qZMaunnz',
  access_token:         '878314620376580097-zEWbtamd2rSMwUVENjUKYZCGKNQtzoc',
  access_token_secret:  'A1fc5NuZGRlgoqyw0j363F7WWBAXRMEk04hBexCsheOnR'
});



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var params = {
	LeagueID: '00',
	Season: '2017-2018'
}

var players = NBA.players;
var teams = NBA.teams;
var playerName;
var playerName2;
var teamName;
var teamName2;


function getPlayerName() {

	return new Promise(function(resolve, reject){

		var i = Math.floor(Math.random()*players.length);
		playerName = players[i].fullName;
		resolve(playerName);
		console.log(playerName);
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
			console.log(playerName2);
		}
	});
};

function getTeamName() {

	return new Promise(function(resolve, reject){

		var i = Math.floor(Math.random()*teams.length);
		teamName = teams[i].teamName;
		resolve(teamName);
		console.log(teamName);
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
			console.log(teamName2);
		}
	});
};

getPlayerName()
	.then(function(){return getPlayerName2()})
	.then(function(){return getTeamName()})
	.then(function(){return getTeamName2()})

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~








