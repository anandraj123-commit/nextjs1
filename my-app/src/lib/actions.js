'use server';
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInValidText(text){
    return !text || text.trim() === '';
}

export async function shareMeal(prevState,formData){

    'use server';

    const meal = {
      title:formData.get('title'),
      summary:formData.get('summary'),
      instructions:formData.get('instructions'),
      image: formData.get('image'),
      creator:formData.get('creator') || 'admin',
      creator_email:formData.get('email')
    }

    if(isInValidText(meal.title) ||
    isInValidText(meal.summary) || 
    isInValidText(meal.instructions) || 
    isInValidText(meal.creator) || 
    isInValidText(meal.creator_email) || 
    !meal.creator_email.includes('@') || 
    !meal.image || meal.image.size === 0) {
         return {message:'Invalid Input.'}
    }
    console.log(meal);
    await saveMeal(meal);
    revalidatePath('/meals');
    // revalidatePath('/meals','page');
    // revalidatePath('/meals',"layout");
    // revalidatePath('/',"layout");
    redirect('/meals');
   }