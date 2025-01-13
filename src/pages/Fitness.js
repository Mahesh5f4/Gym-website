import React from "react";
import "./Fitness.css"; // Import the CSS for styling

const Fitness = () => {
  const workoutPlan = {
    bulk: {
      Monday: {
        routine: "Chest and Triceps",
        exercises: [
          { name: "Bench Press", sets: 4, reps: 8 },
          { name: "Incline Dumbbell Press", sets: 3, reps: 10 },
          { name: "Tricep Pushdowns", sets: 3, reps: 12 },
          { name: "Chest Fly (Machine)", sets: 3, reps: 12 },
          { name: "Overhead Tricep Extension", sets: 4, reps: 8 },
          { name: "Dips", sets: 3, reps: 10 },
        ],
      },
      Tuesday: {
        routine: "Back and Biceps",
        exercises: [
          { name: "Pull-Ups", sets: 4, reps: 6 },
          { name: "Barbell Rows", sets: 4, reps: 8 },
          { name: "Lat Pulldowns", sets: 3, reps: 10 },
          { name: "Dumbbell Bicep Curls", sets: 3, reps: 12 },
          { name: "Hammer Curls", sets: 3, reps: 10 },
          { name: "Face Pulls", sets: 3, reps: 12 },
        ],
      },
      Wednesday: {
        routine: "Legs",
        exercises: [
          { name: "Barbell Squats", sets: 4, reps: 8 },
          { name: "Lunges", sets: 3, reps: 10 },
          { name: "Leg Press", sets: 4, reps: 10 },
          { name: "Hamstring Curls", sets: 3, reps: 12 },
          { name: "Calf Raises", sets: 4, reps: 15 },
          { name: "Step-Ups", sets: 3, reps: 12 },
        ],
      },
      Thursday: {
        routine: "Shoulders",
        exercises: [
          { name: "Overhead Press", sets: 4, reps: 8 },
          { name: "Lateral Raises", sets: 3, reps: 12 },
          { name: "Front Raises", sets: 3, reps: 12 },
          { name: "Arnold Press", sets: 4, reps: 8 },
          { name: "Upright Rows", sets: 3, reps: 10 },
          { name: "Shrugs", sets: 4, reps: 12 },
        ],
      },
      Friday: {
        routine: "Arms",
        exercises: [
          { name: "Barbell Bicep Curls", sets: 4, reps: 8 },
          { name: "Skull Crushers", sets: 3, reps: 10 },
          { name: "Tricep Dips", sets: 3, reps: 10 },
          { name: "Reverse Curls", sets: 3, reps: 10 },
          { name: "Close Grip Bench Press", sets: 4, reps: 8 },
          { name: "Concentration Curls", sets: 3, reps: 12 },
        ],
      },
      Saturday: {
        routine: "Full Body Workout",
        exercises: [
          { name: "Deadlifts", sets: 4, reps: 6 },
          { name: "Push-Ups", sets: 4, reps: 15 },
          { name: "Pull-Ups", sets: 3, reps: 8 },
        ],
      },
    },
    cut: {
      Monday: {
        routine: "Chest and Triceps",
        exercises: [
          { name: "Push-Ups", sets: 4, reps: 15 },
          { name: "Dumbbell Bench Press", sets: 3, reps: 12 },
          { name: "Chest Fly", sets: 3, reps: 12 },
          { name: "Dips", sets: 3, reps: 10 },
          { name: "Tricep Pushdowns", sets: 3, reps: 12 },
          { name: "Overhead Tricep Extensions", sets: 3, reps: 12 },
        ],
      },
      Tuesday: {
        routine: "Back and Biceps",
        exercises: [
          { name: "Pull-Ups", sets: 4, reps: 6 },
          { name: "Lat Pulldowns", sets: 3, reps: 10 },
          { name: "Barbell Rows", sets: 4, reps: 8 },
          { name: "Dumbbell Bicep Curls", sets: 3, reps: 12 },
          { name: "Hammer Curls", sets: 3, reps: 10 },
          { name: "Face Pulls", sets: 3, reps: 12 },
        ],
      },
      Wednesday: {
        routine: "Legs",
        exercises: [
          { name: "Squats", sets: 4, reps: 8 },
          { name: "Lunges", sets: 3, reps: 10 },
          { name: "Leg Press", sets: 4, reps: 10 },
          { name: "Hamstring Curls", sets: 3, reps: 12 },
          { name: "Calf Raises", sets: 4, reps: 15 },
          { name: "Step-Ups", sets: 3, reps: 12 },
        ],
      },
      Thursday: {
        routine: "Shoulders",
        exercises: [
          { name: "Overhead Press", sets: 4, reps: 8 },
          { name: "Lateral Raises", sets: 3, reps: 12 },
          { name: "Front Raises", sets: 3, reps: 12 },
          { name: "Arnold Press", sets: 4, reps: 8 },
          { name: "Upright Rows", sets: 3, reps: 10 },
          { name: "Shrugs", sets: 4, reps: 12 },
        ],
      },
      Friday: {
        routine: "Arms",
        exercises: [
          { name: "Barbell Bicep Curls", sets: 4, reps: 8 },
          { name: "Skull Crushers", sets: 3, reps: 10 },
          { name: "Tricep Dips", sets: 3, reps: 10 },
          { name: "Reverse Curls", sets: 3, reps: 10 },
          { name: "Close Grip Bench Press", sets: 4, reps: 8 },
          { name: "Concentration Curls", sets: 3, reps: 12 },
        ],
      },
      Saturday: {
        routine: "Full Body Workout",
        exercises: [
          { name: "Deadlifts", sets: 4, reps: 6 },
          { name: "Push-Ups", sets: 4, reps: 15 },
          { name: "Pull-Ups", sets: 3, reps: 8 },
        ],
      },
    },
  };

  return (
    <div className="fitness-container">
      <h1>Workout Plan</h1>
      <div className="plan">
        <h2>Bulk</h2>
        {Object.keys(workoutPlan.bulk).map((day) => (
          <div key={day} className="day">
            <h3>{day}</h3>
            <p>{workoutPlan.bulk[day].routine}</p>
            <ul>
              {workoutPlan.bulk[day].exercises.map((exercise, index) => (
                <li key={index}>
                  <p>{exercise.name}</p>
                  <p>Sets: {exercise.sets} | Reps: {exercise.reps}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <h2>Cut</h2>
        {Object.keys(workoutPlan.cut).map((day) => (
          <div key={day} className="day">
            <h3>{day}</h3>
            <p>{workoutPlan.cut[day].routine}</p>
            <ul>
              {workoutPlan.cut[day].exercises.map((exercise, index) => (
                <li key={index}>
                  <p>{exercise.name}</p>
                  <p>Sets: {exercise.sets} | Reps: {exercise.reps}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fitness;