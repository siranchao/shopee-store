import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function ProductTab() {
  return (
    <Tabs defaultValue="detail" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="detail">Detail</TabsTrigger>
        <TabsTrigger value="policy">Return Policy</TabsTrigger>
      </TabsList>

      <TabsContent value="detail">
        <Card>
          <CardHeader>
            <CardDescription className="text-gray-600 font-semibold">
            Product Details:
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-2 font-normal text-sm text-gray-600">
            <p>Styled with signature details, allover channel quilting and a faux shearling-lined hood, this puffer jacket is insulated with polyester fill for lightweight, cozy comfort. (Seller should provide fully descriptive product information here.)</p>
            <ul className="list-disc list-inside">
                <li className="">Seller can list product features here:</li>
                <li className="">Faux shearling-lined hood with toggle cord adjustment</li>
                <li className="">Elasticated cuffs</li>
                <li className="">Front zipper closure</li>
                <li className="">Chest zip pocket</li>
                <li className="">Shell, lining and fill: 100% polyester</li>
                <li className="">Machine wash cold</li>
            </ul>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="policy">
        <Card>
          <CardHeader>
            <CardDescription className="text-gray-600 font-semibold">
            Return & Warranty Policy:
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-2 font-normal text-sm text-gray-600">
            <p>If you&apos;re not fully satisfied, please fill in our <a href="#" className="underline text-blue-600">Contact us form</a> and we&apos;ll quickly work to correct the problem.</p>
            <p>We offer three levels of shipping which can be viewed at checkout. Shipping time will be 7-14 days. All orders are shipped with a tracking number.</p>
            <br />
            <ul className="list-disc list-inside">
                <li className="pb-2"><strong>Shipping Discount: </strong>Buying 2 products or more at the same time will save you quite a lot on shipping fees.</li>
                <li className="pb-2"><strong>24/7 Customer Support: </strong>We have a team of live reps ready to help and answer any questions you have within a 24-hour time frame, 7 days a week.</li>
                <li className="pb-2"><strong>Worldwide Shipping: </strong>Each order includes real-time tracking details and insurance coverage in the unlikely event that a package gets lost or stolen in transit.</li>
            </ul>
          </CardContent>

        </Card>
      </TabsContent>
    </Tabs>
  )
}
