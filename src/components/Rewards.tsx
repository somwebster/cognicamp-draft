
import { Award, Gift, Star, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Rewards = () => {
  const prizes = [
    {
      title: "Grand Prize",
      description: "The best AI application will receive a MacBook Air and mentorship from industry professionals.",
      icon: <Trophy className="w-12 h-12 text-amber-500" />
    },
    {
      title: "Runner-Up Prizes",
      description: "Top 3 teams will receive Arduino AI kits and exclusive workshop access.",
      icon: <Award className="w-12 h-12 text-blue-500" />
    },
    {
      title: "Participation Swag",
      description: "All participants will get branded hoodies, stickers, and certificates.",
      icon: <Gift className="w-12 h-12 text-purple-500" />
    },
    {
      title: "School Recognition",
      description: "The school with most innovative projects gets a tech lab upgrade package.",
      icon: <Star className="w-12 h-12 text-green-500" />
    }
  ];

  return (
    <section id="rewards" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Win Your Way to Awesome Rewards</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Showcase your best AI applications and win amazing prizes!
          </p>
          <Separator className="w-24 h-1 bg-primary mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {prizes.map((prize, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">{prize.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{prize.title}</h3>
                <p className="text-gray-600">{prize.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rewards;
