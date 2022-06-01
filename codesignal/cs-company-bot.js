/* Each CodeSignal Company Bot is trained by engineers from that specific company.The way it works is that a representative group of engineers from each company is identified as trainers before the bot goes live, and they CodeFight against the bot during a training phase.The current training algorithm is definitely more complex, but let's assume it works this way:

For each trainer we collect two pieces of information per task[answerTime, correctness], where correctness is 1 if the answer was correct, -1 if the answer was wrong, and 0 if no answer was given.In this case, the bot's correct answer time for a given task would be the average of the answer times from the trainers who answered correctly. Given all of the training information for a specific task, calculate the bot's answer time.

  Example

For trainingData = [[3, 1],
[6, 1],
[4, 1],
[5, 1]]
the output should be solution(trainingData) = 4.5.

All four trainers have solved the task correctly, so the answer is(3 + 6 + 4 + 5) / 4 = 4.5.

For trainingData = [[4, 1],
[4, -1],
[0, 0],
[6, 1]]
the output should be solution(trainingData) = 5.0.

Only the 1st and the 4th trainers(1 - based) submitted correct solutions, so the answer is(4 + 6) / 2 = 5.0.

For trainingData = [[4, -1],
[0, 0],
[5, -1]]
the output should be solution(trainingData) = 0.0.

No correct answers were given for the task.
  Input / Output
  [execution time limit]4 seconds(js)
  [input] array.array.integer trainingData
The ith element of trainingData contains exactly 2 elements: trainingData[i][0] is the answer time for the ith person and trainingData[i][1] is correctness.

If a trainer answered correctly, then correctness equals 1;
If a trainer answered incorrectly, then correctness equals - 1;
If a trainer didn't give any answer, answerTime and correctness both equal to 0.

*/

// 5/31/22 live whiteboard with Steve Behm

function solution(trainingData) {
  const data = trainingData;
  let counter = 0;
  let sum = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i][1] === 1) {
      sum += data[i][0];
      counter++;
    }
  }

  if (counter === 0) {
    return 0;
  }

  return sum / counter;

  // if (correct.length === 0) {
  //     return 0;
  // } else {

  //     for (let j = 0; j < correct.length; j++) {
  //         sum += correct[j];
  //     }

  //     const avg = sum / correct.length;
  //     return avg;
  // }
}

/*
return the average answerTime of all correct answers
given training data [answerTime, correctness]
correct = 1

loop through trainingData array
initialize at i = 0
check if at each index, the second index of that subarray is 1
if 1, then push minutes into a new array
after all items are interated, loop and sum values of new array, divide by number of elements in array

return the average


1 para - initialize variables
2 para - body code
3 para - return
*/
