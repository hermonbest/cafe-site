import { Wifi, Coffee, Heart, Users, Clock, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Coffee,
    title: "Ethiopian Coffee Culture",
    description: "Experience traditional Jebena Buna and modern coffee brewing techniques",
    color: "#4E342E"
  },
  {
    icon: Wifi,
    title: "Free WiFi",
    description: "Stay connected while enjoying your perfect cup of coffee",
    color: "#6B8E23"
  },
  {
    icon: Heart,
    title: "Peaceful Atmosphere",
    description: "A tranquil space designed for relaxation and meaningful conversations",
    color: "#4E342E"
  },
  {
    icon: Users,
    title: "Community Gathering",
    description: "A welcoming space where people come together over great coffee",
    color: "#6B8E23"
  },
  {
    icon: Clock,
    title: "Extended Hours",
    description: "Open daily from 8 AM to 8 PM for your convenience",
    color: "#4E342E"
  },
  {
    icon: Star,
    title: "Premium Quality",
    description: "Sustainably sourced Ethiopian coffee beans and fresh ingredients",
    color: "#6B8E23"
  }
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl md:text-5xl mb-4 text-[#4E342E]">Why Choose Perfect Peace?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover what makes our café the perfect place for coffee lovers and peace seekers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: feature.color }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif font-semibold text-xl mb-4 text-[#4E342E]">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-[#FAF3E0] rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="font-serif font-semibold text-2xl mb-4 text-[#4E342E]">Opening Soon!</h3>
            <p className="text-gray-600 mb-6">
              Perfect Peace Café is opening its doors this year in Mekelle. Join us for an unforgettable coffee experience 
              that combines traditional Ethiopian hospitality with modern café culture.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                8:00 AM - 8:00 PM
              </span>
              <span className="flex items-center gap-2">
                <Wifi className="w-4 h-4" />
                Free WiFi
              </span>
              <span className="flex items-center gap-2">
                <Coffee className="w-4 h-4" />
                Traditional & Modern Coffee
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
