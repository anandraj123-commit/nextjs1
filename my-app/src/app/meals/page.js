import Link from 'next/link';
import { Suspense } from 'react';
import classes from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';
import {getMeals} from '@/lib/meals';


export const metadata = {
  title: 'All Meals',
  description: 'Browse the delicious meals shared by our vibrant Community.',
};

async function Meals(){
  const meals = await getMeals();
  return <MealsGrid meals={meals}  />
}



export default async function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}></div>
        <div>
          <div className={classes.hero}>
            <h1>NextLevel Food for NextLevel Foodies</h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
           <Meals/>
        </Suspense>
      </main>
    </>
  );
}