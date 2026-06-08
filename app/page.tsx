export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
<section className="flex flex-col items-center justify-center min-h-screen text-center px-6">
  <p className="text-blue-400 font-medium mb-4">
    SOFTWARE ENGINEER
  </p>

  <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
    Njeri
  </h1>

  <p className="text-xl text-gray-300 max-w-3xl mb-8">
    Building modern web applications, solving real-world problems,
    and continuously growing as a software engineer.
  </p>

  <div className="flex gap-4">
    <a
      href="https://github.com/njerii-dev"
      target="_blank"
      className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90"
    >
      GitHub
    </a>

    <a
      href="#projects"
      className="border border-gray-600 px-6 py-3 rounded-lg hover:border-white"
    >
      View Projects
    </a>
  </div>
</section>
      {/* Skills Section */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-10">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="border border-gray-700 rounded-xl p-6 text-center">
            React
          </div>

          <div className="border border-gray-700 rounded-xl p-6 text-center">
            Next.js
          </div>

          <div className="border border-gray-700 rounded-xl p-6 text-center">
            JavaScript
          </div>

          <div className="border border-gray-700 rounded-xl p-6 text-center">
            TypeScript
          </div>

          <div className="border border-gray-700 rounded-xl p-6 text-center">
            Tailwind CSS
          </div>

          <div className="border border-gray-700 rounded-xl p-6 text-center">
            Git & GitHub
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="border border-gray-700 rounded-xl p-6 hover:-translate-y-2 hover:border-blue-500 transition-all duration-300">
            <img
  src="/projects/riftshophomepage.png"
  alt="RiftShop Screenshot"
  className="w-full h-48 object-cover rounded-xl mb-4"
/>
            <h3 className="text-2xl font-semibold mb-3">
              RiftShop
            </h3>

            <p className="text-gray-300 mb-4">
              Modern e-commerce platform with responsive design and smooth user experience.
            </p>

            <a
              href="https://riftshop.vercel.app/"
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              View Project →
            </a>
          </div>

          <div className="border border-gray-700 rounded-xl p-6 hover:-translate-y-2 hover:border-blue-500 transition-all duration-300">
            <img
  src="/projects/civnethomepage.png"
  alt="CivNet Screenshot"
  className="w-full h-48 object-cover rounded-xl mb-4"
/>

            <h3 className="text-2xl font-semibold mb-3">
              CivNet
            </h3>

            <p className="text-gray-300 mb-4">
              Community engagement platform designed to improve civic interaction.
            </p>

            <a
              href="https://civnet-rose.vercel.app/"
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              View Project →
            </a>
          </div>

          <div className="border border-gray-700 rounded-xl p-6 hover:-translate-y-2 hover:border-blue-500 transition-all duration-300">
            <img
  src="/projects/cakedwithushomepage.png"
  alt="Bakers Screenshot"
  className="w-full h-48 object-cover rounded-xl mb-4"
/>
            <h3 className="text-2xl font-semibold mb-3">
              Bakers
            </h3>

            <p className="text-gray-300 mb-4">
              Online bakery and cake ordering platform with a modern user experience.
            </p>

            <a
              href="https://cakedwithus.joyne.co.ke/"
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              View Project →
            </a>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-8">
          Contact
        </h2>

        <p className="text-gray-300 mb-6">
          Feel free to reach out or connect with me.
        </p>

        <div className="space-y-3">
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/njerii-dev"
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              github.com/njerii-dev
            </a>
          </p>

          <p>
            Email: njeriijoy216@gmail.com
          </p>
        </div>
      </section>
    </main>
  );
}