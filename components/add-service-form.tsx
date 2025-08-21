"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Plus, Upload } from "lucide-react"
import { addNewService } from "@/lib/actions/services-actions"

export function AddServiceForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [serviceImage, setServiceImage] = useState<File | null>(null)
  const { toast } = useToast()

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)

    try {
      const result = await addNewService(formData)

      if (result.success) {
        toast({
          title: "Service Added Successfully!",
          description: "The new service has been added to your offerings.",
        })

        // Reset form
        const form = document.getElementById("add-service-form") as HTMLFormElement
        form?.reset()
        setServiceImage(null)
      } else {
        toast({
          title: "Failed to Add Service",
          description: result.error || "Please try again later.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Failed to Add Service",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (file) {
      const allowedTypes = ["image/jpeg", "image/png", "image/webp"]
      const maxSize = 5 * 1024 * 1024 // 5MB

      if (!allowedTypes.includes(file.type)) {
        toast({
          title: "Invalid File Type",
          description: "Please upload a JPEG, PNG, or WebP image.",
          variant: "destructive",
        })
        return
      }

      if (file.size > maxSize) {
        toast({
          title: "File Too Large",
          description: "Please upload an image smaller than 5MB.",
          variant: "destructive",
        })
        return
      }

      setServiceImage(file)
    }
  }

  return (
    <form id="add-service-form" action={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="serviceName">Service Name *</Label>
          <Input id="serviceName" name="serviceName" type="text" required placeholder="e.g., Custom Uniform Design" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="category">Category *</Label>
          <Select name="category" required>
            <SelectTrigger>
              <SelectValue placeholder="Select service category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="design">Design Services</SelectItem>
              <SelectItem value="manufacturing">Manufacturing</SelectItem>
              <SelectItem value="consultation">Consultation</SelectItem>
              <SelectItem value="branding">Corporate Branding</SelectItem>
              <SelectItem value="traditional">Traditional Wear</SelectItem>
              <SelectItem value="custom">Custom Services</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Service Description *</Label>
        <Textarea
          id="description"
          name="description"
          required
          placeholder="Describe what this service includes and its benefits..."
          rows={3}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="basePrice">Starting Price (USD) *</Label>
          <Input id="basePrice" name="basePrice" type="number" required placeholder="25" min="0" step="0.01" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="duration">Typical Duration</Label>
          <Input id="duration" name="duration" type="text" placeholder="e.g., 2-3 weeks" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="status">Status *</Label>
          <Select name="status" required>
            <SelectTrigger>
              <SelectValue placeholder="Service status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="features">Key Features (one per line)</Label>
        <Textarea
          id="features"
          name="features"
          placeholder="Professional design consultation&#10;High-quality materials&#10;Custom fitting&#10;Fast turnaround time"
          rows={4}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="serviceImage">Service Image</Label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-gray-400 transition-colors">
          <input
            id="serviceImage"
            name="serviceImage"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
          <label htmlFor="serviceImage" className="cursor-pointer">
            {serviceImage ? (
              <div className="flex items-center justify-center gap-2 text-green-600">
                <Upload className="h-6 w-6" />
                <div>
                  <p className="font-medium">{serviceImage.name}</p>
                  <p className="text-sm text-gray-500">{(serviceImage.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2">
                <Upload className="h-6 w-6 text-gray-400" />
                <div>
                  <p className="font-medium text-gray-700">Click to upload service image</p>
                  <p className="text-sm text-gray-500">JPEG, PNG, or WebP (max 5MB)</p>
                </div>
              </div>
            )}
          </label>
        </div>
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
            Adding Service...
          </>
        ) : (
          <>
            <Plus className="h-4 w-4 mr-2" />
            Add Service
          </>
        )}
      </Button>
    </form>
  )
}
