 export interface IProduct {
  sold: number;
  images: string[];
  subcategory: object[];
  ratingsQuantity: number;
  _id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  price: number;
  imageCover: string;
  category: ICategory;
  brand: ICategory;
  ratingsAverage: number;
  createdAt: string;
  updatedAt: string;
  id: string;
}
export interface ICategory {
  _id: string;
  name: string;
  slug: string;
  image: string;
}
