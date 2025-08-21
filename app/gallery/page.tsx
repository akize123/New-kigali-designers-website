import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, ShoppingCart } from "lucide-react"

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100">
      <Navigation />

      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Gallery</h1>
            <p className="text-xl text-gray-600">Explore our clothing collections and production process</p>
          </div>

          <Tabs defaultValue="women" className="mb-16">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="women">Women</TabsTrigger>
              <TabsTrigger value="men">Men</TabsTrigger>
              <TabsTrigger value="girls">Girls</TabsTrigger>
              <TabsTrigger value="boys">Boys</TabsTrigger>
            </TabsList>

            <TabsContent value="women">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="bg-white">
                  <CardHeader>
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/african-fashion-designer-nhxcl58Fg1iM2Ai3VosfWxW9FHG6Jj.png"
                      alt="African fashion designer in studio"
                      className="w-full h-64 object-contain bg-gray-50 rounded-lg"
                    />
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">(24 reviews)</span>
                    </div>
                    <CardTitle>Designer Studio Collection</CardTitle>
                    <CardDescription>Professional fashion designer wear with measuring tape details</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-red-600">$95</span>
                      <Badge variant="secondary">Professional</Badge>
                    </div>
                    <Button className="w-full">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardHeader>
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/formal-traditional-robe-slGg8yiLRYG3c3oNsfpLYftmhqVfcb.png"
                      alt="Formal traditional robe"
                      className="w-full h-64 object-contain bg-gray-50 rounded-lg"
                    />
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">(32 reviews)</span>
                    </div>
                    <CardTitle>Royal Blue Traditional Robe</CardTitle>
                    <CardDescription>Elegant formal robe with gold embroidered trim</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-red-600">$180</span>
                      <Badge variant="secondary">Traditional</Badge>
                    </div>
                    <Button className="w-full">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardHeader>
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/african-woman-ceo-YOFCTt3taIfUr6d1eQyGYxgJQYVuZR.png"
                      alt="African woman CEO in business suit"
                      className="w-full h-64 object-contain bg-gray-50 rounded-lg"
                    />
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">(28 reviews)</span>
                    </div>
                    <CardTitle>Executive Business Suit</CardTitle>
                    <CardDescription>Professional navy business suit with gold accessories</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-red-600">$145</span>
                      <Badge variant="secondary">Executive</Badge>
                    </div>
                    <Button className="w-full">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardHeader>
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/modern-african-blouse-7pwZ6yHuXnK85vYYx13IrupmpcOACi.png"
                      alt="Modern African print blouse"
                      className="w-full h-64 object-contain bg-gray-50 rounded-lg"
                    />
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex text-yellow-400">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                        <Star className="h-4 w-4 text-gray-300" />
                      </div>
                      <span className="text-sm text-gray-600">(19 reviews)</span>
                    </div>
                    <CardTitle>African Print Blouse</CardTitle>
                    <CardDescription>Vibrant traditional patterns in modern cut</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-red-600">$65</span>
                      <Badge variant="secondary">Traditional</Badge>
                    </div>
                    <Button className="w-full">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardHeader>
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kigali-business-suit-KfPxC4zn9njcpPwWIsUohnrFmKCRyr.png"
                      alt="Kigali business suit with African details"
                      className="w-full h-64 object-contain bg-gray-50 rounded-lg"
                    />
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">(35 reviews)</span>
                    </div>
                    <CardTitle>Kigali Heritage Suit</CardTitle>
                    <CardDescription>Navy business suit with African print collar and cuffs</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-red-600">$125</span>
                      <Badge variant="secondary">Heritage</Badge>
                    </div>
                    <Button className="w-full">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="men">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="bg-white">
                  <CardHeader>
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nkd9.jpg-uPlHbxLv8yrYVYM5PoIWt4o5ikMEsy.webp"
                      alt="Couple in matching burgundy outfits"
                      className="w-full h-64 object-contain bg-gray-50 rounded-lg"
                    />
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">(26 reviews)</span>
                    </div>
                    <CardTitle>Couple's Matching Set</CardTitle>
                    <CardDescription>Coordinated burgundy outfits for special occasions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-red-600">$85</span>
                      <Badge variant="secondary">Couple's</Badge>
                    </div>
                    <Button className="w-full">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardHeader>
                    <img
                      src="/african-man-dashiki.png"
                      alt="Traditional dashiki for men"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">(19 reviews)</span>
                    </div>
                    <CardTitle>Traditional Dashiki</CardTitle>
                    <CardDescription>Authentic African shirt with intricate embroidery</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-red-600">$65</span>
                      <Badge variant="secondary">Traditional</Badge>
                    </div>
                    <Button className="w-full">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardHeader>
                    <img
                      src="/placeholder-qu0v0.png"
                      alt="Modern formal suit for men"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex text-yellow-400">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                        <Star className="h-4 w-4 text-gray-300" />
                      </div>
                      <span className="text-sm text-gray-600">(22 reviews)</span>
                    </div>
                    <CardTitle>Executive Formal Suit</CardTitle>
                    <CardDescription>Premium business suit with African-inspired lining</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-red-600">$150</span>
                      <Badge variant="secondary">Formal</Badge>
                    </div>
                    <Button className="w-full">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardHeader>
                    <img
                      src="/african-man-polo.png"
                      alt="Casual polo with traditional trim"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex text-yellow-400">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                        <Star className="h-4 w-4 text-gray-300" />
                      </div>
                      <span className="text-sm text-gray-600">(15 reviews)</span>
                    </div>
                    <CardTitle>Heritage Polo Shirt</CardTitle>
                    <CardDescription>Casual polo with traditional African trim details</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-red-600">$35</span>
                      <Badge variant="secondary">Casual</Badge>
                    </div>
                    <Button className="w-full">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="girls">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="bg-white">
                  <CardHeader>
                    <img
                      src="/young-african-girl-traditional-dress.png"
                      alt="Traditional dress for girls"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">(12 reviews)</span>
                    </div>
                    <CardTitle>Princess Traditional Dress</CardTitle>
                    <CardDescription>Beautiful traditional dress for special occasions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-red-600">$40</span>
                      <Badge variant="secondary">Traditional</Badge>
                    </div>
                    <Button className="w-full">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardHeader>
                    <img
                      src="/young-african-girl-school-uniform.png"
                      alt="Modern school uniform for girls"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex text-yellow-400">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                        <Star className="h-4 w-4 text-gray-300" />
                      </div>
                      <span className="text-sm text-gray-600">(8 reviews)</span>
                    </div>
                    <CardTitle>School Uniform Set</CardTitle>
                    <CardDescription>Complete school uniform with African-inspired details</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-red-600">$30</span>
                      <Badge variant="secondary">Uniform</Badge>
                    </div>
                    <Button className="w-full">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardHeader>
                    <img
                      src="/young-african-girl-play.png"
                      alt="Casual play clothes for girls"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">(16 reviews)</span>
                    </div>
                    <CardTitle>Playful Pattern Set</CardTitle>
                    <CardDescription>Comfortable play clothes with fun African patterns</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-red-600">$25</span>
                      <Badge variant="secondary">Casual</Badge>
                    </div>
                    <Button className="w-full">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="boys">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="bg-white">
                  <CardHeader>
                    <img
                      src="/young-african-boy-traditional.png"
                      alt="Traditional outfit for boys"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex text-yellow-400">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                        <Star className="h-4 w-4 text-gray-300" />
                      </div>
                      <span className="text-sm text-gray-600">(10 reviews)</span>
                    </div>
                    <CardTitle>Young Gentleman Set</CardTitle>
                    <CardDescription>Traditional outfit perfect for cultural events</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-red-600">$35</span>
                      <Badge variant="secondary">Traditional</Badge>
                    </div>
                    <Button className="w-full">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardHeader>
                    <img
                      src="/placeholder-i6896.png"
                      alt="School uniform for boys"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex text-yellow-400">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                        <Star className="h-4 w-4 text-gray-300" />
                      </div>
                      <span className="text-sm text-gray-600">(14 reviews)</span>
                    </div>
                    <CardTitle>School Uniform</CardTitle>
                    <CardDescription>Durable school uniform with quality craftsmanship</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-red-600">$28</span>
                      <Badge variant="secondary">Uniform</Badge>
                    </div>
                    <Button className="w-full">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardHeader>
                    <img
                      src="/placeholder-75eci.png"
                      alt="Casual sports wear for boys"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">(20 reviews)</span>
                    </div>
                    <CardTitle>Active Sports Set</CardTitle>
                    <CardDescription>Comfortable sportswear for active boys</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-red-600">$32</span>
                      <Badge variant="secondary">Sports</Badge>
                    </div>
                    <Button className="w-full">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Production Process</h2>
              <p className="text-xl text-gray-600">From design concept to finished garment</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white">
                <CardHeader>
                  <img
                    src="/fabric-cutting-station.png"
                    alt="Precision fabric cutting station"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <CardTitle className="flex items-center gap-2">Fabric Cutting</CardTitle>
                  <CardDescription>Precision cutting techniques for perfect pattern alignment</CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <img
                    src="/pattern-design-studio.png"
                    alt="Pattern design and development studio"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <CardTitle>Pattern Development</CardTitle>
                  <CardDescription>
                    Creating unique patterns that blend tradition with modern aesthetics
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <img
                    src="/sewing-workshop.png"
                    alt="Advanced sewing workshop with modern equipment"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <CardTitle>Sewing Workshop</CardTitle>
                  <CardDescription>Advanced sewing techniques using state-of-the-art equipment</CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <img
                    src="/finishing-touches.png"
                    alt="Final finishing and detailing work"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <CardTitle>Finishing Touches</CardTitle>
                  <CardDescription>Meticulous attention to detail in final garment finishing</CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <img
                    src="/quality-inspection.png"
                    alt="Comprehensive quality inspection process"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <CardTitle>Quality Inspection</CardTitle>
                  <CardDescription>Thorough quality checks ensuring every piece meets our standards</CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <img
                    src="/packaging-shipping.png"
                    alt="Professional packaging and shipping department"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <CardTitle>Packaging & Shipping</CardTitle>
                  <CardDescription>Careful packaging and efficient shipping to customers worldwide</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </section>

          <section className="text-center py-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl text-white">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Experience New Kigali Designers</h2>
              <p className="text-xl mb-8 opacity-90">
                Where traditional African heritage meets contemporary fashion innovation. Each piece tells a story of
                craftsmanship, culture, and quality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Shop Our Collections
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                >
                  Contact Our Designers
                </Button>
              </div>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="opacity-90">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">15+</div>
                  <div className="opacity-90">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="opacity-90">Quality Guarantee</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}
