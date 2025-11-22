import Image from "next/image";
import { getMeal } from "@/lib/meals";
import classes from './page.module.css';
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
    const meal = getMeal(params.mealsSlug);
    if(!meal) {
        notFound();
    }
    return {
        title:meal.title,
        description:meal.summary
    };
}

export default function MealDetailsPage({params}){
    console.log("params",params);
    const meal = getMeal(params.mealsSlug);
    return (
        <>
        <header className={classes.header}>
            <div className={classes.image}>
                <Image src={meal.image} fill/>
            </div>
            <div className={classes.headerText}>
                <h1>{meal.title}</h1>
                <p className={classes.creator}>
                    by <a href={`maito:${meal.creator_email}`}>NAME</a>
                </p>
            </div>
        </header>
        <main>
            <p className={classes.instructions}
            dangerouslySetInnerHTML={{__html: meal.instructions}}>
            </p>
        </main>
        </>
    )
}