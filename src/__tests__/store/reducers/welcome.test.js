import reducer, {
  Creators as WelcomeActions,
  INITIAL_STATE as initialState
} from 'Store/ducks/welcome';

describe('Welcome Reducer', () => {
  it('should return the initial state', () => {
    const state = reducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should return the same state passed', () => {
    const state = reducer(initialState, {});
    expect(state).toEqual(initialState);
  });

  it('should handle SET_TEXT', () => {
    const state = reducer(initialState, WelcomeActions.setText('Wagner'));
    expect(state).toEqual({ ...initialState, text: 'Wagner' });
  });

  it('should handle GET_USER_GIT', () => {
    const state = reducer(initialState, WelcomeActions.getUserGit());
    expect(state).toEqual({ ...initialState, loading: true });
  });

  it('should handle SET_USER_GIT', () => {
    const state = reducer(initialState, WelcomeActions.setUserGit('wagnerdutra'));
    expect(state).toEqual({
      ...initialState,
      userName: 'wagnerdutra',
      loading: false,
      error: false
    });
  });

  it('should handle SET_USER_FAILURE', () => {
    const state = reducer(initialState, WelcomeActions.setUserGitFailure());
    expect(state).toEqual({ ...initialState, error: true, loading: false });
  });
});
