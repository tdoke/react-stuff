import { actionTypes } from './actions';

const defaultQuestions = [
  {
    id: 1,
    questionText: 'Which year India won their first Worldcup ?',
    options: [
      { id: 1, text: '1983' },
      { id: 2, text: '1984' },
      { id: 3, text: '1985' },
      { id: 4, text: '1986' },
    ],
    answer: 1,
    usersAnswer: 0
  },
  {
    id: 2,
    questionText: 'Who is Highest run getter for India across all formats ?',
    options: [
      { id: 1, text: 'Rahul Dravid' },
      { id: 2, text: 'Sunil Gavaskar' },
      { id: 3, text: 'Sachin Tendulkar' },
      { id: 4, text: 'Virat Kohli' },
    ],
    answer: 3,
    usersAnswer: 0
  },
  {
    id: 3,
    questionText: 'Who is Highest wicket taker for India across all formats ?',
    options: [
      { id: 1, text: 'Kapil Dev' },
      { id: 2, text: 'Anil Kumble' },
      { id: 3, text: 'J Srinath' },
      { id: 4, text: 'R Ashwin' },
    ],
    answer: 2,
    usersAnswer: 0
  }
]

export default function (state = defaultQuestions, action) {
  switch (action.type) {
    case actionTypes.SET_ANSWER:
      return state.map(qs => 
        (qs.id === action.payload.questionId) ?
          { ...qs, usersAnswer: action.payload.answerId } : qs
      )
    default: return state
  }
}