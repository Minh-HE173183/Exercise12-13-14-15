# Exercise 15: useReducer Hook

Master React's `useReducer` hook through two progressive exercises.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Then visit: **http://localhost:5173**

---

## 📚 What You'll Learn

### Exercise 1: Counter 🔢
Learn the basics of `useReducer` with a simple counter application.

**Topics**: Reducer functions, actions, dispatching, state updates

### Exercise 2: Quiz Application 🎓
Build a complete quiz app with complex state management.

**Topics**: Multiple state variables, multiple actions, validation, scoring

---

## 📖 Documentation

| Document | Purpose |
|----------|---------|
| **GETTING_STARTED.md** | Quick start guide (read first!) |
| **EXERCISE1_SOLUTION.md** | Exercise 1 detailed explanation |
| **EXERCISE2_SOLUTION.md** | Exercise 2 detailed explanation |
| **DATA_FLOW.md** | Visual data flow diagrams |
| **PROJECT_SUMMARY.md** | Complete project overview |
| **DOCUMENTATION_INDEX.md** | Navigation guide for all docs |
| **COMPLETION_REPORT.md** | Project completion status |

---

## 🎯 Features

✅ Two complete exercises  
✅ Responsive design  
✅ Form validation  
✅ Progress tracking  
✅ Score calculation  
✅ Comprehensive documentation  
✅ Clean code structure  
✅ Best practices  

---

## 📁 Project Structure

```
src/exercises/
├── Exercise1_Counter.jsx       # Simple counter component
├── Exercise2_QuestionBank.jsx  # Complete quiz app
├── reducers/
│   ├── counterReducer.js       # Counter logic
│   └── quizReducer.js          # Quiz logic
├── data/
│   └── quizData.js             # Quiz questions
└── index.js                    # Exports
```

---

## 🏃 How to Use

1. **Start the app**: `npm run dev`
2. **Switch exercises**: Use tabs at the top
3. **Exercise 1**: Click +, -, Reset buttons
4. **Exercise 2**: Answer quiz questions, see score

---

## 💡 Learning Path

**Beginner** → Read GETTING_STARTED.md + Try Exercise 1  
**Intermediate** → Complete Exercise 2 + Read EXERCISE2_SOLUTION.md  
**Advanced** → Study DATA_FLOW.md + Review code patterns  

---

## 📊 Code Quality

```
✅ ESLint: PASSED
✅ Code Style: CONSISTENT
✅ No Errors: 0
✅ No Warnings: 0
```

---

## 🎓 Key Concepts

### useReducer Hook
```javascript
const [state, dispatch] = useReducer(reducer, initialState)
```

### Reducer Function
```javascript
(state, action) => newState
```

### Dispatch Action
```javascript
dispatch({ type: 'ACTION_NAME', payload: value })
```

---

## 🔗 Resources

- [React useReducer Docs](https://react.dev/reference/react/useReducer)
- [Extracting State Logic](https://react.dev/learn/extracting-state-logic-into-a-reducer)
- [Scaling with Reducer & Context](https://react.dev/learn/scaling-up-with-reducer-and-context)

---

## 📋 Available Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Check code quality
npm run preview  # Preview production build
```

---

## 📚 Quiz Questions

The quiz includes 5 questions:
1. Capital of Australia
2. Red Planet
3. Largest Ocean
4. Romeo and Juliet Author
5. Smallest Prime Number

---

## ✨ Next Steps

After completing these exercises:
1. Add more quiz questions
2. Create Exercise 3 (Todo app)
3. Learn useContext + useReducer
4. Build your own reducer-based application

---

## 📞 Questions?

1. Check GETTING_STARTED.md
2. Review exercise solutions
3. Study DATA_FLOW.md
4. Read the code comments

---

## 📈 Project Status

✅ Exercise 1: Complete  
✅ Exercise 2: Complete  
✅ Documentation: Complete  
✅ Code Quality: Passed  

See **COMPLETION_REPORT.md** for detailed status.

---

**Happy Learning! 🎓**

Start with **GETTING_STARTED.md** for best results.
