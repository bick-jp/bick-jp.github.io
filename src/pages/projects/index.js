import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import Image from "../../components/image"

export default () => (
  <Layout>
    <main className="wrapper">
      <h1>Projects <br /> (Sorry It's Under Construction)</h1>

      <h2>Accessibility</h2>

      <div className="project-container">
        <div className="project-content">
          <h3>Math Graph Sonification</h3>
          <p>Undergoing Master's thesis research exploring how to make math graphs more accessible to people who are blind using sonification.</p>
        </div>
        {/*
        <Image className="project-thumbnail" filename="KeitaOhshiro.jpg" alt="Black and white photo of Keita Ohshiro" />
        */}
      </div>
      
      <div className="project-container">
        <div className="project-content">
          <h3>Redesigning Khan Academy</h3>
          <p>Designing online education more accessible for people who use screen readers. It is an individual project in User Experience Design class taught by Regine Gilbert at NYU. For more information, see <Link to={"/projects/redesigning-khan-academy/"}>Redesigning Khan Academy</Link>.
          </p>
        </div>
      </div>

      <div className="project-container">
        <div className="project-content">
          <h3>Sensory Resources Guide for Museums</h3>
          <p>Designing museum experience more accessible for visitors sensitive to sensory overstimulation in collaboration with museums, historic sites, and disability advocates. It is a group project in Museum Accessibility class taught by Amy Hurst and Anita Perr at NYU. For more information, visit <a href="https://wp.nyu.edu/sensory_resources_guide_for_museums/" target="_blank">Sensory Resources Guide for Museums website (opens in a new tab)</a>.</p>
        </div>
      </div>


      <h2>User Experience</h2>

      <div className="project-container">
        <div className="project-content">
          <h3>Redesigning Visual Studio Code</h3>
          <p>Designing onboarding tutorial to introduce Visual Studio Code for beginners in collaboration with MicroSoft Corporation. It is a group project in User Experience Design class taught by Regine Gilbert at NYU.
          <br />
          [Details will be uploaded soon]
          </p>
        </div>
      </div>


      <h2>Physical Computing</h2>

      <div className="project-container">
        <div className="project-content">
          <h3>Bass Hug</h3>
          <p>A cushion device that vibrates to the bass sound of the music you are listening to and allows you to feel the music by holding it. It is an individual project in Living with Robots class taught by Kathleen McDermott at NYU.
          <br />
          [Details will be uploaded soon]
          </p>
        </div>
      </div>

      <div className="project-container">
        <div className="project-content">
          <h3>256 Pixes Mirror</h3>
          <p>A panel that reflects the shape of person captured by a camera using the rotation of 256 servo motors.
          <br />
          [Details will be uploaded soon]
          </p>
        </div>
      </div>

      <div className="project-container">
        <div className="project-content">
          <h3>Knock Knock</h3>
          <p>A wooden box with a stick that mimics rhythm when knocked.
          <br />
          [Details will be uploaded soon]
          </p>
        </div>
      </div>


      <h2>iOS App Development</h2>

      <div className="project-container">
        <div className="project-content">
          <h3>Kumano Daigaku</h3>
          <p>A walking tour iOS app for visiting famous places in the novels of Kenji Nakagami in collaboration with SCIVONE, LLC and Makoto Ichikawa at Waseda University.</p>
        </div>
      </div>

      <div className="project-container">
        <div className="project-content">
          <h3>BotsNew Player</h3>
          <p>A 360-degree video player iOS app in collaboration with Kadinche Corporation and MegaHouse Corporation. For more information, visit <a href="https://botsnew.com/" target="_blank">BotsNew product page (opens in a new tab, Japanese only)</a>.</p>
        </div>
      </div>

      <div className="project-container">
        <div className="project-content">
          <h3>Speed Pitch</h3>
          <p>An audio player iOS app with the feature to change playback speed and pitch. It has achieved over 100,000 downloads. For more information, visit <a href="https://apps.apple.com/us/app/speedpitch-audio-player-for-changing-songs-speed-pitch/id939991904" target="_blank">Speed Pitch on the App Store (opens in a new tab)</a>.</p>
        </div>
      </div>

      <div className="project-container">
        <div className="project-content">
          <h3>Motion Video</h3>
          <p>A video player iOS app which has speed change and frame skip features. For more information, visit <a href="https://apps.apple.com/us/app/motionvideo-video-player-slow-motion-frame-skip-function/id1079269774" target="_blank">Motion Video on the App Store (opens in a new tab)</a>.</p>
        </div>
      </div>


      <h2>Art, Music, Fun, etc.</h2>

      <div className="project-container">
        <div className="project-content">
          <h3>U.S. House Election Results 2018?</h3>
          <p>The U.S. map showing the result of 2018 United States House of Representatives elections with red and blue is lightned by LPS lamp. The LPS lamp turns the red and blue into a monochromatic yellow color, so you cannot really tell the result on the map.
          <br />
          [Details will be uploaded soon]
          </p>
        </div>
      </div>

      <div className="project-container">
        <div className="project-content">
          <h3>Water Drops</h3>
          <p>Listen to the sound of water drops falling to a metal bowl from the ceiling. Metal was cut, grained, welded, and painted all by hand.
          <br />
          [Details will be uploaded soon]
          </p>
        </div>
      </div>

      <div className="project-container">
        <div className="project-content">
          <h3>Cigarette Butt</h3>
          <p>A line drawing and an installation of cigarette butts. I walked 2.649km and picked up 618 littered cigarette butts in Tokyo. On average, there was one cigarette butt for every 2.07 square meters. The line drawn with charcoal is a trace of my walking route.
          <br />
          [Details will be uploaded soon]
          </p>
        </div>
      </div>

      <div className="project-container">
        <div className="project-content">
          <h3>Tria Dynamika Kora</h3>
          <p>A demo album by Tria Dynamika Kora, a hardcore metal band in Tokyo, Japan around 2009. So I occasionally play the drums for fun. For more information, visit <a href="https://soundcloud.com/search?q=tria%20dynamica%20kora" target="_blank">Tria Dynamika Kora on the Sound Cloud</a>.</p>
        </div>
      </div>

    </main>
  </Layout>
)