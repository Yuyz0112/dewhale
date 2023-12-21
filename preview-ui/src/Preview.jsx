import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";

export default function PricingPage() {
  return (
    <main className="bg-gray-100 p-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Three plans, three prices.</h1>
        <p className="text-xl mb-8">No setup costs or any other hidden fees.</p>
        <div className="inline-block">
          <label htmlFor="agenda-slider" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">How many agendas will you need?</label>
          <Slider id="agenda-slider" defaultValue={[1]} max={10} step={1} className="w-64 mb-2" />
          <div className="text-sm">10 or more? Request a quote</div>
        </div>
      </section>

      <section>
        <Tabs defaultValue="monthly" className="mb-8">
          <TabsList className="flex justify-center mb-4">
            <TabsTrigger value="monthly" className="px-4 py-2">Monthly billing</TabsTrigger>
            <TabsTrigger value="yearly" className="px-4 py-2">Yearly billing <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Save 15%</span></TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-6 text-white">
              <h2 className="text-2xl font-bold mb-4">Base</h2>
              <p className="mb-4">Individual golf professional (&lt;500 clients)</p>
              <p>The perfect match for starting golf professionals and golf professionals with a smaller clientele.</p>
            </div>
            <div className="bg-white p-6">
              <div className="text-4xl font-bold mb-4">€11/mo</div>
              <Button variant="solid" className="w-full">Choose Base</Button>
              <p className="mt-4 text-sm text-gray-600">Additional agenda €11 month</p>
            </div>
          </div>

          <div className="rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-green-400 to-green-600 p-6 text-white">
              <h2 className="text-2xl font-bold mb-4">Plus</h2>
              <p className="mb-4">Individual golf professional (&gt;500 clients) &amp; Smaller academies (&lt;3 professionals)</p>
              <p>For the golf professionals who already have many teaching hours and who have a large customer database and for the small golf academies.</p>
            </div>
            <div className="bg-white p-6">
              <div className="text-4xl font-bold mb-4">€58/mo</div>
              <Button variant="solid" className="w-full">Choose Plus</Button>
              <p className="mt-4 text-sm text-gray-600">Additional agenda €18 month</p>
            </div>
          </div>

          <div className="rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-purple-400 to-purple-600 p-6 text-white">
              <h2 className="text-2xl font-bold mb-4">Premium</h2>
              <p className="mb-4">Larger academies (more than 3 professionals)</p>
              <p>The ultimate solution for the bigger academies with a larger clientele.</p>
            </div>
            <div className="bg-white p-6">
              <div className="text-4xl font-bold mb-4">€105/mo</div>
              <Button variant="solid" className="w-full">Choose Premium</Button>
              <p className="mt-4 text-sm text-gray-600">Additional agenda €25 month</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}