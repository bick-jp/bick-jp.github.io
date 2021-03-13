import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"

export default function Home() {
  return (
    <Layout>
      <main className="wrapper">
        <div className="profile">
        <Image className="portrait" filename="KeitaOhshiro.jpg" alt="Black and white photo of Keita Ohshiro" />
        <h1 className="portrait-title">Keita Ohshiro</h1>
        <p>M.S. in Integrated Digital Media</p>
        <p>New York University</p>
        </div>
        
        <h2>Biography</h2>
        <p>I am a master student in Integrated Digital Media at New York University.</p>

        <h2>Interests</h2>
        <ul>
          <li>Accessibility</li>
          <li>Human-Computer Interaction</li>
          <li>User Experience Design</li>
          <li>Online Education</li>
          <li>Any programmable matters</li>
        </ul>

        <h2>Education</h2>
        <ul>
          <li>Pursuing M.S. in Integrated Digital Media at New York Univrsity, U.S.</li>
          <li>B.S. in Computer Science and Mathematics at Temple University, U.S.</li>
          <li>B.A. in Liberal Arts at International Christian University, Japan.</li>
        </ul>

        <h2>Publications</h2>
        <ul>
          <li>(processing) Making the Elusive More Tangible: Remote tools and techniques for teaching web development to screen reader users (2021)</li>
          <li><a href="https://www.microsoft.com/en-us/research/event/accessible-cs-education-fall-workshop/#!breakout-group-reports">Accessible Computing Education in Colleges and Universities [White paper] (2021)</a></li>
          <li><a href="https://dl.acm.org/doi/abs/10.1145/3334480.3383155">Solar-Powered Server: Designing for a More Energy Positive Internet (2020)</a></li>
          <li><a href="https://ieeexplore.ieee.org/document/8622457">Implementing Grover’s Algorithm on the IBM Quantum Computers (2018)</a></li>
          <li><a href="https://www.j-hsk.co.jp/judotherapist/handbook.html">Judotherapist Patient Handbook (2016)</a></li>
        </ul>
      </main>
    </Layout>
  )
}
