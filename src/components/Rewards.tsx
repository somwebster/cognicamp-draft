
import { Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const Rewards = () => {
  return (
    <section id="rewards" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Win Awesome Swags and Goodies</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Showcase your best AI applications and win amazing prizes from Inquest AI!
          </p>
          <Separator className="w-24 h-1 bg-primary mx-auto mt-6" />
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-6">
                <Trophy className="w-16 h-16 text-amber-500" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Participants' Rewards</h3>
              <p className="text-gray-600 text-lg mb-6">
                All participants with completed projects will receive exclusive swag packs from Inquest AI, 
                including branded hoodies, stickers, and certificates. The best projects will be featured 
                on our website and social media channels!
              </p>
              <Button className="mt-2">Learn More</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Rewards;
