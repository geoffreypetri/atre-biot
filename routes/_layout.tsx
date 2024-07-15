import { PageProps } from "$fresh/server.ts";

export default function Layout({ Component, state }: PageProps) {
  // do something with state here
  return (
    <div class="layout grid">
        <header class="area rounded sq-s">
            <a href="/">
                <img src="/atre-taichi-logo.svg" />
                <h1>Académie&nbsp;de&nbsp;Taichi Arts&nbsp;Energétiques</h1>
            </a>
        </header>
        <nav class="area rounded sq-s">
            <ul>
            <li><a href="/ecole">Notre école</a></li>
            <li><a href="/taichi">Taichi</a></li>
            <li><a href="/sante">Sport Santé</a></li>
            <li><a href="/infos">Renseignements</a></li>
            </ul>
        </nav>
        <mark class="area rounded cs-xl">
            <p>Venez&nbsp;essayer un cours&nbsp;d'essai&nbsp;gratuit avec&nbsp;nous&nbsp;!</p>
        </mark>
        <Component />
      <figure id="taichi" class="area rounded rs-s">
        <img src="/taichi.png" alt="Taichi" class="rounded contain" />
      </figure>
      <figure id="yinyang" class="area rounded sq-xs">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-40 -40 80 80">
          <circle r="39"/>
          <path fill="#fff" d="M0,38a38,38 0 0 1 0,-76a19,19 0 0 1 0,38a19,19 0 0 0 0,38"/>
          <circle r="5" cy="19" fill="#fff"/>
          <circle r="5" cy="-19"/>
        </svg>
      </figure>
      <section id="contact" class="area rounded cs-m rs-s">
        <h4>Jean-Marc Guibilato</h4>
        <ul>
          <li>Professeur diplômé d'Etat</li>
          <li><a href="tel:0614608134">06 14 60 81 34</a></li>
          <li><a href="mailto:academietaichi@orange.fr">academietaichi@orange.fr</a></li>
        </ul>
      </section>
      <figure id="map" class="area rounded sq-m">
        <a href="https://www.google.com/maps/place/Complexe+Sportif+Pierre+Operto/@43.6277299,7.097305,17z/data=!3m1!4b1!4m6!3m5!1s0x12cdd4b62399d627:0xcb72465e6540bb8a!8m2!3d43.6277299!4d7.0998799!16s%2Fg%2F11c44dkpdc?entry=ttu">
          <img class="rounded contain" src="Salle Paul Gilardi-map.png" alt="Complexe Sportif Pierre Operto 06410 Biot" />
          <figcaption>
            Salle Paul Gilardi, Biot
          </figcaption>
        </a>
      </figure>
        <figure id="biot" class="area rounded cs-s">
            <a href="">
            <img class="rounded contain" src="/2022_Logo_320_50_WP-1.png" alt="Logo ville Biot" />
            </a>
        </figure>
        <footer class="area rounded cs-max">
            <ul class="list-inline">
                <li>ATRE Biot Association loi 1901</li>
                <li>RNA W061009085</li>
                <li>Siret 829 457 241 00018</li>
                <li>
                    <a href="https://github.com/geoffreypetri/atre-biot">
                        <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 16 16" width="20" aria-hidden="true" class="d-block"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                    </a>
                </li>
            </ul>
        </footer>
    </div>
  );
}