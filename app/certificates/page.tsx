"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Download, Share2 } from "lucide-react";
import { Certificate } from "@/components/Certificate";

const certificates = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    date: "2023-12-15",
    studentName: "John Doe",
  },
  {
    id: 2,
    title: "Introduction to Data Science",
    date: "2024-02-20",
    studentName: "John Doe",
  },
];

export default function CertificatesPage() {
  const [selectedCertificate, setSelectedCertificate] = useState<
    (typeof certificates)[0] | null
  >(null);



  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Your Certificates</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <Card
            key={cert.id}
            className="overflow-hidden transition-all hover:shadow-lg"
          >
            <CardHeader className="bg-gradient-to-r from-green-500 to-teal-500 text-white">
              <CardTitle>{cert.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Awarded on: {cert.date}</p>
              <div className="flex space-x-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      onClick={() => setSelectedCertificate(cert)}
                      className="flex-1"
                    >
                      View Certificate
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    {selectedCertificate && (
                      <Certificate
                        studentName={selectedCertificate.studentName}
                        courseName={selectedCertificate.title}
                        completionDate={selectedCertificate.date}
                        certificateId={`CERT-${selectedCertificate.id}`}
                      />
                    )}
                  </DialogContent>
                </Dialog>
                <Button variant="outline" >
                  <Download className="w-4 h-4 mr-2" /> Download
                </Button>
                <Button variant="outline" >
                  <Share2 className="w-4 h-4 mr-2" /> Share
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
