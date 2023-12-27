interface Categories {
  id: number | null;
  name: string | null;
  description: string | null;
  content: any;
  image: string | null;
  created_at: string | null;
  updated_at: string | null;
}

interface Collections {
  id: number | null;
  name: string | null;
  description: string | null;
  content: any;
  image: string | null;
  categories: Array<Categories>;
  created_at: string | null;
  updated_at: string | null;
}

interface Steps {
  id?: number;
  content: string;
}

interface Levels {
  id?: number;
  name: string;
}

interface Ingredients {
  id?: number | null;
  name: any;
}

interface Recipe {
  id?: number | null;
  author?: string | null;
  name?: string | null;
  description?: string | null;
  content?: any;
  ingredients: Ingredients[];
  steps: Steps[];
  collections: Collections[];
  categories: Categories[];
  levels: Levels[];
  image?: string | null;
  status?: boolean;
  time?: string | null;
  related?: Recipe[];
}

export type { Categories, Collections, Ingredients, Levels, Recipe, Steps };
