export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl md:text-5xl mb-4 text-[#4E342E]">About Perfect Peace Café</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="font-serif font-semibold text-2xl mb-6 text-[#4E342E]">Our Story</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Perfect Peace Café was born from a simple vision: to create a sanctuary where people can escape the hustle
              and bustle of daily life and find their perfect moment of peace. Located in the heart of Mekelle, we believe that great coffee and
              delicious food have the power to bring people together and create lasting memories.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              What started as a dream to serve the perfect cup of coffee has evolved into a community gathering place
              where quality meets tranquility. Every cup we serve and every dish we prepare is crafted with love and
              attention to detail, honoring both traditional Ethiopian coffee culture and modern café experiences.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We source our coffee beans from sustainable Ethiopian farms and use only the freshest ingredients in our smoothies
              and food. Our goal is to provide not just great taste, but also peace of mind knowing you're enjoying
              something made with care in a welcoming, WiFi-enabled environment perfect for work or relaxation.
            </p>
          </div>

          <div className="space-y-4">
            <img src="/outdorr look.jpg" alt="Perfect Peace Café Exterior" className="w-full rounded-lg shadow-lg" />
            <img src="/barista-latte-art.png" alt="Coffee Preparation" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>

        <div className="bg-[#FAF3E0] rounded-lg p-8">
          <h3 className="font-serif font-semibold text-2xl mb-6 text-center text-[#4E342E]">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6B8E23] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">☮</span>
              </div>
              <h4 className="font-serif font-semibold text-lg mb-2 text-[#4E342E]">Peaceful Environment</h4>
              <p className="text-gray-600 text-sm">
                A tranquil space designed for relaxation and meaningful conversations
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#4E342E] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">☕</span>
              </div>
              <h4 className="font-serif font-semibold text-lg mb-2 text-[#4E342E]">Ethiopian Coffee Culture</h4>
              <p className="text-gray-600 text-sm">
                Honoring traditional Jebena Buna and modern coffee brewing techniques
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#6B8E23] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌱</span>
              </div>
              <h4 className="font-serif font-semibold text-lg mb-2 text-[#4E342E]">Fresh Ingredients</h4>
              <p className="text-gray-600 text-sm">
                Locally sourced, fresh ingredients in every smoothie and dish we serve
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
