
export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // remove after finished developing..
  /*  token: 'BQBBwhp-VznheS8gQMH_7ha13xU9YneBUmn8zJJqgWktluMVbCiAcLpjVzAP-HjSTl-01MZC2DsJXc0gugzCm93PAgbjrWFe8xTbCJ1yoxPyi-vxI0eUKoDt6XATzb9H0fBvYC2zaV7H9tbk2_wf--kdeK-awrhmuNetzGwjLbH1MUO-',
   */
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      }; 
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token
    };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
    };

    case "SET_DAILY_MUSIC":
      return {
        ...state,
        daily_music: action.daily_music,
    };
    
    default:
      return state; 
  }
}
export default reducer;
