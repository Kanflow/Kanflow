const Todoist = require("./todoist/todoist");

const TOKEN = "supersecuretokenhere";

const t = new Todoist(TOKEN);
t.getProjects().then(data => console.log(data));
t.getTasks().then(data => console.log(data));
