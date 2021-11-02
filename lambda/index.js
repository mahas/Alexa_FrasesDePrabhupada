
//Lista de frases
const Alexa = require('ask-sdk-core');
const data = [
  'Vida sencilla, pensamiento elevado. ', 

'La pureza es la fuerza. ', 

' Todo aquel que quiera lograr una vida perfecta, debe buscar primero conocimiento ', 

' La vida sexual es el principio básico de la vida material. Y debido a ello pensamos: yo soy este cuerpo y todo lo que está relacionado con este cuerpo es mío. ', 

' El verdadero objetivo de la vida es regresar al mundo espiritual. ', 

' Ante todo haz que tu vida sea perfecta. Después trata de enseñar a los demás. ', 

' Vida material significa querer complacer tus sentidos. Y cuando deseas servir a Dios, eso es vida espiritual. ', 

' Inteligencia significa: Saber quién soy, quién es Dios, qué es este mundo. ', 

' La verdadera honestidad consiste en no usurpar la propiedad de los demás. ', 

' Cuando el discípulo queda satisfecho con el maestro, se entrega y hace de su vida un éxito. ', 

' Debemos entender que es imposible ser feliz en el mundo material, sin importar todos los ajustes que hagamos, y no podremos ser felices a menos que llevemos una vida espiritual. ', 

' Hacer simplemente una exhibición gimnástica no es la perfección del yoga. Yoga significa controlar los sentidos ', 

' Nunca tendrá éxito alguien que aparente practicar yoga pero que complazca sus sentidos sin restricción. ', 

' En base a El Bhagavad-Gita podemos comprender que estamos transmigrando de un cuerpo a otro, incluso en nuestra vida actual. Todos tuvimos antes el cuerpo de un pequeño bebé. ¿Dónde está ese cuerpo ahora? Ese cuerpo se ha ido. ', 

' Si amas a alguien, siempre pensarás en él en forma natural ', 

' Si acepto que “Yo soy este cuerpo”, entonces no seré mejor que los perros y los gatos, ya que ésa es la noción que ellos tienen sobre la vida. ', 

' La literatura védica completa abarca tres temas: primero es nuestra relación con Dios; segundo, después de haber comprendido esa relación, aprendemos a practicarla. ', 

' Toda criatura viviente tiene una relación particular con Dios, pero ahora se encuentra olvidada. ', 

' El pez no puede ser feliz fuera del agua porque es un animal acuático. En forma similar, todos nosotros somos almas espirituales, y no podremos ser felices a menos que llevemos una vida espiritual o que estemos en el mundo espiritual. ', 

' Uno puede continuar tratando de ser feliz, pero la vida materialista nunca le producirá felicidad. Esto es un hecho. ', 

' La vida materialista se pasa masticando lo masticado. ', 

' No sabemos que estamos atados por las severas leyes de la naturaleza material. ', 

' Entonces, ¿en qué consiste el poder especial para razonar del ser humano debido al cual se le llama el animal racional? Este poder especial para razonar consiste en inquirir.  “¿Por qué estoy sufriendo?” ', 

' Ego falso significa identificación falsa. Nuestra vida ignorante ha comenzado a partir de esta identificación falsa: pensar que soy esta materia, aunque todos los días y en todo momento veo que no soy esta materia. El alma existe permanentemente, mientras que la materia está cambiando. ', 

' La verdadera fórmula para la paz consiste en que uno tiene que saber que Dios es el propietario de todo este universo. ', 

' Nuestro tiempo se está desperdiciando en la construcción de muchísimos dispositivos que nos brindan una comodidad temporal y artificial, al precio de una cantidad proporcional de inconvenientes. Todo esto es parte de la ley del karma, la ley de acción y reacción. Para todo lo que hacemos, hay una reacción por la cual nos enredamos. ', 

' Este mundo material está destinado para sufrir; a menos que existan los sufrimientos, no podremos volvernos conscientes de lo espiritual. Los sufrimientos son en realidad un incentivo y nos ayudan a elevarnos hacia lo espiritual ', 

' Debemos ser muy serios por alcanzar nuestra vida eterna, plena de bienaventuranza y conocimiento. Hemos olvidado que éste es el verdadero propósito de la vida, nuestro verdadero interés. ', 

' Como el mundo espiritual es real, este mundo material que es una imitación, parece ser real. Debemos entender el significado de realidad: realidad significa existencia que no puede desaparecer; realidad significa eternidad. ', 

' Un hombre que está durmiendo puede ser despertado con una vibración sonora. Aunque él esté prácticamente inconsciente -sin poder ver, sentir oler, etc.-el sentido del oído es tan prominente que es posible despertar a ese hombre dormido con una vibración sonora. En forma similar, el alma espiritual, aunque ahora ha sido vencida por el sueño material, puede ser despertada con la vibración sonora trascendental del mantra. ', 

' Si entiende lo que usted es, entonces entenderá otras cosas. Esto se denomina atma-tattva, atma-jñana, autoconocimiento. Esto es importante. Yo soy un alma espiritual, ', 

' Dentro de su cuerpo usted puede encontrar al alma, cuya presencia se percibe por medio de la conciencia. Del mismo modo, en el cuerpo universal de la manifestación cósmica, se puede percibir la presencia del Señor Supremo, o la Verdad Absoluta, mediante la presencia de la Superconciencia. ', 

' La persona individual y la Persona Suprema son cualitativamente una, pero cuantitativamente diferentes. Tal como una gota de agua de mar y la gran masa de agua del mar, ambas son cualitativamente una. ', 

' Religión es una clase de fe, que se desarrolla de acuerdo con el tiempo y las circunstancias. ', 

' Aquel que quiere ser libre, que quiere liberarse, debe primero que todo aprender que no es este cuerpo material. ', 

' Uno nutre el árbol regando su raíz, y uno nutre el cuerpo alimentando al estómago, pues para que el cuerpo se mantenga sano, las partes del cuerpo deben cooperar en alimentar al estómago. De igual manera, el Señor Supremo es el disfrutador y el creador, y nosotros, como seres vivientes subordinados que somos, tenemos la función de cooperar para satisfacerlo. ', 

' Así como nosotros somos seres vivientes individuales y tenemos nuestra individualidad, la Suprema Verdad Absoluta también es, en fin de cuentas, una persona, ', 

' El ser humano debe darse cuenta de cuál es el objetivo de su vida; esa información se da en todas las Escrituras védicas, y la esencia de ella se da en El Bhagavad-Gita. ', 

' En el Gita se establece que la entidad viviente nunca nace y nunca muere. La entidad viviente es eterna e indestructible, y continúa viviendo después de la destrucción de este cuerpo material temporal. ', 

' Las designaciones y los apegos se deben a nuestra lujuria y deseo, a querer enseñorearnos de la naturaleza material. ', 

' Todos los sufrimientos que experimentamos en el mundo material tienen su origen en el cuerpo. ', 

' El hombre moderno ha luchado mucho por llegar a la Luna, pero no se ha esforzado mucho por elevarse en lo espiritual. ', 

' Nosotros podemos demostrar fácilmente que la vida comienza a partir de la vida. Y la vida original es Krishna. ', 

' Podemos observar con propiedad que las plantas son producidas por la naturaleza, pero la siguiente pregunta que debemos hacer, es. “¿Quién produjo la naturaleza?”. Preguntar eso es signo de verdadera inteligencia ', 

' De igual manera, nosotros estamos tratando de manufacturar muchas cosas para satisfacer nuestra sed de disfrute, pero nos estamos frustrando a cada paso, debido a que la existencia material es una ilusión. Por lo tanto, verdadera inteligencia significa preguntar: ¿Dónde está la realidad? ¿Dónde está la sustancia eterna que hay tras la ilusión?. Si podemos averiguar eso, podremos experimentar verdadero disfrute. ', 

' La vida no proviene de la materia. La materia se genera a partir de la vida. No es una teoría; es un hecho. ', 

' El análisis de una gota de agua de mar le da a uno el análisis cuantitativo del mar sin ningún error. En forma similar, el ser viviente ordinario es parte o porción de Dios, así que mediante el análisis de los seres vivientes podemos comenzar a entender a Dios. ', 

' Cuando uno está condicionado, piensa en términos de dualidades tales como calor y frío, dolor y placer. Pero cuando uno está liberado, no tiene esos pensamientos condicionados. Vida espiritual significa quedar libre de condicionamiento —llegar a la etapa brahma-bhuta—. Ésa es la perfección de la vida. ', 

' El movimiento de conciencia de Krishna no es un movimiento religioso de tipo sentimental y falso. Es un movimiento científico, destinado a aliviar el sufrimiento humano. ', 

' Nuestra sociedad materialista, sumida en la ignorancia, ha hecho que prácticamente sea un tabú investigar acerca de nuestro verdadero yo superior. Al contrario, empleamos nuestro valioso tiempo en mantener, adornar y mimar el cuerpo, sólo para provecho de él. ', 

' Si queremos servir a un árbol, por ejemplo, debemos regar la raíz. Poco se gana con regar las hojas, las ramas y las ramitas. Si se sirve a la Suprema Personalidad de Dios, quedarán automáticamente satisfechas todas las demás partes integrales. ', 

' El coche de primera clase de un tren es, desde luego, muy confortable, pero, ¿de qué sirve un compartimento con aire acondicionado si el tren no se mueve hacia su destino? La civilización contemporánea está demasiado interesada en lograr que el cuerpo material se sienta cómodo. Nadie tiene información sobre el verdadero destino de la vida, que consiste en regresar a Dios. ', 

' Para dar el mejor uso a una mala compra, debemos espiritualizar cien por cien nuestra existencia material. El hierro no es fuego, pero puede volverse fuego en virtud del contacto constante con el fuego. De forma similar, es posible desapegarse de las actividades materiales mediante las actividades espirituales, no mediante la inercia materia ', 

' Siendo entidades vivientes falibles, tenemos dos fases de existencia. Una se denomina existencia material, la cual está llena de los sufrimientos del nacimiento, la muerte, la vejez y las enfermedades, y la otra se denomina existencia espiritual, en la cual hay una vida espiritual incesante de eternidad, bienaventuranza y conocimiento. ', 

' En lo que atañe a la religión cristiana, hay suficientes oportunidades para comprender a Dios, pero nadie las está aprovechando. Por ejemplo, en la Biblia se encuentra el mandamiento «No matarás», pero los cristianos han construido los mejores mataderos del mundo. ', 

' Quienquiera que enseñe la manera de conocer a Dios y amarlo es un maestro espiritual. ', 

' Debemos ser estudiantes serios para entender quién es Dios y cómo amarlo. De lo contrario, sólo perderemos el tiempo ', 

' Dios da a cada quien lo que necesita, incluso a los que no siguen ninguna religión. ', 

' Asimismo, la Bhagavad-Gita define cuatro clases de hombres en la sociedad: la clase de los hombres sumamente inteligentes, la clase de los administradores, la clase de los hombres productivos, y los trabajadores comunes. Estas divisiones son naturales. ', 

' Por consiguiente, Dios tiene muchos nombres según Sus actividades, pero recibe el nombre de «Krishna» porque posee muchísimas opulencias y porque con esas opulencias atrae a todos. Las Escrituras védicas afirman que Dios tiene muchos nombres, pero que «Krishna» es el principal de ellos. ', 

' En verdad, los supuestos vivos también están muertos, porque este cuerpo es simplemente una masa de materia; tan pronto como el alma abandona el supuesto cuerpo hermoso de una mujer, a nadie le interesará verlo. El verdadero factor, la verdadera fuerza atractiva, es el alma espiritual. ', 

' No es posible entender a Dios con nuestras propias especulaciones, pues Dios es ilimitado y nosotros somos limitados. ', 

' Puede que no seamos perfectos, pero nuestro conocimiento es perfecto porque lo recibimos de la fuente perfecta. El objetivo del movimiento para la conciencia de Krishna es dar conocimiento perfecto a la sociedad humana. ', 

' El primer síntoma de aquel que está liberado es que es feliz. No es posible encontrarlo malhumorado. Tampoco tiene ninguna ansiedad. Nunca se agita “No tengo esta cosa”. ', 

' Debemos entender que nuestro sufrimiento se debe a nuestra actividad pecaminosa y la actividad pecaminosa se debe a nuestra ignorancia. Los pecados o transgresiones, son cometidos por aquellos que son ignorantes. ', 

' Ni debemos considerarnos hindúes, musulmanes o cristianos. Estas son designaciones corporales. Todos somos espíritu puro, parte y porción del Supremo. Dios es pavitram, puro, y también somos puros. ', 

' Sólo los tontos tratan de ajustarse a este mundo; el problema real es como salirse de él. ', 

' Por definición, religión es aquella que nos conecta con Dios. Si esta no es capaz de conectarnos con Dios no es religión. Religión significa alcanzar a Dios, entender a Dios y establecer una relación con Dios. ', 

' No es posible manufacturar una religión. Una religión verdadera debe venir de una fuente autorizada, y esa fuente es Dios o su representante. ', 

' Pensando que viviremos para siempre, continuamos haciendo cualquier cosa que queramos, sintiendo que nunca seremos responsables. Esta es una vida muy riesgosa, y es la parte más densa de la ilusión. ', 

' La materia no puede actuar independiente o automáticamente. Las máquinas pueden estar construidas muy maravillosamente, pero a menos que un hombre toque esa máquina, esta no puede trabajar. ¿Y qué es ese hombre? El es una chispa espiritual ', 

' Si ponemos una carta en el correo es autorizado. Similarmente, si adoramos una imagen autorizada de Dios, nuestra fe tendrá algún efecto. ', 

' Justo como nuestro espíritu está presente dentro del cuerpo, el Señor está presente dentro del universo como Paramatma. ', 

' En el mundo occidental se han popularizado muchos sistemas de yoga, especialmente en este siglo, pero ninguno de ellos ha enseñado la perfección del yoga realmente. ', 

' Siempre estamos pensando que cambiando nuestra situación podremos superar nuestra agitación mental, y creemos que cuando alcancemos un cierto punto, desaparecerán todas las agitaciones mentales. ', 

' Nuestro dilema consiste en que estamos tratando siempre de resolver nuestros problemas, pero este universo está hecho de tal manera que no llegamos nunca a resolverlos. ', 

' Es un hecho, sin duda, el que la mente nos esté diciendo siempre que vayamos aquí, o allí, que hagamos esto o lo otro; siempre nos está diciendo de qué lado hemos de volvernos. Así pues, la esencia del sistema de yoga es el control de la agitada mente. ', 

' En la medida en que la mente se absorbe en Krishna, así se alcanza la perfección del yoga. ', 

' De manera que la gente paga dinero para asistir a alguna clase de ejercicios de gimnasia y respiración profunda, y están contentos si creen que pueden alargar su vida unos pocos años o disfrutar mejor de la vida sexual. Pero debemos comprender que esto no es el verdadero sistema de yoga. ', 

' En cambio, todas las perfecciones de ese sistema pueden alcanzarse mediante el bhakti-yoga, el sublime proceso de la conciencia de Krishna, específicamente el mantra-yoga, la glorificación de Sri Krishna mediante el canto de Hare Krishna. ', 

' Krishna significa «supremo atractivo». A menos que Dios sea el supremo atractivo, ¿cómo puede ser Dios? De modo que Dios tiene que atraer, y atraer a todos. Por lo tanto, si Dios tiene un nombre, o si quieres darle un nombre a Dios, solo le puedes llamar «Krishna». ', 

' El principio védico consiste en reducir los apegos, no en aumentarlos. Este sistema se llama varnasrama-dharma. En el sistema de la India hay varnas y asramas: cuatro órdenes sociales y cuatro órdenes espirituales. ', 

' Por esto hemos empezado este movimiento para la conciencia de Krishna, para educar a la gente en los principios esenciales de la vida espiritual. No se trata de un movimiento religioso sectario. Es un movimiento cultural para el beneficio de todos. ', 

' Ir de regreso al hogar, de vuelta a Dios. Ése es el verdadero objetivo de la vida. El agua del mar forma nubes. Las nubes derraman el agua en forma de lluvia, y su verdadero objetivo es fluir por río abajo y entrar de nuevo en el mar. Nosotros venimos de Dios, y ahora estamos enredados en la vida material. De modo que nuestro objetivo debe ser liberarnos de esta situación de enredo e ir de regreso al hogar, de vuelta a Dios. ', 

' Estás cubierto con un vestido, con una camisa. Cuando la camisa ya no se puede utilizar, la cambias. Del mismo modo, este cuerpo es como una camisa. Cuando ya no funciona, tenemos que cambiarlo. ', 

' Dios también está en el interior. Dios está en todas partes. Dios está en el interior y también fuera. Hay que saber eso. Dios está en el corazón de todos. Dios también está en el interior de todos los átomos. ', 

' Por ejemplo, de noche, cuando el Sol está fuera de tu vista, no puedes verlo mediante tu linterna, ni con la ayuda de ninguna luz. Pero por la mañana puedes ver el Sol de un modo automático, sin ninguna linterna. Análogamente, tienes que crear una situación, tienes que ponerte en una situación en la que Dios se revele. ', 

' Si complaces al representante de Dios, automáticamente Dios Se siente complacido, y de este modo puedes verle directamente. ', 

' Sí, el gurú es el representante de Dios. El gurú es la manifestación externa de Krishna. El gurú debe provenir de una sucesión discipular, y tiene que haber aprendido a fondo los Vedas de labios de su maestro espiritual. Por lo general, la característica de un gurú es que es un devoto perfecto, eso es todo. ', 

' Pero los hijos ya mayores no deben pedir al padre; por el contrario, tienen que estar dispuestos a servir al padre. Eso es bhakti (devoción). ', 

' Muchas veces doy el ejemplo del tornillo, que separado de la máquina no tiene ningún valor. Pero cuando ese mismo tornillo forma parte de nuevo de la máquina, tiene valor. Análogamente, nosotros somos partes integrales de Dios. De modo que sin Dios, ¿de qué valemos? ¡De nada! ', 

' Si no curas una enfermedad, por ejemplo, puede provocarte muchos problemas. Del mismo modo, si no purificas tu existencia, entonces tendrás que transmigrar de un cuerpo a otro. ', 

' Los placeres espirituales vienen cuando deseas complacer a Krishna. Eso es placer espiritual. ', 

' Yo digo «mi mano», pero no digo «yo, la mano». Como es «mi mano», yo soy diferente de la mano, pues soy el propietario.No existe nadie en toda la creación que pueda decir que no está controlado. Todo el mundo, por importante o poderoso que sea, tiene un controlador por encima de él. Krishna, no obstante, no tiene controlador; por lo tanto, Él es Dios.', 

' Un buen padre y una buena madre nunca mienten cuando su hijo les hace preguntas; ellos dan información exacta y correcta. De modo similar, si obtenemos información espiritual de labios de una autoridad, y si la autoridad no es un engañador, entonces nuestro conocimiento es perfecto. Pero si intentamos llegar a conclusiones por medio de nuestros propios poderes de especulación, estaremos sujetos a cometer errores. ', 

' Desgraciadamente, nuestra enfermedad consiste en que somos rebeldes: de modo espontáneo, nos oponemos a la autoridad. Pero a pesar de que decimos que no queremos autoridad, la naturaleza es tan fuerte que impone su autoridad sobre nosotros. ', 

' De forma similar, yo no puedo evadir la ley de Dios. No es posible. Puedo engañar a los demás, hurtar y esconderme, salvándome así del castigo de la ley del Estado, pero no puedo salvarme de la ley superior, la ley de la naturaleza. ', 

' Si queremos disfrutar de la vida olvidando a Krishna, olvidando a Dios, Krishna nos dará todo lo necesario para poder olvidar, y si queremos disfrutar de la vida con conciencia de Krishna, Krishna nos dará la oportunidad de progresar en el cultivo de conciencia de Krishna. Eso queda en nuestras manos. ', 

' Ni nacemos, ni morimos La aceptación de la cadena del nacimiento y la muerte es una condición enferma del alma. El alma no tiene nacimiento ni muerte, ni ninguna enfermedad, debido a que es espíritu. ', 

' Cada uno de nosotros está abandonando el cuerpo gradualmente. La última fase del abandono de este cuerpo se denomina muerte. ', 

' Por lo tanto, tienen que ser educados para que escojan un líder que sea consciente de Dios, que sea verdaderamente capacitado para ser un líder. Entonces ellos serán felices. De otra manera, continuarán eligiendo un bribón y rechazándolo, eligiendo otro sinvergüenza y rechazándolo y así sucesivamente. ', 

' No está en su poder cambiar las leyes de la naturaleza. Realmente cada uno está siendo controlado por la naturaleza material a cada momento. Así que una persona inteligente pregunta cómo salir de esta naturaleza material, como poner fin al sufrimiento de los repetidos nacimientos, vejez, enfermedad y muerte ', 

' Si simplemente olvidan su verdadero asunto espiritual para mejorar su condición material: ¿es eso inteligencia? ', 

' Así que, aquí estaba este hombre expertamente construyendo la intrincada armazón de hierro de algún rascacielos. Y, sin embargo, él era absolutamente inconsciente de su ser mismo, inconsciente de que él mismo es el residente espiritual dentro de la armazón del cuerpo material. Estaba equivocadamente tomándose a sí mismo como la armazón corporal, tan neciamente como si creyera ser el rascacielos.', 

'¡Cuánto tiempo derrochó el constructor del rascacielos! En vez de centrar su vida en Dios, no, él la centró en algún enorme montón de concreto. Y ahora él solo permanece en una fotografía del vestíbulo. ', 

' Si los seres humanos son forzados a quedarse en la oscuridad como los animales, eso es una civilización peligrosa. Negar al alma su invaluable oportunidad de llegar a realizar a Dios y regresar al mundo espiritual. Por tanto, esta así llamada civilización moderna está manteniendo a toda la humanidad en desgracia. ', 

' ¿Por qué tantas ansiedades? Ellos están aferrándose muy firmemente a algo que no permanecerá, es decir, este cuerpo material. Toda nuestra ansiedad se debe al apego desmedido a este cuerpo. ', 

' Así que este conocimiento espiritual es la ciencia más grande. Pero tristemente, estos grandes educadores y líderes no la conocen. En vez de comprender que su modo de vida es una falacia, se preguntan si Dios, el alma, y la vida próxima son una falacia. ¿Esta es su inteligencia? ¡Qué bribonada! ', 
'Es mejor ser un ateo abierto que un hipócrita.',
'El comienzo de todo conocimiento proviene de la humildad.',
'Sé muy humilde cuando planees para que Krishna esté feliz contigo.',
'Cristo significa Krishna, amor por Dios, que tiene su cara ungida con tilak.',
'El verdadero Guru es el representante de Dios y él habla de Dios y nada más.',
'La paciencia es una cualificación en la ejecución exitosa del servicio devocional.',
'Un discípulo sirve al maestro espiritual con el único propósito de obtener instrucciones de él.',
'La indulgencia en matar animales para el gusto de la lengua es el tipo más grosero de ignorancia.',
'Si hay un Dios, debemos verlo y si hay un alma debemos percibirlo. De lo contrario, es mejor no creer.',
'Toda criatura viviente es el hijo del Señor Supremo, y no tolera que incluso las hormigas sean matadas.',
'Los libros son la base; la pureza es la fuerza; la predicación es la esencia; la utilidad es el principio.',
'Si vende diamantes, no puede esperar tener muchos clientes. Pero un diamante es un diamante, incluso si no hay clientes.',
'Éste es el gran problema: la gente da excesiva importancia a un cuerpo que, dentro de pocos años, será cambiado por otro.',
'La religión sin filosofía es sentimiento o, a veces, fanatismo, mientras que la filosofía sin religión es especulación mental.',
'Análogamente, aunque la Suprema Personalidad de Dios se expanda en ilimitadas formas, aun así sigue siendo la causa original de todas las causas.',
'No insista. No se trata de lo que desee. No se apegue a su cuerpo. En cuanto le llegue la muerte, sus parientes desecharán el cuerpo. No lo dude.',
'La presencia del sonido trascendental recibido del maestro espiritual, debe ser la guía paratoda la vida. Eso hará nuestra vida espiritual exitosa.',
'Jesucristo fue crucificado por los no devotos, pero sacrificó su vida por difundir la conciencia de Dios. Sería superficial entender que fue asesinado.',
'Un árbol lleno de frutas maduras se inclina naturalmente, debido al peso de las frutas y su disposición a hacer que sus frutos sean accesibles a los demás.',
'Soy exitoso en mi labor de prédica, debido a que no me he desviado ni una pulgada de lasinstrucciones de mi maestro espiritual, ésta es mi única cualificación.',
'Es imperativo que uno se acerque a un maestro espiritual, porque mediante esa asociación uno desarrolla proporcionalmente su conciencia hacia la Suprema Personalidad de Dios.',
'Cualquiera que sea firme en su determinación para la etapa avanzada de la realización espiritual y que pueda tolerar por igual los ataques de angustia y felicidad es ciertamente una persona elegible para la liberación.',
'El Señor tiene diferentes nombres de acuerdo con Sus diferentes actividades. Por ejemplo, su nombre es Madhusudana porque mató al demonio del nombre Madhu; Su nombre es Govinda porque da placer a las vacas y a los sentidos',
'La energía viviente es el elemento importante; su sola presencia hace que el cuerpo parezca estar vivo. Pero vivo o muerto, el cuerpo físico no es nada más que una combinación de materia muerta.',
'Quien canta el mantra Hare Kṛṣṇa, tanto si sabe de su valor como si no, se purificará de inmediato, del mismo modo que si tomamos una medicina poderosa, notaremos sus efectos, seamos o no conscientes de su potencia.',
''
];

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const factArr = data;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speakOutput = 'Hari bol, aquí tienes una cita de Srila Prabhupada:' + randomFact + '¿Quieres otra frase?';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
                        .withSimpleCard("Srila Prabhupada",
                        randomFact)
            .getResponse();
    }
};
const PrabhupadaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const factArr = data;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speakOutput = 'Hari bol, aquí tienes una cita de Srila Prabhupada:' + randomFact + '¿Deseas otra frase?';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .withSimpleCard("Srila Prabhupada",
             randomFact)
            .getResponse();
    }
};
const YesIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.YesIntent';
    },
    handle(handlerInput) {
        const factArr = data;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speakOutput = 'Aqui está: ' + randomFact + '¿Quieres otra frase?';
        

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .withSimpleCard("Srila Prabhupada",
            randomFact)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const NoIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.NoIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Haribol, hasta pronto';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt(speakOutput)
            .getResponse();
    }
};
const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Alexa leerá una frase de Srila Prabupada al iniciar la skill';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Hari Bol';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse();
    }
};

// The intent reflector is used for interaction model testing and debugging.
// It will simply repeat the intent the user said. You can create custom handlers
// for your intents by defining them above, then also adding them to the request
// handler chain below.
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `activaste ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

// Generic error handling to capture any syntax or routing errors. If you receive an error
// stating the request handler chain is not found, you have not implemented a handler for
// the intent being invoked or included it in the skill builder below.
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`~~~~ Error handled: ${error.stack}`);
        const speakOutput = `Lo siento, tengo problemas en ejecutar lo que pediste, inténtalo nuevamente.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

// The SkillBuilder acts as the entry point for your skill, routing all request and response
// payloads to the handlers above. Make sure any new handlers or interceptors you've
// defined are included below. The order matters - they're processed top to bottom.
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        PrabhupadaIntentHandler,
        YesIntentHandler,
        NoIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler, // make sure IntentReflectorHandler is last so it doesn't override your custom intent handlers
    )
    .addErrorHandlers(
        ErrorHandler,
    )
    .lambda();
