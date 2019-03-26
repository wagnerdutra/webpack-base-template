export const Types = {
  SET_TEXT: 'welcome/SET_TEXT',
  GET_REPO_USER: 'welcome/GET_REPO_USER',
  SET_REPO_USER: 'welcome/SET_REPO_USER'
};

const INITIAL_STATE = {
  text: '',
  loading: false,
  name: null
};

export default function welcome(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_TEXT:
      return { ...state, text: action.payload.text };
    case Types.GET_REPO_USER:
      return { ...state, loading: true };
    case Types.SET_REPO_USER:
      return { ...state, loading: false, name: action.payload.name };
    default:
      return state;
  }
}

export const Creators = {
  setText: text => ({
    type: Types.SET_TEXT,
    payload: { text }
  }),
  getRepoUser: () => ({
    type: Types.GET_REPO_USER
  }),
  setRepoUser: name => ({
    type: Types.GET_REPO_USER,
    payload: { name }
  })
};
