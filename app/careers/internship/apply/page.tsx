import { Navigation } from "@/components/navigation"
import { InternshipApplicationForm } from "@/components/internship-application-form"

export default function InternshipApplicationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <section className="pt-20 pb-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Internship Application</h1>
          <p className="text-lg text-gray-600">
            Complete the form below to apply for our Accounting Department Internship Program
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <InternshipApplicationForm />
        </div>
      </section>
    </div>
  )
}
