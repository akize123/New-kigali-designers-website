import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Zap, CheckCircle, Cog, Settings } from "lucide-react"

export default function ProductionPage() {
  const productionSteps = [
    {
      step: 1,
      title: "Design & Pattern Creation",
      description:
        "Our skilled designers create unique patterns and technical drawings for each garment, ensuring perfect fit and style using CAD software and digital pattern making tools.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nkd24.jpg-V63iDaN0CMEZXUm80w3ANfHCJqRRsx.jpeg",
      duration: "2-3 days",
      team: "Design Team",
      machines: ["CAD Software", "Digital Pattern Makers", "Plotters"],
    },
    {
      step: 2,
      title: "Fabric Selection & Sourcing",
      description:
        "We carefully select high-quality fabrics from trusted suppliers, ensuring durability and comfort for every piece using fabric testing equipment.",
      image: "/fabric-warehouse.png",
      duration: "1-2 days",
      team: "Procurement Team",
      machines: ["Fabric Testing Equipment", "Color Matching Systems", "Fabric Inspection Tables"],
    },
    {
      step: 3,
      title: "Pattern Making & Cutting",
      description:
        "Precise pattern making and fabric cutting using advanced cutting machines and laser technology to minimize waste and ensure accuracy.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nkd2.jpg-mCmkf0BJRbCZu6m7y5ZtZ05SIFrz57.jpeg",
      duration: "1 day",
      team: "Pattern Makers",
      machines: ["Automated Cutting Machines", "Laser Cutters", "Spreading Machines", "Pattern Grading Software"],
    },
    {
      step: 4,
      title: "Sewing & Assembly",
      description:
        "Our experienced seamstresses and tailors bring designs to life using state-of-the-art industrial sewing machines, overlock machines, and specialized equipment.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nkd1.jpg-H3w9tmiZJjkZ9skDLY1d3Qx8Ek6rmg.jpeg",
      duration: "3-5 days",
      team: "Production Team",
      machines: [
        "Industrial Sewing Machines",
        "Overlock Machines",
        "Buttonhole Machines",
        "Embroidery Machines",
        "Heat Press Machines",
      ],
    },
    {
      step: 5,
      title: "Quality Control",
      description:
        "Every garment undergoes rigorous quality checks using advanced inspection equipment and measurement tools to ensure it meets our high standards.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nkd6.jpg-pPxru3zN9dDHqsLc1VqEsyyHRSENlm.jpeg",
      duration: "1 day",
      team: "QC Team",
      machines: [
        "Fabric Inspection Machines",
        "Seam Strength Testers",
        "Color Fastness Equipment",
        "Measurement Tools",
      ],
    },
    {
      step: 6,
      title: "Finishing & Packaging",
      description:
        "Final touches including pressing with industrial steam presses, labeling with automated systems, and professional packaging for delivery.",
      image: "/garment-packaging-station.png",
      duration: "1 day",
      team: "Finishing Team",
      machines: ["Industrial Steam Presses", "Labeling Machines", "Packaging Equipment", "Garment Steamers"],
    },
  ]

  const machineryCategories = [
    {
      category: "Cutting Equipment",
      machines: [
        {
          name: "Automated Fabric Cutting Machine",
          image: "/automated-cutting-machine.png",
          description: "High-precision computer-controlled cutting for complex patterns",
        },
        {
          name: "Laser Cutting System",
          image: "/laser-cutting-machine.png",
          description: "Precise laser cutting for intricate designs and minimal fabric waste",
        },
        {
          name: "Rotary Cutting Machine",
          image: "/rotary-cutting-machine.png",
          description: "Efficient cutting of multiple fabric layers simultaneously",
        },
      ],
    },
    {
      category: "Sewing Machines",
      machines: [
        {
          name: "Industrial Lockstitch Machine",
          image: "/industrial-sewing-machine.png",
          description: "Heavy-duty sewing for strong, durable seams",
        },
        {
          name: "Overlock Machine",
          image: "/overlock-machine.png",
          description: "Professional edge finishing and seam reinforcement",
        },
        {
          name: "Computerized Embroidery Machine",
          image: "/embroidery-machine.png",
          description: "Automated embroidery for logos and decorative elements",
        },
      ],
    },
    {
      category: "Finishing Equipment",
      machines: [
        {
          name: "Industrial Steam Press",
          image: "/steam-press-machine.png",
          description: "Professional pressing for crisp, finished garments",
        },
        {
          name: "Garment Steamer",
          image: "/garment-steamer.png",
          description: "Final steaming to remove wrinkles and perfect appearance",
        },
        {
          name: "Heat Transfer Press",
          image: "/heat-press-machine.png",
          description: "Application of logos, labels, and heat-set decorations",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Our Production Process</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From concept to creation, discover how we transform ideas into beautiful, high-quality garments through our
            meticulous production process.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>7-14 days total</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>50+ skilled workers</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              <span>Modern equipment</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>100% quality assured</span>
            </div>
          </div>
        </div>
      </section>

      {/* Production Steps */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {productionSteps.map((step, index) => (
              <div
                key={step.step}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-16 items-center`}
              >
                <div className="flex-1">
                  <Card className="bg-white/80 backdrop-blur-sm border-red-200 shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                          {step.step}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                          <div className="flex gap-2 mt-2">
                            <Badge variant="secondary" className="bg-red-100 text-red-800">
                              {step.duration}
                            </Badge>
                            <Badge variant="outline" className="border-red-200 text-red-700">
                              {step.team}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 text-lg leading-relaxed mb-4">{step.description}</p>
                      <div className="mt-4">
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                          <Cog className="h-4 w-4" />
                          Key Equipment Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {step.machines.map((machine, idx) => (
                            <Badge key={idx} variant="outline" className="bg-red-50 border-red-300 text-red-700">
                              {machine}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="flex-1">
                  <div className="relative">
                    <img
                      src={step.image || "/placeholder.svg"}
                      alt={step.title}
                      className="w-full h-80 object-cover rounded-lg shadow-lg"
                    />
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Step {step.step}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/90 backdrop-blur-sm border-red-200 shadow-xl">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Our Process Matters</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Assurance</h3>
                  <p className="text-gray-600">
                    Each step in our production process includes quality checkpoints to ensure every garment meets our
                    high standards.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Sustainable Practices</h3>
                  <p className="text-gray-600">
                    We minimize waste through precise cutting techniques and use eco-friendly materials whenever
                    possible.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Skilled Craftsmanship</h3>
                  <p className="text-gray-600">
                    Our team combines traditional tailoring techniques with modern technology for superior results.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Timely Delivery</h3>
                  <p className="text-gray-600">
                    Our streamlined process ensures consistent delivery times without compromising on quality.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Advanced Machinery Showcase */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Advanced Machinery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art equipment ensures precision, efficiency, and superior quality in every garment we
              produce.
            </p>
          </div>

          {machineryCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-2">
                <Settings className="h-6 w-6 text-red-600" />
                {category.category}
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {category.machines.map((machine, machineIndex) => (
                  <Card
                    key={machineIndex}
                    className="bg-white/90 backdrop-blur-sm border-red-200 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="aspect-video mb-4 rounded-lg overflow-hidden bg-gray-100">
                        <img
                          src={machine.image || "/placeholder.svg"}
                          alt={machine.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{machine.name}</h4>
                      <p className="text-gray-600 text-sm">{machine.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
