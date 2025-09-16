"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ServicesSection() {
  const services = [
    {
      title: "Property Management",
      description:
        "Comprehensive property management solutions to maximize your investment and minimize stress. We handle everything from tenant screening to maintenance.",
      image: "/property.jpg",
    },
    {
      title: "Real Estate Services",
      description:
        "Expert guidance in buying, selling, and renting properties across the GTA. Our team ensures smooth and transparent transactions.",
      image: "/realestate.jpg",
    },
    {
      title: "Property Maintenance",
      description:
        "Reliable maintenance services to keep your property in top shape — from repairs to routine upkeep, we’ve got it covered.",
      image: "/maintenance.jpg",
    },
  ];

  return (
    <section id="services" className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-10">Our Services</h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          className="rounded-xl shadow-lg"
        >
          {services.map((service, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-white rounded-xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={500}
                  height={350}
                  className="rounded-xl object-cover"
                />
                <div className="text-left max-w-lg">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-lg">{service.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
































//     "use client";
// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function ServicesSection() {
//   const services = [
//     {
//       title: "Property Management",
//       description:
//         "Comprehensive property management solutions to maximize your investment and minimize stress. We handle everything from tenant screening to maintenance.",
//       image: "/property.jpg",
//     },
//     {
//       title: "Real Estate Services",
//       description:
//         "Expert guidance in buying, selling, and renting properties across the GTA. Our team ensures smooth and transparent transactions.",
//       image: "/realestate.jpg",
//     },
//     {
//       title: "Property Maintenance",
//       description:
//         "Reliable maintenance services to keep your property in top shape — from repairs to routine upkeep, we’ve got it covered.",
//       image: "/maintenance.jpg",
//     },
//   ];

//   return (
//     <section id="services" className="bg-white py-20">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6">
        
//         {/* Left Side - Sticky Intro */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="space-y-8 sticky top-24 self-start"
//         >
//           <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
//           <p className="text-lg text-gray-600">
//             We provide a full range of property and real estate solutions tailored to your needs.
//           </p>
//         </motion.div>

//         {/* Right Side - Animated Services */}
//         <div className="space-y-32">
//           {services.map((service, idx) => (
//             <motion.div
//               key={idx}
//               className="flex flex-col items-start space-y-6"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: idx * 0.2 }}
//               viewport={{ once: true, amount: 0.3 }}
//             >
//               <Image
//                 src={service.image}
//                 alt={service.title}
//                 width={700}
//                 height={400}
//                 className="rounded-xl shadow-lg object-cover"
//               />
//               <h3 className="text-2xl font-semibold text-gray-900">
//                 {service.title}
//               </h3>
//               <p className="text-gray-600 text-lg">{service.description}</p>
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

    
//     //   <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
//     //     <ServiceCard
//     //       title="Property Management"
//     //       text="Tenant placement, rent collection, inspections, and more."
//     //       icon={<HomeIcon size={32} />}
//     //     />
//     //     <ServiceCard
//     //       title="Real Estate Services"
//     //       text="Buying, selling, and renting properties with expert guidance."
//     //       icon={<Building size={32} />}
//     //     />
//     //     <ServiceCard
//     //       title="Property Maintenance"
//     //       text="Repairs, renovations, and ongoing care for your property."
//     //       icon={<Wrench size={32} />}
//     //     />
//     //   </section>