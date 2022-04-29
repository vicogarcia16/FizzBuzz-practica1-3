class ExplorerService {

    static filterByMission(explorers, mission) {
        const explorersByMission = explorers.filter((explorer) => explorer.mission === mission);
        return explorersByMission;
    }
    static getAmountOfExplorersByMission(explorers, mission) {
        const explorersAmountByMission = explorers.filter((explorer) => explorer.mission === mission);
        return explorersAmountByMission.length;
    }
    static getExplorersUsernamesByMission(explorers, mission) {
        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == mission);
        return explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
    }

}

module.exports = ExplorerService;