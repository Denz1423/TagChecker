Requirements:
- NodeJs (Minimal version v20)

Technologies Used:
- JavaScript
- Jest

Setup and Execution:
1. Clone the repository:
    git clone https://github.com/Denz1423/TagChecker.git

2. Navigate to the project directory:
    cd into folder (TagChecker)

3. Install the required dependencies:
    npm install

4. The package.json file contains the following scripts:
    - start: To run the sample inputs (SampleInput.js)
    - test: To execute unit tests (TagChecker.test.js)

5. To run the sample inputs:
    npm start

6. To run the unit tests:
    npm test


Files:
1. TagChecker.js
- This file contains the implementation of the TagChecker function which validates HTML tags within a paragraph. It iterates through the
paragraph ensuring the tags are properly opened and closed in the correct order.

2. SampleInputs.js
- This file provides an array of sample input strings, sourced from the question PDF. It demonstrates how the TagChecker function can be
applied to the given inputs. A for loop is used to iterate over the sample inputs, applying the function to each input.

3. TagChecker.test.js
- The file includes unit tests designed to validate the behaviour of the TagChecker function. The tests ensure that the function handles 
various input cases correctly, including both valid and invalid tag structures.