import { tours } from "../data";
import Title from "./Title";
import Tour from "./Tour";
import { useState } from "react";

const Tours = () => {
  const [toursData, setToursData] = useState(tours);

  const removeTour = (id) => {
    setToursData((prev) => prev.filter((tour) => tour.id !== id));
  };

  const refreshTours = () => setToursData(tours);

  if (toursData.length === 0) {
    return (
      <section className="section" id="tours">
        <Title title="featured" subTitle="tours" />
        <div className="section-center featured-center">
          <p>no tours left</p>
          <button className="btn" onClick={refreshTours}>refresh</button>
        </div>
      </section>
    );
  }

  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {toursData.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};
export default Tours;
