"use server"

export async function addNewService(formData: FormData) {
  try {
    // Extract form data
    const serviceData = {
      serviceName: formData.get("serviceName") as string,
      category: formData.get("category") as string,
      description: formData.get("description") as string,
      basePrice: Number.parseFloat(formData.get("basePrice") as string),
      duration: formData.get("duration") as string,
      status: formData.get("status") as string,
      features: formData.get("features") as string,
      serviceImage: formData.get("serviceImage") as File,
      createdAt: new Date().toISOString(),
    }

    // Validate required fields
    const requiredFields = ["serviceName", "category", "description", "basePrice", "status"]

    for (const field of requiredFields) {
      if (!serviceData[field as keyof typeof serviceData]) {
        return { success: false, error: `${field} is required` }
      }
    }

    // Validate price
    if (isNaN(serviceData.basePrice) || serviceData.basePrice < 0) {
      return { success: false, error: "Please enter a valid price" }
    }

    // In a real application, you would:
    // 1. Save the image to a storage service (like Vercel Blob)
    // 2. Save the service data to a database
    // 3. Update the services cache/index

    console.log("[v0] New service added:", {
      name: serviceData.serviceName,
      category: serviceData.category,
      price: serviceData.basePrice,
      status: serviceData.status,
      hasImage: serviceData.serviceImage && serviceData.serviceImage.size > 0,
    })

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return { success: true }
  } catch (error) {
    console.error("[v0] Error adding service:", error)
    return { success: false, error: "Failed to add service" }
  }
}
