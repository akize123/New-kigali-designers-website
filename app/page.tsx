"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Lightbulb, Target, Building2, MapPin, Phone } from "lucide-react"
import { useTranslate } from "@/hooks/use-language"

export default function HomePage() {
  const t = useTranslate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-100 to-red-200">
        <div className="max-w-7xl mx-auto">
          <div className="relative mb-12 rounded-2xl overflow-hidden">
            <img
              src="/images/nkd1.jpeg"
              alt="New Kigali Designers textile factory floor with workers"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 max-w-2xl mx-auto">{t("hero.title")}</h1>
                <p className="text-lg sm:text-xl mb-6 max-w-3xl mx-auto">{t("hero.subtitle")}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3">
              {t("hero.exploreCollections")}
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent">
              {t("hero.learnStory")}
            </Button>
          </div>
        </div>
      </section>

      {/* Company Background */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-25 to-red-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-8">{t("foundation.title")}</h2>

          <div className="mb-12 rounded-2xl overflow-hidden">
            <img
              src="/images/nkd1.jpeg"
              alt="New Kigali Designers manufacturing facility"
              className="w-full h-64 object-cover"
            />
            <img
              src="/images/nkd1.jpeg"
              alt="New Kigali Designers manufacturing facility"
              className="w-full h-64 object-cover"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600">{t("foundation.description1")}</p>
              <p className="text-lg text-gray-600">{t("foundation.description2")}</p>
              <p className="text-lg text-gray-600">{t("foundation.description3")}</p>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-6 w-6 text-blue-600" />
                    {t("foundation.mission")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{t("foundation.missionDescription")}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-6 w-6 text-blue-600" />
                    {t("foundation.innovationFocus")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{t("foundation.innovationDescription")}</p>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{t("operations.title")}</h2>
            <p className="text-xl text-gray-600">{t("operations.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <img
                  src="/images/nkd29.jpg"
                  alt="Leadership team at elegant company event"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle>{t("operations.executiveEvents")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t("operations.executiveEventsDescription")}</p>
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
                <CardTitle>{t("operations.productionProcess")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t("operations.productionProcessDescription")}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <img
                  src="/images/nkd23.jpeg"
                  alt="Professional in traditional African attire showcasing our design excellence"
                  className="w-full h-56 object-contain bg-gray-100 rounded-lg mb-4"
                />
                <CardTitle>{t("operations.designExcellence")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t("operations.designExcellenceDescription")}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <img
                  src="/images/nkd19.webp"
                  alt="Fashion industry collaboration and exhibition participation"
                  className="w-full h-56 object-contain bg-gray-100 rounded-lg mb-4"
                />
                <CardTitle>{t("operations.industryCollaboration")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t("operations.industryCollaborationDescription")}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <img
                  src="/images/nkd24.jpeg"
                  alt="Strategic planning meeting with leadership team"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle>{t("operations.strategicPlanning")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t("operations.strategicPlanningDescription")}</p>
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
                <CardTitle>{t("operations.companyOverview")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t("operations.companyOverviewDescription")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-25 to-red-75">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{t("partners.title")}</h2>
            <p className="text-xl text-gray-600">{t("partners.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Building2 className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle>{t("partners.bankOfKigali")}</CardTitle>
                <CardDescription>{t("partners.financialPartner")}</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Building2 className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle>{t("partners.rwandaDevelopmentBoard")}</CardTitle>
                <CardDescription>{t("partners.strategicPartner")}</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Building2 className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle>{t("partners.africanFashionCouncil")}</CardTitle>
                <CardDescription>{t("partners.industryPartner")}</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Building2 className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle>{t("partners.kigaliFashionWeek")}</CardTitle>
                <CardDescription>{t("partners.eventPartner")}</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Innovation & Differentiators */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-75 to-red-125">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{t("innovation.title")}</h2>
            <p className="text-xl text-gray-600">{t("innovation.subtitle")}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-6 w-6 text-blue-600" />
                  {t("innovation.smartFabricTechnology")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t("innovation.smartFabricTechnologyDescription")}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-blue-600" />
                  {t("innovation.artisanCollaboration")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t("innovation.artisanCollaborationDescription")}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-6 w-6 text-blue-600" />
                  {t("innovation.sustainableProduction")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t("innovation.sustainableProductionDescription")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Awards & Certificates */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-red-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{t("awards.title")}</h2>
            <p className="text-xl text-gray-600">{t("awards.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 mx-auto text-yellow-500 mb-4" />
                <CardTitle>{t("awards.bestAfricanFashionBrand")}</CardTitle>
                <CardDescription>{t("awards.africanFashionAwards")}</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">{t("awards.excellence")}</Badge>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 mx-auto text-green-500 mb-4" />
                <CardTitle>{t("awards.sustainableFashionLeader")}</CardTitle>
                <CardDescription>{t("awards.rwandaGreenAwards")}</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">{t("awards.sustainability")}</Badge>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 mx-auto text-blue-500 mb-4" />
                <CardTitle>{t("awards.innovationInTextiles")}</CardTitle>
                <CardDescription>{t("awards.eastAfricaBusinessAwards")}</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">{t("awards.innovation")}</Badge>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 mx-auto text-purple-500 mb-4" />
                <CardTitle>{t("awards.iso9001")}</CardTitle>
                <CardDescription>{t("awards.qualityManagementSystem")}</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">{t("awards.quality")}</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-100 to-red-150">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{t("leadership.title")}</h2>
            <p className="text-xl text-gray-600">{t("leadership.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <img
                  src="/images/nkd5.jpeg"
                  alt="New Kigali Designers Leadership Team"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <CardTitle>{t("leadership.chantal")}</CardTitle>
                <CardDescription>{t("leadership.chantalDescription")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center font-bold">{t("leadership.chantalRole")}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <img
                  src="/images/nkd5.jpeg"
                  alt="New Kigali Designers Leadership Team"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <CardTitle>{t("leadership.andrew")}</CardTitle>
                <CardDescription>{t("leadership.andrewDescription")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center font-bold">{t("leadership.andrewRole")}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <img
                  src="/images/nkd5.jpeg"
                  alt="New Kigali Designers Leadership Team"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <CardTitle>{t("leadership.derrick")}</CardTitle>
                <CardDescription>{t("leadership.derrickDescription")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">{t("leadership.derrickRole")}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <img
                  src="/images/nkd5.jpeg"
                  alt="New Kigali Designers Leadership Team"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <CardTitle>{t("leadership.agnes")}</CardTitle>
                <CardDescription>{t("leadership.agnesDescription")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-8 font-bold">{t("leadership.agnesRole")}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <img
                  src="/images/nkd5.jpeg"
                  alt="New Kigali Designers Leadership Team"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <CardTitle>{t("leadership.jane")}</CardTitle>
                <CardDescription>{t("leadership.janeDescription")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center font-bold">{t("leadership.janeRole")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-75 to-red-125">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{t("future.title")}</h2>
            <p className="text-xl text-gray-600">{t("future.subtitle")}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-6 w-6 text-blue-600" />
                  {t("future.aiPoweredDesign")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t("future.aiPoweredDesignDescription")}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-6 w-6 text-blue-600" />
                  {t("future.globalExpansion")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t("future.globalExpansionDescription")}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-blue-600" />
                  {t("future.artisanAcademy")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t("future.artisanAcademyDescription")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Visit Our Location */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-100 to-red-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{t("location.title")}</h2>
            <p className="text-xl text-gray-600">{t("location.subtitle")}</p>
          </div>
          <div className="lg:col-span-2 mb-8">
            <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-lg">
              <iframe
                src="https://embed.waze.com/iframe?zoom=17&lat=-1.94407&lon=30.06188&pin=1"
                className="absolute top-0 left-0 w-full h-full border-0 rounded-lg"
                allowFullScreen
                title="New Kigali Designers Live Map"
              ></iframe>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-blue-600" />
                  {t("location.address")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-semibold">{t("location.companyName")}</p>
                <p className="text-gray-600">{t("location.city")}</p>
                <p className="text-gray-600">{t("location.region")}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-6 w-6 text-blue-600" />
                  {t("location.contact")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-gray-600 font-extrabold">{t("location.phone")}</p>
                <p className="text-gray-600 font-black">{t("location.email")}</p>
                <p className="text-gray-600 text-justify font-extrabold">{t("location.businessHours")}</p>
                <p className="text-gray-600 font-extrabold">{t("location.saturdayHours")}</p>
                <p className="text-gray-600 font-extrabold">{t("location.sundayHours")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-red-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">{t("footer.title")}</h3>
            <p className="text-gray-400">{t("footer.subtitle")}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-gray-900 bg-transparent"
            >
              {t("footer.contactUs")}
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-gray-900 bg-transparent"
            >
              {t("footer.visitGallery")}
            </Button>
          </div>

          <div className="text-center text-gray-400 space-y-2">
            <p>{t("footer.copyright")}</p>
            <p>{t("footer.policy")}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
