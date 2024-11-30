import { usePathname } from "next/navigation";

const ProductContent = () => {
  const pathname = usePathname();

  const content = {
    "credito-pessoal": (
      <>
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            CREDITO PERSONALE
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Il Credito Personale è una soluzione finanziaria che si stipula con
            un ente autorizzato per l&apos;acquisto di beni di consumo o altri
            prodotti. Il Credito Personale è destinato a scopi privati e non
            aziendali o istituzionali, risultando così l&apos;opzione più
            praticabile per i privati.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Spesso il Credito Personale viene concesso per l&apos;acquisto di
            beni o per la realizzazione di sogni.
          </p>
          <ul className="text-green-600 space-y-2 font-medium">
            <li>&gt; Da 10.000€ a 1.000.000€</li>
            <li>&gt; Termini fino a 10 anni</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            CREDITO CONSOLIDATO
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Il Credito Consolidato senza ipoteca è una soluzione che ti
            permetterà di riequilibrare il tuo bilancio familiare. Unendo i tuoi
            crediti in uno solo, potrai beneficiare di una nuova rata,
            significativamente più bassa rispetto al totale che stavi pagando
            per tutte le tue rate.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Il credito consolidato è sempre più comune in situazioni in cui il
            bilancio familiare è in difficoltà. Unendo i tuoi crediti, puoi
            anche prolungare il periodo di rimborso.
          </p>
          <ul className="text-green-600 space-y-2 font-medium">
            <li>&gt; Senza garanzie reali</li>
            <li>&gt; Importi fino a 5.000.000€</li>
            <li>&gt; Liquidità aggiuntiva se desiderata</li>
          </ul>
        </div>
      </>
    ),
    "credito-habitacao": (
      <>
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            CREDITO ABITAZIONE
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Il Credito Abitazione può essere destinato ai seguenti scopi:
          </p>
          <ul className="text-gray-600 space-y-2 mb-4">
            <li>Acquisto</li>
            <li>Lavori di ristrutturazione e acquisto</li>
            <li>Costruzione</li>
            <li>Lavori di ristrutturazione</li>
          </ul>
          <h3 className="text-lg font-bold text-gray-800">Vantaggi</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Finanziamento fino al 90% del valore minimo tra la valutazione e
            l&apos;acquisto, per l&apos;acquisto di abitazione principale, o 80%
            per altre finalità.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Durata massima di 40 anni, con l&apos;età dei richiedenti che non
            può superare i 75 anni alla fine del prestito.
          </p>
        </div>
      </>
    ),
    "credito-empresa": (
      <>
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            CREDITO IMPRESE/IMPRENDITORI
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Caetano Servizi offre diverse forme di Credito per le imprese, che
            permettono ai suoi clienti di ottenere liquidità aggiuntiva per far
            fronte a imprevisti o carenze di liquidità temporanea.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Presentiamo soluzioni di finanziamento per le necessità di tesoreria
            della vostra azienda, in base a durate, tassi, commissioni, ecc.
          </p>
          <h3 className="text-lg font-bold text-gray-800">
            Le soluzioni che offriamo:
          </h3>
          <ul className="text-gray-600 space-y-2 mb-4">
            <li>Conto Corrente Cauzionato</li>
            <li>Scoperto Autorizzato</li>
            <li>Conti con gestione di assegni postdatati</li>
            <li>Sconto su cambiali</li>
            <li>Sconto su effetti cambiari</li>
            <li>Prestiti a breve, medio o lungo termine</li>
          </ul>
          <h3 className="text-lg font-bold text-gray-800">Vantaggi</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Finanziamento fino al 90% del valore minimo tra la valutazione e
            l&apos;acquisto, per l&apos;acquisto di abitazione principale, o 80%
            per altre finalità.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Durata massima di 40 anni, con l&apos;età dei richiedenti che non
            può superare i 75 anni alla fine del prestito.
          </p>
        </div>
      </>
    ),
  };

  return (
    <div className="p-6 w-[75%]">
      {content[pathname.split("/").pop()! as keyof typeof content] || (
        <p>Pagina non trovata.</p>
      )}
    </div>
  );
};

export default ProductContent;
