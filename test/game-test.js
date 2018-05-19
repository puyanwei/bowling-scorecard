describe('#Game', () => {
    beforeEach(() => {
        game = new Game();
        bowl = new Bowl();
    });

    describe('#initialize', () => {
        it('bowls array to start out empty', () => {
            expect(game.scorecard).toEqual([]);
        });
        it('frameScores array to start out empty', () => {
            expect(game.frameScores).toEqual([]);
        });
        it('runningTotal variable starts at zero', () => {
            expect(game.runningTotal).toEqual(0);
        });
        it('spare variable starts as false', () => {
            expect(game.spare).toBe(false);
        });
        it('strike variable starts as false', () => {
            expect(game.strike).toBe(false);
        });
    });

    describe('#addBowl', () => {
        it('adds a bowl object into scoreArray', () => {
            game.addBowl(5);
            game.addBowl(2);
            const arrayLength = game.scorecard.length;
            expect(arrayLength).toEqual(2);
            expect((game.scorecard[0].value = 5));
            expect((game.scorecard[1].value = 3));
        });
    });

    describe('#addFrameScore', () => {
        it('adds the frame totals to the frameScores array', () => {
            game.addBowl(5);
            game.addBowl(2);
            game.addBowl(4);
            game.addBowl(4);
            game.addFrameScore();
            expect(game.frameScores).toEqual([7, 8]);
        });
    });

    describe('#updateTotals', () => {
        it("updates the frame totals by adding up the previous frame's total", () => {
            game.frameScores = [7, 8, 12];
            game.updateTotals();
            expect(game.frameScores).toEqual([7, 15, 27]);
        });
    });
});
