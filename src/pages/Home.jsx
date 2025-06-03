import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom';



function Home() {

  return (
    <div>
      <div className="w-full ">
        <div className="w-[90vw] h-[60vh] mx-auto">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            dynamicHeight={false}
            className="w-full h-full"
          >
            {[
              'CCNBPAFHome1.jpg',
              'CCNBPAFHome2.jpg',
              'CCNBPAFHome3.jpg',
              'CCNBPAFHome4.jpg',
              'CCNBPAFHome5.jpg',
              'CCNBPAFHome6.jpg',
              'CCNBPAFHome7.jpg',
              'CCNBPAFHome8.jpg',
              'CCNBPAFHome9.jpg',
              'CCNBPAFHome10.jpg',
            ].map((src, index) => (
              <div key={index} className="w-full h-[60vh]">
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="py-6 px-4 text-center ">
          <h1 className="text-2xl sm:text-4xl font-bold ">
            Centro Cultural Necochea — Biblioteca Popular "Andrés Ferreyra"
          </h1>
          <p className="mt-2 text-base sm:text-lg italic text-gray-600">
            «Promoviendo la cultura en la comunidad desde 1907».
          </p>
        </div>
      </div>

      <div className="bg-base-200 text-base-content my-12 px-4 sm:px-6 py-10 rounded-lg">
        <section className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-8">
            ¡Sumate a nuestra comunidad cultural!
          </h1>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

            {/* 1. Historia */}
            <article className="bg-base-100 border-l-4 border-primary p-6 rounded-lg shadow hover:shadow-lg transition">
              <h2 className="text-xl font-semibold mb-3 text-primary">
                Nuestra Historia
              </h2>
              <p className="text-sm leading-relaxed">
                Desde 1907 abrimos nuestras puertas como Biblioteca Popular “Andrés Ferreyra”, promoviendo el acceso libre al conocimiento y el desarrollo de proyectos culturales en Necochea.
              </p>
              <img src="./CCNBPAFDibujo.jpg" alt="" srcset="" />
            </article>

            {/* 2. Socios */}
            <article className="bg-base-100 border-l-4 border-success p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col justify-between">
              <h2 className="text-xl font-semibold mb-3 text-success">
                Hazte Socio
              </h2>
              <p className="text-sm mb-4">
                Con tu aporte mensual de <span className="font-bold text-success">$2.500</span> disfrutás de:
              </p>
              <ul className="list-disc list-inside text-sm mb-6 space-y-1">
                <li>Préstamo de libros hasta 15 días.</li>
                <li>Proponer títulos para nuestro catálogo.</li>
                <li>50% de descuento en eventos y talleres.</li>
              </ul>
              <a href="#inscripcion" className="mt-auto">
                <button className="btn btn-success btn-block">
                  Quiero ser socio
                </button>
              </a>
            </article>

            {/* 3. Actividades */}
            <article className="bg-base-100 border-l-4 border-secondary p-6 rounded-lg shadow hover:shadow-lg transition">
              <h2 className="text-xl font-semibold mb-3 text-secondary">
                Actividades & Talleres
              </h2>
              <ul className="text-sm space-y-2">
                <li>Club de lectura semanal</li>
                <li>Juegotecas comunitarias</li>
                <li>Talleres de escritura creativa</li>
                <li>Cine fórum y charlas culturales</li>
              </ul>
              <Link to="./eventos" className="inline-block mt-4 text-secondary hover:underline text-sm">
                Ver calendario completo →
              </Link>
            </article>

            {/* 4. Ubicación */}
            <article className="bg-base-100 border-l-4 border-info p-0 rounded-lg shadow overflow-hidden flex flex-col h-full">
              <div className="flex-1 w-full h-64 sm:h-72 md:h-80 lg:h-96">
                <iframe
                  className="w-full h-full border-0"
                  src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d3119.981701424555!2d-58.7401628!3d-38.5572354!3m2!1i1024!2i768!4f13.1!2m1!1sbiblioteca%20popular%20andres%20ferreyra%20necochea!5e0!3m2!1ses-419!2sar!4v1748294310020!5m2!1ses-419!2sar"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Biblioteca"
                ></iframe>
              </div>
              <div className="p-4 text-center">
                <p className="text-sm text-info">
                  Avenida 58 entre 65 y 67, Necochea — Buenos Aires
                </p>
              </div>
            </article>

          </div>
        </section>
      </div>

    </div>
  );
}

export default Home;