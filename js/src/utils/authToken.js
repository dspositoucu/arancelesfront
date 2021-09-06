export const getStoredAuthToken = () => localStorage.getItem('access_token');

export const storeAuthToken = token => localStorage.setItem('access_token', token);

export const removeStoredAuthToken = () => localStorage.removeItem('access_token');

export const tokenExpired = () => {
   const token = getStoredAuthToken()
   if(!token) return false
  
  console.log(token)

  const {exp} = JSON.parse(atob(token.split('.')[1]))

  return exp > new Date().getTime() / 1000
}
