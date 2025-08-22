import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, MapPin, Clock, GraduationCap, Briefcase } from "lucide-react"
import Link from "next/link"

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Join Our Team</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Build your career with Rwanda's leading fashion company. We're looking for passionate individuals who want
            to shape the future of African fashion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/careers/internship">Apply for Internship</Link>
            </Button>
            <Button variant="outline" size="lg">
              View All Positions
            </Button>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-[1.85rem]">Why To Choose New Kigali Designers?</h2>
            <p className="text-xl text-gray-600">
              Join a company that values innovation, culture, and professional growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <GraduationCap className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Professional Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Continuous learning opportunities, mentorship programs, and skill development workshops to advance
                  your career.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Collaborative Culture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Work with talented professionals in a supportive environment that celebrates diversity and creativity.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Briefcase className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Career Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Clear advancement paths and opportunities to take on leadership roles in Rwanda's fashion industry.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Opportunities */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Current Opportunities</h2>
            <p className="text-xl text-gray-600">Explore available positions and internship programs</p>
          </div>

          <div className="grid gap-6">
            {/* Internship Program - Featured */}
            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">Accounting Department Internship</CardTitle>
                    <CardDescription className="text-lg mt-2">
                      1-3 month internship program for accounting students
                    </CardDescription>
                  </div>
                  <Badge className="bg-blue-600">Featured</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span>Kigali, Rwanda</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>Full-time</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <GraduationCap className="h-4 w-4" />
                    <span>Student Level</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Join our accounting team and gain hands-on experience in financial management, budgeting, and
                  accounting practices in the fashion industry. Perfect for students seeking practical experience.
                </p>
                <Button asChild>
                  <Link href="/careers/internship">Apply Now</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Other Positions */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Senior Fashion Designer</CardTitle>
                    <CardDescription>Lead creative design projects and mentor junior designers</CardDescription>
                  </div>
                  <Badge variant="secondary">Full-time</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span>Kigali, Rwanda</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>Full-time</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Lead our design team in creating innovative fashion pieces that blend traditional African aesthetics
                  with contemporary trends.
                </p>
                <Button variant="outline">View Details</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Production Manager</CardTitle>
                    <CardDescription>Oversee manufacturing operations and quality control</CardDescription>
                  </div>
                  <Badge variant="secondary">Full-time</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span>Kigali, Rwanda</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>Full-time</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Manage our production facility, ensure quality standards, and optimize manufacturing processes for
                  efficiency.
                </p>
                <Button variant="outline">View Details</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-xl text-gray-600">Simple steps to join our team</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Apply Online</h3>
              <p className="text-gray-600">
                Submit your application through our online portal with required documents.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Review Process</h3>
              <p className="text-gray-600">
                Our HR team will review your application and contact qualified candidates.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Interview & Start</h3>
              <p className="text-gray-600">Complete the interview process and begin your journey with us.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-2">Ready to Join Us?</h3>
          <p className="text-gray-400 mb-6">Start your career journey with New Kigali Designers today.</p>
          <Button size="lg" asChild>
            <Link href="/careers/internship">Apply for Internship</Link>
          </Button>
        </div>
      </footer>
    </div>
  )
}
