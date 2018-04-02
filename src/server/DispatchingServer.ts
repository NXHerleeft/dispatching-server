import HTTPServer = require("./http/HTTPServer");
import Config = require("./Config");
import Loader = require("./Loader");
import Map = require("./Map");

class DispatchingServer {
    loader: Loader;

    config: Config;

    HTTPServer: HTTPServer;

    maps: Map[];

    constructor() {
        this.loadMaps();
    }

    loadMaps():boolean {
        this.maps.push(new Map());

        return true;
    }
}

export = DispatchingServer;