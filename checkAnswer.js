import path, {dirname} from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const output = fs.readFileSync(path.resolve(__dirname, './output.txt'), 'utf-8')
const answer = fs.readFileSync(path.resolve(__dirname, './answer.txt'), 'utf-8')

const parsedOutput = JSON.parse(output)
const parsedAnswer = JSON.parse(answer)

const outputResults = parsedOutput.testResults[0].assertionResults
const answerResults = parsedAnswer.testResults[0].assertionResults

console.log('outputResults', outputResults)

for (let i = 0; i < outputResults.length; i++) {
  if (
    outputResults[i].fullName === answerResults[i].fullName &&
    outputResults[i].status === answerResults[i].status
  ) {
    continue
  } else {
    throw new Error('Testing failed.')
  }
}

console.log('Testing passed (jest failure is expected).')