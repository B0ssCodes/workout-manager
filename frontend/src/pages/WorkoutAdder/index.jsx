import ChestData from "./ChestData"
import { useState } from "react"
import './workoutAdder.css'



const WorkoutAdder = () => {

    const [chosenSections, setChosenSections] = useState("chest");
    const [selectedExercise, setSelectedExercise] = useState(null);
    const [numSets, setNumSets] = useState(2);
    const [formData, setFormData] = useState({});




    const handleExerciseClick = (key) => {
        setSelectedExercise(key);
    }

    const handleAddSet = () => {
        setNumSets(numSets + 1);
    }

    const handleRemoveSet = () => {
        if (numSets > 1) {
            setNumSets(numSets - 1);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        // Here you can send formData to your database
    }

    const handleSetChange = (exerciseKey, setNumber, weight, reps) => {
        setFormData({
            ...formData,
            [exerciseKey]: {
                ...formData[exerciseKey],
                [setNumber]: { weight, reps }
            }
        });
    }
    
    const chestExercises = ChestData.map((exercise) => {
        return (
            <div className="col-6 col-md-4 col-lg-3" key={exercise.key}>
                <div className="card mt-3 rounded-5 text-center clickable-card"  
                onClick={() => handleExerciseClick(exercise.key)}>
                    <div className="mx-auto">
                        <img src={exercise.image} className="img-fluid rounded-5" alt="..." />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{exercise.title}</h5>
                        {selectedExercise === exercise.key && (
                            <form onSubmit={handleSubmit}>
                                {[...Array(numSets)].map((_, i) => (
                                    <div key={i}>
                                        <h6 className="border-bottom">{`Set ${i + 1}`}</h6>
                                        <label className="form-label">
                                            {`Weight:`}
                                            <input 
                                                className="form-control"
                                                type="number" 
                                                name={`set${i + 1}Weight`} 
                                                onChange={(e) => handleSetChange(exercise.key, `set${i + 1}`, e.target.value, formData[exercise.key]?.[`set${i + 1}`]?.reps)}
                                            />
                                        </label>
                                        <label  className="form-label">
                                            {`Reps:`}
                                            <input 
                                                className="form-control"
                                                type="number" 
                                                name={`set${i + 1}Reps`} 
                                                onChange={(e) => handleSetChange(exercise.key, `set${i + 1}`, formData[exercise.key]?.[`set${i + 1}`]?.weight, e.target.value)}
                                            />
                                        </label>
                                    </div>
                                ))}
                                <button type="button" className="btn btn-primary m-1" onClick={handleAddSet}>+</button>
                                <button type="button" className="btn btn-primary m-1" onClick={handleRemoveSet}>-</button>
                                <button type="submit" className="btn btn-primary">Submit Exercise</button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        )
    })
    return (
         <>
         <h1 className="display-1 text-center mb-4 border-bottom">Workout Adder</h1>
         <div className="container">
            <h2 className="display-6 text-center bg-altDark mb-5">Which exercises did you do?</h2>
            
            
            <section id="chest">
                <h2 className="display-6 border-bottom mb-4">Chest</h2>
                <div className="container"> 
                <div className="row">
                    {chestExercises}
                    <button onClick={handleSubmit}>Final Submit</button>
                    </div>
                
                
                </div>
            </section>

            <section id="back">
                <h2 className="display-6 border-bottom">Back</h2>
                <div className="container"> 


                </div>
            </section>

            <section id="shoulders">
                <h2 className="display-6 border-bottom">Shoulders</h2>
                <div className="container">


                </div>
            </section>

            <section id="biceps">
                <h2 className="display-6 border-bottom">Biceps</h2>
                <div className="container"> 


                </div>
            </section>

            <section id="triceps">
                <h2 className="display-6 border-bottom">Triceps</h2>
                <div className="container"> 


                </div>
            </section>

            <section id="legs">
                <h2 className="display-6 border-bottom">Legs</h2>
                <div className="container"> 


                </div>
            </section>


         </div>
         </>
    )
}

export default WorkoutAdder;