import { useReducer } from 'react'
import { quizReducer } from './reducers/quizReducer'
import { initialState } from './data/quizData'

// QuestionBank Component - Exercise 2
export function QuestionBank() {
  const [state, dispatch] = useReducer(quizReducer, initialState)

  const { questions, currentQuestion, selectedOption, score, showScore } = state

  const handleOptionSelect = (option) => {
    dispatch({ type: 'SELECT_OPTION', payload: option })
  }

  const handleNextQuestion = () => {
    if (selectedOption === '') {
      alert('Please select an option before proceeding!')
      return
    }
    dispatch({ type: 'NEXT_QUESTION', payload: selectedOption })
  }

  const handleRestartQuiz = () => {
    dispatch({ type: 'RESTART_QUIZ' })
  }

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          <h2>Quiz Complete!</h2>
          <p className="score-text">
            Your Score: <span className="score-number">{score}</span>/
            <span className="score-number">{questions.length}</span>
          </p>
          <p className="score-percentage">
            {Math.round((score / questions.length) * 100)}%
          </p>
          <button onClick={handleRestartQuiz} className="restart-btn">
            Restart Quiz
          </button>
        </div>
      ) : (
        <div className="question-section">
          <div className="question-header">
            <h3 className="question-number">
              Question {currentQuestion + 1}/{questions.length}
            </h3>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                }}
              ></div>
            </div>
          </div>

          <h2 className="question-text">{questions[currentQuestion].question}</h2>

          <div className="options-container">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option}
                onClick={() => handleOptionSelect(option)}
                className={`option-btn ${selectedOption === option ? 'selected' : ''}`}
              >
                {option}
              </button>
            ))}
          </div>

          <button
            onClick={handleNextQuestion}
            className="next-btn"
            disabled={selectedOption === ''}
          >
            {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
          </button>
        </div>
      )}
    </div>
  )
}
