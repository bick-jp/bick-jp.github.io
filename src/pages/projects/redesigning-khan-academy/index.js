import React from "react"
import { Link } from "gatsby"
import Layout from "../../../components/layout"
import Image from "../../../components/image"

export default function Home() {
  return (
    <Layout>
      <main className="wrapper">
        <h1>Redesigning Khan Academy (under construction)</h1>
        <h2>Overview</h2>
        <p>This project is to redesign a website of Khan Academy, a non-profit educational organization offering a variety of free online courses, to make it accessible to people who are blind and use screen readers. It is an individual project in User Experience Design class taught by Regine Gilbert at NYU in 2020 Fall semester.</p>

        <h2>Problem</h2>
        <p>People who are blind and use screen readers have trouble with navigating the Khan Academy's website and understanding its educational contents.</p>

        <h2>Solution</h2>
        <p>Redesigning the Khan Academy's website with a focus on navigation and educational contents. Due to limitations of resources and time, I focused on the first two lectures of the Intro to HTML course on the Khan Academy, instead of redesigning the whole website.</p>

        <h2>Deliverable</h2>
        <p>I published two web pages, <a href="https://bick-jp.github.io/ux-final-project/01-welcome-to-the-web.html">Welcom to the web</a> and <a href="https://bick-jp.github.io/ux-final-project/02-html-basics.html">HTML basics</a>, aiming to improve the screen-reader accessibility. The followings are some of my major design decisions.</p>

        <h3>Features</h3>
        <ul>
          <li>Added Report Accessibility button: This is a must-have to hear user feedback.</li>
          <li>Stop video autoplay: The video autoplay is a bad practice for accessibility according to <a href="https://www.w3.org/TR/WCAG21/#audio-control">Success Criterion 1.4.2 (Audio Control) on WCAG 2.1</a>.</li>
        </ul>

        <h3>Landmarks</h3>
        <p>Added three sub-regions to the Content Information - (1) Lecture contents region, (2) Discussion forums regison, and (3) Report accessibility region. This serves two purposes. First, separating the lecture contents from the discussion forum will improve usability because they serves different purposes. Second, users will be able to notice the report accessibility feature easily.</p>

        <h3>Headings</h3>
        <ul>
          <li>Removed all the headings that are not relevant to the lecture contents, such as headings related to the landmarks. This is to simplify headings so that users can focus solely on the lecture contents.</li>
          <li>Added sub-headings to the lecture contents. Before my redesign, the only heading relevant to the lecture contents was for the lecture title and it was impossible to get a detailed structure of the lecture content.</li>
        </ul>


        <h2>Design Process</h2>
        <h3>Persona</h3>
        <p>Erik is 18 years old and has been blind since birth. He just graduated from high school and is enjoying a break before starting college. He likes web browsing with his Mac laptop and VoiceOver and, while web surfing, he accidentaly found the Khan Academy website. So, he decided to use the break to study web development, something he had always wanted to do but never had the opportunity.</p>

        <h3>Storyboard</h3>
        <Image className="" filename="khan-story1.jpg" alt="Handwritten storyboard page 1 out of 4: Erik who is blind finds Khan Academy and is excited to learn web development." />
        <Image className="" filename="khan-story2.jpg" alt="Handwritten storyboard page 2 out of 4: Erik starts to realize the content of Khan Academy is not accessible with screen readers." />
        <Image className="" filename="khan-story3.jpg" alt="Handwritten storyboard page 3 out of 4: After trying a few contents, Erik gives up using Khan Academy because it is not accessible." />
        <Image className="" filename="khan-story4.jpg" alt="Handwritten storyboard page 4 out of 4: Erik is disappointed." />

        <h3>Journey Map</h3>
        <Image className="" filename="khan-journey-map.png" alt="Journy map consists of 4 phases - 1. Befor arriving at Khan Aademy, 2. Navigation to the course, 3. Learning the contents, and 4. Leave. It explains the process that a user goes through with 5 components - 1 User actions, 2. User's feeling, 3. Emotional Curve, 4. Opportunities, and 5. Ideas" />

        <h3>Secondary Research</h3>
        <p>TBA</p>

        <h3>Primary Research</h3>
        <p>TBA</p>

        <h3>Competitive Analysis</h3>
        <p>TBA</p>

        <h3>Feature Prioritazaion</h3>
        <Image className="" filename="khan-feature-1.jpg" alt="A total 20 ideas of features are written on the digital stickey notes. They are categorized into 3 parts, Now, Next, and Later, based on the prorities." />

        <h3>Wireframe</h3>
        <Image className="" filename="khan-wireframe.jpg" alt="Redesign idea of Khan Academy's website with annotations." />

        <h3>User Testing</h3>
        <p>TBA</p>

        <h3>Limitation and Future Work</h3>
        <p>TBA</p>

      </main>
    </Layout>
  )
}