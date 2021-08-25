import Cookies from 'js-cookie'

export function getUser() {
    let name = Cookies.get('jitask')
    return name;
}

export function setUser(user) {
    Cookies.set('jitask', user);
}