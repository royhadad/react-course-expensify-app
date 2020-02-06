import authReducer from '../../reducers/auth';
import { login, logout } from '../../actions/auth';

test('should setup state.auth.uid to the uid', () => {
    const uid = 'asasas';
    const state = authReducer(undefined, login(uid));
    expect(state).toEqual({ uid });
});

test('should setup state.auth to equal an empty object', () => {
    const state = authReducer({uid: 'anything'}, logout());
    expect(state).toEqual({});
});