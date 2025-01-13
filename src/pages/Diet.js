// src/pages/Diet.js
import React from 'react';
import './Diet.css'; // Import the CSS for styling

const Diet = () => {
  const dietPlan = {
    bulk: {
      vegetarian: {
        Monday: [
          { food: "Oats with milk and nuts", quantity: "1 bowl" },
          { food: "Paneer curry with roti", quantity: "1 plate" },
          { food: "Banana shake", quantity: "1 glass" }
        ],
        Tuesday: [
          { food: "Poha with peanuts", quantity: "1 plate" },
          { food: "Rajma chawal", quantity: "1 bowl" },
          { food: "Sweet potato", quantity: "1 medium" }
        ],
        Wednesday: [
          { food: "Upma with coconut chutney", quantity: "1 plate" },
          { food: "Chana masala with rice", quantity: "1 bowl" },
          { food: "Fruit salad", quantity: "1 bowl" }
        ],
        Thursday: [
          { food: "Idli with sambar", quantity: "2 idlis" },
          { food: "Palak paneer with paratha", quantity: "1 plate" },
          { food: "Dry fruits and lassi", quantity: "1 cup" }
        ],
        Friday: [
          { food: "Aloo paratha with curd", quantity: "2 parathas" },
          { food: "Veg biryani", quantity: "1 plate" },
          { food: "Mango shake", quantity: "1 glass" }
        ],
        Saturday: [
          { food: "Sprouts salad", quantity: "1 bowl" },
          { food: "Paneer butter masala with naan", quantity: "1 plate" },
          { food: "Fresh fruit juice", quantity: "1 glass" }
        ],
        Sunday: [
          { food: "Dhokla", quantity: "1 piece" },
          { food: "Vegetable pulao with raita", quantity: "1 bowl" },
          { food: "Milk with dates", quantity: "1 glass" }
        ],
      },
      nonVegetarian: {
        Monday: [
          { food: "Egg bhurji with whole-grain bread", quantity: "2 eggs + 2 slices bread" },
          { food: "Chicken curry with rice", quantity: "1 plate" },
          { food: "Boiled eggs", quantity: "2 eggs" }
        ],
        Tuesday: [
          { food: "Chicken sandwich", quantity: "1 sandwich" },
          { food: "Fish curry with roti", quantity: "1 plate" },
          { food: "Protein shake", quantity: "1 glass" }
        ],
        Wednesday: [
          { food: "Omelette with toast", quantity: "2 eggs + 2 slices toast" },
          { food: "Egg biryani", quantity: "1 plate" },
          { food: "Grilled chicken", quantity: "1 serving" }
        ],
        Thursday: [
          { food: "Scrambled eggs with spinach", quantity: "2 eggs" },
          { food: "Chicken tikka with paratha", quantity: "4 pieces tikka + 1 paratha" },
          { food: "Tandoori fish", quantity: "1 piece" }
        ],
        Friday: [
          { food: "Boiled eggs", quantity: "2 eggs" },
          { food: "Butter chicken with naan", quantity: "1 plate" },
          { food: "Banana shake", quantity: "1 glass" }
        ],
        Saturday: [
          { food: "Chicken soup", quantity: "1 bowl" },
          { food: "Fish fry with rice", quantity: "1 plate" },
          { food: "Yogurt with nuts", quantity: "1 cup" }
        ],
        Sunday: [
          { food: "Egg dosa", quantity: "1 dosa" },
          { food: "Mutton curry with rice", quantity: "1 plate" },
          { food: "Milk with almonds", quantity: "1 glass" }
        ],
      },
    },
    cut: {
      vegetarian: {
        Monday: [
          { food: "Vegetable soup", quantity: "1 bowl" },
          { food: "Grilled tofu salad", quantity: "1 plate" },
          { food: "Green tea", quantity: "1 cup" }
        ],
        Tuesday: [
          { food: "Steamed idli", quantity: "2 idlis" },
          { food: "Dal with quinoa", quantity: "1 bowl" },
          { food: "Cucumber slices", quantity: "1 serving" }
        ],
        Wednesday: [
          { food: "Sprouts salad", quantity: "1 bowl" },
          { food: "Stir-fried vegetables", quantity: "1 plate" },
          { food: "Low-fat yogurt", quantity: "1 cup" }
        ],
        Thursday: [
          { food: "Oats with almond milk", quantity: "1 bowl" },
          { food: "Vegetable khichdi", quantity: "1 bowl" },
          { food: "Herbal tea", quantity: "1 cup" }
        ],
        Friday: [
          { food: "Fruit salad", quantity: "1 bowl" },
          { food: "Pumpkin soup", quantity: "1 bowl" },
          { food: "Roti with boiled vegetables", quantity: "1 roti" }
        ],
        Saturday: [
          { food: "Low-fat paneer tikka", quantity: "1 serving" },
          { food: "Brown rice with dal", quantity: "1 bowl" },
          { food: "Lime water", quantity: "1 glass" }
        ],
        Sunday: [
          { food: "Steamed vegetables", quantity: "1 plate" },
          { food: "Vegetable pulao", quantity: "1 bowl" },
          { food: "Coconut water", quantity: "1 glass" }
        ],
      },
      nonVegetarian: {
        Monday: [
          { food: "Boiled eggs", quantity: "2 eggs" },
          { food: "Grilled chicken salad", quantity: "1 serving" },
          { food: "Green tea", quantity: "1 cup" }
        ],
        Tuesday: [
          { food: "Fish soup", quantity: "1 bowl" },
          { food: "Chicken stew with quinoa", quantity: "1 bowl" },
          { food: "Cucumber slices", quantity: "1 serving" }
        ],
        Wednesday: [
          { food: "Egg white omelette", quantity: "4 egg whites" },
          { food: "Stir-fried chicken with veggies", quantity: "1 plate" },
          { food: "Black coffee", quantity: "1 cup" }
        ],
        Thursday: [
          { food: "Grilled fish", quantity: "1 piece" },
          { food: "Boiled eggs with salad", quantity: "2 eggs" },
          { food: "Herbal tea", quantity: "1 cup" }
        ],
        Friday: [
          { food: "Chicken soup", quantity: "1 bowl" },
          { food: "Tandoori fish with salad", quantity: "1 piece" },
          { food: "Coconut water", quantity: "1 glass" }
        ],
        Saturday: [
          { food: "Steamed fish", quantity: "1 piece" },
          { food: "Chicken breast with stir-fried vegetables", quantity: "1 serving" },
          { food: "Lime water", quantity: "1 glass" }
        ],
        Sunday: [
          { food: "Egg salad", quantity: "1 plate" },
          { food: "Fish curry with brown rice", quantity: "1 plate" },
          { food: "Yogurt with mint", quantity: "1 cup" }
        ],
      },
    },
  };

  return (
    <div className="diet-page">
      <h1>Indian Diet Plan</h1>
      <div className="diet-section">
        <h2>Bulk Diet</h2>
        <div className="diet-category">
          <h3>Vegetarian</h3>
          <ul>
            {Object.entries(dietPlan.bulk.vegetarian).map(([day, foods]) => (
              <li key={day}>
                <strong>{day}:</strong> 
                {foods.map((meal, index) => (
                  <div key={index}>
                    {meal.food} - {meal.quantity}
                  </div>
                ))}
              </li>
            ))}
          </ul>
        </div>
        <div className="diet-category">
          <h3>Non-Vegetarian</h3>
          <ul>
            {Object.entries(dietPlan.bulk.nonVegetarian).map(([day, foods]) => (
              <li key={day}>
                <strong>{day}:</strong> 
                {foods.map((meal, index) => (
                  <div key={index}>
                    {meal.food} - {meal.quantity}
                  </div>
                ))}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="diet-section">
        <h2>Cut Diet</h2>
        <div className="diet-category">
          <h3>Vegetarian</h3>
          <ul>
            {Object.entries(dietPlan.cut.vegetarian).map(([day, foods]) => (
              <li key={day}>
                <strong>{day}:</strong> 
                {foods.map((meal, index) => (
                  <div key={index}>
                    {meal.food} - {meal.quantity}
                  </div>
                ))}
              </li>
            ))}
          </ul>
        </div>
        <div className="diet-category">
          <h3>Non-Vegetarian</h3>
          <ul>
            {Object.entries(dietPlan.cut.nonVegetarian).map(([day, foods]) => (
              <li key={day}>
                <strong>{day}:</strong> 
                {foods.map((meal, index) => (
                  <div key={index}>
                    {meal.food} - {meal.quantity}
                  </div>
                ))}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Diet;
