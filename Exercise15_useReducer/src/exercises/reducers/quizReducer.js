// Quiz Reducer Function
export const quizReducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_OPTION':
      return {
        ...state,
        selectedOption: action.payload,
      }

    case 'NEXT_QUESTION': {
      const isAnswerCorrect =
        action.payload === state.questions[state.currentQuestion].answer

      const nextQuestion = state.currentQuestion + 1

      return {
        ...state,
        currentQuestion: nextQuestion,
        selectedOption: '',
        score: isAnswerCorrect ? state.score + 1 : state.score,
        showScore: nextQuestion >= state.questions.length,
      }
    }

    case 'RESTART_QUIZ':
      return {
        ...state,
        currentQuestion: 0,
        selectedOption: '',
        score: 0,
        showScore: false,
      }

    default:
      return state
  }
}
