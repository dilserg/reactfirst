export const getAuthorizeInfo = state => state.auth.isAuthorized;

export const getId = state => state.auth.id;

export const getAuthFetching = state => state.auth.isFetching

export const getErrorInfo = state => state.auth.hasError

export const getLogin = state => state.auth.login