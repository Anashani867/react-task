// import React, { useState, useEffect } from "react";

// function Recipe() {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTime(new Date());
//     }, 1000);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []);

//   function formatTime() {
//     let hours = time.getHours();
//     const minutes = time.getMinutes();
//     const seconds = time.getSeconds();
//     const meridiem = hours >= 12 ? "PM" : "AM";

//     hours = hours % 12 || 12;

//     return `${padZero(hours)}:${padZero(minutes)}:
//     ${padZero(seconds)} ${meridiem}`;
//   }

//   function padZero(number){
//     return (number < 10 ? "0" : "") + number;
//   }

//   return (
//     <div>
//       <div>
//         <span>{formatTime()}</span>
//       </div>
//     </div>
//   );
// }

// export default Recipe;



import React, { useState, useReducer, useEffect, useRef } from "react";

const ingredientReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "CLEAR":
      return [];
    default:
      return state;
  }
};

const RecipePlanner = () => {
  const [ingredients, dispatch] = useReducer(ingredientReducer, []);
  const [form, setForm] = useState({ name: "", quantity: "", unit: "grams", cost: "" });
  const [theme, setTheme] = useState("light");
  const [timer, setTimer] = useState(0);
  const timerRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleAdd = () => {
    if (form.name && form.quantity && form.cost) {
      dispatch({ type: "ADD", payload: { ...form } });
      setForm({ name: "", quantity: "", unit: "grams", cost: "" });
    }
  };

  const handleThemeToggle = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const startTimer = () => {
    if (timerRef.current) return; // Prevent multiple intervals
    timerRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setTimer(0);
  };

  const totalCost = ingredients.reduce((sum, item) => sum + parseFloat(item.cost || 0), 0);

  return (
    <div className={`recipe-planner ${theme}`}>
      <header>
        <h1>Recipe Planner</h1>
        <button className="theme-toggle" onClick={handleThemeToggle}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </header>

      <section className="timer-section">
        <div className="timer-display">⏲ {Math.floor(timer / 60).toString().padStart(2, "0")}:{(timer % 60).toString().padStart(2, "0")}</div>
        <button onClick={startTimer}>▶️</button>
        <button onClick={resetTimer}>🔄</button>
      </section>

      <section className="add-ingredients">
        <h2>Add Ingredients</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Ingredient"
          />
          <input
            name="quantity"
            value={form.quantity}
            onChange={handleChange}
            placeholder="Quantity"
          />
          <select name="unit" value={form.unit} onChange={handleChange}>
            <option value="grams">grams</option>
            <option value="kg">kg</option>
            <option value="liters">liters</option>
          </select>
          <input
            name="cost"
            value={form.cost}
            onChange={handleChange}
            placeholder="Cost"
            type="number"
          />
          <button type="button" onClick={handleAdd}>
            + Add Ingredient
          </button>
        </form>
      </section>

      <section className="ingredients-list">
        <h2>Ingredients List</h2>
        {ingredients.length === 0 ? (
          <p>No ingredients added yet. Start by adding some ingredients above.</p>
        ) : (
          <ul>
            {ingredients.map((item, index) => (
              <li key={index}>
                {item.name} - {item.quantity} {item.unit} - ${item.cost}
              </li>
            ))}
          </ul>
        )}
        <div className="total-cost">
          Total Cost: ${totalCost.toFixed(2)}
        </div>
      </section>
    </div>
  );
};

export default RecipePlanner;
