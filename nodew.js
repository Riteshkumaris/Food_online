const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Online food website</title>
      <link rel="stylesheet" href="css/style.css">
      <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans&family=Heebo:wght@200;300;400&family=Inter:wght@300&family=Roboto:ital,wght@1,300&family=Source+Sans+Pro:wght@200&family=Urbanist:wght@200&display=swap" rel="stylesheet">
  </head>
  <body>
      <nav id="navbar">
          <div id="logo">
              <img src="logo.jpg" alt="food logo">
  
  
          </div>
          <ul>
              <li class="item"><a href="#home">Home</a></li>
              <li class="item"><a href="#Services"> Service us</a></li>
              <li class="item"><a href="#client-section"> Our Client</a></li>
              <li class="item"><a href="#Contact">Contact us</a></li>
          
          </ul>
      </nav>
      <section id="home">
          <h1 class="h-primary">welcome to my world</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, dicta! Explicabo eaque tenetur excepturi suscipit, accusamus quam odio aperiam sequi, saepe, voluptatem numquam doloremque!
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quia minima voluptatum inventore, velit nisi in et est magnam impedit tenetur tempora dolore.</p>
          <button class="btn">Order now</button>
  
      </section>
      <section class="Service-contanier">
          <h1 class="h-primary center">
              Our Service
          </h1>
          <div id="Services">
              <div class="box">
                 <img src="img1.jpg" alt="">
                 <h2 class="h-secondary center">Food Ordering</h2>
                 <p class="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nemo at vero exercitationem sapiente rem possimus tempore, quia excepturi aliquid numquam assumenda, accusamus nostrum placeat maxime beatae iste odio recusandae? Fuga, fugiat repellendus. Similique?</p>
              </div>
              <div class="box">
                  <img src="img2.jpg" alt="">
                  <h2 class="h-secondary center">Food Ordering</h2>
                  <p class="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nemo at vero exercitationem sapiente rem possimus tempore, quia excepturi aliquid numquam assumenda, accusamus nostrum placeat maxime beatae iste odio recusandae? Fuga, fugiat repellendus. Similique?</p>
               </div>
               <div class="box">
                  <img src="img3.png" alt="">
                  <h2 class="h-secondary center">Food Ordering</h2>
                  <p class="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nemo at vero exercitationem sapiente rem possimus tempore, quia excepturi aliquid numquam assumenda, accusamus nostrum placeat maxime beatae iste odio recusandae? Fuga, fugiat repellendus. Similique?</p>
               </div>
          </div>
      </section>
      <section id="client-section">
          <h1 class="h-primary center"> 
              Our Clients
          </h1>
          <div id="clients">
              <div class="client-item">
                  <img src="img4 (2).png" alt="">
              </div>
              <div class="client-item">
                  <img src="img6.png" alt="">
              </div>
              <div class="client-item">
                  <img src="img5.jpg" alt="">
              </div>
              <div class="client-item">
                  <img src="img7.png" alt="">
              </div>
  
          </div>
      </section>
      <section id="Contact">
          <h1 class="h-primary center">Contact Us</h1>
          <div id="Contact-box">
              <form action="">
                  <div class="form-group">
                      <label for="name">Name: </label> 
                      <input type="text" name="name" id="name" placeholder="Enter your name">
                  </div>
                  <div class="form-group">
                      <label for="email">Email: </label> 
                      <input type="text" name="name" id="email" placeholder="Enter your Email">
                  </div>
                  <div class="form-group">
                      <label for="phone">Phone No: </label> 
                      <input type="text" name="name" id="phone" placeholder="Enter your Phone no">
                  </div>
                  <div class="form-group">
                      <label for="Message">Message: </label> 
                     <textarea name="Message" id="Message"  cols="20" rows="10"></textarea>
                  </div> 
  
              </form>
          </div> 
      </section>
      <footer>
          <div class="center">
              Copyright &copy;www.myonline .com All right are reserved!
          </div>
      </footer>
  </body>
  </html>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
