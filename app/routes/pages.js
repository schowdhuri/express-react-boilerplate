export default function(server) {
	server.get("/", function(req, res) {
		res.render("index");
	});

	return server;
};
