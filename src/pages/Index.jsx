import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

function Index() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <section className="text-center">
        <h1 className="text-4xl font-bold">Welcome to Glasses Inc</h1>
        <p className="mt-4 text-lg">Discover the perfect glasses for your style and needs.</p>
      </section>

      <Separator />

      <section id="types" className="text-center">
        <h2 className="text-3xl font-semibold">Types of Glasses</h2>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Prescription Glasses</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Perfect for correcting vision and available in various styles.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Reading Glasses</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Ideal for reading and close-up work, available in stylish designs.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Sunglasses</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Protect your eyes from the sun with our range of fashionable sunglasses.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      <section id="benefits" className="text-center">
        <h2 className="text-3xl font-semibold">Benefits of Our Glasses</h2>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>High Quality</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Our glasses are made from the highest quality materials for durability and comfort.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Affordable Prices</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We offer competitive pricing without compromising on quality.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Stylish Designs</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Choose from a wide range of stylish designs to suit your personal taste.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      <section id="cta" className="text-center">
        <h2 className="text-3xl font-semibold">Get in Touch</h2>
        <p className="mt-4 text-lg">Contact us today to find your perfect pair of glasses.</p>
        <Button className="mt-4" variant="primary">Contact Us</Button>
      </section>
    </main>
  );
}

export default Index;