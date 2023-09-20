export type ProductListType = {
    products: Product[];
    error: string | null;
    loading: boolean;
    searc_results: Product[]
  };
  
  export type Product = {
    id: number;
    column: string;
  };