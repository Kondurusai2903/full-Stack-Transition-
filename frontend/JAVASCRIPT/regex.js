// console.log('Hello regest')[
// regex pattern match or string matching

// [abc] // any character in abc

// [^ abc]//any character other than abc

// [a - z] // a to z any character from a-z

// [A - Z] // A to A any character from A-z

// [a - zA - z] // any character from a-z and A-Z

// [0 - 9] // any number between to 0-9

// Quantifiers

// []?  // it can occure zero or one time  the pattern returned inside the square bracket

// []+ // it can occur one or more time the pattern returned inside the square bracket

// []* // it can occure zero or more time

// []{n} //

// []{n,} at least n times and it can be more than n times as well

// []{y,z} at least y times less than z times

// REgext MetaCharacters...

// \d  which is equalant to[0 - 9]

// \D which is eqvivalent to [^0-9]

// \w which is eqvivalent to [a-zA-z_0-9]

// \W which is eqvivalent to [^\w]

// mobile number start with 8 or 9 and it should be 10 characters length

// /[89]{1}[0-9]{9}/

// [A-Z]{1}[a-z[0-9]{1}]

//   [A - Z][a - z] * [0 - 9][a-z]*

console.log('hello js')

async function hello() {
  const ans = await Promise.resolve(42)
  console.log(ans)
  console.log('hello js')
}
hello().then(() => console.log('I am konduru sai'))
// console.log('end of the function js')
