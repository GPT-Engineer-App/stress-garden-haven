import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Cat } from 'lucide-react';

const fetchCatFact = async () => {
  const response = await fetch('https://catfact.ninja/fact');
  if (!response.ok) {
    throw new Error('Failed to fetch cat fact');
  }
  return response.json();
};

const CatFactCard = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['catFact'],
    queryFn: fetchCatFact,
  });

  if (isLoading) return <Skeleton className="h-[100px] w-full" />;
  if (error) return <p>Error loading cat fact</p>;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Cat className="h-6 w-6" />
          Cat Fact of the Day
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{data.fact}</p>
      </CardContent>
    </Card>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">All About Cats</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Cat Breeds</CardTitle>
              <CardDescription>Some popular cat breeds</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5">
                <li>Siamese</li>
                <li>Persian</li>
                <li>Maine Coon</li>
                <li>Bengal</li>
                <li>Scottish Fold</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Cat Behavior</CardTitle>
              <CardDescription>Understanding your feline friend</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Cats are known for their independent nature and unique behaviors. They communicate through vocalizations, body language, and scent marking. Cats are also natural hunters and enjoy play that mimics hunting behavior.</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Cat Care Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Tip</Badge>
                  Provide a balanced diet suitable for your cat's age and health needs.
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Tip</Badge>
                  Ensure regular veterinary check-ups and vaccinations.
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Tip</Badge>
                  Offer mental stimulation through toys and play sessions.
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Tip</Badge>
                  Keep the litter box clean and easily accessible.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <CatFactCard />
        
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>Images: Cat silhouettes from Lucide React icons</p>
        </div>
      </div>
    </div>
  );
};

export default Index;