import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const courses = [
  {
    id: 1,
    title: "Introduction to Web Development",
    progress: 75,
    image:
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    title: "Data Science Fundamentals",
    progress: 40,
    image:
      "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    title: "Mobile App Design",
    progress: 10,
    image:
      "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export default function ProgressPage() {
  const overallProgress = Math.round(
    courses.reduce((acc, course) => acc + course.progress, 0) / courses.length
  );

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Your Progress</h1>
      <Card>
        <CardHeader>
          <CardTitle>Overall Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <Progress
            value={overallProgress}
            className="w-full h-4"
            indicatorColor="bg-gradient-to-r from-green-500 to-blue-500"
          />
          <p className="text-center mt-2 text-2xl font-bold">
            {overallProgress}% Complete
          </p>
        </CardContent>
      </Card>
      <h2 className="text-2xl font-semibold">Course Progress</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="overflow-hidden">
            <div className="relative h-40">
              <Image
                src={course.image}
                alt={course.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-lg">{course.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress
                value={course.progress}
                className="w-full mb-2"
                indicatorColor={`bg-gradient-to-r ${
                  course.progress < 30
                    ? "from-red-500 to-yellow-500"
                    : course.progress < 70
                    ? "from-yellow-500 to-green-500"
                    : "from-green-500 to-blue-500"
                }`}
              />
              <p className="text-center font-semibold">
                {course.progress}% Complete
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
