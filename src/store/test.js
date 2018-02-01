
import { observable, action } from 'mobx';

class Test {
    @observable testName;
    constructor() {
        this.testName = 'test';
    }

    @action changeName() {
        this.testName = 'TEST';
    }
}
export default new Test();