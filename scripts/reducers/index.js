import { combineReducers } from 'redux'
import questions from './questions'

const decisionMaker = combineReducers({
  questions
})

export default decisionMaker
