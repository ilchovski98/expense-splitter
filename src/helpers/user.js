const logout = () => {
  localStorage.removeItem('x-auth-token');
  window.location = '/';
}

module.exports = {
  logout
};
