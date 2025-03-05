import Navbar from "./Navbar";
import friendsEpisodeData from "../assets/assets";



  const DisplayHome = () => {

    const episodeList = friendsEpisodeData.map((episode, index) => (
      <div key={index} className="episode">
        <h3>{episode.title}</h3>
        <p>{episode.description}</p>
      </div>
    ));
return (
    <>
      <Navbar />
      <div className="my-5 font-bold text-2xl">Friends Episodes</div>
      <div className="my-5 font-bold text-2xl">{episodeList}</div>
    </>
  );
};

export default DisplayHome;
