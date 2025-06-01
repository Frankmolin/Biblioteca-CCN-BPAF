import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";



function Home() {

  return (
    <div>
    <div className="flex flex-col items-center justify-center">
      <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      dynamicHeight={true}
      width="98%"
      className="w-fit flex flex-col items-center justify-center">
        <div>
          <img src="CCNBPAFHome1.jpg"/>
        </div>
        <div>
          <img src="CCNBPAFHome2.jpg"/>
        </div>
        <div>
          <img src="CCNBPAFHome3.jpg"/>
        </div>
        <div>
          <img src="CCNBPAFHome4.jpg"/>
        </div>
        <div>
          <img src="CCNBPAFHome5.jpg"/>
        </div>
        <div>
          <img src="CCNBPAFHome6.jpg"/>
        </div>
        <div>
          <img src="CCNBPAFHome7.jpg"/>
        </div>
        <div>
          <img src="CCNBPAFHome8.jpg"/>
        </div>
        <div>
          <img src="CCNBPAFHome9.jpg"/>
        </div>
        <div>
          <img src="CCNBPAFHome10.jpg"/>
        </div>
      </Carousel>
      <br></br>
      <h1 className="text-4xl font-bold">Centro Cultural Necochea — Biblitoteca Popular "Andrés Ferreyra"</h1>
      <p className="mt-4 text-lg italic">«Promoviendo la cultura en la comunidad desde 1907».</p>
      <br></br>
    </div>
    <div className="text-black m-10 flex flex-col items-center justify-center text-justify bg-sky-100">
      <section>
      <div className="mt-10 ml-60 grid md:grid-cols-4 gap-20">
      <article className="col-span-3 border-4 border-indigo-500 p-5 rounded shadow tracking-wide leading-8 bg-white">
        <h2 className="text-xl indent-8 font-bold leading-7">Porque es la solidaridad lo que senta las bases para una sociedad más justa</h2>
        <br></br>
        <p className="italic indent-8 mt-2">A más de 100 años de su inauguración como biblioteca popular, nuestra institución se consolida como la ONG más antigua del distrito de Necochea. No obstante, nuestra aspiración continúa siendo la misma que hacía tantos años atrás: velar por el cumplimiento del derecho al acceso a la información en la comunidad, así como difundir la obra de talentos nacionales de diversa índole.</p>
        <br/>
        <div className="container flex flex-col items-center">
        <img className="w-1/2" src="CCNBPAFDibujo.jpg"/>
        </div>
      </article>
      </div>
      <div className="ml-5 grid md:grid-cols-4 gap-20">
      <article className="col-span-2 mr-5 mt-20 mb-10 border-4 border-indigo-500 p-5 rounded shadow tracking-wide leading-7 bg-white justify-center text-justify">
        <h2 className="text-xl text-black font-bold leading-10">¿Te interesa colaborar?</h2>
        <p className="mt-2">Acercándote al edificio, podés solicitar hacerte socio. La cuota tiene un valor de $2500, y te permite: </p>
       <br></br>
       <div className="indent-7">
        <p> • Retirar libros de la biblioteca por hasta 15 días.</p>
        <p> • Relizar peticiones de material para que el mismo sea añadido al catálogo.</p>
        <p> • Contar con un descuento del 50% en entradas para cualquier evento.</p>
        <br/> 
      </div>
      </article>
      <article className="cotainer flex flex-col items-center col-span-2 mr-5 mt-10 border-4 border-indigo-500 p-5 rounded shadow tracking-wide leading-10 bg-white">
        <h2 className="text-xl text-center font-bold leading-10">Sitios de interes:</h2>
        <br/>
        <a href="https://www.conabip.gob.ar/" target="_blank">
          <button className="bg-indigo-700 hover:bg-indigo-900 text-white font-bold py-2 px-4 border border-indigo-900 rounded">CONABIP</button>
        </a>
        <a href="https://necochea.gov.ar/" target="_blank">
        <br/>
        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 border border-purple-700 rounded">Municipalidad de Necochea</button>
        </a>
      </article>
      </div>
      </section>
            <iframe className="cotainer flex flex-col items-center mb-10 mt-10 aspect-square w-2/3" src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d3119.981701424555!2d-58.7401628!3d-38.5572354!3m2!1i1024!2i768!4f13.1!2m1!1sbiblioteca%20popular%20andres%20ferreyra%20necochea!5e0!3m2!1ses-419!2sar!4v1748294310020!5m2!1ses-419!2sar" allowFullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <br></br>
    </div> 
  );
}

export default Home;