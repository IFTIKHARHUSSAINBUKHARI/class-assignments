import React from "react";
import  Link  from "next/link";

const ContactPage = () => {
  return (
    <div>
      <><br />
      <h2><Link href={"/"}>Click here to go to the Home Page</Link></h2><br /><br /><br />
        <h1>Contact Information</h1><br /><br /><br />
          <ul>
            <strong>
              <li>Phone: 1020303404</li><br />
              <li>Address: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sint iure nisi, quam eligendi laudantium laborum quas laboriosam quasi numquam corporis minus expedita dolorem culpa dicta incidunt similique reiciendis libero.</li><br />
              <li>Email: abc@xyz.com</li><br />
              <li>Linkedin: Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias illum harum voluptas debitis esse asperiores earum ipsum id. Nesciunt possimus suscipit.</li><br />
            </strong>
          </ul><br /><br />
      </>
    </div>
  );
};

export default ContactPage;
