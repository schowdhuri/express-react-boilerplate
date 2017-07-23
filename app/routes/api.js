export default function(server) {
	server.get("/api/todos/", function(req, res) {
		res.send("GET todos");
	});
	server.get("/api/todos/:id/", function(req, res) {
		res.send(`GET todo ${req.params.id}`);
	});

	return server;
};
