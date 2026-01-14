import { useState } from "react"
import { UsersFour, ClockCountdown, PlayCircle, Gear, Sparkle, MicrosoftOutlookLogo } from "@phosphor-icons/react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Logo from "@/components/Logo"
import ChatButton from "@/components/ChatButton"
import ChatWindow from "@/components/ChatWindow"

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container max-w-6xl mx-auto px-6 py-4">
          <Logo />
        </div>
      </header>

      <ChatButton onClick={() => setIsChatOpen(true)} />
      <ChatWindow isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      <main>
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.9_0.005_250)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.9_0.005_250)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
          
          <div className="container max-w-6xl mx-auto px-6 relative">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight leading-tight">
                Intelligent Retail Business Management
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Neo Contoso delivers enterprise-grade SaaS solutions for modern retail operations. 
                From customer loyalty to workforce management and content delivery, we power the 
                complete retail technology stack.
              </p>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Sparkle className="text-accent" size={20} weight="fill" />
                <span>AI-assisted platform redesign in progress</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Platform Portfolio
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive solutions serving retailers across customer engagement, workforce operations, and knowledge management
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <UsersFour size={32} className="text-primary" weight="duotone" />
                    <Badge variant="secondary">Legacy UX</Badge>
                  </div>
                  <CardTitle className="text-xl">Customer Loyalty Platform</CardTitle>
                  <CardDescription>End-to-end customer engagement solution</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <p>• Customer-facing mobile application</p>
                  <p>• Administrative web dashboard</p>
                  <p>• Advanced analytics and insights</p>
                  <p>• Rewards and promotions engine</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <ClockCountdown size={32} className="text-primary" weight="duotone" />
                    <Badge variant="secondary">Mixed Architecture</Badge>
                  </div>
                  <CardTitle className="text-xl">Wage-Worker Timekeeping</CardTitle>
                  <CardDescription>Workforce management and time tracking</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <p>• Kiosk-based clock-in system</p>
                  <p>• Administrative web portal</p>
                  <p>• Shift scheduling and management</p>
                  <p>• Compliance and reporting tools</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <PlayCircle size={32} className="text-primary" weight="duotone" />
                    <Badge variant="secondary">API-Driven</Badge>
                  </div>
                  <CardTitle className="text-xl">Content Streaming Platform</CardTitle>
                  <CardDescription>Knowledge delivery and training system</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <p>• Training video library</p>
                  <p>• Digital instruction manuals</p>
                  <p>• Proprietary business data APIs</p>
                  <p>• Multi-format content support</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <Card className="bg-card/50 border-dashed">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <Gear size={28} className="text-muted-foreground mt-1" weight="duotone" />
                    <div>
                      <CardTitle className="text-lg">Line-of-Business Applications</CardTitle>
                      <CardDescription className="mt-2">
                        Extensive ecosystem of specialized tools for business process management, 
                        content administration, and operational workflows. Many systems require 
                        modernization and UX improvements.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
                  Modernization Journey
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Neo Contoso's platform reflects years of organic growth, resulting in a mixed 
                  application portfolio with varying architectures and user experiences. Our 
                  systems serve thousands of retail locations daily, but we recognize the need 
                  for modernization.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Under new ownership, we've committed to a comprehensive platform redesign 
                  leveraging AI-assisted development tools and modern architectural patterns. 
                  This transformation will deliver consistent, intuitive experiences across 
                  all Neo Contoso solutions.
                </p>
              </div>
              <div>
                <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                        <MicrosoftOutlookLogo size={28} className="text-primary-foreground" weight="bold" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Microsoft Partnership</CardTitle>
                        <CardDescription>Strategic technology alliance</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Neo Contoso has renewed our strategic partnership with Microsoft, enabling 
                      access to cutting-edge cloud infrastructure, AI services, and enterprise 
                      development tools.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Azure Cloud</Badge>
                      <Badge>AI Services</Badge>
                      <Badge>Enterprise Support</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-8" />

        <section className="py-16 bg-muted/20">
          <div className="container max-w-6xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                Built for Retail, Powered by Innovation
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Neo Contoso combines deep retail industry expertise with modern technology capabilities. 
                Our platform modernization initiative will deliver the next generation of retail 
                management solutions—intelligent, integrated, and built for the future.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-12 bg-card">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Logo />
            <div className="text-sm text-muted-foreground text-center md:text-right">
              <p>Intelligent Retail Business Management</p>
              <p className="mt-1">Enterprise SaaS Solutions</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App