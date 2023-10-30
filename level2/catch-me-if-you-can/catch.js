  function sum(x, y) {
    // Check data types first and throw an error if not numbers
    if (typeof x !== 'number' || typeof y !== 'number') {
      throw new Error('Both arguments must be of type number');
    }
    return x + y;
  }
  try {
    const result = sum(1, 2);
    console.log('The sum is:', result);
  } catch (error) {
    console.error('Error:', error.message);
  }
  

  let user = { username: "sam", password: "123abc" };

function login(username, password) {
  // Checking credentials
  if (username === user.username && password === user.password) {
    console.log("Login successful!");
  } else {
    throw new Error("Login failed. Invalid credentials.");
  }
}
try {
    login("sam", "123abc"); // Correct credentials should display login successful.
  } catch (error) {
    console.error('Error:', error.message);
  }
  
//   try {
//     login("wronguser", "wrongpass"); // Incorrect credentials should display login unsuccessful.
//   } catch (error) {
//     console.error('Error:', error.message);
//   }
  