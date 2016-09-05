import axios from 'axios';

const param = '?client_id=66425577858f17e4eec6' + '&client_secret=20fd11b3d4bad1978324dfdf0ec97c7af0694956';

function getUserInfo(username) {
    return axios.get(`https://api.github.com/users/${username}${param}`);
}

function getRepos(username) {
    return axios.get(`https://api.github.com/users/${username}/repos${param}&per_page=100`);
}

function getTotalStars(repos) {
    return repos.data.reduce((prev, curr) => prev + curr.stargazers_count, 0);
}

function getPlayersData(player) {
    return getRepos(player.login)
        .then(getTotalStars)
        .then(totalStars => {
            return {
                followers: player.followers,
                totalStars,
            };
        });
}

function calculateScores(players) {
    return players.map(player => player.followers*3 + player.totalStars);
}

const helpers = {
    getPlayersInfo(players) {
        return axios.all( players.map( getUserInfo ) )
            .then(info => info.map(({data}) => data))
            .catch( console.warn.bind(console) );
    },
    battle(players){
        return axios.all(players.map(getPlayersData))
            .then(calculateScores)
            .catch(err => console.warn('Error:', err));
    }
};

export default helpers;