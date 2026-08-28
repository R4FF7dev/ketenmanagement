const SUCCESFACTOREN = [
  "Incentives te koppelen aan heldere en meetbare prestaties",
  "Gebruik te maken van combinaties van expliciete en impliciete incentives (zoals reputatie en herhaalde opdrachten)",
  "Transparante en eerlijke risico- en opbrengstverdeling",
  "Frequente maar functionele feedback, afhankelijk van het veiligheidsscenario",
  "Goede communicatie en training voor alle betrokkenen",
];

const REFERENTIES = [
  "Cheung, S.O., Ma, Q., Lee, F.C., & Humphrey, S. (2024). A Review of Research in Construction Incentivization. ISEC Press. [isec-society.org]",
  "Wang, Y., Shen, W., & Tang, W. (Tsinghua Univ.). Effects of Contractual Incentives in Construction Projects. (Model en padanalyse; stakeholder alignment/risicoverdeling/gain-sharing). [researchgate.net]",
  "Lee, B.B., & Kim, H. (2024). Evaluating the effects of safety incentives on worker safety behavior… Frontiers in Public Health. [frontiersin.org]",
  "Zulkefli, F.A., Md Ulang, N., & Baharum, F. (2014). Construction Health and Safety: Effectiveness of Safety Incentive Programme. SHS Web of Conferences. [eprints.usm.my]",
  "Ogundipe, K.E., et al. (2024). A Review of Barriers to Safety Incentives Design and Implementation in the Construction Industry. Springer (LNCE, vol. 480). [link.springer.com]",
  "NL-context: UAV-GC 2025 (CROW), RWS-implementatie, Prestatiemeten en prestatiecontracten (RWS/PIANOo). [link.springer.com], [studylib.net], [rijkswaterstaat.nl], [simmons-simmons.com]",
];

export function ImpactVanIncentivesystemenInDeBouw() {
  return (
    <>
      <p className="text-lg leading-relaxed text-slate-soft">
        Incentives (financieel of niet-financieel) worden in de bouwsector ingezet om prestaties,
        samenwerking, veiligheid en projectresultaten te verbeteren. De literatuur toont aan dat hun
        effect positief kan zijn, maar sterk afhankelijk is van ontwerp, context en uitvoering.
      </p>
      <p className="mt-5 text-sm text-slate-soft">
        Door: dr.ing. Marcel Noordhuis, e-mail:{" "}
        <a href="mailto:m.noordhuis@ketensamenwerking.nl" className="underline hover:text-navy">
          m.noordhuis@ketensamenwerking.nl
        </a>{" "}
        [Ketensamenwerking Interim &amp; Advies]
      </p>

      <h2 className="mt-14 font-display text-2xl font-semibold text-navy-deep md:text-3xl">
        1. Effect op Projectprestaties (kosten, tijd, kwaliteit)
      </h2>
      <p className="mt-5 text-base leading-relaxed text-slate-soft">
        <strong className="font-semibold text-navy-deep">Positieve effecten:</strong> Een
        systematische review van Cheung et al. (2024) concludeert dat incentives een veelgebruikt
        middel zijn om extra inzet te genereren bij aannemers, consultants en leveranciers. Ze
        worden in verband gebracht met kostenbesparingen, betere schedule reliability en verbeterde
        projectkwaliteit [isec-society.org].
      </p>
      <p className="mt-4 text-base leading-relaxed text-slate-soft">
        <strong className="font-semibold text-navy-deep">Mechanismen:</strong> Contractuele
        incentives verbeteren projectprestaties via vier kernmechanismen (Wang et al., Tsinghua
        University): stakeholder alignment, gelijke en transparante risicoverdeling, gain-sharing
        modellen, gericht sturen op projectdoelen.
      </p>
      <p className="mt-4 text-base leading-relaxed text-slate-soft">
        Stakeholder alignment en eerlijke risicoverdeling hebben een direct positief effect op het
        realiseren van projectdoelen. Gain-sharing beïnvloedt dit indirect via dezelfde mechanismen.
        [researchgate.net]
      </p>

      <h2 className="mt-14 font-display text-2xl font-semibold text-navy-deep md:text-3xl">
        2. Effect op Samenwerking en Contracteringsvormen
      </h2>
      <p className="mt-5 text-base leading-relaxed text-slate-soft">
        Incentives worden vaak geïntegreerd in moderne samenwerkingsvormen zoals partnering,
        alliancing en target-cost contracting. Literatuur toont dat incentives samenwerking tussen
        opdrachtgever en opdrachtnemer verbeteren, coördinatieproblemen verminderen en conflicten
        reduceren.
      </p>
      <p className="mt-4 text-base leading-relaxed text-slate-soft">
        Dit komt doordat incentives het belang van partijen gelijkrichten en opportunistisch gedrag
        afremmen. [researchgate.net]
      </p>

      <h2 className="mt-14 font-display text-2xl font-semibold text-navy-deep md:text-3xl">
        3. Effect op Veiligheidsprestaties
      </h2>
      <p className="mt-5 text-base leading-relaxed text-slate-soft">
        <strong className="font-semibold text-navy-deep">Werknemersgedrag en compliance:</strong>{" "}
        Meerdere recente studies tonen aan dat goed ontworpen safety incentives bijdragen aan
        veiliger gedrag. Belonen van goede naleving is vooral effectief wanneer geen frequente
        feedback wordt gegeven. Strafmaatregelen (penalties) werken beter wanneer er vaker feedback
        wordt gegeven tijdens werkzaamheden. [frontiersin.org]
      </p>
      <p className="mt-4 text-base leading-relaxed text-slate-soft">
        <strong className="font-semibold text-navy-deep">Veiligheid op projectniveau:</strong>{" "}
        Safety incentive programma&rsquo;s hebben geleid tot hogere motivatie onder werknemers,
        verbeterde veiligheidsprestaties.
      </p>
      <p className="mt-4 text-base leading-relaxed text-slate-soft">
        Zowel monetaire als niet-monetaire incentives kunnen effectief zijn, afhankelijk van de
        implementatie. [eprints.usm.my]
      </p>

      <h2 className="mt-14 font-display text-2xl font-semibold text-navy-deep md:text-3xl">
        4. Barrières en Risico&rsquo;s bij Incentiveprogramma&rsquo;s
      </h2>
      <p className="mt-5 text-base leading-relaxed text-slate-soft">
        Incentives zijn niet altijd effectief. Een review van Ogundipe et al. (2024) toont
        belangrijke barrières in ontwerp en implementatie van safety incentives: onvoldoende kennis
        bij werknemers, conflicterende prestatiedoelen, gebrek aan nationale kaders of
        beleidsrichtlijnen en onvoldoende financiering of onduidelijke selectiecriteria. Deze
        factoren kunnen het effect van incentives sterk verminderen [link.springer.com].
      </p>
      <p className="mt-4 text-base leading-relaxed text-slate-soft">
        Daarnaast benadrukt Cheung et al. (2024) dat de resultaten van incentives gemengd kunnen
        zijn wanneer het ontwerp niet aansluit bij projectcomplexiteit of marktdynamiek.
        [isec-society.org]
      </p>

      <h2 className="mt-14 font-display text-2xl font-semibold text-navy-deep md:text-3xl">
        5. Implicaties voor de Praktijk
      </h2>
      <p className="mt-5 text-base leading-relaxed text-slate-soft">
        <strong className="font-semibold text-navy-deep">
          Succesfactoren voor effectieve incentives:
        </strong>{" "}
        Op basis van de literatuur kunnen organisaties de impact maximaliseren door:
      </p>
      <ul className="mt-5 space-y-3">
        {SUCCESFACTOREN.map((punt, i) => (
          <li key={i} className="flex gap-3 text-base leading-relaxed text-slate-soft">
            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" aria-hidden />
            {punt}
          </li>
        ))}
      </ul>

      <h2 className="mt-14 font-display text-2xl font-semibold text-navy-deep md:text-3xl">
        Belangrijkste conclusie
      </h2>
      <p className="mt-5 text-base leading-relaxed text-slate-soft">
        Incentivesystemen kunnen substantieel bijdragen aan betere projectprestaties, veiligheid en
        samenwerking in de bouw, mits goed ontworpen en afgestemd op de context. Slecht ontworpen
        systemen kunnen echter ineffectief of zelfs contraproductief zijn.
      </p>

      <h2 className="mt-14 font-display text-2xl font-semibold text-navy-deep md:text-3xl">
        Referenties
      </h2>
      <ul className="mt-5 space-y-3">
        {REFERENTIES.map((ref, i) => (
          <li key={i} className="flex gap-3 text-sm leading-relaxed text-slate-soft">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy/30" aria-hidden />
            {ref}
          </li>
        ))}
      </ul>
    </>
  );
}
