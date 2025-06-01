import { useEffect, useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";



function Home() {

  const [fbPage, setFBPage] = useState([]);

  useEffect( () => {
    fetch('http://localhost:3001/facebook')
    .then((res) => res.json())
        .then((data) => setFBPage(data))
        .catch((error) => console.error('Error en la visualización del perfil: ', error));
  }, [])

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
      width="98%"
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
    <div className="flex flex-col items-center justify-center text-justify">
      <section className="grid md:grid-cols-2 gap-7">
      <article className="border-4 border-indigo-500 p-5 rounded tracking-wide leading-7">
        <h2 className="font-bold leading-10">Porque sabemos la importancia del acceso a la información.</h2>
        <p className="italic">A más de 100 años de su inauguración como biblioteca popular, nuestra institución se consolida como la ONG más antigua del distrito de Necochea. No obstante, nuestra aspiración continúa siendo la misma que tantos años atrás: velar por el cumplimiento del derecho al acceso a la información en la comunidad, así como difundir la obra de talentos nacioles de diversa índole.</p>
      </article>
      </section>
            <iframe src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d3119.981701424555!2d-58.7401628!3d-38.5572354!3m2!1i1024!2i768!4f13.1!2m1!1sbiblioteca%20popular%20andres%20ferreyra%20necochea!5e0!3m2!1ses-419!2sar!4v1748294310020!5m2!1ses-419!2sar" width="600px" height="300px" allowFullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div> 
  );
}

export default Home;