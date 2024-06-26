import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <>
      <main>
      </main>
      <yinyang>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-40 -40 80 80">
          <circle r="39"/>
          <path fill="#fff" d="M0,38a38,38 0 0 1 0,-76a19,19 0 0 1 0,38a19,19 0 0 0 0,38"/>
          <circle r="5" cy="19" fill="#fff"/>
          <circle r="5" cy="-19"/>
      </svg>
      </yinyang>
      <map>
        <a href="https://www.google.com/maps/place/Complexe+Sportif+Pierre+Operto/@43.6277299,7.097305,17z/data=!3m1!4b1!4m6!3m5!1s0x12cdd4b62399d627:0xcb72465e6540bb8a!8m2!3d43.6277299!4d7.0998799!16s%2Fg%2F11c44dkpdc?entry=ttu">
        <span>Complexe Sportif Pierre Operto<br/>
        Salle Paul Gilardi<br/>
        Chemin des Combes 06410 Biot</span></a>
      </map>
      <touch>
        <ul>
          <li>Jean-Marc Guibilato</li>
          <li><a href="tel:0614608134">06 14 60 81 34</a></li>
          <li><a href="mailto:academietaichi@orange.fr">academietaichi@orange.fr</a></li>
        </ul>
      </touch>
      <biot>
        <img src="/2022_Logo_320_50_WP-1.png" />
      </biot>
      {/* 
      <infos>
        <ul>
          <li>Mardi 19h &ndash; 20h</li>
          <li>Tarif à l'année : 220 €</li>
        </ul>
      </infos>
      <contact>
        <ul>
          <li>Jean-Marc Guibilato</li>
          <li>06 14 60 81 34</li>
          <li>academietaichi@orange.fr</li>
        </ul>
      </contact> */}
    </>
  );
}
