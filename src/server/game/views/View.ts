import iView = require("./iView");
import HTTPInterface = require("../HTTPInterface");

class View implements iView {
    HTTPInterface: HTTPInterface;
}

export = View;