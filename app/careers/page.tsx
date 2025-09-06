"use client";

import { useState } from 'react';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ArrowRight, Briefcase, Users, Zap, CheckCircle, Upload, FileText } from 'lucide-react';

const jobOpenings = [
  {
    id: 1,
    title: "Senior AI Engineer",
    department: "Engineering",
    location: "Hyderabad, India",
    type: "Full-time",
    experience: "3-5 years",
    description: "Lead development of cutting-edge AI solutions and machine learning models."
  },
  {
    id: 2,
    title: "Data Scientist",
    department: "Data Science",
    location: "Hyderabad, India", 
    type: "Full-time",
    experience: "2-4 years",
    description: "Analyze complex datasets and build predictive models for business insights."
  },
  {
    id: 3,
    title: "Frontend Developer",
    department: "Engineering",
    location: "Hyderabad, India",
    type: "Full-time", 
    experience: "1-3 years",
    description: "Create beautiful and responsive user interfaces for our AI applications."
  },
  {
    id: 4,
    title: "AI Product Manager",
    department: "Product",
    location: "Hyderabad, India",
    type: "Full-time",
    experience: "4-6 years", 
    description: "Drive product strategy and roadmap for AI-powered solutions."
  },
  {
    id: 5,
    title: "HROps Tech Internship",
    department: "Human Resources",
    location: "Hyderabad, India",
    type: "Internship",
    experience: "0-1 years",
    description: "Gain hands-on experience in HR technology, automation, and people analytics using AI tools."
  },
  {
    id: 6,
    title: "AI/ML Internship",
    department: "Data Science",
    location: "Hyderabad, India",
    type: "Internship",
    experience: "0-1 years",
    description: "Work on real AI projects, learn machine learning algorithms, and contribute to innovative solutions."
  },
  {
    id: 7,
    title: "UI/UX Internship",
    department: "Design",
    location: "Hyderabad, India",
    type: "Internship",
    experience: "0-1 years",
    description: "Design intuitive user experiences for AI applications and learn modern design principles."
  },
  {
    id: 8,
    title: "Influencer PR Internship",
    department: "Marketing",
    location: "Hyderabad, India",
    type: "Internship",
    experience: "0-1 years",
    description: "Manage influencer partnerships, create engaging content, and build brand awareness in the AI space."
  }
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<typeof jobOpenings[0] | null>(null);
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    coverLetter: '',
    resume: null as File | null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      resume: file
    }));
  };

  const handleJobApply = (job: typeof jobOpenings[0]) => {
    setSelectedJob(job);
    setIsApplicationOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      experience: '',
      coverLetter: '',
      resume: null
    });

    setIsSubmitting(false);
    setIsApplicationOpen(false);
    setShowSuccessDialog(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-green-50">
      <Navigation 
        activeSection="careers" 
        onScrollToSection={() => {}} 
      />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-200/30 to-blue-200/30 rounded-full blur-xl animate-pulse" />
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-green-200/30 to-purple-200/30 rounded-full blur-lg animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 transform hover:scale-105 transition-all duration-300">
                <Briefcase className="w-4 h-4 mr-1" />
                Join Our Team
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Build the Future with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  AI Innovation
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Join DevTechAi.Org and be part of a team that's transforming industries 
                through cutting-edge artificial intelligence solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-br from-green-200/20 to-blue-200/20 rounded-full blur-xl animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 transform hover:scale-105 transition-all duration-300">
              Open Positions
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Current Job Openings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore exciting career opportunities and find your perfect role 
              in the world of artificial intelligence.
            </p>
          </div>

          {/* Full-time Positions */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Full-time Positions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {jobOpenings.filter(job => job.type === 'Full-time').map((job) => (
                <Card 
                  key={job.id} 
                  className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 border-0 bg-gradient-to-br from-white to-gray-50"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <CardTitle className="text-xl text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                          {job.title}
                        </CardTitle>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="text-xs">
                            {job.department}
                          </Badge>
                          <Badge 
                            variant="outline" 
                            className={`text-xs ${
                              job.type === 'Internship' 
                                ? 'border-orange-200 text-orange-700 bg-orange-50' 
                                : 'border-blue-200 text-blue-700 bg-blue-50'
                            }`}
                          >
                            {job.type}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {job.experience}
                          </Badge>
                        </div>
                      </div>
                      <Briefcase className="h-8 w-8 text-purple-600 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed mb-4">
                      {job.description}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        📍 {job.location}
                      </div>
                      <Button 
                        onClick={() => handleJobApply(job)}
                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white transform hover:scale-105 hover:shadow-lg transition-all duration-300"
                      >
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Internship Positions */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Internship Opportunities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {jobOpenings.filter(job => job.type === 'Internship').map((job) => (
                <Card 
                  key={job.id} 
                  className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 border-0 bg-gradient-to-br from-white to-gray-50"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <CardTitle className="text-xl text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                          {job.title}
                        </CardTitle>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="text-xs">
                            {job.department}
                          </Badge>
                          <Badge 
                            variant="outline" 
                            className={`text-xs ${
                              job.type === 'Internship' 
                                ? 'border-orange-200 text-orange-700 bg-orange-50' 
                                : 'border-blue-200 text-blue-700 bg-blue-50'
                            }`}
                          >
                            {job.type}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {job.experience}
                          </Badge>
                        </div>
                      </div>
                      <Briefcase className="h-8 w-8 text-purple-600 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed mb-4">
                      {job.description}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        📍 {job.location}
                      </div>
                      <Button 
                        onClick={() => handleJobApply(job)}
                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white transform hover:scale-105 hover:shadow-lg transition-all duration-300"
                      >
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-36 h-36 bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-20 right-1/4 w-28 h-28 bg-gradient-to-br from-green-200/20 to-purple-200/20 rounded-full blur-xl animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-green-100 text-green-700 hover:bg-green-200 transform hover:scale-105 transition-all duration-300">
              Why Join Us
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Be Part of Something Big
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a team that's passionate about pushing the boundaries of AI technology 
              and making a real impact in the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 group transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Collaborative Culture</h3>
              <p className="text-gray-600">Work with brilliant minds in an environment that fosters innovation and creativity.</p>
            </div>
            <div className="text-center space-y-4 group transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Cutting-Edge Technology</h3>
              <p className="text-gray-600">Work with the latest AI technologies and contribute to groundbreaking projects.</p>
            </div>
            <div className="text-center space-y-4 group transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                <Briefcase className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Growth Opportunities</h3>
              <p className="text-gray-600">Advance your career with continuous learning and professional development.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Job Application Dialog */}
      <Dialog open={isApplicationOpen} onOpenChange={setIsApplicationOpen}>
        <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <FileText className="h-6 w-6 text-purple-600" />
              <span>Apply for {selectedJob?.title}</span>
            </DialogTitle>
            <DialogDescription>
              Fill out the form below to submit your application. We'll review your profile and get back to you soon.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Full Name *</label>
                <Input 
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="John Doe" 
                  required
                  className="border-gray-200 focus:border-purple-500" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Email *</label>
                <Input 
                  name="email"
                  type="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com" 
                  required
                  className="border-gray-200 focus:border-purple-500" 
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Phone Number *</label>
                <Input 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 9876543210" 
                  required
                  className="border-gray-200 focus:border-purple-500" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Years of Experience *</label>
                <Input 
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  placeholder="3 years" 
                  required
                  className="border-gray-200 focus:border-purple-500" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Resume/CV *</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-500 transition-colors duration-300">
                <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-2">
                  {formData.resume ? formData.resume.name : 'Click to upload or drag and drop'}
                </p>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  required
                  className="hidden"
                  id="resume-upload"
                />
                <label 
                  htmlFor="resume-upload"
                  className="cursor-pointer bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-300"
                >
                  Choose File
                </label>
                <p className="text-xs text-gray-500 mt-2">PDF, DOC, DOCX up to 10MB</p>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Cover Letter</label>
              <Textarea 
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleInputChange}
                placeholder="Tell us why you're interested in this position and what makes you a great fit..." 
                className="border-gray-200 focus:border-purple-500 min-h-[120px]"
              />
            </div>

            <div className="flex justify-end space-x-4">
              <Button 
                type="button"
                variant="outline" 
                onClick={() => setIsApplicationOpen(false)}
                className="border-gray-200 text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </Button>
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <span>Application Submitted!</span>
            </DialogTitle>
            <DialogDescription className="text-center py-4">
              Thank you for applying! We have received your application and will get back to you soon.
              <br />
              <span className="text-sm text-gray-500 mt-2 block">
                Our HR team typically reviews applications within 3-5 business days.
              </span>
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center">
            <Button 
              onClick={() => setShowSuccessDialog(false)}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
