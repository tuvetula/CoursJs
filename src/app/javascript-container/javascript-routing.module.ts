import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";

import { JavascriptContainerComponent } from "./javascript-container.component";

import { BasesContainerComponent } from "./bases-container/bases-container.component";
import { VariablesVarComponent } from "./bases-container/variables-var/variables-var.component";
import { VariablesLetConstComponent } from "./bases-container/variables-let-const/variables-let-const.component";
import { HoistingComponent } from "./bases-container/hoisting/hoisting.component";
import { BasesTypesComponent } from "./bases-container/bases-types/bases-types.component";
import { BasesOperateursComponent } from "./bases-container/bases-operateurs/bases-operateurs.component";
import { BasesConversionsComponent } from "./bases-container/bases-conversions/bases-conversions.component";
import { BasesApprofondissementOperateursComponent } from "./bases-container/bases-approfondissement-operateurs/bases-approfondissement-operateurs.component";
import { BasesValeursReferencesComponent } from "./bases-container/bases-valeurs-references/bases-valeurs-references.component";
import { ConditionsEtBouclesContainerComponent } from './conditions-et-boucles-container/conditions-et-boucles-container.component';
import { IfElseElseifComponent } from './conditions-et-boucles-container/if-else-elseif/if-else-elseif.component';
import { TernairesComponent } from './conditions-et-boucles-container/ternaires/ternaires.component';
import { SwitchComponent } from './conditions-et-boucles-container/switch/switch.component';
import { BouclesForComponent } from './conditions-et-boucles-container/boucles-for/boucles-for.component';
import { BouclesWhileComponent } from './conditions-et-boucles-container/boucles-while/boucles-while.component';
import { NombresContainerComponent } from './nombres-container/nombres-container.component';
import { NombresIntroductionComponent } from './nombres-container/nombres-introduction/nombres-introduction.component';
import { NombresDecimauxExposantComponent } from './nombres-container/nombres-decimaux-exposant/nombres-decimaux-exposant.component';
import { NombresMethodesDisponiblesGlobalComponent } from './nombres-container/nombres-methodes-disponibles-global/nombres-methodes-disponibles-global.component';
import { NombresMethodesNumberComponent } from './nombres-container/nombres-methodes-number/nombres-methodes-number.component';
import { NombresObjetMathComponent } from './nombres-container/nombres-objet-math/nombres-objet-math.component';
import { StringContainerComponent } from './string-container/string-container.component';
import { StringIntroductionComponent } from './string-container/string-introduction/string-introduction.component';
import { StringLitterauxModeleComponent } from './string-container/string-litteraux-modele/string-litteraux-modele.component';
import { StringProprieteIndexLengthComponent } from './string-container/string-propriete-index-length/string-propriete-index-length.component';
import { StringMethodesDisponiblesComponent } from './string-container/string-methodes-disponibles/string-methodes-disponibles.component';
import { StringExpressionsRationnellesComponent } from './string-container/string-expressions-rationnelles/string-expressions-rationnelles.component';
import { ModulesJsContainerComponent } from './modules-js-container/modules-js-container.component';
import { ModuleJsIntroductionComponent } from './modules-js-container/module-js-introduction/module-js-introduction.component';
import { ModuleJsExporterComponent } from './modules-js-container/module-js-exporter/module-js-exporter.component';
import { ModuleJsImporterComponent } from './modules-js-container/module-js-importer/module-js-importer.component';
import { ModuleJsReexporterComponent } from './modules-js-container/module-js-reexporter/module-js-reexporter.component';
import { DomContainerComponent } from './dom-container/dom-container.component';
import { DomIntroductionComponent } from './dom-container/dom-introduction/dom-introduction.component';
import { DomDomHtmlComponent } from './dom-container/dom-dom-html/dom-dom-html.component';
import { DomSelectionnerElementsComponent } from './dom-container/dom-selectionner-elements/dom-selectionner-elements.component';
import { DomModifierElementsComponent } from './dom-container/dom-modifier-elements/dom-modifier-elements.component';
import { DomAttributsProprietesComponent } from './dom-container/dom-attributs-proprietes/dom-attributs-proprietes.component';
import { DomHtmlInputElementComponent } from './dom-container/dom-html-input-element/dom-html-input-element.component';
import { DomUtilisationCssWebpackComponent } from './dom-container/dom-utilisation-css-webpack/dom-utilisation-css-webpack.component';
import { DomModificationStyleClassesComponent } from './dom-container/dom-modification-style-classes/dom-modification-style-classes.component';
import { DomCreerNoeudsComponent } from './dom-container/dom-creer-noeuds/dom-creer-noeuds.component';
import { DomPositionnerNoeudsComponent } from './dom-container/dom-positionner-noeuds/dom-positionner-noeuds.component';
import { DomSupprimerRemplacerNoeudsComponent } from './dom-container/dom-supprimer-remplacer-noeuds/dom-supprimer-remplacer-noeuds.component';
import { EvenementsContainerComponent } from './evenements-container/evenements-container.component';
import { EvenementsIntroductionComponent } from './evenements-container/evenements-introduction/evenements-introduction.component';
import { EvenementsUtilisationProprietesComponent } from './evenements-container/evenements-utilisation-proprietes/evenements-utilisation-proprietes.component';
import { EvenementsAddEventListenerComponent } from './evenements-container/evenements-add-event-listener/evenements-add-event-listener.component';
import { EvenementsSupprimerGestionnaireComponent } from './evenements-container/evenements-supprimer-gestionnaire/evenements-supprimer-gestionnaire.component';
import { EvenementsBouillonementComponent } from './evenements-container/evenements-bouillonement/evenements-bouillonement.component';
import { EvenementsEmpecherComportementComponent } from './evenements-container/evenements-empecher-comportement/evenements-empecher-comportement.component';
import { AsynchroneContainerComponent } from './asynchrone-container/asynchrone-container.component';
import { AsynchroneIntroductionComponent } from './asynchrone-container/asynchrone-introduction/asynchrone-introduction.component';
import { AsynchronePromessesComponent } from './asynchrone-container/asynchrone-promesses/asynchrone-promesses.component';
import { AsynchroneChainerPromessesComponent } from './asynchrone-container/asynchrone-chainer-promesses/asynchrone-chainer-promesses.component';
import { AsynchroneMethodesDesPromessesComponent } from './asynchrone-container/asynchrone-methodes-des-promesses/asynchrone-methodes-des-promesses.component';
import { AsynchronePolyfillsWebpackComponent } from './asynchrone-container/asynchrone-polyfills-webpack/asynchrone-polyfills-webpack.component';
import { AsynchroneAsyncAwaitComponent } from './asynchrone-container/asynchrone-async-await/asynchrone-async-await.component';
import { AsynchroneEventloopComponent } from './asynchrone-container/asynchrone-eventloop/asynchrone-eventloop.component';
import { ReseauContainerComponent } from './reseau-container/reseau-container.component';
import { ReseauIntroductionComponent } from './reseau-container/reseau-introduction/reseau-introduction.component';
import { ReseauFetchComponent } from './reseau-container/reseau-fetch/reseau-fetch.component';
import { ReseauRequetePostComponent } from './reseau-container/reseau-requete-post/reseau-requete-post.component';
import { ReseauCorsComponent } from './reseau-container/reseau-cors/reseau-cors.component';
import { ReseauOptionsFetchComponent } from './reseau-container/reseau-options-fetch/reseau-options-fetch.component';
import { ReseauAnnulerRequetesComponent } from './reseau-container/reseau-annuler-requetes/reseau-annuler-requetes.component';
import { ReseauFormDataComponent } from './reseau-container/reseau-form-data/reseau-form-data.component';
import { ReseauWebApiUrlComponent } from './reseau-container/reseau-web-api-url/reseau-web-api-url.component';
import { ReseauXmlhttprequestComponent } from './reseau-container/reseau-xmlhttprequest/reseau-xmlhttprequest.component';
import { ReseauUtilisationsAvanceesXmlhttprequestComponent } from './reseau-container/reseau-utilisations-avancees-xmlhttprequest/reseau-utilisations-avancees-xmlhttprequest.component';
import { DateContainerComponent } from './date-container/date-container.component';
import { DateDeclarationComponent } from './date-container/date-declaration/date-declaration.component';
import { DateFormatComponent } from './date-container/date-format/date-format.component';
import { DateTimestampsComponent } from './date-container/date-timestamps/date-timestamps.component';
import { DateApiComponent } from './date-container/date-api/date-api.component';
import { DateAffichageComponent } from './date-container/date-affichage/date-affichage.component';
import { LocationHistoryContainerComponent } from './location-history-container/location-history-container.component';
import { LocationWebApiComponent } from './location-history-container/location-web-api/location-web-api.component';
import { LocationMethodesComponent } from './location-history-container/location-methodes/location-methodes.component';
import { LocationWebApiHistoryComponent } from './location-history-container/location-web-api-history/location-web-api-history.component';
import { LocationStateHistoryComponent } from './location-history-container/location-state-history/location-state-history.component';
import { ObjetsContainerComponent } from './objets-container/objets-container.component';
import { ObservablesIntroductionComponent } from '../angular-container/observables-container/observables-introduction/observables-introduction.component';
import { ObjetsIntroductionComponent } from './objets-container/objets-introduction/objets-introduction.component';
import { ObjetsProprietesComponent } from './objets-container/objets-proprietes/objets-proprietes.component';
import { ObjetsRaccourcisSyntaxiquesComponent } from './objets-container/objets-raccourcis-syntaxiques/objets-raccourcis-syntaxiques.component';
import { ObjetsDecompositionComponent } from './objets-container/objets-decomposition/objets-decomposition.component';
import { ObjetsTestExistenceValeurComponent } from './objets-container/objets-test-existence-valeur/objets-test-existence-valeur.component';
import { ObjetsSupprimerProprietesComponent } from './objets-container/objets-supprimer-proprietes/objets-supprimer-proprietes.component';
import { ObjetsFusionnerComponent } from './objets-container/objets-fusionner/objets-fusionner.component';
import { ObjetsComparerComponent } from './objets-container/objets-comparer/objets-comparer.component';
import { ObjetsItererComponent } from './objets-container/objets-iterer/objets-iterer.component';
import { ObjetsFormatJsonComponent } from './objets-container/objets-format-json/objets-format-json.component';
import { ObjetsCopierComponent } from './objets-container/objets-copier/objets-copier.component';
import { ObjetsObjectifsDescriptionProprietesComponent } from './objets-container/objets-objectifs-description-proprietes/objets-objectifs-description-proprietes.component';
import { ObjetsAccesseursMutateursComponent } from './objets-container/objets-accesseurs-mutateurs/objets-accesseurs-mutateurs.component';
import { ObjetsPooConstructeursComponent } from './objets-container/objets-poo-constructeurs/objets-poo-constructeurs.component';
import { ObjetsIntroductionPrototypesComponent } from './objets-container/objets-introduction-prototypes/objets-introduction-prototypes.component';
import { ObjetsPatternConstructeurProprietePrototypeComponent } from './objets-container/objets-pattern-constructeur-propriete-prototype/objets-pattern-constructeur-propriete-prototype.component';
import { ObjetsPrototypesNatifsComponent } from './objets-container/objets-prototypes-natifs/objets-prototypes-natifs.component';
import { ObjetsUtilisationPrototypesComponent } from './objets-container/objets-utilisation-prototypes/objets-utilisation-prototypes.component';
import { ObjetsApiObjectComponent } from './objets-container/objets-api-object/objets-api-object.component';
import { FonctionsContainerComponent } from './fonctions-container/fonctions-container.component';
import { FonctionsExpressionsDeclarationComponent } from './fonctions-container/fonctions-expressions-declaration/fonctions-expressions-declaration.component';
import { FonctionsParametresArgumentsComponent } from './fonctions-container/fonctions-parametres-arguments/fonctions-parametres-arguments.component';
import { FonctionsObjetArgumentsComponent } from './fonctions-container/fonctions-objet-arguments/fonctions-objet-arguments.component';
import { FonctionsValeurRetourComponent } from './fonctions-container/fonctions-valeur-retour/fonctions-valeur-retour.component';
import { FonctionsEnvironnementLexicalComponent } from './fonctions-container/fonctions-environnement-lexical/fonctions-environnement-lexical.component';
import { FonctionsChainePorteeComponent } from './fonctions-container/fonctions-chaine-portee/fonctions-chaine-portee.component';
import { FonctionsNamespaceComponent } from './fonctions-container/fonctions-namespace/fonctions-namespace.component';
import { FonctionsMotclefThisComponent } from './fonctions-container/fonctions-motclef-this/fonctions-motclef-this.component';
import { FonctionsDefinirLierThisComponent } from './fonctions-container/fonctions-definir-lier-this/fonctions-definir-lier-this.component';
import { FonctionsFonctionsFlecheesComponent } from './fonctions-container/fonctions-fonctions-flechees/fonctions-fonctions-flechees.component';
import { FonctionsFonctionsRappelComponent } from './fonctions-container/fonctions-fonctions-rappel/fonctions-fonctions-rappel.component';
import { FonctionsFermeturesComponent } from './fonctions-container/fonctions-fermetures/fonctions-fermetures.component';

const routes: Route[] = [
  {
    path: "Javascript",
    component: JavascriptContainerComponent,
    children: [
      {
        path: "Bases",
        component: BasesContainerComponent,
        children: [
          { path: "Variable-var", component: VariablesVarComponent },
          {
            path: "Variables-let-const",
            component: VariablesLetConstComponent,
          },
          { path: "Hoisting", component: HoistingComponent },
          { path: "Types", component: BasesTypesComponent },
          { path: "Operateurs", component: BasesOperateursComponent },
          { path: "Conversions", component: BasesConversionsComponent },
          {
            path: "Approfondissement-operateurs",
            component: BasesApprofondissementOperateursComponent,
          },
          {
            path: "Valeurs-references",
            component: BasesValeursReferencesComponent,
          },
        ],
      },
      {
        path:"Conditions-Boucles", component: ConditionsEtBouclesContainerComponent, children:[
            {path: "If-else-elseif" , component: IfElseElseifComponent},
            {path: "Ternaires" , component: TernairesComponent},
            {path: "Switch" , component: SwitchComponent},
            {path: "Boucle-For" , component: BouclesForComponent},
            {path: "Boucle-While" , component: BouclesWhileComponent},
        ]
      },
      {
        path:"Nombres", component: NombresContainerComponent, children:[
          {path: "Introduction" , component: NombresIntroductionComponent},
          {path: "Decimaux-exposant" , component: NombresDecimauxExposantComponent},
          {path: "Methodes-global" , component: NombresMethodesDisponiblesGlobalComponent},
          {path: "Methodes-number" , component: NombresMethodesNumberComponent},
          {path: "Objet-math" , component: NombresObjetMathComponent},
        ]
      },
      {
        path:"String", component: StringContainerComponent, children:[
          {path: "Introduction", component: StringIntroductionComponent},
          {path: "Litteraux-modele", component: StringLitterauxModeleComponent},
          {path: "Proprietes-index-length", component: StringProprieteIndexLengthComponent},
          {path: "Methodes", component: StringMethodesDisponiblesComponent},
          {path: "Expressions-rationnelles", component: StringExpressionsRationnellesComponent},
        ]
      },
      {
        path:"Objets", component: ObjetsContainerComponent, children:[
          {path: "Introduction" , component: ObjetsIntroductionComponent},
          {path: "Proprietes" , component: ObjetsProprietesComponent},
          {path: "Raccourcis-syntaxiques" , component: ObjetsRaccourcisSyntaxiquesComponent},
          {path: "Decomposition" , component: ObjetsDecompositionComponent},
          {path: "Test-existence-valeur" , component: ObjetsTestExistenceValeurComponent},
          {path: "Supprimer-proprietes" , component: ObjetsSupprimerProprietesComponent},
          {path: "Fusionner" , component: ObjetsFusionnerComponent},
          {path: "Comparer" , component: ObjetsComparerComponent},
          {path: "Iterer" , component: ObjetsItererComponent},
          {path: "Format-json" , component: ObjetsFormatJsonComponent},
          {path: "Copier" , component: ObjetsCopierComponent},
          {path: "Objectifs-description-proprietes" , component: ObjetsObjectifsDescriptionProprietesComponent},
          {path: "Accesseurs-mutateurs" , component: ObjetsAccesseursMutateursComponent},
          {path: "Poo-constructeurs" , component: ObjetsPooConstructeursComponent},
          {path: "Introduction-prototypes" , component: ObjetsIntroductionPrototypesComponent},
          {path: "Pattern-constructeur" , component: ObjetsPatternConstructeurProprietePrototypeComponent},
          {path: "Prototypes-natifs" , component: ObjetsPrototypesNatifsComponent},
          {path: "Utilisation-prototypes" , component: ObjetsUtilisationPrototypesComponent},
          {path: "Api-object" , component: ObjetsApiObjectComponent},
        ]
      },
      {
        path:"Fonctions" , component: FonctionsContainerComponent, children:[
          {path: "Expression-fonction-declaration" , component: FonctionsExpressionsDeclarationComponent},
          {path: "Parametres-arguments" , component: FonctionsParametresArgumentsComponent},
          {path: "Objet-arguments-Rest" , component: FonctionsObjetArgumentsComponent},
          {path: "Valeur-retour" , component: FonctionsValeurRetourComponent},
          {path: "Environnement-lexical" , component: FonctionsEnvironnementLexicalComponent},
          {path: "Chaine-de-portée" , component: FonctionsChainePorteeComponent},
          {path: "Namespace" , component: FonctionsNamespaceComponent},
          {path: "This" , component: FonctionsMotclefThisComponent},
          {path: "Definir-lier-this" , component: FonctionsDefinirLierThisComponent},
          {path: "Fonctions-flechees" , component: FonctionsFonctionsFlecheesComponent},
          {path: "Fonctions-de-rappel" , component: FonctionsFonctionsRappelComponent},
          {path: "Fermetures" , component: FonctionsFermeturesComponent},
        ]
      },
      {
        path:"ModulesJs", component: ModulesJsContainerComponent, children: [
          {path: "Introduction" , component: ModuleJsIntroductionComponent},
          {path: "Exporter" , component: ModuleJsExporterComponent},
          {path: "Importer" , component: ModuleJsImporterComponent},
          {path: "Reexporter" , component: ModuleJsReexporterComponent},
        ]
      },
      {
        path:"Dom" , component: DomContainerComponent,children: [
          {path:"Introduction" , component: DomIntroductionComponent},
          {path:"Dom-html" , component: DomDomHtmlComponent},
          {path:"Selectionner-elements" , component: DomSelectionnerElementsComponent},
          {path:"Modifier-elements" , component: DomModifierElementsComponent},
          {path:"Attributs-proprietes" , component: DomAttributsProprietesComponent},
          {path:"HtmlInputElement" , component: DomHtmlInputElementComponent},
          {path:"Utilisation-css-webpack" , component: DomUtilisationCssWebpackComponent},
          {path:"Modification-style-classes" , component: DomModificationStyleClassesComponent},
          {path:"Creer-noeuds" , component: DomCreerNoeudsComponent},
          {path:"Positionner-noeuds" , component: DomPositionnerNoeudsComponent},
          {path:"Supprimer-remplacer-noeuds" , component: DomSupprimerRemplacerNoeudsComponent}
        ]
      },
      {
        path:"Evenements" , component: EvenementsContainerComponent, children:[
          {path: "Introduction" , component : EvenementsIntroductionComponent},
          {path: "Utilisation-proprietes-dom" , component : EvenementsUtilisationProprietesComponent},
          {path: "addEventListener" , component : EvenementsAddEventListenerComponent},
          {path: "Supprimer-gestionnaire-evenement" , component : EvenementsSupprimerGestionnaireComponent},
          {path: "Bouillonement-et-capture" , component : EvenementsBouillonementComponent},
          {path: "Empecher-comportement-par-defaut" , component : EvenementsEmpecherComportementComponent},
        ]
      },
      {
        path:"Asynchrone" , component: AsynchroneContainerComponent, children:[
          {path: "Introduction" , component: AsynchroneIntroductionComponent},
          {path: "Promesses" , component: AsynchronePromessesComponent},
          {path: "Chainer-promesses" , component: AsynchroneChainerPromessesComponent},
          {path: "Methodes-promesses" , component: AsynchroneMethodesDesPromessesComponent},
          {path: "Polyfills-webpack" , component: AsynchronePolyfillsWebpackComponent},
          {path: "Async-await" , component: AsynchroneAsyncAwaitComponent},
          {path: "Event-loop" , component: AsynchroneEventloopComponent},
        ]
      },
      {
        path:"Reseau" , component: ReseauContainerComponent , children:[
          {path: "Introduction" , component: ReseauIntroductionComponent},
          {path: "Fetch" , component: ReseauFetchComponent},
          {path: "Requete-post" , component: ReseauRequetePostComponent},
          {path: "Cors" , component: ReseauCorsComponent},
          {path: "Options-fetch" , component: ReseauOptionsFetchComponent},
          {path: "Annuler-requetes" , component: ReseauAnnulerRequetesComponent},
          {path: "FormData" , component: ReseauFormDataComponent},
          {path: "Web-api-url" , component: ReseauWebApiUrlComponent},
          {path: "XMLHttpRequest" , component: ReseauXmlhttprequestComponent},
          {path: "Utilisations-avancees-XMLHttpRequest" , component: ReseauUtilisationsAvanceesXmlhttprequestComponent},
        ]
      },
      {
        path:"Date" , component: DateContainerComponent , children:[
          {path: "Declaration" , component: DateDeclarationComponent},
          {path: "Format" , component: DateFormatComponent},
          {path: "Timestamps" , component: DateTimestampsComponent},
          {path: "Api" , component: DateApiComponent},
          {path: "Affichage" , component: DateAffichageComponent},
        ]
      },
      {
        path:"LocationAndHistory" , component: LocationHistoryContainerComponent , children:[
          {path: "Web-api-location" , component : LocationWebApiComponent},
          {path: "Methodes-location" , component : LocationMethodesComponent},
          {path: "Web-api-history" , component : LocationWebApiHistoryComponent},
          {path: "State-history" , component : LocationStateHistoryComponent},
        ]
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JavascriptRoutingModule {}
