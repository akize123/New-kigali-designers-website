import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Users, GraduationCap, FileText, Calendar } from "lucide-react"
import Link from "next/link"

export default function InternshipPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-blue-100">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-4 bg-green-600">Now Accepting Applications</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Accounting Internship Program</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Gain valuable hands-on experience in accounting and financial management at Rwanda's leading fashion
            company. Perfect for students seeking practical industry experience.
          </p>
          <Button size="lg" asChild>
            <Link href="#application-form">Apply Now</Link>
          </Button>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Program Overview</h2>
            <p className="text-xl text-gray-600">Comprehensive internship experience in our accounting department</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Real-World Experience</h3>
                  <p className="text-gray-600">
                    Work on actual accounting projects, financial reporting, and budget analysis for our fashion
                    operations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Mentorship Program</h3>
                  <p className="text-gray-600">
                    Paired with experienced accounting professionals who will guide your learning and development.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Industry Insights</h3>
                  <p className="text-gray-600">
                    Learn about financial management in the fashion industry and gain valuable business insights.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Professional Development</h3>
                  <p className="text-gray-600">
                    Attend workshops, training sessions, and networking events to build your professional skills.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-6 w-6 text-blue-600" />
                    Duration & Schedule
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 3-6 months duration</li>
                    <li>• Full-time: Monday - Friday</li>
                    <li>• 8:00 AM - 5:00 PM</li>
                    <li>• Flexible start dates</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-6 w-6 text-blue-600" />
                    Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Currently enrolled in accounting program</li>
                    <li>• Minimum 2nd year student</li>
                    <li>• Strong academic performance</li>
                    <li>• Basic knowledge of accounting principles</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What You'll Learn</h2>
            <p className="text-xl text-gray-600">Comprehensive skills development in accounting and finance</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <FileText className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Financial Reporting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Prepare financial statements, analyze financial data, and create comprehensive reports for management.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Budget Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Assist in budget planning, variance analysis, and cost control for various departments and projects.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Calendar className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Accounts Payable/Receivable</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Manage vendor payments, customer invoicing, and maintain accurate records of all transactions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Requirements */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Application Requirements</h2>
            <p className="text-xl text-gray-600">What you need to submit with your application</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Required Documents</CardTitle>
                <CardDescription>Please prepare the following documents for your application</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Personal Information</p>
                      <p className="text-sm text-gray-600">
                        First name, middle name (optional), last name, gender, email
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Application Letter from School</p>
                      <p className="text-sm text-gray-600">
                        Official letter from your institution confirming enrollment and recommending you for internship
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Academic Transcripts</p>
                      <p className="text-sm text-gray-600">
                        Recent academic records showing your performance in accounting courses
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Resume/CV</p>
                      <p className="text-sm text-gray-600">
                        Updated resume highlighting relevant coursework and any work experience
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Ready to Apply?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Start your application process and take the first step towards your accounting career.
          </p>
          <Button size="lg" asChild>
            <Link href="/careers/internship/apply">Start Application</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-2">Questions About the Program?</h3>
          <p className="text-gray-400 mb-6">Contact our HR team for more information about the internship program.</p>
          <div className="space-y-2">
            <p>Email: hr@newkigalidesigners.com</p>
            <p>Phone: +250 780 521 244</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
