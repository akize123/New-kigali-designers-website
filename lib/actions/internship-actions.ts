"use server"

export async function submitInternshipApplication(formData: FormData) {
  try {
    // Extract form data
    const applicationData = {
      firstName: formData.get("firstName") as string,
      middleName: formData.get("middleName") as string,
      lastName: formData.get("lastName") as string,
      gender: formData.get("gender") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      institution: formData.get("institution") as string,
      program: formData.get("program") as string,
      yearOfStudy: formData.get("yearOfStudy") as string,
      expectedGraduation: formData.get("expectedGraduation") as string,
      motivation: formData.get("motivation") as string,
      availability: formData.get("availability") as string,
      applicationLetter: formData.get("applicationLetter") as File,
      submittedAt: new Date().toISOString(),
    }

    // Validate required fields
    const requiredFields = [
      "firstName",
      "lastName",
      "gender",
      "email",
      "phone",
      "institution",
      "program",
      "yearOfStudy",
      "expectedGraduation",
      "motivation",
      "availability",
    ]

    for (const field of requiredFields) {
      if (!applicationData[field as keyof typeof applicationData]) {
        return { success: false, error: `${field} is required` }
      }
    }

    // Validate file upload
    if (!applicationData.applicationLetter || applicationData.applicationLetter.size === 0) {
      return { success: false, error: "Application letter is required" }
    }

    // In a real application, you would:
    // 1. Save the file to a storage service (like Vercel Blob)
    // 2. Save the application data to a database
    // 3. Send notification emails to admin

    console.log("[v0] Internship application submitted:", {
      name: `${applicationData.firstName} ${applicationData.lastName}`,
      email: applicationData.email,
      institution: applicationData.institution,
      fileName: applicationData.applicationLetter.name,
      fileSize: applicationData.applicationLetter.size,
    })

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return { success: true }
  } catch (error) {
    console.error("[v0] Error submitting internship application:", error)
    return { success: false, error: "Failed to submit application" }
  }
}
