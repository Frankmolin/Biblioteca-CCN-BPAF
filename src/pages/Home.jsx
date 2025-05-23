import { InstagramEmbed } from "react-social-media-embed";



function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen" style={{
      backgroundImage: `url("/entradaIMG.jpg")`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      width: "100%",
      height: "90vh",
      backgroundPosition: "center center"
    }}>
      <h1 className="text-4xl font-bold">Centro Cultural Necochea — Biblitoteca Popular "Andrés Ferreyra"</h1>
      <p className="mt-4 text-lg">Promoviendo la cultura, educación y solidaridad en el distrito desde 1907.</p>
      <InstagramEmbed url="https://www.instagram.com/centroculturalnecochea/" width={328}/>
    </div>
  );
}

export default Home;