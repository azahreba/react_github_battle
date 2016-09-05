import axios from 'axios';

const param = '?client_id=66425577858f17e4eec6' + '&client_secret=20fd11b3d4bad1978324dfdf0ec97c7af0694956';

function getUserInfo(username) {
    return axios.get(`https://api.github.com/users/${username}${param}`);
}

const helpers = {
    getPlayersInfo(players) {
        return axios.all( players.map( getUserInfo ) )
            .then(info => info.map(({data}) => data))
            .catch( console.warn.bind(console) );
    }
};

export default helpers;