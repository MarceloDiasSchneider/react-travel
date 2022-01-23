import trips_data from "../data.json"
import Card from "./Card"

export default function Trip() {
  let trips =  trips_data.map((trip, key) => (
    <Card
      key={key} 
      trip={trip} 
    />
  ))
  return (
    <div className="content padding-10">
      {trips}
    </div>
  )
}