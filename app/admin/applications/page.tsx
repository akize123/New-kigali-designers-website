import { AdminLayout } from "@/components/admin-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText, Download, Eye, Search } from "lucide-react"

export default function ApplicationsPage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Applications Management</h1>
            <p className="text-gray-600">Review and manage job applications and internship requests</p>
          </div>
        </div>

        {/* Filters */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Filter Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Input placeholder="Search by name or position..." className="w-full" />
              </div>
              <Select>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Application Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Applications</SelectItem>
                  <SelectItem value="internship">Internships</SelectItem>
                  <SelectItem value="job">Job Applications</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="review">Under Review</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
              <Button>
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Applications List */}
        <div className="space-y-4">
          {/* Internship Applications */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>John Doe</CardTitle>
                  <CardDescription>Accounting Internship Application</CardDescription>
                </div>
                <Badge variant="secondary">New</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-600">Email: john.doe@student.edu</p>
                  <p className="text-sm text-gray-600">Phone: +250 788 123 456</p>
                  <p className="text-sm text-gray-600">Institution: University of Rwanda</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Program: Bachelor of Accounting</p>
                  <p className="text-sm text-gray-600">Year: 3rd Year</p>
                  <p className="text-sm text-gray-600">Applied: 2 hours ago</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm">
                  <Eye className="h-4 w-4 mr-2" />
                  Review Application
                </Button>
                <Button size="sm" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download Documents
                </Button>
                <Button size="sm" variant="outline">
                  Contact Applicant
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Sarah Smith</CardTitle>
                  <CardDescription>Senior Fashion Designer Position</CardDescription>
                </div>
                <Badge variant="outline">Under Review</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-600">Email: sarah.smith@email.com</p>
                  <p className="text-sm text-gray-600">Phone: +250 788 987 654</p>
                  <p className="text-sm text-gray-600">Experience: 8 years</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Previous: Lead Designer at Fashion House</p>
                  <p className="text-sm text-gray-600">Education: London College of Fashion</p>
                  <p className="text-sm text-gray-600">Applied: 1 day ago</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm">
                  <Eye className="h-4 w-4 mr-2" />
                  Review Application
                </Button>
                <Button size="sm" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download Portfolio
                </Button>
                <Button size="sm" variant="outline">
                  Schedule Interview
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Mike Johnson</CardTitle>
                  <CardDescription>Production Manager Position</CardDescription>
                </div>
                <Badge className="bg-green-600">Approved</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-600">Email: mike.johnson@email.com</p>
                  <p className="text-sm text-gray-600">Phone: +250 788 456 789</p>
                  <p className="text-sm text-gray-600">Experience: 12 years</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Previous: Operations Manager at TextileCorp</p>
                  <p className="text-sm text-gray-600">Education: MBA Operations Management</p>
                  <p className="text-sm text-gray-600">Applied: 3 days ago</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  <FileText className="h-4 w-4 mr-2" />
                  View Details
                </Button>
                <Button size="sm" variant="outline">
                  Send Offer Letter
                </Button>
                <Button size="sm" variant="outline">
                  Contact Applicant
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  )
}
