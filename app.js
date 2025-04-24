import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function LandingPage() {
  const [niche, setNiche] = useState("");

  const handleFindCustomers = () => {
    if (!niche) {
      alert("Please enter your business type or niche.");
      return;
    }

    // Simulate action (replace with real API call later)
    console.log("Searching for leads in:", niche);
    alert(`Finding leads for "${niche}"...`);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 bg-white shadow z-10 p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Customer Radar</h1>
        <nav className="space-x-4">
          <Button variant="ghost">Pricing</Button>
          <Button variant="ghost">Login</Button>
          <Button>Sign Up</Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-gradient-to-b from-blue-100 to-white">
        <h2 className="text-4xl font-extrabold mb-4">Discover Customers in Real-Time with AI</h2>
        <p className="text-lg mb-6">Enter your business type and let our AI find leads online for you.</p>
        <div className="max-w-md mx-auto flex gap-2">
          <Input
            value={niche}
            onChange={(e) => setNiche(e.target.value)}
            placeholder="e.g. Fitness Coach, Online Store..."
          />
          <Button onClick={handleFindCustomers}>Find Customers</Button>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-gray-50">
        <h3 className="text-3xl font-bold text-center mb-10">How It Works</h3>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {["Tell Us Your Niche", "Get Real-Time Leads", "Reach Out & Grow"].map((title, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-2">{`${i + 1}. ${title}`}</h4>
                <p>
                  {i === 0
                    ? "Input your business type or niche."
                    : i === 1
                    ? "AI finds people talking about your services online."
                    : "Contact them directly and build your client base."}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6">
        <h3 className="text-3xl font-bold text-center mb-10">Pricing</h3>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-6 text-center">
              <h4 className="text-2xl font-bold">Free Plan</h4>
              <p className="my-4">Basic daily leads</p>
              <Button variant="outline">Start Free</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <h4 className="text-2xl font-bold">Premium - $5.49/mo</h4>
              <p className="my-4">Unlimited leads, real-time alerts, and priority support</p>
              <Button>Go Premium</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-500">
        <p>&copy; 2025 Customer Radar. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
}
