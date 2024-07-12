import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <>
       <mark class="rounded">
        <p>Venez&nbsp;essayer un cours&nbsp;d'essai&nbsp;gratuit avec&nbsp;nous&nbsp;!</p>
      </mark>
      <figure id="map" class="rounded">
        <a href="https://www.google.com/maps/place/Complexe+Sportif+Pierre+Operto/@43.6277299,7.097305,17z/data=!3m1!4b1!4m6!3m5!1s0x12cdd4b62399d627:0xcb72465e6540bb8a!8m2!3d43.6277299!4d7.0998799!16s%2Fg%2F11c44dkpdc?entry=ttu">
          <img class="rounded" src="Salle Paul Gilardi-map.png" alt="Complexe Sportif Pierre Operto 06410 Biot" />
          <figcaption>
            Salle Paul Gilardi, Biot
          </figcaption>
        </a>
      </figure>

      <section id="contact" class="bg-white rounded">
        <h4>Jean-Marc Guibilato</h4>
        <ul>
          <li>Professeur diplômé d'Etat</li>
          <li><a href="tel:0614608134">06 14 60 81 34</a></li>
          <li><a href="mailto:academietaichi@orange.fr">academietaichi@orange.fr</a></li>
        </ul>
      </section>

      <figure id="photo">
        <img class="rounded" src="/3f2b5043-315d-4b2e-a265-59d791d95c09.jpg" alt="Photo" />
        <figcaption></figcaption>
      </figure>
      <figure id="taichi" class="bg-white rounded">
        <img src="/taichi.png" alt="Taichi" />
      </figure>
      <figure id="yinyang" class="bg-white rounded">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-40 -40 80 80">
          <circle r="39"/>
          <path fill="#fff" d="M0,38a38,38 0 0 1 0,-76a19,19 0 0 1 0,38a19,19 0 0 0 0,38"/>
          <circle r="5" cy="19" fill="#fff"/>
          <circle r="5" cy="-19"/>
        </svg>
      </figure>
      
      <figure id="biot">
        <a href="">
          <img src="/2022_Logo_320_50_WP-1.png" alt="Logo ville Biot" />
        </a>
      </figure>
    </>
  );
}
