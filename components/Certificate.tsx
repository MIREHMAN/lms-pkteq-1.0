import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CertificateProps {
  studentName: string;
  courseName: string;
  completionDate: string;
  certificateId: string;
}

export function Certificate({
  studentName,
  courseName,
  completionDate,
  certificateId,
}: CertificateProps) {
  return (
    <Card className="w-full max-w-4xl mx-auto relative overflow-hidden bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1">
      <div className="absolute inset-0 z-0 bg-white dark:bg-gray-900">
        <Image
          src="https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Certificate Background"
          layout="fill"
          objectFit="cover"
          className="opacity-10"
        />
      </div>
      <CardContent className="relative z-10 flex flex-col items-center text-center p-12 bg-white dark:bg-gray-900 rounded-lg">
        <div className="absolute top-4 left-4">
          <Badge variant="outline" className="text-sm">
            PAKTEQ Education
          </Badge>
        </div>
        <Image
          src="https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="PAKTEQ Education Logo"
          width={150}
          height={150}
          className="mb-8 rounded-full"
        />
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Certificate of Completion
        </h1>
        <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
          This is to certify that
        </p>
        <p className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          {studentName}
        </p>
        <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
          has successfully completed the course
        </p>
        <p className="text-2xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-red-600">
          {courseName}
        </p>
        <p className="text-xl mb-4 text-gray-600 dark:text-gray-300">
          on {completionDate}
        </p>
        <div className="flex justify-between w-full mt-12">
          <div className="text-left">
            
            <p className="text-gray-600 dark:text-gray-300">Instructor</p>
          </div>
          <div className="text-right">
           
            <p className="text-gray-600 dark:text-gray-300">Director</p>
          </div>
        </div>
        <p className="text-sm mt-8 text-gray-500 dark:text-gray-400">
          Certificate ID: {certificateId}
        </p>
      </CardContent>
    </Card>
  );
}
