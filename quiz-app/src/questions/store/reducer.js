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
  },
  {
    id: 4,
    questionText: 'Which cricketer had scored highest individual score in first-class cricket?',
    options: [
      { id: 1, text: 'Don Bradman' },
      { id: 2, text: 'Brian Lara' },
      { id: 3, text: 'Lane Hutton' },
      { id: 4, text: 'Gary Sobers' },
    ],
    answer: 2,
    usersAnswer: 0
  },
  {
    id: 5,
    questionText: 'Who is Highest wicket taker for India across all formats ?',
    options: [
      { id: 1, text: 'Kapil Dev' },
      { id: 2, text: 'Anil Kumble' },
      { id: 3, text: 'J Srinath' },
      { id: 4, text: 'R Ashwin' },
    ],
    answer: 2,
    usersAnswer: 0
  },
  {
    id: 6,
    questionText: 'Which cricketer had scored highest individual score in ODI cricket?',
    options: [
      { id: 1, text: 'Virender Sehwag' },
      { id: 2, text: 'Chris Gayle' },
      { id: 3, text: 'Martin Guptill' },
      { id: 4, text: 'Rohit Sharma' },
    ],
    answer: 4,
    usersAnswer: 0
  },
  {
    id: 7,
    questionText: 'Which cricketer had scored fastest century in ODI cricket?',
    options: [
      { id: 1, text: 'Viv Richards' },
      { id: 2, text: 'Corey Anderson' },
      { id: 3, text: 'Shahid Afridi' },
      { id: 4, text: 'AB De Villiers' },
    ],
    answer: 4,
    usersAnswer: 0
  },
  {
    id: 8,
    questionText: 'Which cricketer has taken most catches in ODI cricket?',
    options: [
      { id: 1, text: 'Ricky Ponting' },
      { id: 2, text: 'Mahela Jaywardhane' },
      { id: 3, text: 'Jack Kallis' },
      { id: 4, text: 'Mark Waugh' },
    ],
    answer: 2,
    usersAnswer: 0
  },
  {
    id: 9,
    questionText: 'Which cricketer had scored highest individual score in Test cricket?',
    options: [
      { id: 1, text: 'Sanath Jayasurya' },
      { id: 2, text: 'Mathew Hayden' },
      { id: 3, text: 'Brian Lara' },
      { id: 4, text: 'Sachin Tendulkar' },
    ],
    answer: 3,
    usersAnswer: 0
  },
  {
    id: 10,
    questionText: 'Which cricketer had scored fastest century in Test cricket?',
    options: [
      { id: 1, text: 'Viv Richards' },
      { id: 2, text: 'Brendon McCullum' },
      { id: 3, text: 'Brian Lara' },
      { id: 4, text: 'Sachin Tendulkar' },
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