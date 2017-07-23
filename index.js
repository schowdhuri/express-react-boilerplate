import DBFactory from "./app/db"
import RouteFactory from "./app/routes";
import server from "./app/server";

DBFactory(server);
RouteFactory(server);

server.listen(3000, function() {
	console.log("Listening on port 3000...");
});
