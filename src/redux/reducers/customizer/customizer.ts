const initState = {
  theme: 'light',
  sidebarCollapsed: true,
};

const customizerReducer = (state = initState, action: any) => {
  switch (action.type) {
    case 'CHANGE_MODE':
      return { ...state, theme: action.mode };
    case 'COLLAPSE_SIDEBAR':
      return { ...state, sidebarCollapsed: action.value };

    default:
      return state;
  }
};

export default customizerReducer;
