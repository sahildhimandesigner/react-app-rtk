export type ProductListType = {
    products: Product[];
    error: string | undefined;
    loading: boolean;
  };
  
  export type Product = {
    id: number;
    column: string;
  };