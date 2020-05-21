import {useHistory} from 'react-router-dom';

export class route {
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
        !instance && (instance = new route());
        return instance;
    }
})();

export default ProxyMode;
