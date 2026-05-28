const filterCarseConfig = { serverId: 3794, active: true };

const filterCarseHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_3794() {
    return filterCarseConfig.active ? "OK" : "ERR";
}

console.log("Module filterCarse loaded successfully.");