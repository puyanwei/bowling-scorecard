describe('#Bowl', () => {
    beforeEach(() => {
        bowl = new Bowl(5);
    });

    describe('#initialize', () => {
        it('returns the value of the bowl, which is 5', () => {
            expect(bowl.value).toEqual(5);
        });
    });
});
