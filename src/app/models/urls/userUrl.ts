import { Url } from './baseUrl';

export class UserURL {

    private urlBase = new Url();
    private url = this.urlBase.get_urlbase();
    

    get_userUrl () {
        return this.url + '/customer/get';
    }

    post_userUrl () {
        return this.urlBase.get_urlbase() + '/customer/post';
    }

    put_userUrl () {
        return this.urlBase.get_urlbase() + '/customer/put';
    }

}