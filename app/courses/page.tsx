"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const courses = [
  {
    id: 1,
    title: "Introduction to Web Development",
    duration: "8 weeks",
    level: "Beginner",
    image: "https://source.unsplash.com/random/800x600?web",
    description:
      "Learn the basics of HTML, CSS, and JavaScript to build your first website.",
  },
  {
    id: 2,
    title: "Data Science Fundamentals",
    duration: "10 weeks",
    level: "Intermediate",
    image: "https://source.unsplash.com/random/800x600?data",
    description:
      "Explore data analysis, visualization, and machine learning techniques.",
  },
  {
    id: 3,
    title: "Mobile App Design",
    duration: "6 weeks",
    level: "Beginner",
    image: "https://source.unsplash.com/random/800x600?mobile",
    description:
      "Master the principles of user interface and user experience design for mobile applications.",
  },
  {
    id: 4,
    title: "Advanced Machine Learning",
    duration: "12 weeks",
    level: "Advanced",
    image: "https://source.unsplash.com/random/800x600?ai",
    description:
      "Dive deep into neural networks, deep learning, and advanced ML algorithms.",
  },
];

export default function CoursesPage() {
  const [enrolledCourses, setEnrolledCourses] = useState<number[]>([]);

  const handleEnroll = (courseId: number) => {
    if (!enrolledCourses.includes(courseId)) {
      setEnrolledCourses([...enrolledCourses, courseId]);
    }
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Available Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card
            key={course.id}
            className="overflow-hidden transition-all hover:shadow-lg"
          >
            <div className="relative h-48">
              <Image
                src={course.image}
                alt={course.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              <CardTitle>{course.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {course.description}
              </p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-semibold">{course.duration}</span>
                <span className="text-sm font-semibold">{course.level}</span>
              </div>
              <div className="flex space-x-2">
                <Button asChild className="flex-1">
                  <Link href={`/courses/${course.id}`}>View Details</Link>
                </Button>
                {enrolledCourses.includes(course.id) ? (
                  <Button asChild variant="outline" className="flex-1">
                    <Link href={`/courses/${course.id}/enrolled`}>
                      Go to Course
                    </Link>
                  </Button>
                ) : (
                  <Button
                    onClick={() => handleEnroll(course.id)}
                    variant="outline"
                    className="flex-1"
                  >
                    Enroll Now
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
