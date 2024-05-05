import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';

export default function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
      <footer>
        <div>
          <h1>I am footer</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perferendis exercitationem officiis illo tenetur? Praesentium
            laudantium magni quam qui mollitia quasi placeat voluptatum suscipit
            quisquam exercitationem maxime iusto sequi autem, repudiandae
            voluptas inventore nesciunt esse, laborum ratione ipsum! Iure,
            quibusdam velit! Voluptate molestiae dicta et ratione odit ipsum
            magni repudiandae consectetur? Officiis aut consectetur officia
            molestiae quo magnam corrupti odio nisi ipsum itaque sit nihil ad
            doloribus non blanditiis quod, placeat vero cupiditate ullam. Neque,
            consequuntur. Nulla at quis pariatur ipsam commodi asperiores.
            Voluptatum incidunt voluptate quas omnis ratione repellendus odit.
            Error expedita, labore eum voluptatibus quidem deleniti blanditiis.
            Accusamus, excepturi?
          </p>
        </div>
      </footer>
    </>
  );
}
