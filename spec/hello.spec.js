import { hello } from "../";

// This is a test which runs when we run "yarn test" from the command line
// We start by calling the function test() which takes two arguments, the first
// is a string which describes the test and the second is an anonymous function
// with no arguments where we execute our test.
//
// You might be wondering where we import the function test() or expect() but
// when this file runs its actually run by a program that does all that for you
// so you can keep your tests less verbose. See Jest docs for details.
test("Returns 1+1", () => {
  // expect() takes one argument, which is the result of whatever we put inside.
  // In this case we call hello() which returns 1 + 1 (which = 2).
  // Then we call toBe(2) which checks that the answer from expect is 2
  expect(hello()).toBe(2);
});
