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
                    <div className="text-sm">Jakarta, Indonesia</div>
                  <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-400 text-sm md:text-base">
                  <li>Develop and enhance internal tools and automation to support workflows and data extraction.</li>
                  <li>Design, develop, and maintain APIs that deliver market data, including stock and forex prices, CFD index, and technical/fundamental analysis.</li>
                  <li>Build and manage LLM-based chatbots using low-code platforms.</li>
                  <li>Manage and update the company website using WordPress.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <div className="font-medium text-slate-100">DevOps Intern — PT Phintraco Consulting</div>
                    <div className="text-sm text-gray-400">Feb 2022 - Feb 2023</div>
                  </div>
                    <div className="text-sm">Jakarta, Indonesia</div>
                  <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-400 text-sm md:text-base">
                    <li>Worked for the MyTelkomsel mobile application as part of the Operation & Support Team.</li>
                    <li>Assisted with deploying APIs & services, building the app, and supporting feature testing.</li>
                    <li>Supported application system testing, including FUT, UAT, and Non-Functional Testing.</li>
                    <li>{"Monitored the application's performance."}</li>
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
                    <div className="text-sm">Jakarta, Indonesia</div>
                  <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-400 text-sm md:text-base">
                  </ul>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <div className="font-medium text-slate-100">Hacktiv8 Indonesia</div>
                    <div className="text-sm text-gray-400">Jun 2024 - Oct 2024</div>
                  </div>
                    <div className="text-sm">Jakarta, Indonesia</div>
                  <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-400 text-sm md:text-base">
                  </ul>
                </div>
              </div>
            </div>
        </div>
    )
}