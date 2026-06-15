// Initial State for Quiz
export const initialState = {
  questions: [
    {
      id: 1,
      question: 'What is the capital of Australia?',
      options: ['Sydney', 'Canberra', 'Melbourne', 'Perth'],
      answer: 'Canberra',
    },
    {
      id: 2,
      question: 'Which planet is known as the Red Planet?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      answer: 'Mars',
    },
    {
      id: 3,
      question: 'What is the largest ocean on Earth?',
      options: ['Atlantic Ocean', 'Indian Ocean', 'Pacific Ocean', 'Arctic Ocean'],
      answer: 'Pacific Ocean',
    },
    {
      id: 4,
      question: 'Who wrote "Romeo and Juliet"?',
      options: ['William Wordsworth', 'William Shakespeare', 'Jane Austen', 'Charles Dickens'],
      answer: 'William Shakespeare',
    },
    {
      id: 5,
      question: 'What is the smallest prime number?',
      options: ['0', '1', '2', '3'],
      answer: '2',
    },
  ],
  currentQuestion: 0,
  selectedOption: '',
  score: 0,
  showScore: false,
}
