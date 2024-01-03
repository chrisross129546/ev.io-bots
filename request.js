import { agents } from './server.js';

export const generateAnonymousUser = async () => {
    const agent = Math.floor(Math.random() * agents.length + 1);
    const request = await fetch('https://matchmaker2.ev.io/lobby/seek?req=%7B%22namespace%22%3A%22prod2%22%2C%22query%22%3A%7B%22type%22%3A%22Group%22%2C%22lobbyGroupId%22%3A%22deathmatch_earn%22%2C%22regionId%22%3A%22amsterdam%22%7D%7D', { agent });
    const json = await request.json();
    
    const { lobbyId, lobbyHost, playerToken } = json;
    return [lobbyId, lobbyHost, playerToken];
};

export const generateToken = async () => {
    const agent = Math.floor(Math.random() * agents.length + 1);
    const request = await fetch('https://ev.io/session/token', { agent });
    return await request.text();
};