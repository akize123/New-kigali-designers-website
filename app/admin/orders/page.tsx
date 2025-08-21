import { AdminLayout } from "@/components/admin-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Edit, Truck, DollarSign } from "lucide-react"

export default function OrdersPage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Orders Management</h1>
            <p className="text-gray-600">Track and manage customer orders and cart items</p>
          </div>
        </div>

        {/* Order Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Pending Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">28</div>
              <p className="text-xs text-muted-foreground">Requires attention</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Cart Items</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89</div>
              <p className="text-xs text-muted-foreground">Active shopping carts</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>
        </div>

        {/* Orders List */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Order #1234</CardTitle>
                  <CardDescription>Custom Uniforms - Bank of Kigali</CardDescription>
                </div>
                <Badge className="bg-blue-600">Processing</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-600">Customer: Bank of Kigali</p>
                  <p className="text-sm text-gray-600">Contact: procurement@bok.rw</p>
                  <p className="text-sm text-gray-600">Phone: +250 788 100 200</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Items: 150 Custom Shirts</p>
                  <p className="text-sm text-gray-600">Value: $4,500</p>
                  <p className="text-sm text-gray-600">Delivery: March 15, 2025</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Order Date: March 1, 2025</p>
                  <p className="text-sm text-gray-600">Status: In Production</p>
                  <p className="text-sm text-gray-600">Progress: 60%</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm">
                  <Eye className="h-4 w-4 mr-2" />
                  View Details
                </Button>
                <Button size="sm" variant="outline">
                  <Edit className="h-4 w-4 mr-2" />
                  Update Status
                </Button>
                <Button size="sm" variant="outline">
                  <Truck className="h-4 w-4 mr-2" />
                  Track Delivery
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Order #1235</CardTitle>
                  <CardDescription>Traditional Wear Collection</CardDescription>
                </div>
                <Badge variant="secondary">Pending</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-600">Customer: Cultural Center</p>
                  <p className="text-sm text-gray-600">Contact: info@culturalcenter.rw</p>
                  <p className="text-sm text-gray-600">Phone: +250 788 300 400</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Items: 50 Traditional Dresses</p>
                  <p className="text-sm text-gray-600">Value: $3,200</p>
                  <p className="text-sm text-gray-600">Delivery: March 20, 2025</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Order Date: March 2, 2025</p>
                  <p className="text-sm text-gray-600">Status: Awaiting Approval</p>
                  <p className="text-sm text-gray-600">Priority: High</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm">
                  <Eye className="h-4 w-4 mr-2" />
                  Review Order
                </Button>
                <Button size="sm" variant="outline">
                  Approve Order
                </Button>
                <Button size="sm" variant="outline">
                  Request Changes
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Order #1236</CardTitle>
                  <CardDescription>Corporate Shirts - Rwanda Development Board</CardDescription>
                </div>
                <Badge className="bg-green-600">Completed</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-600">Customer: Rwanda Development Board</p>
                  <p className="text-sm text-gray-600">Contact: procurement@rdb.rw</p>
                  <p className="text-sm text-gray-600">Phone: +250 788 500 600</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Items: 200 Corporate Shirts</p>
                  <p className="text-sm text-gray-600">Value: $6,000</p>
                  <p className="text-sm text-gray-600">Delivered: February 28, 2025</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Order Date: February 10, 2025</p>
                  <p className="text-sm text-gray-600">Status: Delivered</p>
                  <p className="text-sm text-gray-600">Rating: 5 stars</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  <Eye className="h-4 w-4 mr-2" />
                  View Invoice
                </Button>
                <Button size="sm" variant="outline">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Payment Status
                </Button>
                <Button size="sm" variant="outline">
                  Reorder
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  )
}
