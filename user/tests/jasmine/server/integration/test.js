describe('Async spec', function () {
  it('async passes', function (done) {
    Meteor.setTimeout(function () {
      expect(true).toBe(true);
      done();
    }, 100);
  });
});
