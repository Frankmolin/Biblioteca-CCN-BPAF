import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom';



function Home() {

  return (
    <div>
      <div className="w-full">
        <div className="w-[95vw] h-[75vh] mx-auto">
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
              <div key={index} className="w-full h-[75vh]">
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
            ¡Te damos la bienvenida a nuestra comunidad cultural!
          </h1>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

            {/* 1. Historia */}
            <article className="bg-base-100 border-l-4 border-primary p-6 rounded-lg shadow hover:shadow-lg transition">
              <h2 className="text-xl font-semibold mb-3 text-primary">
                Nuestra misión
              </h2>
              <p className="text-sm leading-relaxed tracking-tight text-justify">
                A más de 100 años de su inauguración, la aspiración de nuestra institución continúa siendo la misma que hacía tantos años atrás: velar por el cumplimiento del derecho al acceso a la información en la comunidad, así como difundir la obra de talentos nacionales de diversa índole.
              </p>
              <img className="mt-5" src="./CCNBPAFDibujo.jpg" alt="" srcset="" />
            </article>

            {/* 2. Socios */}
            <article className="bg-base-100 border-l-4 border-success p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col justify-between">
              <h2 className="text-xl font-semibold mb-3 text-success">
                Hacete socio
              </h2>
              <p className="text-sm mb-4 tracking-tight text-justify">
                Con tu aporte mensual de <span className="font-bold text-success">$2.500</span>, podés:
              </p>
              <ul className="list-disc list-inside text-sm mb-6 space-y-1">
                <li>Retirar libros por hasta 15 días.</li>
                <li>Proponer títulos para nuestro catálogo.</li>
                <li>Asistir a eventos y talleres con un 50% de descuento.</li>
              </ul>
              
            </article>

            {/* 3. Actividades */}
            <article className="bg-base-100 border-l-4 border-secondary p-6 rounded-lg shadow hover:shadow-lg transition">
              <h2 className="text-xl font-semibold mb-3 text-secondary">
                Actividades y talleres
              </h2>
              <ul className="text-sm space-y-2 tracking-tight text-justify">
                <li>Club de lectura semanal</li>
                <li>Juegotecas comunitarias</li>
                <li>Talleres de escritura creativa</li>
                <li>Cine fórum y charlas culturales</li>
              </ul>
              <Link to="./eventos" className="inline-block mt-4 text-secondary hover:underline text-sm tracking-tight text-justify">
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
                <p className="text-sm text-info tracking-tight text-justify">
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