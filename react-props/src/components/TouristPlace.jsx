function TouristPlace({placeName, desc, img}){
    return(
        <>
    <div className="border rounded-md shadow-md p-4 m-4 w-80">
      <h2 className="text-xl font-bold mb-2">{placeName}</h2>
      <img src={img} alt={placeName} className="w-full h-48 object-cover rounded-xl mb-3" />
      <p className="text-gray-600 mb-2">{desc}</p>
    </div>
        </>
    );
}
export default TouristPlace;

// function TouristPlace(touristPlaces)