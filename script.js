
const pageBody = document.querySelector('body');
const loadpage = document.querySelector('.loadpage');
window.addEventListener('load', () => {
    pageBody.style.height='unset';
    pageBody.style.overflow='unset';
    loadpage.style.opacity='0';
    loadpage.addEventListener('transitionend', () => {
        loadpage.style.display='none';
    });
});


const languageOptions = document.querySelectorAll('.option');
const languageSwich = document.querySelector('.swicher')
languageOptions.forEach(option => {
    option.addEventListener('click', () => {
        const lanId = option.id;
        if (lanId == 'es'){
            languageSwich.style.left= '77px';
            document.querySelector('#tc').style.color='#b1b1b1';
            document.querySelector('#te').style.color='white';
        }else{
            languageSwich.style.left= '0px';
            document.querySelector('#te').style.color='#b1b1b1';
            document.querySelector('#tc').style.color='white';
        }
        translateSpan(lanId);
    });
});

document.addEventListener('scroll', projectsWidth);
const projectsPage = document.querySelector('.projects');
const apperatInScroll = document.querySelectorAll('.appear');
function projectsWidth(){
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    let height = window.innerHeight;
    let scrollVH = (scrollTop / (height * 0.8)) * 20;
    if (scrollVH > 20){scrollVH = 20}
    projectsPage.style.width=`calc(80vw + ${scrollVH}vw)`;
    let shadowWidth = 35 * scrollVH;
    if(shadowWidth < 35){shadowWidth = 35};
    if(shadowWidth > 170){shadowWidth = 170};
    projectsPage.style.boxShadow=`0px 0px ${shadowWidth}px 15px #894ad6ad`;
    apperatInScroll.forEach(el => {
        let distanceFromTop = el.getBoundingClientRect().top;
        if((distanceFromTop) < scrollTop){
            el.style.opacity = '1';
        }else{
            el.style.opacity = '0';
        }
    });
}

const secBtn = document.querySelector('#secBtn');
const title = document.querySelector('#title');
const subtitle = document.querySelector('#subtitle');
const mainBtn = document.querySelector('#mainBtn');
const pro1 = document.querySelector('#pro1');
const pro2 = document.querySelector('#pro2');
const pro3 = document.querySelector('#pro3');
const pro4 = document.querySelector('#pro4');
const pro5 = document.querySelector('#pro5');
const pro6 = document.querySelector('#pro6');
const pro7 = document.querySelector('#pro7');
const pro1t = document.querySelector('#pro1t');
const pro2t = document.querySelector('#pro2t');
const pro3t = document.querySelector('#pro3t');
const pro4t = document.querySelector('#pro4t');
const pro5t = document.querySelector('#pro5t');
const pro6t = document.querySelector('#pro6t');
const pro7t = document.querySelector('#pro7t');
const titl1 = document.querySelector('#titl1');
const titl2 = document.querySelector('#titl2');
const titl3 = document.querySelector('#titl3');
const titl4 = document.querySelector('#titl4');
function translateSpan(who){
    if (who == 'es'){
        title.innerHTML='Consejo escolar';
        subtitle.innerHTML="Recogida de propuestas y temas del instituto a denunciar de cara a los <span>estudiantes</span>";
        mainBtn.innerHTML='Informanos';
        pro1t.innerHTML='En las horas de guardia, debemos quedarnos en clase sentados y sin poder socializar con los compañeros. La propuesta consiste en romper esto y fomentar el deporte mejorando la condición física y la salud del alumnado, permitiendo que estos puedan salir al patio y disponer de material de educación física.';
        pro1.innerHTML='Guardias activas';
        pro2t.innerHTML='En las horas de guardia, debemos quedarnos en clase sentados y sin poder socializar con los compañeros. La propuesta consiste en romper esto y fomentar el deporte mejorando la condición física y la salud del alumnado, permitiendo que estos puedan salir al patio y disponer de material de educación física.';
        pro3t.innerHTML='En las horas de guardia, debemos quedarnos en clase sentados y sin poder socializar con los compañeros. La propuesta consiste en romper esto y fomentar el deporte mejorando la condición física y la salud del alumnado, permitiendo que estos puedan salir al patio y disponer de material de educación física.';
        pro3.innerHTML='Guardias activas';
        pro4t.innerHTML="Estamos decididos a intentar mejorar la salud física del alumnado ofreciendo más espacios en el horario lectivo donde practicar deporte y el contacto con el exterior, como sería el caso de las guardias. Además, queremos ofrecer opciones más saludables en cuanto a la alimentación en el centro.";
        pro4.innerHTML='La salud fisica de los alumnos';
        pro5t.innerHTML="Promover los hábitos saludables es un factor esencial en el instituto, y por eso proponemos añadir alimentos más saludables del estilo de frutas, frutos secos, batidos de frutas… en lugares como la cantina y puestos de recaudación de dinero para las colonias.";
        pro5.innerHTML='Cantina + sana';
        pro6t.innerHTML="Los patios vivos son una manera de hacer deporte y a la vez relacionarse aprovechando las horas de patio para hacer actividades, por eso queremos aumentar su influencia y popularidad además de mejorar los patios en general añadiendo papeleras…";
        pro6.innerHTML='Patios vivos';
        pro7t.innerHTML="Que haya espacios donde estudiar es esencial en un instituto. Por eso miramos a favor de dar acceso a espacios donde poder ir en horas libres para estudiar y trabajar de una manera cómoda.";
        pro7.innerHTML='Espacios de estudio';
        titl1.innerHTML='Propuestas principales';
        titl2.innerHTML='Objetivos principales';
        titl3.innerHTML='Material roto?';
        titl4.innerHTML='Algun material de tu clase o del centro esta roto?';
        secBtn.innerHTML="Informanos";
    }else{
        title.innerHTML='Consell escolar';
        subtitle.innerHTML="Recull de propostes i temes de l'institut a denunciar de cara als <span>estudiants</span>";
        mainBtn.innerHTML="Informa'ns";
        pro1.innerHTML='Guardies actives';
        pro1t.innerHTML="A les hores de guàrdia ens hem de quedar a classe asseguts i sense poder socialitzar amb els companys. La proposta consisteix a trencar això i fomentar l'esport millorant la condició física i la salut de l'alumnat fent que aquests, puguin sortir al pati i disposar de material d'educació física.";
        pro2t.innerHTML="Hi ha hores on els de batxillerat no tenen classe, però no tenen on estar fins que arribi la següent hora. La proposta consisteix a posar, a cada hora, un professor de guàrdia en la biblioteca, per tal d'estar disponible de cara als alumnes que vulguin estudiar o treballar.";
        pro3t.innerHTML="Les famílies amb múltiples fills al centre, cada any es troben que molts dels llibres de teoria o lectura que havien comprat al germà gran, el curs passat, no els poden reutilitzar pel germà petit, ja que aquest curs els demanen llibres totalment diferents. La proposta consisteix a decidir uns llibres de text per cada curs i mantenir la llista d'aquests.";
        pro3.innerHTML='Fixació de llibres';
        pro4t.innerHTML="Estem decidits a intentar millorar la salut física de l'alumnat oferint més espais a l'horari lectiu on practicar l'esport i el contacte amb l'exterior com seria el cas de les guàrdies. A més a més, volem oferir opcions més sanes de cara a l'alimentació al centre.";
        pro4.innerHTML="La salut física de l'alumnat";
        pro5t.innerHTML="Promoure els hàbits saludables és un factor essencial a l'institut, i per això proposem afegir aliments més sans de l'estil de fruita, fruit secs, batuts de fruita... a llocs com la cantina i paradetes de recaptació de diners per les colònies.";
        pro5.innerHTML='Cantina + sa';
        pro6t.innerHTML="Els patis vius són una manera de fer esport i alhora relacionar-se aprofitant les hores de pati per fer activitats, per això volem augmentar la seva influència i popularitat a més a més de millorar els patis en general afegint papereres...";
        pro6.innerHTML='Patis vius';
        pro7t.innerHTML="Que hi hagi espais on estudiar és essencial en un institut. Per això mirem a favor de donar accés a espais on poder anar en hores lliures per tal d'estudiar i treballar d'una manera còmoda.";
        pro7.innerHTML="Llocs d'estudi";
        titl1.innerHTML='Propostes principals';
        titl2.innerHTML='Objectius principals';
        titl3.innerHTML='Material trencat?';
        titl4.innerHTML='Algun material de la teva classe o del centre esta espatllat?';
        secBtn.innerHTML="Informa'ns";
    }
}


secBtn.addEventListener('click', inform);
mainBtn.addEventListener('click', inform);
const reportPage = document.querySelector('.report-page');
function inform(){
    reportPage.style.transition='none';
    reportPage.style.height = '100vh';
    reportPage.style.transition='0.3s ease';
    reportPage.style.opacity='1';
    reportPage.style.borderRadius='0px';
    setTimeout(startInformPage, 1000);
        pageBody.style.height = '0px';
        pageBody.style.overflow='hidden';

}

const voiceTextAccept = document.querySelector('.voiceTextAccept');
const subtitles = document.querySelector('#voiceText');
function startInformPage(){
    subtitles.style.opacity='1';
    voiceTextAccept.addEventListener('click', askQuestions)
}


const questionsSide = document.querySelector('.questions');
const buttonapearrepeat = document.querySelector('#buttonapearrepeat');
function askQuestions(){
    voiceTextAccept.style.opacity='0';
    subtitles.style.opacity='0';
    questionsSide.style.width='50%';
    questionsSide.addEventListener('transitionend', () => {
        subtitles.innerHTML='Sobre que vols informar?';
        buttonapearrepeat.innerHTML='<button class="voiceTextAccept goback">Torna</button>';
        subtitles.style.opacity='1';
        voiceTextAccept.style.opacity='1';
        questionsSide.style.opacity= '1';
        const goback = document.querySelector('.goback');
        goback.addEventListener('click', desapierquestions)
    });
}


function desapierquestions(){
    reportPage.style.transition='0.3s ease';
    reportPage.style.opacity='0';
    reportPage.style.height = '0vh';
    reportPage.style.borderRadius='20px';
    pageBody.style.height='unset';
    pageBody.style.overflow='unset';

}

const denunciarbtn = document.querySelector('#denunciarbtn');
const proposarbtn = document.querySelector('#proposarbtn');
const patisviusbtn = document.querySelector('#patisviusbtn');
const formviewer = document.querySelector('.formviewer');
const formiframe = document.querySelector('#formiframe');
const noformview = document.querySelector('#nomoreformview');
denunciarbtn.addEventListener('click', () => {
    formviewer.style.display='flex';
    formiframe.src='https://docs.google.com/forms/d/e/1FAIpQLSeads-w3d_mMxjswBxexFl7Ye9_CVgltUWroi9abkf8j85obg/viewform?embedded=true';
});
proposarbtn.addEventListener('click', () => {
    formviewer.style.display='flex';
    formiframe.src='https://docs.google.com/forms/d/e/1FAIpQLSc4FT83Kb1jtn_oxWqPiaVZACQZvaxODc7kWnyd6ZWawi1ppg/viewform?embedded=true';
});
patisviusbtn.addEventListener('click', () => {
    formviewer.style.display='flex';
    formiframe.src='https://docs.google.com/forms/d/e/1FAIpQLSdCVBlRW60R62bC4tU4D-74wL558WNpK34N20qcWLk9oQ2g3g/viewform?embedded=true';
});
noformview.addEventListener('click', () => {
    formviewer.style.display='none';
});
