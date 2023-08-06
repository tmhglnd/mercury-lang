//
// List functions testing file
//

const Mercury = require('../index.js');

// Float arrays not included because results can not StrictEqual 
// (rounding errors with Floats)

test('Generative List Methods', () => {
	expect(Mercury(`print spread(5 0 12)`).parseTree.print[0]).toStrictEqual([0, 2, 4, 7, 9]);

	// expect(Mercury(`print spreadFloat(5 -1 1)`).parseTree.print[0]).toStrictEqual([-1, -0.6, expect.closeTo(-0.2), 0.2, 0.6]);

	// expect(Mercury(`print spreadF(5 0 2)`).parseTree.print[0]).toEqual([0, 0.4, 0.8, expect.closeTo(1.2), 1.6]);

	expect(Mercury(`print spread(5 12 0)`).parseTree.print[0]).toStrictEqual([9, 7, 4, 2, 0]);

	expect(Mercury(`print spreadInclusive(5 0 12)`).parseTree.print[0]).toStrictEqual([0, 3, 6, 9, 12]);

	// expect(Mercury(`print spreadInclusiveFloat(5 -1 1)`).parseTree.print[0]).toStrictEqual([-1, -0.5, 0, 0.5, 1]);

	// expect(Mercury(`print spreadInclusiveF(5 0 2)`).parseTree.print[0]).toStrictEqual([0, 0.5, 1, 1.5, 2]);

	// expect(Mercury(`print spreadInclusive(5 12 0)`).parseTree.print[0]).toStrictEqual([12, 9, 6, 3, 0]);

	expect(Mercury(`print fill(10 2 15 3 20 4)`).parseTree.print[0]).toStrictEqual([10, 10, 15, 15, 15, 20, 20, 20, 20]);

	expect(Mercury(`print fill(abc 2 xyz 3)`).parseTree.print[0]).toStrictEqual(['abc', 'abc', 'xyz', 'xyz', 'xyz']);

	// list fll3 fill([10 20 2 15 3 20 4])
	// not supported yet!

	expect(Mercury(`print fill([10 20] 2 [30 40] 3 50 4)`).parseTree.print[0]).toStrictEqual([[10, 20], [10, 20], [30, 40], [30, 40], [30, 40], 50, 50, 50, 50]);

	expect(Mercury(`print sine(10)`).parseTree.print[0]).toStrictEqual([6, 9, 11, 11, 9, 6, 2, 0, 0, 2]);

	expect(Mercury(`print sine(10 1 -12 12)`).parseTree.print[0]).toStrictEqual([0, 7, 11, 11, 7, 0, -7, -11, -11, -7]);

	expect(Mercury(`print sine(10 2 0 5)`).parseTree.print[0]).toStrictEqual([2, 4, 3, 1, 0, 2, 4, 3, 1, 0]);

	// expect(Mercury(`print sineFloat(8)`).parseTree.print[0]).toStrictEqual([0, 0.707, 1, 0.707, 0, -0.707, -1, -0.707]);

	// expect(Mercury(`print sineF(12 3 -1 1)`).parseTree.print[0]).toStrictEqual([0, 1, 0, -1, 0, 1, 0, -1, 0, 1, 0, -1]);

	expect(Mercury(`print cosine(10)`).parseTree.print[0]).toStrictEqual([12, 10, 7, 4, 1, 0, 1, 4, 7, 10]);

	expect(Mercury(`print cosine(10 1 -12 12)`).parseTree.print[0]).toStrictEqual([12, 9, 3, -3, -9, -12, -9, -3, 3, 9]);

	expect(Mercury(`print cosine(10 2 0 5)`).parseTree.print[0]).toStrictEqual([5, 3, 0, 0, 3, 5, 3, 0, 0, 3]);

	// expect(Mercury(`print cosineFloat(8)`).parseTree.print[0]).toStrictEqual([1, 0.707, 0, -0.707, -1, -0.707, 0, 0.707]);

	// expect(Mercury(`print cosineF(12 3 -1 1)`).parseTree.print[0]).toStrictEqual([1, 0, -1, 0, 1, 0, -1, 0, 1, 0, -1, 0]);
});

