import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side - Text */}
        <div>
          <h2 className="text-black text-3xl md:text-4xl font-bold mb-6">
            Experience, Integrity, and Commitment in Every Property
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            At Consultant Property Services, we specialize in providing reliable property 
            management, real estate, and maintenance solutions. With years of experience 
            in the GTA market, we ensure your investments are managed with care, 
            professionalism, and transparency.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
          <Image
            src="/Portrait.jpg"
            alt="Portrait of Consultant"
            className="rounded-2xl shadow-lg object-cover"
            width={400}
            height={500}
            priority
          />
        </div>
      </div>
    </section>
  );
}
