export interface IWishData {
  status: string;
  count: number;
  data: IWishProductsList[];
}

export interface IWishProductsList {
  sold: number;
  images: string[];
  subcategory: ISubcategory[];
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
  __v: number;
  id: string;
  priceAfterDiscount?: number;
}

export interface ICategory {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface ISubcategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}
