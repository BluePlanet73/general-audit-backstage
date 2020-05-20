import {useHistory} from 'react-router-dom';

class Route {
    constructor() {
        this.history = useHistory();
    }

    push(pathname, state) {
        this.history.push({pathname, state});
    }

    replace(pathname) {
        this.history.replace(pathname);
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
