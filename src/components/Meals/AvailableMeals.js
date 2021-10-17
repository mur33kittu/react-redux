import {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import {generateMealData} from '../../actions';

const AvailableMeals = props => {
  const [meals, setMeals] = useState ([]);
  const [isLoading, setIsLoading] = useState (true);
  const [httpError, setHttpError] = useState ();
  
  useEffect (() => {
    // const fetchMeals = async () => {
      
      const responseData = props.meals;
      console.log(responseData);
      const loadedMeals = [];
      debugger;
      for (const key in responseData.data.categorys) {
        // console.log(responseData.data.categorys[key].menuItems);
        loadedMeals.push ({
          id: key,
          name: responseData.data.categorys[key].name,
          // description: responseData.data.meals[key].description,
          menuItems: responseData.data.categorys[key].menuItems,
          // price: responseData.data.meals[key].price,
        });
      }

      setMeals (loadedMeals);
      setIsLoading (false);
    // };

    // fetchMeals ().catch (error => {
    //   setIsLoading (false);
    //   setHttpError (error.message);
    // });

  }, [props?.meals]);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }
  const mealsList = meals && meals.map ((meal, i) => (
    <Card key={i}>
      <h3 className={classes.mealsH1}>{meal.name}</h3>
      {meal.menuItems.map (m => (
        <MealItem
          key={m.id}
          id={m.id}
          name={m.name}
          description={m.description}
          price={m.subItems[0].price}
          cuisine={m.subItems[0].cuisine_name}
        />
      ))}
    </Card>
  ));

  return (
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};

function mapStateToProps (state) {
  return {meals: state.meals};
}

export default connect (mapStateToProps) (AvailableMeals);
