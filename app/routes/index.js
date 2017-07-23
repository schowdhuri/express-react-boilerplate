import apiRoutes from "./api";
import pageRoutes from "./pages";

export default function(server) {
	apiRoutes(server);
	pageRoutes(server);

	return server;
};
