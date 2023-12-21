import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Slider } from "@/components/ui/slider";

export default function PricingPage() {
  return (
    <main className="bg-gray-100 p-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Three plans, three prices.</h1>
        <p className="text-xl mb-8">No setup costs or any other hidden fees.</p>
        <div className="mb-4">
          <label htmlFor="agenda-slider" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">How many agendas will you need?</label>
          <Slider id="agenda-slider" defaultValue={[1]} max={10} step={1} />
        </div>
        <p className="text-sm">10 or more? Request a quote</p>
      </section>

      <section className="mb-12">
        <ToggleGroup type="single" defaultValue="monthly" aria-label="Select billing type">
          <ToggleGroupItem value="monthly" className="text-sm">Monthly billing</ToggleGroupItem>
          <ToggleGroupItem value="yearly" className="text-sm">Yearly billing <span className="text-xs text-green-600 font-semibold ml-1">Save 15%</span></ToggleGroupItem>
        </ToggleGroup>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Pick your plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-white rounded-lg shadow-md p-4">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-blue-600">Base</CardTitle>
              <CardDescription className="text-sm">Individual golf professional (&lt;500 clients)</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">The perfect match for starting golf professionals and golf professionals with a smaller clientele.</p>
              <p className="text-3xl font-bold mb-4">€11/mo</p>
            </CardContent>
            <CardFooter>
              <Button variant="solid" className="w-full">Choose Base</Button>
              <p className="text-xs text-gray-500 mt-2">Additional agenda €11 month</p>
            </CardFooter>
          </Card>

          <Card className="bg-white rounded-lg shadow-md p-4">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-green-600">Plus</CardTitle>
              <CardDescription className="text-sm">Individual golf professional (&gt;500 clients) &amp; Smaller academies (&lt;3 professionals)</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">For the golf professionals who already have many teaching hours and who have a large customer database and for the small golf academies.</p>
              <p className="text-3xl font-bold mb-4">€58/mo</p>
            </CardContent>
            <CardFooter>
              <Button variant="solid" className="w-full">Choose Plus</Button>
              <p className="text-xs text-gray-500 mt-2">Additional agenda €18 month</p>
            </CardFooter>
          </Card>

          <Card className="bg-white rounded-lg shadow-md p-4">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-red-600">Premium</CardTitle>
              <CardDescription className="text-sm">Larger academies (more than 3 professionals)</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">The ultimate solution for the bigger academies with a larger clientele.</p>
              <p className="text-3xl font-bold mb-4">€105/mo</p>
            </CardContent>
            <CardFooter>
              <Button variant="solid" className="w-full">Choose Premium</Button>
              <p className="text-xs text-gray-500 mt-2">Additional agenda €25 month</p>
            </CardFooter>
          </Card>
        </div>
      </section>
    </main>
  );
}