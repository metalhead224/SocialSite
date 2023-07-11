<<<<<<< HEAD
export interface Activity {
  id: string;
  title: string;
  date: string;
  description: string;
  category: string;
  city: string;
  venue: string;
}
=======
import { Profile } from "./profile";

export interface Activity {
    id: string;
    title: string;
    description: string;
    category: string;
    date: Date | null;
    city: string;
    venue: string;
    hostUsername?: string;
    isCancelled?: boolean;
    isGoing?: boolean;
    isHost?: boolean
    attendees?: Profile[]
    host?: Profile;
}

export class ActivityFormValues
  {
    id?: string = undefined;
    title: string = '';
    category: string = '';
    description: string = '';
    date: Date | null = null;
    city: string = '';
    venue: string = '';

	  constructor(activity?: ActivityFormValues) {
      if (activity) {
        this.id = activity.id;
        this.title = activity.title;
        this.category = activity.category;
        this.description = activity.description;
        this.date = activity.date;
        this.venue = activity.venue;
        this.city = activity.city;
      }
    }

  }

  export class Activity implements Activity {
    constructor(init?: ActivityFormValues) {
      Object.assign(this, init);
    }
  }
>>>>>>> 6d95d7812a4120f9ccebc3c681cc74d9a3383583
