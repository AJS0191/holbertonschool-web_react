import React from 'react';

export const user = {
  email : '',
  password: '',
  isLoggedIn: false
}

export function logOut() {
  () =>{}
}

const AppContext = React.createContext({ user, logOut});

export default AppContext;
