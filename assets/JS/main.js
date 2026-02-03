/* Is this working? */
console.log("🟢 I'm here")

/* Program implementation */

  /* Print numbers 1-100 */
  for (let i = 1; i <= 100; i++) {
    
    /* (check) IF number (i) isn't multiple of 3 AND 5 */
    if (!(i % 3 === 0) && !(i % 5 === 0)) {
      // Print 'FizzBuzz'
      console.log(i)

      /* (check) IF number (i) multiple of 3 AND 5 */
    } else if ((i % 3 === 0) && (i % 5 === 0)) {
        // Print 'FizzBuzz'
        console.log('FizzBuzz')

        /* (check) IF number (i) multiple of 3 */
      } else if (i % 3 === 0) {
          // Print 'Fizz'
          console.log('Fizz')

          /* (check) IF number (i) multiple of 5 */
        } else { 
            if (i % 5 === 0) {
              // Print 'Buzz'
              console.log('Buzz')
            }
          }        
  }

  /* Note: The algorithm has been changed in order to have strings taking their own numbers places. */