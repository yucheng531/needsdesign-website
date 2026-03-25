import { Users, LayoutTemplate, PenTool, FileText, Hammer, Home } from "lucide-react"

const steps = [
  {
    num: "01",
    title: "Connect",
    desc: "Free consultation to understand your needs and vision.",
    icon: Users,
  },
  {
    num: "02",
    title: "Proposal",
    desc: "Provide an initial design proposal with a custom solution for your space.",
    icon: LayoutTemplate,
  },
  {
    num: "03",
    title: "Design",
    desc: "Start designing, discussing until you are satisfied. ",
    icon: PenTool,
  },
  {
    num: "04",
    title: "Quotation",
    desc: "Design confirmed. We then provide a full construction quotation.",
    icon: FileText,
  },
  {
    num: "05",
    title: "Renovation",
    desc: "Quotation confirmed, Construction begins. A weekly progress reports will be provided during the renovation.",
    icon: Hammer,
  },
  {
    num: "06",
    title: "Handover",
    desc: "Construction complete, project handover. Time to enjoy!",
    icon: Home,
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="bg-background py-12 md:py-16 flex flex-col justify-center min-h-[auto] md:max-h-[720px] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="text-center mb-10 md:mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">

          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light">
            Our Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-x-15 md:gap-y-13 relative">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.num} className="flex flex-col">
                <div className="flex items-center gap-8 mb-3">
                  <div className="h-10 w-10 bg-secondary flex items-center justify-center rounded-full flex-shrink-0">
                    <Icon className="h-5 w-5 opacity-70" strokeWidth={2} />
                  </div>
                  <h3 className="font-serif text-xl font-light flex items-baseline gap-3">
                    <span className="text-xl font-medium tracking-widest text-muted-foreground">
                      {step.num}
                    </span>
                    {step.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-snug text-sm">
                  {step.desc}
                </p>
              </div>
            )
          })}
        </div>

        <div className="mt-12 max-w-4xl mx-auto bg-secondary p-5 md:p-6 text-center rounded-lg flex flex-col md:flex-row items-center gap-4 text-left">
          <div className="md:w-1/3 flex-shrink-0">
            <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-1">

            </p>
            <h4 className="font-serif text-lg md:text-xl font-light">
              Need branding?
            </h4>
          </div>
          <p className="text-muted-foreground leading-snug text-sm md:w-2/3 md:ml-auto md:text-left text-center">
            We also offer professional Graphic Design services. If you have branding, identity, or print needs, please leave a message for us!
          </p>
        </div>
      </div>
    </section>
  )
}
