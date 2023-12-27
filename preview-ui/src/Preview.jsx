import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ResponsivePie } from '@nivo/pie';
import { ResponsiveBar } from '@nivo/bar';
export default function Prototype() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="flex justify-between items-center p-4 border-b border-gray-700">
        <div className="text-2xl font-bold">IONBLOX</div>
        <nav className="flex space-x-4">
          <a href="#" className="hover:text-gray-300">AIR</a>
          <a href="#" className="hover:text-gray-300">LAND</a>
          <a href="#" className="hover:text-gray-300">NEWS</a>
          <a href="#" className="hover:text-gray-300">CONTACT</a>
        </nav>
      </header>
      <main className="p-8">
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Accelerating the future of electric mobility</h1>
          <p className="text-gray-400 mb-6">Extreme fast charging. Extended range. Long life. All in one cell for the first time.</p>
          <Button variant="outline">BOOK A DEMO</Button>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <AspectRatio ratio={16 / 9} className="bg-gray-800 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1605902711622-cfb43c4437b2?w=800&dpr=2&q=80"
              alt="Electric Vehicle Charging"
              className="object-cover"
            />
          </AspectRatio>
          <div className="space-y-4">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Fast charge, every charge</h2>
              <p className="text-gray-400 mb-6">Ionblox's cells were purpose-built for extreme fast charging and can fast charge on every single charge over the useful life of an EV without impacting overall cell performance.</p>
              <div style={{ height: 200 }}>
                <ResponsivePie
                  data={[
                    { id: "Charge", value: 100 },
                  ]}
                  innerRadius={0.7}
                  colors={{ scheme: 'paired' }}
                  enableArcLabels={false}
                  enableArcLinkLabels={false}
                  activeOuterRadiusOffset={8}
                />
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Enabling advanced air mobility</h2>
              <p className="text-gray-400">Ionblox's cell uniquely offers the highest levels of specific energy and specific power together in one cell, which makes them ideal for advanced air mobility, especially eVTOLs.</p>
            </div>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Uncompromising performance by design</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <div style={{ height: 200 }}>
                <ResponsiveBar
                  data={[
                    { name: "Range Increase", data: 30 },
                  ]}
                  keys={["data"]}
                  indexBy="name"
                  margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
                  padding={0.3}
                  valueScale={{ type: "linear" }}
                  indexScale={{ type: "band", round: true }}
                  colors={{ scheme: "paired" }}
                  borderWidth={1}
                  borderColor={{
                    from: "color",
                    modifiers: [["darker", 0.2]],
                  }}
                  enableLabel={false}
                />
              </div>
              <h3 className="text-lg font-semibold mt-4">+30%</h3>
              <p className="text-gray-400">Range Increase</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="flex justify-center items-center h-32 bg-blue-600 rounded-full">
                <span className="text-4xl font-bold">399</span>
              </div>
              <h3 className="text-lg font-semibold mt-4">399 mi</h3>
              <p className="text-gray-400">10 min charge</p>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-3xl font-bold mb-6">Strategic partners and investors</h2>
          <div className="flex space-x-4">
            <img src="https://via.placeholder.com/150" alt="Partner 1" className="h-12" />
            <img src="https://via.placeholder.com/150" alt="Partner 2" className="h-12" />
            <img src="https://via.placeholder.com/150" alt="Partner 3" className="h-12" />
          </div>
        </section>
      </main>
    </div>
  );
}