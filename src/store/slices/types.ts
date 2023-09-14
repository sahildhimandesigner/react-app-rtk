export type ProductListType = {
    products: Product[];
    error: string | undefined
  };
  
  export type Product = {
    id: number;
    name: string;
  };

  export type ProdcutItemTypeProps = {
    id: number;
    column: string;
    description: string;
    product_name: string;
    product_image: string;
    product_price: string;
    product_category: string;
  }