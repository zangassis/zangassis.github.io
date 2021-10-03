import Head from 'next/head'
import profile from '../config/profile';

export default function Home() {
  return (
    <div>
      <Head>
        <title>{profile.name} - {profile.title}</title>
        <link rel="icon" href={`https://via.placeholder.com/64/${profile.color}/FFFFFF?text=${profile.name.substring(0, 1)}`} />
        <meta name="author" content={profile.name} />
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="@ervandracom" key="twhandle" />
        <meta property="og:image" content={profile.cover !== '' ? profile.cover : `https://via.placeholder.com/1200x628/${profile.color}/FFFFFF?text=Resume:+${profile.name}+-+${profile.title}`} key="ogimage" />
        <meta property="og:site_name" content={`${profile.name} - ${profile.title}`} key="ogsitename" />
        <meta property="og:title" content={`Resume: ${profile.name} - ${profile.title}`} key="ogtitle" />
        <meta property="og:description" content={profile.about} key="ogdesc" />
      </Head>
      <div id="app-container" className="cv border-top border-bottom border-5 border-primary-style">

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10">
              <div className="py-3 py-md-5">

                <div className="" id="profile">
                  <div className="row align-items-center">
                    <div className="col-12 col-md-12 col-lg-4">
                      <div className="cv-photo text-center">
                        <img src={profile.photo} alt={profile.name} className="mb-3 img-thumbnail rounded-circle shadow" />
                      </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-8">
                      <div className="text-center text-lg-start">
                        <h1 className="text-uppercase text-primary-style h3 mb-0 fw-bold">{profile.name}</h1>
                        <h2 className="h5 mb-3">{profile.title}</h2>
                        <a href={`mailto:${profile.email}`} className="mb-3 btn btn-success shadow">Contact Me</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="content" className="py-1 py-md-3">
                  <div className="row">
                    <div className="col-12 col-md-12 col-lg-8 order-lg-2">
                      <div className="widget py-1 py-md-3">
                        <h2 className="h5 text-uppercase fw-bold text-primary-style">About</h2>
                        <p>{profile.about}</p>
                      </div>
                      <hr className="d-none d-md-block d-lg-block" />
                      <div className="widget py-1 py-md-3">
                        <h2 className="h5 text-uppercase fw-bold text-primary-style">Work Experiences</h2>
                        {profile.experiences.length > 0 && profile.experiences.map((exp, idx) => (
                          <div className="experience mb-3 mb-md-4" key={idx}>
                            <h4 className="fw-bold h6 text-muted">{exp.title}</h4>
                            <p>{exp.company} | {exp.year}</p>
                            {exp.summary.length > 0 && (
                              <ul>
                                {exp.summary.map((sum, idx) => (
                                  <li key={idx}>{sum}</li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                      <hr className="d-none d-md-block d-lg-block" />
                      <div className="widget py-1 py-md-3 mb-3">
                        <h2 className="h5 text-uppercase fw-bold text-primary-style">Education</h2>
                        {profile.education.length > 0 && profile.education.map((edu, idx) => (
                          <div className="education" key={idx}>
                            <h4 className="fw-bold h6 text-secondary">{edu.title}</h4>
                            <p>{edu.school} | {edu.year}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-4 order-lg-1 ">
                      <div className="widget py-1 py-md-3">
                        <h3 className="h6 text-uppercase fw-bold text-primary-style">Contact</h3>
                        <ul>
                          <li>Email: <a href={`mailto:${profile.email}`} target="_blank" rel="noopener noreferrer">{profile.email}</a></li>
                          <li>Phone: <a href={`tel:${profile.phone}`} target="_blank" rel="noopener noreferrer">{profile.phone}</a></li>
                        </ul>
                      </div>
                      <div className="widget py-1 py-md-3">
                        <h3 className="h6 text-uppercase fw-bold text-primary-style">Social</h3>
                        {profile.social.length > 0 && (
                          <ul>
                            {profile.social.map((sosmed, idx) => (
                              <li key={idx}>
                                <a href={sosmed} target="_blank" rel="noopener noreferrer">{sosmed.replace('https://', '')}</a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                      <div className="widget py-1 py-md-3">
                        <h3 className="h6 text-uppercase fw-bold text-primary-style">Professional Skills</h3>
                        {profile.professionalSkills.length > 0 && (
                          <ul>
                            {profile.professionalSkills.map((skill, idx) => (
                              <li key={idx}>{skill}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                      <div className="widget py-1 py-md-3">
                        <h3 className="h6 text-uppercase fw-bold text-primary-style">Personal Skills</h3>
                        {profile.personalSkills.length > 0 && (
                          <ul>
                            {profile.personalSkills.map((skill, idx) => (
                              <li key={idx}>{skill}</li>
                            ))}
                          </ul>
                        )}
                      </div>

                    </div>

                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </div >
  )
}
