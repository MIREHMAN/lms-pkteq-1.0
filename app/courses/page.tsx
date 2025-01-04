"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const courses = [
  {
    id: 1,
    title: "Introduction to Web Development",
    duration: "8 weeks",
    level: "Beginner",
    image:
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "Learn the basics of HTML, CSS, and JavaScript to build your first website.",
    enrolledStudents: 1234,
    rating: 4.7,
  },
  {
    id: 2,
    title: "Data Science Fundamentals",
    duration: "10 weeks",
    level: "Intermediate",
    image:
      "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "Explore data analysis, visualization, and machine learning techniques.",
    enrolledStudents: 987,
    rating: 4.8,
  },
  {
    id: 3,
    title: "Mobile App Design",
    duration: "6 weeks",
    level: "Beginner",
    image:
      "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "Master the principles of user interface and user experience design for mobile applications.",
    enrolledStudents: 756,
    rating: 4.6,
  },
  {
    id: 4,
    title: "Advanced Machine Learning",
    duration: "12 weeks",
    level: "Advanced",
    image:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "Dive deep into neural networks, deep learning, and advanced ML algorithms.",
    enrolledStudents: 543,
    rating: 4.9,
  },
  {
    id: 5,
    title: "Blockchain and Cryptocurrency",
    duration: "8 weeks",
    level: "Intermediate",
    image:
      "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "Understand the technology behind blockchain and its applications in cryptocurrency.",
    enrolledStudents: 678,
    rating: 4.5,
  },
  {
    id: 6,
    title: "Cloud Computing Essentials",
    duration: "9 weeks",
    level: "Intermediate",
    image:
      "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "Learn about cloud architectures, services, and deployment models.",
    enrolledStudents: 890,
    rating: 4.7,
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
              <Badge className="absolute top-2 right-2 bg-white text-black">
                {course.level}
              </Badge>
            </div>
            <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              <CardTitle>{course.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {course.description}
              </p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-semibold">{course.duration}</span>
                <span className="text-sm font-semibold">
                  {course.enrolledStudents} students
                </span>
              </div>
              <div className="flex items-center mb-4">
                <span className="text-yellow-500 mr-1">★</span>
                <span className="font-semibold mr-2">{course.rating}</span>
                <Progress value={course.rating * 20} className="flex-grow" />
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
