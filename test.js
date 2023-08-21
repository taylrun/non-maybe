// @flow

import nonMaybe from './nonMaybe.js'

test("Developer knows it exists, but flow doesn't.", () => {
  let a: string
  if (getHiddenTrue()) {
    a = 'exists'
  }

  expect(nonMaybe(a)).toBeTruthy()

  foo(a) // flowtype error

  foo(nonMaybe(a)) // flowtype accepts
})

// This test is expected to fail in jest.
test("Developer thinks it exists, but it actually doesn't.", () => {
  let a: string
  if (!getHiddenTrue()) {
    a = 'exists'
  }

  expect(nonMaybe(a)).toBeTruthy()
})

function getHiddenTrue(): any {
  return true
}

function foo(a: string): void {

}
