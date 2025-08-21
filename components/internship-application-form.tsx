"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Upload, FileText, CheckCircle } from "lucide-react"
import { submitInternshipApplication } from "@/lib/actions/internship-actions"

export function InternshipApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const { toast } = useToast()

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)

    try {
      const result = await submitInternshipApplication(formData)

      if (result.success) {
        toast({
          title: "Application Submitted Successfully!",
          description: "We'll review your application and contact you within 5-7 business days.",
        })

        // Reset form
        const form = document.getElementById("internship-form") as HTMLFormElement
        form?.reset()
        setUploadedFile(null)
      } else {
        toast({
          title: "Submission Failed",
          description: result.error || "Please try again later.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (file) {
      // Validate file type and size
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ]
      const maxSize = 5 * 1024 * 1024 // 5MB

      if (!allowedTypes.includes(file.type)) {
        toast({
          title: "Invalid File Type",
          description: "Please upload a PDF or Word document.",
          variant: "destructive",
        })
        return
      }

      if (file.size > maxSize) {
        toast({
          title: "File Too Large",
          description: "Please upload a file smaller than 5MB.",
          variant: "destructive",
        })
        return
      }

      setUploadedFile(file)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Internship Application Form</CardTitle>
        <CardDescription>Please fill out all required fields. Fields marked with * are mandatory.</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="internship-form" action={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input id="firstName" name="firstName" type="text" required placeholder="Enter your first name" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input id="lastName" name="lastName" type="text" required placeholder="Enter your last name" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="middleName">Middle Name (Optional)</Label>
              <Input
                id="middleName"
                name="middleName"
                type="text"
                placeholder="Enter your middle name (if applicable)"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="gender">Gender *</Label>
                <Select name="gender" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                    <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" name="email" type="email" required placeholder="your.email@example.com" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input id="phone" name="phone" type="tel" required placeholder="+250 XXX XXX XXX" />
            </div>
          </div>

          {/* Academic Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Academic Information</h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="institution">Institution Name *</Label>
                <Input
                  id="institution"
                  name="institution"
                  type="text"
                  required
                  placeholder="Your university/college name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="program">Program of Study *</Label>
                <Input id="program" name="program" type="text" required placeholder="e.g., Bachelor of Accounting" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="yearOfStudy">Year of Study *</Label>
                <Select name="yearOfStudy" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2">2nd Year</SelectItem>
                    <SelectItem value="3">3rd Year</SelectItem>
                    <SelectItem value="4">4th Year</SelectItem>
                    <SelectItem value="graduate">Graduate</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="expectedGraduation">Expected Graduation *</Label>
                <Input id="expectedGraduation" name="expectedGraduation" type="month" required />
              </div>
            </div>
          </div>

          {/* Application Letter Upload */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Required Documents</h3>

            <div className="space-y-2">
              <Label htmlFor="applicationLetter">Application Letter from School *</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                <input
                  id="applicationLetter"
                  name="applicationLetter"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  required
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label htmlFor="applicationLetter" className="cursor-pointer">
                  {uploadedFile ? (
                    <div className="flex items-center justify-center gap-2 text-green-600">
                      <CheckCircle className="h-8 w-8" />
                      <div>
                        <p className="font-medium">{uploadedFile.name}</p>
                        <p className="text-sm text-gray-500">{(uploadedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-2">
                      <Upload className="h-8 w-8 text-gray-400" />
                      <div>
                        <p className="font-medium text-gray-700">Click to upload application letter</p>
                        <p className="text-sm text-gray-500">PDF, DOC, or DOCX (max 5MB)</p>
                      </div>
                    </div>
                  )}
                </label>
              </div>
              <p className="text-sm text-gray-600">
                Upload the official application letter from your institution confirming your enrollment and recommending
                you for this internship.
              </p>
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Additional Information</h3>

            <div className="space-y-2">
              <Label htmlFor="motivation">Why are you interested in this internship? *</Label>
              <Textarea
                id="motivation"
                name="motivation"
                required
                placeholder="Tell us about your interest in accounting and why you want to intern with New Kigali Designers..."
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="availability">Preferred Start Date *</Label>
              <Input id="availability" name="availability" type="date" required />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Submitting Application...
                </>
              ) : (
                <>
                  <FileText className="h-4 w-4 mr-2" />
                  Submit Application
                </>
              )}
            </Button>
          </div>

          <div className="text-sm text-gray-600 text-center">
            By submitting this application, you agree to our terms and conditions and privacy policy.
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
