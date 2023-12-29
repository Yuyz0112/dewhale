import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function Menu() {
  const [order, setOrder] = useState([]);

  const addToOrder = (item) => {
    setOrder([...order, item]);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-black text-white p-4 text-center">
        <h1 className="text-3xl font-bold">Restaurant Menu</h1>
      </header>
      <main className="flex-1 overflow-y-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="bg-white">
            <CardHeader>
              <AspectRatio ratio={16 / 9}>
                <img
                  src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                  alt="Salad"
                  className="rounded-t-md object-cover"
                />
              </AspectRatio>
              <CardTitle className="p-4 text-2xl font-bold">Fresh Salad</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <p>A delicious salad made with fresh greens, tomatoes, cucumbers, and your choice of dressing.</p>
            </CardContent>
            <CardFooter className="p-4">
              <Button variant="solid" className="w-full" onClick={() => addToOrder('Fresh Salad')}>Add to Order</Button>
            </CardFooter>
          </Card>
          <Card className="bg-white">
            <CardHeader>
              <AspectRatio ratio={16 / 9}>
                <img
                  src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                  alt="Steak"
                  className="rounded-t-md object-cover"
                />
              </AspectRatio>
              <CardTitle className="p-4 text-2xl font-bold">Grilled Steak</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <p>A perfectly grilled steak cooked to your liking and served with a side of mashed potatoes.</p>
            </CardContent>
            <CardFooter className="p-4">
              <Button variant="solid" className="w-full" onClick={() => addToOrder('Grilled Steak')}>Add to Order</Button>
            </CardFooter>
          </Card>
          <Card className="bg-white">
            <CardHeader>
              <AspectRatio ratio={16 / 9}>
                <img
                  src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                  alt="Pasta"
                  className="rounded-t-md object-cover"
                />
              </AspectRatio>
              <CardTitle className="p-4 text-2xl font-bold">Italian Pasta</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <p>Traditional Italian pasta with a rich tomato sauce and a sprinkle of parmesan cheese.</p>
            </CardContent>
            <CardFooter className="p-4">
              <Button variant="solid" className="w-full" onClick={() => addToOrder('Italian Pasta')}>Add to Order</Button>
            </CardFooter>
          </Card>
        </div>
      </main>
      <footer className="bg-black text-white p-4 text-center">
        <h2 className="text-xl">Your Order</h2>
        <ul className="list-disc">
          {order.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </footer>
    </div>
  );
}