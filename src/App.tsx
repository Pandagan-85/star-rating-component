import { useState } from "react";
import "./App.css";
import StarRating from "./components/star-rating.component";
export default function App() {
  const [productRating, setProductRating] = useState(0);
  return (
    <main>
      <p> Star Rating value: {productRating}</p>
      <StarRating maxRating={6} onChange={setProductRating} />
    </main>
  );
}
