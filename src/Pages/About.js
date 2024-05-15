import { Link, Route } from 'react-router-dom';
import diamondPic from '../Assets/Diamond.jpeg';

export default function About() {
  return (
    <main>
      <section style={{ width: '90%', margin: 'auto' }}>
        <h3>About: </h3>
        <img src={diamondPic} alt="" width={150} />
        <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam id
          veritatis ad numquam repudiandae. Dolor voluptatibus nihil minima
          fugit, quidem enim quisquam eius ipsam eligendi dolores aspernatur!
          Necessitatibus, voluptates quod! Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Sint expedita reprehenderit doloremque
          quod dolores sapiente consequatur nostrum voluptatum at officiis ab
          omnis consequuntur aliquam eum pariatur natus dicta eaque, velit qui.
          Adipisci vitae distinctio possimus incidunt dolorem expedita quis quas
          animi est doloremque, dicta totam esse? Ut quibusdam fugiat impedit
          tenetur voluptatibus iusto quo consectetur error neque, dolor, sit
          dignissimos ad excepturi rem explicabo, quis saepe? Voluptatum aut,
          similique reprehenderit quasi aliquam, quaerat ipsum, qui eos alias
          architecto vel rem deserunt maxime velit quia animi neque debitis quas
          totam hic nihil officiis harum sed! Nesciunt aliquam ratione eveniet
          quod minima.
        </span>

        <Link
          style={{ marginTop: '15px', display: 'block' }}
          to="/about/address"
        >
          Click here for address
        </Link>
        <Route path="/about/address">
          <address>Bidar, Karnataka, India</address>
        </Route>

        <h3 style={{ marginTop: '15px' }}>Motive: </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aperiam
          minima molestiae quae quia ratione molestias beatae cumque rerum
          adipisci. Quasi, repellendus laudantium temporibus nobis repudiandae
          illum enim placeat! Maxime!
        </p>
      </section>
    </main>
  );
}
