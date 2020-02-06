import { login, logout } from '../../actions/auth';
test('should setup login action object correctly', () => {
    const uid = 'asasas';
    const loginAction = login(uid);
    expect(loginAction).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('should setup logout action object correctly', () => {
    const logoutAction = logout();
    expect(logoutAction).toEqual({
        type: 'LOGOUT'
    });
});