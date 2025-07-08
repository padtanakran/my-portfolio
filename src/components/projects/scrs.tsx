function scrs() {
  return (
    <div>
      <main className="max-w-4xl mx-auto p-6 space-y-8">
        {/* ที่มาที่ไป / วัตถุประสงค์ */}
        <section>
          <h1 className="text-3xl font-bold mb-2">
            Substitution Class Request System
          </h1>
          <p className=" italic">
            Role: Full Stack Developer (Pair Project, Year 4)
          </p>
          <p className="">
            A web-based system for submitting and tracking class substitution
            requests. Designed for usability and modern UI.
          </p>
        </section>

        {/* ปัญหาและการแก้ไข */}
        <section className=" p-4  border ">
          <h2 className="text-2xl font-semibold mb-2 ">Problem Solved</h2>
          <p className="">
            Manual substitution class requests were inefficient and error-prone.
            This system streamlines the process by allowing teachers to submit,
            track, and approve requests digitally, reducing paperwork and
            approval delays.
          </p>
        </section>

        {/* เครื่องมือที่ใช้ */}
        <section>
          <h2 className="text-2xl font-semibold mb-3 ">Tech Stack</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="p-4 border ">
              <h3 className="font-medium mb-1">Frontend</h3>
              <ul className="list-disc list-inside ">
                <li>Angular</li>
              </ul>
            </div>
            <div className="p-4 border ">
              <h3 className="font-medium mb-1">Backend</h3>
              <ul className="list-disc list-inside ">
                <li>Node.js</li>
                <li>Express.js</li>
              </ul>
            </div>
            <div className="p-4 border ">
              <h3 className="font-medium mb-1">Database</h3>
              <ul className="list-disc list-inside ">
                <li>MySQL</li>
              </ul>
            </div>
            <div className="p-4 border ">
              <h3 className="font-medium mb-1">Deployment</h3>
              <ul className="list-disc list-inside ">
                <li>IIS</li>
              </ul>
            </div>
          </div>
        </section>

        {/* รูปตัวอย่าง */}
        <section>
          <h2 className="text-2xl font-semibold mb-3 ">Project Screenshots</h2>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/screenshot1.png"
              alt="Screenshot 1"
              className=" border  shadow-sm"
            />
            <img
              src="/images/screenshot2.png"
              alt="Screenshot 2"
              className=" border  shadow-sm"
            />
          </div>
        </section>

        {/* Demo */}
        <section>
          <h2 className="text-2xl font-semibold mb-3 ">Live Demo</h2>
          <div className="  ">
            <iframe
              src="https://your-demo-url.com"
              className="w-full h-64  border"
              title="Project Demo"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default scrs;
