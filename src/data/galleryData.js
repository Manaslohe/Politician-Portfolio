const galleryData = {
  // Main gallery images
  galleryImages: [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      alt: "Gallery Image 1",
      title: "Community Event",
      description: "Community gathering for local development initiative",
      category: "events",
      date: "2024-01-15"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
      alt: "Gallery Image 2",
      title: "Youth Conference",
      description: "Empowering the next generation of leaders",
      category: "events",
      date: "2024-02-22"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
      alt: "Gallery Image 3",
      title: "Infrastructure Project",
      description: "Breaking ground on new community infrastructure",
      category: "work",
      date: "2024-03-10"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1468421870903-4df1664ac249",
      alt: "Gallery Image 4",
      title: "Public Rally",
      description: "Citizens gathering for community advocacy",
      category: "rallies",
      date: "2024-03-28"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1508672019048-805c876b67e2",
      alt: "Gallery Image 5",
      title: "Town Hall Meeting",
      description: "Open discussion with community leaders",
      category: "events",
      date: "2024-04-05"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1465101178521-c1a4c8a0a8b7",
      alt: "Gallery Image 6",
      title: "Community Service",
      description: "Volunteers working together for social good",
      category: "work",
      date: "2024-04-12"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
      alt: "Gallery Image 7",
      title: "Educational Program",
      description: "Promoting education and lifelong learning",
      category: "personal",
      date: "2024-05-01"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1",
      alt: "Gallery Image 8",
      title: "Civic Engagement",
      description: "Citizens participating in democratic processes",
      category: "rallies",
      date: "2024-05-15"
    },
    // You can add more images as needed
  ],
  
  // Categories for filtering
  categories: [
    { key: 'all', name: 'All Photos' },
    { key: 'events', name: 'Events' },
    { key: 'rallies', name: 'Rallies' },
    { key: 'work', name: 'Work On-Ground' },
    { key: 'personal', name: 'Personal Moments' }
  ]
};

export default galleryData;
