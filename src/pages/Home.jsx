import { InstagramEmbed, FacebookEmbed } from "react-social-media-embed";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";



function Home() {
  return (
    <div>
    <div className="flex flex-col items-center justify-center" style={{
      flex: 0,
      backgroundColor: "white",
    }}>
      <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      width="65%" 
      className="flex flex-col items-center justify-center">
        <div>
          <img src="CCNBPAFHome1.jpg"/>
        </div>
        <div>
          <img src="CCNBPAFHome2.jpg"/>
        </div>
        <div>
          <img src="CCNBPAFHome3.jpg"/>
        </div>
      </Carousel>
      <br></br>
      <h1 className="text-4xl font-bold">Centro Cultural Necochea — Biblitoteca Popular "Andrés Ferreyra"</h1>
      <p className="mt-4 text-lg italic">«Promoviendo la cultura en la comunidad desde 1907».</p>
      <br></br>
    </div>
    <div className="aspect-[21/9] flex flex-col items-center justify-center" style={{
      flex: 1,
      backgroundColor: "white",
      }}>
        <br></br>
        <br></br>
        <div className="aspect-[21/9] flex flex-col items-center justify-center" style={{
          flex: 1,
          backgroundColor: "lightblue",
        }}>
          <br></br>
          <div>
            <InstagramEmbed url="https://www.instagram.com/centroculturalnecochea/" width={328}/>
          </div>
          <div>
            <FacebookEmbed url="https://www.facebook.com/centroculturalnecochea/" width={328}></FacebookEmbed>
          </div>
           <br></br>
        </div>
        <br></br>
        <br></br>
      </div> 
    </div>
  );
}

export default Home;