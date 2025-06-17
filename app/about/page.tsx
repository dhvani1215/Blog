import Image from "next/image"
import { Users, Target, Award, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import AnimatedCounter from "@/components/animated-counter"

export default function AboutPage() {
  const stats = [
    { label: "Articles Published", value: 150, suffix: "+" },
    { label: "Happy Readers", value: 10000, suffix: "+" },
    { label: "Years Experience", value: 5, suffix: "" },
    { label: "Technologies Covered", value: 50, suffix: "+" },
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "Lead Developer & Writer",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Full-stack developer with 8+ years of experience in React, Node.js, and cloud technologies.",
    },
    {
      name: "Mike Chen",
      role: "Senior Frontend Developer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "React specialist passionate about performance optimization and modern web technologies.",
    },
    {
      name: "Emily Rodriguez",
      role: "AI/ML Engineer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Machine learning expert focused on practical AI applications in web development.",
    },
  ]

  const values = [
    {
      icon: Target,
      title: "Mission",
      description:
        "To make complex technology concepts accessible to developers of all skill levels through clear, practical tutorials and insights.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Building a supportive community where developers can learn, share knowledge, and grow together in their tech journey.",
    },
    {
      icon: Award,
      title: "Quality",
      description:
        "Delivering high-quality, well-researched content that provides real value and practical solutions to everyday development challenges.",
    },
    {
      icon: Heart,
      title: "Passion",
      description:
        "Driven by genuine passion for technology and the desire to help others succeed in their development careers.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-violet-50 dark:from-gray-900 dark:via-gray-800 dark:to-violet-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-purple-600/10 dark:from-violet-900/20 dark:to-purple-900/20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent animate-in slide-in-from-bottom-4 duration-1000">
              About TechBlog
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 animate-in slide-in-from-bottom-4 duration-1000 delay-200">
              Empowering developers with cutting-edge insights, practical tutorials, and the latest trends in
              technology.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center animate-in slide-in-from-bottom-4 duration-1000"
                  style={{ animationDelay: `${(index + 3) * 200}ms` }}
                >
                  <div className="text-3xl font-bold text-violet-600 dark:text-violet-400 mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in slide-in-from-left-4 duration-1000">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Our Story</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                TechBlog was born from a simple idea: make complex technology concepts accessible to everyone. What
                started as a small collection of personal notes and tutorials has grown into a comprehensive resource
                trusted by thousands of developers worldwide.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We believe that great technology should be understood, not just used. Our team of experienced developers
                and tech enthusiasts work tirelessly to break down complex topics into digestible, actionable content
                that helps you grow in your development journey.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Whether you're just starting out or you're a seasoned professional looking to stay current with the
                latest trends, TechBlog is here to support your learning and growth.
              </p>
            </div>
            <div className="animate-in slide-in-from-right-4 duration-1000">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white/50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Our Values</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These core values guide everything we do and shape the content we create for our community.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="text-center hover:shadow-lg transition-shadow duration-300 animate-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-900">
                    <value.icon className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Meet Our Team</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The passionate individuals behind TechBlog, dedicated to sharing knowledge and helping developers grow.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={member.name}
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-6">
                  <div className="relative mx-auto mb-4 h-24 w-24">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">{member.name}</h3>
                  <p className="text-violet-600 dark:text-violet-400 text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
