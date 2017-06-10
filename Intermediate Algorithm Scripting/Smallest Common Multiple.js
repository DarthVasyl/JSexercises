    /** DESCRIPTION */
    /*
    Find the smallest common multiple of the provided parameters that can be evenly divided by both,
    as well as by all sequential numbers in the range between these parameters.
    The range will be an array of two numbers that will not necessarily be in numerical order.
    e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.
    */

    /** Nested loops solution

        For smallest common multiple we should know
        only that dividers that used frequently
        for example 10 has dividers 2 and 5
        and number 24 has 2*2*2 and 3
        SCM of 10 and 24 is 120 because we count only 2*2*2*3*5
    */

    function smallestCommons(arr) {
      arr.sort(function(a, b) {
        return a - b;
      });
      var numbers = [];
      // find dividers for all numbers in range
      for (var i = arr[0]; i <= arr[1]; i++) {
        numbers.push(getDividers(i));
      }
      var uniqDividers = {};
      for (i = 0; i < numbers.length; i++) {
        // for smallest common multiple we need to know
        // only max dividers count.
        for (var key in numbers[i]) {
          if (res.hasOwnProperty(key)) {
            if (uniqDividers[key] < numbers[i][key]) {
              uniqDividers[key] = numbers[i][key];
            }
          } else {
            uniqDividers[key] = numbers[i][key];
          }
        }
      }
      var scm = 1;
      for (var prop in uniqDividers) {
        scm *= Math.pow(prop, uniqDividers[prop]);
      }
      return scm;
    }

    /* return object with all dividers of num.
    property - divider itself and value - divider frequency */
    function getDividers(num) {
      var dividers = {
        1: 1
      };
      var counts = 0;
      var j = 2;
      // count how many times we found divider
      while (num > 1) {
        while (num % j === 0) {
          counts++;
          num /= j;
        }
        if (counts > 0) {
          dividers[j] = counts;
          counts = 0;
        }
        j++;
      }
      return dividers;
    }
    /** Test calls */
    smallestCommons([1, 5]); // should return 60.
    smallestCommons([5, 1]); // should return 60.
    smallestCommons([1, 13]); // should return 360360.
    smallestCommons([23, 18]); // should return 6056820.
