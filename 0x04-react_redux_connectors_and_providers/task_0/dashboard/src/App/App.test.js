describe('mapStateToProps', () => {
  it('returns corrrect obj'), () => {
    const state = {
      isUserLoggedIn: true
    }
    const result = mapStateToProps(state);
    expect(result).toEqual({ isLoggedIn: true})
  }
});
