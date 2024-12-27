// pages/index.tsx
"use client";
import { useState, useEffect } from "react";

type Post = {
  id: number;
  title: string;
  body: string;
};

export default function Home() {
  const [items, setItems] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data: Post[]) => {
        setItems(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">All Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="p-4 border border-gray-200 rounded-lg shadow hover:shadow-md transition duration-300"
          >
            <h2 className="text-lg font-bold mb-2">{item.title}</h2>
            <p className="text-gray-700">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}