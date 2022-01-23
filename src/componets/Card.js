export default function Card({ trip: {imageUrl, title, googleMapsUrl, startDate, endDate, description} }) {
  return (
    <div className="flex-container flex-center padding-10">
      <img className="card-image" src={`./img/${imageUrl}`} alt={title} />
      <div className="radius-10px">
        <div className="flex-container width-400 padding-10">
          <img src="./img/location.svg" alt="location icon"/>
          <p className="margin-x-5">{title}</p>
          <a className="margin-x-5 text-mute" href={googleMapsUrl}>View on Google Maps</a>
        </div>
        <h1 className="margin-x-10">{title}</h1>
        <p className="margin-x-10 text-bold">{startDate} - {endDate}</p>
        <p className="margin-x-10 width-400 text-justify">{description}</p>
      </div>
    </div>
  );
}
