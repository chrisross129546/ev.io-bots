export const createInitialiserPacket = async (id, player, token) => ';' + JSON.stringify({
    uid: 17,
    token,
    mmLobbyId: id,
    mmPlayerToken: player,
    buildIdentifier: '1.6.4-release',
    id: '',
    adminPass: '',
    isShareGame: false
});