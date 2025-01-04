"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Play,
  Pause,
  RotateCcw,
  FastForward,
  List,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Mock data - in a real app, this would come from an API
const courseData = {
  id: 1,
  title: "Introduction to Web Development",
  totalLectures: 10,
  lectures: [
    { id: 1, title: "Introduction to HTML", videoId: "dD2EISBDjWM" },
    { id: 2, title: "HTML Structure and Elements", videoId: "UB1O30fR-EE" },
    { id: 3, title: "Introduction to CSS", videoId: "1PnVor36_40" },
    { id: 4, title: "CSS Styling and Selectors", videoId: "1Rs2ND1ryYc" },
    { id: 5, title: "CSS Layout and Positioning", videoId: "jx5jmI0UlXU" },
    { id: 6, title: "Introduction to JavaScript", videoId: "W6NZfCO5SIk" },
    {
      id: 7,
      title: "JavaScript Basics: Variables and Data Types",
      videoId: "edlFjlzxkSI",
    },
    {
      id: 8,
      title: "JavaScript Functions and Objects",
      videoId: "PkZNo7MFNFg",
    },
    {
      id: 9,
      title: "DOM Manipulation with JavaScript",
      videoId: "5fb2aPlgoys",
    },
    { id: 10, title: "Event Handling in JavaScript", videoId: "e57ReoUn6kM" },
  ],
};

export default function LecturePage() {
  const params = useParams();
  const router = useRouter();
  const [currentLectureIndex, setCurrentLectureIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const lectureIndex = courseData.lectures.findIndex(
      (lecture) => lecture.id.toString() === params.lectureId
    );
    setCurrentLectureIndex(lectureIndex !== -1 ? lectureIndex : 0);
  }, [params.lectureId]);

  const currentLecture = courseData.lectures[currentLectureIndex];

  const handlePreviousLecture = () => {
    if (currentLectureIndex > 0) {
      router.push(
        `/courses/${params.courseId}/lectures/${
          courseData.lectures[currentLectureIndex - 1].id
        }`
      );
    }
  };

  const handleNextLecture = () => {
    if (currentLectureIndex < courseData.lectures.length - 1) {
      router.push(
        `/courses/${params.courseId}/lectures/${
          courseData.lectures[currentLectureIndex + 1].id
        }`
      );
    }
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    // In a real application, you would control the YouTube player here
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      <Card>
        <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0">
          <CardTitle className="text-lg sm:text-xl">
            {courseData.title}
          </CardTitle>
          <Progress
            value={((currentLectureIndex + 1) / courseData.totalLectures) * 100}
            className="w-full sm:w-1/3"
            indicatorColor="bg-gradient-to-r from-green-500 to-blue-500"
          />
        </CardHeader>
      </Card>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
        <h1 className="text-2xl sm:text-3xl font-bold">
          {currentLecture.title}
        </h1>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">
              <List className="mr-2" /> Lectures
            </Button>
          </SheetTrigger>
          <SheetContent>
            <ScrollArea className="h-[calc(100vh-100px)] pr-4">
              {courseData.lectures.map((lecture, index) => (
                <Button
                  key={lecture.id}
                  variant={
                    lecture.id === currentLecture.id ? "secondary" : "ghost"
                  }
                  className="w-full justify-start mb-2"
                  onClick={() =>
                    router.push(
                      `/courses/${params.courseId}/lectures/${lecture.id}`
                    )
                  }
                >
                  {index + 1}. {lecture.title}
                </Button>
              ))}
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </div>

      <Card className="overflow-hidden">
        <CardContent className="p-0 aspect-video">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${currentLecture.videoId}`}
            title={currentLecture.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex flex-col sm:flex-row justify-between items-center p-4 space-y-4 sm:space-y-0">
          <Button
            onClick={handlePreviousLecture}
            disabled={currentLectureIndex === 0}
            className="w-full sm:w-auto"
          >
            <ChevronLeft className="mr-2" /> Previous
          </Button>
          <div className="flex space-x-4">
            <Button onClick={() => {}} variant="outline" size="icon">
              <RotateCcw className="h-4 w-4" />
            </Button>
            <Button onClick={togglePlayPause} variant="outline" size="icon">
              {isPlaying ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4" />
              )}
            </Button>
            <Button onClick={() => {}} variant="outline" size="icon">
              <FastForward className="h-4 w-4" />
            </Button>
          </div>
          <Button
            onClick={handleNextLecture}
            disabled={currentLectureIndex === courseData.lectures.length - 1}
            className="w-full sm:w-auto"
          >
            Next <ChevronRight className="ml-2" />
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Lecture Notes</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm sm:text-base">
            This section would contain detailed notes or a transcript for the
            current lecture. In a real application, this content would be
            dynamically loaded based on the current lecture.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Additional Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
            <li>Supplementary reading material</li>
            <li>Practice exercises</li>
            <li>Related tutorials</li>
            <li>Downloadable code samples</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
