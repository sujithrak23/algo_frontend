import React from 'react'

const AboutPage = () => {
  return (
    <div className='layout-container__wrapper'>
      <h1>About US</h1>
      <hr/>
      <p>
          A 404 HTTP status code may negatively impact your site’s SEO performance. 
          Search engines won’t index pages that return a 404 error. 
          And any backlinks pointing to it will no longer give link value to the page. 
          If the site returns an error by mistake, fix it immediately. 
          Especially if it’s an important page in terms of traffic, ranking, ecommerce value, etc. 
          The best practice is to create a 301 redirect to a similar page that serves the same intent. 
          However, if you don’t have a relevant page to redirect users to, you can create a custom 404 page. 
          Custom 404 pages help visitors find what they’re looking for and encourage them to explore your site.
      </p>
    </div>
  )
}
export default AboutPage;