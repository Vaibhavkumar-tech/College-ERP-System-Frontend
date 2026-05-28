import React from 'react'

const ProfessorMain = () => {
  return (
    <div>
      <div className="bg-gray-100 h-30 mt-10 w-300 ml-40 flex items-center justify-center flex-col gap-2">
        <h2 className="font-bold text-lg">My Core Skills</h2>
        <h4 className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum quidem corporis modi officia consequuntur impedit accusamus, molestiae ipsam incidunt officiis!</h4>
      </div>
      <div className="bg-gray-100 mt-7 w-300 ml-40 flex items-center justify-center flex-col gap-2">
        <h2 className="font-bold text-lg mt-2">Professional Bio</h2>
        <h4 className="text-sm">Dr. Rajesh Kumar is a Professor of Electronics and Communication Engineering with over 18 years of teaching and research experience.He earned his Ph.D. in VLSI Design and has published numerous papers in reputed national and international journals.His research interests include VLSI systems, embedded systems, digital signal processing, and IoT technologies.Throughout his career, he has guided undergraduate and postgraduate students on various innovative projects.He actively collaborates with industry partners to promote practical learning and technological advancement.Dr. Kumar has received several awards for excellence in teaching and research contributions.He is passionate about mentoring students and fostering a culture of curiosity and innovation.His dedication to education continues to inspire the next generation of engineers and researchers.</h4>
      </div>
      <div className="bg-gray-100 mt-7 w-300 ml-40 flex items-center justify-center flex-col gap-2">
        <h2 className="font-bold text-lg mt-2">My Badges</h2>
        <div className="flex flex-row gap-2">
            <img className="w-16 h-16" src="https://img.icons8.com/?size=100&id=6PEs2EypZuRA&format=png&color=000000"/>
            <img className="w-16 h-16" src="https://img.icons8.com/?size=100&id=jTFi7oAJv6cU&format=png&color=000000"/>
            <img className="w-16 h-16" src="https://img.icons8.com/?size=100&id=dr5BUDyxz9aM&format=png&color=000000"/>
        </div>
      </div>
    </div>
  )
}

export default ProfessorMain
