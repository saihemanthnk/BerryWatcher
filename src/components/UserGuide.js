import React from 'react'
import "./UserGuide.css"


function UserGuide() {
  return (
   <>

<div className="user-guide">
      <h2>User Guide</h2>

      <section>
        <h3>Registration and Login:</h3>
        <p>
          To access the full features of our application, you need to register an account. If you already have an account, simply log in.
        </p>
      </section>

      <section>
        <h3>Upload Image:</h3>
        <p>
          After logging in, navigate to the "Upload Image" section on the navbar. Here, you can upload your images to use various features.
        </p>
      </section>

      <section>
        <h3>Disease Library:</h3>
        <p>
          Click on the "Disease Library" section on the navbar to view a list of diseases available on our website. Each disease has a "View" option for detailed information.
        </p>
      </section>

      <section>
        <h3>Disease Detail:</h3>
        <p>
          In the Disease Library, click on the "View" option of a specific disease to get detailed information about it.
        </p>
      </section>

      <section>
        <h3>Support:</h3>
        <p>
          If you have any questions or concerns, visit the "Support" page. You can drop your messages and concerns, and our support team will assist you.
        </p>
      </section>

      <section>
        <h3>About Us:</h3>
        <p>
          Learn more about us by visiting the "About" section on the navbar. Get to know our mission, values, and the team behind the application.
        </p>
      </section>

    </div>
   
   
   </>
  )
}

export default UserGuide
