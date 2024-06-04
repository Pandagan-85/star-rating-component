import "./App.css";
import StarRating from "./components/star-rating.component";
export default function App() {
  return (
    <main>
      <StarRating maxRating={6} />
    </main>
  );
}
