import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Lightbulb, Target, Building2, MapPin, Phone } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-100 to-red-200">
        <div className="max-w-7xl mx-auto">
          <div className="relative mb-12 rounded-2xl overflow-hidden">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nkd1.jpg-H3w9tmiZJjkZ9skDLY1d3Qx8Ek6rmg.jpeg"
              alt="New Kigali Designers textile factory floor with workers"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 max-w-2xl mx-auto">
                  New Kigali Designers
                </h1>
                <p className="text-lg sm:text-xl mb-6 max-w-3xl mx-auto">
                  Leading clothing production company in Rwanda, masterfully blending traditional African heritage with
                  contemporary fashion innovation
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3">
              Explore Our Collections
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent">
              Learn Our Story
            </Button>
          </div>
        </div>
      </section>

      {/* Company Background */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-25 to-red-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-8">Our Foundation</h2>

          <div className="mb-12 rounded-2xl overflow-hidden">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nkd1.jpg-H3w9tmiZJjkZ9skDLY1d3Qx8Ek6rmg.jpeg"
              alt="New Kigali Designers manufacturing facility"
              className="w-full h-64 object-cover"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600">
                New Kigali Designers was founded in 1998, with the vision of being a mass producer for garments
                products. We have since grown our facility and technologies to serve our customers best.
              </p>
              <p className="text-lg text-gray-600">
                We specialize in promotional materials, uniforms for institutions and we also have our own retail brands
                sold to the local market. New Kigali Designer is proud of the great achievements over the last 20 years
                in the industry.
              </p>
              <p className="text-lg text-gray-600">
                We are looking forward to expanding and continue maintaining our position in the market. New Kigali
                Designers and Outfitters is in the business of Garments Manufacturing.
              </p>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-6 w-6 text-blue-600" />
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    To create exceptional clothing that celebrates African culture while meeting international quality
                    standards, empowering local artisans and promoting sustainable fashion practices.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-6 w-6 text-blue-600" />
                    Innovation Focus
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We integrate cutting-edge production techniques with traditional craftsmanship, utilizing
                    eco-friendly materials and digital design tools to create unique, sustainable fashion pieces.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Operations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-red-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Operations</h2>
            <p className="text-xl text-gray-600">Behind the scenes of our world-class garment manufacturing facility</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nkd29-lhdnUH3iJlFMugWYYvVQz9biToLRz3.jpg"
                  alt="Leadership team at elegant company event"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle>Executive Events & Networking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our leadership team actively participates in industry events and networking opportunities to build
                  strategic partnerships and stay ahead of fashion trends.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/7zSBYuktVlU"
                    title="New Kigali Designers Production Process"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <CardTitle>Production Process Video</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Watch our comprehensive design and production process from concept to finished garment in our
                  state-of-the-art facility.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nkd23.jpg-MmYS8DlkXXMIn65oRa0tUGtphQJYEz.jpeg"
                  alt="Professional in traditional African attire showcasing our design excellence"
                  className="w-full h-56 object-contain bg-gray-100 rounded-lg mb-4"
                />
                <CardTitle>Design Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our designs blend traditional African aesthetics with contemporary fashion, creating unique pieces
                  that celebrate our cultural heritage while meeting modern style demands.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nkd19.jpg-tHonLhZx7j6DZWgMtgT9moR11fdYcO.webp"
                  alt="Fashion industry collaboration and exhibition participation"
                  className="w-full h-56 object-contain bg-gray-100 rounded-lg mb-4"
                />
                <CardTitle>Industry Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We actively collaborate with fashion industry professionals and participate in exhibitions to showcase
                  African fashion on international platforms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nkd24.jpg-V63iDaN0CMEZXUm80w3ANfHCJqRRsx.jpeg"
                  alt="Strategic planning meeting with leadership team"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle>Strategic Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Regular leadership meetings ensure we stay aligned with our growth objectives and market demands while
                  maintaining our quality standards.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/2o6FjOrcjpQ"
                    title="New Kigali Designers Company Overview"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <CardTitle>Company Overview Video</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Discover more about New Kigali Designers, our mission, values, and commitment to excellence in African
                  fashion manufacturing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-25 to-red-75">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Trusted Partners</h2>
            <p className="text-xl text-gray-600">
              Collaborating with leading institutions and organizations across Rwanda and beyond
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Building2 className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle>Bank of Kigali</CardTitle>
                <CardDescription>Financial Partner</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Building2 className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle>Rwanda Development Board</CardTitle>
                <CardDescription>Strategic Partner</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Building2 className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle>African Fashion Council</CardTitle>
                <CardDescription>Industry Partner</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Building2 className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle>Kigali Fashion Week</CardTitle>
                <CardDescription>Event Partner</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Innovation & Differentiators */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-75 to-red-125">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Sets Us Apart</h2>
            <p className="text-xl text-gray-600">
              Our unique innovations and approaches that distinguish us in the fashion industry
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-6 w-6 text-blue-600" />
                  Smart Fabric Technology
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We integrate moisture-wicking and temperature-regulating properties into traditional fabrics, creating
                  comfortable wear for Africa's diverse climates.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-blue-600" />
                  Artisan Collaboration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our unique partnership model with local artisans ensures authentic traditional techniques while
                  providing fair wages and skills development.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-6 w-6 text-blue-600" />
                  Sustainable Production
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Zero-waste production methods and organic dye processes make our clothing environmentally responsible
                  without compromising quality.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Awards & Certificates */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-red-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Recognition & Awards</h2>
            <p className="text-xl text-gray-600">Celebrating our achievements and commitment to excellence</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 mx-auto text-yellow-500 mb-4" />
                <CardTitle>Best African Fashion Brand 2023</CardTitle>
                <CardDescription>African Fashion Awards</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">Excellence</Badge>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 mx-auto text-green-500 mb-4" />
                <CardTitle>Sustainable Fashion Leader</CardTitle>
                <CardDescription>Rwanda Green Awards 2022</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">Sustainability</Badge>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 mx-auto text-blue-500 mb-4" />
                <CardTitle>Innovation in Textiles</CardTitle>
                <CardDescription>East Africa Business Awards 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">Innovation</Badge>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 mx-auto text-purple-500 mb-4" />
                <CardTitle>ISO 9001:2015 Certified</CardTitle>
                <CardDescription>Quality Management System</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">Quality</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-100 to-red-150">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">Meet the visionaries driving our company forward</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nkd5.jpg-gifiJZuHMiwsU8Dj0zjDfL56KjV782.jpeg"
                  alt="New Kigali Designers Leadership Team"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <CardTitle>{"Chantal Murebwa B. Mawe\n\n"}</CardTitle>
                <CardDescription>{"\n      "}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  15+ years in fashion industry, former designer at international fashion houses
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nkd5.jpg-gifiJZuHMiwsU8Dj0zjDfL56KjV782.jpeg"
                  alt="New Kigali Designers Leadership Team"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <CardTitle>{"Andrew Kanyonya\n\n"}</CardTitle>
                <CardDescription>Business Development Manager</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Operations expert with MBA from INSEAD, specializing in sustainable manufacturing
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nkd5.jpg-gifiJZuHMiwsU8Dj0zjDfL56KjV782.jpeg"
                  alt="New Kigali Designers Leadership Team"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <CardTitle>{"Derrick Kanyonya\n\n"}</CardTitle>
                <CardDescription>Assistant to Business Development Manager</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  {""}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nkd5.jpg-gifiJZuHMiwsU8Dj0zjDfL56KjV782.jpeg"
                  alt="New Kigali Designers Leadership Team"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <CardTitle>{"Agnes Kayitesi\n\n"}</CardTitle>
                <CardDescription>Assistant Managing Director</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-8 font-semibold">
                  Digital innovation specialist, implementing smart manufacturing solutions
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nkd5.jpg-gifiJZuHMiwsU8Dj0zjDfL56KjV782.jpeg"
                  alt="New Kigali Designers Leadership Team"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <CardTitle>{"Jane\n\n"}</CardTitle>
                <CardDescription>{"\n\nSales and Marketing"}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Quality control expert ensuring international standards compliance
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-75 to-red-125">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Future Innovations</h2>
            <p className="text-xl text-gray-600">Our roadmap for the next generation of African fashion</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-6 w-6 text-blue-600" />
                  AI-Powered Design
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Implementing artificial intelligence to create personalized designs that blend customer preferences
                  with traditional African patterns.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-6 w-6 text-blue-600" />
                  Global Expansion
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Opening flagship stores in major fashion capitals while maintaining our commitment to local artisan
                  communities.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-blue-600" />
                  Artisan Academy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Establishing a training center to preserve traditional techniques while teaching modern production
                  methods to the next generation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Visit Our Location */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-100 to-red-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Visit Our Location</h2>
            <p className="text-xl text-gray-600">Find us in the heart of Kigali, Rwanda's vibrant capital city</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="lg:col-span-2 mb-8">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nkd30-ndyAeQvVlqaNf734TPjYTxEiGCGZzU.jpeg"
                alt="New Kigali Designers facility with accounts department"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-blue-600" />
                  Our Address
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-semibold">New Kigali Designers & Outfitters</p>
                <p className="text-gray-600">Kigali, Rwanda</p>
                <p className="text-gray-600">East Africa</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-6 w-6 text-blue-600" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-gray-600">Phone: +250 780 521 244</p>
                <p className="text-gray-600">Business Hours: Mon-Fri 7:00 AM - 7:00 PM</p>
                <p className="text-gray-600">Saturday: 8:00 AM - 2:00 PM</p>
                <p className="text-gray-600">Sunday: 8:00 AM - 2:00 PM</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-red-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">New Kigali Designers</h3>
            <p className="text-gray-400">Crafting the future of African fashion, one thread at a time.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-gray-900 bg-transparent"
            >
              Contact Us On +250780521244
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-gray-900 bg-transparent"
            >
              Visit Gallery On the Website
            </Button>
          </div>

          <div className="text-center text-gray-400 space-y-2">
            <p>
              © 2025 New Kigali Designers & Outfitters. All rights reserved. | Designed and manufactured in Rwanda |
              Celebrating African heritage through contemporary fashion
            </p>
            <p>Privacy Policy | Terms of Service | Shipping & Returns | Contact: +250 780 521 244</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
