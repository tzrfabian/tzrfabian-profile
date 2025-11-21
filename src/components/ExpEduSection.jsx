export default function ExpEdu() {
    return (
        <div className="animate-fadeslidedown overflow-x-hidden">
            {/* Work Experience */}
            <div className="mt-8 text-left">
              <h3 className="text-2xl text-slate-100 font-semibold mb-2">Work Experience</h3>
              <hr className="border-gray-500 mb-4"/>
              <div className="space-y-4 text-gray-300">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="font-medium text-slate-100">Internal Developer — PT Agrodana Futures</div>
                    <div className="text-sm text-gray-400">Dec 2024 - Present</div>
                  </div>
                    <div>Jakarta, Indonesia</div>
                  <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-400 text-sm md:text-base">
                    <li>Develop and maintain internal tools and automation to support trading operations.</li>
                    <li>Integrate internal systems and external APIs for better data flow and reporting.</li>
                    <li>Implement dashboards and monitoring to track system health and KPIs.</li>
                    <li>Improve developer workflows by building scripts and CI/CD automation.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <div className="font-medium text-slate-100">DevOps Intern — PT Phintraco Consulting</div>
                    <div className="text-sm text-gray-400">Feb 2022 - Feb 2023</div>
                  </div>
                    <div>Jakarta, Indonesia</div>
                  <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-400 text-sm md:text-base">
                    <li>Maintained and improved CI/CD pipelines to streamline deployments.</li>
                    <li>Worked on infrastructure automation and configuration management.</li>
                    <li>Set up monitoring and alerting to improve reliability and visibility.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="mt-8 text-left">
              <h3 className="text-2xl text-slate-100 font-semibold mb-2">Education</h3>
              <hr className="border-gray-500 mb-4"/>
              <div className="space-y-4 text-gray-300">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="font-medium text-slate-100">BINUS University</div>
                    <div className="text-sm text-gray-400">Aug 2019 - Sep 2023</div>
                  </div>
                  <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-400 text-sm md:text-base">
                  </ul>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <div className="font-medium text-slate-100">Hacktiv8 Indonesia</div>
                    <div className="text-sm text-gray-400">Jun 2024 - Oct 2024</div>
                  </div>
                  <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-400 text-sm md:text-base">
                  </ul>
                </div>
              </div>
            </div>
        </div>
    )
}