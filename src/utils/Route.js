import {useHistory} from 'react-router-dom';

class Route {
    constructor() {
        this.history = useHistory();
    }

    push(pathName) {
        this.history.push(pathName);
    }

    replace(pathName) {
        this.history.replace(pathName);
    }
}

const ProxyMode = (() => {
    let instance = null;
    return () => {
        !instance && (instance = new Route());
        return instance;
    }
})();

export default ProxyMode;
