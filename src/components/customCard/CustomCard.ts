 export interface CustomCardProps {
    id: string | number;
    image: string;
    title: string;
    description: string;
    categories?: string[];
    foodType?: string;
    linkTo: string;
    style?: React.CSSProperties ;
   
  }