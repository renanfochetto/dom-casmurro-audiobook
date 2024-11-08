import { Injectable } from '@angular/core';
import { AudioData } from '../interfaces/audiodata.interface';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  private audios: AudioData[] = [
    {
      src: '/assets/audio/domcasmurro01.mp3',
      titulo: 'Seção 1',
      subtitulo: 'Capítulos I ao V',
      leitor: 'Leni',
      numeroSecao: 1,
      texto: '/assets/texts/secao1.txt',
      tempo: '20min',
      capitulo: 'I\n' +
        '\n' +
        'Do titulo.\n' +
        '\n' +
        'Uma noite destas, vindo da cidade para o Engenho Novo, encontrei no\n' +
        'trem da Central um rapaz aqui do bairro, que eu conheço de vista e\n' +
        'de chapéo. Comprimentou-me, sentou-se ao pé de mim, falou da lua e\n' +
        'dos ministros, e acabou recitando-me versos. A viagem era curta, e os\n' +
        'versos póde ser que não fossem inteiramente maus. Succedeu, porém, que\n' +
        'como eu estava cançado, fechei os olhos tres ou quatro vezes; tanto\n' +
        'bastou para que elle interrompesse a leitura e mettesse os versos no\n' +
        'bolso.\n' +
        '\n' +
        '--Continue, disse eu accordando.\n' +
        '\n' +
        '--Já acabei, murmurou elle.\n' +
        '\n' +
        '--São muito bonitos.\n' +
        '\n' +
        'Vi-lhe fazer um gesto para tiral-os outra vez do bolso, mas não passou\n' +
        'do gesto; estava amuado. No dia seguinte entrou a dizer de mim nomes\n' +
        'feios, e acabou alcunhando-me _Dom Casmurro._ Os visinhos, que não\n' +
        'gostam dos meus habitos reclusos e calados, deram curso á alcunha, que\n' +
        'afinal pegou. Nem por isso me zanguei. Contei a anecdota aos amigos da\n' +
        'cidade, e elles, por graça, chamam-me assim, alguns em bilhetes: «Dom\n' +
        'Casmurro, domingo vou jantar com você.»--«Vou para Petropolis, Dom\n' +
        'Casmurro; a casa é a mesma da Rhenania; vê se deixas essa caverna do\n' +
        'Engenho Novo, e vae lá passar uns quinze dias commigo.»--«Meu caro Dom\n' +
        'Casmurro, não cuide que o dispenso do theatro amanhã; venha e dormirá\n' +
        'aqui na cidade; dou-lhe camarote, dou-lhe chá, dou-lhe cama; só não lhe\n' +
        'dou moça.»\n' +
        '\n' +
        'Não consultes diccionarios. _Casmurro_ não está aqui no sentido que\n' +
        'elles lhe dão, mas no que lhe poz o vulgo de homem calado e mettido\n' +
        'comsigo. _Dom_ veiu por ironia, para attribuir-me fumos de fidalgo.\n' +
        'Tudo por estar cochilando! Tambem não achei melhor titulo para a minha\n' +
        'narração; se não tiver outro d\'aqui até ao fim do livro, vae este\n' +
        'mesmo. O meu poeta do trem ficará sabendo que não lhe guardo rancor.\n' +
        'E com pequeno esforço, sendo o titulo seu, poderá cuidar que a obra\n' +
        'é sua. Ha livros que apenas terão isso dos seus autores; alguns nem\n' +
        'tanto.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'II.\n' +
        '\n' +
        'Do livro.\n' +
        '\n' +
        'Agora que expliquei o titulo, passo a escrever o livro. Antes disso,\n' +
        'porém, digamos os motivos que me põem a penna na mão.\n' +
        '\n' +
        'Vivo só, com um creado. A casa em que moro é propria; fil-a\n' +
        'construir de proposito, levado de um desejo tão particular que me\n' +
        'vexa imprimil-o, mas vá lá. Um dia, ha bastantes annos, lembrou-me\n' +
        'reproduzir no Engenho Novo a casa em que me criei na antiga rua de\n' +
        'Matacavallos, dando-lhe o mesmo aspecto e economia daquella outra,\n' +
        'que desappareceu. Constructor e pintor entenderam bem as indicações\n' +
        'que lhes fiz: é o mesmo predio assobradado, tres janellas de frente,\n' +
        'varanda ao fundo, as mesmas alcovas e salas. Na principal destas, a\n' +
        'pintura do tecto e das paredes é mais ou menos egual, umas grinaldas de\n' +
        'flores miudas e grandes passaros que as tomam nos bicos, de espaço a\n' +
        'espaço. Nos quatro cantos do tecto as figuras das estações, e ao centro\n' +
        'das paredes os medalhões de Cesar, Augusto, Nero e Massinissa, com os\n' +
        'nomes por baixo... Não alcanço a razão de taes personagens. Quando\n' +
        'fomos para a casa de Matacavallos, já ella estava assim decorada; vinha\n' +
        'do decennio anterior. Naturalmente era gosto do tempo metter sabor\n' +
        'classico e figuras antigas em pinturas americanas. O mais é tambem\n' +
        'analogo e parecido. Tenho chacarinha, flôres, legume, uma casuarina, um\n' +
        'poço e lavadouro. Uso louça velha e mobilia velha. Emfim, agora, como\n' +
        'outr\'ora, ha aqui o mesmo contraste da vida interior, que é pacata, com\n' +
        'a exterior, que é ruidosa.\n' +
        '\n' +
        'O meu fim evidente era atar as duas pontas da vida, e restaurar na\n' +
        'velhice a adolescencia. Pois, senhor, não consegui recompor o que foi\n' +
        'nem o que fui. Em tudo, se o rosto é egual, a physionomia é differente.\n' +
        'Se só me faltassem os outros, vá; um homem consola-se mais ou menos\n' +
        'das pessoas que perde; mas falto eu mesmo, e esta lacuna é tudo. O que\n' +
        'aqui está é, mal comparando, semelhante á pintura que se põe na barba e\n' +
        'nos cabellos, e que apenas conserva o habito externo, como se diz nas\n' +
        'autopsias; o interno não aguenta tinta. Uma certidão que me desse vinte\n' +
        'annos de edade poderia enganar os extranhos, como todos os documentos\n' +
        'falsos, mas não a mim. Os amigos que me restam são de data recente;\n' +
        'todos os antigos foram estudar a geologia dos campos santos. Quanto ás\n' +
        'amigas, algumas datam de quinze annos, outras de menos, e quasi todas\n' +
        'creem na mocidade. Duas ou tres fariam crer nella aos outros, mas a\n' +
        'lingua que falam obriga muita vez a consultar os diccionarios, e tal\n' +
        'frequencia é cançativa.\n' +
        '\n' +
        'Entretanto, vida differente não quer dizer vida peor; é outra cousa.\n' +
        'A certos respeitos, aquella vida antiga apparece-me despida de muitos\n' +
        'encantos que lhe achei; mas é tambem exacto que perdeu muito espinho\n' +
        'que a fez molesta, e, de memoria, conservo alguma recordação doce e\n' +
        'feiticeira. Em verdade, pouco appareco e menos falo. Distracções raras.\n' +
        'O mais do tempo é gasto em hortar, jardinar e ler; como bem e não durmo\n' +
        'mal.\n' +
        '\n' +
        'Ora, como tudo cança, esta monotonia acabou por exhaurir-me tambem.\n' +
        'Quiz variar, e lembrou-me escrever um livro. Jurisprudencia,\n' +
        'philosophia e politica acudiram-me, mas não me acudiram as forças\n' +
        'necessarias. Depois, pensei em fazer uma _Historia dos Suburbios_,\n' +
        'menos secca que as memorias do padre Luiz Gonçalves dos Santos,\n' +
        'relativas á cidade; era obra modesta, mas exigia documentos e datas,\n' +
        'como preliminares, tudo arido e longo. Foi então que os bustos pintados\n' +
        'nas paredes entraram a falar-me e a dizer-me que, uma vez que elles não\n' +
        'alcançavam reconstituir-me os tempos idos, pegasse da penna e contasse\n' +
        'alguns. Talvez a narração me désse a illusão, e as sombras viessem\n' +
        'perpassar ligeiras, como ao poeta, não o do trem, mas o do _Fausto: Ahi\n' +
        'vindes outra vez, inquietas sombras...?_\n' +
        '\n' +
        'Fiquei tão alegre com esta ideia, que ainda agora me treme a penna na\n' +
        'mão. Sim, Nero, Augusto, Massinissa, e tu, grande Cesar, que me incitas\n' +
        'a fazer os meus commentarios, agradeço-vos o conselho, e vou deitar ao\n' +
        'papel as reminiscencias que me vierem vindo. Deste modo, viverei o que\n' +
        'vivi, e assentarei a mão para alguma obra de maior tomo. Eia, comecemos\n' +
        'a evocação por uma celebre tarde de Novembro, que nunca me esqueceu.\n' +
        'Tive outras muitas, melhores, e peores, mas aquella nunca se me apagou\n' +
        'do espirito. É o que vás entender, lendo.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'III\n' +
        '\n' +
        'A denuncia.\n' +
        '\n' +
        'Ia a entrar na sala de visitas, quando ouvi proferir o meu nome e\n' +
        'escondi-me atraz da porta. A casa era a da rua de Matacavallos, o mez\n' +
        'Novembro, o anno é que é um tanto remoto, mas eu não hei de trocar as\n' +
        'datas á minha vida só para agradar ás pessoas que não amam historias\n' +
        'velhas; o anno era de 1857.\n' +
        '\n' +
        '--D. Gloria, a senhora persiste na ideia de metter o nosso Bentinho no\n' +
        'seminario? É mais que tempo, e já agora póde haver uma difficuldade.\n' +
        '\n' +
        '--Que difficuldade?\n' +
        '\n' +
        '--Uma grande difficuldade.\n' +
        '\n' +
        'Minha mãe quiz saber o que era. José Dias, depois de alguns instantes\n' +
        'de concentrarão, veiu ver se havia alguem no corredor; não deu por mim,\n' +
        'voltou e, abafando a voz, disse que a difficuldade estava na casa ao\n' +
        'pé, a gente do Padua.\n' +
        '\n' +
        '--A gente do Padua?\n' +
        '\n' +
        '--Ha algum tempo estou para lhe dizer isto, mas não me atrevia. Não\n' +
        'me parece bonito que o nosso Bentinho ande mettido nos cantos com a\n' +
        'filha do _Tartaruga_, e esta é a difficuldade, porque se elles pegam de\n' +
        'namoro, a senhora terá muito que lutar para separal-os.\n' +
        '\n' +
        '--Não acho. Mettidos nos cantos?\n' +
        '\n' +
        '--É um modo de falar. Em segredinhos, sempre juntos. Bentinho quasi\n' +
        'que não sae de lá. A pequena é uma desmiolada; o pae faz que não vê;\n' +
        'tomara elle que as cousas corressem de maneira, que... Comprehendo o\n' +
        'seu gesto; a senhora não crê em taes calculos, parece-lhe que todos têm\n' +
        'a alma candida...\n' +
        '\n' +
        '--Mas, Sr. José Dias, tenho visto os pequenos brincando, e nunca vi\n' +
        'nada que faça desconfiar. Basta a edade; Bentinho mal tem quinze annos.\n' +
        'Capitú fez quatorze á semana passada; são dous creançolas. Não se\n' +
        'esqueça que foram criados juntos, desde aquella grande enchente, ha\n' +
        'dez annos, em que a familia Padua perdeu tanta cousa; d\'ahi vieram as\n' +
        'nossas relações. Pois eu hei de crer...? Mano Cosme, você que acha?\n' +
        '\n' +
        'Tio Cosme respondeu com um «Ora!» que, traduzido em vulgar, queria\n' +
        'dizer: «São imaginações do José Dias; os pequenos divertem-se, eu\n' +
        'divirto-me; onde está o gamão?»\n' +
        '\n' +
        '--Sim, creio que o senhor está enganado.\n' +
        '\n' +
        '--Póde ser, minha senhora. Oxalá tenham razão; mas creia que não falei\n' +
        'senão depois de muito examinar...\n' +
        '\n' +
        '--Em todo caso, vae sendo tempo, interrompeu minha mãe; vou tratar de\n' +
        'mettel-o no seminario quanto antes.\n' +
        '\n' +
        '--Bem, uma vez que não perdeu a ideia de o fazer padre, tem-se ganho o\n' +
        'principal. Bentinho ha de satisfazer os desejos de sua mãe. E depois\n' +
        'a egreja brasileira tem altos destinos. Não esqueçamos que um bispo\n' +
        'presidiu a Constituinte, e que o padre Feijó governou o imperio...\n' +
        '\n' +
        '--Governou como a cara d\'elle! atalhou tio Cosme, cedendo a antigos\n' +
        'rancores politicos.\n' +
        '\n' +
        '--Perdão, doutor, não estou defendendo ninguem, estou citando. O que eu\n' +
        'quero é dizer que o clero ainda tem grande papel no Brasil.\n' +
        '\n' +
        '--Você o que quer é um capote; ande, vá buscar o gamão. Quanto ao\n' +
        'pequeno, se tem de ser padre, realmente é melhor que não comece a dizer\n' +
        'missa atraz das portas. Mas, olhe cá, mana Gloria, ha mesmo necessidade\n' +
        'de fazel-o padre?\n' +
        '\n' +
        '--É promessa, ha de cumprir-se.\n' +
        '\n' +
        '--Sei que você fez promessa... mas, uma promessa assim... não sei...\n' +
        'Creio que, bem pensado... Você que acha, prima Justina?\n' +
        '\n' +
        '--Eu?\n' +
        '\n' +
        '--Verdade é que cada um sabe melhor de si, continuou tio Cosme; Deus é\n' +
        'que sabe do todos. Comtudo, uma promessa de tantos annos... Mas, que\n' +
        'é isso, mana Gloria? Está chorando? Ora esta! Pois isto é cousa de\n' +
        'lagrimas?\n' +
        '\n' +
        'Minha mãe assoou-se sem responder. Prima Justina creio que se levantou\n' +
        'e foi ter com ella. Seguiu-se um alto silencio, durante o qual estive\n' +
        'a pique de entrar na sala, mas outra força maior, outra emoção... Não\n' +
        'pude ouvir as palavras que tio Cosme entrou a dizer. Prima Justina\n' +
        'exhortava: «Prima Gloria! prima Gloria!» José Dias desculpava-se: «Se\n' +
        'soubesse, não teria falado, mas falei pela veneração, pela estima, pelo\n' +
        'affecto, para cumprir um dever amargo, um dever amarissimo...»\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'IV\n' +
        '\n' +
        'Um dever amarissimo!\n' +
        '\n' +
        'José Dias amava os superlativos. Era um modo de dar feição monumental\n' +
        'ás ideias; não as havendo, servir a prolongar as phrases. Levantou-se\n' +
        'para ir buscar o gamão, que estava no interior da casa. Cosi-me muito á\n' +
        'parede, e vi-o passar com as suas calças brancas engommadas, presilhas,\n' +
        'rodaque e gravata de mola. Foi dos ultimos que usaram presilhas no Rio\n' +
        'de Janeiro, e talvez neste mundo. Trazia as calças curtas para que lhe\n' +
        'ficassem bem esticadas. A gravata de setim preto, com um aro de aço\n' +
        'por dentro, immobilisava-lhe o pescoço; era então moda. O rodaque de\n' +
        'chita, veste caseira o leve, parecia nelle uma casaca de cerimonia. Era\n' +
        'magro, chupado, com um principio de calva; teria os seus cincoenta e\n' +
        'cinco annos. Levantou-se com o passo vagaroso do costume, não aquelle\n' +
        'vagar arrastado dos preguiçosos, mas um vagar calculado e deduzido, um\n' +
        'syllogismo completo, a premissa antes da consequencia, a consequencia\n' +
        'antes da conclusão. Um dever amarissimo!\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'V\n' +
        '\n' +
        'O aggregado.\n' +
        '\n' +
        'Nem sempre ia naquelle passo vagaroso e rigido. Tambem se descompunha\n' +
        'em accionados, era muita vez rapido e lepido nos movimentos, tão\n' +
        'natural nesta como naquella maneira. Outrosim, ria largo, se era\n' +
        'preciso, de um grande riso sem vontade, mas communicativo, a tal ponto\n' +
        'as bochechas, os dentes, os olhos, toda a cara, todo a pessoa, todo o\n' +
        'mundo pareciam rir nelle. Nos lances graves, gravissimo.\n' +
        '\n' +
        'Era nosso aggregado desde muitos annos; meu pae ainda estava na\n' +
        'antiga fazenda de Itaguahy, e eu acabava de nascer. Um dia appareceu\n' +
        'alli vendendo-se por medico homeopatha; levava um _Manual_ e uma\n' +
        'botica. Havia então um andaço de febres; José Dias curou o feitor\n' +
        'e uma escrava, e não quiz receber nenhuma remuneração. Então meu\n' +
        'pae propoz-lhe ficar alli vivendo, com pequeno ordenado. José Dias\n' +
        'recusou, dizendo que era justo levar a saude á casa de sapé do pobre.\n' +
        '\n' +
        '--Quem lhe impede que vá a outras partes? Vá aonde quizer, mas fique\n' +
        'morando comnosco.\n' +
        '\n' +
        '--Voltarei daqui a tres mezes.\n' +
        '\n' +
        'Voltou dalli a duas semanas, acceitou casa e comida sem outro\n' +
        'estipendio, salvo o que quizessem dar por festas. Quando meu pae foi\n' +
        'eleito deputado e veiu para o Rio de Janeiro com a familia, elle veiu\n' +
        'tambem, e teve o seu quarto ao fundo da chacara. Um dia, reinando\n' +
        'outra vez febres em Itaguahy, disse-lhe meu pae que fosse ver a nossa\n' +
        'escravatura. José Dias deixou-se estar calado, suspirou e acabou\n' +
        'confessando que não era medico. Tomára este titulo para ajudar a\n' +
        'propaganda da nova escola, e não o fez sem estudar muito e muito; mas a\n' +
        'consciencia não lhe permittia acceitar mais doentes.\n' +
        '\n' +
        '--Mas, você curou das outras vezes.\n' +
        '\n' +
        '--Creio que sim; o mais acertado, porém, é dizer que foram os remedios\n' +
        'indicados nos livros. Elles, sim, elles, abaixo de Deus. Eu era um\n' +
        'charlatão... Não negue; os motivos do meu procedimento podiam ser e\n' +
        'eram dignos; a homeopathia é a verdade, e, para servir á verdade,\n' +
        'menti; mas é tempo de restabelecer tudo.\n' +
        '\n' +
        'Não foi despedido, como pedia então; meu pae já não podia dispensal-o.\n' +
        'Tinha o dom de se fazer acceito e necessario; dava-se por falta delle,\n' +
        'como de pessoa de familia. Quando meu pae morreu, a dôr que o pungiu\n' +
        'foi enorme, disseram-me, não me lembra. Minha mãe ficou-lhe muito\n' +
        'grata, e não consentiu que elle deixasse o quarto da chacara; ao setimo\n' +
        'dia, depois da missa, elle foi despedir-se della.\n' +
        '\n' +
        '--Fique, José Dias.\n' +
        '\n' +
        '--Obedeço, minha senhora.\n' +
        '\n' +
        'Teve um pequeno legado no testamento, uma apolice e quatro palavras de\n' +
        'louvor. Copiou as palavras, encaixilhou-as e pendurou-as no quarto,\n' +
        'por cima da cama. «Esta é a melhor apolice», dizia elle muita vez. Com\n' +
        'o tempo, adquiriu certa autoridade na familia, certa audiencia, ao\n' +
        'menos; não abusava, e sabia opinar obedecendo. Ao cabo, era amigo, não\n' +
        'direi optimo, mas nem tudo é optimo neste mundo. E não lhe supponhas\n' +
        'alma subalterna; as cortezias que fizesse vinham antes do calculo\n' +
        'que da indole. A roupa durava-lhe muito; ao contrario das pessoas\n' +
        'que enxovalham depressa o vestido novo, elle trazia o velho escovado\n' +
        'e liso, cirzido, abotoado, de uma elegancia pobre e modesta. Era\n' +
        'lido, posto que de atropello, o bastante para divertir ao serão e á\n' +
        'sobremesa, ou explicar algum phenomeno, falar dos effeitos do calor e\n' +
        'do frio, dos polos e de Robespierre. Contava muita vez uma viagem que\n' +
        'fizera á Europa, e confessava que a não sermos nós, já teria voltado\n' +
        'para lá; tinha amigos em Lisboa, mas a nossa familia, dizia elle,\n' +
        'abaixo de Deus, era tudo.\n' +
        '\n' +
        '--Abaixo ou acima? perguntou-lhe tio Cosme um dia.\n' +
        '\n' +
        '--Abaixo, repetiu José Dias cheio de veneração.\n' +
        '\n' +
        'E minha mãe, que era religiosa, gostou de ver que elle punha Deus no\n' +
        'devido logar, e sorriu approvando. José Dias agradeceu de cabeça. Minha\n' +
        'mãe dava-lhe de quando em quando alguns cobres. Tio Cosme, que era\n' +
        'advogado, confiava-lhe a copia de papeis de autos.\n'
    },
    {
      src: '/assets/audio/domcasmurro02.mp3',
      titulo: 'Seção 2',
      subtitulo: 'Capítulos VI ao X',
      leitor: 'Rachel Moraes',
      numeroSecao: 2,
      texto: '/assets/texts/secao2.txt',
      tempo: '17min',
      capitulo: 'VI\n' +
        '\n' +
        'Tio Cosme.\n' +
        '\n' +
        'Tio Cosme vivia com minha mãe, desde que ella enviuvou. Já então era\n' +
        'viuvo, como prima Justina; era a casa dos tres viuvos.\n' +
        '\n' +
        'A fortuna troca muita vez as mãos á natureza. Formado para as serenas\n' +
        'funccões do capitalismo, tio Cosme não enriquecia no fòro: ia comendo.\n' +
        'Tinha o escriptorio na antiga rua das Violas, perto do jury, que era no\n' +
        'extincto Aljube. Trabalhava no crime. José Dias não perdia as defesas\n' +
        'oraes de tio Cosme. Era quem lhe vestia e despia a toga, com muitos\n' +
        'comprimentos no fim. Em casa, referia os debates. Tio Cosme, por mais\n' +
        'modesto que quizesse ser, sorria de persuasão.\n' +
        '\n' +
        'Era gordo e pesado, tinha a respiração curta e os olhos dorminhocos.\n' +
        'Uma das minhas recordações mais antigas era vel-o montar todas as\n' +
        'manhãs a besta que minha mãe lhe deu e que o levava ao escriptorio.\n' +
        'O preto que a tinha ido buscar á cocheira, segurava o freio, emquanto\n' +
        'elle erguia o pé e pousava no estribo; a isto seguia-se um minuto de\n' +
        'descanço ou reflexão. Depois, dava um impulso, o primeiro, o corpo\n' +
        'ameaçava subir, mas não subia; segundo impulso, egual effeito. Emfim,\n' +
        'após alguns instantes largos, tio Cosme enfeixava todas as forças\n' +
        'physicas e moraes, dava o ultimo surto da terra, e desta vez caía em\n' +
        'cima do selim. Raramente a besta deixava de mostrar por um gesto que\n' +
        'acabava de receber o mundo. Tio Cosme accommodava as carnes, e a besta\n' +
        'partia a trote.\n' +
        '\n' +
        'Tambem não me esqueceu o que elle me fez uma tarde. Posto que nascido\n' +
        'na roça (donde vim com dous annos) e apezar dos costumes do tempo,\n' +
        'eu não sabia montar, e tinha medo ao cavallo. Tio Cosme pegou em mim\n' +
        'e escanchou-me em cima da besta. Quando me vi no alto (tinha nove\n' +
        'annos), sósinho e desamparado, o chão lá embaixo, entrei a gritar\n' +
        'desesperadamente: «Mamãe! mamãe!» Ella acudiu pallida e tremula, cuidou\n' +
        'que me estivessem matando, apeou-me, affagou-me, emquanto o irmão\n' +
        'perguntava:\n' +
        '\n' +
        '--Mana Gloria, pois um tamanhão destes tem medo de besta mansa?\n' +
        '\n' +
        '--Não está acostumado.\n' +
        '\n' +
        '--Deve acostumar-se. Padre que seja, se fôr vigario na roça, é preciso\n' +
        'que monte a cavallo; e, aqui mesmo, ainda não sendo padre, se quizer\n' +
        'florear como os outros rapazes, e não souber, ha de queixar-se de você,\n' +
        'mana Gloria.\n' +
        '\n' +
        '--Pois que se queixe; tenho medo.\n' +
        '\n' +
        '--Medo! Ora, medo!\n' +
        '\n' +
        'A verdade é que eu só vim a apprender equitação mais tarde, menos por\n' +
        'gosto que por vergonha de dizer que não sabia montar. «Agora é que\n' +
        'elle vae namorar devéras», disseram quando eu comecei as licções. Não\n' +
        'se diria o mesmo de tio Cosme. Nelle era velho costume e necessidade.\n' +
        'Já não dava para namoros. Contam que, em rapaz, foi acceito de muitas\n' +
        'damas, além de partidario exaltado; mas os annos levaram-lhe o mais\n' +
        'do ardor politico e sexual, e a gordura acabou com o resto de ideias\n' +
        'publicas e especificas. Agora só cumpria as obrigações do officio e\n' +
        'sem amor. Nas horas de lazer vivia olhando ou jogava. Uma ou outra vez\n' +
        'dizia pilherias.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'VII\n' +
        '\n' +
        'D. Gloria.\n' +
        '\n' +
        'Minha mãe era boa creatura. Quando lhe morreu o marido, Pedro de\n' +
        'Albuquerque Santiago, contava trinta e um annos de edade, e podia\n' +
        'voltar para Itaguahy. Não quiz; preferiu ficar perto da egreja em que\n' +
        'meu pae fòra sepultado. Vendeu a fazendola e os escravos, comprou\n' +
        'alguns que pôz ao ganho ou alugou, uma duzia de predios, certo numero\n' +
        'de apolices, e deixou-se estar na casa de Matacavallos, onde vivera\n' +
        'os dous ultimos annos de casada. Era filha de uma senhora mineira,\n' +
        'descendente de outra paulista, a familia Fernandes.\n' +
        '\n' +
        'Ora, pois, naquelle anno da graça de 1857, D. Maria da Gloria Fernandes\n' +
        'Santiago contava quarenta e dous annos de edade. Era ainda bonita e\n' +
        'moça, mas teimava em esconder os saldos da juventude, por mais que a\n' +
        'natureza quizesse preserval-a da acção do tempo. Vivia mettida em um\n' +
        'eterno vestido escuro, sem adornos, com um chale preto, dobrado em\n' +
        'triangulo e abrochado ao peito por um camafeu. Os cabellos, em bandós,\n' +
        'eram apanhados sobre a nuca por um velho pente de tartaruga; alguma vez\n' +
        'trazia touca branca de fólhos. Lidava assim, com os seus sapatos de\n' +
        'cordavão rasos e surdos, a um lado e outro, vendo e guiando os serviços\n' +
        'todos da casa inteira, desde manhã até á noite.\n' +
        '\n' +
        'Tenho alli na parede o retrato della, ao lado do do marido, taes\n' +
        'quaes na outra casa. A pintura escureceu muito, mas ainda dá ideia de\n' +
        'ambos. Não me lembra nada delle, a não ser vagamente que era alto e\n' +
        'usava cabelleira grande; o retrato mostra uns olhos redondos, que me\n' +
        'acompanham para todos os lados, effeito da pintura que me assombrava em\n' +
        'pequeno. O pescoço sae de uma gravata preta de muitas voltas, a cara\n' +
        'é toda rapada, salvo um trechosinho pegado ás orelhas. O de minha mãe\n' +
        'mostra que era linda. Contava então vinte annos, e tinha uma flôr entre\n' +
        'os dedos. No painel parece offerecer a flôr ao marido. O que se lè na\n' +
        'cara do ambos é que, se a felicidade conjugal póde ser comparada á\n' +
        'sorte grande, elles a tiraram no bilhete comprado de sociedade.\n' +
        '\n' +
        'Concluo que não se devem abolir as loterias. Nenhum premiado as accusou\n' +
        'ainda de immoraes, como ninguem tachou de má a boceta de Pandora, por\n' +
        'lhe ter tirado a esperança no fundo; em alguma parte ha de ella ficar.\n' +
        'Aqui os tenho aos dous bem casados de outr\'ora, os bem-amados, os\n' +
        'bem-aventurados, que se foram desta para a outra vida, continuar um\n' +
        'sonho provavelmente. Quando a loteria e Pandora me aborrecem, ergo os\n' +
        'olhos para elles, e esqueço os bilhetes brancos e a boceta fatidica.\n' +
        'São retratos que valem por originaes. O de minha mãe, estendendo a flôr\n' +
        'ao marido, parece dizer: «Sou toda sua, meu guapo cavalheiro!» O de meu\n' +
        'pae, olhando para a gente, faz este commentario: «Vejam como esta moça\n' +
        'me quer...» Se padeceram molestias, não sei, como não sei se tiveram\n' +
        'desgostos: era creança e comecei por não ser nascido. Depois da morte\n' +
        'delle, lembra-me que ella chorou muito; mas aqui estão os retratos de\n' +
        'ambos, sem que o encardido do tempo lhes tirasse a primeira expressão.\n' +
        'São como photographias instantaneas da felicidade.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'VIII\n' +
        '\n' +
        'É tempo!\n' +
        '\n' +
        'Mas é tempo de tomar áquella tarde de Novembro, uma tarde clara e\n' +
        'fresca, socegada como a nossa casa e o trecho da rua em que moravamos.\n' +
        'Verdadeiramente foi o principio da minha vida; tudo o que succedera\n' +
        'antes foi como o pintar e vestir das pessoas que tinham de entrar em\n' +
        'scena, o accender das luzes, o preparo das rabecas, a symphonia...\n' +
        'Agora é que eu ia começar a minha opera. «A vida é uma opera,» dizia-me\n' +
        'um velho tenor italiano que aqui viveu e morreu... E explicou-me um dia\n' +
        'a definição, em tal maneira que me fez crer nella. Talvez valha a pena\n' +
        'dal-a; é só um capitulo.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'IX\n' +
        '\n' +
        'A opera.\n' +
        '\n' +
        'Já não tinha voz, mas teimava em dizer que a tinha. «O desuso é que\n' +
        'me faz mal», accrescentava. Sempre que uma companhia nova chegava da\n' +
        'Europa, ia ao empresario e expunha-lhe todas as injustiças da terra e\n' +
        'do ceu; o empresario commettia mais uma, e elle saía a bradar contra\n' +
        'a iniquidade. Trazia ainda os bigodes dos seus papeis. Quando andava,\n' +
        'apezar de velho, parecia cortejar uma princeza de Babylonia. Ás vezes,\n' +
        'cantarolava, sem abrir a bocca, algum trecho ainda mais edoso que elle\n' +
        'ou tanto; vozes assim abafadas são sempre possiveis. Vinha aqui jantar\n' +
        'commigo algumas vezes. Uma noite, depois de muito Chianti, repetiu-me\n' +
        'a definição do costume, e como eu lhe dissesse que a vida tanto podia\n' +
        'sor uma opera, como uma viagem de mar ou uma batalha, abanou a cabeça e\n' +
        'replicou:\n' +
        '\n' +
        '--A vida é uma opera e uma grande opera. O tenor e o barytono lutam\n' +
        'pelo soprano, em presença do baixo e dos comprimarios, quando não são o\n' +
        'soprano e o contralto que lutam pelo tenor, em presença do mesmo baixo\n' +
        'e dos mesmos comprimarios. Ha córos numerosos, muitos bailados, e a\n' +
        'orchestração é excellente...\n' +
        '\n' +
        '--Mas, meu caro Marcolini...\n' +
        '\n' +
        '--Quê...?\n' +
        '\n' +
        'E, depois de beber um gole de licor, pousou o calix, e expoz-me a\n' +
        'historia da creação, com palavras que vou resumir.\n' +
        '\n' +
        'Deus é o poeta. A musica é de Satanaz, joven maestro de muito futuro,\n' +
        'que apprendeu no conservatorio do ceu. Rival de Miguel, Raphael e\n' +
        'Gabriel, não tolerava a precedencia que elles tinham na distribuição\n' +
        'dos premios. Póde ser tambem que a musica em demasia doce e mystica\n' +
        'daquelles outros condiscipulos fosse aborrecivel ao seu genio\n' +
        'essencialmente tragico. Tramou uma rebellião que foi descoberta a\n' +
        'tempo, e elle expulso do conservatorio. Tudo se teria passado sem mais\n' +
        'nada, se Deus não houvesse escripto um libretto de opera, do qual\n' +
        'abrira mão, por entender que tal genero de recreio era improprio da\n' +
        'sua eternidade. Satanaz levou o manuscripto comsigo para o inferno.\n' +
        'Com o fim de mostrar que valia mais que os outros,--e acaso para\n' +
        'reconciliar-se com o ceu--compoz a partitura, e logo que a acabou foi\n' +
        'leval-a ao Padre Eterno.\n' +
        '\n' +
        '--Senhor, não desapprendi as licções recebidas, disse-lhe. Aqui tendes\n' +
        'a partitura, escutai-a, emendai-a, fazei-a executar, e se a achardes\n' +
        'digna das alturas, admitti-me com ella a vossos pés...\n' +
        '\n' +
        '--Não, retorquiu o Senhor, não quero ouvir nada.\n' +
        '\n' +
        '--Mas, Senhor...\n' +
        '\n' +
        '--Nada! nada!\n' +
        '\n' +
        'Satanaz supplicou ainda, sem melhor fortuna, até que Deus, cançado e\n' +
        'cheio de misericordia, consentiu em que a opera fosse executada, mas\n' +
        'fóra do ceu. Creou um theatro especial, este planeta, e inventou uma\n' +
        'companhia inteira, com todas as partes, primarias e comprimarias, córos\n' +
        'e bailarinos.\n' +
        '\n' +
        '--Ouvi agora alguns ensaios!\n' +
        '\n' +
        '--Não, não quero saber de ensaios. Basta-me haver composto o libretto;\n' +
        'estou prompto a dividir comtigo os direitos de autor.\n' +
        '\n' +
        'Foi talvez um mal esta recusa; della resultaram alguns desconcertos\n' +
        'que a audiencia prévia e a collaboração amiga teriam evitado. Com\n' +
        'effeito, ha logares em que o verso vae para a direita e a musica para\n' +
        'a esquerda. Não falta quem diga que nisso mesmo está a belleza da\n' +
        'composição, fugindo á monotonia, e assim explicam o tercetto do Eden,\n' +
        'a aria de Abel, os córos da guilhotina e da escravidão. Não é raro que\n' +
        'os mesmos lances se reproduzam, sem razao sufficiente. Certos motivos\n' +
        'cançam á força de repetição. Tambem ha obscuridades; o maestro abusa\n' +
        'das massas choraes, encobrindo muita vez o sentido por um modo confuso.\n' +
        'As partes orchestraes são aliás tratadas com grande pericia. Tal é a\n' +
        'opinião dos imparciaes.\n' +
        '\n' +
        'Os amigos do maestro querem que difficilmente se possa achar obra\n' +
        'tão bem acabada. Um ou outro admitte certas rudezas e taes ou\n' +
        'quaes lacunas, mas com o andar da opera é provavel que estas sejam\n' +
        'preenchidas ou explicadas, e aquellas desapparecam inteiramente, não se\n' +
        'negando o maestro a emendar a obra onde achar que não responde de todo\n' +
        'ao pensamento sublime do poeta. Já não dizem o mesmo os amigos deste.\n' +
        'Juram que o libretto foi sacrificado, que a partitura corrompeu o\n' +
        'sentido da lettra, e, posto seja bonita em alguns logares, e trabalhada\n' +
        'com arte em outros, é absolutamente diversa e até contraria ao drama. O\n' +
        'grotesco, por exemplo, não está no texto do poeta; é uma excrescencia\n' +
        'para imitar as _Mulheres patuscas de Windsor._ Este ponto é contestado\n' +
        'pelos satanistas com alguma apparencia de razão. Dizem elles que, ao\n' +
        'tempo em que o joven Satanaz compoz a grande opera, nem essa farça nem\n' +
        'Shakespeare eram nascidos. Chegam a affirmar que o poeta inglez não\n' +
        'teve outro genio senão transcrever a lettra da opera, com tal arte\n' +
        'e fidelidade, que parece elle proprio o autor da composição; mas,\n' +
        'evidentemente, é um plagiario.\n' +
        '\n' +
        '--Esta peça, concluiu o velho tenor, durará emquanto durar o theatro,\n' +
        'não se podendo calcular em que tempo será elle demolido por utilidade\n' +
        'astronomica. O exito é crescente. Poeta e musico recebem pontualmente\n' +
        'os seus direitos autoraes, que não são os mesmos, porque a regra da\n' +
        'divisão é aquillo da Escriptura: «Muitos são os chamados, poucos os\n' +
        'escolhidos.» Deus recebe em ouro, Satanaz em papel.\n' +
        '\n' +
        '--Tem graça...\n' +
        '\n' +
        '--Graça? bradou elle com furia; mas aquietou-se logo, e replicou: Caro\n' +
        'Santiago, eu não tenho graça, eu tenho horror á graça. Isto que digo é\n' +
        'a verdade pura e ultima. Um dia, quando todos os livros forem queimados\n' +
        'por inuteis, ha de haver alguem, póde ser que tenor, e talvez italiano,\n' +
        'que ensine esta verdade aos homens. Tudo é musica, meu amigo. No\n' +
        'principio era o _dó_, e o _dó_ fez-se _ré_, etc. Este calix (e enchia-o\n' +
        'novamente) este calix é um breve estribilho. Não se ouve? Tambem não se\n' +
        'ouve o pau nem a pedra, mas tudo cabe na mesma opera...\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'X\n' +
        '\n' +
        'Acceito a theoria.\n' +
        '\n' +
        'Que é demasiada metaphysica para um só tenor, não ha duvida; mas a\n' +
        'perda da voz explica tudo, e ha philosophos que são, em resumo, tenores\n' +
        'desempregados.\n' +
        '\n' +
        'Eu, leitor amigo, acceito a theoria do meu velho Marcolini, não só pela\n' +
        'verosimilhança, que é muita vez toda a verdade, mas porque a minha vida\n' +
        'se casa bem á definição. Cantei um _duo_ ternissimo, depois um _trio_,\n' +
        'depois um _quatuor..._ Mas não adeantemos; vamos á primeira tarde, em\n' +
        'que eu vim a saber que já cantava, porque a denuncia de José Dias,\n' +
        'meu caro leitor, foi dada principalmente a mim. A mim é que elle me\n' +
        'denunciou.\n'
    },
    {
      src: '/assets/audio/domcasmurro03.mp3',
      titulo: 'Seção 3',
      subtitulo: 'Capítulos XI ao XV',
      leitor: 'Mayah',
      numeroSecao: 3,
      texto: '/assets/texts/secao3.txt',
      tempo: '25min',
      capitulo: 'XI\n' +
        '\n' +
        'A promessa.\n' +
        '\n' +
        'Tão depressa vi desapparecer o aggregado no corredor, deixei o\n' +
        'esconderijo, e corri á varanda do fundo. Não quiz saber de lagrimas nem\n' +
        'da causa que as fazia verter a minha mãe. A causa eram provavelmente os\n' +
        'seus projectos ecclesiasticos, e a occasião destes é a que vou dizer,\n' +
        'por ser já então historia velha; datava de dezeseis annos.\n' +
        '\n' +
        'Os projectos vinham do tempo em que fui concebido. Tendo-lhe nascido\n' +
        'morto o primeiro filho, minha mãe pegou-se com Deus para que o segundo\n' +
        'vingasse, promettendo, se fosse varão, mettel-o na egreja. Talvez\n' +
        'esperasse uma menina. Não disse nada a meu pae, nem antes, nem depois\n' +
        'de me dar á luz; contava fazel-o quando eu entrasse para a escola,\n' +
        'mas enviuvou antes disso. Viuva, sentiu terror de separar-se de mim;\n' +
        'mas era tão devota, tão temente a Deus, que buscou testemunhas da\n' +
        'obrigação, confiando a promessa a parentes e familiares. Unicamente,\n' +
        'para que nos separassemos o mais tarde possivel, fez-me apprender em\n' +
        'casa primeiras lettras, latim e doutrina, por aquelle padre Cabral,\n' +
        'velho amigo do tio Cosme, que ia lá jogar ás noites.\n' +
        '\n' +
        'Prazos largos são faceis de subscrever; a imaginação os faz infinitos.\n' +
        'Minha mãe esperou que os annos viessem vindo. Entretanto, ia-me\n' +
        'affeiçoando á ideia da egreja; brincos de creança, livros devotos,\n' +
        'imagens de santos, conversações de casa, tudo convergia para o altar.\n' +
        'Quando iamos á missa, dizia-me sempre que era para apprender a ser\n' +
        'padre, e que reparasse no padre, não tirasse os olhos do padre. Em\n' +
        'casa, brincava de missa,--um tanto ás escondidas, porque minha mãe\n' +
        'dizia que missa não era cousa de brincadeira. Arranjavamos um altar,\n' +
        'Capitú e eu. Ella servia de sacristão, e alteravamos o ritual, no\n' +
        'sentido do dividirmos a hostia entre nós; a hostia era sempre um\n' +
        'doce. No tempo em que brincavamos assim, era muito commum ouvir á\n' +
        'minha visinha: «Hoje ha missa?» Eu já sabia o que isto queria dizer,\n' +
        'respondia affirmativamente, e ia pedir hostia por outro nome. Voltava\n' +
        'com ella, arranjavamos o altar, engrolavamos o latim e precipitavamos\n' +
        'as cerimonias. _Dominus, non sum dignus..._ Isto, que eu devia dizer\n' +
        'tres vezes, penso que só dizia uma, tal era a golodice do padre e do\n' +
        'sacristão. Não bebiamos vinho nem agua; não tinhamos o primeiro, e a\n' +
        'segunda viria tirar-nos o gosto do sacrificio.\n' +
        '\n' +
        'Ultimamente não me falavam já do seminario, a tal ponto que eu suppunha\n' +
        'ser negocio findo. Quinze annos, não havendo vocação, pediam antes o\n' +
        'seminario do mundo que o de S. José. Minha mãe ficava muita vez a olhar\n' +
        'para mim, como alma perdida, ou pegava-me na mão, a pretexto de nada,\n' +
        'para apertal-a muito.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'XII\n' +
        '\n' +
        'Na varanda.\n' +
        '\n' +
        'Parei na varanda; ia tonto, atordoado, as pernas bambas, o coração\n' +
        'parecendo querer sair-me pela bocca fóra. Não me atrevia a descer á\n' +
        'chacara, e passar ao quintal visinho. Comecei a andar de um lado para\n' +
        'outro, estacando para amparar-me, e andava outra vez e estacava. Vozes\n' +
        'confusas repetiam o discurso do José Dias:\n' +
        '\n' +
        '«Sempre juntos...»\n' +
        '\n' +
        '«Em segredinhos...»\n' +
        '\n' +
        '«Se elles pegam de namoro...»\n' +
        '\n' +
        'Tijolos que pisei e repisei naquella tarde, columnas amarelladas que\n' +
        'me passastes á direita ou á esquerda, segundo eu ia ou vinha, em vós\n' +
        'me ficou a melhor parte da crise, a sensação de um goso novo, que me\n' +
        'envolvia em mim mesmo, e logo me dispersava, e me trazia arrepios, e\n' +
        'me derramava não sei que balsamo interior. Ás vezes dava por mim,\n' +
        'sorrindo, um ar do riso de satisfação, que desmentia a abominação do\n' +
        'meu peccado. E as vozes repetiam-se confusas:\n' +
        '\n' +
        '«Em segredinhos...»\n' +
        '\n' +
        '«Sempre juntos...»\n' +
        '\n' +
        '«Se elles pegam de namoro...»\n' +
        '\n' +
        'Um coqueiro, vendo-me inquieto e adivinhando a causa, murmurou de\n' +
        'cima de si que não era feio que os meninos de quinze annos andassem\n' +
        'nos cantos com as meninas de quatorze; ao contrario, os adolescentes\n' +
        'daquella edade não tinham outro officio, nem os cantos outra utilidade.\n' +
        'Era um coqueiro velho, e eu cria nos coqueiros velhos, mais ainda que\n' +
        'nos velhos livros. Passaros, borboletas, uma cigarra que ensaiava o\n' +
        'estio, toda a gente viva do ar era da mesma opinião.\n' +
        '\n' +
        'Com que então eu amava Capitú, e Capitú a mim? Realmente, andava cosido\n' +
        'ás saias della, mas não me occorria nada entre nós que fosse devéras\n' +
        'secreto. Antes della ir para o collegio, eram tudo travessuras de\n' +
        'creanca; depois que saiu do collegio, é certo que não restabelecemos\n' +
        'logo a antiga intimidade, mas esta voltou pouco a pouco, e no ultimo\n' +
        'anno era completa. Entretanto, a materia das nossas conversações era\n' +
        'a de sempre. Capitú chamava-me ás vezes bonito, mocetão, uma flòr;\n' +
        'outras pegava-me nas mãos para contar-me os dedos. E comecei a recordar\n' +
        'esses e outros gestos e palavras, o prazer que sentia quando ella\n' +
        'me passava a mão pelos cabellos, dizendo que os achava lindissimos.\n' +
        'Eu, sem fazer o mesmo aos della, dizia que os della eram muito mais\n' +
        'lindos que os meus. Então Capitú abanava a cabeça com uma grande\n' +
        'expressão de desengano e melancolia, tanto mais de espantar quanto que\n' +
        'tinha os cabellos realmente admiraveis; mas eu retorquia chamando-lhe\n' +
        'maluca. Quando me perguntava se sonhára com ella na vespera, e eu\n' +
        'dizia que não, ouvia-lhe contar que sonhára commigo, e eram aventuras\n' +
        'extraordinarias, que subiamos ao Corcovado pelo ar, que dansavamos na\n' +
        'lua, ou então que os anjos vinham perguntar-nos pelos nomes, afim de\n' +
        'os dar a outros anjos que acabavam de nascer. Em todos esses sonhos\n' +
        'andavamos unidinhos. Os que eu tinha com ella não eram assim, apenas\n' +
        'reproduziam a nossa familiaridade, e muita vez não passavam da simples\n' +
        'repetição do dia, alguma phrase, algum gesto. Tambem eu os contava.\n' +
        'Capitú um dia notou a differença, dizendo que os della eram mais\n' +
        'bonitos que os meus; eu, depois de certa hesitação, disse-lhe que eram\n' +
        'como a pessoa que sonhava... Fez-se còr de pitanga.\n' +
        '\n' +
        'Pois, francamente, só agora entendia a emoção que me davam essas e\n' +
        'outras confidencias. A emoção era doce e nova, mas a causa della\n' +
        'fugia-me, sem que eu a buscasse nem suspeitasse. Os silencios dos\n' +
        'ultimos dias, que me não descobriam nada, agora os sentia como signaes\n' +
        'de alguma cousa, e assim as meias palavras, as perguntas curiosas, as\n' +
        'respostas vagas, os cuidados, o gosto de recordar a infancia. Tambem\n' +
        'adverti que era phenomeno recente accordar com o pensamento em Capitú,\n' +
        'e escutal-a de memoria, e estremecer quando lhe ouvia os passos. Se\n' +
        'se falava nella, em minha casa, prestava mais altenção que d\'antes,\n' +
        'e, segundo era louvor ou critica, assim me trazia gosto ou desgosto\n' +
        'mais intensos que outr\'ora, quando eramos sómente companheiros de\n' +
        'travessuras. Cheguei a pensar nella durante as missas daquelle mez, com\n' +
        'intervallos, é verdade, mas com exclusivismo tambem.\n' +
        '\n' +
        'Tudo isto me era agora apresentado pela bocca de José Dias, que me\n' +
        'denunciara a mim mesmo, e a quem eu perdoava tudo, o mal que dissera,\n' +
        'o mal que fizera, e o que pudesse vir de um e do outro. Naquelle\n' +
        'instante, a eterna Verdade não valeria mais que elle, nem a eterna\n' +
        'Bondade, nem as demais Virtudes eternas. Em amava Capitú! Capitú\n' +
        'amava-me! E as minhas pernas andavam, desandavam, estacavam, tremulas\n' +
        'e crentes de abarcar o mundo. Esse primeiro palpitar da seiva, essa\n' +
        'revelação da consciencia a si propria, nunca mais me esqueceu, nem\n' +
        'achei que lhe fosse comparavel qualquer outra sensação da mesma\n' +
        'especie. Naturalmente por ser minha. Naturalmente tambem por ser a\n' +
        'primeira.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'XIII\n' +
        '\n' +
        'Capitú.\n' +
        '\n' +
        'De repente, ouvi bradar uma voz de dentro da casa ao pé:\n' +
        '\n' +
        '--Capitú!\n' +
        '\n' +
        'E no quintal:\n' +
        '\n' +
        '--Mamãe!\n' +
        '\n' +
        'E outra vez na casa:\n' +
        '\n' +
        '--Vem cá!\n' +
        '\n' +
        'Não me pude ter. As pernas desceram-me os tres degraus que davam para\n' +
        'a chacara, e caminharam para o quintal visinho. Era costume dellas, ás\n' +
        'tardes, e ás manhãs tambem. Que as pernas tambem são pessoas, apenas\n' +
        'interiores aos braços, e valem de si mesmas, quando a cabeça não as\n' +
        'rege por meio de ideias. As minhas chegaram ao pé do muro. Havia alli\n' +
        'uma porta de communicação mandada rasgar por minha mãe, quando Capitú\n' +
        'e eu éramos pequenos. A porta não tinha chave nem taramela, abria-se\n' +
        'empurrando de um lado ou puxando de outro, e fechava-se ao peso de\n' +
        'uma pedra pendente de uma corda. Era quasi que exclusivamente nossa.\n' +
        'Em creancas, faziamos visita batendo de um lado, e sendo recebidos\n' +
        'do outro com muitas mesuras. Quando as bonecas de Capitú adoeciam,\n' +
        'o medico era eu. Entrava no quintal della com um pau debaixo do\n' +
        'braço, para imitar o bengalão do doutor João da Costa; tomava o pulso\n' +
        'á doente, e pedia-lhe que mostrasse a lingua. «É surda, coitada!»\n' +
        'exclamava Capitú. Então eu coçava o queixo, como o doutor, e acabava\n' +
        'mandando applicar-lhe umas sanguesugas ou dar-lhe um vomitorio: era a\n' +
        'therapeutica habitual do medico.\n' +
        '\n' +
        '--Capitú!\n' +
        '\n' +
        '--Mamãe!\n' +
        '\n' +
        '--Deixa de estar esburacando o muro; vem cá.\n' +
        '\n' +
        'A voz da mãe era agora mais perto, como se viesse já da porta dos\n' +
        'fundos. Quiz passar ao quintal, mas as pernas, ha pouco tão andarilhas,\n' +
        'pareciam agora presas ao chão. Afinal fiz um esforço, empurrei a porta,\n' +
        'e entrei. Capitú estava ao pé do muro fronteiro, voltada para elle,\n' +
        'riscando com um prego. O rumor da porta fel-a olhar para traz; ao dar\n' +
        'commigo, encostou-se ao muro, como se quizesse esconder alguma cousa.\n' +
        'Caminhei para ella; naturalmente levava o gesto mudado, porque ella\n' +
        'veiu a mim, e perguntou-me inquieta:\n' +
        '\n' +
        '--Que é que você tem?\n' +
        '\n' +
        '--Eu? Nada.\n' +
        '\n' +
        '--Nada, não; você tem alguma cousa.\n' +
        '\n' +
        'Quiz insistir que nada, mas não achei lingua. Todo eu era olhos e\n' +
        'coração, um coração que desta vez ia sair, com certeza, pela bocca\n' +
        'fora. Não podia tirar os olhos daquella creatura de quatorze annos,\n' +
        'alta, forte e cheia, apertada em um vestido de chita, meio desbotado.\n' +
        'Os cabellos grossos, feitos em duas tranças, com as pontas atadas uma á\n' +
        'outra, á moda do tempo, desciam-lhe pelas costas. Morena, olhos claros\n' +
        'e grandes, nariz recto e comprido, tinha a bocca fina e o queixo largo.\n' +
        'As mãos, a despeito de alguns officios rudes, eram curadas com amor;\n' +
        'não cheiravam a sabões finos nem aguas de toucador, mas com agua do\n' +
        'poço e sabão commum trazia-as sem macula. Calçava sapatos de duraque,\n' +
        'rasos e velhos, a que ella mesma dera alguns pontos.\n' +
        '\n' +
        '--Que é que você tem? repetiu.\n' +
        '\n' +
        '--Não é nada, balbuciei finalmente.\n' +
        '\n' +
        'E emendei logo:\n' +
        '\n' +
        '--É uma noticia.\n' +
        '\n' +
        '--Noticia de què?\n' +
        '\n' +
        'Pensei em dizer-lhe que ia entrar para o seminario e espreitar a\n' +
        'impressão que lhe faria. Se a consternasse é que realmente gostava de\n' +
        'mim; se não, é que não gostava. Mas todo esse calculo foi obscuro e\n' +
        'rapido; senti que não poderia falar claramente, tinha agora a vista não\n' +
        'sei como...\n' +
        '\n' +
        '--Então?\n' +
        '\n' +
        '--Você sabe...\n' +
        '\n' +
        'Nisto olhei para o muro, o logar em que ella estivera riscando,\n' +
        'escrevendo ou esburacando, como dissera a mãe. Vi uns riscos abertos, e\n' +
        'lembrou-me o gesto que ella fizera para cobril-os. Então quiz vel-os\n' +
        'de perto, e dei um passo. Capitú agarrou-me, mas, ou por temer que\n' +
        'eu acabasse fugindo, ou por negar de outra maneira, correu adeante e\n' +
        'apagou o escripto. Foi o mesmo que accender em mim o desejo de ler o\n' +
        'que era.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'XIV\n' +
        '\n' +
        'A inscripção.\n' +
        '\n' +
        'Tudo o que contei no fim do outro capitulo foi obra de um instante.\n' +
        'O que se lhe seguiu foi ainda mais rapido. Dei um pulo, e antes que\n' +
        'ella raspasse o muro, li estes dous nomes, abertos ao prego, o assim\n' +
        'dispostos:\n' +
        '\n' +
        'BENTO CAPITOLINA\n' +
        '\n' +
        'Voltei-me para ella; Capitú tinha os olhos no chão. Ergueu-os logo,\n' +
        'devagar, e ficámos a olhar um para o outro... Confissão de creanças,\n' +
        'tu valias bem duas ou tres paginas, mas quero ser poupado. Em verdade,\n' +
        'não falámos nada; o muro falou por nós. Não nos movemos, as mãos é que\n' +
        'se estenderam pouco a pouco, todas quatro, pegando-se, apertando-se,\n' +
        'fundindo-se. Não marquei a hora exacta daquelle gesto. Devia tel-a\n' +
        'marcado; sinto a falta de uma nota escripta naquella mesma noite, e\n' +
        'que eu poria aqui com os erros de orthographia que trouxesse, mas não\n' +
        'traria nenhum, tal era a differença entre o estudante e o adolescente.\n' +
        'Conhecia as regras do escrever, sem suspeitar as do amar; tinha orgias\n' +
        'de latim e era virgem de mulheres.\n' +
        '\n' +
        'Não soltámos as mãos, nem ellas se deixaram cair de cançadas ou de\n' +
        'esquecidas. Os olhos fitavam-se e desfitavam-se, e depois de vagarem ao\n' +
        'perto, tornavam a metter-se uns pelos outros... Padre futuro, estava\n' +
        'assim deante della como de um altar, sendo uma das faces a Epistola e\n' +
        'a outra o Evangelho. A bocca podia ser o calix, os labios a patena.\n' +
        'Faltava dizer a missa nova, por um latim que ninguem apprende, e é a\n' +
        'lingua catholica dos homens. Não me tenhas por sacrilego, leitora minha\n' +
        'devota; a limpeza da intenção lava o que puder haver menos curial no\n' +
        'estylo. Estavamos alli com o ceu em nós. As mãos, unindo os nervos,\n' +
        'faziam das duas creaturas uma só, mas uma só creatura seraphica. Os\n' +
        'olhos continuaram a dizer cousas infinitas, as palavras de bocca é que\n' +
        'nem tentavam sair, tornavam ao coração caladas como vinham...\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'XV\n' +
        '\n' +
        'Outra voz repentina.\n' +
        '\n' +
        'Outra voz repentina, mas desta vez uma voz de homem:\n' +
        '\n' +
        '--Vocês estão jogando o siso?\n' +
        '\n' +
        'Era o pae de Capitú, que estava á porta dos fundos, ao pé da mulher.\n' +
        'Soltámos as mãos depressa, e ficámos atrapalhados. Capitú foi ao muro,\n' +
        'e, com o prego, disfarçadamente, apagou os nossos nomes escriptos.\n' +
        '\n' +
        '--Capitú!\n' +
        '\n' +
        '--Papae!\n' +
        '\n' +
        '--Não me estragues o reboco do muro.\n' +
        '\n' +
        'Capitú riscava sobre o riscado, para apagar bem o escripto. Padua saiu\n' +
        'ao quintal, a ver o que era, mas já a filha tinha começado outra cousa,\n' +
        'um perfil, que disse ser o retrato delle, e tanto podia ser delle como\n' +
        'da mãe; fel-o rir, era o essencial. De resto, elle chegou sem colera,\n' +
        'todo meigo, apezar do gesto duvidoso ou menos que duvidoso em que nos\n' +
        'apanhou. Era um homem baixo e grosso, pernas e braços curtos, costas\n' +
        'abahuladas, donde lhe veiu a alcunha de Tartaruga, que José Dias lhe\n' +
        'poz. Ninguem lhe chamava assim lá em casa; era só o aggregado.\n' +
        '\n' +
        '--Vocês estavam jogando o siso? perguntou,\n' +
        '\n' +
        'Olhei para um pé do sabugueiro que ficava perto; Capitú respondeu por\n' +
        'ambos.\n' +
        '\n' +
        '--Estavamos, sim, senhor, mas Bentinho ri logo, não aguenta.\n' +
        '\n' +
        '--Quando eu cheguei á porta, não ria.\n' +
        '\n' +
        '--Já tinha rido das outras vezes; não póde. Papae quer ver?\n' +
        '\n' +
        'E séria, fitou em mim os olhos, convidando-me ao jogo. O susto é\n' +
        'naturalmente serio; eu estava ainda sob a acção do que trouxe a entrada\n' +
        'de Padua, e não fui capaz de rir, por mais que devesse fazel-o, para\n' +
        'legitimar a resposta de Capitú. Esta, cançada de esperar, desviou\n' +
        'o rosto, dizendo que eu não ria daquella vez por estar ao pé do\n' +
        'pae. E nem assim ri. Ha cousas que só se apprendem tarde; é mister\n' +
        'nascer com ellas para fazel-as cedo. E melhor é naturalmente cedo que\n' +
        'artificialmente tarde. Capitú, após duas voltas, foi ter com a mãe,\n' +
        'que continuava á porta da casa, deixando-nos a mim e ao pae encantados\n' +
        'della; o pae, olhando para ella e para mim, dizia-me, cheio de ternura:\n' +
        '\n' +
        '--Quem dirá que esta pequena tem quatorze annos? Parece dezesete. Mamãe\n' +
        'está boa? continuou voltando-se inteiramente para mim.\n' +
        '\n' +
        '--Está.\n' +
        '\n' +
        '--Ha muitos dias que não a vejo. Estou com vontade de dar um capote\n' +
        'ao doutor, mas não tenho podido, ando com trabalhos da repartição, em\n' +
        'casa; escrevo todos os noites que é em desespero; negocio de relatorio.\n' +
        'Você já viu o meu gaturamo? Está alli no fundo. Ia agora mesmo buscar a\n' +
        'gaiola; ande ver.\n' +
        '\n' +
        'Que o meu desejo era nenhum, crê-se facilmente, sem ser preciso jurar\n' +
        'pelo ceu nem pela terra. Meu desejo era ir atraz de Capitú e falar-lhe\n' +
        'agora do mal que nos esperava, mas o pae era o pae, e demais amava\n' +
        'particularmente os passarinhos. Tinha-os de varia especie, côr e\n' +
        'tamanho. A área que havia no centro da casa era cercada de gaiolas de\n' +
        'canarios, que faziam cantando um barulho de todos os diabos. Trocava\n' +
        'passaros com outros amadores, comprava-os, apanhava alguns, no proprio\n' +
        'quintal, armando alçapões. Tambem, se adoeciam, tratava delles como se\n' +
        'fossem gente.\n'
    },
    {
      src: '/assets/audio/domcasmurro04.mp3',
      titulo: 'Seção 4',
      subtitulo: 'Capítulos XVI ao XX',
      leitor: 'Rachel Moraes',
      numeroSecao: 4,
      texto: '/assets/texts/secao4.txt',
      tempo: '23min',
      capitulo: 'XVI\n' +
        '\n' +
        'O administrador interino.\n' +
        '\n' +
        'Padua era empregado em repartição dependente do ministerio da guerra.\n' +
        'Não ganhava muito, mas a mulher gastava pouco, e a vida era barata.\n' +
        'Demais, a casa em que morava, assobradada como a nossa, posto que\n' +
        'menor, era propriedade delle. Comprou-a com a sorte grande que lhe saiu\n' +
        'n\'um meio bilhete de loteria, dez contos de reis. A primeira ideia do\n' +
        'Padua, quando lhe saiu o premio, foi comprar um cavallo do Cabo, um\n' +
        'adereço de brilhantes para a mulher, uma sepultura perpetua de familia,\n' +
        'mandar vir da Europa alguns passaros, etc.; mas a mulher, esta D.\n' +
        'Fortunata que alli está á porta dos fundos da casa, em pé, falando á\n' +
        'filha, alta, forte, cheia, como a filha, a mesma cabeça, os mesmos\n' +
        'olhos claros, a mulher é que lhe disse que o melhor era comprar a casa,\n' +
        'e guardar o que sobrasse para acudir ás molestias grandes. Padua\n' +
        'hesitou muito; afinal, teve de ceder aos conselhos de minha mãe, a quem\n' +
        'D. Fortunata pediu auxilio. Nem foi só nessa occasião que minha mãe\n' +
        'lhes valeu; um dia chegou a salvar a vida ao Padua. Escutai; a anecdota\n' +
        'é curta.\n' +
        '\n' +
        'O administrador da repartição em que Padua trabalhava teve de ir ao\n' +
        'Norte, em commissão. Padua, ou por ordem regulamentar, ou por especial\n' +
        'designação, ficou substituindo o administrador com os respectivos\n' +
        'honorarios. Esta mudança de fortuna trouxe-lhe certa vertigem: era\n' +
        'antes dos dez contos. Não se contentou de reformar a roupa e a copa,\n' +
        'atirou-se ás despezas superfluas, deu joias á mulher, nos dias de\n' +
        'festa matava um leitão, era visto em theatros, chegou aos sapatos de\n' +
        'verniz. Viveu assim vinte e dous mezes na supposição de uma eterna\n' +
        'interinidade. Uma tarde entrou em nossa casa, afflicto e desvairado,\n' +
        'ia perder o logar, porque chegara o effectivo naquella manhã. Pediu a\n' +
        'minha mãe que velasse pelas infelizes que deixava; não podia soffrer\n' +
        'a desgraça, matava-se. Minha mãe falou-lhe com bondade, mas elle não\n' +
        'attendia a cousa nenhuma.\n' +
        '\n' +
        '--Não, minha senhora, não consentirei em tal vergonha! Fazer descer\n' +
        'a familia, tornar atraz... Já disse, mato-me! Não hei de confessar á\n' +
        'minha gente esta miseria. E os outros? Que dirão os visinhos? E os\n' +
        'amigos? E o publico?\n' +
        '\n' +
        '--Que publico, Sr. Padua? Deixe-se disso; seja homem. Lembre-se que sua\n' +
        'mulher não tem outra pessoa... e que ha de fazer? Pois um homem...\n' +
        'Seja homem, ande.\n' +
        '\n' +
        'Padua enxugou os olhos e foi para casa, onde viveu prostrado alguns\n' +
        'dias, mudo, fechado na alcova,--ou então no quintal, ao pé do poço,\n' +
        'como se a ideia da morte teimasse nelle. D. Fortunata ralhava:\n' +
        '\n' +
        '--Joãosinho, você é creança?\n' +
        '\n' +
        'Mas, tanto lhe ouviu falar em morte que teve medo, e um dia correu\n' +
        'a pedir a minha mãe que lhe fizesse o favor de ver se lhe salvava o\n' +
        'marido que se queria matar. Minha mãe foi achal-o á beira do poço, e\n' +
        'intimou-lhe que vivesse. Que maluquice era aquella de parecer que ia\n' +
        'ficar desgraçado, por causa de uma gratificação menos, e perder um\n' +
        'emprego interino? Não, senhor, devia ser homem, pae de familia, imitar\n' +
        'a mulher e a filha... Padua obedeceu; confessou que acharia forças para\n' +
        'cumprir a vontade de minha mãe.\n' +
        '\n' +
        '--Vontade minha, não; é obrigação sua.\n' +
        '\n' +
        '--Pois seja obrigação; não desconheço que é assim mesmo.\n' +
        '\n' +
        'Nos dias seguintes, continuou a entrar e sair de casa, cosido á parede,\n' +
        'cara no chão. Não era o mesmo homem que estragava o chapéo em cortejar\n' +
        'a visinhança, risonho, olhos no ar, antes mesmo da administração\n' +
        'interina. Vieram as semanas, a ferida foi sarando. Padua começou a\n' +
        'interessar-se pelos negocios domesticos, a cuidar dos passarinhos, a\n' +
        'dormir tranquillo as noites e as tardes, a conversar e dar noticias da\n' +
        'rua. A serenidade regressou; atraz della veiu a alegria, um domingo,\n' +
        'na figura de dous amigos, que iam jogar o solo, a tentos. Já elle ria,\n' +
        'já brincava, tinha o ar do costume; a ferida sarou de todo.\n' +
        '\n' +
        'Com o tempo veiu um phenomeno interessante. Padua começou a falar da\n' +
        'administração interina, não sómente sem as saudades dos honorarios,\n' +
        'nem o vexame da perda, mas até com desvanecimento e orgulho. A\n' +
        'administração ficou sendo a hegyra, donde elle contava para deante e\n' +
        'para traz.\n' +
        '\n' +
        '--No tempo em que eu era administrador...\n' +
        '\n' +
        'Ou então:\n' +
        '\n' +
        '--Ah! sim, lembra-me, foi antes da minha administração, um ou dous\n' +
        'mezes antes... Ora espere; a minha administração começou... É isto, mez\n' +
        'e meio antes; foi mez e meio antes, não foi mais.\n' +
        '\n' +
        'Ou ainda:\n' +
        '\n' +
        '--Justamente; havia já seis mezes que eu administrava...\n' +
        '\n' +
        'Tal é o sabor posthumo das glorias interinas. José Dias bradava que\n' +
        'era a vaidade sobrevivente; mas o padre Cabral, que levava tudo para a\n' +
        'Escriptura, dizia que com o visinho Padua se dava a licção de Eliphaz a\n' +
        'Job: «Não desprezes a correcção do Senhor; elle fere e cura.»\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'XVII\n' +
        '\n' +
        'Os vermes.\n' +
        '\n' +
        '«Elle fere e cura!» Quando, mais tarde, vim a saber que a lança\n' +
        'de Achilles tambem curou uma ferida que fez, tive taes ou quaes\n' +
        'velleidades de escrever uma dissertação a este proposito. Cheguei a\n' +
        'pegar em livros velhos, livros mortos, livros enterrados, a abril-os, a\n' +
        'comparal-os, calando o texto e o sentido, para achar a origem commum do\n' +
        'oraculo pagão e do pensamento israelita. Catei os proprios vermes dos\n' +
        'livros, para que me dissessem o que havia nos textos roidos por elles.\n' +
        '\n' +
        '--Meu senhor, respondeu-me um longo verme gordo, uns não sabemos\n' +
        'absolutamente nada dos textos que roemos, nem escolhemos o que roemos,\n' +
        'nem amamos ou detestamos o que roemos; nós roemos.\n' +
        '\n' +
        'Não lhe arranquei mais nada. Os outros todos, como se houvessem\n' +
        'passado palavra, repeliam a mesma cantilena. Talvez esse discreto\n' +
        'silencio sobre os textos roidos, fosse ainda um modo de roer o roido.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'XVIII\n' +
        '\n' +
        'Um plano.\n' +
        '\n' +
        'Pae nem mãe foram ter comnosco, quando Capitú e eu, na sala de visitas,\n' +
        'falavamos do seminario. Com os olhos em mim, Capitú queria saber que\n' +
        'noticia era a que me affligia tanto. Quando lhe disse o que era, fez-se\n' +
        'côr de cêra.\n' +
        '\n' +
        '--Mas eu não quero, acudi logo, não quero entrar em seminarios; não\n' +
        'entro, é excusado teimarem commigo, não entro.\n' +
        '\n' +
        'Capitú, a principio não disse nada. Recolheu os olhos, metteu-os\n' +
        'em si e deixou-se estar com as pupillas vagas e surtias, a bocca\n' +
        'entre-aberta, toda parada. Então eu, para dar forca ás affirmações,\n' +
        'comecei a jurar que não seria padre. Naquelle tempo jurava muito e\n' +
        'rijo, pela vida e pela morte. Jurei pela hora da morte. Que a luz me\n' +
        'faltasse na hora da morte se fosse para o seminario. Capitú não parecia\n' +
        'crer nem descrer, não parecia sequer ouvir; era uma figura de pau. Quiz\n' +
        'chamal-a, sacudil-a, mas faltou-me animo. Essa creatura que brincára\n' +
        'commigo, que pulára, dansára, creio até que dormira commigo, deixava-me\n' +
        'agora com os braços atados e medrosos. Emfim, tornou a si, mas tinha a\n' +
        'cara livida, e rompeu nestas palavras furiosas:\n' +
        '\n' +
        '--Beata! carola! papa-missas!\n' +
        '\n' +
        'Fiquei aturdido. Capitú gostava tanto de minha mãe, e minha mãe della,\n' +
        'que eu não podia entender tamanha explosão. É verdade que tambem\n' +
        'gostava de mim, e naturalmente mais, ou melhor, ou de outra maneira,\n' +
        'cousa bastante a explicar o despeito que lhe trazia a ameaça da\n' +
        'separação; mas os improperios, como entender que lhe chamasse nomes tão\n' +
        'feios, e principalmente para deprimir costumes religiosos, que eram os\n' +
        'seus? Que ella tambem ia á missa, e tres ou quatro vezes minha mãe é\n' +
        'que a levou, na nossa velha sege. Tambem lhe dera um rosario, uma cruz\n' +
        'de ouro e um livro de _Horas..._ Quiz defendel-a, mas Capitú não me\n' +
        'deixou, continuou a chamar-lhe beata e carola, em voz tão alta que tive\n' +
        'medo fosse ouvida dos paes. Nunca a vi tão irritada como então; parecia\n' +
        'disposta a dizer tudo a todos. Cerrava os dentes, abanava a cabeça...\n' +
        'Eu, assustado, não sabia que fizesse; repetia os juramentos, promettia\n' +
        'ir naquella mesma noite declarar em casa que, por nada neste mundo,\n' +
        'entraria no seminario.\n' +
        '\n' +
        '--Você? Você entra.\n' +
        '\n' +
        '--Não entro.\n' +
        '\n' +
        '--Você verá se entra ou não.\n' +
        '\n' +
        'Calou-se outra vez. Quando tornou a falar, tinha mudado; não era ainda\n' +
        'a Capitú do costume, mas quasi. Estava seria, sem afflicção, falava\n' +
        'baixo. Quiz saber a conversação da minha casa; eu contei-lh\'a toda,\n' +
        'menos a parte que lhe dizia respeito.\n' +
        '\n' +
        '--E que interesse tem José Dias em lembrar isto? perguntou-me no fim.\n' +
        '\n' +
        '--Acho que nenhum; foi só para fazer mal. É um sujeito muito ruim; mas,\n' +
        'deixe estar que me ha de pagar. Quando eu fôr dono da casa, quem vae\n' +
        'para a rua é elle, você verá; não me fica um instante. Mamãe é boa de\n' +
        'mais; dá-lhe attenção de mais. Parece até que chorou.\n' +
        '\n' +
        '--José Dias?\n' +
        '\n' +
        '--Não, mamãe.\n' +
        '\n' +
        '--Chorou porque?\n' +
        '\n' +
        '--Não sei; ouvi só dizer que ella não chorasse, que não era cousa de\n' +
        'choro... Elle chegou a mostrar-se arrependido, e saiu; eu então, para\n' +
        'não ser apanhado, deixei o canto e corri para a varanda. Mas, deixe\n' +
        'estar, que elle me paga!\n' +
        '\n' +
        'Disse isto fechando o punho, e proferi outras ameaças. Ao relembral-as,\n' +
        'não me acho ridiculo; a adolescencia e a infancia não são, neste ponto,\n' +
        'ridiculas; e um dos seus privilegios. Este mal ou este perigo começa\n' +
        'na mocidade, cresce na madurera e attinge o maior grão na velhice. Aos\n' +
        'quinze annos, ha até certa graça em ameaçar muito e não executar nada.\n' +
        '\n' +
        'Capitú reflectia. A reflexão não era cousa rara nella, e conheciam-se\n' +
        'as occasiões pelo apertado dos olhos. Pediu-me algumas circumstancias\n' +
        'mais, as proprias palavras de uns e de outros, e o tom dellas. Como eu\n' +
        'não queria dizer o ponto inicial da conversa, que era ella mesma, não\n' +
        'lhe pude dar toda a significação. A attenção de Capitú estava agora\n' +
        'particularmente nas lagrimas de minha mãe; não acabava de entendel-as.\n' +
        'Em meio disto, confessou que certamente não era por mal que minha mãe\n' +
        'me queria fazer padre; era a promessa antiga, que ella, temente a Deus,\n' +
        'não podia deixar de cumprir. Fiquei tão satisfeito de ver que assim\n' +
        'espontaneamente reparava as injurias que lhe sairam do peito, pouco\n' +
        'antes, que peguei da mão della e apertei-a muito. Capitú deixou-se ir,\n' +
        'rindo; depois a conversa entrou a cochilar e dormir. Tinhamos chegado\n' +
        'á janella; um preto, que, desde algum tempo, vinha apregoando cocadas,\n' +
        'parou em frente e perguntou:\n' +
        '\n' +
        '--Sinhásinha, qué cocada hoje?\n' +
        '\n' +
        '--Não, respondeu Capitú.\n' +
        '\n' +
        '--Cocadinha tá boa.\n' +
        '\n' +
        '--Vá-se embora, replicou ella sem rispidez.\n' +
        '\n' +
        '--Dê ca! disse eu descendo o braço para receber duas.\n' +
        '\n' +
        'Comprei-as, mas tive de as comer sósinho; Capitú recusou. Vi que, em\n' +
        'meio da crise, eu conservava um canto para as cocadas, o que tanto póde\n' +
        'ser perfeição como imperfeição, mas o momento não é para definições\n' +
        'taes; fiquemos em que a minha amiga, apezar de equilibrada e lucida,\n' +
        'não quiz saber de doce, e gostava muito de doce. Ao contrario, o\n' +
        'pregão que o preto foi cantando, o prégão das velhas tardes, tão sabido\n' +
        'do bairro e da nossa infancia:\n' +
        '\n' +
        '     Chora, menina, chora,\n' +
        '     Chora, porque não tem\n' +
        '             Vintem,\n' +
        '\n' +
        'a modo que lhe deixára uma impressão aborrecida, Da toada não era;\n' +
        'ella a sabia de cór e de longe, usava repetil-a nos nossos jogos da\n' +
        'puericia, rindo, saltando, trocando os papeis commigo, ora vendendo,\n' +
        'ora comprando um doce ausente. Creio que a lettra, destinada a picar\n' +
        'a vaidade das crianças, foi que a enojou agora, porque logo depois me\n' +
        'disse:\n' +
        '\n' +
        '--Se eu fosse rica, você fugia, mettia-se no paquete e ia para a Europa.\n' +
        '\n' +
        'Dito isto, espreitou-me os olhos, mas creio que elles não lhe disseram\n' +
        'nada, ou só agradeceram a boa intenção. Com effeito, o sentimento era\n' +
        'tão amigo que eu podia excusar o extraordinario da aventura.\n' +
        '\n' +
        'Como vês, Capitú, aos quatorze annos, tinha já ideias atrevidas,\n' +
        'muito menos que outras que lhe vieram depois; mas eram só atrevidas\n' +
        'em si, na pratica faziam-se habeis, sinuosas, surdas, e alcançavam o\n' +
        'fim proposto, não de salto, mas aos saltinhos. não sei se me explico\n' +
        'bem. Supponde uma concepção grande executada por meios pequenos.\n' +
        'Assim, para não sair do desejo vago e hypothetico de me mandar para\n' +
        'a Europa, Capitú, se pudesse cumpril-o, não me faria embarcar no\n' +
        'paquete e fugir; estenderia uma fila de canoas daqui até lá, por\n' +
        'onde eu, parecendo ir á fortaleza da Lage em ponte movediça, iria\n' +
        'realmente até Bordéos, deixando minha mãe na praia, á espera. Tal era\n' +
        'a feição particular do caracter da minha amiga; pelo que, não admira\n' +
        'que, combatendo os meus projectos de resistencia franca, fosse antes\n' +
        'pelos meios brandos, pela acção do empenho, da palavra, da persuasão\n' +
        'lenta e diuturna, e examinasse antes as pessoas com quem podiamos\n' +
        'contar. Rejeitou tio Cosme; era um «boa-vida»; se não approvava a\n' +
        'minha ordenação, não era capaz de dar um passo para suspendel-a. Prima\n' +
        'Justina era melhor que elle, e melhor que os dous seria o padre Cabral,\n' +
        'pela autoridade, mas o padre não havia de trabalhar contra a egreja; só\n' +
        'se eu lhe confessasse que não tinha vocação....\n' +
        '\n' +
        '--Posso confessar?\n' +
        '\n' +
        '--Pois, sim, mas seria apparecer francamente, e o melhor é outra cousa.\n' +
        'José Dias....\n' +
        '\n' +
        '--Que tem José Dias?\n' +
        '\n' +
        '--Póde ser um bom empenho.\n' +
        '\n' +
        '--Mas se foi elle mesmo que falou....\n' +
        '\n' +
        '--Não importa, continuou Capitú; dirá agora outra cousa. Elle gosta\n' +
        'muito de você. Não lhe fale acanhado. Tudo é que você não tenha medo,\n' +
        'mostre que ha de vir a ser dono da casa, mostre que quer e que póde.\n' +
        'Dê-lhe bem a entender que não é favor. Faça-lhe tambem elogios; elle\n' +
        'gosta muito de ser elogiado. D. Gloria presta-lhe attenção; mas o\n' +
        'principal não é isso; é que elle, tendo de servir a você, falará com\n' +
        'muito mais calor que outra pessoa.\n' +
        '\n' +
        '--Não acho. não, Capitú.\n' +
        '\n' +
        '--Então vá para o seminario.\n' +
        '\n' +
        '--Isso não.\n' +
        '\n' +
        '--Mas que se perde em experimentar? Experimentemos; faça o que lhe\n' +
        'digo. D. Gloria póde ser que mude de resolução; se não mudar, faz-se\n' +
        'outra cousa, mette-se então o padre Cabral. Você não se lembra como\n' +
        'é que foi ao theatro pela primeira vez, ha dous mezes? D. Gloria não\n' +
        'queria, e bastava isso para que José Dias não teimasse; mas elle queria\n' +
        'ir, e fez um discurso, lembra-se?\n' +
        '\n' +
        '--Lembra-me; disse que o theatro era uma escola de costumes.\n' +
        '\n' +
        '--Justo; tanto falou que sua mãe acabou consentindo, e pagou a entrada\n' +
        'aos dous.... Ande, peça, mande. Olhe; diga-lhe que está prompto a ir\n' +
        'estudar leis em S. Paulo.\n' +
        '\n' +
        'Estremeci de prazer. S. Paulo era um fragil biombo, destinado a ser\n' +
        'arredado um dia, em vez da grossa parede espiritual e eterna. Prometti\n' +
        'falar a José Dias nos termos propostos. Capitú repetiu-os, accentuando\n' +
        'alguns, como principaes; e inquiria-me depois sobre elles, a ver se\n' +
        'entendera bem, se não trocara uns por outros. E insistia em que pedisse\n' +
        'com boa cara, mas assim como quem pede um copo de agua a pessoa que\n' +
        'tem obrigação de o trazer. Conto estas minucias para que melhor se\n' +
        'entenda aquella manhã da minha amiga; logo virá a tarde, e da manhã\n' +
        'e da tarde se fará o primeiro dia, como no Genesis, onde se fizeram\n' +
        'successivamente sete.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'XIX\n' +
        '\n' +
        'Sem falta.\n' +
        '\n' +
        'Quando voltei a casa era noite. Vim depressa, não tanto, porém, que não\n' +
        'pensasse nos termos em que falaria ao aggregado. Formulei o pedido de\n' +
        'cabeça, escolhendo as palavras que diria e o tom dellas, entre secco\n' +
        'e benevolo. Na chacara, antes de entrar em casa, repeti-as commigo,\n' +
        'depois em voz alia, para ver se eram adequadas e se obedeciam ás\n' +
        'recommendações de Capitú: «Preciso falar-lhe, _sem falta_, amanhã;\n' +
        'escolha o logar e diga-me.» Proferi-as lentamente, e mais lentamente\n' +
        'ainda as palavras _sem falta_, como para sublinhal-as. Repeti-as ainda,\n' +
        'e então achei-as seccas de mais, quasi rispidas, e, francamente,\n' +
        'improprias de um creançola para um homem maduro. Cuidei de escolher\n' +
        'outras, e parei.\n' +
        '\n' +
        'Afinal disse commigo que as palavras podiam servir, tudo era dizel-as\n' +
        'em tom que não offendesse. E a prova é que, repetindo-as novamente,\n' +
        'saíram-me quasi supplices. Bastava não carregar tanto, nem adoçar\n' +
        'muito, um meio termo. «E Capitú tem razão, pensei, a casa é minha, elle\n' +
        'é um simples aggregado... Geitoso é, póde muito bem trabalhar por mim,\n' +
        'e desfazer o plano de mamãe.»\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'XX\n' +
        '\n' +
        'Mil padre-nossos e mil ave-marias.\n' +
        '\n' +
        'Levantei os olhos ao ceu, que começava a embruscar-se, mas não foi para\n' +
        'vel-o coberto ou descoberto. Era ao outro ceu que eu erguia a minha\n' +
        'alma; era ao meu refugio, ao meu amigo. E então disse de mim para mim:\n' +
        '\n' +
        '--Prometto rezar mil padre-nossos e mil ave-marias, se José Dias\n' +
        'arranjar que eu não vá para o seminario.\n' +
        '\n' +
        'A somma era enorme. A razão é que eu andava carregado de promessas\n' +
        'não cumpridas. A ultima foi de duzentos padre-nossos e duzentas\n' +
        'ave-marias, se não chovesse em certa tarde de passeio a Santa Theresa.\n' +
        'Não choveu, mas eu não rezei as orações. Desde pequenino acostumara-me\n' +
        'a pedir ao ceu os seus favores, mediante orações que diria, se elles\n' +
        'viessem. Disse as primeiras, as outras foram adiadas, e á medida que\n' +
        'se amontoavam iam sendo esquecidas. Assim cheguei aos numeros vinte,\n' +
        'trinta, cincoenta. Entrei nas centenas e agora no milhar. Era um modo\n' +
        'de peitar a vontade divina pela quantia das orações; além disso, cada\n' +
        'promessa nova era feita e jurada no sentido de pagar a divida antiga.\n' +
        'Mas vão lá matar a preguiça de uma alma que a trazia do berço e não a\n' +
        'sentia attenuada pela vida! O ceu fazia-me o favor, eu adiava a paga.\n' +
        'Afinal perdi-me nas contas.\n' +
        '\n' +
        '--Mil, mil, repeti commigo.\n' +
        '\n' +
        'Realmente, a materia do beneficio era agora immensa, não menos que a\n' +
        'salvação ou o naufragio da minha existencia inteira. Mil, mil, mil.\n' +
        'Era preciso uma somma que pagasse os atrazados todos. Deus podia\n' +
        'muito bem, irritado com os esquecimentos, negar-se a ouvir-me sem\n' +
        'muito dinheiro.... Homem grave, é possivel que estas agitações de\n' +
        'menino te enfadem, se é que não as achas ridiculas. Sublimes não eram.\n' +
        'Cogitei muito no modo de resgatar a divida espiritual. Não achava\n' +
        'outra especie em que, mediante a intenção, tudo se cumprisse, fechando\n' +
        'a escripturação da minha consciencia moral sem _deficit._ Mandar\n' +
        'dizer cem missas, ou subir do joelhos a ladeira da Gloria para ouvir\n' +
        'uma, ir á Terra-Santa, tudo o que as velhas escravas me contavam de\n' +
        'promessas celebres, tudo me acudia sem se fixar de vez no espirito.\n' +
        'Era muito duro subir uma ladeira de joelhos; devia feril-os por força.\n' +
        'A Terra-Santa ficava muito longe. As missas eram numerosas, podiam\n' +
        'empenhar-mo outra vez a alma....\n'
    },
    {
      src: '/assets/audio/domcasmurro05.mp3',
      titulo: 'Seção 5',
      subtitulo: 'Capítulos XXI ao XXV',
      leitor: 'Dey Andriotti',
      numeroSecao: 5,
      texto: '/assets/texts/secao5.txt',
      tempo: '17min',
      capitulo: 'XXI\n' +
        '\n' +
        'Prima Justina.\n' +
        '\n' +
        'Na varanda achei prima Justina, passeando de um lado para outro. Veiu\n' +
        'ao patamar e perguntou-me onde estivera.\n' +
        '\n' +
        '--Estive aqui ao pé, conversando com D. Fortunata, e distraí-me. É\n' +
        'tarde, não é? Mamãe perguntou por mim?\n' +
        '\n' +
        '--Perguntou, mas eu disse que você já tinha vindo.\n' +
        '\n' +
        'A mentira espantou-me, não menos que a franqueza da noticia. Não é que\n' +
        'prima Justina fosse de biocos; dizia francamente a Pedro o mal que\n' +
        'pensava de Paulo, e a Paulo o que pensava de Pedro; mas, confessar que\n' +
        'mentira é que me pareceu novidade. Era quadragenaria, magra e pallida,\n' +
        'bocca fina e olhos curiosos. Vivia comnosco por favor de minha mãe, e\n' +
        'tambem por interesse; minha mãe queria ter uma senhora intima ao pé de\n' +
        'si, e antes parenta que extranha.\n' +
        '\n' +
        'Passeámos alguns minutos na varanda, alumiada por um lampião. Quiz\n' +
        'saber se eu não esquecera os projectos ecclesiasticos de minha mãe, e\n' +
        'dizendo-lhe eu que não, inquiriu-me sobre o gosto que eu tinha á vida\n' +
        'de padre. Respondi esquivo:\n' +
        '\n' +
        '--Vida de padre é muito bonita.\n' +
        '\n' +
        '--Sim, é bonita; mas o que pergunto é se você gostaria de ser padre,\n' +
        'explicou rindo.\n' +
        '\n' +
        '--Eu gósto do que mamãe quizer.\n' +
        '\n' +
        '--Prima Gloria deseja muito que você se ordene, mas ainda que não\n' +
        'desejasse, ha cá em casa quem lhe metta isso na cabeça.\n' +
        '\n' +
        '--Quem é?\n' +
        '\n' +
        '--Ora, quem! Quem é que hade ser? Primo Cosme não é, que não se importa\n' +
        'com isso; eu tambem não.\n' +
        '\n' +
        '--José Dias? conclui.\n' +
        '\n' +
        '--Naturalmente.\n' +
        '\n' +
        'Enruguei a testa interrogativamente, como se não soubesse nada. Prima\n' +
        'Justina completou a noticia dizendo que ainda naquella tarde José Dias\n' +
        'lembrára a minha mãe a promessa antiga.\n' +
        '\n' +
        '--Prima Gloria póde ser que, em passando os dias, vá esquecendo a\n' +
        'promessa; mas como ha de esquecer se uma pessoa estiver sempre, nos\n' +
        'ouvidos, zás que darás, falando do seminario? E os discursos que elle\n' +
        'faz, os elogios da egreja, e que a vida de padre é isto e aquillo, tudo\n' +
        'com aquellas palavras que só elle conhece, e aquella affectação...\n' +
        'Note que é só para fazer mal, porque elle é tão religioso, como este\n' +
        'lampião. Pois é verdade, ainda hoje. Você não se dê por achado... Hoje\n' +
        'de tarde falou como você não imagina.\n' +
        '\n' +
        '--Mas falou á toa? perguntei, a ver se ella contava a denuncia do meu\n' +
        'namoro com a visinha.\n' +
        '\n' +
        'Não contou; fez apenas um gesto como indicando que havia outra cousa\n' +
        'que não podia dizer. Novamente me recommendou que não me désse por\n' +
        'achado, e recapitulou todo o mal que pensava de José Dias, e não era\n' +
        'pouco, um intrigante, um bajulador, um especulador, e, apezar da casca\n' +
        'de polidez, um grosseirão. Eu, passados alguns instantes, disse:\n' +
        '\n' +
        '--Prima Justina, a senhora era capaz de uma cousa?\n' +
        '\n' +
        '--De quê?\n' +
        '\n' +
        '--Era capaz de... Supponha que eu não gostasse de ser padre... a\n' +
        'senhora podia pedir a mamãe...\n' +
        '\n' +
        '--Isso não, atalhou promptamente; prima Gloria tem este negocio firme\n' +
        'na cabeça, e não ha nada no mundo que a faça mudar de resolução; só\n' +
        'o tempo. Você ainda era pequenino, já ella contava isto a todas as\n' +
        'pessoas da nossa amizade, ou só conhecidas. Lá avivar-lhe a memoria,\n' +
        'não, que eu não trabalho para a desgraça dos outros; mas tambem,\n' +
        'pedir outra cousa, não peço. Se ella me consultasse, bem; se ella me\n' +
        'dissesse: «Prima Justina, você que acha?» a minha resposta era: «Prima\n' +
        'Gloria, eu penso que, se elle gosta de ser padre, póde ir; mas, se não\n' +
        'gosta, o melhor é ficar.» E o que eu diria e direi se ella me consultar\n' +
        'algum dia. Agora, ir falar-lhe sem ser chamada, não faço.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'XXII\n' +
        '\n' +
        'Sensações alheias.\n' +
        '\n' +
        'Não alcancei mais nada, e para o fim arrependi-me do pedido: devia\n' +
        'ter seguido o conselho de Capitú. Então, como eu quizesse ir para\n' +
        'dentro, prima Justina reteve-me alguns minutos, falando do calor e da\n' +
        'proxima festa da Conceição, dos meus velhos oratorios, e finalmente de\n' +
        'Capitú. Não disse mal della; ao contrario insinuou-me que podia vir a\n' +
        'ser uma moça bonita. Eu, que já a achava lindissima, bradaria que era\n' +
        'a mais bella creatura do mundo, se o receio me não fizesse discreto.\n' +
        'Entretanto, como prima Justina se mettesse a elogiar-lhe os modos, a\n' +
        'gravidade, os costumes, o trabalhar para os seus, o amor que tinha a\n' +
        'minha mãe, tudo isto me accendeu a ponto de elogial-a tambem. Quando\n' +
        'não era com palavras, era com o gesto de approvação que dava a cada\n' +
        'uma das assersões da outra, e certamente com a felicidade que devia\n' +
        'illuminar-me a cara. Não adverti que assim confirmava a denuncia de\n' +
        'José Dias, ouvida por ella, á tarde, na sala de visitas, se é que\n' +
        'tambem ella não desconfiava já. Só pensei nisso na cama. Só então senti\n' +
        'que os olhos de prima Justina, quando eu falava, pareciam apalpar-me,\n' +
        'ouvir-me, cheirar-me, gostar-me, fazer o officio de todos os sentidos.\n' +
        'Ciumes não podiam ser; entre um pirralho da minha edade e uma viuva\n' +
        'quarentona não havia logar para ciumes. É certo que, após algum\n' +
        'tempo, modificou os elogios a Capitú, e até lhe fez algumas criticas,\n' +
        'disse-me que era um pouco trefega e olhava por baixo; mas ainda assim,\n' +
        'não creio que fossem ciumes. Creio antes... sim... sim, creio isto.\n' +
        'Creio que prima Justina achou no espectaculo das sensações alheias uma\n' +
        'resurreição vaga das proprias. Tambem se goza por influição dos labios\n' +
        'que narram.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'XXIII\n' +
        '\n' +
        'Prazo dado.\n' +
        '\n' +
        '--Preciso falar-lhe amanhã, sem falta; escolha o logar e diga-me.\n' +
        '\n' +
        'Creio que José Dias achou desusado este meu falar. O tom não me sairia\n' +
        'tão imperativo como eu receiava, mas as palavras o eram, e o não\n' +
        'interrogar, não pedir, não hesitar, como era proprio da creança e do\n' +
        'meu estylo habitual, certamente lhe deu ideia de uma pessoa nova e de\n' +
        'uma nova situação. Foi no corredor, quando iamos para o chá; José Dias\n' +
        'vinha andando cheio da leitura de Walter Scott que fizera a minha mãe\n' +
        'e a prima Justina. Lia cantado e compassado. Os castellos e os parques\n' +
        'saíam maiores da bocca delle, os lagos tinham mais agua e a «abobada\n' +
        'celeste» contava alguns milhares mais de estrellas centelhantes. Nos\n' +
        'dialogos, alternava o som das vozes, que eram levemente grossas ou\n' +
        'finas, conforme o sexo dos interlocutores, e reproduziam com moderação\n' +
        'a ternura e a colera.\n' +
        '\n' +
        'Ao despedir-se de mim, na varanda, disse-me elle:\n' +
        '\n' +
        '--Amanhã, na rua. Tenho umas compras que fazer, você póde ir commigo,\n' +
        'pedirei a mamãe. É dia de licção?\n' +
        '\n' +
        '--A licção foi hoje.\n' +
        '\n' +
        '--Perfeitamente. Não lhe pergunto o que é; affirmo desde já que é\n' +
        'materia grave e pura.\n' +
        '\n' +
        '--Sim, senhor.\n' +
        '\n' +
        '--Até amanhã.\n' +
        '\n' +
        'Fez-se tudo o melhor possivel. Houve só uma alteração: minha mãe achou\n' +
        'o dia quente e não consentiu que eu fosse a pé; entrámos no omnibus, á\n' +
        'porta de casa.\n' +
        '\n' +
        '--Não importa, disse-me José Dias; podemos apear-nos á porta do Passeio\n' +
        'Publico.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'XXIV\n' +
        '\n' +
        'De mãe e de servo.\n' +
        '\n' +
        'José Dias tratava-me com extremos de mãe e attenções de servo. A\n' +
        'primeira cousa que conseguiu logo que comecei a andar fora, foi\n' +
        'dispensar-me o pagem; fez-se pagem, ia commigo á rua. Cuidava dos meus\n' +
        'arranjos em casa, dos meus livros, dos meus sapatos, da minha hygiene e\n' +
        'da minha prosodia. Aos oito annos os meus pluraes careciam, alguma vez,\n' +
        'da desinencia exacta, elle a corrigia, meio serio para dar autoridade\n' +
        'á licção, meio risonho para obter o perdão da emenda. Ajudava assim\n' +
        'o mestre de primeiras lettras. Mais tarde, quando o padre Cabral me\n' +
        'ensinava latim, doutrina e historia sagrada, elle assistia ás licções,\n' +
        'fazia reflexões ecclesiasticas, e, no fim, perguntava ao padre: «Não\n' +
        'é verdade que o nosso joven amigo caminha depressa?» Chamava-me «um\n' +
        'prodigio»; dizia a minha mãe ter conhecido outr\'ora meninos muito\n' +
        'intelligentes, mas que eu excedia a todos esses, sem contar que, para a\n' +
        'minha edade, possuia já certo numero de qualidades moraes solidas. Eu,\n' +
        'posto não avaliasse todo o valor deste outro elogio, gostava do elogio;\n' +
        'era um elogio.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'XXV\n' +
        '\n' +
        'No Passeio Publico.\n' +
        '\n' +
        'Entrámos no Passeio Publico. Algumas caras velhas, outras doentes ou só\n' +
        'vadias espalhavam-se melancolicamente no caminho que vae da porta ao\n' +
        'terraço. Seguimos para o terraço. Andando, para me dar animo, falei do\n' +
        'jardim:\n' +
        '\n' +
        '--Ha muito tempo que não venho aqui, talvez um anno.\n' +
        '\n' +
        '--Perdôe-me, atalhou elle, não ha tres mezes que esteve aqui com o\n' +
        'nosso visinho Padua; não se lembra?\n' +
        '\n' +
        '--É verdade, mas foi tão de passagem...\n' +
        '\n' +
        '--Elle pediu a sua mãe que o deixasse trazer comsigo, e ella, que é boa\n' +
        'como a mãe de Deus, consentiu; mas ouça-me, já que falamos nisto, não é\n' +
        'bonito que você ande com o Padua na rua.\n' +
        '\n' +
        '--Mas eu andei algumas vezes...\n' +
        '\n' +
        '--Quando era mais joven; em creança, era natural, elle podia passar por\n' +
        'creado. Mas você está ficando moco, e elle vae tomando confiança. D.\n' +
        'Gloria, afinal, não pode gostar disto. A gente Padua não é de todo má.\n' +
        'Capitú, apesar daquelles olhos que o diabo lhe deu... Você já reparou\n' +
        'nos olhos della? São assim de cigana obliqua e dissimulada. Pois,\n' +
        'apesar delles, poderia passar, se não fosse a vaidade e a adulação.\n' +
        'Oh! a adulação! D. Fortunata merece estima, e elle não nego que seja\n' +
        'honesto, tem um bom emprego, possue a casa em que móra, mas honestidade\n' +
        'e estima não bastam, e as outras qualidades perdem muito de valor com\n' +
        'as más companhias em que elle anda. Padua tem uma tendencia para gente\n' +
        'réles. Em lhe cheirando a homem chulo é com elle. Não digo isto por\n' +
        'odio, nem por que elle fale mal de mim e se ria, como se riu, ha dias,\n' +
        'dos meus sapatos acalcanhados...\n' +
        '\n' +
        '--Perdão, interrompi suspendendo o passo, nunca ouvi que falasse mal\n' +
        'do senhor; pelo contrario, um dia, não ha muito tempo, disse elle a um\n' +
        'sujeito, em minha presença, que o senhor era «um homem de capacidade e\n' +
        'sabia falar corno um deputado nas camaras.»\n' +
        '\n' +
        'José Dias sorriu deliciosamente, mas fez um esforço grande e fechou\n' +
        'outra vez o rosto; depois replicou:\n' +
        '\n' +
        '--Não lhe agradeço nada. Outros, de melhor sangue, me tem feito o favor\n' +
        'de juizos altos. E nada disso impede que elle seja o que lhe digo.\n' +
        '\n' +
        'Tinhamos outra vez andado, subimos ao terraço, e olhámos para o mar.\n' +
        '\n' +
        '--Vejo que o senhor não quer senão o meu beneficio, disse eu depois de\n' +
        'alguns instantes.\n' +
        '\n' +
        '--Pois que outra cousa, Bentinho?\n' +
        '\n' +
        '--Neste caso, peço-lhe um favor.\n' +
        '\n' +
        '--Um favor? Mande, ordene, que é?\n' +
        '\n' +
        '--Mamãe...\n' +
        '\n' +
        'Durante algum tempo não pude dizer o resto, que era pouco, e vinha de\n' +
        'cór. José Dias tornou a perguntar o que era, sacudia-me com brandura,\n' +
        'levantava-me o queixo e espetava os olhos em mim, ancioso tambem, como\n' +
        'a prima Justina na vespera.\n' +
        '\n' +
        '--Mamãe quê? Que é que tem mamãe?\n' +
        '\n' +
        '--Mamãe quer que eu seja padre, mas eu não posso ser padre, disse\n' +
        'finalmente.\n' +
        '\n' +
        'José Dias endireitou-se pasmado.\n' +
        '\n' +
        '--Não posso, continuei eu, não menos pasmado que elle, não tenho geito,\n' +
        'não gósto da vida de padre. Estou por tudo o que ella quizer; mamãe\n' +
        'sabe que eu faço tudo o que ella manda; estou prompto a ser o que fôr\n' +
        'do seu agrado, até cocheiro de omnibus. Padre, não; não posso ser\n' +
        'padre. A carreira é bonita, mas não é para mim.\n' +
        '\n' +
        'Todo esse discurso não me saiu assim, de vez, enfiado naturalmente,\n' +
        'peremptorio, como póde parecer do texto, mas aos pedaços, mastigado,\n' +
        'em voz um pouco surda e timida. Não obstante, José Dias ouvira-o\n' +
        'espantado. Não contava certamente com a resistencia, por mais acanhada\n' +
        'que fosse; mas o que ainda mais o assombrou foi esta conclusão:\n' +
        '\n' +
        '--Conto com o senhor para salvar-me.\n' +
        '\n' +
        'Os olhos do aggregado escancararam-se, as sobrancelhas arquearam-se,\n' +
        'e o prazer que eu contava dar-lhe com a escolha da protecção não se\n' +
        'mostrou em nenhum dos musculos. Toda a cara delle era pouca para a\n' +
        'estupefacção. Realmente, a materia do discurso revelára em mim uma alma\n' +
        'nova; eu proprio não me conhecia. Mas a palavra final é que trouxe um\n' +
        'vigor unico. José Dias ficou aturdido. Quando os olhos tornaram ás\n' +
        'dimensões ordinarias:\n' +
        '\n' +
        '--Mas que posso eu fazer? perguntou.\n' +
        '\n' +
        '--Póde muito. O senhor sabe que, em nossa casa, todos o apreciam. Mamãe\n' +
        'pede muita vez os seus conselhos, não é? Tio Cosme diz que o senhor é\n' +
        'pessoa de talento...\n' +
        '\n' +
        '--São bondades, retorquiu lisonjeado. São favores de pessoas dignas,\n' +
        'que merecem tudo... Ahi está! nunca ninguem me ha de ouvir dizer nada\n' +
        'de pessoas taes; porque? porque são illustres e virtuosas. Sua mãe\n' +
        'é uma santa, seu tio é um cavalheiro perfeitissimo. Tenho conhecido\n' +
        'familias distinctas; nenhuma poderá vencer a sua em nobreza de\n' +
        'sentimentos. O talento que seu tio acha em mim confesso que o tenho,\n' +
        'mas é só um,--é o talento de saber o que é bom e digno de admiração e\n' +
        'de apreço.\n' +
        '\n' +
        '--Ha de ter tambem o de proteger os amigos, como eu.\n' +
        '\n' +
        '--Em que lhe posso valer, anjo do ceu? Não hei de dissuadir sua mãe\n' +
        'de um projecto que é, além de promessa, a ambição e o sonho de longos\n' +
        'annos. Quando pudesse, é tarde. Ainda hontem fez-me o favor de dizer:\n' +
        '«José Dias, preciso metter Bentinho no seminario.»\n' +
        '\n' +
        'Timidez não é tão ruim moeda, como parece. Se eu fosse destemido, é\n' +
        'provavel que, com a indignação que experimentei, rompesse a chamar-lhe\n' +
        'mentiroso, mas então seria preciso confessar-lhe que estivera á escuta,\n' +
        'atraz da porta, e uma acção valia outra. Contentei-me de responder que\n' +
        'não era tarde.\n' +
        '\n' +
        '--Não é tarde, ainda é tempo, se o senhor quizer.\n' +
        '\n' +
        '--Se eu quizer? Mas que outra cousa quero eu, senão servil-o? Que\n' +
        'desejo, senão que seja feliz, como merece?\n' +
        '\n' +
        '--Pois ainda é tempo. Olhe, não é por vadiação. Estou prompto para\n' +
        'tudo; se ella quizer que eu estude leis, vou para S. Paulo...\n'
    },
    {
      src: '/assets/audio/domcasmurro06.mp3',
      titulo: 'Seção 6',
      subtitulo: 'Capítulos XXVI ao XXX',
      leitor: 'Rachel Moraes',
      numeroSecao: 6,
      texto: '/assets/texts/secao6.txt',
      tempo: '16min',
      capitulo: 'XXVI\n' +
        '\n' +
        'As leis são bellas.\n' +
        '\n' +
        'Pela cara de José Dias passou algo parecido com o reflexo de uma\n' +
        'ideia,--uma ideia que o alegrou extraordinariamente. Calou-se alguns\n' +
        'instantes; eu tinha os olhos nelle, elle voltara os seus para o lado da\n' +
        'barra. Como insistisse:\n' +
        '\n' +
        '--É tarde, disse elle; mas, para lhe provar que não ha falta de\n' +
        'vontade, irei falar a sua mãe. Não prometto vencer, mas lutar;\n' +
        'trabalharei com alma. Devéras, não quer ser padre? As leis são bellas,\n' +
        'meu querido... Póde ir a S. Paulo, a Pernambuco, ou ainda mais longe.\n' +
        'Ha boas universidades por esse mundo fóra. Vá para as leis, se tal é\n' +
        'a sua vocação. Vou falar a D. Gloria, mas não conte só commigo; fale\n' +
        'tambem a seu tio.\n' +
        '\n' +
        '--Hei de falar.\n' +
        '\n' +
        '--Pegue-se tambem com Deus,--com Deus e a Virgem Santissima, concluiu\n' +
        'apontando para o ceu.\n' +
        '\n' +
        'O ceu estava meio enfarruscado. No ar, perto da praia, grandes passaros\n' +
        'negros faziam giros, avoaçando ou pairando, e desciam a roçar os pés,\n' +
        'na agua, e tornavam a erguer-se para descer novamente. Mas nem as\n' +
        'sombras do ceu, nem as dansas fantasticas dos passaros me desviavam\n' +
        'o espirito do meu interlocutor. Depois de lhe responder que sim,\n' +
        'emendei-me:\n' +
        '\n' +
        '--Deus fará o que o senhor quizer.\n' +
        '\n' +
        '--Não blaspheme. Deus é dono de tudo; elle é, só por si, a terra e\n' +
        'o ceu, o passado, o presente e o futuro. Peça-lhe a sua felicidade,\n' +
        'que eu não faço outra cousa... Uma vez que você não póde ser padre, e\n' +
        'prefere as leis... As leis são bellas, sem desfazer na theologia, que\n' +
        'é melhor que tudo, como a vida ecclesiastica é a mais santa... Porque\n' +
        'não ha de ir estudar leis fóra daqui? Melhor é ir logo para alguma\n' +
        'universidade, e ao mesmo tempo que estuda, viaja. Podemos ir juntos;\n' +
        'veremos as terras estranjeiras, ouviremos inglez, francez, italiano,\n' +
        'hespanhol, russo e até sueco. D. Gloria provavelmente não poderá\n' +
        'acompanhal-o; ainda que possa e vá, não quererá guiar os negocios,\n' +
        'papeis, matriculas, e cuidar de hospedarias, e andar com você de um\n' +
        'lado para outro... Oh! as leis são bellissimas!\n' +
        '\n' +
        '--Está dito, pede a mamãe que me não metia no seminario?\n' +
        '\n' +
        '--Pedir, peço, mas pedir não é alcançar. Anjo do meu coração, se\n' +
        'vontade de servir é poder de mandar, estamos aqui, estamos a bordo.\n' +
        'Ali! você não imagina o que é a Europa; oh! a Europa...\n' +
        '\n' +
        'Levantou a perna e fez uma pirueta. Uma das suas ambições era tornar á\n' +
        'Europa, falava della muitos vezes, sem acabar de tentar minha mãe nem\n' +
        'tio Cosme, por mais que louvasse os ares e as bellezas... Não contava\n' +
        'com esta possibilidade de ir commigo, e lá ficar durante a eternidade\n' +
        'dos meus estudos.\n' +
        '\n' +
        '--Estamos a bordo, Bentinho, estamos a bordo!\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'XXVII\n' +
        '\n' +
        'Ao portão.\n' +
        '\n' +
        'Ao portão do Passeio, um mendigo estendeu-nos a mão. José Dias passou\n' +
        'adiante, mas eu pensei em Capitú e no seminario, tirei dous vintens do\n' +
        'bolso e dei-os ao mendigo. Este beijou a moeda; eu pedi-lhe que rogasse\n' +
        'a Deus por mim, afim de que eu pudesse satisfazer todos os meus desejos.\n' +
        '\n' +
        '--Sim, meu devoto!\n' +
        '\n' +
        '--Chamo-me Bento, accrescentei para esclarecel-o.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'XXVIII\n' +
        '\n' +
        'Na rua.\n' +
        '\n' +
        'José Dias ia tão contente que trocou o homem dos momentos graves,\n' +
        'como era á rua, pelo homem dobradiço e inquieto. Mexia-se todo,\n' +
        'falava de tudo, fazia-me parar a cada passo deante de um mostrador\n' +
        'ou de um cartaz de theatro. Contava-me o enredo de algumas peças,\n' +
        'recitava monologos em verso. Fez os recados todos, pagou contas,\n' +
        'recebeu alugueis de casa; para si comprou um vigesimo de loteria.\n' +
        'Afinal, o homem tezo rendeu o flexivel, e passou a falar pausado, com\n' +
        'superlativos. Não vi que a mudança era natural; temi que houvesse\n' +
        'mudado a resolução assentada, e entrei a tratal-o com palavras e gestos\n' +
        'carinhosos, até entrarmos no omnibus.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'XXIX\n' +
        '\n' +
        'O imperador.\n' +
        '\n' +
        'Em caminho, encontrámos o imperador, que vinha da Escola de Medicina.\n' +
        'O omnibus em que iamos parou, como todos os vehiculos; os passageiros\n' +
        'desceram á rua e tiraram o chapeu, até que o coche imperial passasse.\n' +
        'Quanto tornei ao meu logar, trazia uma ideia fantastica, a ideia de ir\n' +
        'ter com o imperador, contar-lhe tudo e pedir-lhe a intervenção. Não\n' +
        'confiaria. esta ideia a Capitú. «Sua Majestade pedindo, mamãe cede,»\n' +
        'pensei commigo.\n' +
        '\n' +
        'Vi então o imperador escutando-me, reflectindo e acabando por dizer que\n' +
        'sim, que iria falar a minha mãe; eu beijava-lhe a mão, com lagrimas. E\n' +
        'logo me achei cm casa, á espera, até que ouvi os batedores e o piquete\n' +
        'de cavallaria; é o imperador! é o imperador! toda a gente chegava ás\n' +
        'janellas para vel-o passar, mas não passava, o coche parava á nossa\n' +
        'porta, o imperador apeava-se e entrava. Grande alvoroço na visinhança:\n' +
        '«O imperador entrou em casa de D. Gloria! Que será? Que não será?\n' +
        '«A nossa familia saía a recebel-o; minha mãe era a primeira que lhe\n' +
        'beijava a mão. Então o imperador, todo risonho, sem entrar na sala ou\n' +
        'entrando,--não me lembra bem, os sonhos são muita vez confusos,--pedia\n' +
        'a minha mãe que me não fizesse padre,--e ella, lisongeada e obediente,\n' +
        'promettia que não.\n' +
        '\n' +
        '--A medicina,--porque lhe não manda ensinar medicina?\n' +
        '\n' +
        'Uma vez que é do agrado de Vossa Majestade...\n' +
        '\n' +
        '--Mande ensinar-lhe medicina; é uma bonita carreira, e nós temos aqui\n' +
        'bons professores. Nunca foi á nossa Escola? É uma bella Escola. Já\n' +
        'temos medicos de primeira ordem, que pódem hombrear com os melhores de\n' +
        'outras terras. A medicina é uma grande sciencia; basta só isto de dar\n' +
        'a saude aos outros, conhecer as molestias, combatel-as, vencel-as... A\n' +
        'senhora mesma ha de ter visto milagres. Seu marido morreu, mas a doença\n' +
        'era fatal, e elle não tinha cuidado em si... É uma bonita carreira;\n' +
        'mande-o para a nossa Escola. Faça isso por mim, sim? Você quer,\n' +
        'Bentinho?\n' +
        '\n' +
        '--Mamãe querendo.\n' +
        '\n' +
        '--Quero, meu filho. Sua Majestade manda.\n' +
        '\n' +
        'Então o imperador dava outra vez a mão a beijar, e saía, acompanhado de\n' +
        'todos nós, a rua cheia de gente, as janellas atopetadas, um silencio de\n' +
        'assombro; o imperador entrava no coche, inclinava-se e fazia um gesto\n' +
        'de adeus, dizendo ainda: «A medicina, a nossa Escola.» E o coche partia\n' +
        'entre invejas e agradecimentos.\n' +
        '\n' +
        'Tudo isso vi e ouvi. Não, a imaginação de Ariosto não é mais fertil\n' +
        'que a das creanças e dos namorados, nem a visão do impossivel precisa\n' +
        'mais que de um recanto de omnibus. Consolei-me por instantes, digamos\n' +
        'minutos, até destruir-se o plano e voltar-me para as caras sem sonhos\n' +
        'dos meus companheiros.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'XXX\n' +
        '\n' +
        'O Santissimo.\n' +
        '\n' +
        'Terás entendido que aquella lembrança do imperador ácerca da medicina\n' +
        'não era mais que a suggestão da minha pouca vontade de sair do Rio de\n' +
        'Janeiro. Os sonhos do accordado são como os outros sonhos, tecem-se\n' +
        'pelo desenho das nossas inclinações e das nossas recordações. Vá que\n' +
        'fosse para S. Paulo, mas a Europa... Era muito longe, muito mar e muito\n' +
        'tempo. Viva a medicina! Iria contar estas esperanças a Capitú.\n' +
        '\n' +
        '--Parece que vae sair o Santíssimo, disse alguem no omnibus. Ouço um\n' +
        'sino; é, creio que é em Santo Antonio dos Pobres. Pare, Sr. recebedor!\n' +
        '\n' +
        'O recebedor das passagens puxou a correia que ia ter ao braço do\n' +
        'cocheiro, o omnibus parou, e o homem desceu. José Dias deu duas voltas\n' +
        'rapidas á cabeça, pegou-me no braço e fez-me descer comsigo. Iriamos\n' +
        'tambem acompanhar o Santissimo. Effectivamente, o sino chamava os\n' +
        'fieis áquelle serviço da ultima hora. Já havia algumas pessoas na\n' +
        'sacristia. Era a primeira vez que me achava em momento tão grave;\n' +
        'obedeci, a principio constrangido, mas logo depois satisfeito, menos\n' +
        'pela caridade do serviço que por me dar um officio de homem. Quando o\n' +
        'sacristão começou a distribuir as opas, entrou um sujeito esbaforido;\n' +
        'era o meu visinho Padua, que tambem ia acompanhar o Santissimo. Deu\n' +
        'comnosco, veiu comprimentar-nos. José Dias fez um gesto de aborrecido,\n' +
        'e apenas lhe respondeu com uma palavra secca, olhando para o padre,\n' +
        'que lavava as mãos. Depois, como Padua falasse ao sacristão, baixinho,\n' +
        'approximou-se delles; eu fiz a mesma cousa. Padua solicitava do\n' +
        'sacristão uma das varas do pallio. José Dias pediu uma para si.\n' +
        '\n' +
        '--Ha só uma disponível, disse o sacristão.\n' +
        '\n' +
        '--Pois essa, disse José Dias.\n' +
        '\n' +
        '--Mas eu tinha pedido primeiro, aventurou Padua.\n' +
        '\n' +
        '--Pediu primeiro, mas entrou tarde, retorquiu José Dias; eu já cá\n' +
        'estava. Leve uma tocha.\n' +
        '\n' +
        'Padua, apesar do medo que tinha ao outro, teimava em querer a vara,\n' +
        'tudo isto em voz baixa e surda. O sacristão achou meio de conciliar a\n' +
        'rivalidade, tomando a si obter de um dos outros seguradores do pallio\n' +
        'que cedesse a vara ao Padua, conhecido na parochia, como José Dias.\n' +
        'Assim fez; mas José Dias transtornou ainda esta combinação. Não, uma\n' +
        'vez que tinhamos outra vara disponivel, pedia-a para mim, «joven\n' +
        'seminarista», a quem esta distincção cabia mais direitamente. Padua\n' +
        'ficou pallido, como as tochas. Era pôr á prova o coração de um pae. O\n' +
        'sacristão, que me conhecia de me ver alli com minha mãe, aos domingos,\n' +
        'perguntou de curioso se eu era devéras seminarista.\n' +
        '\n' +
        '--Ainda não, mas vae sel-o, respondeu José Dias piscando o olho\n' +
        'esquerdo para mim, que, apesar do aviso, fiquei zangado.\n' +
        '\n' +
        '--Bem, cedo ao nosso Bentinho, suspirou o pae de Capitú.\n' +
        '\n' +
        'Pela minha parte, quiz ceder-lhe a vara; lembrou-me que elle costumava\n' +
        'acompanhar o Santissimo Sacramento aos moribundos, levando uma tocha,\n' +
        'mas que a ultima vez conseguira uma vara do pallio. A distincção\n' +
        'especial do pallio vinha de cobrir o vigario e o sacramento; para tocha\n' +
        'qualquer pessoa servia. Foi elle mesmo que me contou e explicou isto,\n' +
        'cheio de uma gloria pia e risonha. Assim fica entendido o alvoroço\n' +
        'com que entrára na egreja; era a segunda vez do pallio, tanto que\n' +
        'cuidou logo de ir pedil-o. E nada! E tornava á tocha commum, outra\n' +
        'vez a interinidade interrompida; o administrador regressava ao antigo\n' +
        'cargo... Quiz ceder-lhe a vara; o aggregado tolheu-me esse acto de\n' +
        'generosidade, e pediu ao sacristão que nos puzesse, a elle e a mim, com\n' +
        'as duas varas da frente, rompendo a marcha do pallio.\n' +
        '\n' +
        'Opas enfiadas, tochas distribuidas e accesas, padre e ciborio promptos,\n' +
        'o sacristão de hyssope e campainha nos mãos, saiu o prestito á\n' +
        'rua. Quando me vi com uma das varas, passando pelos fieis, que se\n' +
        'ajoelhavam, fiquei commovido. Padua roía a tocha amargamente. É uma\n' +
        'metaphora, não acho outra fórma mais viva de dizer a dôr e a humilhação\n' +
        'do meu visinho. De resto, não pude miral-o por muito tempo, nem ao\n' +
        'aggregado, que, parallelamente a mim, erguia a cabeça com o ar de ser\n' +
        'elle proprio o Deus dos exercitos. Com pouco, senti-me cançado; os\n' +
        'braços caíam-me, felizmente a casa era perto, na rua do Senado.\n' +
        '\n' +
        'A enferma era uma senhora viuva, tisica, tinha uma filha de quinze ou\n' +
        'dezeseis annos, que estava chorando á porta do quarto. A moça não era\n' +
        'formosa, talvez nem tivesse graça; os cabellos caíam despenteados, e\n' +
        'as lagrimas faziam-lhe encarquilhar os olhos. Não obstante, o total\n' +
        'falava e captivava o coração. O vigário confessou a doente, deu-lhe a\n' +
        'communhão e os santos oleos. O pranto da moça redobrou tanto que senti\n' +
        'os meus olhos molhados e fugi. Vim para porto de uma jannela. Pobre\n' +
        'creatura! A dor era communicativa em si mesma; complicada da lembrança\n' +
        'de minha mãe, doeu-me mais, e, quando emfim pensei em Capitú, senti um\n' +
        'impeto de soluçar tambem, enfiei pelo corredor, e ouvi alguem dizer-me:\n' +
        '\n' +
        '--Não chore assim!\n' +
        '\n' +
        'A imagem de Capitú ia commigo, e a minha imaginação, assim como lhe\n' +
        'attribuira lagrimas, ha pouco, assim lhe encheu a bocca de riso agora;\n' +
        'vi-a escrever no muro, falar-me, andar á volta, com os braços no ar;\n' +
        'ouvi distinctamente o meu nome, de uma doçura que me embriagou, e a\n' +
        'voz era della. As tochas accesas, tão lugubres na occasião, tinham-me\n' +
        'ares de um lustre nupcial... Que era lustre nupcial? Não sei; era\n' +
        'alguma cousa contraria á morte, e não vejo outra mais que bodas. Esta\n' +
        'nova sensação me dominou tanto que José Dias veiu a mim, e me disse ao\n' +
        'ouvido, em voz baixa:\n' +
        '\n' +
        '--Não ria assim!\n' +
        '\n' +
        'Fiquei serio depressa. Era o momento da saida. Peguei da minha vara; e,\n' +
        'como já conhecia a distancia, e agora voltavamos para a egreja, o que\n' +
        'fazia a distancia menor,--o peso da vara era mui pequeno. Demais, o sol\n' +
        'cá fora, a animação da rua, os rapazes da minha edade que me fitavam\n' +
        'cheios de inveja, as devotas que chegavam ás janellas ou entravam nos\n' +
        'corredores e se ajoelhavam á nossa passagem, tudo me enchia a alma de\n' +
        'lepidez nova.\n' +
        '\n' +
        'Padua, ao contrario, ia mais humilhado. Apesar de substituido por mim,\n' +
        'não acabava de se consolar da tocha, da miseravel tocha. E comtudo\n' +
        'havia outros que tambem traziam tocha, e apenas mostravam a compostura\n' +
        'do acto; não iam garridos, mas tambem não iam tristes. Via-se que\n' +
        'caminhavam com honra.\n'
    },
    {
      src: '/assets/audio/domcasmurro07.mp3',
      titulo: 'Seção 7',
      subtitulo: 'Capítulos XXXI ao XXXV',
      leitor: 'Mayah',
      numeroSecao: 7,
      texto: '/assets/texts/secao7.txt',
      tempo: '32min',
      capitulo: 'XXXI\n' +
        '\n' +
        'As curiosidades de Capitú.\n' +
        '\n' +
        'Capitú preferia tudo ao seminario. Em vez de ficar abatida com a\n' +
        'ameaça da larga separação, se vingasse a ideia da Europa, mostrou-se\n' +
        'satisfeita. E quando eu lhe contei o meu sonho imperial:\n' +
        '\n' +
        '--Não, Bentinho, deixemos o imperador socegado, replicou; fiquemos por\n' +
        'ora com a promessa de José Dias. Quando é que elle disse que falaria a\n' +
        'sua mãe?\n' +
        '\n' +
        '--Não marcou dia; prometteu que ia ver, que falaria logo que pudesse, e\n' +
        'que me pegasse com Deus.\n' +
        '\n' +
        'Capitú quiz que lhe repetisse as respostas todas do aggregado, as\n' +
        'alterações do gesto e até a pirueta, que apenas lhe contára. Pedia o\n' +
        'som das palavras. Era minuciosa e attenta; a narração e o dialogo, tudo\n' +
        'parecia remoer comsigo. Tambem se póde dizer que conferia, rotulava e\n' +
        'pregava na memoria a minha exposição. Esta imagem é por ventura melhor\n' +
        'que a outra, mas a optima dellas é nenhuma. Capitú era Capitú, isto é,\n' +
        'uma creatura mui particular, mais mulher do que eu era homem. Se ainda\n' +
        'o não disse, ahi fica. Se disse, fica tambem. Ha conceitos que se devem\n' +
        'incutir na alma do leitor, á força de repetição.\n' +
        '\n' +
        'Era tambem mais curiosa. As curiosidades de Capitú dão para um\n' +
        'capitulo. Eram de varia especie, explicaveis e inexplicaveis, assim\n' +
        'uteis como inuteis, umas graves, outras frivolas; gostava de saber\n' +
        'tudo. No collegio onde, desde os sete annos, apprendera a ler, escrever\n' +
        'e contar, francez, doutrina e obras de agulha, não apprendeu, por\n' +
        'exemplo, a fazer renda; por isso mesmo, quiz que prima Justtina lh\'o\n' +
        'ensinasse. Se não estudou latim com o padre Cabral foi porque o padre,\n' +
        'depois de lh\'o propôr gracejando, acabou dizendo que latim não era\n' +
        'lingua de meninas. Capitú confessou-me um dia que esta razão accendeu\n' +
        'nella o desejo de o saber. Em compensação, quiz apprender inglez com\n' +
        'um velho professor amigo do pae e parceiro deste ao sólo, mas não foi\n' +
        'adeante. Tio Cosme ensinou-lhe gamão.\n' +
        '\n' +
        '--Anda apanhar um capotinho, Capitú, dizia-lhe elle.\n' +
        '\n' +
        'Capitú obedecia e jogava com facilidade, com attenção, não sei se diga\n' +
        'com amor. Um dia fui achal-a desenhando a lapís um retraio; dava os\n' +
        'ultimos rasgos, e pediu-me que esperasse para ver se estava parecido.\n' +
        'Era o de meu pae, copiado da tela que minha mãe tinha na sala e que\n' +
        'ainda agora está commigo. Perfeição não era; ao contrario, os olhos\n' +
        'sairam esbogalhados, e os cabellos eram pequenos circulos uns sobre\n' +
        'outros. Mas, não tendo ella rudimento algum de arte, e havendo feito\n' +
        'aquillo de memoria em poucos minutos, achei que era obra de muito\n' +
        'merecimento; descontai-me a edade e a sympathia. Ainda assim, estou\n' +
        'que apprenderia facilmente pintura, como apprendeu musica mais tarde.\n' +
        'Já então namorava o piano da nossa casa, velho traste inutil, apenas\n' +
        'de estimação. Lia os nossos romances, folheava os nossos livros de\n' +
        'gravuras, querendo saber das ruinas, das pessoas, das campanhas, o\n' +
        'nome, a historia, o lograr. José Dias dava-lhe essas noticias com certo\n' +
        'orgulho de erudito. A erudição deste não avultava muito mais que a sua\n' +
        'homoepathia de Cantagallo.\n' +
        '\n' +
        'Um dia, Capitú quiz saber o que eram as figuras da sala de visitas. O\n' +
        'aggregado disse-lho summariamente, demorando-se um pouco mais em Cesar,\n' +
        'com exclamações e latins:\n' +
        '\n' +
        '--Cesar! Julio Cesar! Grande homem! _Tu quoque, Brute?_\n' +
        '\n' +
        'Capitú não achava bonito o perfil de Cesar, mas as acções citadas por\n' +
        'José Dias davam-lhe gestos de admiração. Ficou muito tempo com a cara\n' +
        'virada para elle. Um homem que podia tudo! que fazia tudo! Um homem que\n' +
        'dava a uma senhora uma perola do valor de seis milhões de sestercios!\n' +
        '\n' +
        '--E quanto valia cada sestercio?\n' +
        '\n' +
        'José Dias, não tendo presente o valor do sestercio, respondeu\n' +
        'enthusiasmado:\n' +
        '\n' +
        '--É o maior homem da historia!\n' +
        '\n' +
        'A perola de Cesar accendia os olhos de Capitú. Foi nessa occasião\n' +
        'que ella perguntou a minha mãe porque é que já não usava as joias do\n' +
        'retrato; preferia-se ao que estava na sala, com o de meu pae; tinha um\n' +
        'grande collar, um diadema e brincos.\n' +
        '\n' +
        '--São joias viuvas, como eu, Capitú.\n' +
        '\n' +
        '--Quando é que botou estas?\n' +
        '\n' +
        '--Foi pelas festas da Coroação.\n' +
        '\n' +
        '--Oh! conte-me as festas da Coroação!\n' +
        '\n' +
        'Sabia já o que os paes lhe haviam dito, mas naturalmente tinha para\n' +
        'si que elles pouco mais conheceriam do que o que se passou nas ruas.\n' +
        'Queria a noticia das tribunas da Capella Imperial e dos salões dos\n' +
        'bailes. Nascera muito depois daquellas festas celebres. Ouvindo falar\n' +
        'varias vezes da Maioridade, teimou um dia em saber o que fora este\n' +
        'acontecimento; disseram-lh\'o, e achou que o imperador fizera muito\n' +
        'bem em querer subir ao throno aos quinze annos. Tudo era materia ás\n' +
        'curiosidades de Capitú, mobilias antigas, alfaias velhas, costumes,\n' +
        'noticias de Itaguahy, a infancia e a mocidade de minha mãe, um dito\n' +
        'daqui, uma lembrança dalli, um adagio d\'acolá...\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'XXXII\n' +
        '\n' +
        'Olhos de ressaca.\n' +
        '\n' +
        'Tudo era materia ás curiosidades de Capitú. Caso houve, porém, no qual\n' +
        'não sei se apprendeu ou ensinou, ou se fez ambas as cousas, como eu. É\n' +
        'o que contarei no outro capitulo. N\'este direi sómente que, passados\n' +
        'alguns dias do ajuste com o aggregado, fui ver a minha amiga; eram dez\n' +
        'horas da manhã. D. Fortunata, que estava no quintal, nem esperou que eu\n' +
        'lhe perguntasse pela filha.\n' +
        '\n' +
        '--Está na sala penteando o cabello, disse-me; vá devagarzinho para lhe\n' +
        'pregar um susto.\n' +
        '\n' +
        'Fui devagar, mas ou o pé ou o espelho traiu-me. Este póde ser que não\n' +
        'fosse; era um espelhinho de pataca (perdoai a barateza), comprado a\n' +
        'um mascate italiano, moldura tosca, argolinha de latão, pendente da\n' +
        'parede, entre as duas janellas. Se não foi elle, foi o pé. Um ou outro,\n' +
        'a verdade é que, apenas entrei na sala, pente, cabellos, toda ella\n' +
        'voou pelos ares, e só lhe ouvi esta pergunta:\n' +
        '\n' +
        '--Ha alguma cousa?\n' +
        '\n' +
        '--Não ha nada, respondi; vim ver você antes que o padre Cabral chegue\n' +
        'para a licção. Como passou a noite?\n' +
        '\n' +
        '--Eu bem. José Dias ainda não falou?\n' +
        '\n' +
        '--Parece que não.\n' +
        '\n' +
        '--Mas então quando fala?\n' +
        '\n' +
        '--Disse-me que hoje ou amanhã pretende tocar no assumpto; não vae\n' +
        'logo de pancada, falará assim por alto e por longe, um toque. Depois,\n' +
        'entrará em materia. Quer primeiro ver se mamãe tem a resolução feita...\n' +
        '\n' +
        '--Que tem, tem, interrompeu Capitú. E se não fosse preciso alguem para\n' +
        'vencer já, e de todo, não se lhe falaria. Eu já nem sei se José Dias\n' +
        'poderá influir tanto; acho que fará tudo, se sentir que você realmente\n' +
        'não quer ser padre, mas poderá alcançar...? Elle é attendido; se,\n' +
        'porém... É um inferno isto! Você teime com elle, Bentinho.\n' +
        '\n' +
        '--Teimo; hoje mesmo elle ha de falar.\n' +
        '\n' +
        '--Você jura?\n' +
        '\n' +
        '--Juro! Deixe ver os olhos, Capitú.\n' +
        '\n' +
        'Tinha-me lembrado a definição que José dera delles, «olhos de cigana\n' +
        'obliqua e dissimulada.» Eu não sabia o que era obliqua, mas dissimulada\n' +
        'sabia, e queria ver se se podiam chamar assim. Capitú deixou-se fitar e\n' +
        'examinar. Só me perguntava o que era, se nunca os vira; eu nada achei\n' +
        'extraordinário; a côr e a doçura eram minhas lhe deu outra ideia\n' +
        'do meu intento; imaginou que era um pretexto para miral-os mais de\n' +
        'perto, com os meus olhos longos, constantes, enfiados nelles, e á isto\n' +
        'attribuo que entrassem a ficar crescidos, crescidos e sombrios, com tal\n' +
        'expressão que...\n' +
        '\n' +
        'Rhetorica dos namorados, dá-me uma comparação exacta e poetica para\n' +
        'dizer o que foram aquelles olhos de Capitú. Não me acode imagem capaz\n' +
        'de dizer, sem quebra da dignidade do estylo, o que elles foram e me\n' +
        'fizeram. Olhos de ressaca? Vá, de ressaca. É o que me dá ideia daquella\n' +
        'feição nova. Traziam não sei que fluido mysterioso e energico, uma\n' +
        'força que arrastava para dentro, como a vaga que se retira da praia,\n' +
        'nos dias de ressaca. Para não ser arrastado, agarrei-me ás outras\n' +
        'partes visinhas, ás orelhas, aos braços, aos cabellos espalhados pelos\n' +
        'hombros; mas tão depressa buscava as pupillas, a onda que saía dellas\n' +
        'vinha crescendo, cava e escura, ameaçando envolver-me, puxar-me e\n' +
        'tragar-me. Quantos minutos gastámos naquelle jogo? Só os relogios do\n' +
        'ceu terão marcado esse tempo infinito e breve. A eternidade tem as suas\n' +
        'pendulas nem por não acabar nunca deixa de querer saber a duração das\n' +
        'felicidades e dos supplicios. Ha de dobrar o gozo aos bemaventurados\n' +
        'do ceu conhecer a somma dos tormentos que já terão padecido no inferno\n' +
        'os seus inimigos; assim tambem a quantidade das delicias que terão\n' +
        'gozado no ceu os seus desaffectos augmentará as dores aos condemnados\n' +
        'do inferno. Este outro supplicio escapou ao divino Dante; mas eu não\n' +
        'estou aqui para emendar poetas. Estou para contar que, ao cabo de um\n' +
        'tempo não marcado, agarrei-me definitivamente aos cabellos de Capitú,\n' +
        'mas então com as mãos, e disse-lhe,--para dizer alguma cousa,--que era\n' +
        'capaz de os pentear, se quizesse.\n' +
        '\n' +
        '--Você?\n' +
        '\n' +
        '--Eu mesmo.\n' +
        '\n' +
        '--Vae embaraçar-me o cabello todo, isso, sim.\n' +
        '\n' +
        '--Se embaraçar, você desembaraça depois.\n' +
        '\n' +
        '--Vamos ver.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'XXXIII\n' +
        '\n' +
        'O penteado.\n' +
        '\n' +
        'Capitú deu-me as costas, voltando-se para o espelhinho. Peguei-lhe dos\n' +
        'cabellos, colhi-os todos e entrei a alisal-os com o pente, desde a\n' +
        'testa até ás ultimas pontas, que lhe desciam á cintura. Em pé não dava\n' +
        'geito: não esquecestes que ella era um nadinha mais alta que eu, mas\n' +
        'ainda que fosse da mesma altura. Pedi-lhe que se sentasse.\n' +
        '\n' +
        '--Senta aqui, é melhor.\n' +
        '\n' +
        'Sentou-se. «Vamos ver o grande cabelleireiro», disse-me rindo.\n' +
        'Continuei a alisar os cabellos, com muito cuidado, e dividi-os em duas\n' +
        'porções eguaes, para compor as duas trancas. Não as fiz logo, nem assim\n' +
        'depressa, como podem suppôr os cabelleireiros de officio, mas devagar,\n' +
        'devagarinho, saboreando pelo tacto aquelles fios grossos, que eram\n' +
        'parte della. O trabalho era atrapálhado, ás vezes por desaso, outras\n' +
        'de proposito, para desfazer o feito e refazel-o. Os dedos roçavam na\n' +
        'nuca da pequena ou nas espaduas vestidas de chita, e a sensação era\n' +
        'um deleite. Mas, emfim, os cabellos iam acabando, por mais que eu os\n' +
        'quizesse interminaveis. Não pedi ao ceu que elles fossem tão longos\n' +
        'como os da Aurora, porque não conhecia ainda esta divindade que os\n' +
        'velhos poetas me apresentaram depois; mas, desejei penteal-os por\n' +
        'todos os seculos dos seculos, tecer duas tranças que pudessem envolver\n' +
        'o infinito por um numero innominavel de vezes. Se isto vos parecer\n' +
        'emphatico, desgraçado leitor, é que nunca penteastes uma pequena, nunca\n' +
        'puzestes aos mãos adolescentes na joven cabeça de uma nympha... Uma\n' +
        'nympha! Todo eu estou mythologico. Ainda ha pouco, falando dos seus\n' +
        'olhos de ressaca, cheguei a escrever Thetis; risquei Thetis, risquemos\n' +
        'nympha; digamos somente uma creatura amada, palavra que envolve todas\n' +
        'as potencias christãs e pagãs. Emfim, acabei as duas tranças. Onde\n' +
        'estava a fita para atar-lhes as pontas? Em cima da mesa, um triste\n' +
        'pedaço de fita enxovalhada. Juntei as pontas das tranças, uni-as por um\n' +
        'laço, retoquei a obra, alargando aqui, achatando alli, até que exclamei:\n' +
        '\n' +
        '--Prompto!\n' +
        '\n' +
        '--Estará bom?\n' +
        '\n' +
        '--Veja no espelho.\n' +
        '\n' +
        'Em vez de ir ao espelho, que pensaes que fez Capitú? Não vos esqueçaes\n' +
        'quo estava sentada, de costas para mim. Capitú derreou a cabeça, a tal\n' +
        'ponto que me foi preciso acudir com as mãos e amparal-a; o espaldar\n' +
        'da cadeira era baixo. Inclinei-me depois sobre ella, rosto a rosto,\n' +
        'mas trocados, os olhos de um na linha da bocca do outro. Pedi-lhe que\n' +
        'levantasse a cabeça, podia ficar tonta, machucar o pescoço. Cheguei a\n' +
        'dizer-lhe que estava feia; mas nem esta razão a moveu.\n' +
        '\n' +
        '--Levanta, Capitú!\n' +
        '\n' +
        'Não quiz, não levantou a cabeça, e ficámos assim a olhar um para o\n' +
        'outro, até que ella abrochou os labios, eu desci os meus, e...\n' +
        '\n' +
        'Grande foi a sensação do beijo; Capitú ergueu-se, rapida, eu recuei\n' +
        'até á parede com uma especie de vertigem, sem fala, os olhos escuros.\n' +
        'Quando elles me clarearam, vi que Capitú tinha os seus no chão. Não\n' +
        'me atrevi a dizer nada; ainda que quizesse, faltava-me lingua. Preso,\n' +
        'atordoado, não achava gesto nem impeto que me descolasse da parede e me\n' +
        'atirasse a ella com mil palavras callidas e mimosas... Não mofes dos\n' +
        'meus quinze annos, leitor precoce. Com dezesete, Des Grieux (e mais era\n' +
        'Des Grieux) não pensava ainda na differença dos sexos.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'XXXIV\n' +
        '\n' +
        'Sou homem!\n' +
        '\n' +
        'Ouvimos passos no corredor; era D. Fortunata. Capitú compoz-se\n' +
        'depressa, tão depressa que, quando a mãe apontou á porta, ella\n' +
        'abanava a cabeça e ria. Nenhum laivo amarello. nenhuma contracção de\n' +
        'acanhamento, um riso espontaneo e claro, que ella explicou por estas\n' +
        'palavras alegres:\n' +
        '\n' +
        '--Mamãe, olhe como este senhor cabelleireiro me penteou; pediu-me para\n' +
        'acabar o penteado, e fez isto. Veja que tranças!\n' +
        '\n' +
        '--Que tem? acudiu a mãe, transbordando de benevolencia. Está muito bem,\n' +
        'ninguem dirá que é de pessoa que não sabe pentear.\n' +
        '\n' +
        '--O que, mamãe? Isto? redarguiu Capitú desfazendo as tranças. Ora,\n' +
        'mamãe!\n' +
        '\n' +
        'E com um enfadamento gracioso e voluntario que ás vezes tinha, pegou\n' +
        'do pente e alisou os cabellos para renovar o penteado. D. Fortunata\n' +
        'chamou-lhe tonta, e disse-me que não fizesse caso, não era nada,\n' +
        'maluquices da filha. Olhava com ternura para mim e para ella. Depois,\n' +
        'parece-me que desconfiou. Vendo-me calado, enfiado, cosido á parede,\n' +
        'achou talvez que houvera entre nós algo mais que penteado, e sorriu por\n' +
        'dissimulação...\n' +
        '\n' +
        'Como eu quizesse falar tambem para disfarçar o meu estado, chamei\n' +
        'algumas palavras cá de dentro, e ellas acudiram de prompto, mas de\n' +
        'atropello, e encheram-me a bocca sem poder sair nenhuma. O beijo de\n' +
        'Capitú fechava-me os labios. Uma exclamação, um simples artigo, por\n' +
        'mais que investissem com força, não logravam romper de dentro. E todas\n' +
        'as palavras recolheram-se ao coração, murmurando: «Eis aqui um que não\n' +
        'fará grande carreira no mundo, por menos que as emoções o dominem...»\n' +
        '\n' +
        'Assim, apanhados pela mãe, éramos dous e contrarios, ella encobrindo\n' +
        'com a palavra o que eu publicava pelo silencio. D. Fortunata tirou-me\n' +
        'daquella hesitação, dizendo que minha mãe me mandára chamar para a\n' +
        'licção de latim; o padre Cabral estava á minha espera. Era uma saida;\n' +
        'despedi-me e enfiei pelo corredor. Andando, ouvi que a mãe censurava as\n' +
        'maneiras da filha, mas a filha não dizia nada.\n' +
        '\n' +
        'Corri ao meu quarto, peguei dos livros, mas não passei a sala da\n' +
        'licção; sentei-me na cama, recordando o penteado e o resto. Tinha\n' +
        'estremeções, linha uns esquecimentos em que perdia a consciencia de\n' +
        'mim e das cousas que me rodeavam, para viver não sei onde nem como.\n' +
        'E tornava a mim, e via a cama, as paredes, os livros, o chão, ouvia\n' +
        'algum som de fóra, vago, proximo ou remoto, e logo perdia tudo para\n' +
        'sentir sómente os beiços de Capitú... Sentia-os estirados, embaixo dos\n' +
        'meus, egualmente esticados para os della, e unindo-se uns aos outros.\n' +
        'De repente, sem querer, sem pensar, saiu-me da boca esta palavra de\n' +
        'orgulho:\n' +
        '\n' +
        '--Sou homem!\n' +
        '\n' +
        'Suppuz que me tivessem ouvido, porque a palavra saiu em voz alta, e\n' +
        'corri á porta da alcova. Não havia ninguem fóra. Voltei para dentro,\n' +
        'e, baixinho, repeti que era homem. Ainda agora tenho o éco aos meus\n' +
        'ouvidos. O gosto que isto me deu foi enorme. Colombo não o teve maior,\n' +
        'descobrindo a America, e perdoai a banalidade em favor do cabimento;\n' +
        'com effeito, ha em cada adolescente um mundo encoberto, um almirante e\n' +
        'um sol de Outubro. Fiz outros achados mais tarde; nenhum me deslumbrou\n' +
        'tanto. A denuncia de José Dias alvoroçara-me, a licção do velho\n' +
        'coqueiro tambem, a vista dos nossos nomes abertos por ella no muro do\n' +
        'quintal deu-me grande abalo, como vistes; nada disso valeu a sensação\n' +
        'do beijo. Podiam ser mentira ou illusão. Sendo verdade, eram os ossos\n' +
        'da verdade, não eram a carne e o sangue della. As proprias mãos\n' +
        'tocadas, apertadas, como que fundidas, não podiam dizer tudo.\n' +
        '\n' +
        '--Sou homem!\n' +
        '\n' +
        'Quando repeti isto, pela terceira vez, pensei no seminario, mas como\n' +
        'se pensa em perigo que passou, um mal abortado, um pesadelo extincto;\n' +
        'todos os meus nervos me disseram que homens não são padres. O sangue\n' +
        'era da mesma opinião. Outra vez senti os beiços de Capitú. Talvez abuso\n' +
        'um pouco das reminiscencias osculares; mas a saudade é isto mesmo; é o\n' +
        'passar e repassar das memorias antigas. Ora, de todas as daquelle tempo\n' +
        'creio que a mais doce é esta, a mais nova, a mais comprehensiva, a que\n' +
        'inteiramente me revelou a mim mesmo. Outras tenho, vastas e numerosas,\n' +
        'doces tambem, de varia especie, muitas intellectuaes, egualmente\n' +
        'intensas. Grande homem que fosse, a recordação era menor que esta.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'XXXV\n' +
        '\n' +
        'O protonotario apostolico.\n' +
        '\n' +
        'Enfim, peguei dos livros e corri á licção. Não corri precisamente; a\n' +
        'meio caminho parei, advertindo que devia ser muito tarde, e podiam\n' +
        'ler-me no semblante alguma cousa. Tive ideia de mentir, allegar uma\n' +
        'vertigem que me houvesse deitado ao chão; mas o susto que causaria\n' +
        'a minha mãe fez-me rejeital-a. Pensei em prometter algumas dezenas\n' +
        'de padre-nossos; tinha, porém, outra promessa em aberto e outro\n' +
        'favor pendente... Não, vamos ver; fui andando, ouvi vozes alegres,\n' +
        'conversavam cuidadosamente. Quando entrei na sala, ninguem ralhou\n' +
        'commigo.\n' +
        '\n' +
        'O padre Cabral recebera na vespera um recado do internuncio; foi\n' +
        'ter com elle, e soube que, por decreto pontificio, acabava de ser\n' +
        'nomeado protonotario apostolico. Esta distincção do papa dera-lhe\n' +
        'grande contentamento e a todos os nossos. Tio Cosme e prima Justina\n' +
        'repetiam o titulo com admiração; era a primeira vez que elle soava aos\n' +
        'nossos ouvidos, acostumados a conegos, monsenhores, bispos, nuncios,\n' +
        'e internuncios; mas que era protonotario apostolico? O padre Cabral\n' +
        'explicou que não era propriamente o cargo da curia, mas as honras\n' +
        'delle. Tio Cosme viu exalçar-se no parceiro de voltarete, e repetia:\n' +
        '\n' +
        '--Protonotario apostolico!\n' +
        '\n' +
        'E voltando-se para mim:\n' +
        '\n' +
        '--Prepara-te, Bentinho; tu pódes vir a ser protonotario apostolico.\n' +
        '\n' +
        'Cabral ouvia com gosto a repetição do titulo. Estava em pé, dava alguns\n' +
        'passos, sorria ou tamborilava na tampa da boceta. O tamanho do titulo\n' +
        'como que lhe dobrava a magnificencia, posto que, para ligal-o ao nome,\n' +
        'era demasiado comprido; esta segunda reflexão foi tio Cosme que a fez.\n' +
        'Padre Cabral acudiu que não era preciso dizel-o todo, bastava que lhe\n' +
        'chamassem o protonotario Cabral. Subentendia-se apostolico.\n' +
        '\n' +
        '--Protonotario Cabral.\n' +
        '\n' +
        '--Sim, tem razão; protonotario Cabral.\n' +
        '\n' +
        '--Mas, Sr. protonotario,--acudiu prima Justina para se ir acostumando\n' +
        'ao uso do titulo,--isto o obriga a ir a Roma?\n' +
        '\n' +
        '--Não, D. Justina.\n' +
        '\n' +
        '--Não, são só as honras, observou minha mãe.\n' +
        '\n' +
        '--Agora, não impede,--disse Cabral, que continuava a reflectir,--não\n' +
        'impede que nos casos de maior formalidade, actos publicos, cartas\n' +
        'de cerimonia, etc., se empregue o titulo inteiro: protonotario\n' +
        'apostolico. No uso commum, basta protonotario.\n' +
        '\n' +
        '--Justamente, assentiram todos.\n' +
        '\n' +
        'José Dias, que entrou pouco depois de mim, applaudiu a distincção, e\n' +
        'recordou, a proposito, os primeiros actos politicos de Pio IX, grandes\n' +
        'esperanças da Italia; mas ninguem pegou do assumpto; o principal da\n' +
        'hora e do logar era o meu velho mestre de latim. Eu, voltando a mim\n' +
        'do receio, entendi que devia comprimental-o tambem, e este applauso\n' +
        'não lhe foi menos ao coração que os outros. Bateu-me na bochecha\n' +
        'paternalmente, e acabou dando-me férias. Era muita felicidade para uma\n' +
        'só hora. Um beijo e férias! Creio que o meu rosto disse isto mesmo,\n' +
        'porque tio Cosme, sacudindo a barriga, chamou-me peralta; mas José Dias\n' +
        'corrigiu a alegria:\n' +
        '\n' +
        '--Não tem que festejar a vadiação; o latim sempre lhe ha de ser\n' +
        'preciso, _ainda que não venha a ser padre._\n' +
        '\n' +
        'Conheci aqui o meu homem. Era a primeira palavra, a semente lançada á\n' +
        'terra, assim de passagem, como para acostumar os ouvidos da familia.\n' +
        'Minha mãe sorriu para mim, cheia de amor e de tristeza, mas respondeu\n' +
        'logo:\n' +
        '\n' +
        '--Ha de ser padre, e padre bonito.\n' +
        '\n' +
        '--Não esqueça, mana Gloria, e protonotario tambem. Protonotario\n' +
        'apostolico.\n' +
        '\n' +
        '--O protonotario Santiago, accentuou Cabral.\n' +
        '\n' +
        'Se a intenção tio meu mestre de latim era ir acostumando ao uso do\n' +
        'titulo com o nome, não sei bem; o que sei é que quando ouvi o meu\n' +
        'nome ligado a tal titulo, deu-me vontade de dizer um desaforo. Mas a\n' +
        'vontade aqui foi antes uma ideia, uma ideia sem lingua, que se deixou\n' +
        'ficar quieta e muda, tal como d\'ahi a pouco outras ideias... Mas\n' +
        'essas pedem um capitulo especial. Rematemos este dizendo que o mestre\n' +
        'de latim falou algum tempo da minha ordenação ecclesiastica, ainda\n' +
        'que sem grande interesse. Elle buscava um assumpto alheio para se\n' +
        'mostrar esquecido da propria gloria, mas era esta que o deslumbrava na\n' +
        'occasião. Era um velho magro, sereno, dotado de qualidades boas. Alguns\n' +
        'defeitos tinha; o mais excelso delles era ser guloso, não propriamente\n' +
        'glotão; comia pouco, mas estimava o fino e o raro, e a nossa cosinha,\n' +
        'se era simples, era menos pobre que a delle. Assim, quando minha mãe\n' +
        'lhe disse que viesse jantar, afim de se lhe fazer uma saude, os olhos\n' +
        'com que acceitou seriam de protonotario, mas não eram aposlolicos. E\n' +
        'para agradar a minha mãe novamente pegou em mim, descrevendo o meu\n' +
        'futuro ecclesiastico, e queria saber se ia para o seminario agora, no\n' +
        'anuo proximo, e offerecia-se a falar ao «senhor bispo», tudo marchetado\n' +
        'do «protonotario Santiago.»\n'
    },
    {
      src: '/assets/audio/domcasmurro08.mp3',
      titulo: 'Seção 8',
      subtitulo: 'Capítulos XXXVI ao XL',
      leitor: 'Rachel Moraes',
      numeroSecao: 8,
      texto: '/assets/texts/secao8.txt',
      tempo: '16min',
      capitulo: 'XXXVI\n' +
        '\n' +
        'Ideia sem pernas e ideia sem braços.\n' +
        '\n' +
        'Deixei-os, a pretexto de brincar, e fui-me outra vez a pensar na\n' +
        'aventura da manhã. Era o que melhor podia fazer, sem latim, e até com\n' +
        'latim. Ao cabo de cinco minutos, lembrou-me ir correndo á casa visinha,\n' +
        'agarrar Capitú, desfazer-lhe as tranças, refazel-as e concluil-as\n' +
        'daquella maneira particular, bocca sobre bocca. É isto, vamos, é\n' +
        'isto... Ideia só! ideia sem pernas! As outras pernas não queriam correr\n' +
        'nem andar. Muito depois é que sairam vagarosamente e levaram-me á\n' +
        'casa de Capitú. Quando alli cheguei, dei com ella na sala, na mesma\n' +
        'sala, sentada na marqueza, almofada no regaço, cosendo em paz. Não me\n' +
        'olhou de rosto, mas a furto e a medo, ou, se preferes a phraseologia\n' +
        'do aggregado, obliqua e dissimulada. As mãos pararam, depois de\n' +
        'encravada a agulha no panno. Eu, do lado opposto da mesa, não sabia que\n' +
        'fizesse; e outra vez me fugiram as palavras que trazia. Assim gastámos\n' +
        'alguns minutos compridos, até que ella deixou inteiramente a costura,\n' +
        'ergueu-se e esperou-me. Fui ter com ella, e perguntei se a mãe havia\n' +
        'dito alguma cousa; respondeu-me que não. A bocca com que respondeu era\n' +
        'tal que cuido haver-me provocado um gesto de approximação. Certo é que\n' +
        'Capitú recuou um pouco.\n' +
        '\n' +
        'Era occasião de pegal-a, puxal-a e beijal-a... Ideia só ideia sem\n' +
        'braços! Os meus ficaram caidos e mortos. Não conhecia nada da\n' +
        'Escriptura. Se conhecesse, é provavel que o espirito de Satanaz me\n' +
        'fizesse dar a lingua mystica do _Cantico_ um sentido directo e natural.\n' +
        'Então obedeceria ao primeiro versiculo; «Applique elle os labios,\n' +
        'dando-me o osculo da sua bocca.» E pelo que respeita aos braços, que\n' +
        'tinha inertes, bastaria cumprir o vers. 6.o do cap. II:\n' +
        '«A sua mão esquerda se pôz já debaixo da minha cabeça, e a sua mão\n' +
        'direita me abraçará depois.» Vedes ahi a chronologia dos gestos. Era só\n' +
        'executal-a; mas ainda que eu conhecesse o texto, as attitudes de Capitú\n' +
        'eram agora tão retrahidas, que não sei se não continuaria parado, foi\n' +
        'ella entretanto, que me tirou daquella situação.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'XXXVII\n' +
        '\n' +
        'A alma é cheia de mysterios.\n' +
        '\n' +
        'Padre Cabral eslava esperando ha muito tempo?\n' +
        '\n' +
        '--Hoje não dei licção; tive férias.\n' +
        '\n' +
        'Expliquei-lhe o motivo das férias. Contei-lhe tambem que o padre Cabral\n' +
        'falara da minha entrada no seminario, apoiando a resolução de minha\n' +
        'mãe, e disse delle cousas feias e duras. Capitú reflectiu algum tempo,\n' +
        'e acabou perguntando-me se podia ir comprimentar o padre, á tarde, em\n' +
        'minha casa.\n' +
        '\n' +
        '--Póde, mas para que?\n' +
        '\n' +
        'Papae naturalmente ha de querer ir tambem, mas é melhor que elle vá á\n' +
        'casa do padre; é mais bonito. Eu não, que já sou meia moça, concluiu\n' +
        'rindo.\n' +
        '\n' +
        'O riso animou-me. As palavras pareciam ser uma troça comsigo mesma, uma\n' +
        'vez que, desde manhã, era mulher, como eu era homem. Achei-lhe graça,\n' +
        'e, para dizer tudo, quiz provar-lhe que era moça inteira. Peguei-lhe\n' +
        'levemente na mão direita, depois na esquerda, e fiquei assim pasmado e\n' +
        'tremulo. Era a ideia com mãos. Quiz puxar as de Capitú, para obrigal-a\n' +
        'a vir atraz dellas, mas ainda agora a acção não respondeu á intenção.\n' +
        'Comtudo, achei-me forte e atrevido. Não imitava ninguem; não vivia com\n' +
        'rapazes, que me ensinassem anecdotas de amor. Não conhecia a violação\n' +
        'de Lucrecia. Dos romanos apenas sabia que falavam pela artinha do\n' +
        'padre Pereira e eram patricios de Poncio Pilatos. Não nego que o final\n' +
        'do penteado da manhã era um grande passo no caminho da movimentação\n' +
        'amorosa, mas o gesto de então foi justamente o contrario deste. De\n' +
        'manhã, ella derreou a cabeça, agora fugia-me; nem é só nisso que os\n' +
        'lances differiam; em outro ponto, parecendo haver repetição, houve\n' +
        'contraste.\n' +
        '\n' +
        'Penso que ameacei puxal-a a mim. Não juro, começava a estar tão\n' +
        'alvoroçado, que não pude ter toda a consciência dos meus actos; mas\n' +
        'concluo que sim, porque ella recuou e quiz tirar as mãos das minhas;\n' +
        'depois, talvez por não poder recuar mais, collocou um dos pés adeante\n' +
        'e o outro atraz, e fugiu com o busto. Foi este gesto que me obrigou\n' +
        'a reter-lhe as mãos com força. O busto afinal cançou e cedeu, mas a\n' +
        'cabeça não quiz ceder tambem, e, caida para traz, inutilisava lodos\n' +
        'os meus esforços, porque eu já fazia esforços, leitor amigo. Não\n' +
        'conhecendo a licção do _Cantico_, não me acudiu estender a mão esquerda\n' +
        'por baixo do cabeça della; demais, este gesto suppõe um accordo de\n' +
        'vontades, e Capitú, que me resistia agora, aproveitaria o gesto para\n' +
        'arrancar-se á outra mão e fugir-me inteiramente. Ficámos naquelle luta,\n' +
        'sem estrepito, porque apesar do ataque e da defesa, não perdiamos a\n' +
        'cautela necessaria para não sermos ouvidos lá de dentro; a alma é cheia\n' +
        'de mysterios. Agora sei que a puxava; a cabeça continuou a recuar, até\n' +
        'que cançou; mas então foi a vez da bocca. A bocca de Capitú iniciou um\n' +
        'movimento inverso, relativamente á minha, indo para um lado, quando\n' +
        'eu a buscava do lado opposto. Naquelle desencontro estivemos, sem que\n' +
        'ousasse um pouco mais, e bastaria um pouco mais...\n' +
        '\n' +
        'Nisto ouvimos bater á porta e falar no corredor. Era o pae de Capitú,\n' +
        'que voltava da repartição um pouco mais cedo, como usava ás vezes.\n' +
        '«Abre, Nanata! Capitú, abre!» Apparentemente era o mesmo lance da\n' +
        'manhã, quando a mãe deu comnosco, mas só apparentemente; em verdade,\n' +
        'era outro. Considerai que de manhã tudo estava acabado, e o passo de D.\n' +
        'Fortunata foi um aviso para que nos compuzessemos. Agora lutavamos com\n' +
        'as mãos presas, e nada estava sequer começado.\n' +
        '\n' +
        'Ouvimos o ferrolho da porta que dava para o corredor interno; era a mãe\n' +
        'que abria. Eu, uma vez que confesso tudo, digo aqui que não tive tempo\n' +
        'de soltar as mãos da minha amiga; pensei nisso, cheguei a tental-o, mas\n' +
        'Capitú, antes que o pae acabasse de entrar, fez um gesto inesperado,\n' +
        'pousou a bocca na minha bocca, e deu de vontade o que estava a recusar\n' +
        'á força. Repito, a alma é cheia de mysterios.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'XXXVIII\n' +
        '\n' +
        'Que susto, meu Deus!\n' +
        '\n' +
        'Quando Padua, vindo pelo interior, entrou na sala de visitas,\n' +
        'Capitú, em pé, de costas para mim, inclinada sobre a costura, como a\n' +
        'recolhel-a, perguntava em voz alta:\n' +
        '\n' +
        '--Mas, Bentinho, que ó protonotario apostolico?\n' +
        '\n' +
        '--Ora, vivam! exclamou o pae.\n' +
        '\n' +
        '--Que susto, meu Deus!\n' +
        '\n' +
        'Agora é que o lance é o mesmo; mas se conto aqui, taes quaes, os\n' +
        'dous lances de ha quarenta annos, é para mostrar que Capitú não se\n' +
        'dominava só em presença da mãe; o pae não lhe metteu mais medo. No\n' +
        'meio de uma situação que me atava a lingua, usava da palavra com a\n' +
        'maior ingenuidade deste mundo. A minha persuasão é que o coração não\n' +
        'lhe batia mais mais nem menos. Allegou susto, e deu á cara um ar meio\n' +
        'enfiado; mas eu, que sabia tudo, vi que era mentira e fiquei com\n' +
        'inveja. Foi logo falar ao pae, que apertou a minha mão, e quiz saber\n' +
        'porque a filha falava em protonotario apostolico. Capitú repeliu-lhe\n' +
        'o que ouvira de mim, e opinou logo que o pae devia ir comprimentar o\n' +
        'padre em casa delle; ella iria á minha. E colligindo os petrechos da\n' +
        'costura, enfiou pelo corredor, bradando infantilmente:\n' +
        '\n' +
        '--Mamãe, jantar, papae chegou!\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'XXXIX\n' +
        '\n' +
        'A vocação.\n' +
        '\n' +
        'Padre Cabral estava naquella primeira hora das honras em que as\n' +
        'minimas congratulações valem por odes. Tempo chega em que os\n' +
        'dignificados recebem os louvores como um tributo usual, cara morta,\n' +
        'sem agradecimentos. O alvoroço da primeira hora é melhor; esse estado\n' +
        'da alma que vê na inclinação do arbusto, tocado do vento, um parabém\n' +
        'da flora universal, traz sensações mais intimas e finas que qualquer\n' +
        'outro. Cabral ouviu as palavras de Capitú com infinito prazer.\n' +
        '\n' +
        '--Obrigado, Capitú, muito obrigado; estimo que você goste tambem. Papae\n' +
        'está bom? E mamãe? A voce não se pergunta; essa cara é mesmo de quem\n' +
        'vende saude. E como vamos de rezas?\n' +
        '\n' +
        'A todas as perguntas, Capitú ia respondendo promptamente e bem.\n' +
        'Trazia um vestidinho melhor e os sapatos de sair. Não entrou com a\n' +
        'familiaridade do costume, deteve-se um instante á porta da sala, antes\n' +
        'de ir beijar a mão a minha mãe e ao padre. Como désse a este, duas\n' +
        'vezes em cinco minutos, o titulo de protonotario, José Dias, para se\n' +
        'desforrar da concurrencia, fez um pequeno discurso em honra «ao coração\n' +
        'paternal e augustissimo de Pio IX.»\n' +
        '\n' +
        '--Você é um grande _prosa_, disse tio Cosme, quando elle acabou.\n' +
        '\n' +
        'José Dias sorriu sem vexame. Padre Cabral confirmou os louvores do\n' +
        'aggregado, sem os seus superlativos; ao que este accrescentou que\n' +
        'o cardeal Mastai evidentemente fôra talhado para a tiára desde o\n' +
        'principio dos tempos. E, piscando-me o olho, concluiu:\n' +
        '\n' +
        '--A vocação é tudo. O estado ecclesiastico é perfeitissimo, comtanto\n' +
        'que o sacerdote venha já destinado do berço. Não havendo vocação, falo\n' +
        'de vocação sincera e real, um joven póde muito bem estudar as lettras\n' +
        'humanas, que tambem são uteis e honradas.\n' +
        '\n' +
        'Padre Cabral retorquia:\n' +
        '\n' +
        '--A vocação é muito, mas o poder de Deus é soberano. Um homem póde não\n' +
        'ter gosto á egreja e até perseguil-a, e um dia a voz de Deus lhe fala,\n' +
        'e elle sae apostolo; veja S. Paulo.\n' +
        '\n' +
        '--Não contesto, mas o que eu digo é outra cousa. O que eu digo é que se\n' +
        'póde muito bem servir a Deus sem ser padre, cá fóra; póde-se ou não se\n' +
        'póde?\n' +
        '\n' +
        '--Póde-se.\n' +
        '\n' +
        '--Pois então! exclamou José Dias triumphalmente, olhando em volta de\n' +
        'si. Sem vocação é que não ha bom padre, e em qualquer profissão liberal\n' +
        'se serve a Deus, como todos devemos.\n' +
        '\n' +
        '--Perfeitamente, mas vocação não é só do berço que se traz.\n' +
        '\n' +
        '--Homem, é a melhor.\n' +
        '\n' +
        '--Um moço sem gosto nenhum á vida ecclesiastica póde acabar por ser\n' +
        'muito bom padre; tudo é que Deus o determine. Não me quero dar por\n' +
        'modelo, mas aqui estou eu que nasci com a vocação da medicina; meu\n' +
        'padrinho, que era coadjutor de Santa Rita, teimou com meu pae para que\n' +
        'me mettesse no seminario; meu pae cedeu. Pois, senhor, tomei tal gosto\n' +
        'aos estudos e á companhia dos padres, que acabei ordenando-me. Mas,\n' +
        'supponha que não acontecia assim, e que eu não mudava de vocação, o que\n' +
        'é que acontecia? Tinha estudado no seminario algumas materias que é bom\n' +
        'saber, e são sempre melhor ensinadas naquellas casas.\n' +
        '\n' +
        'Prima Justina interveiu:\n' +
        '\n' +
        '--Como? Então póde-se entrar para o seminario e não sair padre?\n' +
        '\n' +
        'Padre Cabral respondeu que sim, que se podia, e, voltando-se para\n' +
        'mim, falou da minha vocação, que era manifesta; os meus brinquedos\n' +
        'foram sempre de egreja, e eu adorava os officios divinos. A prova\n' +
        'não provava; todas as creanças do meu tempo eram devotas. Cabral\n' +
        'accrescentou que o reitor de S. José, a quem contara ultimamente a\n' +
        'promessa de minha mãe, tinha o meu nascimento por milagre; elle era\n' +
        'da mesma opinião. Capitú, cosida ás saias de minha mãe, não attendia\n' +
        'aos olhos anciosos que eu lhe mandava; tambem não parecia escutar a\n' +
        'conversação sobre o seminario e suas consequencias, e, aliás, decorou o\n' +
        'principal, como vim a saber depois. Duas vezes fui á janella, esperando\n' +
        'que ella fosse tambem, e ficassemos á vontade, sósinhos, até acabar o\n' +
        'mundo, se acabasse, mas Capitú não me appareceu. Não deixou minha mãe,\n' +
        'senão para ir embora. Eram ave-marias, despediu-se.\n' +
        '\n' +
        '--Vae com ella, Bentinho, disse minha mãe.\n' +
        '\n' +
        '--Não precisa, não, D. Gloria, acudiu ella rindo, eu sei o caminho.\n' +
        'Adeus, Sr. protonotario...\n' +
        '\n' +
        '--Adeus, Capitú.\n' +
        '\n' +
        'Tendo dado um passo no sentido de atravessar a sala, é claro que o\n' +
        'meu dever, o meu gosto, todos os impulsos da edade e da occasião\n' +
        'eram atravessal-a de todo, seguir a visinha corredor fóra, descer á\n' +
        'chacara, entrar no quintal, dar-lhe terceiro beijo, e despedir-me. Não\n' +
        'me importou a recusa, que cuidei simulada, e enfiei pelo corredor;\n' +
        'mas, Capitú que ia depressa, estacou e fez-me signal que voltasse. Não\n' +
        'obedeci; cheguei-me a ella.\n' +
        '\n' +
        '--Não venha, não; amanhã falaremos.\n' +
        '\n' +
        '--Mas eu queria dizer a você...\n' +
        '\n' +
        '--Amanhã.\n' +
        '\n' +
        '--Escuta!\n' +
        '\n' +
        '--Fica!\n' +
        '\n' +
        'Falava baixinho; pegou-me na mão, e poz o dedo na bocca. Uma preta,\n' +
        'que veiu de dentro accender o lampião do corredor, vendo-nos naquella\n' +
        'attitude, quasi ás escuras, riu de sympathia e murmurou em tom que\n' +
        'ouvissemos alguma cousa que não entendí bem nem mal. Capitú segredou-me\n' +
        'que a escrava desconfiara, e ia talvez contar ás outras. Novamente me\n' +
        'intimou que ficasse, e retirou-se; eu deixei-me estar parado, pregado,\n' +
        'agarrado ao chão.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'XL\n' +
        '\n' +
        'Uma egua.\n' +
        '\n' +
        'Ficando só, reflecti algum tempo, e tive uma fantasia. Já conheceis as\n' +
        'minhas fantasias. Contei-vos a da visita imperial; disse-vos a desta\n' +
        'casa do Engenho Novo, reproduzindo a de Matacavallos... A imaginação\n' +
        'foi a companheira de toda a minha existencia, viva, rapida, inquieta,\n' +
        'alguma vez timida e amiga de empacar, as mais dellas capaz de engolir\n' +
        'campanhas e campanhas, correndo. Creio haver lido em Tacito que as\n' +
        'eguas iberas concebiam pelo vento; se não foi nelle, foi n\'outro autor\n' +
        'antigo, que entendeu guardar essa crendice nos seus livros. Neste\n' +
        'particular, a minha imaginação era uma grande egua ibera; a menor brisa\n' +
        'lhe dava um potro, que saía logo cavallo de Alexandre; mas deixemos\n' +
        'metaphoras atrevidas e improprias dos meus quinze annos. Digamos o\n' +
        'caso simplesmente. A fantasia daquella hora foi confessar a minha mãe\n' +
        'os meus amores para lhe dizer que não tinha vocação ecclesiastica. A\n' +
        'conversa sobre vocação tornava-me agora toda inteira, e, ao passo que\n' +
        'me assustava, abria-me uma porta de saida. «Sim, é isto, pensei; vou\n' +
        'dizer a mamãe que não tenho vocação e confesso o nosso namoro; se ella\n' +
        'duvidar, conto-lhe o que se passou outro dia, o penteado e o resto... »\n'
    },
    {
      src: '/assets/audio/domcasmurro09.mp3',
      titulo: 'Seção 9',
      subtitulo: 'Capítulos XLI ao XLV',
      leitor: 'Jane Nogueira',
      numeroSecao: 9,
      texto: '/assets/texts/secao9.txt',
      tempo: '23min',
      capitulo: 'XLI\n' +
        '\n' +
        'A audiencia secreta.\n' +
        '\n' +
        'O resto fez-me ficar mais algum tempo, no corredor, pensando. Vi entrar\n' +
        'o doutor João da Costa, e preparou-se logo o voltarete do costume.\n' +
        'Minha mãe saiu da sala, e, dando commigo, perguntou se acompanhara\n' +
        'Capitú.\n' +
        '\n' +
        '--Não, senhora, ella foi só.\n' +
        '\n' +
        'E quasi investindo para ella:\n' +
        '\n' +
        '--Mamãe, eu queria dizer-lhe uma cousa.\n' +
        '\n' +
        '--Que é?\n' +
        '\n' +
        'Toda assustada, quiz saber o que é que me doia, se a cabeça, se o\n' +
        'peito, se o estomago, e apalpava-me a testa para ver se tinha febre.\n' +
        '\n' +
        '--Não tenho nada, não, senhora.\n' +
        '\n' +
        '--Mas então que é?\n' +
        '\n' +
        '--É uma cousa, mamãe... Mas, escute, olhe, é melhor depois do chá;\n' +
        'logo... Não é nada mau; mamãe assusta-se por tudo; não é cousa de\n' +
        'cuidado.\n' +
        '\n' +
        '--Não é molestia?\n' +
        '\n' +
        '--Não, senhora.\n' +
        '\n' +
        '--É, isso é volta de constipação. Disfarças para não tomar suadouro,\n' +
        'mas tu estás constipado; conhece-se pela voz.\n' +
        '\n' +
        'Tentei rir, para mostrar que não tinha nada. Nem por isso permittiu\n' +
        'adiar a confidencia, pegou em mim, levou-me ao quarto della, accendeu\n' +
        'vela, e ordenou-me que lhe dissesse tudo. Então eu perguntei-lhe, para\n' +
        'principiar, quando é que ia para o seminario.\n' +
        '\n' +
        '--Agora só para o anno, depois das férias.\n' +
        '\n' +
        '--Vou... para ficar?\n' +
        '\n' +
        '--Como ficar?\n' +
        '\n' +
        '--Não volto para casa?\n' +
        '\n' +
        '--Voltas aos sabbados e pelas férias; é melhor. Quando te ordenares\n' +
        'padre, vens morar commigo.\n' +
        '\n' +
        'Enxuguei os olhos e o nariz. Ella afagou-me, depois quiz\n' +
        'reprehender-me, mas creio que a voz lhe tremia, e pareceu-me que tinha\n' +
        'os olhos humidos. Disse-lhe que tambem sentia a nossa separação. Negou\n' +
        'que fosse separação; era só alguma ausencia, por causa dos estudos; só\n' +
        'os primeiros dias. Em pouco tempo eu me acostumaria aos companheiros e\n' +
        'aos mestres, e acabaria gostando de viver com elles.\n' +
        '\n' +
        '--Eu só gosto de mamãe.\n' +
        '\n' +
        'Não houve calculo nesta palavra, mas estimei dizel-a, por fazer crer\n' +
        'que ella era a minha unica affeição; desviava as suspeitas de cima\n' +
        'de Capitú. Quantas intenções viciosas ha assim que embarcam, a meio\n' +
        'caminho, n\'uma phrase innocente e pura! Chega a fazer suspeitar que a\n' +
        'mentira é, muita vez, tão involuntaria como a transpiração. Por outro\n' +
        'lado, leitor amigo, nota que eu queria desviar as suspeitas de cima de\n' +
        'Capitú, quando havia chamado minha mãe justamente para confirmal-as;\n' +
        'mas as contradicções são deste mundo. A verdade é que minha mãe era\n' +
        'candida como a primeira aurora, anterior ao primeiro peccado; nem\n' +
        'por simples intuição era capaz de deduzir uma cousa de outra, isto\n' +
        'é, não concluiria da minha repentina opposição que eu andasse em\n' +
        'segredinhos com Capitú, como lhe dissera José Dias. Calou-se durante\n' +
        'alguns instantes; depois replicou-me sem imposição nem autoridade, o\n' +
        'que me veiu animando á resistencia. Dahi o falar-lhe na vocação que se\n' +
        'discutira naquella tarde, e que eu confessei não sentir em mim.\n' +
        '\n' +
        '--Mas tu gostavas tanto de ser padre, disse ella; não te lembras que\n' +
        'até pedias para ir ver sair os seminaristas de S. José, com as suas\n' +
        'batinas? Em casa, quando José Dias te chamava Reverendissimo, tu rias\n' +
        'com tanto gosto! Como é que agora...? Não creio, não, Bentinho. E\n' +
        'depois... Vocação? Mas a vocação vem com o costume, continuou repetindo\n' +
        'as reflexões que ouvira ao meu professor de latim.\n' +
        '\n' +
        'Como eu buscasse contestal-a, reprehendeu-me sem aspereza, mas com\n' +
        'alguma força, e eu tornei ao filho submisso que era. Depois, ainda\n' +
        'falou gravemente e longamente sobre a promessa que fizera; não me disse\n' +
        'as circumstancias, nem a occasião, nem os motivos della, cousas que só\n' +
        'vim a saber mais tarde. Affirmou o principal, isto é, que a havia do\n' +
        'cumprir, em pagamento a Deus.\n' +
        '\n' +
        '--Nosso Senhor me acudiu, salvando a tua existencia, não lhe hei de\n' +
        'mentir nem faltar, Bentinho; são cousas que não se fazem sem peccado, e\n' +
        'Deus que é grande e poderoso, não me deixaria assim, não, Bentinho; eu\n' +
        'sei que seria castigada e bem castigada. Ser padre é bom e santo; você\n' +
        'conhece muitos, como o padre Cabral, que vive tao feliz com a irmã; um\n' +
        'tio meu tambem foi padre, e escapou de ser bispo, dizem... Deixa de\n' +
        'manha, Bentinho.\n' +
        '\n' +
        'Creio que os olhos que lhe deitei foram tão queixosos, que ella emendou\n' +
        'logo a palavra; manha, não, não podia ser manha, sabia muito bem que\n' +
        'eu era amigo della, e não seria capaz de fingir um sentimento que não\n' +
        'tivesse. Molleza é o que queria dizer, que me deixasse de molleza, que\n' +
        'me fizesse homem e obedecesse ao que cumpria, em beneficio della e para\n' +
        'bem da minha alma. Todas essas cousas e outras foram ditas um pouco\n' +
        'atropelladamente, e a voz não lhe saia clara, mas velada e esganada.\n' +
        'Vi que a emoção della era outra vez grande, mas não recuava dos seus\n' +
        'propositos, e aventurei-me a perguntar-lhe:\n' +
        '\n' +
        '--E se mamãe pedisse a Deus que a dispensasse da promessa?\n' +
        '\n' +
        '--Não, não peço. Estás tonto, Bentinho? E como havia de saber que Deus\n' +
        'me dispensava?\n' +
        '\n' +
        '--Talvez em sonho; eu sonho as vezes com anjos e santos.\n' +
        '\n' +
        '--Tambem eu, num filho; mas é inútil... Vamos, é tarde; vamos para a\n' +
        'sala. Está entendido: no primeiro ou no segundo mez do anno que vem,\n' +
        'irás para o seminario. O que eu quero é que saibas bem os livros que\n' +
        'estás estudando; é bonito, não só para ti, como para o padre Cabral. No\n' +
        'seminario ha interesse em conhecer-te, porque o padre Cabral fala de ti\n' +
        'com enthusiasmo.\n' +
        '\n' +
        'Caminhou para a porta, saimos ambos. Antes de sair, voltou-se para mim,\n' +
        'e quasi a vi saltar-me ao collo e dizer-me que não seria padre. Este\n' +
        'era já o seu desejo intimo, á proporção que se approximava o tempo.\n' +
        'Quizera um modo de pagar a divida contrahida, outra moeda, que valesse\n' +
        'tanto ou mais, e não achava nenhuma.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'XLII\n' +
        '\n' +
        'Capitú reflectindo.\n' +
        '\n' +
        'No dia seguinte fui á casa visinha, logo que pude. Capitú despedia-se\n' +
        'de tres amigas que tinham ido visital-a, Paula e Sandia, companheiras\n' +
        'de collegio, aquella de quinze, esta de desessete annos, a primeira\n' +
        'filha de um medico, a segunda de um commerciante de objectos\n' +
        'americanos. Estava abatida, trazia um lenço atado na cabeça; a mãe\n' +
        'contou-me que fora excesso de leitura na vespera, antes e depois\n' +
        'do chá, na sala e na cama, até muito depois da meia noite, e com\n' +
        'lamparina...\n' +
        '\n' +
        '--Se eu accendesse vela, mamãe zangava-se. Já estou boa.\n' +
        '\n' +
        'E como desatasse o lenço, a mãe disse-lhe timidamente que era melhor\n' +
        'atal-o, mas Capitú respondeu que não era preciso, estava boa.\n' +
        '\n' +
        'Ficámos sós na sala; Capitú continuou a narração da mãe, accrescentando\n' +
        'que passara mal por causa do que ouvira em minha casa. Tambem eu lhe\n' +
        'contei o que se déra commigo, a entrevista com minha mãe, as minhas\n' +
        'supplicas, as lagrimas della, e por fim as ultimas respostas decisivas:\n' +
        'dentro de dous ou tres mezes iria para o seminario. Que fariamos agora?\n' +
        'Capitú ouvia-me com attenção sofrega, depois sombria; quando acabei,\n' +
        'respirava a custo, como prestes a estalar de colera, mas conteve-se.\n' +
        '\n' +
        'Ha tanto tempo que isto succedeu que não posso dizer com segurança se\n' +
        'chorou devéras, ou se sómente enxugou os olhos; cuido que os enxugou\n' +
        'sómente. Vendo-lhe o gesto, peguei-lhe na mão para animal-a, mas tambem\n' +
        'eu precisava ser animado. Caimos no canapé, e ficámos a olhar para o\n' +
        'ar. Minto; ella olhava para o chão. Fiz o mesmo, logo que a vi assim...\n' +
        'Mas eu creio que Capitú olhava para dentro de si mesma, emquanto que\n' +
        'eu fitava devéras o chão, o roido das fendas, duas moscas andando e um\n' +
        'pé de cadeira lascado. Era pouco, mas distraía-me da afflicção. Quando\n' +
        'tornei a olhar para Capitú, vi que não se mexia, e fiquei com tal medo\n' +
        'que a sacudi brandamente. Capitú tornou cá para fora e pediu-me que\n' +
        'outra vez lhe contasse o que se passára com minha mãe. Satisfil-a,\n' +
        'attenuando o texto desta vez, para não amofinal-a. Não me chames\n' +
        'dissimulado, chama-me compassivo; é certo que receiava perder Capitú,\n' +
        'se lhe morressem as esperanças todas, mas doia-me vel-a padecer. Agora,\n' +
        'a verdade ultima, a verdade das verdades, é que já me arrependia de\n' +
        'haver falado a minha mãe, antes de qualquer trabalho effectivo por\n' +
        'parte de José Dias; examinando bem, não quizera ter ouvido um desengano\n' +
        'que eu reputava certo, ainda que demorado. Capitú reflectia, reflectia,\n' +
        'reflectia...\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'XLIII\n' +
        '\n' +
        'Você tem medo?\n' +
        '\n' +
        'De repente, cessando a reflexão, fitou em mim os olhos de ressaca, e\n' +
        'perguntou-me se tinha medo.\n' +
        '\n' +
        '--Medo?\n' +
        '\n' +
        '--Sim, pergunto se você tem medo.\n' +
        '\n' +
        '--Medo de que?\n' +
        '\n' +
        '--Medo de apanhar, de ser preso, de brigar, do andar, de trabalhar...\n' +
        '\n' +
        'Não entendi. Se ella me tem dito simplesmente: «Vamos embora!» póde\n' +
        'ser que eu obedecesse ou não; em todo caso, entenderia. Mas aquella\n' +
        'pergunta assim, vaga e solta, não pude atinar o que era.\n' +
        '\n' +
        '--Mas... não entendo. De apanhar?\n' +
        '\n' +
        '--Sim.\n' +
        '\n' +
        '--Apanhar de quem? Quem é que me dá pancada?\n' +
        '\n' +
        'Capitú fez um gesto de impaciencia. Os olhos de ressaca não se mexiam\n' +
        'e pareciam crescer. Sem saber de mim, e, não querendo interrogal-a\n' +
        'novamente, entrei a cogitar d\'onde me viriam pancadas, e porque, e\n' +
        'tambem porque é que seria preso, e quem é que me havia de prender.\n' +
        'Valha-me Deus! vi de imaginação o aljube, uma casa escura e infecta.\n' +
        'Tambem vi a presiganga, o quartel dos Barbonos e a Casa de Correcção.\n' +
        'Todas essas bellas instituições sociaes me envolviam no seu mysterio,\n' +
        'sem que os olhos de ressaca de Capitú deixassem de crescer para mim,\n' +
        'a tal ponto que as fizeram esquecer de todo. O erro de Capitú foi\n' +
        'não deixal-os crescer infinitamente, antes diminuir até ás dimensões\n' +
        'normaes, e dar-lhes o movimento do costume. Capitú tornou ao que era,\n' +
        'disse-me que estava brincando, não precisava affligir-me, e, com um\n' +
        'gesto cheio de graça, bateu-me na casa sorrindo, e disse:\n' +
        '\n' +
        '--Medroso!\n' +
        '\n' +
        '--Eu? Mas...\n' +
        '\n' +
        '--Não é nada, Bentinho. Pois quem é que ha de dar pancada ou prender\n' +
        'você? Desculpe que eu hoje estou meia maluca; quero brincar, e...\n' +
        '\n' +
        '--Não, Capitú; você não está brincando; nesta occasião, nenhum de nós\n' +
        'tom vontade de brincar.\n' +
        '\n' +
        '--Tem razão, foi só maluquice; até logo.\n' +
        '\n' +
        '--Como até logo?\n' +
        '\n' +
        '--Está-me voltando a dôr do cabeça; vou botar uma rodella de limão nas\n' +
        'fontes.\n' +
        '\n' +
        'Fez o que disse, e atou o lenço outra vez na testa. Em seguida,\n' +
        'acompanhou-me ao quintal para se despedir de mim; mas, ainda ahi nos\n' +
        'detivemos por alguns minutos, sentados sobre a borda do poço. Ventava,\n' +
        'o ceu estava coberto. Capitú falou novamente da nossa separação, como\n' +
        'de um facto certo e definitivo, por mais que eu, receioso disso mesmo,\n' +
        'buscasse agora razões para animal-a. Capitú, quando não falava, riscava\n' +
        'no chão, com um pedaço cie taquara, narizes e perfis. Desde que se\n' +
        'mettera a desenhar, era uma das suas diversões; tudo lhe servia de\n' +
        'papel e lapis. Como me lembrassem os nossos nomes abertos por ella no\n' +
        'muro, quiz fazer o mesmo no chão, e pedi-lhe a taquara. Não me ouviu ou\n' +
        'não me attendeu.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'XLIV\n' +
        '\n' +
        'O primeiro filho.\n' +
        '\n' +
        '--Dê cá, deixe escrever uma cousa.\n' +
        '\n' +
        'Capitú olhou para mim, mas de um modo que me fez lembrar a definição\n' +
        'de José Dias, obliquo e dissimulado; levantou o olhar, sem levantar os\n' +
        'olhos. A voz, um tanto sumida, perguntou-me:\n' +
        '\n' +
        '--Diga-me uma cousa, mas fale verdade, não quero disfarce; ha de\n' +
        'responder com o coração na mão.\n' +
        '\n' +
        '--Que é? Diga.\n' +
        '\n' +
        '--Se você tivesse de escolher entre mim e sua mãe, a quem é que\n' +
        'escolhia?\n' +
        '\n' +
        '--Eu?\n' +
        '\n' +
        'Fez-me signal que sim.\n' +
        '\n' +
        '--Eu escolhia... mas para que escolher? Mamãe não é capaz de me\n' +
        'perguntar isso.\n' +
        '\n' +
        '--Pois, sim, mas eu pergunto. Supponha você que está no seminario e\n' +
        'recebe a noticia de que eu vou morrer...\n' +
        '\n' +
        '--Não diga isso!\n' +
        '\n' +
        '--... Ou que me mato de saudades, se você não vier logo, e sua mãe não\n' +
        'quizer que você venha, diga-me, você vem?\n' +
        '\n' +
        '--Venho.\n' +
        '\n' +
        '--Contra a ordem de sua mãe?\n' +
        '\n' +
        '--Contra a ordem de mamãe.\n' +
        '\n' +
        '--Você deixa seminario, deixa sua mãe, deixa tudo, para me ver morrer?\n' +
        '\n' +
        '--Não fale em morrer, Capitú!\n' +
        '\n' +
        'Capitú teve um risinho descorado e incredulo, e com a taquara escreveu\n' +
        'uma palavra no chão; inclinei-me e li: _mentiroso._\n' +
        '\n' +
        'Era tão extranho tudo aquillo, que não achei resposta. Não atinava com\n' +
        'a razão do escripto, como não atinava com a do falado. Se me acudisse\n' +
        'alli uma injuria grande ou pequena, é possivel que a escrevesse tambem,\n' +
        'com a mesma taquara, mas não me lembrava nada. Tinha a cabeça vazia.\n' +
        'Ao mesmo tempo tomei-me de receio de que alguem nos pudesse ouvir ou\n' +
        'ler. Quem, se eramos sós? D. Fortunata chegara uma vez á porta da casa,\n' +
        'mas entrou logo depois. A solidão era completa. Lembra-me que umas\n' +
        'andorinhas passaram por cima do quintal e foram para os lados do morro\n' +
        'de Santa Theresa; ninguem mais. Ao longe, vozes vagas e confusas, na\n' +
        'rua um tropel de bestas, do lado da casa o chilrear dos passarinhos\n' +
        'do Padua. Nada mais, ou sómente este phenomeno curioso, que o nome\n' +
        'escripto por ella, não só me espiava do chão com gesto escarninho,\n' +
        'mas até me pareceu que repercutia no ar. Tive então uma ideia ruim;\n' +
        'disse-lhe que, afinal de contas, a vida de padre não era má, e eu podia\n' +
        'acceital-a sem grande pena. Como desforço, era pueril; mas eu sentia a\n' +
        'secreta esperança de vel-a atirar-se a mim lavada em lagrimas. Capitú\n' +
        'limitou-se a arregalar muito os olhos, e acabou por dizer:\n' +
        '\n' +
        '--Padre é bom, não ha duvida; melhor que padre só conego, por causa das\n' +
        'meias roxas. O roxo é côr muito bonita. Pensando bem, é melhor conego.\n' +
        '\n' +
        '--Mas não se póde ser conego sem ser primeiramente padre, disse-lhe eu\n' +
        'mordendo os beiços.\n' +
        '\n' +
        '--Bem; comece pelas meias pretas, depois virão as roxas. O que eu não\n' +
        'quero perder é a sua missa nova; avise-me a tempo para fazer um vestido\n' +
        'á moda, saia balão e babados grandes... Mas talvez nesse tempo a moda\n' +
        'seja outra. A egreja ha de ser grande, Carmo ou S. Francisco.\n' +
        '\n' +
        '--Ou Candelaria.\n' +
        '\n' +
        '--Candelaria tambem. Qualquer sorve, comtanto que eu ouça a missa nova.\n' +
        'Hei de fazer um figurão. Muita gente ha de perguntar: «Quem é aquella\n' +
        'moça faceira que alli está com um vestido tão bonito?»--«Aquella é D.\n' +
        'Capitolina, uma moça que morou na rua de Matacavallos...»\n' +
        '\n' +
        '--Que morou? Você vae mudar-se?\n' +
        '\n' +
        '--Quem sabe onde é que ha do morar amanhã? disse ella com um tom leve\n' +
        'de melancolia; mas tornando logo ao sarcasmo: E você no altar, mettido\n' +
        'na alva, com a capa de ouro por cima, cantando... _Pater noster..._\n' +
        '\n' +
        'Ah! como eu sinto não ser um poeta romantico para dizer que isto era um\n' +
        'duello de ironias! Contaria os meus botes e os della, a graça de um e a\n' +
        'promptidão de outro, e o sangue correndo, e o furor na alma, até ao meu\n' +
        'golpe final que foi este:\n' +
        '\n' +
        '--Pois, sim, Capitú, você ouvirá a minha missa nova, mas com uma\n' +
        'condição.\n' +
        '\n' +
        'Ao que ella respondeu:\n' +
        '\n' +
        '--Vossa Reverendíssima póde falar.\n' +
        '\n' +
        '--Promette uma cousa?\n' +
        '\n' +
        '--Que é?\n' +
        '\n' +
        '--Diga se promette.\n' +
        '\n' +
        '--Não sabendo o que é, não prometto.\n' +
        '\n' +
        '--A falar verdade são duas cousas, continuei eu, por haver-me acudido\n' +
        'outra ideia.\n' +
        '\n' +
        '--Duas? Diga quaes são.\n' +
        '\n' +
        '--A primeira é que só se ha de confessar commigo, para eu lhe dar a\n' +
        'penitencia e a absolvição. A segunda é que...\n' +
        '\n' +
        '--A primeira está promettida, disse ella vendo-me hesitar, e\n' +
        'accrescentou que esperava a segunda.\n' +
        '\n' +
        'Palavra que me custou, e antes não me chegasse a sair da boca; não\n' +
        'ouviria o que ouvi, o não escreveria aqui uma cousa que vae talvez\n' +
        'achar incredulos.\n' +
        '\n' +
        '--A segunda... sim... é que... Promette-me que seja eu o padre que case\n' +
        'você?\n' +
        '\n' +
        'Que me case? disso ella um tanto commovida.\n' +
        '\n' +
        'Logo depois fez descair os labios, e abanou a cabeça.\n' +
        '\n' +
        '--Não, Bentinho, disse, seria esperar muito tempo; você não vae ser\n' +
        'padre já amanhã, leva muitos annos... Olhe, prometto outra cousa;\n' +
        'prometto que ha de baptisar o meu primeiro filho.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'XLV\n' +
        '\n' +
        'Abane a cabeça, leitor.\n' +
        '\n' +
        'Abane a cabeça, leitor; faça todos os gestos de incredulidade. Chegue a\n' +
        'deitar fóra este livro, se o tédio já o não obrigou a isso antes; tudo\n' +
        'é possivel. Mas, se o não fez antes e só agora, fio que torne a pegar\n' +
        'do livro e que o abra na mesma pagina, sem crer por isso na veracidade\n' +
        'do autor. Todavia, não ha nada mais exacto. Foi assim mesmo que Capitú\n' +
        'falou, com taes palavras e maneiras. Falou do primeiro filho, como se\n' +
        'fosse a primeira boneca.\n' +
        '\n' +
        'Quanto ao meu espanto, se tambem foi grande, veiu de mistura com uma\n' +
        'sensação exquisita. Percorreu-me um fluido. Aquella ameaça de um\n' +
        'primeiro filho, o primeiro filho de Capitú, o casamento della com\n' +
        'outro, portanto, a separação absoluta, a perda, a anniquilação, tudo\n' +
        'isso produzia um tal effeito, que não achei palavra nem gesto; fiquei\n' +
        'estupido. Capitú sorria; eu via o primeiro filho brincando no chão...\n'
    },
    {
      src: '/assets/audio/domcasmurro10.mp3',
      titulo: 'Seção 10',
      subtitulo: 'Capítulos XLVI ao L',
      leitor: 'Rachel Moraes',
      numeroSecao: 10,
      texto: '/assets/texts/secao10.txt',
      tempo: '12min',
      capitulo: 'XLVI\n' +
        '\n' +
        'As pazes.\n' +
        '\n' +
        'As pazes fizeram-se como a guerra, depressa. Buscasse eu neste livro\n' +
        'a minha gloria, e diria que as negociações partiram de mim; mas não,\n' +
        'foi ella que as iniciou. Alguns instantes depois, como eu estivesse\n' +
        'cabisbaixo, ella abaixou tambem a cabeça, mas voltando os olhos para\n' +
        'cima afim de ver os meus. Fiz-me de rogado; depois quiz levantar-me\n' +
        'para ir embora, mas nem me levantei, nem sei se iria. Capitú fitou-me\n' +
        'uns olhos tao ternos, e a posição os fazia tão supplices, que me deixei\n' +
        'ficar, passei-lhe o braço pela cintura, ella pegou-me na ponta dos\n' +
        'dedos, e...\n' +
        '\n' +
        'Outra vez D. Fortunata appareceu á porta da casa; não sei para quê,\n' +
        'se nem me deixou tempo de puxar o braço; desappareceu logo. Podia ser\n' +
        'um simples descargo de consciencia, uma cerimonia, como as rezas de\n' +
        'obrigação, sem devoção, que se dizem de tropel; a não ser que fosse\n' +
        'para certificar aos proprios olhos a realidade que o coração lhe\n' +
        'dizia...\n' +
        '\n' +
        'Fosse o que fosse, o meu braço continuou a apertar a cintura da filha,\n' +
        'e foi assim que nos pacificámos. O bonito é que cada um de nós queria\n' +
        'agora as culpas para si, e pediamos reciprocamente perdão. Capitú\n' +
        'allegava a insomnia, a dôr de cabeça, o abatimento do espirito, e\n' +
        'finalmente «os seus calundús.» Eu, que era muito chorão por esse tempo,\n' +
        'sentia os olhos molhados... Era amor puro, era effeito dos padecimentos\n' +
        'da amiguinha, era a ternura da reconciliação.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'XLVII\n' +
        '\n' +
        '«A senhora saiu.»\n' +
        '\n' +
        '--Está bom, acabou, disso eu finalmente; mas, explique-me só uma cousa,\n' +
        'porque é que você me perguntou se eu tinha medo de apanhar?\n' +
        '\n' +
        '--Não foi por nada, respondeu Capitú, depois de alguma hesitação...\n' +
        'Para que bolir nisso?\n' +
        '\n' +
        '--Diga sempre. Foi por causa do seminario?\n' +
        '\n' +
        '--Foi; ouvi dizer que lá dão pancada... Não? Eu tambem não creio.\n' +
        '\n' +
        'A explicação agradou-me; não tinha outra. Se, como penso, Capitú\n' +
        'não disse a verdade, força é reconhecer que não podia dizel-a, e a\n' +
        'mentira é dessas creadas que se dão pressa em responder ás visitas\n' +
        'que «a senhora saiu», quando a senhora não quer falar a ninguem. Ha\n' +
        'nessa cumplicidade um gosto particular; o peccado em commum eguala\n' +
        'por instantes a condição das pessoas, não contando o prazer que dá a\n' +
        'cara das visitas enganadas, e as costas com que ellas descem... A\n' +
        'verdade não saiu, ficou em casa, no coração de Capitú, cochilando o\n' +
        'seu arrependimento. E eu não desci triste nem zangado; achei a creada\n' +
        'galante, appetecivel, melhor que a ama.\n' +
        '\n' +
        'As andorinhas vinham agora em sentido contrario, ou não seriam as\n' +
        'mesmas. Nós é que eramos os mesmos; alli ficámos sommando as nossas\n' +
        'illusões, os nossos temores, começando já a sommar as nossas saudades.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'XLVIII\n' +
        '\n' +
        'Juramento do poço.\n' +
        '\n' +
        '--Não! exclamei de repente.\n' +
        '\n' +
        '--Não quê?\n' +
        '\n' +
        'Tinha havido alguns minutos de silencio, durante os quaes reflecti\n' +
        'muito e acabei por uma ideia; o tom da exclamação, porém, foi tão alto\n' +
        'que espantou a minha visinha.\n' +
        '\n' +
        '--Não ha de ser assim, continuei. Dizem que não estamos em edade de\n' +
        'casar, que somos creanças, creançolas,--já ouvi dizer creançolas. Bem;\n' +
        'mas dous ou tres annos passam depressa. Você jura uma cousa? Jura que\n' +
        'só ha de casar commigo?\n' +
        '\n' +
        'Capitú não hesitou em jurar, e até lhe vi as faces vermelhas de prazer.\n' +
        'Jurou duas vezes e uma terceira:\n' +
        '\n' +
        '--Ainda que você case com outra, cumprirei o meu juramento, não casando\n' +
        'nunca.\n' +
        '\n' +
        '--Que eu case com outra?\n' +
        '\n' +
        '--Tudo póde ser, Bentinho. Você póde achar outra moça que lhe queira,\n' +
        'apaixonar-se por ella e casar. Quem sou eu para você lembrar-se de mim\n' +
        'nessa occasião?\n' +
        '\n' +
        '--Mas eu tambem juro! Juro, Capitú, juro por Deus Nosso Senhor que só\n' +
        'me casarei com você. Basta isto?\n' +
        '\n' +
        '--Devia bastar, disse ella; eu não me atrevo a pedir mais. Sim, você\n' +
        'jura... Mas juremos por outro modo; juremos que nos havemos de casar um\n' +
        'com outro, haja o que houver.\n' +
        '\n' +
        'Comprehendeis a differença; era mais que a eleição do conjuge, era a\n' +
        'affirmação do matrimonio. A cabeça da minha amiga sabia pensar claro e\n' +
        'depressa. Realmente, a formula anterior era limitada, apenas exclusiva.\n' +
        'Podiamos acabar solteirões, como o sol e a lua, sem mentir ao juramento\n' +
        'do poço. Esta formula era melhor, e tinha a vantagem de me fortalecer\n' +
        'o coração contra a investidura ecclesiastica. Jurámos pela segunda\n' +
        'formula, e ficámos tão felizes que todo receio de perigo desappareceu.\n' +
        'Eramos religiosos, tínhamos o ceu por testemunha. Eu nem já temia o\n' +
        'seminario.\n' +
        '\n' +
        '**--Se teimarem muito, irei; mas faço de conta que é um collegio\n' +
        'qualquer; não tomo ordens.\n' +
        '\n' +
        'Capitú temia a nossa separação, mas acabou acceitando este alvitre, que\n' +
        'era o melhor. Não affligiamos minha mãe, e o tempo correria até o ponto\n' +
        'em que o casamento pudesse fazer-se. Ao contrario, qualquer resistencia\n' +
        'ao seminario confirmaria a denuncia de José Dias. Esta reflexão não foi\n' +
        'minha, mas della.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'XLIX\n' +
        '\n' +
        'Uma vela aos sabbados.\n' +
        '\n' +
        'Eis aqui como, após tantas canceiras, tocavamos o porto a que nos\n' +
        'deviamos ter abrigado logo. Não nos censures, piloto de má sorte,\n' +
        'não se navegam corações como os outros mares deste mundo. Estavamos\n' +
        'contentes, entramos a falar do futuro. Eu promettia a minha esposa uma\n' +
        'vida socegada e bella, na roça ou fóra da cidade. Viriamos aqui uma vez\n' +
        'por anno. Se fosse em arrabalde, seria longe, onde ninguem nos fosse\n' +
        'aborrecer. A casa, na minha opinião, não devia ser grande nem pequena,\n' +
        'um meio termo; plantei-lhe flôres, escolhi moveis, uma sege e um\n' +
        'oratorio. Sim, haviamos de ter um oratorio bonito, alto, de jacarandá,\n' +
        'com a imagem de Nossa Senhora da Conceição. Demorei-me mais nisto que\n' +
        'no resto, em parte porque eramos religiosos, em parte para compensar a\n' +
        'batina que eu ia deitar as ortigas: mas ainda restava uma parte que\n' +
        'attribuo ao intuito secreto e inconsciente de captara protecção do ceu.\n' +
        'Haviamos de accender uma vela aos sabbabos...\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'L\n' +
        '\n' +
        'Um meio termo.\n' +
        '\n' +
        'Mezes depois fui para o seminario de S. José. Se eu pudesse contar as\n' +
        'lagrimas que chorei na vespera e na manhã, sommaria mais que todas\n' +
        'as vertidas desde Adão e Eva. Ha nisto alguma exageração; mas é bom\n' +
        'ser emphatico, uma ou outra vez, para compensar este escrupulo de\n' +
        'exactidão que me afflige. Entretanto, se eu me ativer só á lembrança da\n' +
        'sensação, não fico longe da verdade; aos quinze annos, tudo é infinito.\n' +
        'Realmente, por mais preparado que estivesse, padeci muito. Minha mãe\n' +
        'tambem padeceu, mas soffria com alma e coração; demais, o padre Cabral\n' +
        'achára um meio termo, experimentar-me a vocação; se no fim de dous\n' +
        'annos, eu não revelasse vocação ecclesiastica, seguiria outra carreira.\n' +
        '\n' +
        '--As promessas devem ser cumpridas conforme Deus quer. Supponha que\n' +
        'Nosso Senhor nega disposição a seu filho, e que o costume do seminario\n' +
        'não lhe dá o gosto que me concedeu a mim, é que a vontade divina é\n' +
        'outra. A senhora não podia pôr em seu filho, antes de nascido, uma\n' +
        'vocação que Nosso Senhor lhe recusou...\n' +
        '\n' +
        'Era uma concessão do padre. Dava a minha mãe um perdão antecipado,\n' +
        'fazendo vir do credor a relevação da divida. Os olhos della brilharam,\n' +
        'mas a bocca disse que não. José Dias, não tendo alcançado ir commigo\n' +
        'para a Europa, agarrou-se ao mais proximo, e apoiou o «alvitre do Sr.\n' +
        'protonotario»; só lhe parecia que um anno era bastante.\n' +
        '\n' +
        '--Estou certo, disse elle, piscando-me o olho, que dentro de um anno a\n' +
        'vocação ecclesiastica do nosso Bentinho se manifesta clara e decisiva.\n' +
        'Ha de dar um padre de mão cheia. Tambem se não vier em um anno...\n' +
        '\n' +
        'E a mim, mais tarde, em particular:\n' +
        '\n' +
        '--Vá por um anno; um anno passa depressa. Se não sentir gosto nenhum,\n' +
        'é que Deus não quer, como diz o padre, e nesse caso, meu amiguinho, o\n' +
        'melhor remedio é a Europa.\n' +
        '\n' +
        'Capitú deu-me egual conselho, quando minha mãe lhe annunciou a minha\n' +
        'ida definitiva para o seminario:\n' +
        '\n' +
        '--Minha filha, você vae perder o seu companheiro de creança...\n' +
        '\n' +
        'Fez-lhe tão bem este tratamento de _filha_ (era a primeira vez que\n' +
        'minha mãe lh\'o dava), que nem teve tempo de ficar triste; beijou-lhe\n' +
        'a mão, e disse-lhe que já sabia disso por mim mesmo. Em particular\n' +
        'animou-me a supportar tudo com paciencia; no fim de um anno as cousas\n' +
        'estariam mudadas, e um anno andava depressa. Não foi ainda a nossa\n' +
        'despedida; esta fez-se na vespera, por um modo que pede capitulo\n' +
        'especial. O que unicamente digo aqui é que, ao passo que nos prendiamos\n' +
        'um ao outro, ella ia prendendo minha mãe, fez-se mais assidua e terna,\n' +
        'vivia ao pé della, com os olhos nella. Minha mãe era de natural\n' +
        'sympathico, e egualmente sensivel; tanto se doía como se aprazia de\n' +
        'qualquer cousa. Entrou a achar em Capitú uma porção de graças novas, de\n' +
        'dotes finos e raros; deu-lhe um anel dos seus e algumas galanterias.\n' +
        'Não consentiu em photographar-se, como a pequena lhe pedia, para lhe\n' +
        'dar um retrato; mas tinha uma miniatura, feita aos vinte e cinco annos,\n' +
        'e, depois de algumas hesitações, resolveu dar-lh\'a. Os olhos de Capitú,\n' +
        'quando recebeu o mimo, não se descrevem; não eram obliquos, nem de\n' +
        'ressaca, eram direitos, claros, lucidos. Beijou o retrato com paixão,\n' +
        'minha mãe fez-lhe a mesma cousa a ella. Tudo isto me lembra a nossa\n' +
        'despedida.\n'
    },
    {
      src: '/assets/audio/domcasmurro11.mp3',
      titulo: 'Seção 11',
      subtitulo: 'Capítulos LI ao LV',
      leitor: 'Marina Fikota',
      numeroSecao: 11,
      texto: '/assets/texts/secao11.txt',
      tempo: '19min',
      capitulo: 'LI\n' +
        '\n' +
        'Entre luz e fusco.\n' +
        '\n' +
        'Entre luz e fusco, tudo ha de ser breve como esse instante. Nem durou\n' +
        'muito a nossa despedida, foi o mais que pôde, em casa della, na sala\n' +
        'de visitas, antes do accender das velas; ahi é que nos despedimos\n' +
        'de uma vez. Jurámos novamente que haviamos de casar um com outro, e\n' +
        'não foi só o aperto de mão que sellou o contracto, como no quintal,\n' +
        'foi a conjuncção das nossas boccas amorosas... Talvez risque isto na\n' +
        'impressão, se até lá não pensar de outra maneira; se pensar, fica. E\n' +
        'desde já fica, porque, em verdade, é a nossa defesa. O que o mandamento\n' +
        'divino quer é que não juremos _em vão_ pelo santo nome de Deus. Eu\n' +
        'não ia mentir ao seminario, uma vez que levava um contracto feito\n' +
        'no proprio cartorio do ceu. Quanto ao sello, Deus, como fez os mãos\n' +
        'limpas, assim fez os labios limpos, e a malicia está antes na tua\n' +
        'cabeça perversa que na daquelle casal de adolescentes... Oh! minha\n' +
        'doce companheira da meninice, eu era puro, e puro fiquei, e puro entrei\n' +
        'na aula de S. José, a buscar de apparencia a investidura sacerdotal, e\n' +
        'antes della a vocação. Mas a vocação eras tu, a investidura eras tu.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'LII\n' +
        '\n' +
        'O velho Padua.\n' +
        '\n' +
        'Ja agora conto tambem os adeuses do velho Padua. Logo cedo veiu á nossa\n' +
        'casa. Minha mãe disse-lhe que fosse falar-me ao quarto.\n' +
        '\n' +
        '--Dá licença? perguntou mettendo a cabeça pela porta.\n' +
        '\n' +
        'Fui apertar-lhe a mão; elle abraçou-me com ternura.\n' +
        '\n' +
        '--Seja feliz! disse-me. A mim e a toda a minha gente creia que ficam\n' +
        'muitas saudades. Todos nós estimamos muito o senhor, como merece. Se\n' +
        'lhe disserem outra cousa, não acredite. São intrigas. Tambem eu, quando\n' +
        'me casei, fui victima de intrigas; desfizeram-se. Deus é grande e\n' +
        'descobre a verdade. Se algum dia perder sua mãe e seu tio,--cousa que\n' +
        'eu, por esta luz que me allumia, não desejo, porque são boas pessoas,\n' +
        'excedentes pessoas, e eu sou grato ás finezas recebidas... Não, eu não\n' +
        'sou como outros, certos parasitas, vindos de fóra para desunião das\n' +
        'familias, aduladores baixos, não; eu sou de outra especie; não vivo\n' +
        'papando os jantares nem morando em casa alheia... Emfim, são os mais\n' +
        'felizes!\n' +
        '\n' +
        '--Porque falará assim? pensei. Naturalmente sabe que José Dias diz mal\n' +
        'delle.\n' +
        '\n' +
        '--Mas, como ia dizendo, se algum dia perder os seus parentes, póde\n' +
        'contar com a nossa companhia. Não é sufficiente em importancia, mas a\n' +
        'affeição é immensa, creia. Padre que seja, a nossa casa está ás suas\n' +
        'ordens. Quero só que me não esqueça; não esqueça o velho Padua...\n' +
        '\n' +
        'Suspirou e continuou:\n' +
        '\n' +
        '--Não esqueça o seu velho Padua, e, se tem algum trapinho que me deixe\n' +
        'em lembrança, um caderno latino, qualquer cousa, um botão de collete,\n' +
        'cousa que já lhe não preste para nada. O valer é a lembrança.\n' +
        '\n' +
        'Tive um sobresalto. Havia embrulhado em um papel um cacho dos meus\n' +
        'cabellos, tão grandes e tão bonitos, cortados na vespera. A intenção\n' +
        'era leval-os a Capitú, ao sair; mas tive ideia de dal-o ao pae, a filha\n' +
        'saberia lomal-o e guardal-o. Peguei do embrulho e dei-lh\'o.\n' +
        '\n' +
        '--Aqui está, guarde.\n' +
        '\n' +
        '--Um cachinho dos seus cabellos! exclamou Padua abrindo e fechando o\n' +
        'embrulho. Oh! obrigado! obrigado por mim e pela minha gente! Vou dai-o\n' +
        'á velha, para guardal-o, ou á pequena, que é mais cuidadosa que a mãe.\n' +
        'Que lindos que são! Como é que se corta uma belleza destas? Dê cá um\n' +
        'abraço! outro! mais outro! adeus!\n' +
        '\n' +
        'Tinha os olhos humidos devéras; levava a cara dos desenganados, como\n' +
        'quem empregou em um só bilhete todas as suas economias de esperanças, e\n' +
        'vê sair branco o maldito numero,--um numero tão bonito!\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'LIII\n' +
        '\n' +
        'A caminho!\n' +
        '\n' +
        'Fui para o seminario. Poupa-me as outras despedidas. Minha mãe\n' +
        'apertava-me ao peito. Prima Justina suspirava. Talvez chorasse mal ou\n' +
        'nada. Ha pessoas a quem as lagrimas não acodem logo nem nunca; diz-se\n' +
        'que padecem mais que as outras. Prima Justina disfarçava naturalmente\n' +
        'os seus padecimentos intimos, emendando os descuidos de minha mãe,\n' +
        'fazendo-me recommendações, dando ordens. Tio Cosme, quando eu lhe\n' +
        'beijei a mão em despedida, disse-me rindo:\n' +
        '\n' +
        '--Anda lá, rapaz, volta-me papa!\n' +
        '\n' +
        'José Dias, composto e grave, não dizia nada a principio; tinhamos\n' +
        'falado na vespera, no quarto delle, onde fui ver se era ainda possivel\n' +
        'evitar o seminario. Já não era, mas deu-me esperanças e principalmente\n' +
        'animou-me muito. Antes de um anno estariamos a bordo. Como eu achasse\n' +
        'muito breve, explicou-se.\n' +
        '\n' +
        '--Dizem que não é bom tempo de atravessar o Atlantico, vou indagar; se\n' +
        'não fôr, iremos em Março ou Abril.\n' +
        '\n' +
        '--Posso estudar medicina aqui mesmo.\n' +
        '\n' +
        'José Dias correu os dedos pelos suspensorios com um gesto de\n' +
        'impaciencia, apertou os beiços, até que formalmente rejeitou o alvitre.\n' +
        '\n' +
        '--Não duvidaria approvar a ideia, disse elle, se na Escola de Medicina\n' +
        'não ensinassem, exclusivamente, a podridão allopatha. A allopathia\n' +
        'é o erro dos seculos, e vae morrer; é o assassinato, é a mentira, é\n' +
        'a illusão. Se lhe disserem que póde apprender na Escola de Medicina\n' +
        'aquella parte da sciencia commum a todos os systemas, é verdade; a\n' +
        'allopathia é erro na therapeutica. Physiologia, anatomia, pathologia,\n' +
        'não são allopathicas nem homeopathicas, mas é melhor apprender logo\n' +
        'tudo de uma vez, por livros e por lingua de homens cultores da\n' +
        'verdade...\n' +
        '\n' +
        'Assim falára na vespera e no quarto. Agora não dizia nada, ou proferia\n' +
        'algum aphorismo sobre a religião e a familia; lembro-me deste:\n' +
        '«Dividil-o com Deus é ainda possuil-o.» Quando minha mãe me deu o\n' +
        'ultimo beijo: «Quadro amantissimo!» suspirou elle. Era manhã de um\n' +
        'lindo dia. Os moleques cochichavam; as escravas tomavam a benção:\n' +
        '«Benção, nhõ Bentinho! não se esqueça de sua Joanna! Sua Miquelina fica\n' +
        'rezando por vosmecê!» Na rua José Dias insistiu nas esperanças:\n' +
        '\n' +
        '--Aguente um anno; até lá tudo estará arranjado.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'LIV\n' +
        '\n' +
        'Panegyrico de Santa Monica.\n' +
        '\n' +
        'No seminario... Ah! não vou contar o seminario, nem me bastaria a isso\n' +
        'um capitulo. Não, senhor meu amigo; algum dia, sim, é possivel que\n' +
        'componha um abreviado do que alli vi e vivi, das pessoas que tratei,\n' +
        'dos costumes, de todo o resto. Esta sarna de escrever, quando pega aos\n' +
        'cincoenta annos, não despega mais. Na mocidade é possivel curar-se um\n' +
        'homem della; e, sem ir mais longe, aqui mesmo no seminario tive um\n' +
        'companheiro que compoz versos, a maneira dos de Junqueira Freire, cujo\n' +
        'livro de frade poeta era recente. Ordenou-se: annos depois encontrei-o\n' +
        'no còro de S. Pedro e pedi-lhe que me mostrasse os versos novos.\n' +
        '\n' +
        '--Que versos? perguntou meio espantado.\n' +
        '\n' +
        '--Os seus. Pois não se lembra que no seminario...\n' +
        '\n' +
        '--Ah! sorriu elle.\n' +
        '\n' +
        'Sorriu, e continuando a procurar n\'um livro aberto a hora em que tinha\n' +
        'do cantar no dia seguinte, confessou-me que não fizera mais versos\n' +
        'depois de ordenado. Foram cocegas da mocidade; coçou-se, passou, estava\n' +
        'bom. E falou-me em prosa de uma infinidade de cousas do dia, a vida\n' +
        'cara, um sermão do padre X... uma vigairaria mineira...\n' +
        '\n' +
        'Contrario a isso foi um seminarista que não seguiu a carreira.\n' +
        'Chamava-se... Não é preciso dizer o nome; baste o caso. Tinha composto\n' +
        'um _Panegyrico de Santa Monica_, elogiado por algumas pessoas e então\n' +
        'lido entre os seminaristas. Alcançou licença de imprimil-o, o dedicou-o\n' +
        'a Santo Agostinho. Tudo isso é historia velha; o que é mais moço é que\n' +
        'um dia, em 1882, indo ver certo negocio em repartição de marinha, alli\n' +
        'dei com este meu collega, feito chefe de uma secção administrativa.\n' +
        'Deixára seminario, deixára lettras, casára e esquecera tudo, menos\n' +
        'o _Panegyrico de Santa Monica_, umas vinte e nove paginas, que veiu\n' +
        'distribuindo pela vida fóra. Como eu precisasse de algumas informações,\n' +
        'fui pedir-lh\'as, e seria impossivel achar melhor nem mais prompta\n' +
        'vontade; deu-me tudo, claro, certo, copioso. Naturalmente conversamos\n' +
        'do passado, memorias pessoaes, casos de estudo, incidentes de nada,\n' +
        'um livro, um verbo, um mote, toda a velha palhada saiu cá fóra, e\n' +
        'rimos juntos, e suspiramos de companhia. Vivemos algum tempo do nosso\n' +
        'velho seminario. Ou porque eram delle, ou porque eramos então moços,\n' +
        'as recordações traziam tal poder de felicidade que, se alguma sombra\n' +
        'contraria houve então, não appareceu agora. Elle confessou-me que\n' +
        'perdera de vista todos os companheiros do seminario.\n' +
        '\n' +
        '--Tambem eu, quasi todos; uma vez ordenados, voltaram naturalmente ás\n' +
        'suas provincias, e os daqui tomaram vigairarias fóra.\n' +
        '\n' +
        '--Bom tempo! suspirou elle.\n' +
        '\n' +
        'E, após alguma reflexão, fitando em mim uns olhos murchos e teimosos,\n' +
        'perguntou-me:\n' +
        '\n' +
        '--Conservou o meu _Panegyrico?_\n' +
        '\n' +
        'Não achei que dizer; tentei mover os beiços, mas não tinha palavra;\n' +
        'afinal, perguntei:\n' +
        '\n' +
        '--Panegyrico? Que panegyrico?\n' +
        '\n' +
        '--O meu _Panegyrico de Santa Monica._\n' +
        '\n' +
        'Não me lembrou logo, mas a explicação devia bastar; e depois de\n' +
        'alguns instantes de pesquiza mental, respondi que por muito tempo o\n' +
        'conservára, mas as mudanças, as viagens...\n' +
        '\n' +
        '--Hei de levar-lhe um exemplar.\n' +
        '\n' +
        'Antes de vinte e quatro horas estava em minha casa, com o folheto, um\n' +
        'velho folheto de vinte e seis annos, encardido, manchado do tempo, mas\n' +
        'sem lacuna, e com uma dedicatoria manuscripta e respeitosa.\n' +
        '\n' +
        '--E o penultimo exemplar, disse-me; agora só me resta um, que não posso\n' +
        'dar a ninguem.\n' +
        '\n' +
        'E como me visse folhear o opusculo:\n' +
        '\n' +
        '--Veja se lhe lembra algum pedaço, disse-me.\n' +
        '\n' +
        'Vinte e seis annos de intervallo fazem morrer amizades mais estreitas e\n' +
        'assiduas, mas era cortezia, era quasi caridade recordar alguma lauda;\n' +
        'li uma dellas, accentuando certas phrases para lhe dar a impressão de\n' +
        'que achavam echo em minha memoria. Concordou que fossem bellas, mas\n' +
        'preferia outras, e apontou-as.\n' +
        '\n' +
        '--Recorda-se bem?\n' +
        '\n' +
        '--Perfeitamente. _Panegyrico de Santa Monica!_ Como isto me faz\n' +
        'remontar os annos da minha mocidade! Nunca me esqueceu o seminario,\n' +
        'creia. Os annos passam, os acontecimentos vêm uns sobre outros, e as\n' +
        'sensações tambem, e vieram amizades novas, que tambem se foram depois,\n' +
        'como é lei da vida... Pois, meu caro collega, nada fez apagar aquelle\n' +
        'tempo da nossa convivencia, os padres, as licções, os recreios... os\n' +
        'nossos recreios, lembra-se? o padre Lopes, oh! o padre Lopes...\n' +
        '\n' +
        'Elle, com os olhos no ar, devia estar ouvindo, e naturalmente ouvia,\n' +
        'mas só me disse uma palavra, e ainda assim depois de algum tempo de\n' +
        'silencio, recolhendo os olhos e um suspiro!\n' +
        '\n' +
        '--Tem agradado muito este meu _Panegyrico!_\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'LV\n' +
        '\n' +
        'Um soneto.\n' +
        '\n' +
        'Dita a palavra, apertou-me as mãos com as forças todas de um vasto\n' +
        'agradecimento, despediu-se e saiu. Fiquei só com o _Panegyrico_, e\n' +
        'o que as folhas delle me lembraram foi tal que merece um capitulo\n' +
        'ou mais. Antes, porém, e porque tambem eu tive o meu _Panegyrico_,\n' +
        'contarei a historia de um soneto que nunca fiz; era no tempo do\n' +
        'seminario, e o primeiro verso é o que ides ler:\n' +
        '\n' +
        '     Oh! flòr do ceu! oh! flòr candida e pura!\n' +
        '\n' +
        'Como e porque me saiu este verso da cabeça, não sei; saiu assim,\n' +
        'estando eu na cama, como uma exclamação solta, e, ao notar que tinha\n' +
        'a medida de verso, pensei em compor com elle alguma cousa, um soneto.\n' +
        'A insonmia, musa de olhos arregalados, não me deixou dormir uma longa\n' +
        'hora ou duas; as cocegas pediam-me unhas, e eu coçava-me com alma.\n' +
        'Não escolhi logo, logo o soneto; a principio cuidei de outra fórma, e\n' +
        'tanto de rima como de verso solto, mas afinal ative-me ao soneto. Era\n' +
        'um poema breve e prestadio. Quanto á ideia, o primeiro verso não era\n' +
        'ainda uma ideia, era uma exclamação; a ideia viria depois. Assim na\n' +
        'cama, envolvido no lençol, tratei de poetar. Tinha o alvoroço da mãe\n' +
        'que sente o filho, e o primeiro filho. Ia ser poeta, ia competir com\n' +
        'aquelle monge da Bahia, pouco antes revelado, e então na moda; eu,\n' +
        'seminarista, diria em verso as minhas tristezas, como elle dissera as\n' +
        'suas no claustro. Decorei bem o verso, e repetia-o em voz baixa, aos\n' +
        'lençóes; francamente, achava-o bonito, e ainda agora não me parece máu:\n' +
        '\n' +
        '     Oh! flòr do ceu! oh! flòr candida e pura!\n' +
        '\n' +
        'Quem era a flòr? Capitú, naturalmente; mas podia ser a virtude, a\n' +
        'poesia, a religião, qualquer outro conceito a que coubesse a metaphora\n' +
        'da flòr, e flòr do ceu. Aguardei o resto, recitando sempre o verso,\n' +
        'e deitado ora sobre o lado direito, ora sobre o esquerdo; atinai\n' +
        'deixei-me estar de costas, com os olhos no tecto, mas nem assim vinha\n' +
        'mais nada. Então adverti que os sonetos mais gabados eram os que\n' +
        'concluiam com chave de ouro, isto é, um desses versos capitaes no\n' +
        'sentido e na fórma. Pensei em forjar uma de taes chaves, considerando\n' +
        'que o verso final, saindo chronologicamente dos treze anteriores, com\n' +
        'difficuldade traria a perfeição louvada; imaginei que taes chaves eram\n' +
        'fundidas antes da fechadura. Assim foi que me determinei a compôr o\n' +
        'ultimo verso do soneto, e, depois de muito suar, saiu este:\n' +
        '\n' +
        '     Perde-se a vida, ganha-se a batalha!\n' +
        '\n' +
        'Sem vaidade, e falando como se fosse de outro, era um verso magnifico.\n' +
        'Sonoro, não ha duvida. E tinha um pensamento, a victoria ganha á custa\n' +
        'da propria vida, pensamento alevantado e nobre. Que não fosse novidade,\n' +
        'é possivel, mas tambem não era vulgar; e ainda agora não explico por\n' +
        'que via mysteriosa entrou n\'uma cabeça de tão poucos annos. Naquella\n' +
        'occasião achei-o sublime. Recitei uma e muitas vezes a chave de ouro;\n' +
        'depois repeti os dous versos seguidamente, e dispuz-me a ligal-os pelos\n' +
        'doze centraes. A ideia agora, á vista do ultimo verso, pareceu-me\n' +
        'melhor não ser Capitú; seria a justiça. Era mais proprio dizer que, na\n' +
        'pugna pela justiça, perder-se-hia acaso a vida, mas a batalha ficava\n' +
        'ganha. Tambem me occorreu acceitar a batalha, no sentido natural, e\n' +
        'fazer della a lula pela patria, por exemplo; nesse caso a flor do ceu\n' +
        'seria a liberdade. Esta accepção, porém, sendo o poeta um seminarista,\n' +
        'podia não caber tanto como a primeira, e gastei alguns minutos em\n' +
        'escolher uma ou outra. Achei melhor a justiça, mas afinal acceitei\n' +
        'definitivamente uma ideia nova, a caridade, e recitei os dous versos,\n' +
        'cada um a sou modo, um languidamente:\n' +
        '\n' +
        '     Oh! flòr do ceu! oh! flòr candida e pura!\n' +
        '\n' +
        'e o outro com grande brio:\n' +
        '\n' +
        '     Perde-se a vida, ganha-se a batalha!\n' +
        '\n' +
        'A sensação que tive é que ia sair um soneto perfeito. Começar bem e\n' +
        'acabar bem não era pouco. Para me dar um banho de inspiração, evoquei\n' +
        'alguns sonetos celebres, e notei que os mais delles eram facilimos;\n' +
        'os versos saíam uns dos outros, com a ideia em si, tão naturalmente,\n' +
        'que se não acabava de crer se ella é que os fizera, se elles é que a\n' +
        'suscitavam. Então tornava ao meu soneto, e novamente repetia o primeiro\n' +
        'verso e esperava o segundo; o segundo não vinha, nem terceiro, nem\n' +
        'quarto; não vinha nenhum. Tive alguns impetos de raiva, e mais de\n' +
        'uma vez pensei em sair da cama e ir ver tinta e papel; póde ser que,\n' +
        'escrevendo, os versos acudissem, mas...\n' +
        '\n' +
        'Cançado de esperar, lembrou-me alterar o sentido do ultimo verso, com a\n' +
        'simples transposição do duas palavras, assim:\n' +
        '\n' +
        '     Ganha-se a vida, perde-se a batalha!\n' +
        '\n' +
        'O sentido vinha a ser justamente o contrario, mas talvez isso mesmo\n' +
        'trouxesse a inspiração. Neste caso, era uma ironia: não exercendo a\n' +
        'caridade, póde-se ganhar a vida, mas perde-se a batalha do ceu. Criei\n' +
        'forças novas o esperei. Não tinha janella; se tivesse, é possivel que\n' +
        'fosse pedir uma ideia á noite. E quem sabe se os vagalumes, luzindo cá\n' +
        'em baixo, não seriam para mim como rimas das estrellas, e esta viva\n' +
        'metaphora não me daria os versos esquivos, com os seus consoantes e\n' +
        'sentidos proprios?\n' +
        '\n' +
        'Trabalhei em vão, busquei, catei, esperei, não vieram os versos. Pelo\n' +
        'tempo adeante escrevi algumas paginas em prosa, e agora estou compondo\n' +
        'esta narração, não achando maior difficuldade que escrever, bem ou\n' +
        'mal. Pois, senhores, nada me consola daquelle soneto que não fiz. Mas,\n' +
        'como eu creio que os sonetos existem feitos, como as odes e os dramas,\n' +
        'e as demais obras de arte, por uma razão de ordem metaphysica, dou\n' +
        'esses dous versos ao primeiro desoccupado que os quizer. Ao domingo, ou\n' +
        'se estiver chovendo, ou na roça, em qualquer occasião de lazer, póde\n' +
        'tentar ver se o soneto sae. Tudo é dar-lhe uma ideia e encher o centro\n' +
        'que falta.\n'
    },
    {
      src: '/assets/audio/domcasmurro12.mp3',
      titulo: 'Seção 12',
      subtitulo: 'Capítulos LVI ao LX',
      leitor: 'Mayah',
      numeroSecao: 12,
      texto: '/assets/texts/secao12.txt',
      tempo: '18min',
      capitulo: 'LVI\n' +
        '\n' +
        'Um seminarista.\n' +
        '\n' +
        'Tudo me ia repetindo o diabo do opusculo, com as suas lettras\n' +
        'velhas e citações latinas. Vi sair daquellas folhas muitos perfis\n' +
        'de seminaristas, os irmãos Albuquerques, por exemplo, um dos quaes\n' +
        'é conego na Bahia, emquanto o outro seguiu medicina e dizem haver\n' +
        'descoberto um especifico contra a febre amarella. Vi o Bastos, um\n' +
        'magricella, que está de vigario em Meia-Ponte, se não morreu já;\n' +
        'Luiz Borges, apesar de padre, fez-se politico, e acabou senador do\n' +
        'imperio... Quantas outras caras me fitavam das paginas frias do\n' +
        '_Panegyrico!_ Não, não eram frias; traziam o calor da juventude\n' +
        'nascente, o calor do passado, o meu proprio calor. Queria lel-as outra\n' +
        'vez, e lograva entender algum texto, tão recente como no primeiro\n' +
        'dia, ainda que mais breve. Era um encanto ir por elle; ás vezes,\n' +
        'inconscientemente, dobrava a folha como se estivesse lendo de verdade;\n' +
        'creio que era quando os olhos me caíam na palavra do fim da pagina, e a\n' +
        'mão, acostumada a ajudal-os, faziam o seu officio...\n' +
        '\n' +
        'Eis aqui outro seminarista. Chamava-se Ezequiel de Souza Escobar. Era\n' +
        'um rapaz esbelto, olhos claros, um pouco fugitivos, como as mãos, como\n' +
        'os pés, como a fala, como tudo. Quem não estivesse acostumado com\n' +
        'elle podia acaso sentir-se mal, não sabendo por onde lhe pegasse. Não\n' +
        'fitava de rosto, não falava claro nem seguido; as mãos não apertavam\n' +
        'as outras, nem se deixavam apertar dellas, porque os dedos, sendo\n' +
        'delgados e curtos, quando a gente cuidava tel-os entre os seus, já\n' +
        'não tinha nada. O mesmo digo dos pés, que tão depressa estavam aqui\n' +
        'como lá. Esta difficuldade em pousar foi o maior obstaculo que achou\n' +
        'para tomar os costumes do seminario. O sorriso era instantaneo, mas\n' +
        'tambem ria folgado e largo. Uma cousa não seria tão fugitiva, como o\n' +
        'resto, a reflexão; iamos dar com elle, muita vez, olhos enfiados em si,\n' +
        'cogitando. Respondia-nus sempre que meditava algum ponto espiritual, ou\n' +
        'então que recordava a licção da vespera. Quando elle entrou na minha\n' +
        'intimidade pedia-me frequentemente explicações e repetições miudas,\n' +
        'e tinha memoria para guardal-as todas, até as palavras. Talvez esta\n' +
        'faculdade prejudicasse alguma outra.\n' +
        '\n' +
        'Era mais velho que eu trez annos, filho de um advogado de Corityba,\n' +
        'aparentado com um commerciante do Rio de Janeiro, que servia de\n' +
        'correspondente ao pae. Este era homem de fortes sentimentos\n' +
        'catholicos. Escobar tinha uma irmã, que era um anjo, dizia elle.\n' +
        '\n' +
        '--Não é só na belleza que é um anjo, mas tambem na bondade. Não imagina\n' +
        'que boa creatura que ella é. Escreve-me muita vez, hei de mostrar-lhe\n' +
        'as cartas della.\n' +
        '\n' +
        'De facto, eram simples e affectuosas, cheias de caricias e conselhos.\n' +
        'Escobar contava-me historias della, interessantes, todas as quaes\n' +
        'vinham a dar na bondade e no espirito daquella creatura; taes eram\n' +
        'que me fariam capaz de acabar casando com ella, se não fosse Capitú.\n' +
        'Morreu pouco depois. Eu, seduzido pelas palavras delle, estive quasi\n' +
        'a contar-lhe logo, logo, a minha historia. A principio fui timido,\n' +
        'mas elle fez-se entrado na minha confiança. Aquelles modos fugitivos\n' +
        'cessavam quando elle queria, e o meio e o tempo os fizeram mais\n' +
        'pousados. Escobar veiu abrindo a alma toda, desde a porta da rua até\n' +
        'ao fundo do quintal. A alma da gente, como sabes, e uma casa assim\n' +
        'disposta, não raro com janellas para todos os lados, muita luz e ar\n' +
        'puro. Tambem as ha fechadas e escuras, sem janellas, ou com poucas e\n' +
        'gradeadas, á semelhança de conventos o prisões. Outrosim, capellas e\n' +
        'bazares, simples alpendres ou paços sumptuosos.\n' +
        '\n' +
        'Não sei o que era a minha. Eu não era ainda casmurro, nem dom casmurro;\n' +
        'o receio é que me tolhia a franqueza, mas como as portas não tinham\n' +
        'chaves nem fechaduras, bastava empurral-as, e Escobar empurrou-as e\n' +
        'entrou. Cá o achei dentro, cá ficou, até que...\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'LVII\n' +
        '\n' +
        'De preparação.\n' +
        '\n' +
        'Ah! mas não eram só os seminaristas que me iam saindo daquellas folhas\n' +
        'velhas do _Panegyrico._ Ellas me trouxeram tambem sensações passadas,\n' +
        'taes e tantas que eu não poderia dizel-as todas, sem tirar espaço ao\n' +
        'resto. Uma dessas, e das primeiras, quizera contal\'a aqui eu latim.\n' +
        'Não é que a materia não ache termos honestos em nossa lingua, que é\n' +
        'casta para os castos, como póde ser torpe para os torpes. Sim, leitora\n' +
        'castissima, como diria o meu finado José Dias, podeis ler o capitulo\n' +
        'até ao fim, sem susto nem vexame.\n' +
        '\n' +
        'Já agora metto a historia em outro capitulo. Por mais composto que este\n' +
        'me saia, ha sempre no assumpto alguma cousa menos austera, que pede\n' +
        'umas linhas de repouso e preparação. Sirva este de preparação. E isto é\n' +
        'muito, leitor meu amigo; o coração, quando examina a possibilidade do\n' +
        'que ha de vir. as proporções dos acontecimentos e a copia delles, fica\n' +
        'robusto e disposto, e o mal é menor mal. Tambem, se não fica então, não\n' +
        'fica nunca. E aqui verás tal ou qual esperteza minha; porquanto, ao ler\n' +
        'o que vás ler, é provavel que o aches menos cru do que esperavas.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'LVIII\n' +
        '\n' +
        'O tratado.\n' +
        '\n' +
        'Foi o caso que, uma segunda-feira, voltando eu para o seminario, vi\n' +
        'cair na rua uma senhora. O meu primeiro gesto, em tal caso, devia ser\n' +
        'de pena ou de riso; não foi uma nem outra cousa, porquanto (e é isto\n' +
        'que eu quizera dizer em latim) porquanto, a senhora tinha as meias mui\n' +
        'lavadas, e não as sujou, levava ligas de seda, e não as perdeu. Varias\n' +
        'pessoas acudiram, mas não tiveram tempo de a levantar; ella ergueu-se\n' +
        'muito vexada, sacudiu-se, agradeceu, e enfiou pela rua proxima.\n' +
        '\n' +
        '--Este gosto de imitar as francezas da rua do Ouvidor, dizia-me José\n' +
        'Dias andando e commentando a queda, é evidentemente um erro. As nossas\n' +
        'moças devem andar como sempre andaram, com sou vagar e paciencia, e não\n' +
        'este tique-tique afrancezado...\n' +
        '\n' +
        'Eu mal podia ouvil-o. As meias e as ligas da senhora branqueavam e\n' +
        'enroscavam-se deante de mim, e andavam, caíam, erguiam-se e iam-se\n' +
        'embora. Quando chegámos á esquina, olhei para a outra rua, e vi, a\n' +
        'distancia, a nossa desastrada, que ia no mesmo passo, tique-tique,\n' +
        'tique-tique...\n' +
        '\n' +
        '--Parece que não se machucou, disse eu.\n' +
        '\n' +
        '--Tanto melhor para ella, mas é impossivel que não tenha arranhado os\n' +
        'joelhos; aquella presteza é manha...\n' +
        '\n' +
        'Creio que foi «manha» que elle disse; eu fiquei «nos joelhos\n' +
        'arranhados». Dalli em deante, até o seminario, não vi mulher na rua, a\n' +
        'quem não desejasse uma quéda; a algumas adivinhei que trazia as meias\n' +
        'esticadas e as ligas, justas... Tal haveria que nem levasse meias...\n' +
        'Mas eu as via com ellas... Ou então... Tambem é possivel...\n' +
        '\n' +
        'Vou esgarçando isto com reticencias, para dar uma ideia das minhas\n' +
        'ideias, que eram assim diffusas e confusas; com certeza não dou nada.\n' +
        'A cabeça ia-me quente, e o andar não era seguro. No seminario, a\n' +
        'primeira hora foi insupportavel. As batinas traziam ar de saias, e\n' +
        'lembravam-me a quéda da senhora. Já não era uma só que eu via cair;\n' +
        'todas as que eu encontrara na rua, mostravam-me agora de relance as\n' +
        'ligas azues; eram azues. De noite, sonhei com ellas. Uma multidão de\n' +
        'abominaveis creaturas veiu andar á roda de mim, tique-tique... Eram\n' +
        'bellas, umas finas, outras grossas, todas ageis como o diabo. Accordei,\n' +
        'busquei afugental-as com esconjuros e outros methodos, mas tão depressa\n' +
        'dormi como tornaram, e, com as mãos presas em volta de mim, faziam\n' +
        'um vasto circulo de saias, ou, trepadas no ar, choviam pés e pernas\n' +
        'sobre a minha cabeça. Assim fui até madrugada. Não dormi mais; rezei\n' +
        'padre-nossos, ave-marias, e credos, e sendo este livro a verdade pura,\n' +
        'é força confessar que tive de interromper mais de uma vez as minhas\n' +
        'orações para acompanhar no escuro uma figura ao longe, tique-tique,\n' +
        'tique-tique... Pegava depressa na oração, sempre no meio para\n' +
        'concertal-a bem, como se não tivesse havido interrupção, mas certamente\n' +
        'não unia a phrase nova á antiga.\n' +
        '\n' +
        'Vindo o mal pela manha adeante, tentei vencel-o, mas por um modo que\n' +
        'o não perdesse de todo. Sabios da escriptura, adivinhai o que podia\n' +
        'ser. Foi isto. Não podendo rejeitar de mim aquelles quadros, recorri a\n' +
        'um tratado entre a minha consciencia e a minha imaginação. As visões\n' +
        'feminis seriam de ora avante consideradas como simples encarnações dos\n' +
        'vicios, e por isso mesmo contemplaveis, como o melhor modo de temperar\n' +
        'o caracter e aguerril-o para os combates asperos da vida. Não formulei\n' +
        'isto por palavras, nem fui preciso; o contracto fez-se tacitamente, com\n' +
        'alguma repugnancia, mas fez-se. E por alguns dias, era eu mesmo que\n' +
        'evocava as visões para fortalecer-me, e não as rejeitava, senão quando\n' +
        'ellas mesmas, de cançadas, se iam embora.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'LIX\n' +
        '\n' +
        'Convivas de boa memoria.\n' +
        '\n' +
        'Ha dessas reminiscências que não descançam antes que a penna ou a\n' +
        'lingua as publique. Um antigo dizia arrenegar de conviva que tem boa\n' +
        'memoria. A vida é cheia de taes convivas, e eu sou acaso um delles,\n' +
        'comquanto a prova de ter a memoria fraca seja exactamente não me acudir\n' +
        'agora o nome de tal antigo; mas era um antigo, e basta.\n' +
        '\n' +
        'Não, não, a minha memoria não é boa. Ao contrario, é comparavel a\n' +
        'alguem que tivesse vivido por hospedarias, sem guardar dellas nem caras\n' +
        'nem nomes, e sómente raras circumstancias. A quem passe a vida na\n' +
        'mesma casa de familia, com os seus eternos moveis e costumes, pessoas\n' +
        'e affeições, é que se lhe grava tudo pela continuidade e repetição.\n' +
        'Como eu invejo os que não esqueceram a còr das primeiras calças que\n' +
        'vestiram! Eu não atino com a das que enfiei hontem. Juro só que não\n' +
        'eram amarellas porque execro essa côr; mas isso mesmo póde ser olvido\n' +
        'e confusão.\n' +
        '\n' +
        'E antes seja olvido que confusão; explico-me. Nada se emenda bem nos\n' +
        'livros confusos, mas tudo se póde metter nos livros omissos. Eu, quando\n' +
        'leio algum desta outra casta, não me afflijo nunca. O que faço, em\n' +
        'chegando ao fim, é cerrar os olhos e evocar todas as cousas que não\n' +
        'achei nelle. Quantas ideias finas me acodem então! Que de reflexões\n' +
        'profundas! Os rios, as montanhas, as egrejas que não vi nas folhas\n' +
        'lidas, todos me apparecem agora com as suas aguas, as suas arvores,\n' +
        'os seus altares, e os generaes sacam das espadas que tinham ficado\n' +
        'na bainha, e os clarins soltam as notas que dormiam no metal, e tudo\n' +
        'marcha com uma alma imprevista.\n' +
        '\n' +
        'É que tudo se acha fóra de um livro falho, leitor amigo. Assim preencho\n' +
        'as lacunas alheias; assim pódes tambem preencher as minhas.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'LX\n' +
        '\n' +
        'Querido opusculo!\n' +
        '\n' +
        'Assim fiz eu ao _Panegyrico de Santa Monica_, e fiz mais: puz-lhe não\n' +
        'só o que faltava da santa, mas ainda cousas que não eram della. Viste o\n' +
        'soneto, as meias, as ligas, o seminarista Escobar e vários outros. Vás\n' +
        'agora ver o mais que naquelle dia me foi saindo das paginas amarellas\n' +
        'do opusculo.\n' +
        '\n' +
        'Querido opusculo, tu não prestavas para nada, mas que mais presta um\n' +
        'velho par de chinellas? Entretanto, ha muita vez no casal de chinellas\n' +
        'um como aroma e calor de dous pés. Gastas e rotas, não deixam de\n' +
        'lembrar que uma pessoa as calçava de manhã, ao erguer da cama, ou as\n' +
        'descalçava á noite, ao entrar nella. E se a comparação não vale, porque\n' +
        'as chinellas são ainda uma parte da pessoa e tiveram o contacto dos\n' +
        'pés, aqui estão outras lembranças, como a pedra da rua, a porta da\n' +
        'casa, um assobio particular, um prégão de quitanda, como aquelle das\n' +
        'cocadas que contei no cap. XVIII. Justamente, quando contei o prégão\n' +
        'das cocadas, fiquei tão curtido de saudades que me lembrou fazel-o\n' +
        'escrever por um amigo, mestre de musica, e grudal-o ás pernas do\n' +
        'capitulo. Se depois jarretei o capitulo, foi porque outro musico, a\n' +
        'quem o mostrei, me confessou ingenuamente não achar no trecho escripto\n' +
        'nada que lhe accordasse saudades. Para que não aconteça o mesmo aos\n' +
        'outros profissionaes que por ventura me lerem, melhor é poupar ao\n' +
        'editor do livro o trabalho e a despeza da gravura. Vès que não puz\n' +
        'nada, nem ponho. Já agora creio que não basta que os pregões de rua,\n' +
        'como os opusculos de seminario, encerrem casos, pessoas e sensações; é\n' +
        'preciso que a gente os tenha conhecido e padecido no tempo, sem o que\n' +
        'tudo é calado e incolor.\n' +
        '\n' +
        'Mas, vamos ao mais que me foi saindo das paginas amarellas.\n'
    },
    {
      src: '/assets/audio/domcasmurro13.mp3',
      titulo: 'Seção 13',
      subtitulo: 'Capítulos LXI ao LXV',
      leitor: 'Thiago',
      numeroSecao: 13,
      texto: '/assets/texts/secao13.txt',
      tempo: '26min',
      capitulo: 'LXI\n' +
        '\n' +
        'A vacca de Homero.\n' +
        '\n' +
        'O mais foi muito. Vi sairem os primeiros dias da separação, duros e\n' +
        'opacos, sem embargo das palavras de conforto que me deram os padres e\n' +
        'os seminaristas, e as de minha mãe e tio Cosme, trazidas por José Dias\n' +
        'ao seminario.\n' +
        '\n' +
        '--Todos estão saudosos, disse-me este, mas a maior saudade está\n' +
        'naturalmente no maior dos corações; e qual é elle? perguntou escrevendo\n' +
        'a resposta nos olhos.\n' +
        '\n' +
        '--Mamãe, acudi eu.\n' +
        '\n' +
        'José Dias apertou-me as mãos com alvoroço, e logo pintou a tristeza de\n' +
        'minha mãe, que falava de mim todos os dias, quasi a todas as horas.\n' +
        'Como a approvasse sempre, e accrescentasse alguma palavra relativamente\n' +
        'aos dotes que Deus me dera, o desvanecimento de minha mãe nessas\n' +
        'occasiões era indescriptivel; e contava-me tudo isso cheio de uma\n' +
        'admiração lacrimosa. Tio Cosme tambem se enternecia muito.\n' +
        '\n' +
        '--Hontem até se deu um caso interessante. Tendo eu dito á\n' +
        'Excellentissima que Deus lhe dera, não um filho, mas um anjo do ceu, o\n' +
        'doutor ficou tão commovido que não achou outro modo de vencer o choro\n' +
        'senão fazendo-me um daquelles elogios de galhofa que só elle sabe. Não\n' +
        'é preciso dizer que D. Gloria enxugou furtivamente uma lagrima. Ou ella\n' +
        'não fosse mãe! Que coração amantissimo!\n' +
        '\n' +
        '--Mas, Sr. José Dias, e a minha saida daqui?\n' +
        '\n' +
        '--Isso é negocio meu. A viagem á Europa é o que é preciso, mas póde\n' +
        'fazer-se daqui a um ou dous annos, em 1859 ou 1860...\n' +
        '\n' +
        '--Tão tarde!\n' +
        '\n' +
        '--Era melhor que fosse este mesmo anno, mas demos tempo ao tempo. Tenha\n' +
        'paciencia, vá estudando, não se perde nada em ir sabendo já daqui\n' +
        'alguma cousa; e, demais, ainda não acabando padre, a vida do seminario\n' +
        'é util, e vale sempre entrar no mundo ungido com os santos oleos da\n' +
        'theologia...\n' +
        '\n' +
        'Neste ponto,--lembra-me como se fosse hoje,--os olhos de José\n' +
        'Dias fulguraram tão intensamente que me encheram de espanto. As\n' +
        'palpebras cairam depois, e assim ficaram por alguns instantes, até\n' +
        'que novamente se ergueram, e os olhos fixaram-se na parede do palco,\n' +
        'como que embebidos em alguma cousa, se não era em si mesmos; depois\n' +
        'despegaram-se da parede e entraram a vagar pelo pateo todo. Podia\n' +
        'comparal-o aqui á vacca de Homero; andava e gemia em volta da cria\n' +
        'que acabava de parir. Não lhe perguntei o que é que tinha, já por\n' +
        'acanhamento, já porque dous lentes, um delles de theologia, vinham\n' +
        'caminhando na nossa direcção. Ao passarem por nós, o aggregado, que os\n' +
        'conhecia, cortejou-os com as deferencias devidas, e pediu-lhes noticias\n' +
        'minhas.\n' +
        '\n' +
        '--Por ora nada se póde affiançar, disse um delles. mas parece que dará\n' +
        'conta da mão.\n' +
        '\n' +
        '--É o que eu lhe dizia agora mesmo, acudiu José Dias. Conto ouvir-lhe\n' +
        'a missa nova; mas ainda que não chegue a ordenar-se, não póde ter\n' +
        'melhores estudos que os que fizer aqui. Para a viagem da existencia,\n' +
        'concluiu demorando mais as palavras, irá ungido com os santos oleos da\n' +
        'theologia...\n' +
        '\n' +
        'Desta vez a fulguração dos olhos foi menor, as palpebras não lhe cairam\n' +
        'nem as pupillas fizeram os movimentos anteriores. Ao contrario, todo\n' +
        'elle era attenção e interrogação; quando muito, um sorriso claro e\n' +
        'amigo lhe errava nos labios. O lente de theologia gostou da metaphora,\n' +
        'e disse-lh\'o; elle agradeceu, explicando que eram ideias que lhe\n' +
        'escapavam no correr da conversação; não escrevia nem orava. Eu é que\n' +
        'não gostei nada; e logo que os lentes se foram, sacudi a cabeça:\n' +
        '\n' +
        '--Não quero saber dos santos oleos da theologia; desejo sair daqui o\n' +
        'mais cedo que puder, ou já...\n' +
        '\n' +
        '--Já, meu anjo, não póde ser; mas póde succeder que muito antes do que\n' +
        'imaginamos. Quem sabe se este mesmo anno de 58? Tenho um plano feito,\n' +
        'e penso já nas palavras com que hei de expôl-o a D. Gloria; estou certo\n' +
        'que ella cederá e irá comnosco.\n' +
        '\n' +
        '--Duvido que mamãe embarque.\n' +
        '\n' +
        '--Veremos. Mãe é capaz de tudo; mas, com ella ou sem ella, tenho por\n' +
        'certa a nossa ida, e não haverá esforço que eu não empregue, deixe\n' +
        'estar. Paciencia é que é preciso. E não faça aqui nada que dê logar a\n' +
        'censuras ou queixas; muita docilidade e toda a apparente satisfação.\n' +
        'Não ouviu o elogio do lente? E que você tem-se portado bem. Pois\n' +
        'continue.\n' +
        '\n' +
        '--Mas, 1859 ou 1860 é muito tarde.\n' +
        '\n' +
        '--Será este anno, replicou José Dias.\n' +
        '\n' +
        '--Daqui a tres mezes?\n' +
        '\n' +
        '--Ou seis.\n' +
        '\n' +
        '--Não; tres mezes.\n' +
        '\n' +
        '--Pois sim. Tenho agora um plano, que me parece melhor que outro\n' +
        'qualquer. É combinar a ausencia de vocação ecclesiastica e a\n' +
        'necessidade de mudar de ares. Você porque não tosse?\n' +
        '\n' +
        '--Por que não tusso?\n' +
        '\n' +
        '--Já, já, não, mas eu hei de avisar você para tossir, quando fôr\n' +
        'preciso, aos poucos, uma tossesinha secca, e algum fastio; eu irei\n' +
        'preparando a Excellentissima... Oh! tudo isto é em beneficio della.\n' +
        'Uma vez que o filho não póde servir a egreja, como deve ser servida, o\n' +
        'melhor modo de cumprir a vontade de Deus é dedical-o a outra cousa. O\n' +
        'mundo tambem é egreja para os bons...\n' +
        '\n' +
        'Pareceu-me outra vez a vacca de Homero, como se este «mundo tambem é\n' +
        'egreja para os bons», fosse outro bezerro, irmão dos «santos oleos da\n' +
        'theologia.» Mas não dei tempo á ternura materna, e repliquei:\n' +
        '\n' +
        '--Ah! entendo! mostrar que estou doente para embarcar, não é?\n' +
        '\n' +
        'José Dias hesitou um pouco, depois explicou-se:\n' +
        '\n' +
        '--Mostrar a verdade, porque, francamente, Bentinho, eu ha mezes que\n' +
        'desconfio do seu peito. Você não anda bom do peito. Em pequeno,\n' +
        'teve umas febres e uma ronqueira... Passou tudo, mas ha dias em que\n' +
        'está mais descorado. Não digo que já seja o mal, mas o mal póde vir\n' +
        'depressa. N\'uma hora cae a casa. Por isso, se aquella santa senhora não\n' +
        'quizer ir comnosco,--ou para que vá mais depressa, acho que uma boa\n' +
        'tosse... Se a tosse ha de vir de verdade, melhor é apressal-a... Deixe\n' +
        'estar, eu aviso...\n' +
        '\n' +
        '--Bem, mas em saindo daqui não ha de ser para embarcar logo; saio\n' +
        'primeiro, depois cuidaremos do embarque; o embarque é que póde ficar\n' +
        'para o anno. Não dizem que o melhor tempo é abril ou maio? Pois seja\n' +
        'maio. Primeiro deixo o seminario, daqui a dous mezes...\n' +
        '\n' +
        'E porque a palavra me estivesse a pigarrear na garganta, dei uma volta\n' +
        'rapida, e perguntei-lhe á queima-roupa:\n' +
        '\n' +
        '--Capitú como vae?\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'LXII\n' +
        '\n' +
        'Uma ponta de Iago.\n' +
        '\n' +
        'A pergunta era imprudente, na occasião em que eu cuidava de transferir\n' +
        'o embarque. Equivalia a confessar que o motivo principal ou unico\n' +
        'da minha repulsa ao seminario era Capitú, e lazer crer improvavel a\n' +
        'viagem. Comprehendi isto depois que falei; quiz emendar-me, mas nem\n' +
        'soube como, nem elle me deu tempo.\n' +
        '\n' +
        '--Tem andado alegre, como sempre; é uma tontinha. Aquillo emquanto não\n' +
        'pegar algum peralta da visinhança, que case com ella...\n' +
        '\n' +
        'Estou que empallideci; pelo menos, senti correr um frio pelo corpo\n' +
        'todo. A noticia de que ella vivia alegre, quando eu chorava todas\n' +
        'as noites, produziu-me aquelle effeito, acompanhado de um bater de\n' +
        'coração, tão violento, que ainda agora cuido ouvil-o. Ha alguma\n' +
        'exageração nisto; mas o discurso humano é assim mesmo, um composto de\n' +
        'partes excessivas e partes diminutas, que se compensam, ajustando-se.\n' +
        'Por outro lado, se entendermos que a audiencia aqui não é das orelhas,\n' +
        'senão da memoria, chegaremos á exacta verdade. A minha memoria ouve\n' +
        'ainda agora as pancadas do coração naquelle instante. Não esqueças\n' +
        'que era a emoção do primeiro amor. Estive quasi a perguntar a José\n' +
        'Dias que me explicasse a alegria de Capitú, o que é que ella fazia, se\n' +
        'vivia rindo, cantando ou pulando, mas retive-me a tempo, e depois outra\n' +
        'ideia...\n' +
        '\n' +
        'Outra ideia, não,--um sentimento cruel e desconhecido, o puro ciume,\n' +
        'leitor das minhas entranhas. Tal foi o que me mordeu, ao repetir\n' +
        'commigo as palavras de José Dias: « Algum peralta da visinhança.» Em\n' +
        'verdade, nunca pensara em tal desastre. Vivia tão nella, della e para\n' +
        'ella, que a intervenção de um peralta era como uma noção sem realidade;\n' +
        'nunca me acudiu que havia peraltas na visinhança, vária idade e feitio,\n' +
        'grandes passeadores das tardes. Agora lembrava-me que alguns olhavam\n' +
        'para Capitú,--e tão senhor me sentia della que era como se olhassem\n' +
        'para mim, um simples dever de admiração e de inveja. Separados um do\n' +
        'outro pelo espaço e pelo destino, o mal apparecia-me agora, não só\n' +
        'possivel, mas certo. E a alegria de Capitú confirmava a suspeita; se\n' +
        'ella vivia alegre é que já namorava a outro, acompanhal-o-hia com os\n' +
        'olhos na rua, falar-lhe-hia á janella, ás ave-marias, trocariam flores\n' +
        'e...\n' +
        '\n' +
        'E... que? Sabes o que é que trocariam mais; se o não achas por ti\n' +
        'mesmo, escusado é ler o resto do capitulo e do livro, não acharás mais\n' +
        'nada, ainda que eu o diga com todas as lettras da etymologia. Mas se o\n' +
        'achaste, comprehenderás que eu, depois de estremecer, tivesse um impeto\n' +
        'de atirar-me pelo portão fora, descer o resto da ladeira, correr,\n' +
        'chegar a casa do Padua, agarrar Capitú e intimar-lhe que me confessasse\n' +
        'quantos, quantos, quantos já lhe dera o peralta da visinhança. Não\n' +
        'fiz nada. Os mesmos sonhos que ora conto não tiveram, naquelles tres\n' +
        'ou quatro minutos, esta logica de movimentos e pensamentos. Eram\n' +
        'soltos, emendados e mal emendados, com o desenho truncado e torto,\n' +
        'uma confusão, um turbilhão, que me cegava e ensurdecia. Quando tornei\n' +
        'a mim, José Dias concluía uma phrase, cujo principio não ouvi, e\n' +
        'o mesmo fim era vago: «A conta que dará de si.» Que conta e quem?\n' +
        'Cuidei naturalmente que falava ainda de Capitú, e quiz perguntar-lh\'o,\n' +
        'mas a vontade morreu ao nascer, como tantas outras gerações dellas.\n' +
        'Limitei-me a inquirir do aggregado quando é que iria a casa ver minha\n' +
        'mãe.\n' +
        '\n' +
        '--Estou com saudades de mamãe. Posso ir já esta semana?\n' +
        '\n' +
        '--Vae sabbado.\n' +
        '\n' +
        '--Sabbado? Ah! sim! sim! Peça a mamãe que me mande buscar sabbado!\n' +
        'Sabbado! Este sabbado, não? Que me mande buscar, sem falta.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'LXIII\n' +
        '\n' +
        'Metades de um sonho.\n' +
        '\n' +
        'Fiquei ancioso pelo sabbado. Até lá os sonhos perseguiam-me, ainda\n' +
        'accordado, e não os digo aqui para não alongar esta parte do livro. Um\n' +
        'só ponho, e no menor numero de palavras, ou antes porei dous, porque\n' +
        'um nasceu de outro, a não ser que ambos formem duas metades de um só.\n' +
        'Tudo isto é obscuro, dona leitora, mas a culpa é do vosso sexo, que\n' +
        'perturbava assim a adolescencia de um pobre seminarista. Não fosse\n' +
        'elle, e este livro seria talvez uma simples pratica parochial, se eu\n' +
        'fosse padre, ou uma pastoral, se bispo, ou uma encyclica, se papa, como\n' +
        'me recommendára tio Cosme: «Anda lá, meu rapaz, volta-me papa!» Ah!\n' +
        'porque não cumpri esse desejo? Depois de Napoleão, tenente e imperador,\n' +
        'todos os destinos estão neste seculo.\n' +
        '\n' +
        'Quanto ao sonho foi isto. Como estivesse a espiar os peraltas da\n' +
        'visinhança, vi um destes que conversava com a minha amiga ao pé da\n' +
        'janella. Corri ao logar, elle fugiu; avancei para Capitú, mas não\n' +
        'estava só, tinha o pae ao pé de si, enxugando os olhos e mirando um\n' +
        'triste bilhete de loteria. Não me parecendo isto claro, ia pedir a\n' +
        'explicação, quando elle de si mesmo a deu; o peralta fôra levar-lhe a\n' +
        'lista dos premios da loteria, e o bilhete saira branco. Tinha o numero\n' +
        '4004. Disse-me que esta symetria de algarismos era mysteriosa e bella,\n' +
        'e provavelmente a roda andára mal; era impossivel que não devesse ter\n' +
        'a sorte grande. Emquanto elle falava, Capitú dava-me com os olhos\n' +
        'todas as sortes grandes e pequenas. A maior destas devia ser dada com\n' +
        'a bocca. E aqui entra a segunda parte do sonho. Padua desappareceu,\n' +
        'como as suas esperanças do bilhete. Capitú inclinou-se para fóra,\n' +
        'eu relancei do olhos pela rua, estava deserta. Peguei-lhe nas mãos,\n' +
        'resmunguei não sei que palavras, e accordei sósinho no dormitorio.\n' +
        '\n' +
        'O interesse do que acabas de ler não está na materia do sonho, mas nos\n' +
        'esforços que fiz para ver se dormia novamente e pegava nelle outra vez.\n' +
        'Nunca dos nuncas poderás saber a energia e obstinação que empreguei em\n' +
        'fechar os olhos, apertal-os bem, esquecer tudo para dormir, mas não\n' +
        'dormia. Esse mesmo trabalho fez-me perder o somno até á madrugada.\n' +
        'Sobre a madrugada, consegui concilial-o, mas então nem peraltas, nem\n' +
        'bilhetes de loteria, nem sortes grandes ou pequenas,--nada dos nadas\n' +
        'veiu ter commigo. Não sonhei mais aquella noite, e dei mal as licções\n' +
        'daquelle dia.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'LXIV\n' +
        '\n' +
        'Uma ideia e um escrupulo.\n' +
        '\n' +
        'Relendo o capitulo passado, acóde-me uma ideia e um escrupulo. O\n' +
        'escrupulo é justamente de escrever a ideia, não a havendo mais\n' +
        'banal na terra, posto que daquella banalidade do sol e da lua, que\n' +
        'o ceu nos dá todos os dias e todos os mezes. Deixei o manuscripto,\n' +
        'e olhei para as paredes. Sabes que esta casa do Engenho Novo, nas\n' +
        'dimensões, disposições e pinturas, é reproducção da minha antiga casa\n' +
        'de Matacavallos. Outrosim, como te disse no capitulo II, o meu fim\n' +
        'em imitar a outra foi ligar as duas pontas da vida, o que aliás não\n' +
        'alcancei. Pois o mesmo succedeu áquelle sonho do seminario, por mais\n' +
        'que tentasse dormir e dormisse. Donde concluo que um dos officios do\n' +
        'homem é fechar e apertar muito os olhos, a ver se continua pela noite\n' +
        'velha o sonho truncado da noite moça. Tal é a ideia banal e nova que\n' +
        'eu não quizera pôr aqui, e só provisoriamente a escrevo.\n' +
        '\n' +
        'Antes de concluir este capitulo, fui á janella indagar da noite por que\n' +
        'razão os sonhos hão de ser assim tão tenues que se esgarçam ao menor\n' +
        'abrir de olhos ou voltar de corpo, e não continuam mais. A noite não\n' +
        'me respondeu logo. Estava deliciosamente bella, os morros pallejavam\n' +
        'de luar e o espaço morria de silencio. Como eu insistisse, declarou-me\n' +
        'que os sonhos já não pertencem á sua jurisdicção. Quando elles moravam\n' +
        'na ilha que Luciano lhes deu, onde ella tinha o seu palacio, e donde os\n' +
        'fazia sair com as suas caras de varia feição, dar-me-hia explicações\n' +
        'possiveis. Mas os tempos mudaram tudo. Os sonhos antigos foram\n' +
        'aposentados, e os modernos moram no cerebro da pessoa. Estes, ainda que\n' +
        'quizessem imitar os outros, não poderiam fazel-o; a ilha dos sonhos,\n' +
        'como a dos amores, como todas as ilhas de todos os mares, são agora\n' +
        'objecto da ambição e da rivalidade da Europa e dos Estados-Unidos.\n' +
        '\n' +
        'Era uma allusão ás Fillipinas. Pois que não amo a politica, e ainda\n' +
        'menos a politica internacional, fechei a janella e vim acabar este\n' +
        'capitulo para ir dormir. Não peço agora os sonhos de Luciano, nem\n' +
        'outros, filhos da memoria ou da digestão; basta-me um somno quieto e\n' +
        'apagado. De manhã, com a fresca, irei dizendo o mais da minha historia\n' +
        'e suas pessoas.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'LXV\n' +
        '\n' +
        'A dissimulação.\n' +
        '\n' +
        'Chegou o sabbado, chegaram outros sabbados, e eu acabei affeiçoando-me\n' +
        'á vida nova. Ia alternando a casa e o seminario. Os padres gostavam de\n' +
        'mim, os rapazes tambem, e Escobar mais que os rapazes e os padres. No\n' +
        'fim de cinco semanas estive quasi a contar a este as minhas penas e\n' +
        'esperanças; Capitú refreou-me.\n' +
        '\n' +
        '--Escobar é muito meu amigo, Capitú!\n' +
        '\n' +
        '--Mas não é meu amigo.\n' +
        '\n' +
        '--Póde vir a ser; elle já me disse que ha de vir cá para conhecer mamãe.\n' +
        '\n' +
        '--Não importa; você não tem direito de contar um segredo que não é só\n' +
        'seu, mas tambem meu, e eu não lhe dou licença de dizer nada a pessoa\n' +
        'nenhuma.\n' +
        '\n' +
        'Era justo, calei-me e obedeci. Outra cousa em que obedeci ás suas\n' +
        'reflexões foi, logo no primeiro sabbado, quando eu fui á casa della,\n' +
        'e, após alguns minutos de conversa, me aconselhou a ir embora.\n' +
        '\n' +
        '--Hoje não fique aqui mais tempo; vá para casa, que eu lá vou logo. É\n' +
        'natural que D. Gloria queira estar com você muito tempo, ou todo, se\n' +
        'puder.\n' +
        '\n' +
        'Em tudo isso mostrava a minha amiga tanta lucidez que eu bem podia\n' +
        'deixar de citar um terceiro exemplo, mas os exemplos não se fizeram\n' +
        'senão para ser citados, e este é tão bom que a omissão seria um crime.\n' +
        'Foi á minha terceira ou quarta vinda á casa. Minha mãe depois que lhe\n' +
        'respondi ás mil perguntas que me fez sobre o tratamento que me davam,\n' +
        'os estudos, as relações, a disciplina, e se me doia alguma cousa, e\n' +
        'se dormia bem, tudo o que a ternura das mães inventa para cançar a\n' +
        'paciencia de um filho, concluiu voltando-se para José Dias:\n' +
        '\n' +
        '--Sr. José Dias, ainda duvida que saia daqui um bom padre?\n' +
        '\n' +
        '--Excellentissima...\n' +
        '\n' +
        '--E você, Capitú, interrompeu minha mãe voltando-se para a filha do\n' +
        'Padua que estava na sala, com ella,--você não acha que o nosso Bentinho\n' +
        'dará um bom padre?\n' +
        '\n' +
        '--Acho que sim, senhora, respondeu Capitú cheia de convicção.\n' +
        '\n' +
        'Não gostei da convicção. Assim lh\'o disse, na manhã seguinte, na\n' +
        'quintal della, recordando as palavras da vespera, e lançando-lho em\n' +
        'rosto, pela primeira vez, a alegria que ella mostrára desde a minha\n' +
        'entrada no seminario, quando eu vivia curtido de saudades. Capitú\n' +
        'fez-se muito séria, e perguntou-me como é que queria que se portasse,\n' +
        'uma vez que suspeitavam de nós; tambem tivera noites desconsoladas, e\n' +
        'os dias, em casa della, foram tão tristes como os meus; podia indagal-o\n' +
        'do pae e da mãe. A mãe chegou a dizer-lhe, por palavras encobertas, que\n' +
        'não pensasse mais em mim.\n' +
        '\n' +
        '--Com D. Gloria e D. Justina mostro-me naturalmente alegre, para que\n' +
        'não pareça que a denuncia de José Dias é verdadeira. Se parecesse,\n' +
        'ellas tratariam de separar-nos mais, e talvez acabassem não me\n' +
        'recebendo... Para mim, basta o nosso juramento de que nos havemos de\n' +
        'casar um com outro.\n' +
        '\n' +
        'Era isto mesmo; deviamos dissimular para matar qualquer suspeita, e ao\n' +
        'mesmo tempo gosar toda a liberdade anterior, e construir tranquillos o\n' +
        'nosso futuro. Mas o exemplo completa-se com o que ouvi no dia seguinte,\n' +
        'ao almoço; minha mãe, dizendo tio Cosme que ainda queria ver com que\n' +
        'mão havia en de abençoar o povo á missa, contou que, dias antes,\n' +
        'estando a falar de moças que se casam cedo, Capitú lhe dissera: «Pois a\n' +
        'mim quem me ha de casar ha de ser o padre Bentinho; eu espero que elle\n' +
        'se ordene!» Tio Cosmo riu da graça, José Dias não dessorriu, só prima\n' +
        'Justina é que franziu a testa, e olhou para mim interrogativamente. Eu,\n' +
        'que havia olhado para todos, não pude resistir ao gesto da prima, e\n' +
        'tratei de comer. Mas comi mal; estava tão contente com aquella grande\n' +
        'dissimulação de Capitú que não vi mais nada, e, logo que almocei, corri\n' +
        'a referir-lhe a conversa e a louvar-lhe a astucia. Capitú sorriu de\n' +
        'agradecida.\n' +
        '\n' +
        '--Você tem razão, Capitú, concluí eu; vamos enganar toda esta gente.\n' +
        '\n' +
        '--Não é? disse ella com ingenuidade.\n'
    },
    {
      src: '/assets/audio/domcasmurro14.mp3',
      titulo: 'Seção 14',
      subtitulo: 'Capítulos LXVI ao LXX',
      leitor: 'Pier',
      numeroSecao: 14,
      texto: '/assets/texts/secao14.txt',
      tempo: '21min',
      capitulo: 'LXVI\n' +
        '\n' +
        'Intimidade.\n' +
        '\n' +
        'Capitú ia agora entrando na alma de minha mãe. Viviam o mais do tempo\n' +
        'juntas, falando de mim, a proposito do sol e da chuva, ou de nada;\n' +
        'Capitú ia lá coser, ás manhãs; alguma vez ficava para jantar.\n' +
        '\n' +
        'Prima Justina não acompanhava a parenta naquellas finezas, mas não\n' +
        'tratava de todo mal a minha amiga. Era assaz sincera para dizer o mal\n' +
        'que sentia de alguem, e não sentia bem de pessoa alguma. Talvez do\n' +
        'marido, mas o marido era morto; em todo caso, não existira homem capaz\n' +
        'de competir com elle na affeição, no trabalho e na honestidade, nas\n' +
        'maneiras e na agudeza de espirito. Esta opinião, segundo tio Cosme,\n' +
        'era posthuma, pois em vida andavam ás brigas, e os ultimos seis mezes\n' +
        'acabaram separados. Tanto melhor para a justiça della; o louvor dos\n' +
        'mortos é um modo de orar por elles. Tambem gostaria de minha mãe, ou\n' +
        'se algum mal pensou della foi entre si e o travesseiro. Comprehende-se\n' +
        'que, de apparencia, lhe désse a estima devida. Não penso que ella\n' +
        'aspirasse a algum legado; as pessoas assim dispostas excedem os\n' +
        'serviços naturaes, fazem-se mais risonhas, mais assiduas, multiplicam\n' +
        'os cuidados, precedem os famulos. Tudo isso era contrario á natureza\n' +
        'de prima Justina, feita de azedume e de implicancia. Como vivesse de\n' +
        'favor na casa, explica-se que não desestimasse a dona e calasse os seus\n' +
        'resentimentos, ou só dissesse mal della a Deus e ao diabo.\n' +
        '\n' +
        'Caso tivesse resentimentos de minha mãe, não era uma razão mais para\n' +
        'detestar Capitú, nem ella precisava de razões supplementares. Comtudo,\n' +
        'a intimidade de Capitú fel-o mais aborrecivel á minha parenta. Se a\n' +
        'principio não a tratava mal, com o tempo trocou de maneiras e acabou\n' +
        'fugindo-lhe. Capitú, attenta, desde que a não via, indagava della e\n' +
        'ia procural-a. Prima Justina tolerava esses cuidados. A vida é cheia\n' +
        'de obrigações que a gente cumpre, por mais vontade que tenha de os\n' +
        'infringir deslavadamente. Demais, Capitú usava certa magia que captiva;\n' +
        'prima Justina acabava sorrindo, ainda que azedo, mas a sós com minha\n' +
        'mãe achava alguma palavra ruim que dizer da menina.\n' +
        '\n' +
        'Como minha mãe adoecesse de uma febre, que a pòz ás portas da morte,\n' +
        'quiz que Capitú lhe servisse de enfermeira. Prima Justina, posto que\n' +
        'isto a aliviasse de cuidados penosos, não perdoou á minha amiga a\n' +
        'intervenção. Um dia, perguntou-lhe se não tinha que fazer em casa;\n' +
        'outro dia, rindo, soltou-lhe este epigramma: «Não precisa correr tanto;\n' +
        'o que tiver de ser seu ás mãos lhe ha de ir.»\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'LXVII\n' +
        '\n' +
        'Um peccado.\n' +
        '\n' +
        'Já agora não tiro a doente da cama sem contar o que se deu commigo. Ao\n' +
        'cabo de cinco dias, minha mãe amanheceu tão transtornada que ordenou me\n' +
        'mandassem buscar ao seminario. Em vão tio Cosme:\n' +
        '\n' +
        '--Mana Gloria, você assusta-se sem motivo, a febre passa...\n' +
        '\n' +
        '--Não! não! mandem buscal-o! Posso morrer, e a minha alma não se salva,\n' +
        'se Bentinho não estiver ao pé de mim.\n' +
        '\n' +
        '--Vamos assustal-o,\n' +
        '\n' +
        '--Pois não lhe digam nada, mas vão buscal-o, já, já, não se demorem.\n' +
        '\n' +
        'Cuidaram fosse delirio; mas, não custando nada trazer-me, José Dias\n' +
        'foi incumbido do recado. Entrou tão atordoado que me assustou. Contou\n' +
        'particularmente ao reitor o que havia, e recebi licença para ir a casa.\n' +
        'Na rua, iamos calados, elle não alterando o passo do costume,--a\n' +
        'premissa antes da consequencia, a consequencia antes do conclusão,--mas\n' +
        'cabisbaixo e suspirando, eu temendo ler no rosto delle alguma noticia\n' +
        'dura e definitiva. Só me falára na doença, como negocio simples; mas\n' +
        'o chamado, o silencio, os suspiros podiam dizer alguma cousa mais. O\n' +
        'coração batia-me com força, as pernas bambeavam-me, mais de uma vez\n' +
        'cuidei cair...\n' +
        '\n' +
        'O anceio de escutar a verdade complicava-se em mim com o temor de a\n' +
        'saber. Era a primeira vez que a morte me apparecia assim perto, me\n' +
        'envolvia, me encarava com os olhos furados e escuros. Quanto mais\n' +
        'andava aquella rua dos Barbonos, mais me aterrava a ideia de chegar a\n' +
        'casa, de entrar, de ouvir os prantos, de ver um corpo defuncto... Oh!\n' +
        'eu não poderia nunca expòr aqui tudo o que senti naquelles terriveis\n' +
        'minutos. A rua, por mais que José Dias andasse superlativamente\n' +
        'devagar, parecia fugir-me debaixo dos pés, as casas voavam de um e\n' +
        'outro lado, e uma corneta que nessa occasião tocava no quartel dos\n' +
        'Municipaes Permanentes resoava aos meus ouvidos como a trombeta do\n' +
        'juizo final.\n' +
        '\n' +
        'Fui, cheguei aos Arcos, entrei na rua de Matacavallos. A casa não era\n' +
        'logo alli, mas muito além da dos Invalidos, perto da do Senado. Trez ou\n' +
        'quatro vezes, quizera interrogar o meu companheiro, sem ousar abrir a\n' +
        'bocca; mas agora, já nem tinha tal desejo. Ia só andando, acceitando o\n' +
        'peor, como um gesto do destino, como uma necessidade da obra humana,\n' +
        'e foi então que a Esperança, para combater o Terror, me segredou ao\n' +
        'coração, não estas palavras, pois nada articulou parecido com palavras,\n' +
        'mas uma ideia que poderia ser traduzida por ellas: «Mamãe defuncta,\n' +
        'acaba o seminario.»\n' +
        '\n' +
        'Leitor, foi um relampago. Tão depressa alumiou a noite, como se esvaiu,\n' +
        'e a escuridão fez-se mais cerrada, pelo effeito do remorso que me\n' +
        'ficou. Foi uma suggestão da luxuria e do egoismo. A piedade filial\n' +
        'desmaiou um instante, com a perspectiva da liberdade certa, pelo\n' +
        'desapparecimento da divida e do devedor; foi um instante, menos que um\n' +
        'instante, o centesimo de um instante, ainda assim o sufficiente para\n' +
        'complicar a minha afflicção com um remorso.\n' +
        '\n' +
        'José Dias suspirava. Uma vez olhou para mim tão cheio de pena que me\n' +
        'pareceu haver-me adivinhado, e eu quiz pedir-lhe que não dissesse nada\n' +
        'a ninguem, que eu ia castigar-me, etc. Mas a pena trazia tanto amor,\n' +
        'que não podia ser pezar do meu peccado; mas então era sempre a morte de\n' +
        'minha mãe... Senti uma angustia grande, um nó na garganta, e não pude\n' +
        'mais, chorei de uma vez.\n' +
        '\n' +
        '--Que é, Bentinho?\n' +
        '\n' +
        '--Mamãe...?\n' +
        '\n' +
        '--Não! não! Que ideia é essa? O estado della é gravissimo, mas não é\n' +
        'mal de morte, e Deus póde tudo. Enxugue os olhos, que é feio um mocinho\n' +
        'da sua edade andar chorando na rua. Não ha de ser nada, uma febre... As\n' +
        'febres, assim como dão com força assim tambem se vão embora... Com os\n' +
        'dedos, não; onde está o lenço?\n' +
        '\n' +
        'Enxuguei os olhos, posto que de todas as palavras de José Dias uma só\n' +
        'me ficasse no coração; foi aquelle _gravissimo._ Vi depois que elle só\n' +
        'queria dizer _grave_, mas o uso do superlativo faz a bocca longa, e,\n' +
        'por amor do periodo, José Dias fez crescer a minha tristeza. Se achares\n' +
        'neste livro algum caso da mesma familia, avisa-me, leitor, para que o\n' +
        'emende na segunda edição; nada ha mais feio que dar pernas longuissimas\n' +
        'a ideias brevissimas. Enxuguei os olhos, repito, e fui andando, ancioso\n' +
        'agora por chegar a casa, e pedir perdão a minha mãe do ruim pensamento\n' +
        'que tive. Emfim, chegámos, entramos, subi tremulo os seis degraus da\n' +
        'escada, e d\'ahi a pouco, debruçado sobre a cama, ouvia as palavras\n' +
        'ternas de minha mãe que me apertava muito as mãos, chamando-me seu\n' +
        'filho. Estava queimando, os olhos ardiam nos meus, toda ella parecia\n' +
        'consumida por um volcão interno. Ajoelhei-me ao pé do leito, mas como\n' +
        'este era alto, fiquei longe das suas caricias:\n' +
        '\n' +
        '--Não, meu filho, levanta, levanta!\n' +
        '\n' +
        'Capitú, que estava na alcova, gostou de ver a minha entrada, os\n' +
        'meus gestos, palavras e lagrimas, segundo me disse depois; mas não\n' +
        'suspeitou naturalmente todas as causas da minha afflicção. Entrando no\n' +
        'meu quarto, pensei em dizer tudo a minha mãe, logo que ella ficasse\n' +
        'boa, mas esta ideia não me mordia, era uma velleidade pura, uma acção\n' +
        'que eu não faria nunca, por mais que o peccado me doesse. Então,\n' +
        'levado do remorso, usei ainda uma vez do meu velho meio das promessas\n' +
        'espirituaes, e pedi a Deus que me perdoasse e salvasse a vida de\n' +
        'minha mãe, e eu lhe rezaria dous mil padre-nossos. Padre que me lês,\n' +
        'perdoa este recurso; foi a ultima vez que o empreguei. A crise em\n' +
        'que me achava, não menos que o costume e a fé, explica tudo. Eram\n' +
        'mais dous mil; onde iam os antigos? Não paguei uns nem outros, mas\n' +
        'saindo de almas candidas e verdadeiras taes promessas são como a moeda\n' +
        'fiduciaria,--ainda que o devedor as não pague, valem a somma que dizem.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'LXVIII\n' +
        '\n' +
        'Adiemos a virtude.\n' +
        '\n' +
        'Poucos teriam animo de confessar aquelle meu pensamento da rua de\n' +
        'Matacavallos. Eu confessarei tudo o que importar á minha historia.\n' +
        'Montaigne escreveu de si: _ce ne sont pas mes gestes que j\'ecris; c\'est\n' +
        'moi, c\'est mon essence._ Ora, ha só um modo de escrever a propria\n' +
        'essencia, é contal-a toda, o bem e o mal. Tal faço eu, á medida que me\n' +
        'vae lembrando o convindo á construção ou reconstrucção de mim mesmo.\n' +
        'Por exemplo, agora que contei um peccado, diria com muito gosto alguma\n' +
        'bella acção contemporanea, se me lembrasse, mas não me lembra; fica\n' +
        'transferida a melhor opportunidade.\n' +
        '\n' +
        'Nem perderás em esperar, meu amigo; ao contrario, acóde-me agora que...\n' +
        'Não só as bellas acções são bellas em qualquer occasião, como são\n' +
        'tambem possiveis e provaveis, pela theoria que tenho dos peccados e\n' +
        'das virtudes, não menos simples que clara. Reduz-se a isto que cada\n' +
        'pessoa nasce com certo numero delles e dellas, alliados por matrimonio\n' +
        'para se compensarem na vida. Quando um de taes conjuges é mais forte\n' +
        'que o outro, elle só guia o individuo, sem que este, por não haver\n' +
        'praticado tal virtude ou commettido tal peccado, se possa dizer isento\n' +
        'de um ou de outro; mas a regra é dar-se a pratica simultanea dos dous,\n' +
        'com vantagem do portador de ambos, e alguma vez com resplendor maior da\n' +
        'terra e do ceu. É pena que eu não possa fundamentar isto com um ou mais\n' +
        'casos extranhos; falta-me tempo.\n' +
        '\n' +
        'Pelo que me toca, é certo que nasci com alguns daquelles casaes, e\n' +
        'naturalmente ainda os possuo. Já me succedeu, aqui no Engenho Novo, por\n' +
        'estar uma noite com muita dòr de cabeça, desejar que o trem da Central\n' +
        'estourasse longe dos meus ouvidos e interrompesse a linha por muitas\n' +
        'horas, ainda que morresse alguem; e no dia seguinte perdi o trem da\n' +
        'mesma estrada, por ter ido dar a minha bengala a um cego que não trazia\n' +
        'bordão. _Voilà mes gestes, voilà mon essence._\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'LXIX\n' +
        '\n' +
        'A missa.\n' +
        '\n' +
        'Um dos gestos que melhor exprimem a minha essencia foi a devoção\n' +
        'com que corri no domingo proximo a ouvir missa em S. Antonio dos\n' +
        'Pobres. O aggregado quiz ir commigo, e principiou a vestir-se, mas\n' +
        'era tão lento nos suspensorios e nas presilhas, que não pude esperar\n' +
        'por elle. Demais, eu queria estar só. Sentia necessidade de evitar\n' +
        'qualquer conversação que me desviasse o pensamento do fim a que ia,\n' +
        'e era reconciliar-me com Deus, depois do que se passou no capitulo\n' +
        'LXVII. Nem era só pedir-lhe perdão do peccado, era tambem agradecer\n' +
        'o restabelecimento de minha mãe, e, visto que digo tudo, fazel-o\n' +
        'renunciar ao pagamento da minha promessa. Jehovah, posto que divino,\n' +
        'ou por isso mesmo, é um Rothschild muito mais humano, e não faz\n' +
        'moratorias, perdoa as dividas integralmente, uma vez que o devedor\n' +
        'queira devéras emendar a vida e cortar nas despezas. Ora, eu não\n' +
        'queria outra cousa; dalli em deante não faria mais promessas que não\n' +
        'pudesse pagar, e pagaria logo as que fizesse.\n' +
        '\n' +
        'Ouvi missa; ao levantar a Deus, agradeci a vida e saude de minha mãe;\n' +
        'depois pedi perdão do peccado e relevação da divida, e recebi a benção\n' +
        'final do officiante como um acto solemne de reconciliação. No fim,\n' +
        'lembrou-me que a egreja estabeleceu no confessionario um cartorio\n' +
        'seguro, e na confissão o mais authentico dos instrumentos para o ajuste\n' +
        'de contas moraes entre o homem e Deus. Mas a minha incorrigivel timidez\n' +
        'me fechou essa porta certa; receiei não achar palavras com que dizer ao\n' +
        'confessor o meu segredo. Como o homem muda! Hoje chego a publical-o.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'LXX\n' +
        '\n' +
        'Depois da missa.\n' +
        '\n' +
        'Rezei ainda, persignei-me, fechei o livro de missa e caminhei para a\n' +
        'porta. A gente mão era muita, mas a egreja tambem não é grande, e não\n' +
        'pude sair logo, logo, mas devagar. Havia homens e mulheres, velhos e\n' +
        'moços, sedas e chitas, e provavelmente olhos feios e bellos, mas eu\n' +
        'não vi uns nem outros. Ia na direcção da porta, com a onda, ouvindo\n' +
        'as saudações e os cochichos. No adro, onde se fez claro, parei e\n' +
        'olhei para todos. Vi então uma moça e um homem, que saíam da egreja e\n' +
        'pararam; e a moça olhava para mim falando ao homem, e o homem olhava\n' +
        'para mim, ouvindo a moça. E chegaram-me estas palavras:\n' +
        '\n' +
        '--Mas que queres?\n' +
        '\n' +
        '--Queria saber della; papae pergunte.\n' +
        '\n' +
        'Era sinhásinha Sancha, a companheira de collegio de Capitú, que\n' +
        'queria noticias de minha mãe. O pae veiu a mim; disse-lhe que estava\n' +
        'restabelecida. Depois saimos, mostrou-me a casa delle, e, como eu vinha\n' +
        'na mesma direcção, viemos juntos. Gurgel era homem de quarenta annos ou\n' +
        'pouco mais, com propensão a engrossar o ventre; era muito obsequioso;\n' +
        'chegando á porta da casa, quiz por força que eu fosse almoçar com elle.\n' +
        '\n' +
        '--Obrigado; mamãe espera-me.\n' +
        '\n' +
        '--Manda-se lá um preto dizer que o senhor fica almoçando, e irá mais\n' +
        'tarde.\n' +
        '\n' +
        '--Venho outro dia.\n' +
        '\n' +
        'Sinhásinha Sancha, voltada para o pae, ouvia e esperava. Não era feia;\n' +
        'só se lhe podia notar a semelhança do nariz, que tambem acabava grosso,\n' +
        'mas ha feições que tiram a graça de uns para dal-a a outros. Vestia\n' +
        'simples. Gurgel era viuvo e morria pela filha. Como eu recusasse o\n' +
        'almoço, quiz que descançasse alguns minutos. Não pude recusar e subi.\n' +
        'Quis saber a minha edade, os meus estudos, a minha fé, e dava-me\n' +
        'conselhos para o caso de vir a ser padre; disse-me o numero do armazem,\n' +
        'rua da Quitanda. Emfim, despedi-me, veiu ao patamar da escada; a filha\n' +
        'deu-me rocommendações para Capitú e para minha mãe. Da rua olhei para\n' +
        'cima; o pae estava á janella e fez-me um gosto largo de despedida.\n'
    },
    {
      src: '/assets/audio/domcasmurro15.mp3',
      titulo: 'Seção 15',
      subtitulo: 'Capítulos LXXI ao LXXV',
      leitor: 'Rachel Moraes',
      numeroSecao: 15,
      texto: '/assets/texts/secao15.txt',
      tempo: '14min',
      capitulo: 'LXXI\n' +
        '\n' +
        'Visita de Escobar.\n' +
        '\n' +
        'Em casa, tinham já mentido dizendo a minha mãe que eu voltára e estava\n' +
        'mudando de roupa.\n' +
        '\n' +
        '«A missa das oito já ha de ter acabado... Bentinho devia estar de\n' +
        'volta... Teria acontecido alguma cousa, mano Cosme?... Mandem ver...»\n' +
        'Assim falava ella, de minuto a minuto, mas eu entrei e commigo a\n' +
        'tranquillidade.\n' +
        '\n' +
        'Era o dia das boas sensações. Escobar foi visitar-me e saber da saude\n' +
        'de minha mãe. Nunca me visitára até alli, nem as nossas relações\n' +
        'estavam já tão estreitas, como vieram a ser depois; mas sabendo a razão\n' +
        'da minha saida, tres dias antes, aproveitou o domingo para ir ter\n' +
        'commigo e perguntar se continuava o perigo ou não. Quando lhe disse que\n' +
        'não, respirou.\n' +
        '\n' +
        '--Tive receio, disse elle.\n' +
        '\n' +
        '--Os outros souberam?\n' +
        '\n' +
        '--Parece que sim: alguns souberam.\n' +
        '\n' +
        'Tio Cosme e José Dias gostaram do moço; o aggregado disse-lhe que vira\n' +
        'uma vez o pae no Rio de Janeiro. Escobar era muito polido; e, comquanto\n' +
        'falasse mais do que veiu a falar depois, ainda assim não era tanto como\n' +
        'os rapazes da nossa edade; naquelle dia achei-o um pouco mais expansivo\n' +
        'que de costume. Tio Cosme quiz que jantasse comnosco. Escobar reflectiu\n' +
        'um instante e acabou dizendo que o correspondente do pae esperava por\n' +
        'elle. Eu, lembrando-me das palavras do Gurgel, repeti-as:\n' +
        '\n' +
        '--Manda-se lá um preto dizer que o senhor janta aqui, e irá depois.\n' +
        '\n' +
        '--Tanto incommodo!\n' +
        '\n' +
        '--Incommodo nenhum, interveiu tio Cosme.\n' +
        '\n' +
        'Escobar acceitou, e jantou. Notei que os movimentos rápidos que tinha e\n' +
        'dominava na aula tambem os dominava agora, na sala como na mesa. A hora\n' +
        'que passou commigo foi de franca amizade. Mostrei-lhe os poucos livros\n' +
        'que possuia. Gostou muito do retrato de meu pae; depois de alguns\n' +
        'instantes de contemplação, virou-se e disse-me:\n' +
        '\n' +
        '--Vê-se que era um coração puro!\n' +
        '\n' +
        'Os olhos de Escobar, claros como já disse, eram dulcissimos; assim\n' +
        'os definiu José Dias, depois que elle saiu, e mantenho esta palavra,\n' +
        'apesar dos quarenta annos que traz em cima de si. Nisto não houve\n' +
        'exageração do aggregado. A cara rapada mostrava uma pelle alva e lisa.\n' +
        'A testa é que era um pouco baixa, vindo a risca do cabello quasi em\n' +
        'cima da sobrancelha esquerda; mas tinha sempre a altura necessaria\n' +
        'para não affrontar as outras feições, nem diminuir a graça dellas.\n' +
        'Realmente, era interessante de rosto, a bocca fina e chocarreira, o\n' +
        'nariz curvo e delgado. Tinha o séstro de sacudir o hombro direito, de\n' +
        'quando em quando, e veiu a perdel-o, desde que um de nós lh\'o notou\n' +
        'um dia no seminario; primeiro exemplo que vi de que um homem póde\n' +
        'corrigir-se muito bem dos defeitos miudos.\n' +
        '\n' +
        'Nunca deixei de sentir tal ou qual desvanecimento em que os meus amigos\n' +
        'agradassem a todos. Em casa, ficaram querendo bem a Escobar; a mesma\n' +
        'prima Justina achou que era um moço muito apreciavel, apesar... Apesar\n' +
        'de que? perguntou-lhe José Dias, vendo que ella não acabava a phrase.\n' +
        'Não teve resposta, nem podia tel-a; prima Justina provavelmente não\n' +
        'viu defeito claro ou importante no nosso hospede; o _apesar_ era uma\n' +
        'especie de resalva para algum que lhe viesse a descobrir um dia; ou\n' +
        'então foi obra de uso velho, que a levou a restringir, onde não achára\n' +
        'restricção.\n' +
        '\n' +
        'Escobar despediu-se logo depois de jantar; fui leval-o á porta,\n' +
        'onde esperámos a passagem de um omnibus. Disse-me que o armazem do\n' +
        'correspondente era na rua dos Pescadores, e ficava aberto até ás nove\n' +
        'horas: elle é que se não queria demorar fóra. Separámo-nos com muito\n' +
        'affecto: elle, de dentro do omnibus, ainda me disse adeus, com a mão.\n' +
        'Conservei-me á porta, a ver se, ao longe, ainda olharia para traz, mas\n' +
        'não olhou.\n' +
        '\n' +
        '--Que amigo é esse tamanho? perguntou alguem de uma janella ao pé.\n' +
        '\n' +
        'Não é preciso dizer que era Capitú. São cousas que se adivinham na\n' +
        'vida, como nos livros, sejam romances, sejam historias verdadeiras. Era\n' +
        'Capitú, que nos espreitara desde algum tempo, por dentro da veneziana,\n' +
        'e agora abrira inteiramente a janella, e apparecera. Viu as nossas\n' +
        'despedidas tão rasgadas e affectuosas, e quiz saber quem era que me\n' +
        'merecia tanto.\n' +
        '\n' +
        '--É o Escobar, disse eu indo pôr-me embaixo da janella, a olhar para\n' +
        'cima.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'LXXII\n' +
        '\n' +
        'Uma reforma dramatica.\n' +
        '\n' +
        'Nem eu, nem tu, nem ella, nem qualquer outra pessoa desta historia\n' +
        'poderia responder mais, tão certo é que o destino, como todos os\n' +
        'dramaturgos, não annuncia as peripecias nem o desfecho. Elles chegam a\n' +
        'seu tempo, até que o panno cae, apagam-se as luzes, e os espectadores\n' +
        'vão dormir. Nesse genero ha porventura alguma cousa que reformar, e\n' +
        'eu proporia, como ensaio, que as peças começassem pelo fim. Othello\n' +
        'mataria a si e a Desdemona no primeiro acto, os tres seguintes seriam\n' +
        'dados á acção lenta e decrescente do ciume, e o ultimo ficaria só com\n' +
        'as scenas iniciaes da ameaça dos turcos, as explicações de Othello e\n' +
        'Desdemona, e o bom conselho do fino Iago: «Mette dinheiro na bolsa.»\n' +
        'Desta maneira, o espectador, por um lado, acharia no theatro a charada\n' +
        'habitual que os periodicos lhe dão, porque os ultimos actos explicariam\n' +
        'o desfecho do primeiro, especie de conceito, e, por outro lado, ia\n' +
        'para a cama com uma boa impressão de ternura e de amor:\n' +
        '\n' +
        '     Ella amou o que me affligira,\n' +
        '     Eu amei a piedade della.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'LXXIII\n' +
        '\n' +
        'O contra-regra.\n' +
        '\n' +
        'O destino não é só dramaturgo, é tambem o seu proprio contra-regra,\n' +
        'isto é, designa a entrada dos personagens em scena, dá-lhes as cartas\n' +
        'e outros objectos, e executa dentro os signaes correspondentes\n' +
        'ao dialogo, uma trovoada, um carro, um tiro. Quando eu era moço,\n' +
        'representou-se ahi, em não sei que theatro, um drama que acabava pelo\n' +
        'juizo final. O principal personagem era Ashaverus, que no ultimo\n' +
        'quadro concluia um monologo por esta exclamação: «Ouço a trombeta do\n' +
        'archanjo!» Não se ouviu trombeta nenhuma. Ashaverus, envergonhado,\n' +
        'repetiu a palavra, agora mais alto, para advertir o contra-regra, mas\n' +
        'ainda nada. Então caminhou para o fundo, disfarçamente tragico, mas\n' +
        'effectivamente com o fim de falar ao bastidor, e dizer em voz surda:**\n' +
        '«O piston! o piston! o piston!» O publico ouviu esta palavra e desatou\n' +
        'a rir, até que, quando a trombeta soou devéras, e Ashaverus bradou\n' +
        'pela terceira vez que era a do archanjo, um gaiato da platéa corrigiu\n' +
        'cá debaixo: «Não, senhor, é o piston do archanjo!»\n' +
        '\n' +
        'Assim se explicam a minha estada debaixo da janella de Capitú e a\n' +
        'passagem de um cavalleiro, um _dandy_, como então diziamos. Montava\n' +
        'um bello cavallo alazão, firme na sella, redea na mão esquerda, a\n' +
        'direita á cinta, botas de verniz, figura e postura esbeltas: a cara\n' +
        'não me era desconhecida. Tinham passado outros, e ainda outros viriam\n' +
        'atraz; todos iam ás suas namoradas. Era uso do tempo namorar a cavallo.\n' +
        'Relê Alencar: «Porque um estudante (dizia um dos seus personagens de\n' +
        'theatro de 1858) não póde estar sem estas duas cousas, um cavallo e uma\n' +
        'namorada.» Relê Alvares de Azevedo. Uma das suas poesias é destinada\n' +
        'a contar (1851) que residia em Catumby, e, para ver a namorada no\n' +
        'Cattete, alugara um cavallo por trez mil reis... Trez mil reis! tudo se\n' +
        'perde na noite dos tempos!\n' +
        '\n' +
        'Ora, o _dandy_ do cavallo baio não passou como os outros; era a\n' +
        'trombeta do juizo final e soou a tempo; assim faz o Destino, que é o\n' +
        'seu proprio contra-regra. O cavalleiro não se contentou de ir andando,\n' +
        'mas voltou a cabeça para o nosso lado, o lado de Capitú, e olhou\n' +
        'para Capitú, e Capitú para elle; o cavallo andava, a cabeça do homem\n' +
        'deixava-se ir voltando para traz. Tal foi o segundo dente de ciume que\n' +
        'me mordeu. A rigor, era natural admirar as bellas figuras; mas aquelle\n' +
        'sujeito costumava pagar alli, ás tardes; morava no antigo Campo da\n' +
        'Acclamação, e depois... e depois... Vão lá raciocinar com um coração de\n' +
        'braza, como era o meu!\n' +
        '\n' +
        'Nem disse nada a Capitú; saí da rua á pressa, enfiei pelo meu corredor,\n' +
        'e, quando dei por mim, estava na sala de visitas.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'LXXIV\n' +
        '\n' +
        'A presilha.\n' +
        '\n' +
        'Na sala de visitas, tio Cosme e José Dias conversavam, um sentado,\n' +
        'outro andando e parando. A vista de José Dias lembrou-me o que elle\n' +
        'me disséra no seminario: «Aquillo emquanto não pegar algum peralta da\n' +
        'visinhança que case com ella....» Era certamente allusão ao cavalleiro.\n' +
        'Tal recordação aggravou a impressão que eu trazia da rua; mas não\n' +
        'seria essa palavra, inconscientemente guardada, que me dispoz a crer\n' +
        'na malicia dos seus olhares? A vontade que tive foi pegar em José Dias\n' +
        'pela gola, leval-o ao corredor e perguntar-lhe se falara de verdade ou\n' +
        'por hypothese; mas José Dias, que parára ao ver-me entrar, continuou a\n' +
        'andar e a falar. Eu, impaciente, queria ir á casa ao pé, imaginava que\n' +
        'Capitú saisse da janella assustada e não tardasse a apparecer, para\n' +
        'indagar e explicar.... E os dous falavam, até que tio Cosme ergueu-se\n' +
        'para ir ver a doente, e José Dias veiu ter commigo, ao vão da outra\n' +
        'janella.\n' +
        '\n' +
        'Ha um instante tinha eu desejo de lhe perguntar o que havia entre\n' +
        'Capitú e os peraltas do bairro; agora, imaginando que vinha justamente\n' +
        'dizer-m\'o, fiquei com medo de ouvil-o. Quiz tapar-lhe a bocca. José\n' +
        'Dias viu no meu rosto algum signal differente da expressão habitual, e\n' +
        'perguntou-me com interesse:\n' +
        '\n' +
        '--Que é, Bentinho?\n' +
        '\n' +
        'Para não fital-o, deixei cair os olhos. Os olhos, caindo, viram que uma\n' +
        'das presilhas das calças do aggregado estava desabotoada, e, como elle\n' +
        'insistisse em saber o que é que eu tinha, respondi apontando com o dedo:\n' +
        '\n' +
        '--Olhe a presilha, abotoe a presilha.\n' +
        '\n' +
        'José Dias inclinou-se, eu saí correndo.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'LXXV\n' +
        '\n' +
        'O desespero.\n' +
        '\n' +
        'Escapei ao aggregado, escapei a minha mãe não indo ao quarto della, mas\n' +
        'não escapei a mim mesmo. Corri ao meu quarto, e entrei atraz de mim.\n' +
        'Eu falava-me, eu perseguia-me, eu atirava-me á cama, e rolava commigo,\n' +
        'e chorava, e abafava os soluços com a ponta do lençol. Jurei não ir\n' +
        'ver Capitú aquella tarde, nem nunca mais, e fazer-me padre de uma vez.\n' +
        'Via-me já ordenado, deante d\'ella, que choraria de arrependimento e me\n' +
        'pediria perdão, mas eu, frio e sereno, não teria mais que desprezo,\n' +
        'muito desprezo; voltava-lhe as costas. Chamava-lhe perversa. Duas vezes\n' +
        'dei por mim mordendo os dentes, como se a tivesse entre elles.\n' +
        '\n' +
        'Da cama ouvia voz della, que viera passar o resto da tarde com minha\n' +
        'mãe, e naturalmente commigo, como das outras vezes; mas, por maior que\n' +
        'fosse o abalo que me deu, não me fez sair do quarto. Capitú ria alto,\n' +
        'falava alto, como se me avisasse; eu continuava surdo, a sós commigo\n' +
        'e o meu desprezo. A vontade que me dava era cravar-lhe as unhas no\n' +
        'pescoço, enterral-as bem, até ver-lhe sair a vida com o sangue....\n'
    },
    {
      src: '/assets/audio/domcasmurro16.mp3',
      titulo: 'Seção 16',
      subtitulo: 'Capítulos LXXVI ao LXXX',
      leitor: 'gtavares97',
      numeroSecao: 16,
      texto: '/assets/texts/secao16.txt',
      tempo: '19min',
      capitulo: 'LXXVI\n' +
        '\n' +
        'Explicação.\n' +
        '\n' +
        'Ao fim de algum tempo, estava socegado, mas abatido. Como me achasse\n' +
        'estirado na cama, com os olhos no tecto, lembrou-me a recommendação que\n' +
        'minha mãe fazia de me não deitar depois de jantar para evitar alguma\n' +
        'congestão. Ergui-me de golpe, mas não saí do quarto. Capitú ria agora\n' +
        'menos e falava mais baixo; estaria afflicta com a minha reclusão, mas\n' +
        'nem por isso me abalou.\n' +
        '\n' +
        'Não ceei e dormi mal. Na manhã seguinte não estava melhor, estava\n' +
        'differente. A minha dòr agora complicava-se do receio de haver ido além\n' +
        'do que convinha, deixando de examinar o negocio. Posto que a cabeça\n' +
        'me doesse um pouco, simulei maior incommodo, com o fim de não ir ao\n' +
        'seminario e falar a Capitú. Podia estar zangada commigo, podia não\n' +
        'querer-me agora e preferir o cavalleiro. Quiz resolver tudo, ouvil-a e\n' +
        'julgal-a; podia ser que tivesse defesa e explicação.\n' +
        '\n' +
        'Tinha ambas as cousas. Quando soube a causa da minha reclusão da\n' +
        'vespera, disse-me que era grande injuria que lhe fazia; não podia\n' +
        'crer que depois da nossa troca de juramentos, tão leviana a julgasse\n' +
        'que pudesse crer.... E aqui romperam-lhe lagrimas, e fez um gesto de\n' +
        'separação; mas eu acudi de prompto, peguei-lhe das mãos e beijei-as\n' +
        'com tanta alma e calor que as senti estremecer. Enxugou os olhos com\n' +
        'os dedos, eu os beijei de novo, por elles e pelas lagrimas; depois\n' +
        'suspirou, depois abanou a cabeça. Confessou-me que não conhecia o\n' +
        'rapaz, senão como os outros que alli passavam ás tardes, a cavallo ou a\n' +
        'pé. Se olhara para elle, era prova exactamente de não haver nada entre\n' +
        'ambos; se houvesse, era natural dissimular.\n' +
        '\n' +
        '--E que poderia haver, se elle vae casar? concluiu.\n' +
        '\n' +
        '--Vae casar?\n' +
        '\n' +
        'Ia casar, disse-me com quem, com uma moça da rua dos Barbonos. Esta\n' +
        'razão quadrou-me mais que tudo, e ella o sentiu no meu gesto; nem por\n' +
        'isso deixou de dizer que, para evitar nova equivocação, deixaria de ir\n' +
        'mais á janella.\n' +
        '\n' +
        '--Não! não! não! não lhe peço isto!\n' +
        '\n' +
        'Consentiu em retirar a promessa, mas fez outra, e foi que, á primeira\n' +
        'suspeita da minha parte, tudo estaria dissolvido entro nós. Acceitei a\n' +
        'ameaça, e jurei que nunca a haveria de cumprir: era a primeira suspeita\n' +
        'e a ultima.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'LXXVII\n' +
        '\n' +
        'Prazer das dôres velhas.\n' +
        '\n' +
        'Contando aquella crise do meu amor adolescente, sinto uma cousa que não\n' +
        'sei se explico bem, e é que as dôres daquella quadra, a tal ponto se\n' +
        'espiritualisaram com o tempo, que chegam a diluir-se no prazer. Não é\n' +
        'claro isto, mas nem tudo é claro na vida ou nos livros. A verdade é que\n' +
        'sinto um gosto particular em referir tal aborrecimento, quando é certo\n' +
        'que elle me lembra outros que não quizera lembrar por nada.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'LXXVIII\n' +
        '\n' +
        'Segredo por segredo.\n' +
        '\n' +
        'De resto, naquelle mesmo tempo senti tal ou qual necessidade de contar\n' +
        'a alguem o que se passava entre mim e Capitú. Não referi tudo, mas só\n' +
        'uma parte, e foi Escobar que a recebeu. Quando voltei ao seminario,\n' +
        'na quarta-feira, achei-o inquieto; disse-me que era sua intenção ir\n' +
        'ver-me, se eu me demorasse mais um dia em casa. Perguntava-me com\n' +
        'interesse o que é que tivera, e se estava bom de todo.\n' +
        '\n' +
        '--Estou.\n' +
        '\n' +
        'Ouvia, espetando-me os olhos. Tres dias depois disse que me estavam\n' +
        'achando muito distrahido; era bom disfarçar o mais que pudesse. Elle, á\n' +
        'sua parte, tinha razões para andar distrahido tambem, mas buscava ficar\n' +
        'attento.\n' +
        '\n' +
        '--Então parece-lhe....?\n' +
        '\n' +
        '--Sim, você ás vezes está que não ouve nada, olhando para hontem;\n' +
        'disfarce, Santiago.\n' +
        '\n' +
        '--Tenho motivos....\n' +
        '\n' +
        '--Creio; ninguem se distrae á toa.\n' +
        '\n' +
        '--Escobar....\n' +
        '\n' +
        'Hesitei; elle esperou.\n' +
        '\n' +
        '--Que é?\n' +
        '\n' +
        '--Escobar, você é meu amigo, eu sou seu amigo tambem; aqui no seminario\n' +
        'você é a pessoa que mais me tem entrado no coração, e lá fóra, a não\n' +
        'ser a gente da familia, não tenho propriamente um amigo.\n' +
        '\n' +
        '--Se eu disser a mesma cousa, retorquiu elle sorrindo, perde a graça;\n' +
        'parece que estou repetindo. Mas a verdade é que não tenho aqui relações\n' +
        'com ninguem, você é o primeiro e creio que já notaram; mas eu não me\n' +
        'importo com isso.\n' +
        '\n' +
        'Commovido, senti que a voz se me precipitava da garganta.\n' +
        '\n' +
        '--Escobar, você é capaz de guardar um segredo?\n' +
        '\n' +
        '--Você que pergunta é porque duvida, e nesse caso....\n' +
        '\n' +
        '--Desculpe, é um modo de falar. Eu sei que é moço serio, e faço de\n' +
        'conta que me confesso a um padre.\n' +
        '\n' +
        '--Se precisa de absolvição, está absolvido.\n' +
        '\n' +
        '--Escobar, eu não posso ser padre. Estou aqui, os meus acreditam, o\n' +
        'esperam; mas eu não posso ser padre.\n' +
        '\n' +
        '--Nem eu, Santiago.\n' +
        '\n' +
        '--Nem você?\n' +
        '\n' +
        '--Segredo por segredo; tambem eu tenho o proposito de não acabar o\n' +
        'curso; meu desejo é o commercio, mas não diga nada, absolutamente\n' +
        'nada; fica só entre nós. E não é que eu não seja religioso; sou\n' +
        'religioso, mas o commercio é a minha paixão.\n' +
        '\n' +
        '--Só isso?\n' +
        '\n' +
        '--Que mais ha de ser?\n' +
        '\n' +
        'Dei duas voltas e sussurrei a primeira palavra da minha confidencia,\n' +
        'tão escassa e surda, que não a ouvi eu mesmo; sei porém que disse «uma\n' +
        'pessoa...» com reticencia. Uma pessoa....? Não foi preciso mais para\n' +
        'que elle entendesse. Uma pessoa devia ser uma moça. Nem cuides que\n' +
        'pasmou de me ver namorado; achou até natural e espetou-me outra vez os\n' +
        'olhos. Então contei-lhe por alto o que podia, mas demoradamente para\n' +
        'ter o gosto de repisar o assumpto. Escobar escutava com interesse; no\n' +
        'fim da nossa conversação, declarou-me que era segredo enterrado em\n' +
        'cemiterio. Deu-me de conselho que não me fizesse padre. Não podia levar\n' +
        'para a egreja um coração que não era do ceu, mas da terra; seria um mau\n' +
        'padre, nem seria padre. Ao contrario. Deus protegia os sinceros; uma\n' +
        'vez que eu só podia servil-o no mundo, ahi me cumpria ficar.\n' +
        '\n' +
        'Não calculas o prazer que me deu a confidencia que lhe fiz. Era como\n' +
        'que uma felicidade mais. Aquelle coração moço que me ouvia e me dava\n' +
        'razão, trazia a este mundo um aspecto extraordinario. Era um grande e\n' +
        'bello mundo, a vida uma carreira excellente, e eu nem mais nem menos um\n' +
        'mimoso do ceu; eis a minha sensação. Nota que eu não lhe disse tudo,\n' +
        'nem o melhor; não lhe referi o capitulo do penteado, por exemplo, nem\n' +
        'outros assim; mas o contado era muito.\n' +
        '\n' +
        'Que voltámos ao assumpto, não é preciso dizel-o. Voltámos uma e muitas\n' +
        'vezes; eu louvava as qualidades moraes de Capitú, materia adequada á\n' +
        'admiração de um seminarista, a simpleza, a modestia, o amor do trabalho\n' +
        'e os costumes religiosos. Não lhe tocava nas graças physicas, nem elle\n' +
        'me perguntava por ellas; apenas insinuei a conveniencia de a conhecer\n' +
        'de vista.\n' +
        '\n' +
        '--Agora não é possivel, disse-lhe na primeira semana, ao voltar de\n' +
        'casa; Capitú vae passar uns dias com uma amiga da rua dos Invalidos.\n' +
        'Quando ella vier, você irá lá; mas póde ir antes, póde ir sempre;\n' +
        'porque não foi hontem jantar commigo?\n' +
        '\n' +
        '--Você não me convidou.\n' +
        '\n' +
        '--Pois precisa convidar? Lá em casa todos ficaram gostando muito de\n' +
        'você.\n' +
        '\n' +
        '--Tambem eu fiquei gostando de todos, mas se é possivel fazer\n' +
        'distincção, confesso-lhe que sua mãe é uma senhora adoravel.\n' +
        '\n' +
        '--Não é verdade? retorqui cheio de alvoroço.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'LXXIX\n' +
        '\n' +
        'Vamos ao capitulo.\n' +
        '\n' +
        'Com effeito, gostei de ouvil-o falar assim. Sabes a opinião que eu\n' +
        'tinha de minha mãe. Ainda agora, depois de interromper esta linha para\n' +
        'mirar-lhe o retrato que pende da parede, acho que trazia no rosto\n' +
        'impressa aquella qualidade. Nem de outro modo se explica a opinião de\n' +
        'Escobar, que apenas trocara com ella quatro palavras. Uma só bastava a\n' +
        'penetrar-lhe a essencia intima; sim, sim, minha mãe era adoravel. Por\n' +
        'mais que me estivesse então obrigando a uma carreira que eu não queria,\n' +
        'não podia deixar de sentir que era adoravel, como uma santa.\n' +
        '\n' +
        'E por ventura era certo que me obrigava á carreira ecclesiastica? Aqui\n' +
        'chego a um ponto, que esperei viesse depois, tanto que já pesquizava em\n' +
        'que altura lhe daria um capitulo. Realmente, não cabia dizer agora o\n' +
        'que só mais tarde presumi descobrir; mas, uma vez que toquei no ponto,\n' +
        'melhor é acabar com elle. É grave e complexo, delicado e subtil, um\n' +
        'destes em que o autor tem de attender ao filho, e o filho ha de ouvir\n' +
        'o autor, para que um e outro digam a verdade, só a verdade, mas toda a\n' +
        'verdade. Cabe ainda notar que esse ponto é que torna justamente a santa\n' +
        'mais adoravel, sem prejuizo (ao contrario!) da parte humana e terrestre\n' +
        'que havia nella. Basta de prefacio ao capitulo; vamos ao capitulo.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'LXXX\n' +
        '\n' +
        'Venhamos ao capitulo.\n' +
        '\n' +
        'Venhamos ao capitulo. Minha mãe era temente a Deus; sabes disto, e das\n' +
        'suas praticas religiosas, e da fé pura que as animava. Nem ignoras que\n' +
        'a minha carreira ecclesiastica era objecto de promessa feita quando\n' +
        'fui concebido. Tudo está contado opportunamente. Outrosim, sabes que\n' +
        'para o fim de apertar o vinculo moral da obrigação, confiou os seus\n' +
        'projectos e motivos a parentes e familiares. A promessa, feita com\n' +
        'fervor, acceita com misericordia, foi guardada por ella, com alegria,\n' +
        'no mais intimo do coração. Penso que lhe senti o sabor da felicidade no\n' +
        'leite que me deu a mamar. Meu pae, se vivesse, é possivel que alterasse\n' +
        'os planos, e, como tinha a vocação da politica, é provavel que me\n' +
        'encaminhasse somente á politica, embora os dous officios não fossem nem\n' +
        'sejam inconciliaveis, e mais de um padre entre na luta dos partidos e\n' +
        'no governo dos homens. Mas meu pae morrera sem saber nada, e ella ficou\n' +
        'deante do contracto, como unica devedora.\n' +
        '\n' +
        'Um dos aphorismos de Franklin é que, para quem tem de pagar na paschoa,\n' +
        'a quaresma é curta. A nossa quaresma não foi mais longa que as outras,\n' +
        'e minha mãe, posto me mandasse ensinar latim e doutrina, começou a\n' +
        'adiar a minha entrada no seminario. É o que se chama, commercialmente\n' +
        'falando, reformar uma lettra. O credor era archi-millionario, não\n' +
        'dependia daquella quantia para comer, e consentiu nas transferencias de\n' +
        'pagamento, sem sequer aggravar a taxa do juro. Um dia, porém, um dos\n' +
        'familiares que serviam de endossantes da letra, falou da necessidade de\n' +
        'entregar o preço ajustado; está n\'um dos capitulos primeiros. Minha mãe\n' +
        'concordou e recolhi-me a S. José.\n' +
        '\n' +
        'Ora, nesse mesmo capitulo, verteu ella umas lagrimas, que enxugou sem\n' +
        'explicar, e que nenhum dos presentes, nem tio Cosme, mau prima Justina,\n' +
        'nem o aggregado José Dias entendeu absolutamente; eu, que estava atraz\n' +
        'da porta, não as entendi mais que elles. Bem examinadas, apesar da\n' +
        'distancia, vê-se que eram saudades prévias, a magoa da separação,--e\n' +
        'póde ser tambem (é o principio do ponto), póde ser que arrependimento\n' +
        'da promessa. Catholica e devota, sentia muito bem que as promessas\n' +
        'se cumprem; a questão é se é opportuno e adequado fazel-as todas, e\n' +
        'naturalmente inclinava-se á negativa. Porque é que Deus a puniria,\n' +
        'negando-lhe um segundo filho? A vontade divina podia ser a minha vida,\n' +
        'sem necessidade de lh\'a dedicar _ab ovo._ Era um raciocinio tardio;\n' +
        'devia ter sido feito no dia em que fui gerado. Em todo caso, era uma\n' +
        'conclusão primeira; mas, não bastando concluir para destruir, tudo se\n' +
        'manteve, e eu fui para o seminario.\n' +
        '\n' +
        'Um cochilo da fé teria resolvido a questão a meu favor, mas a fé velava\n' +
        'com os seus grandes olhos ingenuos. Minha mãe faria, se pudesse,\n' +
        'uma troca de promessa, dando parte dos seus annos para conservar-me\n' +
        'comsigo, fóra do clero, casado e pae; é o que presumo, assim como\n' +
        'supponho que rejeitou tal ideia, por lhe parecer uma deslealdade. Assim\n' +
        'a senti sempre na corrente da vida ordinaria.\n' +
        '\n' +
        'Succedeu que a minha ausencia foi logo temperada pela assiduidade de\n' +
        'Capitú. Esta começou a fazer-se-lhe necessaria. Pouco a pouco veiu-lhe\n' +
        'a persuasão de que a pequena me faria feliz. Então (é o final do ponto\n' +
        'annunciado), a esperança de que o nosso amor, tornando-me absolutamente\n' +
        'incompativel com o seminario, me levasse a não ficar lá nem por Deus\n' +
        'nem pelo diabo, esta esperança intima e secreta entrou a invadir o\n' +
        'coração de minha mãe. Neste caso, eu romperia o contracto sem que ella\n' +
        'tivesse culpa. Ella ficava commigo sem acto propriamente seu. Era como\n' +
        'se, tendo confiado a alguem a importancia de uma divida para leval-a\n' +
        'ao credor, o portador guardasse o dinheiro comsigo e não levasse nada.\n' +
        'Na vida commum, o acto de terceiro não desobriga o contractante; mas a\n' +
        'vantagem de contractar com o ceu é que intenção vale dinheiro.\n' +
        '\n' +
        'Has de ter tido conflictos parecidos com esse, e, se és religioso,\n' +
        'haverás buscado alguma vez conciliar o ceu e a terra, por modo identico\n' +
        'ou analogo. O ceu e a terra acabam conciliando-se; elles são quasi\n' +
        'irmãos gemeos, tendo o ceu sido feito no segundo dia e a terra no\n' +
        'terceiro. Como Abrahão, minha mãe levou o filho ao monte da Visão,\n' +
        'e mais a lenha para o holocausto, o fogo e o cutello. E atou Isaac\n' +
        'em cima do feixe de lenha, pegou do cutello e levantou-o ao alto. No\n' +
        'momento de fazel-o cair, ouve a voz do anjo que lhe ordena da parte do\n' +
        'Senhor: «Não faças mal algum a teu filho; conheci que temes a Deus.»\n' +
        'Tal seria a esperança secreta de minha mãe.\n' +
        '\n' +
        'Capitú era naturalmente o anjo da Escriptura. A verdade é que minha mãe\n' +
        'não podia tel-a agora longe de si. A affeição crescente era manifesta\n' +
        'por actos extraordinarios. Capitú passou a ser a flôr da casa, o sol\n' +
        'das manhãs, o frescor das tardes, a lua das noites; lá vivia horas e\n' +
        'horas, ouvindo, falando e cantando. Minha mãe apalpava-lhe o coração,\n' +
        'revolvia-lhe os olhos, e o meu nome era entre ambas como a senha da\n' +
        'vida futura.\n'
    },
    {
      src: '/assets/audio/domcasmurro17.mp3',
      titulo: 'Seção 17',
      subtitulo: 'Capítulos LXXXI ao LXXXV',
      leitor: 'Maria de Fátima da Silva',
      numeroSecao: 17,
      texto: '/assets/texts/secao17.txt',
      tempo: '15min',
      capitulo: 'LXXXI\n' +
        '\n' +
        'Uma palavra.\n' +
        '\n' +
        'Assim contado o que descobri mais tarde, posso trasladar para aqui\n' +
        'uma palavra de minha mãe. Agora se entenderá que ella me dissesse, no\n' +
        'primeiro sabbado, quando eu cheguei a casa, e soube que Capitú estava\n' +
        'na rua dos Invalidos, com Sinhásinha Gurgel.\n' +
        '\n' +
        '--Porque não vaes vel-a? Não me disseste que o pae de Sancha te\n' +
        'offereceu a casa?\n' +
        '\n' +
        '--Offereceu.\n' +
        '\n' +
        '--Pois então? Mas é se queres. Capitú devia ter voltado hoje para\n' +
        'acabar um trabalho commigo; certamente a amiga pediu-lhe que dormisse\n' +
        'lá.\n' +
        '\n' +
        '--Talvez ficassem namorando, insinuou prima Justina.\n' +
        '\n' +
        'Não a matei por não ter a mão ferro nem corda, pistola nem punhal; mas\n' +
        'os olhos que lhe deitei, se pudessem matar, teriam supprido tudo. Um\n' +
        'dos erros da Providencia foi deixar ao homem unicamente os braços e\n' +
        'os dentes, como armas de ataque, e as pernas como armas de fuga ou de\n' +
        'defesa. Os olhos bastavam ao primeiro effeito. Um mover delles faria\n' +
        'parar ou cair um inimigo ou um rival, exerceriam vingança prompta,\n' +
        'com este accressimo que, para desnortear a justiça, os mesmos olhos\n' +
        'matadores seriam olhos piedosos, e correriam a chorar a victima.\n' +
        'Prima Justina escapou aos meus; eu é que não escapei ao effeito da\n' +
        'insinuação, e no domingo, ás onze horas, corri á rua dos Invalidos.\n' +
        '\n' +
        'O pae de Sancha recebeu-me em desalinho e triste. A filha estava\n' +
        'enferma; caira na vespera com uma febre, que se ia aggravando. Como\n' +
        'elle queria muito á filha, pensava já vel-a morta, e annunciou-me que\n' +
        'se mataria tambem. Eis aqui um capitulo funebre como um cemiterio,\n' +
        'mortes, suicidios e assassinatos. Eu anciava por um raio de luz clara e\n' +
        'ceu azul. Foi Capitú que os trouxe á porta da sala, vindo dizer ao pae\n' +
        'de Sancha que a filha o mandara chamar.\n' +
        '\n' +
        '--Está peor? perguntou Gurgel assustado.\n' +
        '\n' +
        '--Não, senhor, mas quer falar-lhe.\n' +
        '\n' +
        '--Fique aqui um bocadinho, disse-lhe elle; e voltando-se para mim: É a\n' +
        'enfermeira de Sancha, que não quer outra; eu já volto.\n' +
        '\n' +
        'Capitú trazia signaes de fadiga e commoção, mas tão depressa me viu,\n' +
        'ficou toda outra, a mocinha de sempre, fresca e lepida, não menos que\n' +
        'espantada. Custou-lhe a crer que fosse eu. Falou-me, quiz que lhe\n' +
        'falasse, e effectivamente conversámos por alguns minutos, mas tão\n' +
        'baixo e abafado que nem as paredes ouviram, ellas que tèm ouvidos. De\n' +
        'resto, se ellas ouviram algo, nada entenderam, nem ellas nem os moveis,\n' +
        'que estavam tão tristes como o dono.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'LXXXII\n' +
        '\n' +
        'O canapé.\n' +
        '\n' +
        'Delles, só o canapé pareceu haver comprehendido a nossa situação\n' +
        'moral, visto que nos offereceu os serviços da sua palhinha, com tal\n' +
        'insistencia que os acceitámos e nos sentámos. Data dahi a opinião\n' +
        'particular que tenho do canapé. Elle faz alliar a intimidade e o\n' +
        'decoro, e mostra a casa toda sem sair da sala. Dous homens sentados\n' +
        'nelle pódem debater o destino de um imperio, e duas mulheres a graça\n' +
        'de um vestido; mas, um homem e uma mulher só por aberração das leis\n' +
        'naturaes dirão outra cousa que não seja de si mesmos. Foi o que\n' +
        'fizemos, Capitú e eu. Vagamente lembra-me que lhe perguntei se a demora\n' +
        'alli seria grande...\n' +
        '\n' +
        '--Não sei; a febre parece que cede... mas...\n' +
        '\n' +
        'Tambem me lembra, vagamente, que lhe expliquei a minha visita á rua dos\n' +
        'Invalidos, com a pura verdade, isto é, a conselho de minha mãe.\n' +
        '\n' +
        '--Conselho della? murmurou Capitú.\n' +
        '\n' +
        'E accrescentou com os olhos, que brilhavam extraordinariamente:\n' +
        '\n' +
        '--Seremos felizes!\n' +
        '\n' +
        'Repeti esta palavras, com os simples dedos, apertando os della. O\n' +
        'canapé, quer visse ou não, continuou a prestar os seus serviços ás\n' +
        'nossas mãos presas e ás nossas cabeças juntas ou quasi juntas.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'LXXXIII\n' +
        '\n' +
        'O retrato.\n' +
        '\n' +
        'Gurgel tornou á sala e disse a Capitú que a filha chamava por ella.\n' +
        'Eu levantei-me depressa e não achei compostura; mettia os olhos pelas\n' +
        'cadeiras. Ao contrario, Capitú ergueu-se naturalmente e perguntou-lhe\n' +
        'se a febre augmentára.\n' +
        '\n' +
        '--Não, disse elle.\n' +
        '\n' +
        'Nem sobresalto nem nada, nenhum ar de mysterio da parte de Capitú;\n' +
        'voltou-se para mim, e disse-me que levasse lembranças a minha mãe e\n' +
        'a prima Justina, e que até breve; estendeu-me a mão e enfiou pelo\n' +
        'corredor. Todas as minhas invejas foram com ella. Como era possivel que\n' +
        'Capitú se governasse tão facilmente e eu não?\n' +
        '\n' +
        '--Está uma moça, observou Gurgel olhando tambem para ella.\n' +
        '\n' +
        'Murmurei que sim. Na verdade, Capitú ia crescendo ás carreiras, as\n' +
        'fórmas arredondavam-se e avigoravam-se com grande intensidade;\n' +
        'moralmente, a mesma cousa. Era mulher por dentro e por fóra, mulher á\n' +
        'direita e á esquerda, mulher por todos os lados, e desde os pés até á\n' +
        'cabeça. Esse arvorecer era mais apressado, agora que eu a via de dias\n' +
        'a dias; de cada vez que vinha a casa achava-a mais alta e mais cheia;\n' +
        'os olhos pareciam ter outra reflexão, e a bocca outro imperio. Gurgel,\n' +
        'voltando-se para a parede da sala, onde pendia um retrato de moça,\n' +
        'perguntou-me se Capitú era parecida com o retrato.\n' +
        '\n' +
        'Um dos costumes da minha vida foi sempre concordar com a opinião\n' +
        'provavel do meu interlocutor, desde que a materia não me aggrava,\n' +
        'aborrece ou impõe. Antes de examinar se effectivamente Capitú era\n' +
        'parecida com o retrato, fui respondendo que sim. Então elle disse que\n' +
        'era o retrato da mulher delle, e que as pessoas que a conheceram diziam\n' +
        'a mesma cousa. Tambem achava que as feições eram semelhantes, a testa\n' +
        'principalmente e os olhos. Quanto ao genio, era um; pareciam irmãs.\n' +
        '\n' +
        '--Finalmente, até a amizade que ella tem a Sanchinha; a mãe não era\n' +
        'mais amiga della... Na vida ha dessas semelhanças assim exquisitas.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'LXXXIV\n' +
        '\n' +
        'Chamado.\n' +
        '\n' +
        'No saguão e na rua, examinei ainda commigo se effectivamente elle\n' +
        'teria desconfiado alguma cousa, mas achei que não e puz-me a andar. Ia\n' +
        'satisfeito com a visita, com a alegria de Capitú, com os louvores de\n' +
        'Gurgel, a tal ponto que não acudi logo a uma voz que me chamava:\n' +
        '\n' +
        '--Sr. Bentinho! Sr. Bentinho!\n' +
        '\n' +
        'Só depois que a voz cresceu e o dono della chegou á porta é que eu\n' +
        'parei e vi o que era e onde estava. Estava já na rua de Matacavallos.\n' +
        'A casa era uma loja de louça, escassa e pobre; tinha as portas\n' +
        'meio-cerradas, e a pessoa que me chamava era um pobre homem grisalho e\n' +
        'mal vestido.\n' +
        '\n' +
        '--Sr. Bentinho, disse-me elle chorando; sabe que meu filho Manduca\n' +
        'morreu?\n' +
        '\n' +
        '--Morreu?\n' +
        '\n' +
        '--Morreu ha meia hora, enterra-se amanhã. Mandei recado a sua mãe\n' +
        'agora mesmo, e ella fez-me a caridade de mandar algumas flores para\n' +
        'botar no caixão. Meu pobre filho! Tinha de morrer, e foi bom que\n' +
        'morresse, coitado, mas apesar de tudo sempre doe. Que vida que elle\n' +
        'teve!... Um dia destes ainda se lembrou do senhor, e perguntou se\n' +
        'estava no seminario... Quer vel-o? Entre, ande vel-o...\n' +
        '\n' +
        'Custa-me dizer isto, mas antes peque por excessivo que por diminuto.\n' +
        'Quiz responder que não, que não queria ver o Manduca, e fiz até um\n' +
        'gesto para fugir. Não era medo; n\'outra occasião póde ser até que\n' +
        'entrasse com facilidade e curiosidade, mas agora ia tão contente! Ver\n' +
        'um defuncto ao voltar de uma namorada... Ha cousas que se não ajustam\n' +
        'nem combinam. A simples noticia era já uma turvação grande. Às minhas\n' +
        'ideias de ouro perderam todas a côr e o metal para se trocarem em\n' +
        'cinza escura e feia, e não distingui mais nada. Penso que cheguei\n' +
        'a dizer que tinha pressa, mas provavelmente não falei por palavras\n' +
        'claras, nem sequer humanas, porque elle, encostado ao portal, abria-me\n' +
        'espaço com o gesto, e eu, sem alma para entrar nem fugir, deixei ao\n' +
        'corpo fazer o que pudesse, e o corpo acabou entrando.\n' +
        '\n' +
        'Não culpo ao homem; para elle, a cousa mais importante do momento\n' +
        'era o filho. Mas tambem não me culpem a mim; para mim, a cousa mais\n' +
        'importante era Capitú. O mal foi que os dous casos se conjugassem na\n' +
        'mesma tarde, e que a morte de um viesse metter o nariz na vida do\n' +
        'outro. Eis o mal todo. Se eu passasse antes ou depois, ou se o Manduca\n' +
        'esperasse algumas horas para morrer, nenhuma nota aborrecida viria\n' +
        'interromper as melodias da minha alma. Porque morrer exactamente ha\n' +
        'meia hora? Toda hora é apropriada ao obito; morre-se muito bem ás seis\n' +
        'ou sete horas da tarde.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'LXXXV\n' +
        '\n' +
        'O defuncto.\n' +
        '\n' +
        'Tal foi o sentimento confuso com que entrei na loja de louça. A\n' +
        'loja era escura, e o interior da casa menos luz tinha, agora que as\n' +
        'janellas da área estavam cerradas. A um canto da sala de jantar vi a\n' +
        'mãe chorando; á porta da alcova duas creanças olhavam espantadas para\n' +
        'dentro, com o dedo na bocca. O cadaver jazia na cama; a cama...\n' +
        '\n' +
        'Suspendamos a penna e vamos á janella espairecer a memoria. Realmente,\n' +
        'o quadro era feio, já pela morte, já pelo defuncto, que era horrivel...\n' +
        'Isto aqui, sim, é outra cousa. Tudo o que vejo lá fóra respira vida, a\n' +
        'cabra que rumina ao pé de uma carroça, a gallinha que marisca no chão\n' +
        'da rua, o trem da Estrada Central que bufa, assobia, fumega e passa, a\n' +
        'palmeira que investe para o ceu, e finalmente aquella torre de egreja,\n' +
        'apesar de não ter musculos nem folhagem. Um rapaz, que alli no becco\n' +
        'empina um papagaio de papel, não morreu nem morre, posto tambem se\n' +
        'chame Manduca.\n' +
        '\n' +
        'Verdade é que o outro Manduca era mais velho que este,** pouco mais\n' +
        'velho. Teria dezoito ou dezenove annos, mas tanto lhe darias quinze\n' +
        'como vinte e dous, a cara não permittia trazer a edade á vista, antes a\n' +
        'escondia nas dobras da... Vá, diga-se tudo; é morto, os seus parentes\n' +
        'são mortos, se existe algum não é em tal evidencia que se vexe ou\n' +
        'dôa. Diga-se tudo; Manduca padecia de uma cruel enfermidade, nada\n' +
        'menos que a lepra. Vivo era feio; morto pareceu-me horrivel. Quando\n' +
        'eu vi, estendido na cama, o triste corpo daquelle meu visinho, fiquei\n' +
        'apavorado e desviei os olhos. Não sei que mão occulta me compelliu a\n' +
        'olhar outra vez, ainda que de fugida; cedi, olhei, tornei a olhar, até\n' +
        'que recuei de todo e saí do quarto.\n' +
        '\n' +
        '--Padeceu muito! suspirou o pae.\n' +
        '\n' +
        '--Coitado de Manduca! soluçava a mãe.\n' +
        '\n' +
        'Eu cuidei de sair, disse que era esperado em casa, e despedi-me. O pae\n' +
        'perguntou-me se lhe faria o favor de ir ao enterro; respondi com a\n' +
        'verdade, que não sabia, faria o que minha mãe quizesse. E rapido saí,\n' +
        'atravessei a loja, e saltei á rua.\n'
    },
    {
      src: '/assets/audio/domcasmurro18.mp3',
      titulo: 'Seção 18',
      subtitulo: 'Capítulos LXXXVI ao XC',
      leitor: 'Maria de Fátima da Silva',
      numeroSecao: 18,
      texto: '/assets/texts/secao18.txt',
      tempo: '16min',
      capitulo: 'LXXXVI\n' +
        '\n' +
        'Amai, rapazes!\n' +
        '\n' +
        'Era tão perto, que antes de tres minutos me achei em casa. Parei\n' +
        'no corredor, a tomar folego; buscava esquecer o defuncto, pallido\n' +
        'e disforme, e o mais que não disse para não dar a estas paginas um\n' +
        'aspecto repugnante, mas pódes imaginal-o. Tudo arredei da vista, em\n' +
        'poucos segundos; bastou-me pensar na outra casa, e mais na vida e na\n' +
        'cara fresca e lepida de Capitú... Amai, rapazes! e, principalmente,\n' +
        'amai moças lindase graciosas; ellas dão remedio ao mal, aroma ao\n' +
        'infecto, trocam a morte pela vida... Amai, rapazes!\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'LXXXVII\n' +
        '\n' +
        'A sege.\n' +
        '\n' +
        'Chegara ao ultimo degrau, e uma ideia me entrou no cerebro, como se\n' +
        'estivesse a esperar por mim, entre as grades da cancella. Ouvi de\n' +
        'memoria as palavras do pae de Manduca pedindo-me que fosse ao enterro\n' +
        'no dia seguinte. Parei no degrau. Reflecti um instante; sim, podia ir\n' +
        'ao enterro, pediria a minha mãe que me alugasse um carro...\n' +
        '\n' +
        'Não cuides que era o desejo de andar de carro, por mais que tivesse o\n' +
        'gosto da conducção. Em pequeno, lembra-me que ia assim muita vez com\n' +
        'minha mãe ás visitas de amizade ou de ceremonia, e á missa, se chovia.\n' +
        'Era uma velha sege de meu pae, que ella conservou o mais que poude. O\n' +
        'cocheiro, que era nosso escravo, tão velho como a sege, quando me via á\n' +
        'poria, vestido, esperando minha mãe, dizia-me rindo:\n' +
        '\n' +
        '--Pae João vae levar nhonhô!\n' +
        '\n' +
        'E era raro que eu não lhe recommendasse:\n' +
        '\n' +
        '--João, demora muito as bestas; vae devagar.\n' +
        '\n' +
        '--Nhã Gloria não gosta.\n' +
        '\n' +
        '--Mas demora!\n' +
        '\n' +
        'Fica entendido que era para saborear a sege, não pela vaidade, porque\n' +
        'ella não permittia ver as pessoas que iam dentro. Era uma velha sege\n' +
        'obsoleta, de duas rodas, estreita e curta, com duas cortinas de couro\n' +
        'na frente, que corriam para os lados quando era preciso entrar ou sair.\n' +
        'Cada cortina tinha um oculo de vidro, por onde eu gostava de espiar\n' +
        'para fóra.\n' +
        '\n' +
        '--Senta, Bentinho!\n' +
        '\n' +
        '--Deixa espiar, mamãe!\n' +
        '\n' +
        'E em pé, quando era mais pequeno, mettia a cara no vidro, e via o\n' +
        'cocheiro com as suas grandes botas, escanchado na mula da esquerda, e\n' +
        'segurando a redea da outra; na mão levava o chicote grosso e comprido.\n' +
        'Tudo incommodo, as botas, o chicote e as mulas, mas elle gostava e\n' +
        'eu tambem. Dos lados via passar as casas, lojas ou não, abertas ou\n' +
        'fechadas, com gente ou sem ella, e na rua as pessoas que iam e vinham,\n' +
        'ou atravessavam deante da sege, com grandes pernadas ou passos miudos.\n' +
        'Quando havia impedimento de gente ou de animaes, a sege parava, e então\n' +
        'o espectaculo era particularmente interessante; as pessoas paradas na\n' +
        'calçada ou á porta das casas, olhavam para a sege e falavam entre si,\n' +
        'naturalmente sobre quem iria dentro. Quando fui crescendo em edade\n' +
        'imaginei que adivinhavam e diziam: «É aquella senhora da rua de\n' +
        'Matacavallos, que tem um filho, Bentinho...»\n' +
        '\n' +
        'A sege ia tanto com a vida recondita de minha mãe, que quando já não\n' +
        'havia nenhuma outra, continuámos a andar nella, e era conhecida na rua\n' +
        'e no bairro pela «sege antiga». Afinal minha mãe consentiu em deixal-a,\n' +
        'sem a vender logo; só abriu mão della porque as despezas de cocheira\n' +
        'a obrigaram a isso. A razão de a guardar inutil foi exclusivamente\n' +
        'sentimental; era a lembrança do marido. Tudo o que vinha de meu pae\n' +
        'era conservado como um pedaço delle, um resto da pessoa, a mesma alma\n' +
        'integral e pura. Mas o uso, esse era filho tambem do carrancismo que\n' +
        'ella confessava aos amigos. Minha mãe exprimia bem a fidelidade aos\n' +
        'velhos habitos, velhas maneiras, velhas ideias, velhas modas. Tinha o\n' +
        'seu museo de reliquias, pentes desusados, um trecho de mantilha, umas\n' +
        'moedas de cobre datadas de 1824 e 1825, e, para que tudo fosse antigo,\n' +
        'a si mesma se queria fazer velha; mas já deixei dito que, neste ponto,\n' +
        'não alcançava tudo o que queria.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'LXXXVIII\n' +
        '\n' +
        'Um pretexto honesto.\n' +
        '\n' +
        'Não, a ideia de ir ao enterro não vinha da lembrança do carro e suas\n' +
        'doçuras. A origem era outra: era porque, acompanhando o enterro no dia\n' +
        'seguinte, não iria ao seminario, e podia fazer outra visita a Capitú,\n' +
        'um tanto mais demorada. Eis ahi o que era. A lembrança do carro podia\n' +
        'vir accessoriamente depois, mas a principal e immediata foi aquella.\n' +
        'Voltaria á rua dos Invalidos, a pretexto de saber de Sinházinha Gurgel.\n' +
        'Contava que tudo me saisse como naquelle dia, Gurgel afflicto, Capitú\n' +
        'commigo no canapé, as mãos presas, o penteado...\n' +
        '\n' +
        '--Vou pedir a mamãe.\n' +
        '\n' +
        'Abri a cancella. Antes de transpôl-a, assim como ouvira da memoria a\n' +
        'palavra do pae do morto, ouvi agora a da mãe, e repeti a meia voz:\n' +
        '\n' +
        '--Coitado de Manduca!\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'LXXXIX\n' +
        '\n' +
        'A recusa.\n' +
        '\n' +
        'Minha mãe ficou perplexa quando lhe pedi para ir ao enterro.\n' +
        '\n' +
        '--Perder um dia de seminario...\n' +
        '\n' +
        'Fiz-lhe notar a amizade que o Manduca me tinha, e depois era gente\n' +
        'pobre... Tudo o que me lembrou dizer, disse. Prima Justina opinou pela\n' +
        'negativa.\n' +
        '\n' +
        '--Você acha que não deve ir? perguntou-lhe minha mãe.\n' +
        '\n' +
        '--Acho que não. Que amizade é essa que eu nunca vi?\n' +
        '\n' +
        'Prima Justina venceu. Quando referi o caso ao aggregado, este sorriu, e\n' +
        'disse-me que o motivo escondido da prima era provavelmente não dar ao\n' +
        'enterro «o lustre da minha pessoa.» Fosse o que fosse, fiquei amuado;\n' +
        'no dia seguinte, pensando no motivo, não me desagradou; mais tarde\n' +
        'achei-lhe um sabor particular.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'XC\n' +
        '\n' +
        'A polemica.\n' +
        '\n' +
        'No dia seguinte, passei pela casa do defuncto, sem entrar nem\n' +
        'parar,--ou, se parei, foi só um instante, ainda mais breve que este em\n' +
        'que vol-o digo. Se me não engano, andei até mais depressa, receiando\n' +
        'que me chamassem como na vespera. Uma vez que não ia ao enterro, antes\n' +
        'longe que proximo. Fui andando e pensando no pobre diabo.\n' +
        '\n' +
        'Não eramos amigos, nem nos conheciamos de muito. Intimidade, que\n' +
        'intimidade podia haver entre a doença delle e a minha saude? Tivemos\n' +
        'relações breves e distantes. Fui pensando nellas, recordando algumas.\n' +
        'Reduziam-se todas a uma polemica, entre nós, dous annos antes, a\n' +
        'proposito... Mal podeis crer a que proposito foi. Foi a guerra da\n' +
        'Criméa.\n' +
        '\n' +
        'Manduca vivia no interior da casa, deitado na cama, lendo por\n' +
        'desfastio. Ao domingo, sobre a tarde, o pae enfiava-lhe uma camisola\n' +
        'escura, e trazia-o para o fundo da loja, donde elle espiava um palmo da\n' +
        'rua e a gente que passava. Era todo o seu recreio. Foi alli que o vi\n' +
        'uma vez, e não fiquei pouco espantado; a doença ia-lhe comendo parte\n' +
        'das carnes, os dedos queriam apertar-se; o aspecto não attrahia, de\n' +
        'certo. Tinha eu de treze para quatorze annos. Da segunda vez que o vi\n' +
        'alli, como falassemos da guerra da Criméa, que então ardia e andava nos\n' +
        'jornaes, Manduca disse que os alliados haviam de vencer, e eu respondi\n' +
        'que não.\n' +
        '\n' +
        '--Pois veremos, tornou elle. Só se a justiça não vencer neste mundo, o\n' +
        'que é impossivel, e a justiça está com os alliados.\n' +
        '\n' +
        '--Não, senhor, a razão é dos russos.\n' +
        '\n' +
        'Naturalmente, iamos com o que nos diziam os jornaes da cidade,\n' +
        'transcrevendo os de fóra, mas póde ser tambem que cada um de nós\n' +
        'tivesse a opinião do seu temperamento. Fui sempre um tanto moscovita\n' +
        'nas minhas ideias. Defendi o direito da Russia, Manduca fez o mesmo ao\n' +
        'dos alliados, e o terceiro domingo em que entrei na loja tocámos outra\n' +
        'vez no assumpto. Então Manduca propoz que trocassemos a argumentação\n' +
        'por escripto, e na terça ou quarta-feira recebi duas folhas de papel\n' +
        'contendo a exposição e defesa do direito dos alliados, e da integridade\n' +
        'da Turquia, concluindo por esta phrase prophetica:\n' +
        '\n' +
        '«Os russos não hão de entrar em Constantinopla!»\n' +
        '\n' +
        'Li-a e metti-me a refutal-a. Não me recorda um só dos argumentos que\n' +
        'empreguei, nem talvez interesse conhecel-os, agora que o seculo está\n' +
        'a expirar; mas a ideia que me ficou delles é que eram irrespondiveis.\n' +
        'Fui eu mesmo levar-lhe o meu papel. Fizeram-me entrar na alcova, onde\n' +
        'elle jazia estirado na cama, mal coberto por uma colcha de retalhos.\n' +
        'Ou gosto da polemica ou qualquer outra causa que não alcanço, não me\n' +
        'deixou sentir toda a repugnancia que saía da cama e do doente, e o\n' +
        'prazer com que lhe dei o papel foi sincero. Manduca, pela sua parte,\n' +
        'por mais nojosa que tivesse então a cara, o sorriso que a accendou\n' +
        'dissimulou o mal physico. A convicção com que me recebeu o papel e\n' +
        'disse que ia ler e responderia é que não tem palavras nossas nem\n' +
        'alheias que a digam de todo e com verdade; não era exaltada, não era\n' +
        'ruidosa, não tinha gestos, nem a molestia os permittiria, era simples,\n' +
        'grande, profunda, um goso infinito de victoria, antes de saber os meus\n' +
        'argumentos. Tinha já papel, penna e tinta ao pé da cama. Dias depois\n' +
        'recebi a réplica; não me lembra se trazia cousas novas ou não; o calor\n' +
        'é que crescia, e o final era o mesmo:\n' +
        '\n' +
        '«Os russos não hão de entrar em Constantinopla!»\n' +
        '\n' +
        'Trepliquei, e dahi continuou por algum tempo uma polemica ardente, em\n' +
        'que nenhum de nós cedia, defendendo cada um os seus clientes com força\n' +
        'e brio. Manduca era mais longo e prompto que eu. Naturalmente a mim\n' +
        'sobravam mil cousas que distrahiam, o estudo, os recreios, a familia,\n' +
        'e a propria saude, que me chamava a outros exercicios. Manduca, salvo\n' +
        'o palmo de rua ao domingo de tarde, tinha só esta guerra, assumpto da\n' +
        'cidade e do mundo, mas que ninguem ia tratar com elle. O acaso dera-lhe\n' +
        'em mim um adversario; elle, que tinha gosto á escripta, deitou-se ao\n' +
        'debate, como a um remedio novo e radical. As horas tristes e compridas\n' +
        'eram agora breves e alegres; os olhos desapprenderam de chorar, se por\n' +
        'ventura choravam antes. Senti esta mudança delle nas proprias maneiras\n' +
        'do pae e da mãe.\n' +
        '\n' +
        '--Não imagina como elle anda agora, depois que o senhor lhe escreve\n' +
        'aquelles papeis, dizia-me o dono da loja, uma vez, á porta da rua. Fala\n' +
        'e ri muito. Logo que eu mando o caixeiro levar-lhe os papeis delle,\n' +
        'entra a indagar da resposta, e se demorará muito, e que pergunte ao\n' +
        'moleque, quando passar. Emquanto espera, relê jornaes e toma notas. Mas\n' +
        'tambem, apenas recebe os seus papeis, atira-se a lel-os, e começa logo\n' +
        'a escrever a resposta. Ha occasiões em que não come ou come mal; tanto\n' +
        'que eu queria pedir-lhe uma cousa, é que não os mande á hora do almoço\n' +
        'ou de jantar...\n' +
        '\n' +
        'Fui eu que cancei primeiro. Comecei a demorar as respostas, até que não\n' +
        'dei mais nenhuma; elle ainda teimou duas ou tres vezes depois do meu\n' +
        'silencio, mas não recebendo contestação alguma, por fadiga tambem ou\n' +
        'por não aborrecer, acabou de todo com as suas apologias. A ultima, como\n' +
        'a primeira, como todas, affirmava a mesma predicção eterna:\n' +
        '\n' +
        '«Os russos não hão de entrar em Constantinopla!»\n' +
        '\n' +
        'Não entraram, effectivamente, nem então, nem depois, nem até agora.\n' +
        'Mas a predicção será eterna? Não chegarão a entrar algum dia? Problema\n' +
        'difficil. O proprio Manduca, para entrar na sepultura, gastou tres\n' +
        'annos de dissolução, tão certo é que a natureza, como a historia, não\n' +
        'se faz brincando. A vida delle resistiu como a Turquia; se afinal\n' +
        'cedeu foi porque lhe faltou uma alliança como a anglo-franceza, não se\n' +
        'podendo considerar tal o simples accordo da medicina e da pharmacia.\n' +
        'Morreu afinal, como os Estados morrem; no nosso caso particular, a\n' +
        'questão é saber, não se a Turquia morrerá, porque a morte não poupa a\n' +
        'ninguem, mas se os russos entrarão algum dia em Constantinopla; essa\n' +
        'era a questão para o meu visinho leproso, debaixo da triste, rota e\n' +
        'infecta colcha de retalhos...\n'
    },
    {
      src: '/assets/audio/domcasmurro19.mp3',
      titulo: 'Seção 19',
      subtitulo: 'Capítulos XCI ao XCV',
      leitor: 'Maria de Fátima da Silva',
      numeroSecao: 19,
      texto: '/assets/texts/secao19.txt',
      tempo: '21min',
      capitulo: 'XCI\n' +
        '\n' +
        'Achado que consola.\n' +
        '\n' +
        'É claro que as reflexões que ahi deixo não foram feitas então, a\n' +
        'caminho do seminario, mas agora no gabinete do Engenho Novo. Então,\n' +
        'não fiz propriamente nenhuma, a não ser esta: que servi de allivio um\n' +
        'dia ao meu visinho Manduca. Hoje, pensando melhor, acho que não só\n' +
        'servi de allivio, mas até lhe dei felicidade. E o achado consola-me;\n' +
        'já agora não esquecerei mais que dei dous ou tres mezes de felicidade\n' +
        'a um pobre diabo, fazendo-lhe esquecer o mal e o resto. É alguma\n' +
        'cousa na liquidação da minha vida. Se ha no outro mundo tal ou qual\n' +
        'premio para as virtudes sem intenção, esta pagará um ou dous dos meus\n' +
        'muitos peccados. Quanto ao Manduca, não creio que fosse peccado opinar\n' +
        'contra a Russia, mas, se era, elle estará purgando ha quarenta annos\n' +
        'a felicidade que alcançou em dous ou tres mezes,--donde concluirá (já\n' +
        'tarde) que era ainda melhor haver gemido sómente, sem opinar cousa\n' +
        'nenhuma.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'XCII\n' +
        '\n' +
        'O diabo não é tão feio como se pinta.\n' +
        '\n' +
        'Manduca enterrou-se sem mim. A muitas outros aconteceu a mesma cousa,\n' +
        'sem que eu sentisse nada, mas este caso affligiu-me particularmente\n' +
        'pela razão já dita. Tambem senti não sei que melancolia ao recordar a\n' +
        'primeira polemica da vida, o gosto com que elle recebia os meus papeis\n' +
        'e se propunha a refutal-os, não contando o gosto do carro... Mas o\n' +
        'tempo apagou depressa todas essas saudades e resurreições. Nem foi só\n' +
        'elle; duas pessoas vieram ajudal-o, Capitú, cuja imagem dormiu commigo\n' +
        'na mesma noite, e outra que direi no capitulo que vem. O resto deste\n' +
        'capitulo e só para pedir que, se alguem tiver de ler o meu livro com\n' +
        'alguma attenção mais da que lhe exigir o preço do exemplar, não deixe\n' +
        'de concluir que o diabo não é tão feio como se pinta. Quero dizer...\n' +
        '\n' +
        'Quero dizer que o meu visinho de Matacavallos, temperando o mal com\n' +
        'a opinião anti-russa, dava á podridão das suas carnes um reflexo\n' +
        'espiritual que as consolava. Ha consolações maiores, de certo, e uma\n' +
        'das mais excellentes é não padecer esse nem outro mal algum, mas a\n' +
        'natureza é tão divina que se diverte com taes contrastes, e aos mais\n' +
        'nojentos ou mais afflictos acena com uma flòr. E talvez saia assim a\n' +
        'flòr mais bella; o meu jardineiro affirma que as violetas, para terem\n' +
        'um cheiro superior, hão mister de estrume de porco. Não examinei, mas\n' +
        'deve ser verdade.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'XCIII\n' +
        '\n' +
        'Um amigo por um defuncto.\n' +
        '\n' +
        'Quanto á outra pessoa que teve a força obliterativa, foi o meu collega\n' +
        'Escobar que no domingo, antes do meio dia, veiu ter a Matacavallos. Um\n' +
        'amigo suppria assim um defuncto, e tal amigo que durante cerca de cinco\n' +
        'minutos esteve com a minha mão entre as suas, como se me não visse\n' +
        'desde longos mezes.\n' +
        '\n' +
        '--Você janta commigo, Escobar?\n' +
        '\n' +
        '--Vim para isto mesmo.\n' +
        '\n' +
        'Minha mãe agradeceu-lhe a amizade que me tinha, e elle respondeu com\n' +
        'muita polidez, ainda que um tanto atado, como se carecesse de palavra\n' +
        'prompta. Já viste que não era assim, a palavra obedecia-lhe, mas o\n' +
        'homem não é sempre o mesmo em todos os instantes. O que elle disse, em\n' +
        'resumo, foi que me estimava pelas minhas boas qualidades e aprimorada\n' +
        'educação; no seminario todos me queriam bem, nem podia deixar de ser\n' +
        'assim, accrescentou. Insistia na educação, nos bons exemplos, «na doce\n' +
        'e rara mãe» que o ceu me deu... Tudo isso com a voz engasgada e tremula.\n' +
        '\n' +
        'Todos ficaram gostando delle. Eu estava tão contente como se Escobar\n' +
        'fosse invenção minha. José Dias desfechou-lhe dous superlativos, tio\n' +
        'Cosme dous capotes, e prima Justina não achou tacha que lhe pôr;\n' +
        'depois, sim, no segundo ou terceiro domingo, veiu ella confessar-nos\n' +
        'que o meu amigo Escobar era um tanto mettidiço e tinha uns olhos\n' +
        'policiaes a que não escapava nada.\n' +
        '\n' +
        '--São os olhos delle, expliquei.\n' +
        '\n' +
        '--Nem eu digo que sejam de outro.\n' +
        '\n' +
        '--São olhos reflectidos, opinou tio Cosme.\n' +
        '\n' +
        '--Seguramente, acudiu José Dias, entretanto, póde ser que a senhora D.\n' +
        'Justina tenha alguma razão. A verdade é que uma cousa não impede outra,\n' +
        'e a reflexão casa-se muito bem á curiosidade natural. Parece curioso,\n' +
        'isso parece, mas...\n' +
        '\n' +
        '--A mim parece-me um mocinho muito serio, disse minha mãe.\n' +
        '\n' +
        '--Justamente! confirmou José Dias para não discordar della.\n' +
        '\n' +
        'Quando eu referi a Escobar aquella opinião de minha mãe (sem lhe contar\n' +
        'as outras naturalmente) vi que o prazer delle foi extraordinario.\n' +
        'Agradeceu, dizendo que eram bondades, e elogiou tambem minha mãe,\n' +
        'senhora grave, distincta e moça, muito moça... Que edade teria?\n' +
        '\n' +
        '--Já fez quarenta, respondi eu vagam ente por vaidade.\n' +
        '\n' +
        '--Não é possivel! exclamou Escobar. Quarenta annos! Nem parece trinta;\n' +
        'está muito moça e bonita. Tambem a alguem ha de você sair, com esses\n' +
        'olhos que Deus lhe deu; são exactamente os della. Enviuvou ha muitos\n' +
        'annos?\n' +
        '\n' +
        'Contei-lhe o que sabia da vida della e de meu pae. Escobar escutava\n' +
        'attento, perguntando mais, pedindo explicação das passagens omissas ou\n' +
        'só escuras. Quando eu lhe disse que não me lembrava nada da roça, tão\n' +
        'pequenino viera, contou-me duas ou tres reminiscencias dos seus tres\n' +
        'annos de edade, ainda agora frescas. E não contavamos voltar á roça?\n' +
        '\n' +
        '--Não, agora não voltamos mais. Olhe, aquelle preto que alli vae\n' +
        'passando, é de lá. Thomaz!\n' +
        '\n' +
        '--Nhonhô!\n' +
        '\n' +
        'Estavamos na horta da minha casa, e o preto andava em serviço;\n' +
        'chegou-se a nós e esperou.\n' +
        '\n' +
        '--É casado, disse eu para Escobar. Maria onde está?\n' +
        '\n' +
        '--Está soccando milho, sim, senhor.\n' +
        '\n' +
        '--Você ainda se lembra da roça, Thomaz?\n' +
        '\n' +
        '--Alembra, sim, senhor.\n' +
        '\n' +
        '--Bem, vá-se embora.\n' +
        '\n' +
        'Mostrei outro, mais outro, e ainda outro, este Pedro, aquelle José,\n' +
        'aquelle outro Damião...\n' +
        '\n' +
        '--Todas as lettras do alphabeto, interrompeu Escobar.\n' +
        '\n' +
        'Com effeito, eram differentes lettras, e só então reparei nisto;\n' +
        'apontei ainda outros escravos, alguns com os mesmos nomes,\n' +
        'distinguindo-se por um appellido, ou da pessoa, como João Fulo, Maria\n' +
        'Gorda, ou de nação como Pedro Benguella, Antonio Moçambique...\n' +
        '\n' +
        '--E estão todos aqui em casa? perguntou elle.\n' +
        '\n' +
        '--Não, alguns andam ganhando na rua, outros estão alugados. Não era\n' +
        'possivel ter todos em casa. Nem são todos os da roça; a maior parte\n' +
        'ficou lá.\n' +
        '\n' +
        '--O que me admira é que D. Gloria se acostumasse logo a viver em casa\n' +
        'da cidade, onde tudo é apertado; a de lá é naturalmente grande.\n' +
        '\n' +
        '--Não sei, mas parece. Mamãe tem outras casas maiores que esta; diz\n' +
        'porém que ha de morrer aqui. As outras estão alugadas. Algumas são bem\n' +
        'grandes, como a da rua da Quitanda...\n' +
        '\n' +
        '--Conheço essa; é bonita.\n' +
        '\n' +
        '--Tem tambem no Rio Comprido, na Cidade-Nova, uma no Cattete...\n' +
        '\n' +
        '--Não lhe hão de faltar tectos, concluiu elle sorrindo com sympathia.\n' +
        '\n' +
        'Caminhámos para o fundo. Passámos o lavadouro; elle parou um instante\n' +
        'ahi, mirando a pedra de bater roupa e fazendo reflexões a proposito\n' +
        'do asseio; depois continuámos. Quaes foram as reflexões não me lembra\n' +
        'agora; lembra-me só que as achei engenhosas, e ri, elle riu tambem. A\n' +
        'minha alegria accordava a delle, e o ceu estava tão azul, e o ar tão\n' +
        'claro, que a natureza parecia rir tambem comnosco. São assim as boas\n' +
        'horas deste mundo. Escobar confessou esse accordo do interno com o\n' +
        'externo, por palavras tão finas e altas que me commoveram; depois, a\n' +
        'proposito da belleza moral que se ajusta á physica, tornou a falar de\n' +
        'minha mãe, «um anjo dobrado», disse elle.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'XCIV\n' +
        '\n' +
        'Ideias arithmeticas.\n' +
        '\n' +
        'Não digo o mais, que foi muito. Nem elle sabia só elogiar e pensar,\n' +
        'sabia tambem calcular depressa e bem. Era das cabeças arithmeticas\n' +
        'de Holmes (2+2=4). Não se imagina a facilidade com que elle sommava\n' +
        'ou multiplicava de cór. A divisão, que foi sempre uma das operações\n' +
        'difficeis para mim, era para elle como nada: cerrava um pouco os olhos,\n' +
        'voltados para cima, e sussurrava as denominações dos algarismos: estava\n' +
        'prompto. Isto com sete, treze, vinte algarismos. A vocação era tal que\n' +
        'o fazia amar os proprios signaes das sommas, e tinha esta opinião que\n' +
        'os algarismos, sendo poucos, eram muito mais conceituosos que as vinte\n' +
        'e cinco letras do alphabeto.\n' +
        '\n' +
        '--Ha lettras inuteis e lettras dispensaveis, dizia elle. Que serviço\n' +
        'diverso prestam o _d_ e o _t_? Tem quasi o mesmo som. O mesmo digo do\n' +
        '_b_ e do _p_, o mesmo do _s_, do _c_ e do _z_, o mesmo do _k_ e do\n' +
        '_g_, etc. São trapalhices calligraphicas. Veja os algarismos: não ha\n' +
        'dous que façam o mesmo officio; 4 é 4, e 7 é 7. E admire a belleza com\n' +
        'que um 4 e um 7 formam esta cousa que se exprime por 11. Agora dobre 11\n' +
        'e terá 22; multiplique por egual numero, dá 484, e assim por deante.\n' +
        'Mas onde o perfeição é maior é no emprego do _zero._ O valor do _zero_\n' +
        'é, em si mesmo, nada; mas o officio deste signal negativo é justamente\n' +
        'augmentar. Um 5 sósinho é um 5; ponha-lhe dous 00, é 500. Assim, o que\n' +
        'não vale nada faz valer muito, cousa que não fazem as letras dobradas,\n' +
        'pois eu tanto _approvo_ com um _p_ como com dous _pp._\n' +
        '\n' +
        'Criado na orthographia de meus paes, custava-me a ouvir taes\n' +
        'blasphemias, mas não ousava refutal-o. Com tudo, um dia, proferi\n' +
        'algumas palavras de defesa, ao que elle respondeu que era um\n' +
        'preconceito, e accrescentou que as ideias arithmeticas podiam ir ao\n' +
        'infinito, com a vantagem que eram mais faceis de menear. Assim que,\n' +
        'eu não era capaz de resolver de momento um problema philosophico ou\n' +
        'linguistico, ao passo que elle podia sommar, em tres minutos, quaesquer\n' +
        'quantias.\n' +
        '\n' +
        '--Por exemplo... dê-me um caso, dê-me uma porção de numeros que eu não\n' +
        'saiba nem possa saber antes... olhe, dê-me o numero das casas de sua\n' +
        'mãe e os alugueis de cada uma, e se eu não disser a somma total em\n' +
        'dous, em um minuto, enforque-me!\n' +
        '\n' +
        'Acceitei a aposta, e na semana seguinte levei-lhe escriptos em um\n' +
        'papel os algarismos das casas e dos alugueis. Escobar pegou no papel,\n' +
        'passou-os pelos olhos afim de os decorar, e emquanto eu fitava o\n' +
        'relogio, elle erguia as pupillas, cerrava as palpebras, e sussurrava...\n' +
        'Oh! o vento não é mais rápido! Foi dito e feito; em meio minuto\n' +
        'bradava-me:\n' +
        '\n' +
        '--Dá tudo 1:070$000 mensaes.\n' +
        '\n' +
        'Fiquei pasmado. Considera que eram não menos de nove casas, e que os\n' +
        'alugueis variavam de uma para outra, indo de 70$000 a 180$000. Pois\n' +
        'tudo isto em que eu gastaria tres ou quatro minutos,--e havia de ser\n' +
        'no papel,--fel-o Escobar de cór, brincando. Olhava-me triumphalmente,\n' +
        'e perguntava se não era exacto. Eu, só por lhe mostrar que sim, tirei\n' +
        'do bolso o papelinho que levava com a somma total, e mostrei-lh\'o; era\n' +
        'aquillo mesmo, nem um erro: 1:070$000.\n' +
        '\n' +
        '--Isto prova que as ideias arithmeticas são mais simples, e portanto\n' +
        'mais naturaes. A natureza é simples. A arte é atrapalhada.\n' +
        '\n' +
        'Fiquei tão enthusiasmado com a facilidade mental do meu amigo, que não\n' +
        'pude deixar de abraçal-o. Era no pateo; outros seminaristas notaram a\n' +
        'nossa effusão; um padre que estava com elles não gostou.\n' +
        '\n' +
        '--A modestia, disse-nos, não consente esses gestos excessivos; pódem\n' +
        'estimar-se com moderação.\n' +
        '\n' +
        'Escobar observou-me que os outros e o padre falavam de inveja e\n' +
        'propoz-me viver separados. Interrompi-o dizendo que não; se era\n' +
        'inveja, tanto peor para elles.\n' +
        '\n' +
        '--Quebremos-lhe a castanha na bocca!\n' +
        '\n' +
        '--Mas...\n' +
        '\n' +
        '--Fiquemos ainda mais amigos que até aqui.\n' +
        '\n' +
        'Escobar apertou-me a mão ás escondidas, com tal força que ainda me\n' +
        'doem os dedos. É illusão, de certo, se não é effeito das longas horas\n' +
        'que tenho estado a escrever sem parar. Suspendamos a penna por alguns\n' +
        'instantes...\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'XCV\n' +
        '\n' +
        'O papa.\n' +
        '\n' +
        'A amizade de Escobar fez-se grande e fecunda; a de José Dias não lhe\n' +
        'quiz ficar atraz. Na primeira semana disse-me este em casa:\n' +
        '\n' +
        '--Agora é certo que você vae sair já do seminario.\n' +
        '\n' +
        '--Como?\n' +
        '\n' +
        '--Espere até amanhã. Vou jogar com elles que me chamaram; amanhã, lá\n' +
        'no quarto, no quintal, ou na rua, indo á missa, conto-lhe o que ha. A\n' +
        'ideia é tão santa que não está mal no santuario. Amanhã, Bentinho.\n' +
        '\n' +
        '--Mas é cousa certa?\n' +
        '\n' +
        '--Certíssima!\n' +
        '\n' +
        'No dia seguinte revelou-me o mysterio. Ao primeiro aspecto,\n' +
        'confesso que fiquei deslumbrado. Trazia uma nota de grandeza e de\n' +
        'espiritualidade que falava aos meus olhos de seminarista. Era não\n' +
        'menos que isto. Minha mãe, ao parecer delle, estava arrependida do que\n' +
        'fizera, e desejaria ver-me cá fóra, mas entendia que o vinculo moral da\n' +
        'promessa a prendia indissoluvelmente. Cumpria rompel-o, e para tanto\n' +
        'valia a Escriptura, com o poder de desligar dado aos apostolos. Assim\n' +
        'que, elle e eu iriamos a Roma pedir a absolvição do papa... Que me\n' +
        'parecia?\n' +
        '\n' +
        '--Parece-me bem, respondi depois de alguns segundos de reflexão. Póde\n' +
        'ser um bom remedio.\n' +
        '\n' +
        '--É o unico, Bentinho, é o unico! Vou já hoje conversar com D. Gloria,\n' +
        'exponho-lhe tudo, e podemos partir daqui a dous mezes, ou antes...\n' +
        '\n' +
        '--Melhor é falar domingo que vem; deixe-me pensar primeiro...\n' +
        '\n' +
        '--Oh! Bentinho! interrompeu o aggregado. Pensar em que? Você o que\n' +
        'quer... Digo? não se amofina com o seu velho? Você o que quer é\n' +
        'consultar a uma pessoa.\n' +
        '\n' +
        'Rigorosamente, eram duas pessoas, Capitú e Escobar, mas eu neguei a pés\n' +
        'juntos que quizesse consultar ninguem. E que pessoa, o reitor? Não era\n' +
        'natural que lhe confiasse tal assumpto. Não, nem reitor, nem professor,\n' +
        'nem ninguem; era só o tempo de reflectir, uma semana, no domingo daria\n' +
        'a resposta, e desde já lhe dizia que a ideia não me parecia má.\n' +
        '\n' +
        '--Não?\n' +
        '\n' +
        '--Não.\n' +
        '\n' +
        '--Pois resolvamos hoje mesmo.\n' +
        '\n' +
        '--Não se vae a Roma brincando.\n' +
        '\n' +
        '--Quem tem bocca vae a Roma, e bocca no nosso caso é a moeda. Ora,\n' +
        'você póde muito bem gastar comsigo... Commigo, não; um par de calças,\n' +
        'tres camisas e o pão diário, não preciso mais. Serei como S. Paulo,\n' +
        'que vivia do officio emquanto ia prégando a palavra divina. Pois eu\n' +
        'vou, não prégal-a, mas buscal-a. Levaremos cartas do internuncio e\n' +
        'do bispo, cartas para o nosso ministro, cartas de capuchinhos...\n' +
        'Bem sei a objecção que se póde oppôr a esta ideia; dirão que é dado\n' +
        'pedir a dispensa cá de longe; mas, além do mais que não digo, basta\n' +
        'reflectir que é muito mais solemne e bonito ver entrar no Vaticano,\n' +
        'e prostrar-se aos pés do papa o proprio objecto do favor, o levita\n' +
        'promettido, que vae pedir para sua mãe ternissima e dulcissima a\n' +
        'dispensa de Deus. Considere o quadro, você beijando o pé ao príncipe\n' +
        'dos apostolos; Sua Santidade, com o sorriso evangelico, inclina-se,\n' +
        'interroga, ouve, absolve e abençoa. Os anjos o contemplam, a Virgem\n' +
        'recommenda ao santissimo filho que todos os seus desejos, Bentinho,\n' +
        'sejam satisfeitos, e que o que você amar na terra seja egualmente amado\n' +
        'no ceu...\n' +
        '\n' +
        'Não digo mais, porque é preciso acabar o capitulo, e elle não acabou o\n' +
        'discurso. Falou a todos os meus sentimentos de catholico e de namorado.\n' +
        'Vi a alma alliviada de minha mãe, vi a alma feliz de Capitú, ambas em\n' +
        'casa, e eu com ellas, e elle comnosco, tudo mediante uma pequena viagem\n' +
        'a Roma, que eu só geographicamente sabia onde ficava; espiritualmente,\n' +
        'tambem, mas a distancia que estaria da vontade de Capitú é que\n' +
        'não. Eis o ponto essencial. Se Capitú achasse longe, não iria; mas\n' +
        'era preciso ouvil-a, e assim tambem a Escobar, que me daria um bom\n' +
        'conselho.\n'
    },
    {
      src: '/assets/audio/domcasmurro20.mp3',
      titulo: 'Seção 20',
      subtitulo: 'Capítulos XCVI ao C',
      leitor: 'Dey Andriotti',
      numeroSecao: 20,
      texto: '/assets/texts/secao20.txt',
      tempo: '16min',
      capitulo: 'XCVI\n' +
        '\n' +
        'Um substituto.\n' +
        '\n' +
        'Expuz a Capitú a ideia de José Dias. Ouviu-me attentamente, e acabou\n' +
        'triste.\n' +
        '\n' +
        '--Você indo, disse ella, esquece-me inteiramente.\n' +
        '\n' +
        '--Nunca!\n' +
        '\n' +
        '--Esquece. A Europa dizem que é tão bonita, e a Italia principalmente.\n' +
        'Não é de lá que vêm as cantoras? Você esquece-me, Bentinho. E não\n' +
        'haverá outro meio? D. Gloria está morta para que você saia do seminario.\n' +
        '\n' +
        '--Sim, mas julga-se presa pela promessa.\n' +
        '\n' +
        'Capitú não achava outra ideia, nem acabava de adoptar esta. De caminho,\n' +
        'pediu-me que, se acaso fosse a Roma, jurasse que no fim de seis mezes\n' +
        'estaria de volta.\n' +
        '\n' +
        '--Juro.\n' +
        '\n' +
        '--Por Deus?\n' +
        '\n' +
        '--Por Deus, por tudo. Juro que no fim de seis mezes estarei de volta.\n' +
        '\n' +
        '--Mas se o papa não tiver ainda soltado a você?\n' +
        '\n' +
        '--Mando dizer isso mesmo.\n' +
        '\n' +
        '--E se você mentir?\n' +
        '\n' +
        'Esta palavra doeu-me muito, e não achei logo que lhe replicasse.\n' +
        'Capitú metteu o negocio á bulha, rindo e chamando-me disfarçado.\n' +
        'Depois, declarou crer que eu cumpriria o juramento, mas ainda assim\n' +
        'não consentiu logo; ia ver se não haveria outra cousa, e eu que visse\n' +
        'tambem por meu lado.\n' +
        '\n' +
        'Quando voltei ao seminario, contei tudo ao meu amigo Escobar, que\n' +
        'me ouviu com egual attenção e acabou com a mesma tristeza da outra.\n' +
        'Os olhos, de costume fugidios, quasi me comeram de contemplação. De\n' +
        'repente, vi-lhe no rosto um clarão, um reflexo de ideia. E ouvi-lhe\n' +
        'dizer com volubilidade:\n' +
        '\n' +
        '--Não, Bentinho, não é preciso isso. Ha melhor,--não digo melhor,\n' +
        'porque o Santo Padre vale sempre mais que tudo,--mas ha cousa que\n' +
        'produz o mesmo effeito.\n' +
        '\n' +
        '--Que é?\n' +
        '\n' +
        '--Sua mãe fez promessa a Deus de lhe dar um sacerdote, não é? Pois bem,\n' +
        'dê-lhe um sacerdote, que não seja você. Ella póde muito bem tomar a si\n' +
        'algum mocinho orphão, fazel-o ordenar á sua custa, está dado um padre\n' +
        'ao altar, sem que você...\n' +
        '\n' +
        '--Entendo, entendo, é isso mesmo.\n' +
        '\n' +
        '--Não acha? continuou elle. Consulte sobre isto o protonotario; elle\n' +
        'lhe dirá se não é a mesma cousa, ou eu mesmo consulto, se quer; e se\n' +
        'elle hesitar, fala-se ao Sr. bispo.\n' +
        '\n' +
        'Eu, reflectindo:\n' +
        '\n' +
        '--Sim, parece que é isso; realmente, a promessa cumpre-se, não se\n' +
        'perdendo o padre.\n' +
        '\n' +
        'Escobar observou que, pelo lado economico, a questão era facil; minha\n' +
        'mãe gastaria o mesmo que commigo, e um orphão não precisaria grandes\n' +
        'commodidades. Citou a somma dos alugueis das casas, 1:070$000, além dos\n' +
        'escravos...\n' +
        '\n' +
        '--Não ha outra cousa, disse eu.\n' +
        '\n' +
        '--E saimos juntos.\n' +
        '\n' +
        '--Você tambem?\n' +
        '\n' +
        '--Tambem eu. Vou melhorar o meu latim e saio; nem dou theologia. O\n' +
        'proprio latim não é preciso; para quê no commercio?\n' +
        '\n' +
        '--_In hoc signo vinces_, disse eu rindo.\n' +
        '\n' +
        'Sentia-me pilherico. Oh! como a esperança alegra tudo. Escobar sorriu,\n' +
        'parecendo gostar da resposta. Depois ficámos a cuidar de nós mesmos,\n' +
        'cada um com os seus olhos perdidos, provavelmente. Os delle estavam\n' +
        'assim, quando tornei de longe, e agradeci de novo o plano lembrado; não\n' +
        'podia havel-o melhor. Escobar ouviu-me contentissimo.\n' +
        '\n' +
        '--Ainda uma vez, disse elle gravemente, a religião e a liberdade fazem\n' +
        'boa companhia.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'XCVII\n' +
        '\n' +
        'A saida.\n' +
        '\n' +
        'Tudo se fez por esse teor. Minha mãe hesitou um pouco, mas acabou\n' +
        'cedendo, depois que o padre Cabral, tendo consultado o bispo, voltou a\n' +
        'dizer-lhe que sim, que podia ser. Saí do seminario no fim do anno.\n' +
        '\n' +
        'Tinha então pouco mais de dezesete... Aqui devia ser o meio do livro,\n' +
        'mas a inexperiencia fez-me ir atraz da penna, e chego quasi ao fim\n' +
        'do papel, com o melhor da narração por dizer. Agora não ha mais que\n' +
        'leval-a a grandes pernadas, capitulo sobre capitulo, pouca emenda,\n' +
        'pouca reflexão, tudo em resumo. Já esta pagina vale por mezes, outras\n' +
        'valerão por annos, e assim chegaremos ao fim. Um dos sacrificios\n' +
        'que faço a esta dura necessidade é a analyse das minhas emoções dos\n' +
        'dezesete annos. Não sei se alguma vez tiveste dezesete annos. Se\n' +
        'sim, deves saber que é a edade em que a metade do homem e a metade\n' +
        'do menino formam um só curioso. Eu era um curiosissimo, diria o meu\n' +
        'aggregado José Dias, e não diria mal. O que essa qualidade superlativa\n' +
        'me rendeu não poderia nunca dizel-o aqui, sem cair no erro que acabo de\n' +
        'condemnar; a analyse das minhas emoções daquelle tempo é que entrava\n' +
        'no meu plano. Posto que filho do seminario e de minha mãe, sentia\n' +
        'já, debaixo do recolhimento casto, uns assomos de petulancia e de\n' +
        'atrevimento; eram do sangue, mas eram tambem das moças que na rua ou da\n' +
        'janella não me deixavam viver socegado. Achavam-me lindo, e diziam-m\'o;\n' +
        'algumas queriam mirar de mais perto a minha belleza, e a vaidade é um\n' +
        'principio de corrupção.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'XCVIII\n' +
        '\n' +
        'Cinco annos.\n' +
        '\n' +
        'Venceu a razão; fui-me aos estudos. Passei os dezoito annos, os\n' +
        'dezenove, os vinte, os vinte e um; aos vinte e dous era bacharel em\n' +
        'direito.\n' +
        '\n' +
        'Tudo mudára em volta de mim. Minha mãe resolvera-se a envelhecer;\n' +
        'ainda assim os cabellos brancos vinham de má vontade, aos poucos e\n' +
        'espalhadamente; a touca, os vestidos, os sapatos rasos e surdos eram\n' +
        'os mesmos de outr\'ora. Já não andaria tanto de um lado para outro. Tio\n' +
        'Cosme padecia do coração e ia descançar. A prima Justina apenas estava\n' +
        'mais edosa. José Dias tambem, não tanto que me não fizesse a fineza\n' +
        'de ir assistir á minha graduação, e descer commigo a serra, lepido e\n' +
        'viçoso, como se o bacharel fosse elle. A mãe de Capitú fallecera, o pae\n' +
        'aposentára-se no mesmo cargo em que quiz dar demissão da vida.\n' +
        '\n' +
        'Escobar começava a negociar em café depois de haver trabalhado quatro\n' +
        'annos em uma das primeiras casas do Rio de Janeiro. Era opinião de\n' +
        'prima Justina que elle affagára a ideia de convidar minha mãe a\n' +
        'segundas nupcias; mas, se tal ideia houve, cumpre não esquecer a grande\n' +
        'differença de edade. Talvez elle não pensasse em mais que associal-a\n' +
        'aos seus primeiros tentamens commerciaes, e de facto, a pedido meu,\n' +
        'minha mãe adeantou-lhe alguns dinheiros, que elle lhe restituiu,\n' +
        'logo que poude, não sem este remoque: «D. Gloria é medrosa e não tem\n' +
        'ambição.»\n' +
        '\n' +
        'A separação não nos esfriou. Elle foi o terceiro na troca das cartas\n' +
        'entre mim e Capitú. Desde que a viu animou-me muito no nosso amor. As\n' +
        'relações que travou com o pae de Sancha estreitaram as que já trazia\n' +
        'com Capitú, e fel-o servir a ambos nós, como amigo. A principio,\n' +
        'custou-lhe a ella acceital-o, preferia José Dias, mas José Dias\n' +
        'repugnava-me por um resto de respeito de creança. Venceu Escobar; posto\n' +
        'que vexada, Capitú entregou-lhe a primeira carta, que foi mãe e avó\n' +
        'das outras. Nem depois de casado suspendeu elle o obsequio... Que elle\n' +
        'casou,--adivinha com quem,--casou com a boa Sancha, a amiga de Capitú,\n' +
        'quasi irmã della, tanto que alguma vez, escrevendo-me, chamava a esta\n' +
        'a «sua cunhadinha.» Assim se formam as affeições e os parentescos, as\n' +
        'aventuras e os livros.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'XCIX\n' +
        '\n' +
        'O filho é a cara do pae.\n' +
        '\n' +
        'Minha mãe, quando eu regressei bacharel quasi estalou de felicidade.\n' +
        'Ainda ouço a voz de José Dias, lembrando o evangelho de S. João, e\n' +
        'dizendo ao ver-nos abraçados.\n' +
        '\n' +
        '--Mulher, eis ahi o teu filho! Filho, eis ahi a tua mãe!\n' +
        '\n' +
        'Minha mãe, entre lagrimas:\n' +
        '\n' +
        '--Mano Cosme, é a cara do pae, não é?\n' +
        '\n' +
        '--Sim, tem alguma cousa, os olhos, a disposição do rosto. É o pae, um\n' +
        'pouco mais moderno, concluiu por chalaça. E diga-me agora, mana Gloria,\n' +
        'não foi melhor que elle não teimasse em ser padre? Veja se este peralta\n' +
        'daria um padre capaz.\n' +
        '\n' +
        '--Como vae o meu substituto?\n' +
        '\n' +
        '--Vae indo, ordena-se para o anno, respondeu tio Cosme. Has de ir ver a\n' +
        'ordenação; eu tambem, se o meu senhor coração consentir. É bom que te\n' +
        'sintas na alma do outro, como se recebesses em ti mesmo a sagração.\n' +
        '\n' +
        '--Justamente! exclamou minha mãe. Mas veja bem, mano Cosme, veja se não\n' +
        'é a figura do meu defuncto. Olha, Bentinho, olha bem para mim. Sempre\n' +
        'achei que te parecias com elle, agora é muito mais. O bigode é que\n' +
        'desfaz um pouco...\n' +
        '\n' +
        '--Sim, mana Gloria, o bigode realmente... mas é muito parecido.\n' +
        '\n' +
        'E minha mãe beijava-me com uma ternura que não sei escrever. Tio\n' +
        'Cosme, para alegral-a, chamava-me doutor, José Dias tambem, e todos em\n' +
        'casa, a prima, os escravos, as visitas, Padua, a filha, e ella mesma\n' +
        'repetiam-me o titulo.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'C\n' +
        '\n' +
        '«Tu serás feliz, Bentinho!»\n' +
        '\n' +
        'No quarto, desfazendo a mala e tirando a carta de bacharel de dentro\n' +
        'da lata, ia pensando na felicidade e na gloria. Via o casamento e a\n' +
        'carreira illustre, emquanto José Dias me ajudava calado e zeloso.\n' +
        'Uma fada invisivel desceu alli, e me disse em voz egualmente macia e\n' +
        'callida: «Tu serás feliz, Bentinho; tu vaes ser feliz.»\n' +
        '\n' +
        '--E porque não seria feliz? perguntou José Dias endireitando o tronco e\n' +
        'fitando-me.\n' +
        '\n' +
        '--Você ouviu? perguntei eu erguendo-me tambem, espantado.\n' +
        '\n' +
        '--Ouvi o que?\n' +
        '\n' +
        '--Ouviu uma voz que dizia que eu serei feliz?\n' +
        '\n' +
        '--É boa! Você mesmo é que está dizendo...\n' +
        '\n' +
        'Ainda agora sou capaz de jurar que a voz era da fada; naturalmente as\n' +
        'fadas, expulsas dos contos e dos versos, metteram-se no coração da\n' +
        'gente e falam de dentro para fóra. Esta, por exemplo, muita vez a ouvi\n' +
        'clara e distincta. Ha de ser prima das feiticeiras da Escocia: «Tu\n' +
        'serás rei, Macbeth!»--«Tu serás feliz, Bentinho!» Ao cabo, é a mesma\n' +
        'predicção, pela mesma toada universal e eterna. Quando voltei do meu\n' +
        'espanto, ouvi o resto do discurso de José Dias:\n' +
        '\n' +
        '--... Ha de ser feliz, como merece, assim como mereceu esse diploma\n' +
        'que alli está, que não é favor de ninguem. A distincção que tirou em\n' +
        'todas as materias é prova disso; já lhe contei que ouvi da bocca dos\n' +
        'lentes, em particular, os maiores elogios. Demais, a felicidade não é\n' +
        'só a gloria, é tambem outra cousa... Ah! você não confiou tudo ao velho\n' +
        'José Dias! O pobre José Dias está ahi para um canto, é cajú chupado,\n' +
        'não vale nada; agora são os novos, os Escobares... Não lhe nego que é\n' +
        'moço muito distincto, e trabalhador, e marido de truz; mas, **enfim, velho\n' +
        'tambem sabe amar...\n' +
        '\n' +
        '--Mas que é?\n' +
        '\n' +
        '--Que ha de ser? Quem é que não sabe tudo?... Aquella intimidade de\n' +
        'visinhos tinha de acabar nisto, que é verdadeiramente uma benção do\n' +
        'ceu, porque ella é um anjo, é um _anjissimo_... Perdoe a cincada,\n' +
        'Bentinho, foi um modo de accentuar a perfeição daquella moça. Cuidei\n' +
        'o contrario, outr\'ora; confundi os modos de creança com expressões de\n' +
        'caracter, e não vi que essa menina travêssa e já de olhos pensativos\n' +
        'era a flòr caprichosa de um fructo sadio e doce... Porque é que não\n' +
        'me contou tambem o que outros sabem, e cá em casa está mais que\n' +
        'adivinhado e approvado?\n' +
        '\n' +
        '--Mamãe approva devéras?\n' +
        '\n' +
        '--Pois então? Temos falado sobre isso, e ella fez-me o favor de pedir a\n' +
        'minha opinião. Pergunte-lhe o que é que eu lhe disse em termos claros\n' +
        'e positivos; pergunte-lhe. Disse-lhe que não podia desejar melhor nora\n' +
        'para si, boa, discreta, prendada, amiga da gente... e uma dona de casa,\n' +
        'que não lhe digo nada. Depois da morte da mãe, tomou conta de tudo.\n' +
        'Padua, agora que se aposentou, não faz mais que receber o ordenado e\n' +
        'entregal-o á filha. A filha é que distribue o dinheiro, paga as contas,\n' +
        'faz o rol das despezas, cuida de tudo, mantimento, roupa, luz; você\n' +
        'já a viu o anno passado. E quanto á formosura você sabe melhor que\n' +
        'ninguem...\n' +
        '\n' +
        '--Mas, devéras, mamãe consultou o senhor sobre o nosso casamento?\n' +
        '\n' +
        '--Positivamente, não; fez-me o favor de perguntar se Capitú não daria\n' +
        'uma boa esposa; eu é que, na resposta, falei em nora. D. Gloria não\n' +
        'negou e até deu um ar de riso.\n' +
        '\n' +
        '--Mamãe sempre que me escrevia, falava de Capitú.\n' +
        '\n' +
        '--Você sabe que ellas se dão muito, e por isso é que sua prima anda\n' +
        'cada vez mais amuada. Talvez agora case mais depressa.\n' +
        '\n' +
        '--Prima Justina?\n' +
        '\n' +
        '--Não sabe? São contos, naturalmente; mas emfim, o doutor João da Gosta\n' +
        'enviuvou ha poucos mezes, e dizem (não sei, o protonotario é que me\n' +
        'contou) dizem que os dous andam meio inclinados a acabar com a viuvez,\n' +
        'entre si, casando-se. Ha de ver que não ha nada, mas não é fora de\n' +
        'proposito, comquanto ella sempre achasse que o doutor era um feixe de\n' +
        'ossos... Só se ella é um cemiterio, commentou rindo; e logo serio: Digo\n' +
        'isto por gracejo...\n' +
        '\n' +
        'Não ouvi o resto. Ouvia só a voz da minha fada interior, que me\n' +
        'repetia, mas já então sem palavras: «Tu serás feliz, Bentinho » E a voz\n' +
        'de Capitú me disse a mesma cousa, com termos diversos, e assim tambem\n' +
        'a de Escobar, os quaes ambos me confirmaram a noticia de José Dias\n' +
        'pela sua propria impressão. Emfim, minha mãe, algumas semanas depois,\n' +
        'quando lhe fui pedir licença para casar, além do consentimento, deu-me\n' +
        'egual prophecia, salva a redacção própria de mãe: «Tu serás feliz, meu\n' +
        'filho!»\n'
    },
    {
      src: '/assets/audio/domcasmurro21.mp3',
      titulo: 'Seção 21',
      subtitulo: 'Capítulos CI ao CV',
      leitor: 'Pier',
      numeroSecao: 21,
      texto: '/assets/texts/secao21.txt',
      tempo: '15min',
      capitulo: 'CI\n' +
        '\n' +
        'No ceu.\n' +
        '\n' +
        'Pois sejamos felizes de uma vez, antes que o leitor pegue em si, morto\n' +
        'de esperar, e vá espairecer a outra parte; casemo-nos. Foi em 1865,\n' +
        'uma tarde do março, por signal que chovia. Quando chegámos ao alto da\n' +
        'Tijuca, onde era o nosso ninho de noivos, o ceu recolheu a chuva e\n' +
        'accendeu as estrellas, não só as já conhecidas, mas ainda as que só\n' +
        'serão descobertas daqui a muitos seculos. Foi grande fineza e não foi\n' +
        'unica. S. Pedro, que tem as chaves do ceu, abriu-nos as portas delle,\n' +
        'fez-nos entrar, e depois de tocar-nos com o baculo, recitou alguns\n' +
        'versiculos da sua primeira epistola: «As mulheres sejam sujeitas a seus\n' +
        'maridos... Não seja o adorno dellas o enfeite dos cabellos riçados ou\n' +
        'as rendas de ouro, mas o homem que está escondido no coração.... Do\n' +
        'mesmo modo, vós, maridos, co-habitai com ellas, tratando-as com honra,\n' +
        'como a vasos mais fracos, e herdeiras comvosco da graça da vida....»\n' +
        'Em seguida, fez signal aos anjos, e elles entoaram um trecho do\n' +
        '_Cantico_, tão concertadamente, que desmentiriam a hypothese do tenor\n' +
        'italiano, se a execução fosse na terra; mas era no ceu. A musica ia com\n' +
        'o texto, como se houvessem nascido juntos, á maneira de uma opera de\n' +
        'Wagner. Depois, visitámos uma parte daquelle logar infinito. Descança\n' +
        'que não farei descripção alguma, nem a lingua humana possue fórmas\n' +
        'idoneas para tanto.\n' +
        '\n' +
        'Ao cabo, póde ser que tudo fosse um sonho; nada mais natural a um\n' +
        'ex-seminarista que ouvir por toda a parte latim e Escriptura. É verdade\n' +
        'que Capitú, que não sabia Escriptura nem latim, decorou algumas\n' +
        'palavras, como estas, por exemplo: «Sentei-me á sombra daquelle que\n' +
        'tanto havia desejado.» Quanto ás de S. Pedro, disse-me no dia seguinte\n' +
        'que estava por tudo, que eu era a unica renda e o unico enfeite que\n' +
        'jamais poria em si. Ao que eu repliquei que a minha esposa teria sempre\n' +
        'as mais finas rendas deste mundo.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'CII\n' +
        '\n' +
        'De casada.\n' +
        '\n' +
        'Imagina um relogio que só tivesse pendulo, sem mostrador, de maneira\n' +
        'que não se vissem as horas escriptas. O pendulo iria de um lado para\n' +
        'outro, mas nenhum signal externo mostraria a marcha do tempo. Tal foi\n' +
        'aquella semana da Tijuca.\n' +
        '\n' +
        'De quando em quando, tornavamos ao passado e divertiamo-nos em\n' +
        'relembrar as nossas tristezas e calamidades, mas isso mesmo era um modo\n' +
        'de não sairmos de nós. Assim vivemos novamente a nossa longa espera de\n' +
        'namorados, os annos da adolescencia, a denuncia que está nos primeiros\n' +
        'capitulos, e riamos de José Dias, que conspirou a nossa desunião, e\n' +
        'acabou festejando o nosso consorcio. Uma ou outra vez, falavamos em\n' +
        'descer, mas as manhãs marcadas eram sempre de chuva ou de sol, e nós\n' +
        'esperávamos um dia encoberto, que teimava em não vir.\n' +
        '\n' +
        'Não obstante, achei que Capitú estava um tanto impaciente por descer.\n' +
        'Concordava em ficar, mas ia falando do pae e de minha mãe, da falta de\n' +
        'noticias nossas, disto e daquillo, a ponto que nos arrufámos um pouco.\n' +
        'Perguntei-lhe se já estava aborrecida de mim.\n' +
        '\n' +
        '--Eu?\n' +
        '\n' +
        '--Parece.\n' +
        '\n' +
        '--Você ha de ser sempre creança, disse ella fechando-me a cara entre\n' +
        'as mãos e chegando muito os olhos aos meus. Então eu esperei tantos\n' +
        'annos para aborrecer-me em sete dias? Não, Bentinho; digo isto porque\n' +
        'é realmente assim, creio que elles pódem estar desejosos de ver-nos e\n' +
        'imaginar alguma doença, e, confesso, pela minha parte, que queria ver\n' +
        'papae.\n' +
        '\n' +
        '--Pois vamos amanhã.\n' +
        '\n' +
        '--Não; ha de ser com tempo encoberto, redarguiu rindo.\n' +
        '\n' +
        'Peguei-lhe no riso e na palavra, mas a impaciencia continuou, e\n' +
        'descemos com sol.\n' +
        '\n' +
        'A alegria com que poz o seu chapéo de casada, e o ar de casada com\n' +
        'que me deu a mão para entrar e sair do carro, e o braço para andar\n' +
        'na rua, tudo me mostrou que a causa da impaciencia de Capitú eram os\n' +
        'signaes exteriores do novo estado. Não lhe bastava ser casada entre\n' +
        'quatro paredes e algumas arvores; precisava do resto do mundo tambem.\n' +
        'E quando eu me vi embaixo, pisando as ruas com ella, parando, olhando,\n' +
        'falando, senti a mesma cousa. Inventava passeios para que me vissem,\n' +
        'me confirmasses e me invejassem. Na rua, muitos voltavam a cabeça\n' +
        'curiosos, outros paravam, alguns perguntavam: «Quem são?» e um sabido\n' +
        'explicava: «Este é o doutor Santiago, que casou ha dias com aquella\n' +
        'moça, D. Capitolina, depois de uma longa paixão de creanças; moram na\n' +
        'Gloria, as familias residem em Matacavallos.» E ambos os dous: « É uma\n' +
        'mocetona!»\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'CIII\n' +
        '\n' +
        'A felicidade tem boa alma.\n' +
        '\n' +
        'Mocetona é vulgar; José Dias achou melhor. Foi a unica pessoa cá de\n' +
        'baixo que nos visitou na Tijuca, levando abraços dos nossos e palavras\n' +
        'suas, mas palavras que eram musicas verdadeiras; não as ponho aqui para\n' +
        'ir poupando papel, mas foram deliciosas. Um dia, comparou-nos a aves\n' +
        'criadas em dous vãos de telhado contiguos. Imagina o resto, as aves\n' +
        'emplumando as azas e surtindo ao ceu, e o ceu agora mais largo para\n' +
        'poder contel-as tambem. Nenhum de nós riu; ambos escutavamos commovidos\n' +
        'e convencidos, esquecendo tudo, desde a tarde de 1858.... A felicidade\n' +
        'tem boa alma.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'CIV\n' +
        '\n' +
        'As pyramides.\n' +
        '\n' +
        'José Dias dividia-se agora entre mim e minha mãe, alternando os\n' +
        'jantares da Gloria com os almoços de Matacavallos. Tudo corria bem.\n' +
        'Ao fim de dous annos de casado, salvo o desgosto grande de não ter um\n' +
        'filho, tudo corria bem. Perdera meu sogro, é verdade, e o tio Cosme\n' +
        'estava por pouco, mas a saude de minha mãe era boa; a nossa excellente.\n' +
        '\n' +
        'Eu era advogado de algumas casas ricas, e os processos vinham chegando.\n' +
        'Escobar contribuira muito para as minhas estréas no fòro. Interveiu com\n' +
        'um advogado celebre para que me admitisse á sua banca, e arranjou-me\n' +
        'algumas procurações, tudo espontaneamente.\n' +
        '\n' +
        'Demais, as nossas relações de familia estavam previamente feitas;\n' +
        'Sancha e Capitú continuavam depois de casadas a amizade da escola,\n' +
        'Escobar e eu a do seminario. Elles moravam em Andarahy, aonde queriam\n' +
        'que fossemos muitas vezes, e, não podendo ser tantas como desejavamos,\n' +
        'iamos lá jantar alguns domingos, ou elles vinham fazel-o comnosco.\n' +
        'Jantar é pouco. Iamos sempre muito cedo, logo depois do almoço, para\n' +
        'gozarmos o dia compridamente, e só nos separavamos ás nove, dez e onze\n' +
        'horas, quando não podia ser mais. Agora que penso naquelles dias de\n' +
        'Andarahy e da Gloria, sinto que a vida e o resto não sejam tão rijos\n' +
        'como as Pyramides.\n' +
        '\n' +
        'Escobar e a mulher viviam felizes; tinham uma filhinha. Em tempo ouvi\n' +
        'falar de uma aventura do marido, negocio de theatro, não sei que actriz\n' +
        'ou bailarina, mas se foi certo, não deu escandalo. Sancha era modesta,\n' +
        'o marido trabalhador. Como eu um dia dissesse a Escobar que lastimava\n' +
        'não ter um filho, replicou-me:\n' +
        '\n' +
        '--Homem, deixa lá. Deus os dará quando quizer, e se não der nenhum é\n' +
        'que os quer para si, e melhor será que fiquem no ceu.\n' +
        '\n' +
        '--Uma creanca, um filho é o complemento natural da vida.\n' +
        '\n' +
        '--Virá, so fòr necessário.\n' +
        '\n' +
        'Não vinha. Capitú pedia-o em suas orações, eu mais de uma vez dava\n' +
        'por mim a rezar e a pedil-o. Já não era como em creança; agora pagava\n' +
        'antecipadamente, como os alugueis da casa.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'CV\n' +
        '\n' +
        'Os braços.\n' +
        '\n' +
        'No mais, tudo corria bem. Capitú gostava de rir e divertir-se, e, nos\n' +
        'primeiros tempos, quando iamos a passeios ou espectaculos, era como\n' +
        'um passaro que saisse da gaiola. Arranjava-se com graça e modestia.\n' +
        'Embora gostasse de joias, como as outras moças, não queria que eu lhe\n' +
        'comprasse muitas nem caras, e um dia affligiu-se tanto que prometti não\n' +
        'comprar mais nenhuma; mas foi só por pouco tempo.\n' +
        '\n' +
        'A nossa vida era mais ou menos placida. Quando não estavamos com a\n' +
        'familia ou com amigos, ou se não iamos a algum espectaculo ou serão\n' +
        'particular (e estes eram raros) passavamos as noites á nossa janella\n' +
        'da Gloria, mirando o mar e o ceu, a sombra das montanhas e dos navios,\n' +
        'ou a gente que passava na praia. Ás vezes, eu contava a Capitú a\n' +
        'historia da cidade, outras dava-lhe noticias de astronomia; noticias\n' +
        'de amador que ella escutava attenta e curiosa, nem sempre tanto que não\n' +
        'cochillasse um pouco. Não sabendo piano, apprendeu depois de casada, e\n' +
        'depressa, e dahi a pouco tocava nas casas de amizade. Na Gloria era uma\n' +
        'das nossas recreações; tambem cantava, mas pouco e raro, por não ter\n' +
        'voz; um dia chegou a entender que era melhor não cantar nada e cumpriu\n' +
        'o alvitre. De dansar gostava, e enfeitava-se com amor quando ia a um\n' +
        'baile; os braços é que... Os braços merecem um periodo.\n' +
        '\n' +
        'Eram bellos, e na primeira noite que os levou nús a um baile, não creio\n' +
        'que houvesse eguaes na cidade, nem os seus, leitora, que eram então de\n' +
        'menina, se eram nascidos, mas provavelmente estariam ainda no marmore,\n' +
        'donde vieram, ou nas mãos do divino esculptor. Eram os mais bellos da\n' +
        'noite, a ponto que me encheram de desvanecimento. Conversava mal com\n' +
        'as outras pessoas, só para vel-os, por mais que elles se entrelaçassem\n' +
        'aos das casacas alheias. Já não foi assim no segundo baile; nesse,\n' +
        'quando vi que os homens não se fartavam de olhar para elles, de os\n' +
        'buscar, quasi de os pedir, e que roçavam por elles as mangas pretas,\n' +
        'fiquei vexado e aborrecido. Ao terceiro não fui, e aqui tive o apoio\n' +
        'de Escobar, a quem confiei candidamente os meus tedios; concordou logo\n' +
        'commigo.\n' +
        '\n' +
        '--Sanchinha tambem não vae, ou irá de mangas compridas; o contrario\n' +
        'parece-me indecente.\n' +
        '\n' +
        '--Não é? Mas não diga o motivo; hão de chamar-nos seminaristas. Capitú\n' +
        'já me chamou assim.\n' +
        '\n' +
        'Nem por isso deixei de contar a Capitú a approvação de Escobar. Ella\n' +
        'sorriu e respondeu que os braços de Sanchinha eram mal feitos, mas\n' +
        'cedeu depressa, e não foi ao baile; a outros foi, mas levou-os meio\n' +
        'vestidos de escomilha ou não sei quê, que nem cobria nem descobria\n' +
        'inteiramente, como o sendal de Camões.\n'
    },
    {
      src: '/assets/audio/domcasmurro22.mp3',
      titulo: 'Seção 22',
      subtitulo: 'Capítulos CVI ao CX',
      leitor: 'Rachel Moraes',
      numeroSecao: 22,
      texto: '/assets/texts/secao22.txt',
      tempo: '19min',
      capitulo: 'CVI\n' +
        '\n' +
        'Dez libras esterlinas.\n' +
        '\n' +
        'Já disse que era poupada, ou fica dito agora, e não só de dinheiro\n' +
        'mas tambem de cousas usadas, dessas que se guardam por tradição, por\n' +
        'lembrança ou por saudade. Uns sapatos, por exemplo, uns sapatinhos\n' +
        'rasos de fitas pretas que se cruzavam no peito do pé e principio da\n' +
        'perna, os ultimos que usou antes de calçar botinas, trouxe-os para\n' +
        'casa, e tirava-os de longe em longe da gaveta da commoda, com outras\n' +
        'velharias, dizendo-me que eram pedaços de creança. Minha mãe, que tinha\n' +
        'o mesmo genio, gostava de ouvir falar e fazer assim.\n' +
        '\n' +
        'Quanto ás puras economias de dinheiro, direi um caso, e basta. Foi\n' +
        'justamente por occasião de uma licção de astronomia, á praia da Gloria.\n' +
        'Sabes que alguma vez a fiz cochilar um pouco. Uma noite perdeu-se em\n' +
        'fitar o mar, com tal força e concentração, que me deu ciumes.\n' +
        '\n' +
        '--Você não me ouve, Capitú.\n' +
        '\n' +
        '--Eu? Ouço perfeitamente.\n' +
        '\n' +
        '--O que é que eu dizia?\n' +
        '\n' +
        '--Você... você falava de Sirius.\n' +
        '\n' +
        '--Qual, Sirius, Capitú. Ha vinte minutos que eu falei de Sirius.\n' +
        '\n' +
        '--Falava de... falava de Marte, emendou ella apressada.\n' +
        '\n' +
        'Realmente, era de Marte, mas é claro que só apanhára o som da palavra,\n' +
        'não o sentido. Fiquei serio, e o impeto que me deu foi deixar a sala;\n' +
        'Capitú, ao percebel-o, fez-se a mais mimosa das creaturas, pegou-me na\n' +
        'mão, confessou-me que estivera contando, isto é, sommando uns dinheiros\n' +
        'para descobrir certa parcella que não achava. Tratava-se de uma\n' +
        'conversão de papel em ouro. A principio suppuz que era um recurso para\n' +
        'desentadar-me, mas d\'ahi a pouco estava eu mesmo calculando tambem, já\n' +
        'então com papel e lapis, sobre o joelho, e dava a differença que ella\n' +
        'buscam.\n' +
        '\n' +
        '--Mas que libras são essas? perguntei-lhe no fim.\n' +
        '\n' +
        'Capitú fitou-me rindo, e replicou que a culpa de romper o segredo era\n' +
        'minha. Ergueu-se, foi ao quarto e voltou com dez libras esterlinas, na\n' +
        'mão; eram as sobras do dinheiro que eu lhe dava mensalmente para as\n' +
        'despezas.\n' +
        '\n' +
        '--Tudo isto?\n' +
        '\n' +
        '--Não é muito, dez libras só; é o que a avarenta de sua mulher poude\n' +
        'arranjar, em alguns mezes, concluiu fazendo tinir o ouro na mão.\n' +
        '\n' +
        '--Quem foi o corretor?\n' +
        '\n' +
        '--O seu amigo Escobar.\n' +
        '\n' +
        '--Como é que elle não me disse nada?\n' +
        '\n' +
        '--Foi hoje mesmo.\n' +
        '\n' +
        '--Elle esteve cá?\n' +
        '\n' +
        '--Pouco antes de você chegar; eu não disse para que você não\n' +
        'desconfiasse.\n' +
        '\n' +
        'Tive vontade de gastar o dobro do ouro em algum presente commemorativo,\n' +
        'mas Capitú deteve-me. Ao contrario, consultou-me sobre o que haviamos\n' +
        'de fazer daquellas libras.\n' +
        '\n' +
        '--São suas, respondi.\n' +
        '\n' +
        '--São nossas, emendou.\n' +
        '\n' +
        '--Pois você guarde-as.\n' +
        '\n' +
        'No dia seguinte, fui ter com Escobar ao armazem, e ri-me do segredo de\n' +
        'ambos. Escobar sorriu e disse-me que estava para ir ao meu escriptorio\n' +
        'contar-me tudo. A cunhadinha (continuava a dar este nome a Capitú)\n' +
        'tinha-lhe falado naquillo por occasião da nossa ultima visita a\n' +
        'Andarahy, e disse-lhe a razão do segredo.\n' +
        '\n' +
        '--Quando contei isto a Sanchinha, concluiu elle, ficou espantada: «Como\n' +
        'é que Capitú póde economisar, agora que tudo está tão caro?»--«Não sei,\n' +
        'filha; sei que arranjou dez libras.»\n' +
        '\n' +
        '--Vê se ella apprende tambem.\n' +
        '\n' +
        '--Não creio; Sanchinha não é gastadeira, mas tambem não é poupada; o\n' +
        'que lhe dou chega, mas só chega.\n' +
        '\n' +
        'Eu, depois de alguns instantes de reflexão:\n' +
        '\n' +
        '--Capitú é um anjo!\n' +
        '\n' +
        'Escobar concordou de cabeça, mas sem enthusiasmo, como quem sentia não\n' +
        'poder dizer o mesmo da mulher. Assim pensarias tu tambem, tão certo\n' +
        'é que as virtudes das pessoas proximas nos dão tal ou qual vaidade,\n' +
        'orgulho ou consolação.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'CVII\n' +
        '\n' +
        'Ciumes do mar.\n' +
        '\n' +
        'Se não fosse a astronomia, não descobriria eu tão cedo as dez libras\n' +
        'de Capitú; mas não é por isso que torno a ella, é para que não cuides\n' +
        'que a vaidade de professor é que me fez padecer com a desattenção de\n' +
        'Capitú e ter ciumes do mar. Não, meu amigo. Venho explicar-te que tive\n' +
        'taes ciumes pelo que podia estar na cabeça de minha mulher, não fóra\n' +
        'ou acima della. É sabido que as distracções de uma pessoa pódem ser\n' +
        'culpadas, metade culpadas, um terço, um quinto, um decimo de culpadas,\n' +
        'pois que em materia de culpa a graduação é infinita. A recordação\n' +
        'de uns simples olhos basta para fixar outros que os recordem e se\n' +
        'deleitem com a imaginação delles. Não é mister peccado effectivo e\n' +
        'mortal, nem papel trocado, simples palavra, aceno, suspiro ou signal\n' +
        'ainda mais miudo e leve. Um anonymo ou anonyma que passe na esquina da\n' +
        'rua faz com que mettamos Sirius dentro do Marte, e tu sabes, leitor,\n' +
        'a differença que ha de um a outro na distancia e no tamanho, mas a\n' +
        'astronomia tem dessas confusões. Foi isto que mo fez empallidecer,\n' +
        'calar e querer fugir da sala para voltar. Deus sabe quando;\n' +
        'provavelmente, dez minutos depois. Dez minutos depois, estaria eu outra\n' +
        'vez na sala, ao piano ou á janella, continuando a licção interrompida:\n' +
        '\n' +
        '--Marte está a distancia de...\n' +
        '\n' +
        'Tão pouco tempo? Sim, tão pouco tempo, dez minutos. Os meus ciumes eram\n' +
        'intensos, mas curtos; com pouco derrubaria tudo, mas com o mesmo pouco\n' +
        'ou menos reconstruiria o ceu, a terra e as estrellas.\n' +
        '\n' +
        'A verdade é que fiquei mais amigo de Capitú, se era possivel, ella\n' +
        'ainda mais meiga, o ar mais brando, as noites mais claras, e Deus mais\n' +
        'Deus. E não foram propriamente as dez libras esterlinas que fizeram\n' +
        'isto, nem o sentimento de economia que revelavam e que eu conhecia,\n' +
        'mas as cautelas que Capitú empregou para o fim de descobrir-me um dia\n' +
        'o cuidado de todos os dias. Escobar tambem se me fez mais pegado ao\n' +
        'coração. As nossas visitas foram-se tornando mais proximas, e as nossas\n' +
        'conversações mais intimas.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'CVIII\n' +
        '\n' +
        'Um filho.\n' +
        '\n' +
        'Pois nem todo isso me matava a sède de um filho, um triste menino\n' +
        'que fosse, amarello e magro, mas um filho, um filho proprio da minha\n' +
        'pessoa. Quando iamos a Andarahy e viamos a filha de Escobar e Sancha,\n' +
        'familiarmente Capitúsinha, por differençal-a de minha mulher, visto\n' +
        'que lhe deram o mesmo nome á pia, ficavamos cheios de invejas. A\n' +
        'pequena era graciosa e gorducha, faladeira e curiosa. Os paes, como\n' +
        'os outros paes, contavam as travessuras e agudezas da menina, e nós,\n' +
        'quando voltavamos á noite para a Gloria, vinhamos suspirando as nossas\n' +
        'invejas, e pedindo mentalmente ao ceu que nol-as matassem...\n' +
        '\n' +
        '... As invejas morreram, as esperanças nasceram, e não tardou que\n' +
        'viesse ao mundo o fructo dellas. Não era escasso nem feio, como eu já\n' +
        'pedia, mas um rapagão robusto e lindo.\n' +
        '\n' +
        'A minha alegria quando elle nasceu, não sei dizel-a; nunca a tive\n' +
        'egual, nem creio que a possa haver identica, ou que de longe ou\n' +
        'de perto se pareça com ella. Foi uma vertigem e uma loucura. Não\n' +
        'cantava na rua por natural vergonha, nem em casa para não affligir\n' +
        'Capitú convalescente. Tambem não caía, porque ha um deus para os paes\n' +
        'novos. Fóra, vivia com o espirito no menino; em casa, com os olhos, a\n' +
        'observal-o, a miral-o, a perguntar-lhe donde vinha, e porque é que eu\n' +
        'estava tão inteiramente nelle, e varias outras tolices sem palavras,\n' +
        'mas pensadas ou deliradas a cada instante. Talvez perdi algumas causas\n' +
        'no fòro por descuido.\n' +
        '\n' +
        'Capitú não era menos terna para elle e para mim. Davamos as mãos um\n' +
        'ao outro, e, quando não olhavamos para o nosso filho, conversavamos\n' +
        'de nós, do nosso passado e do nosso futuro. As horas de maior encanto\n' +
        'e mysterio eram as de amamentação. Quando eu via o meu filho chupando\n' +
        'o leite da mãe, e toda aquella união da natureza para a nutrição e\n' +
        'vida de um ser que não fòra nada, mas que o nosso destino affirmou\n' +
        'que seria, e a nossa constancia e o nosso amor fizeram que chegasse a\n' +
        'ser, ficava que não sei dizer nem digo; positivamente não me lembra, e\n' +
        'receio que o que dissesse me saisse escuro.\n' +
        '\n' +
        'Escusai minucias. Assim que, não é preciso contar a dedicação de minha\n' +
        'mãe e de Sancha, que tambem foi passar com Capitú os primeiros dias e\n' +
        'noites. Quiz rejeitar o obsequio de Sandia; respondeu-me que eu não\n' +
        'tinha nada com isso; tambem Capitú, em solteira, fora tratal-a á rua\n' +
        'dos Invalidos.\n' +
        '\n' +
        '--Não se lembra que o senhor foi lá vel-a?\n' +
        '\n' +
        '--Lembra-me; mas Escobar...\n' +
        '\n' +
        '--Eu virei jantar com vocês, e ás noites sigo para Andarahy; oito dias,\n' +
        'e está tudo passado. Bem se vê que você é pae de primeira viagem.\n' +
        '\n' +
        '--Tambem você; onde está a segunda?\n' +
        '\n' +
        'Usavamos então estas graças em familia. Hoje, que me recolhi á minha\n' +
        'casmurrice, não sei se ainda ha tal linguagem, mas deve haver. Escobar\n' +
        'cumpriu o que disse; jantava comnosco, e ia-se á noite. Sobre tarde\n' +
        'desciamos á praia ou iamos ao Passeio Publico, fazendo elle os seus\n' +
        'calculos, eu os meus sonhos. Eu via o meu filho medico, advogado,\n' +
        'negociante, metti-o em varias universidades e bancos, e até acceitei a\n' +
        'hypothese de ser poeta. A possibilidade de politico foi consultada, e\n' +
        'cri que me saisse orador, e grande orador.\n' +
        '\n' +
        '--Póde ser, redarguia Escobar; ninguem diria o que veiu a ser\n' +
        'Desmosthenes.\n' +
        '\n' +
        'Escobar acompanhava muita vez as minhas creancices; tambem interrogava\n' +
        'o futuro. Chegou a falar da hypothese de casar o pequeno com a filha.\n' +
        'A amizade existe; esteve toda nas mãos com que apertei as de Escobar,\n' +
        'ao ouvir-lhe isto, e na total ausencia de palavras com que alli\n' +
        'assignei o pacto; estas vieram depois, de atropelo, afinadas pelo\n' +
        'coração, que batia com grande força. Acceitei a lembrança, e propuz\n' +
        'que os encaminhassemos a este fim, pela educarão egual e commum, pela\n' +
        'infancia unida e correcta.\n' +
        '\n' +
        'Era minha ideia que Escobar fosse padrinho do pequeno; a madrinha devia\n' +
        'ser e seria minha mãe. Mas a primeira parte se trocou por intervenção\n' +
        'do tio Cosme, que, ao ver a creança, disse-lhe entre outros carinhos.\n' +
        '\n' +
        '--Anda, toma o benção a teu padrinho, velhaco.\n' +
        '\n' +
        'E, voltando-se para mim:\n' +
        '\n' +
        '--Não desisto do favor; e ha de ser depressa o baptisado, antes que a\n' +
        'minha doença me leve de vez.\n' +
        '\n' +
        'Contei discretamente a anecdota a Escobar, para que elle me\n' +
        'comprehendesse e desculpasse; riu-se e não se magoou. Fez mais, quiz\n' +
        'que o almoço do baptisado fosse na chacara delle, e foi. Eu ainda\n' +
        'tentei espaçar a cerimonia a ver se tio Cosme succumbia primeiro á\n' +
        'doença, mas parece que esta era mais de aborrecer que de matar. Não\n' +
        'houve remedio senão levar o menino á pia, onde se lhe deu o nome de\n' +
        'Ezequiel; era o de Escobar, e eu quiz supprir deste modo a falta de\n' +
        'compadrio.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'CIX\n' +
        '\n' +
        'Um filho unico.\n' +
        '\n' +
        'Ezequiel, quando começou o capitulo anterior, não era ainda gerado;\n' +
        'quando acabou era christão e catholico. Este outro é destinado a fazer\n' +
        'chegar o meu Ezequiel aos cinco annos, um rapagão bonito, com os seus\n' +
        'olhos claros, já inquietos, como se quizessem namorar todas as moças da\n' +
        'visinhança, ou quasi todas.\n' +
        '\n' +
        'Agora, se considerares que elle foi unico, que nenhum outro veiu, certo\n' +
        'nem incerto, morto nem vivo, um só e unico, imaginarás os cuidados que\n' +
        'nos deu, os somnos que nos tirou, e que sustos nos metteram as crises\n' +
        'dos dentes e outras, a menor febricula, toda a existencia commum das\n' +
        'creanças. A tudo acudiamos, segundo cumpria e urgia, cousa que não era\n' +
        'necessario dizer, mas ha leitores tão obtusos, que nada entendem, se se\n' +
        'lhes não relata tudo e o resto. Vamos ao resto.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'CX\n' +
        '\n' +
        'Rasgos da infancia.\n' +
        '\n' +
        'O resto come-me ainda muitos capitulos; ha vidas que os tem menos, e\n' +
        'fazem-se ainda assim completas e acabadas.\n' +
        '\n' +
        'Aos cinco e seis annos, Ezequiel não parecia desmentir os meus sonhos\n' +
        'da praia da Gloria; ao contrario, adivinhavam-se nelle todos as\n' +
        'vocações possiveis, desde vadio até apostolo. Vadio é aqui posto no\n' +
        'bom sentido, no sentido de homem que pensa e cala; mettia-se ás vezes\n' +
        'comsigo, e nisto fazia lembrar a mãe, desde pequena. Assim tambem,\n' +
        'agitava-se todo e instava por ir persuadir ás visinhas que os doces que\n' +
        'eu lhe trazia eram doces devéras; não o fazia antes de farto d\'elles,\n' +
        'mas tambem os apostolos não levam a boa doutrina senão depois de a\n' +
        'terem toda no coração. Escobar, bom negociante, opinava que a causa\n' +
        'principal desta outra inclinação, talvez fosse convidar implicitamente\n' +
        'as visinhas a egual apostolado, quando os paes lhe trouxessem doces; e\n' +
        'ria-se da propria graça, e annunciava-me que o faria seu socio.\n' +
        '\n' +
        'Gostava de musica, não menos que de doce, e eu disse a Capitú que lhe\n' +
        'tirasse ao piano o prégão do preto das cocadas de Matacavallos...\n' +
        '\n' +
        '--Não me lembra.\n' +
        '\n' +
        '--Não diga isso; você não se lembra daquelle preto que vendia doce, ás\n' +
        'tardes...\n' +
        '\n' +
        '--Lembro-me de um preto que vendia doce, mas não sei mais da toada.\n' +
        '\n' +
        '--Nem das palavras?\n' +
        '\n' +
        '--Nem das palavras.\n' +
        '\n' +
        'A leitora, que ainda se lembrará das palavras, dado que me tenha lido\n' +
        'com attenção, ficará espantada de tamanho esquecimento, tanto mais que\n' +
        'lhe lembrarão ainda as vozes da sua infancia e adolescencia; haverá\n' +
        'olvidado algumas, mas nem tudo fica na cabeça. Assim me replicou\n' +
        'Capitú, e não achei treplica. Fiz, porém, o que ella não esperava;\n' +
        'corri aos meus papeis velhos. Em S. Paulo, quando estudante, pedi a\n' +
        'um professor de musica que me transcrevesse a toada do prégão; elle\n' +
        'o fez com prazer (bastou-me repetir-lh\'o de memoria), e eu guardei o\n' +
        'papelinho; fui procural-o. D\'ahi a pouco interrompi um romance que ella\n' +
        'tocava, com o pedacinho de papel na mão. Expliquei-lh\'o; ella teclou as\n' +
        'dezeseis notas.\n' +
        '\n' +
        'Capitú achou á toada um sabor particular, quasi delicioso; contou ao\n' +
        'filho a historia do prégão, e assim o cantava e teclava. Ezequiel\n' +
        'aproveitou a musica para pedir-me que desmentisse o texto dando-lhe\n' +
        'algum dinheiro.\n' +
        '\n' +
        'Fazia de medico, de militar, de actor e bailarino. Nunca lhe dei\n' +
        'oratorios; mas cavallos de pau e espada á cinta eram com elle. Já não\n' +
        'falo dos batalhões que passavam na rua, e que elle corria a ver: todas\n' +
        'as creancas o fazem. O que nem todas fazem é ter os olhos que esta\n' +
        'tinha. Em nenhuma vi as ancias de gosto com que assistia á passagem da\n' +
        'tropa e ouvia tocar a marcha dos tambores.\n' +
        '\n' +
        '--Olha, papae! olha!\n' +
        '\n' +
        '--Estou vendo, meu filho!\n' +
        '\n' +
        '--Olha o commandante! Olha o cavallo do commandante! Olha os soldados!\n' +
        '\n' +
        'Um dia amanheceu tocando corneta com a mão; dei-lhe uma cornetinha de\n' +
        'metal. Comprei-lhe soldadinhos de chumbo, gravuras de batalhas que\n' +
        'elle mirava por muito tempo, querendo que lhe explicasse uma peça\n' +
        'de artilharia, um soldado caído, outro de espada alçada, e todos os\n' +
        'seus amores iam para o de espada alçada. Um dia (ingenua edade!)\n' +
        'perguntou-me impaciente:\n' +
        '\n' +
        '--Mas, papae, porque é que elle não deixa cair a espada de uma vez?\n' +
        '\n' +
        '--Meu filho, é porque é pintado.\n' +
        '\n' +
        '--Mas então porque é que elle se pintou?\n' +
        '\n' +
        'Ri-me do engano e expliquei-lhe que não era o soldado que se tinha\n' +
        'pintado no papel, mas o gravador, e tive de explicar tambem, o que era\n' +
        'gravador e o que era gravura: as curiosidades de Capitú, em summa.\n' +
        '\n' +
        'Taes são os principaes rasgos da infancia: mais um e acabo o capitulo.\n' +
        'Um dia, na chacara de Escobar, deu com um gato que tinha um rato\n' +
        'atravessado na bocca. O gato nem deixava a presa, nem via por onde\n' +
        'fugisse. Ezequiel não disse nada, deteve-se, acocorou-se, e ficou\n' +
        'olhando. Ao vel-o assim attento, perguntámos-lhe de longe o que era;\n' +
        'fez-nos signal que nos calassemos. Escobar concluiu:\n' +
        '\n' +
        '--Vão ver que é o gato que apanhou algum rato. Os ratos continuam a\n' +
        'infestar-me a casa, que é o diabo. Vamos ver.\n' +
        '\n' +
        'Capitú quiz tambem ver o filho; acompanhei-os. Effectivamente, era\n' +
        'um gato e um rato, lance banal, sem interesse nem graça. A unica\n' +
        'circumstancia particular era estar o rato vivo, esperneando, e o meu\n' +
        'pequeno enlevado. De resto, o instante foi curto. O gato, logo que\n' +
        'sentiu mais gente, dispoz-se a correr; o menino, sem tirar-lhe os olhos\n' +
        'de cima, fez-nos outro signal de silencio; e o silencio não podia\n' +
        'ser maior. Ia dizer religioso, risquei a palavra, mas aqui a ponho\n' +
        'outra vez, não só por significar a totalidade do silencio, mas tambem\n' +
        'porque havia naquella acção do gato e do rato alguma cousa que prendia\n' +
        'com ritual. O unico rumor eram os ultimos guinchos do rato, aliás\n' +
        'frouxissimos; as pernas mal se lhe moviam e desordenadamente. Um tanto\n' +
        'aborrecido, bati palmas para que o gato fugisse, e o gato fugiu. Os\n' +
        'outros nem tiveram tempo de atalhar-me, Ezequiel ficou abatido.\n' +
        '\n' +
        '--Ora, papae!\n' +
        '\n' +
        '--Que foi? A esta hora o rato está comido.\n' +
        '\n' +
        '--Pois sim, mas eu queria ver.\n' +
        '\n' +
        'Os dous riram-se; eu mesmo achei-lhe graça.\n'
    },
    {
      src: '/assets/audio/domcasmurro23.mp3',
      titulo: 'Seção 23',
      subtitulo: 'Capítulos CXI ao CXV',
      leitor: 'jessicapmaximo',
      numeroSecao: 23,
      texto: '/assets/texts/secao23.txt',
      tempo: '14min',
      capitulo: 'CXI\n' +
        '\n' +
        'Contado depressa.\n' +
        '\n' +
        'Achei-lhe graça, e não lh\'a nego ainda agora, apesar do tempo passado,\n' +
        'dos successos occorridos, e da tal ou qual sympathia ao rato que acho\n' +
        'em mim; teve graça. Não me pesa dizel-o; os que amam a natureza como\n' +
        'ella quer ser amada, sem repudio parcial nem exclusões injustas, não\n' +
        'acham nella nada inferior. Amo o rato, não desamo o gato. Já pensei\n' +
        'em os fazer viver juntos, mas vi que são incompativeis. Em verdade,\n' +
        'um roe-me os livros, outro o queijo; mas não é muito que eu lhes\n' +
        'perdoe, se já perdoei a um cachorro que me levou o descanço em peores\n' +
        'circumstancias. Contarei o caso depressa.\n' +
        '\n' +
        'Foi quando nasceu Ezequiel; a mãe estava com febre, Sancha vivia ao pé\n' +
        'della, e tres cães na rua latiam toda a noite. Procurei o fiscal, e foi\n' +
        'como se procurasse o leitor, que só agora sabe disto. Então resolvi\n' +
        'matal-os; comprei veneno, mandei fazer tres bolas de carne, e eu mesmo\n' +
        'inseri nellas a droga. De noite, saí; era uma hora; nem a doente, nem\n' +
        'a enfermeira podiam dormir, com a bulha dos cães. Quando elles me\n' +
        'viram, afastaram-se, dous desceram para o lado da praia do Flamengo, um\n' +
        'ficou a curta distancia, como que esperando. Fui-me a elle, assobiando\n' +
        'e dando estalinhos com os dedos. O diabo ainda latiu, mas fiado nos\n' +
        'signaes de amizade, foi-se calando, até que se calou de todo. Como\n' +
        'eu continuasse, elle veiu a mim, devagar, mexendo a cauda, que é o\n' +
        'seu modo de rir delles; eu tinha já na mão as bolas envenenadas, e ia\n' +
        'deitar-lhe uma dellas, quando aquelle riso especial, carinho, confiança\n' +
        'ou o que quer que seja, me atou a vontade; fiquei assim não sei como,\n' +
        'tocado de pena e guardei as bolas no bolso. Ao leitor póde parecer\n' +
        'que foi o cheiro da carne que remetteu o cão ao silencio. Não digo\n' +
        'que não; eu cuido que elle não me quiz attribuir perfidia ao gesto, e\n' +
        'entregou-se-me. A conclusão é que se livrou.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'CXII\n' +
        '\n' +
        'As imitações de Ezequiel.\n' +
        '\n' +
        'Tal não faria Ezequiel. Não comporia bolas envenenadas, supponho, mas\n' +
        'não as recusaria tambem. O que faria com certeza era ir atraz dos cães,\n' +
        'a pedrada, até onde lhe dessem as pernas. E se tivesse um pau, iria a\n' +
        'pau. Capitú morria por aquelle batalhador futuro.\n' +
        '\n' +
        '--Não sae a nós, que gostamos da paz, disse-me ella um dia, mas papae\n' +
        'em moço era assim tambem; mamãe é que contava.\n' +
        '\n' +
        '--Sim, não sairá maricas, repliquei; eu só lhe descubro um\n' +
        'defeitosinho, gosta de imitar os outros.\n' +
        '\n' +
        '--Imitar como?\n' +
        '\n' +
        '--Imitar os gestos, as modos, os altitudes; imita prima Justina, imita\n' +
        'José Dias; já lhe achei até um geito dos pés de Escobar e dos olhos...\n' +
        '\n' +
        'Capitú deixou-se estar pensando e olhando para mim, e disse afinal que\n' +
        'era preciso emendal-o. Agora reparava que realmente era vezo do filho,\n' +
        'mas parecia-lhe que era só imitar por imitar, como succede a muitas\n' +
        'pessoas grandes, que tomam as maneiras dos outros; e para que não fosse\n' +
        'mais longe...\n' +
        '\n' +
        '--Tambem não vamos mortifical-o. Sempre ha tempo de corrigil-o.\n' +
        '\n' +
        '--Ha, vou ver. Você tambem não era assim, quando se zangava com\n' +
        'alguem...\n' +
        '\n' +
        '--Quando me zangava, concordo; vingança de menino.\n' +
        '\n' +
        '--Sim, mas eu não gosto de imitações em casa.\n' +
        '\n' +
        '--E naquelle tempo gostavas de mim? disse eu batendo-lhe na face.\n' +
        '\n' +
        'A resposta do Capitú foi um riso doce de escarneo, um desses risos que\n' +
        'não se descrevem, e apenas se pintarão; depois estirou os braços e\n' +
        'atirou-m\'os sobre os hombros, tão cheios de graça que pareciam (velha\n' +
        'imagem!) um collar de flores. Eu fiz o mesmo aos meus, e senti não\n' +
        'haver alli um esculptor que nos transferisse a altitude a um pedaço de\n' +
        'marmore. Só brilharia o artista, é certo. Quando uma pessoa ou um grupo\n' +
        'saem bem, ninguem quer saber de modelo, mas da obra, e a obra é que\n' +
        'fica. Não importa; nós saberiamos que eramos nós.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'CXIII\n' +
        '\n' +
        'Embargos de terceiro.\n' +
        '\n' +
        'Por falar nisto, é natural que me perguntes se, sendo antes tão cioso\n' +
        'della, não continuei a sel-o apesar do filho e dos annos. Sim, senhor,\n' +
        'continuei. Continuei, a tal ponto que o menor gesto me affligia, a mais\n' +
        'intima palavra, uma insistencia qualquer: muita vez só a indifferença\n' +
        'bastava. Cheguei a ter ciumes de tudo e de todos. Um visinho, um par\n' +
        'de valsa, qualquer homem, moço ou maduro, me enchia de terror ou\n' +
        'desconfiança. E certo que Capitú gostava de ser vista, e o meio mais\n' +
        'proprio a tal fim (disse-me uma senhora, um dia) é ver tambem, e não ha\n' +
        'ver sem mostrar que se vê.\n' +
        '\n' +
        'A senhora que me disse isto cuido que gostou de mim, e foi naturalmente\n' +
        'por não achar da minha parte correspondencia aos seus affectos que\n' +
        'me explicou daquella maneira os seus olhos teimosos. Outros olhos\n' +
        'me procuravam tambem, não muitos, e não digo nada sobre elles, tendo\n' +
        'aliás confessado a principio as minhas aventuras vindouras, mas eram\n' +
        'ainda vindouras. Naquelle tempo, por mais mulheres bonitas que achasse,\n' +
        'nenhuma receberia a minima parte do amor que tinha a Capitú. A minha\n' +
        'propria mãe não queria mais que metade. Capitú era tudo e mais que\n' +
        'tudo; não vivia nem trabalhava que não fosse pensando nella. Ao theatro\n' +
        'iamos juntos; só me lembra que fosse duas vezes sem ella, um beneficio\n' +
        'de actor, e uma estréa de opera, a que ella não foi por ter adoecido,\n' +
        'mas quiz por força que eu fosse. Era tarde para mandar o camarote a\n' +
        'Escobar; saí, mas voltei no fim do primeiro acto. Encontrei Escobar á\n' +
        'porta do corredor.\n' +
        '\n' +
        '--Vinha falar-te, disse-me elle.\n' +
        '\n' +
        'Expliquei-lhe que tenha saido para o theatro, donde voltára receioso de\n' +
        'Capitú, que ficára doente.\n' +
        '\n' +
        '--Doente de que? perguntou Escobar.\n' +
        '\n' +
        '--Queixava-se da cabeça e do estomago.\n' +
        '\n' +
        '--Então, vou-me embora. Vinha para aquelle negocio dos embargos...\n' +
        '\n' +
        'Eram uns embargos de terceiro; occorrera um incidente importante, e,\n' +
        'tendo elle jantado na cidade, não quiz ir para casa sem dizer-me o que\n' +
        'era, mas já agora falaria depois...\n' +
        '\n' +
        '--Não, falemos já, sóbe; ella póde estar melhor. Se estiver peor,\n' +
        'desces.\n' +
        '\n' +
        'Capitú estava melhor e até boa. Confessou-me que apenas tivera uma\n' +
        'dor de cabeça de nada, mas aggravára o padecimento para que eu fosse\n' +
        'divertir-me. Não falava alegre, o que me fez desconfiar quo mentia,\n' +
        'para me não metter medo, mas jurou que era a verdade pura. Escobar\n' +
        'sorriu e disse:\n' +
        '\n' +
        '--A cunhadinha está tão doente como você ou eu. Vamos aos embargos.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'CXIV\n' +
        '\n' +
        'Em que se explica o explicado.\n' +
        '\n' +
        'Antes de ir aos embargos, expliquemos ainda um ponto que já ficou\n' +
        'explicado, mas não bem explicado. Viste que eu pedi (cap. CX) a um\n' +
        'professor de musica de S. Paulo que me escrevesse a toada daquelle\n' +
        'prégão de doces de Matacavallos. Em si, a materia é chocha, e não vale\n' +
        'a pena de um capitulo, quanto mais dous; mas ha materias taes que\n' +
        'trazem ensinamentos interessantes, senão agradaveis. Expliquemos o\n' +
        'explicado.\n' +
        '\n' +
        'Capitú e eu tinhamos jurado não esquecer mais aquelle prégão; foi em\n' +
        'momento de grande ternura, e o tabellião divino sabe as cousas que se\n' +
        'juram em taes momentos, elle que as registra nos livros eternos.\n' +
        '\n' +
        '--Você jura?\n' +
        '\n' +
        '--Juro, disse ella estendendo tragicamente o braço.\n' +
        '\n' +
        'Aproveitei o gesto para beijar-lhe a mão; estava ainda no seminario.\n' +
        'Quando fui para S. Paulo, querendo um dia relembrar a toada, vi que a\n' +
        'ia perdendo inteiramente; consegui recordal-a e corri ao professor, que\n' +
        'me fez o obsequio de a escrever no pedacinho de papel. Foi para não\n' +
        'faltar ao juramento que fiz isto. Mas has de crer que, quando corri aos\n' +
        'papeis velhos, naquelle noite da Gloria, tambem me não lembrava já da\n' +
        'toada nem do texto? Fiz-me de pontual ao juramento, e este é que foi o\n' +
        'meu peccado; esquecer, qualquer esquece.\n' +
        '\n' +
        'Ao certo, ninguem sabe se ha de manter ou não um juramento. Cousas\n' +
        'futuras! Portanto, a nossa constituição politica, transferindo o\n' +
        'juramento á affirmação simples, é profundamente moral. Acabou com um\n' +
        'peccado terrivel. Faltar ao compromisso é sempre infidelidade, mas a\n' +
        'alguem que tenha mais temor a Deus que aos homens não lhe importara\n' +
        'mentir, uma vez ou outra, desde que não mette a alma no purgatorio. Não\n' +
        'confundam purgatorio com inferno, que é o eterno naufragio. Purgatorio\n' +
        'é uma casa de penhores, que empresta sobre todas as virtudes, a juro\n' +
        'alto e prazo curto. Mas os prazos renovam-se, até que um dia uma ou\n' +
        'duas virtudes medianas pagam todos os peccados grandes e pequenos.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'CXV\n' +
        '\n' +
        'Duvidas sobre duvidas.\n' +
        '\n' +
        'Vamos agora aos embargos... E porque iremos aos embargos? Deus sabe o\n' +
        'que custa escrevel-os, quanto mais contal-os. Da circumstancia nova que\n' +
        'Escobar me trazia apenas digo o que lhe disse então, isto é, que não\n' +
        'valia nada.\n' +
        '\n' +
        '--Nada?\n' +
        '\n' +
        '--Quasi nada.\n' +
        '\n' +
        '--Então vale alguma cousa.\n' +
        '\n' +
        '--Para reforçar as razões que já temos vale menos que o chá que você\n' +
        'vae tomar commigo.\n' +
        '\n' +
        '--É tarde para tomar chá.\n' +
        '\n' +
        '--Tomaremos depressa.\n' +
        '\n' +
        'Tomámos depressa. Durante elle, Escobar olhava para mim desconfiado,\n' +
        'como se cuidasse que eu recusava a circumstancia nova por forrar-me a\n' +
        'escrevel-a; mas tal suspeita não ia com a nossa amizade.\n' +
        '\n' +
        'Quando elle saiu, referi as minhas duvidas a Capitú; ella as desfez\n' +
        'com a arte fina que possuia, um geito, uma graça toda sua, capaz de\n' +
        'dissipar as mesmas tristezas de Olympio.\n' +
        '\n' +
        '--Seria o negocio dos embargos, concluiu; e elle que veiu até aqui, a\n' +
        'esta hora, é que está impressionado com a demanda.\n' +
        '\n' +
        '--Tens razão.\n' +
        '\n' +
        'Palavra puxa palavra, falei de outras duvidas. Eu era então um poço\n' +
        'dellas; coaxavam dentro do mim, como verdadeiras rans, a ponto de me\n' +
        'tirarem o somno algumas vezes. Disse-lhe que começava a achar minha mãe\n' +
        'um tanto fria e arredia com ella. Pois aqui mesmo valeu a arte fina de\n' +
        'Capitú!\n' +
        '\n' +
        '--Ja disse a você o que é; cousas de sogra. Mamãesinha tem ciumes de\n' +
        'você; logo que elles passem e as saudades augmentem, ella torna a ser o\n' +
        'que era. Em lhe faltando o neto...\n' +
        '\n' +
        '--Mas eu tenho notado que já é fria tambem com Ezequiel. Quando elle\n' +
        'vae commigo, mamãe não lhe faz as mesmas graças.\n' +
        '\n' +
        '--Quem sabe se não anda doente?\n' +
        '\n' +
        '--Vamos nós jantar com ella amanhã?\n' +
        '\n' +
        '--Vamos... Não... Pois vamos.\n' +
        '\n' +
        'Fomos jantar com a minha velha. Já lhe podia chamar assim, posto\n' +
        'que os seus cabellos brancos não o fossem todos nem totalmente, e o\n' +
        'rosto estivesse comparativamente fresco; era uma especie de mocidade\n' +
        'quinquagenaria ou do ancianidade viçosa, á escolha... Mas nada de\n' +
        'melancolias; não quer falar dos olhos molhados, á entrada e á saida.\n' +
        'Pouco entrou na conversação. Tambem não era differente da costumada.\n' +
        'José Dias falou do casamento e suas bellezas, da politica, da Europa\n' +
        'e da homeopathia, tio Cosme das suas molestias, prima Justina da\n' +
        'visinhança, ou de José Dias, quando este saía da sala.\n' +
        '\n' +
        'Quando voltámos, á noite, viemos por alli a pé, falando das minhas\n' +
        'duvidas. Capitú novamente me aconselhou que esperassemos. Sogras\n' +
        'eram todas assim; lá vinha um dia e mudavam. Ao passo que me falava,\n' +
        'recrudescia de ternura. Dalli em deante foi cada vez mais doce commigo;\n' +
        'não me ia esperar á janella, para não espertar-me os ciumes, mas quando\n' +
        'eu subia, via no alto da escada, entre as grades da cancella, a cara\n' +
        'deliciosa da minha amiga e esposa, risonha como toda a nossa infancia.\n' +
        'Ezequiel ás vezes estava com ella; nós o havíamos acostumado a ver o\n' +
        'osculo da chegada e da saida, e elle enchia-me a cara de beijos.\n'
    },
    {
      src: '/assets/audio/domcasmurro24.mp3',
      titulo: 'Seção 24',
      subtitulo: 'Capítulos CXVI ao CXX',
      leitor: 'gtavares97',
      numeroSecao: 24,
      texto: '/assets/texts/secao24.txt',
      tempo: '18min',
      capitulo: 'CXVI\n' +
        '\n' +
        'Filho do homem.\n' +
        '\n' +
        'Apalpei José Dias sobre as maneiras novas de minha mãe; ficou\n' +
        'espantado. Não havia nada, nem podia haver cousa nenhuma, tantos eram\n' +
        'os louvores incessantes que elle ouvia «á bella e virtuosa Capitú.»\n' +
        '\n' +
        '--Agora, quando os ouço, entro tambem no côro, mas a principio ficava\n' +
        'envergonhadissimo. Para quem chegou, como eu, a arrenegar deste\n' +
        'casamento, era duro confessar que elle foi uma verdadeira benção do\n' +
        'ceu. Que digna senhora nos saiu a creança travessa de Matacavallos! O\n' +
        'pae é que nos separou um pouco, em quanto não nos conheciamos, mas tudo\n' +
        'acabou em bem. Pois, sim, senhor, quando D. Gloria elogia a sua nora e\n' +
        'comadre...\n' +
        '\n' +
        '--Então mamãe?...\n' +
        '\n' +
        '--Perfeitamente!\n' +
        '\n' +
        '--Mas, porque e não nos visita ha tanto tempo?\n' +
        '\n' +
        '--Creio que tem andando mais achacada dos seus rheumatismos. Este anno\n' +
        'tem feito muito frio... Imagine a afflicção della, que andava o dia\n' +
        'inteiro; agora é obrigada a estar quieta, ao pé do irmão, que lá tem o\n' +
        'seu mal...\n' +
        '\n' +
        'Quiz observar-lhe que tal razão explicava a interrupção das visitas,\n' +
        'e não a frieza quando iamos nós a Matacavallos; mas não estendi tão\n' +
        'longe a intimidade do aggregado. José Dias pediu para ver o nosso\n' +
        '«prophetasinho» (assim chamava a Ezequiel) e fez-lhe as festas do\n' +
        'costume. Desta vez falou ao modo biblico (estivera na vespera a folhear\n' +
        'o livro de Ezequiel, como soube depois), e perguntava-lhe: «Como vae\n' +
        'isso, filho do homem?» «Dize-me, filho do homem, onde estão os teus\n' +
        'brinquedos?» «Queres comer doce, filho do homem?»\n' +
        '\n' +
        '--Que filho do homem é esse, perguntou-lhe Capitú agastada.\n' +
        '\n' +
        '--São os modos de dizer da Biblia.\n' +
        '\n' +
        '--Pois eu não gosto delles, replicou ella com aspereza.\n' +
        '\n' +
        '--Tem razão, Capitú, concordou o aggregado. Voce não imagina como a\n' +
        'Biblia é cheia de expressões cruas e grosseiras. Eu falava assim para\n' +
        'variar... Tu como vaes, meu anjo? Meu anjo, como é que eu ando na rua?\n' +
        '\n' +
        '--Não, atalhou Capitú; já lhe vou tirando esse costume do imitar os\n' +
        'outros.\n' +
        '\n' +
        '**--Mas tem muita graça; a mim, quando elle copia os meus gestos,\n' +
        'parece-me que sou eu mesmo, pequenino. Outro dia chegou a fazer um\n' +
        'gesto de D. Gloria, tão bom que ella lhe deu um beijo em paga. Vamos,\n' +
        'como é que eu ando?\n' +
        '\n' +
        '--Não, Ezequiel, disse eu, mamãe não quer.\n' +
        '\n' +
        'Eu mesmo achava feio tal séstro. Alguns dos gestos já lhe iam ficando\n' +
        'mais repetidos, como o das mãos e pés de Escobar; ultimamente, até\n' +
        'apanhara o modo de voltar da cabeça deste, quando falava, e o de\n' +
        'deixal-a cair, quando ria. Capitú ralhava. Mas o menino era travesso,\n' +
        'como o diabo; apenas começámos a falar de outra cousa, saltou ao meio\n' +
        'da sala, dizendo a José Dias:\n' +
        '\n' +
        '--O senhor anda assim.\n' +
        '\n' +
        'Não podemos deixar de rir, eu mais que ninguem. A primeira pessoa que\n' +
        'fechou a cara, que o reprehendeu e chamou a si foi Capitú.\n' +
        '\n' +
        '--Não quero isso, ouviu?\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'CXVII\n' +
        '\n' +
        'Amigos proximos.\n' +
        '\n' +
        'Já então Escobar deixára Andarahy e comprára uma casa no Flamengo, casa\n' +
        'que ainda alli vi, ha dias, quando me deu na gana experimentar se as\n' +
        'sensações antigas estavam mortas ou dormiam só; não posso dizel-o bem,\n' +
        'porque os somnos, quando são pesados, confundem vivos e defunctos, a\n' +
        'não ser a respiração. Eu respirava um pouco, mas póde ser que fosse do\n' +
        'mar, meio agitado. Emfim, passei, accendi um charuto, e dei por mim no\n' +
        'Cattete; tinha subido pela rua da Princeza, uma rua antiga... Ó ruas\n' +
        'antigas! ó casas antigas! ó pernas antigas! Todos nós éramos antigos, e\n' +
        'não é preciso dizer que no máu sentido, no sentido de velho e acabado.\n' +
        '\n' +
        'Velha é a casa, mas não lhe alteraram nada. Não sei até se ainda tem\n' +
        'o mesmo numero. Não digo que numero é para não irem indagar e cavar\n' +
        'a historia. Não é que Escobar ainda lá more nem sequer viva; morreu\n' +
        'pouco depois, por um modo que hei de contar. Emquanto viveu, uma vez\n' +
        'que estavamos tão proximos, tinhamos por assim dizer uma só casa, eu\n' +
        'vivia na delle, elle na minha, e o pedaço de praia entre a Gloria e\n' +
        'o Flamengo era como um caminho de uso proprio e particular. Fazia-me\n' +
        'pensar nas duas casas de Matacavallos, com o seu muro de permeio.\n' +
        '\n' +
        'Um historiador da nossa lingua, creio que João de Barros, põe na boca\n' +
        'de um rei barbaro algumas palavras mansas, quando os portuguezes lhe\n' +
        'propunham estabelecer alli ao pé uma fortaleza; dizia o rei que os\n' +
        'bons amigos deviam ficar longe uns dos outros, não perto, para se não\n' +
        'zangarem como as aguas do mar que batiam furiosas no rochedo que elles\n' +
        'viam dalli. Que a sombra do escriptor me perdoe, se eu duvido que o\n' +
        'rei dissesse tal palavra nem que ella seja verdadeira. Provavelmente\n' +
        'foi o mesmo escriptor que a inventou para adornar o texto, e não fez\n' +
        'mal, porque é bonita; realmente, é bonita. Eu creio que o mar então\n' +
        'batia na pedra, como é seu costume, desde Ullysses e antes. Agora\n' +
        'que a comparação seja verdadeira é que não. Seguramente ha inimigos\n' +
        'contiguos, mas tambem ha amigos do perto e do peito. E o escriptor\n' +
        'esquecia (salvo se ainda não era do seu tempo) esquecia o adagio:\n' +
        'longe dos olhos, longe do coração. Nós não podiamos ter os corações\n' +
        'agora mais perto. As nossas mulheres viviam na casa uma da outra, nós\n' +
        'passavamos as noites cá ou lá conversando, jogando ou mirando o mar.\n' +
        'Os dous pequenos passavam dias, ora no Flamengo, ora na Gloria.\n' +
        '\n' +
        'Como eu observasse que podia acontecer com elles o que se dera entre\n' +
        'mim e Capitú, acharam todos que sim, e Sancha accrescentou que até já\n' +
        'se iam parecendo. Eu expliquei:\n' +
        '\n' +
        '--Não; é porque Ezequiel imita os gestos dos outros.\n' +
        '\n' +
        'Escobar concordou commigo, e insinuou que alguma vez as creanças que\n' +
        'se frequentam muito acabam parecendo-se umas com as outras. Opinei de\n' +
        'cabeça, como me succedia nas materias que eu não sabia bem nem mal.\n' +
        'Tudo podia ser. O certo é que elles se queriam muito, e podiam acabar\n' +
        'casados, mas não acabaram casados.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'CXVIII\n' +
        '\n' +
        'A mão de Sancha.\n' +
        '\n' +
        'Tudo acaba, leitor; é um velho truismo, a que se póde accrescentar\n' +
        'que nem tudo o que dura dura muito tempo. Esta segunda parte não acha\n' +
        'crentes faceis; ao contrario, a ideia de que um castello de vento dura\n' +
        'mais que o mesmo vento de que é feito, difficilmente se despegará\n' +
        'da cabeça, e é bom que seja assim, para que se não perca o costume\n' +
        'daquellas construcções quasi eternas.\n' +
        '\n' +
        'O nosso castello era solido, mas um domingo... Na vespera tinhamos\n' +
        'passado a noite no Flamengo, não só os dous casaes inseparaveis, como\n' +
        'ainda o aggregado e prima Justina. Foi então que Escobar, falando-me á\n' +
        'janella, disse-me que fossemos lá jantar no dia seguinte; precisavamos\n' +
        'falar de um projecto em familia, um projecto para os quatro.\n' +
        '\n' +
        '--Para os quatro? Uma contradança.\n' +
        '\n' +
        '--Não. Não és capaz de adivinhar o que seja, nem eu digo. Vem amanhã.\n' +
        '\n' +
        'Sancha não tirava os olhos de nós durante a conversa, ao canto da\n' +
        'janella. Quando o marido saiu, veiu ter commigo. Perguntou-me de que\n' +
        'é que falaramos; disse-lhe que de um projecto que eu não sabia qual\n' +
        'fosse; ella pediu-me segredo, e revelou-me o que era: uma viagem á\n' +
        'Europa dalli a dous annos. Disse isto de costas para dentro, quasi\n' +
        'suspirando. O mar batia com grande força na praia; havia ressaca.\n' +
        '\n' +
        '--Vamos todos? perguntei por fim.\n' +
        '\n' +
        '--Vamos.\n' +
        '\n' +
        'Sancha ergueu a cabeça e olhou para mim com tanto prazer que eu,\n' +
        'graças ás relações della e Capitú, não se me daria beijal-a na testa.\n' +
        'Entretanto, os olhos de Sancha não convidavam a expansões fraternaes,\n' +
        'pareciam quentes e intimativos, diziam outra cousa, e não tardou que se\n' +
        'afastassem da janella, onde eu fiquei olhando para o mar, pensativo. A\n' +
        'noite era clara.\n' +
        '\n' +
        'Dalli mesmo busquei os olhos de Sancha, ao pé do piano; encontrei-os\n' +
        'em caminho. Pararam os quatro e ficaram deante uns dos outros, uns\n' +
        'esperando que os outros passassem, mas nenhuns passavam. Tal se dá\n' +
        'na rua entre dous teimosos. A cautela desligou-nos; eu tornei a\n' +
        'voltar-me para fóra. E assim posto entrei a cavar na memoria se a\n' +
        'alguma vez olhára para ella com a mesma expressão, e fiquei incerto.\n' +
        'Tive uma certeza só, é que um dia pensei nella, como se pensa na bella\n' +
        'desconhecida que passa**; mas então dar-se-hia que ella adivinhando...\n' +
        'Talvez o simples pensamento me transluzisse cá fóra, e ella me fugisse\n' +
        'outr\'ora irritada ou acanhada, e agora por um movimento invencivel...\n' +
        'Invencivel; esta palavra foi como uma benção de padre á missa, que a\n' +
        'gente recebe e repete em si mesma.\n' +
        '\n' +
        '--O mar amanhã está de desafiar a gente, disse-me a voz de Escobar, ao\n' +
        'pé de mim.\n' +
        '\n' +
        '--Você entra no mar amanhã?\n' +
        '\n' +
        '--Tenho entrado com mares maiores, muito maiores.--Você não imagina o\n' +
        'que é um bom mar em hora bravia. É preciso nadar bem, como eu, e ter\n' +
        'estes pulmões,--disse elle batendo no peito, e estes braços; apalpa.\n' +
        '\n' +
        'Apalpei-lhe os braços, como se fossem os de Sancha. Custa-me esta\n' +
        'confissão, mas não posso supprimil-a; era jarretar a verdade. Nem só\n' +
        'os apalpei com essa ideia, mas ainda senti outra cousa: achei-os mais\n' +
        'grossos e fortes que os meus, e tive-lhes inveja; accresce que sabiam\n' +
        'nadar.\n' +
        '\n' +
        'Quando saímos, tornei a falar com os olhos á dona da casa. A mão della\n' +
        'apertou muito a minha, e demorou-se mais que de costume.\n' +
        '\n' +
        'A modestia pedia então, como agora, que eu visse naquelle gesto de\n' +
        'Sancha uma sancção ao projecto do marido e um agradecimento. Assim\n' +
        'devia ser, mas um fluido particular que me correu todo o corpo desviou\n' +
        'de mim a conclusão que deixo escripta. Senti ainda os dedos de Sancha\n' +
        'entre os meus, apertando uns aos outros. Foi um instante de vertigem\n' +
        'e de peccado. Passou depressa no relogio do tempo; quando cheguei o\n' +
        'relogio ao ouvido, trabalhavam só os minutos da virtude e da razão.\n' +
        '\n' +
        '**--...Uma senhora deliciosissima, concluiu José Dias um discurso que\n' +
        'vinha fazendo.\n' +
        '\n' +
        '--Deliciosissima! repeti com algum ardor, que moderei logo,\n' +
        'emendando-me: Realmente, uma bella noite!\n' +
        '\n' +
        '--Como devem ser todas as daquella casa, continuou o aggregado. Cá\n' +
        'fóra, não; cá fóra o mar está zangado; escute.\n' +
        '\n' +
        'Ouvia-se o mar forte,--como já se ouvia de casa,--a ressaca era\n' +
        'grande, e, a distancia, viam-se crescer as ondas. Capitú e prima\n' +
        'Justina, que iam adeante, detiveram-se n\'uma das voltas da praia, e\n' +
        'fomos conversando os quatro; mas eu conversava mal. Não havia meio de\n' +
        'esquecer inteiramente a mão de Sancha nem os olhos que trocámos. Agora\n' +
        'achava-lhes isto, agora aquillo. Os instantes do diabo intercalavam-se\n' +
        'nos minutos de Deus, e o relogio foi assim marcando alternativamente\n' +
        'a minha perdição e a minha salvação. José Dias despediu-se de nós\n' +
        'á porta. Prima Justina dormiu em nossa casa; iria embora, no dia\n' +
        'seguinte, depois do almoço e da missa. Eu recolhi-me ao meu gabinete,\n' +
        'onde me demorei mais que de costume.\n' +
        '\n' +
        'O retrato de Escobar, que eu tinha alli, ao pé do de minha mãe,\n' +
        'falou-me como se fosse a propria pessoa. Combati sinceramente os\n' +
        'impulsos que trazia do Flamengo; rejeitei a figura da mulher do\n' +
        'meu amigo, e chamei-me desleal. Demais, quem me affirmava que\n' +
        'houvesse alguma intenção daquella especie no gesto da despedida e nos\n' +
        'anteriores? Tudo podia ligar-se ao interesse da nossa viagem. Sancha\n' +
        'e Capitú eram tão amigas que seria um prazer mais para ellas irem\n' +
        'juntas. Quando houvesse alguma intenção sexual, quem me provaria que\n' +
        'não era mais que uma sensação fulgurante, destinada a morrer com a\n' +
        'noite e o somno? Ha remorsos que não nascem de outro peccado, nem tem\n' +
        'maior duração. Agarrei-me a esta hypothese que se conciliava com a\n' +
        'mão de Sancha, que eu sentia de memoria dentro da minha mão, quente e\n' +
        'demorada, apertada e apertando...\n' +
        '\n' +
        'Sinceramente, eu achava-me mal entre um amigo e a attracção. A timidez\n' +
        'póde ser que fosse outra causa daquella crise; não é só o ceu que dá as\n' +
        'nossas virtudes, a timidez tambem, não contando o acaso, mas o acaso\n' +
        'é um méro accidente; a melhor origem dellas é o ceu. Entretanto, como\n' +
        'a timidez vem do ceu, que nos dá a compleição, a virtude, filha della\n' +
        'é, genealogicamente, o mesmo sangue celestial. Assim reflectiria, se\n' +
        'pudesse; mas a principio vaguei á tôa. Paixão não era nem inclinação.\n' +
        'Capricho seria ou quê? Ao fim de vinte minutos era nada, inteiramente\n' +
        'nada. O retrato de Escobar pareceu falar-me; vi-lhe a altitude franca e\n' +
        'simples, sacudi a cabeça e fui deitar-me.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'CXIX\n' +
        '\n' +
        'Não faça isso, querida.\n' +
        '\n' +
        'A leitora, que é minha amiga e abriu este livro com o fim de descançar\n' +
        'da cavatina de hontem para a valsa de hoje, quer fechal-o ás pressas,\n' +
        'ao ver que beiramos um abysmo. Não faça isso, querida; eu mudo de rumo.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'CXX\n' +
        '\n' +
        'Os autos.\n' +
        '\n' +
        'Na manhã seguinte accordei livre das abominações da vespera;\n' +
        'chamei-lhes allucinações, tomei café, percorri os jornaes e fui\n' +
        'estudar uns autos. Capitú e prima Justina sairam para a missa das\n' +
        'nove, na Lapa. A figura de Sancha desappareceu inteiramente no meio\n' +
        'das allegações da parte adversa, que eu ia lendo nos autos, allegações\n' +
        'falsas, inadmissiveis, sem apoio na lei nem nas praxes. Vi que era\n' +
        'facil ganhar a demanda; consultei Dalloz, Pereira e Souza...\n' +
        '\n' +
        'Uma só vez olhei para o retrato de Escobar. Era uma bella photographia\n' +
        'tirada um anno antes. Estava de pé, sobrecasaca abotoada, a mão\n' +
        'esquerda no dorso de uma cadeira, a direita mettida ao peito, o olhar\n' +
        'ao longe para a esquerda do espectador. Tinha garbo e naturalidade.\n' +
        'A moldura que lhe mandei pôr não encobria a dedicatoria, escripta\n' +
        'embaixo, não nas costas do cartão: «Ao meu querido Bentinho o seu\n' +
        'querido Escobar 20-4-70.» Estas palavras fortaleceram-me os pensamentos\n' +
        'daquella manhã, e espancaram de todo as recordações da vespera.\n' +
        'Naquelle tempo a minha vista era boa; eu podia lel-as do logar em que\n' +
        'estava. Tornei aos autos.\n'
    },
    {
      src: '/assets/audio/domcasmurro25.mp3',
      titulo: 'Seção 25',
      subtitulo: 'Capítulos CXXI ao CXXV',
      leitor: 'Rachel Moraes',
      numeroSecao: 25,
      texto: '/assets/texts/secao25.txt',
      tempo: '9min',
      capitulo: 'CXXI\n' +
        '\n' +
        'A catastrophe.\n' +
        '\n' +
        'No melhor delles, ouvi passos precipitados na escada, a campainha soou,\n' +
        'soaram palmas, golpes na cancella, vozes, acudiram todos, acudi eu\n' +
        'mesmo. Era um escravo da casa de Sancha que me chamava:\n' +
        '\n' +
        '--Para ir lá... sinhô nadando, sinhô morrendo.\n' +
        '\n' +
        'Não disse mais nada, ou eu não lhe ouvi o resto. Vesti-me, deixei\n' +
        'recado a Capitú e corri ao Flamengo.\n' +
        '\n' +
        'Em caminho, fui adivinhando a verdade. Escobar metteu-se a nadar, como\n' +
        'usava fazer, arriscou-se um pouco mais fóra que de costume, apesar do\n' +
        'mar bravio, foi enrolado e morreu. As canoas que acudiram mal puderam\n' +
        'trazer-lhe o cadaver.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'CXXII\n' +
        '\n' +
        'O enterro.\n' +
        '\n' +
        'A viuva... Poupo-vos as lagrimas da viuva, as minhas, as da outra\n' +
        'gente. Sai de lá cerca de onze horas; Capitú e prima Justina\n' +
        'esperavam-me, uma com o parecer abatido e estupido, outra enfastiada\n' +
        'apenas.\n' +
        '\n' +
        '--Vão fazer companhia a pobre Sanchinha; eu vou cuidar do enterro.\n' +
        '\n' +
        'Assim fizemos. Quiz que o enterro fosse pomposo, e a affluencia dos\n' +
        'amigos foi numerosa. Praia, ruas, praça da Gloria, tudo eram carros,\n' +
        'muitos delles particulares. A casa, não sendo grande, não podiam lá\n' +
        'caber todos; muitos estavam na praia, falando do desastre, apontando\n' +
        'o logar em que Escobar fallecèra, ouvindo referir a chegada do morto.\n' +
        'José Dias ouviu tambem falar dos negocios do finado, divergindo alguns\n' +
        'na avaliação dos bens, mas havendo accordo em que o passivo devia ser\n' +
        'pequeno. Elogiavam as qualidades de Escobar. Um ou outro discutia\n' +
        'o recente gabinete Rio Branco; estavamos em Março de 1871. Nunca me\n' +
        'esqueceu o mez nem o anno.\n' +
        '\n' +
        'Como eu houvesse resolvido falar no cemiterio, escrevi algumas linhas e\n' +
        'mostrei-as em casa a José Dias, que as achou realmente dignas do morto\n' +
        'e de mim. Pediu-me o papel, recitou lentamente o discurso, pesando\n' +
        'as palavras, e confirmou a primeira opinião; no Flamengo espalhou a\n' +
        'noticia. Alguns conhecidos vieram interrogar-me:\n' +
        '\n' +
        '--Então, vamos ouvil-o?\n' +
        '\n' +
        '--Quatro palavras.\n' +
        '\n' +
        'Poucas mais seriam. Tinha-as escripto com receio de que a emoção me\n' +
        'impedisse de improvisar. No tilbury em que andei uma ou duas horas, não\n' +
        'fizera mais que recordar o tempo do seminario, as relações de Escobar,\n' +
        'as nossas sympathias, a nossa amizade, começada, continuada e nunca\n' +
        'interrompida, até que um lance da fortuna fez separar para sempre duas\n' +
        'creaturas que promettiam ficar por muito tempo unidas. De quando em\n' +
        'quando enxugava os olhos. O cocheiro aventurou duas ou tres perguntas\n' +
        'sobre a minha situação moral; não me arrancando nada, continuou o seu\n' +
        'officio. Chegando a casa, deitei aquellas emoções ao papel; tal seria o\n' +
        'discurso.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'CXXIII\n' +
        '\n' +
        'Olhos de ressaca.\n' +
        '\n' +
        'Emfim, chegou a hora da encommendação e da partida. Sancha quiz\n' +
        'despedir-se do marido, e o desespero daquelle lance consternou a todos.\n' +
        'Muitos homem choravam tambem, as mulheres todas. Só Capitú, amparando\n' +
        'a viuva, parecia vencer-se a si mesma. Consolava a outra, queria\n' +
        'arrancal-a dalli. A confusão era geral. No meio della, Capitú olhou\n' +
        'alguns instantes para o cadaver tão fixa, tão apaixonadamente fixa, que\n' +
        'não admira lhe saltassem algumas lagrimas poucas e caladas...\n' +
        '\n' +
        'As minhas cessaram logo. Fiquei a ver as della; Capitú enxugou-as\n' +
        'depressa, olhando a furto para a gente que estava na sala. Redobrou\n' +
        'de caricias para a amiga, e quiz leval-a; mas o cadaver parece que\n' +
        'a retinha tambem. Momento houve em que os olhos de Capitú fitaram o\n' +
        'defuncto, quaes os da viuva, sem o pranto nem palavras desta, mas\n' +
        'grandes e abertos, como a vaga do mar lá fóra, como se quizesse tragar\n' +
        'tambem o nadador da manhã.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'CXXIV\n' +
        '\n' +
        'O discurso.\n' +
        '\n' +
        '--Vamos, são horas...\n' +
        '\n' +
        'Era José Dias que me convidava a fechar o ataúde. Fechámol-o, e eu\n' +
        'peguei n\'uma das argolas; rompeu o alarido final. Palavra que, quando\n' +
        'cheguei á porta, vi o sol claro, tudo gente e carros, as cabeças\n' +
        'descobertas, tive um daquelles meus impulsos que nunca chegavam á\n' +
        'execução: foi atirar á rua caixao, defuncto e tudo. No carro disse a\n' +
        'José Dias que se calasse. No cemiterio tive de repetir a cerimonia\n' +
        'da casa, desatar as correias, e ajudar a levar o feretro á cova. O\n' +
        'que isto me custou imagina. Descido o cadaver á cova, trouxeram a cal\n' +
        'e a pá; sabes disto, terás ido a mais de um enterro, mas o que não\n' +
        'sabes nem póde saber nenhum dos teus amigos, leitor, ou qualquer outro\n' +
        'extranho, é a crise que me tornou quando vi todos os olhos em mim,\n' +
        'os pés quietos, as orelhas attentas, e, ao cabo de alguns instantes\n' +
        'de total silencio, um sussurro vago, algumas vozes interrogativas,\n' +
        'signaes, e alguem, José Dias, que me dizia ao ouvido:\n' +
        '\n' +
        '--Então, fale.\n' +
        '\n' +
        'Era o discurso. Queriam o discurso. Tinham jus ao discurso annunciado.\n' +
        'Machinalmente, metti a mão no bolso, saquei o papel e li-o aos\n' +
        'trambolhões, não todo, nem seguido, nem claro; a voz parecia-me entrar\n' +
        'em vez de sair, as mãos tremiam-me. Não era só a emoção nova que me\n' +
        'fazia assim, era o proprio texto, as memorias do amigo, as saudades\n' +
        'confessadas, os louvores á pessoa e aos seus meritos; tudo isto que\n' +
        'eu era obrigado a dizer e dizia mal. Ao mesmo tempo, temendo que me\n' +
        'adivinhassem a verdade, forcejava por escondel-a bem. Creio que poucos\n' +
        'me ouviram, mas o gesto geral foi de comprehensão e de approvação.\n' +
        'As mãos que me deram a apertar eram de solidariedade; alguns diziam:\n' +
        '«Muito bonito! muito bem! magnifico!» José Dias achou que a eloquencia\n' +
        'estivera na altura da piedade. Um homem, que me pareceu jornalista,\n' +
        'pediu-me licença para levar o manuscripto e imprimil-o. Só a minha\n' +
        'grande turvação recusaria um obsequio tão simples.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'CXXV\n' +
        '\n' +
        'Uma comparação.\n' +
        '\n' +
        'Priamo julga-se o mais infeliz dos homens, por beijar a mão daquelle\n' +
        'que lhe matou o filho. Homero é que relata isto, e é um bom autor, não\n' +
        'obstante contal-o em verso, mas ha narrações exactas em verso, e até\n' +
        'mau verso. Compara tu a situação de Priamo com a minha; eu acabava de\n' +
        'louvar as virtudes do homem que recebera defuncto aquelles olhos... E\n' +
        'impossivel que algum Homero não tirasse da minha situação muito melhor\n' +
        'effeito, ou quando menos, egual. Nem digas que nos faltam Homeros,\n' +
        'pela causa apontada em Camões; não, senhor, faltam-nos, é certo, mas é\n' +
        'porque os Priamos procuram a sombra e o silencio. As lagrimas, se as\n' +
        'tèm, são enxugadas atraz da porta, para que as caras appareçam limpas\n' +
        'e serenas; os discursos são antes de alegria que do melancolia, e tudo\n' +
        'passa como se Achilles não matasse Heitor.\n'
    },
    {
      src: '/assets/audio/domcasmurro26.mp3',
      titulo: 'Seção 26',
      subtitulo: 'Capítulos CXXVI ao CXXX',
      leitor: 'Isa',
      numeroSecao: 26,
      texto: '/assets/texts/secao26.txt',
      tempo: '14min',
      capitulo: 'CXXVI\n' +
        '\n' +
        'Scismando.\n' +
        '\n' +
        'Pouco depois de sair do cemiterio, rasguei o discurso e deitei os\n' +
        'pedaços pela portinhola fóra, sem embargo dos esforços de José Dias\n' +
        'para impedil-o.\n' +
        '\n' +
        '--Não presta para nada, disse-lhe eu, e como posso ter a tentação de\n' +
        'dal-o a imprimir, fica já destruido de uma vez. Não presta, não vale\n' +
        'nada.\n' +
        '\n' +
        'José Dias demonstrou longamente o contrario, depois elogiou o enterro,\n' +
        'e por ultimo fez o panegyrico do morto, uma grande alma, espirito\n' +
        'activo, coração recto, amigo, bom amigo, digno da esposa amantissima\n' +
        'que Deus lhe dera...\n' +
        '\n' +
        'Neste ponto do discurso, deixei-o falar sósinho e peguei a scismar\n' +
        'commigo. O que scismei foi tão escuro e confuso que não me deixou tomar\n' +
        'pé. No Cattete mandei parar o carro, disse a José Dias que fosse buscar\n' +
        'as senhoras ao Flamengo e as levasse para casa; eu iria a pé.\n' +
        '\n' +
        '--Mas...\n' +
        '\n' +
        '--Vou fazer uma visita.\n' +
        '\n' +
        'A razão d\'isto era acabar de scismar, e escolher uma resolução que\n' +
        'fosse adequada ao momento. O carro andaria mais depressa que as\n' +
        'pernas; estas iriam pausadas ou não, podiam afrouxar o passo, parar,\n' +
        'arrepiar caminho, e deixar que a cabeça scismasse á vontade. Fui\n' +
        'andando e scismando. Tinha já comparado o gesto de Sancha na vespera e\n' +
        'o desespero daquelle dia; eram inconciliaveis. A viuva era realmente\n' +
        'amantissima. Assim se desvaneceu de todo a illusão da minha vaidade.\n' +
        'Não seria o mesmo caso de Capitú? Cuidei de recompôr-lhe os olhos, a\n' +
        'posição em que a vi, o ajuntamento de pessoas que devia naturalmente\n' +
        'impôr-lhe a dissimulação, se houvesse algo que dissimular. O que aqui\n' +
        'vae por ordem logica e deductiva, tinha sido antes uma barafunda de\n' +
        'ideias e sensações, graças aos solavancos do carro e ás interrupções de\n' +
        'José Dias. Agora, porém, raciocinava e evocava claro e bem. Conclui de\n' +
        'mim para mim que era a antiga paixão que me offuscava ainda e me fazia\n' +
        'desvairar como sempre.\n' +
        '\n' +
        'Quando cheguei a esta conclusão final, chegava tambem á porta de\n' +
        'casa, mas voltei para traz, e subi outra vez a rua do Cattete. Eram\n' +
        'as duvidas que me affligiam ou a necessidade de affligir Capitú com\n' +
        'a minha grande demora? Ponhamos que eram as duas causas; andei largo\n' +
        'espaço, até que me senti socegar, e endireitei para casa. Batiam oito\n' +
        'hora n\'uma padaria.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'CXXVII\n' +
        '\n' +
        'O barbeiro.\n' +
        '\n' +
        'Perto de casa, havia um barbeiro, que me conhecia de vista, amava a\n' +
        'rabeca e não tocava inteiramente mal. Na occasião em que ia passando,\n' +
        'executava não sei que peça. Parei na calçada a ouvil-o (tudo são\n' +
        'pretextos a um coração agoniado), elle viu-me, o continuou a tocar. Não\n' +
        'attendeu a um freguez, e logo a outro, que alli foram, a despeito da\n' +
        'hora e de ser domingo, confiar-lhe as caras á navalha. Perdeu-os sem\n' +
        'perder uma nota; ia tocando para mim. Esta consideração fez-me chegar\n' +
        'francamente a porta da loja, voltado para elle. Ao fundo, levantando\n' +
        'a cortina de chita que fechava o interior da casa, vi apontar uma\n' +
        'moça trigueira, vestido claro, flôr no cabello. Era a mulher delle;\n' +
        'creio que me descobriu de dentro, e veiu agradecer-me com a presença o\n' +
        'favor que eu fazia ao marido. Se me não engano, chegou a dizel-o com\n' +
        'os olhos. Quanto ao marido, tocava agora com mais calor; sem ver a\n' +
        'mulher, sem ver freguezes, grudava a face ao instrumento, passava a\n' +
        'alma ao arco, e tocava, tocava...\n' +
        '\n' +
        'Divina arte! Ia-se formando um grupo, deixei a porta da loja e\n' +
        'vim andando para casa; enfiei pelo corredor e subi as escadas sem\n' +
        'estrepito. Nunca me esqueceu o caso deste barbeiro, ou por estar\n' +
        'ligado a um momento grave da minha vida, ou por esta maxima, que os\n' +
        'compiladores, pódem tirar daqui e inserir nos compendios de escola.\n' +
        'A maxima é que a gente esquece devagar as boas acções que pratica,\n' +
        'e verdadeiramente não as esquece nunca. Pobre barbeiro! perdeu duas\n' +
        'barbas naquella noite, que eram o pão do dia seguinte, tudo para ser\n' +
        'ouvido de um transeunte. Suppõe agora que este, em vez de ir-se embora,\n' +
        'como eu fui, ficava á porta a ouvil-o e a namorar-lhe a mulher; então\n' +
        'é que elle, todo arco, todo rabeca, tocaria desesperadamente. Divina\n' +
        'arte!\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'CXXVIII\n' +
        '\n' +
        'Punhado de successos.\n' +
        '\n' +
        'Como ia dizendo, subi as escadas sem estrepito, empurrei a cancella,\n' +
        'que estava apenas encostada, o dei com prima Justina e José Dias\n' +
        'jogando cartas na saleta proxima. Capitú levantou-se do canapé e veiu\n' +
        'a mim. O rosto della era agora sereno e puro. Os outros suspenderam\n' +
        'o jogo, e todos falámos do desastre e da viuva. Capitú censurou a\n' +
        'imprudencia de Escobar, e não dissimulou a tristeza que lhe trazia a\n' +
        'dor da amiga. Perguntei-lhe por que não ficára com Sancha aquella noite.\n' +
        '\n' +
        '--Tem lá muita gente; ainda assim offereci-me, mas não quiz. Tambem lhe\n' +
        'disse que era melhor vir para cá, e passar aqui uns dias comnosco.\n' +
        '\n' +
        '--Tambem não quiz?\n' +
        '\n' +
        '--Tambem não.\n' +
        '\n' +
        '--Entretanto, a vista do mar ha de ser-lhe penosa, todas as manhãs,\n' +
        'ponderou José Dias, e não sei como poderá...\n' +
        '\n' +
        '--Mas, passa; o que é que não passa? atalhou prima Justina.\n' +
        '\n' +
        'E como em torno desta ideia, começassemos uma troca de palavras,\n' +
        'Capitú saiu para ir ver se o filho dormia. Ao passar pelo espelho,\n' +
        'concertou os cabellos tão demoradamente que pareceria affectação, se\n' +
        'não soubessemos que ella era muito amiga de si. Quando tornou trazia\n' +
        'os olhos vermelhos; disse-nos que, ao mirar o filho dormindo pensára\n' +
        'na filhinha de Sancha, e na afflicção da viuva. E, sem se lhe dar das\n' +
        'visitas, nem reparar se havia algum criado, abraçou-me e disse-me que,\n' +
        'se quizesse pensar nella, era preciso pensar primeiro na minha vida.\n' +
        'José Dias achou a phrase «lindissima», e perguntou a Capitú porque é\n' +
        'que não fazia versos. Tentei metter o caso á bulha, e assim acabámos a\n' +
        'noite.\n' +
        '\n' +
        'No dia seguinte, arrependi-me de haver rasgado o discurso, não que\n' +
        'quizesse dal-o a imprimir, mas era lembrança do finado. Pensei em\n' +
        'recompôl-o, mas só achei phrases soltas, que uma vez juntas não tinham\n' +
        'sentido. Tambem pensei em fazer outro, mas era já difficil, e podia ser\n' +
        'apanhado em falso pelos que me tinham ouvido no cemiterio. Quanto a\n' +
        'recolher os pedacinhos de papel deitados á rua, era tarde; estariam já\n' +
        'varridos.\n' +
        '\n' +
        'Inventariei as lembranças de Escobar, livros, um tinteiro de bronze,\n' +
        'uma bengala de marfim, um passaro, o album de Capitú, duas paizagens\n' +
        'do Paraná e outras. Tambem elle as possuia de minha mão. Vivemos\n' +
        'assim a trocar memorias e regalos, ora em dia de annos, ora sem razão\n' +
        'particular. Tudo isso me empanava os olhos... Vieram os jornaes do\n' +
        'dia: davam noticia do desastre e da morte de Escobar, os estudos e\n' +
        'os negocios deste, as qualidades pessoaes, a sympathia do commercio,\n' +
        'e tambem falavam dos bens deixados, da mulher e da filha. Todo isso\n' +
        'foi na segunda feira. Na terça-feira foi aberto o testamento, que me\n' +
        'nomeava segundo testamenteiro; o primeiro logar cabia á mulher. Não\n' +
        'me deixava nada, mas as palavras que me escrevera em carta separada\n' +
        'eram sublimes de amizade e estima. Capitú desta vez chorou muito; mas\n' +
        'compoz-se depressa.\n' +
        '\n' +
        'Testamento, inventario, tudo andou quasi tão depressa como aqui vae\n' +
        'dito. Ao cabo de pouco tempo, Sancha retirou-se para a casa dos\n' +
        'parentes no Paraná.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'CXXIX\n' +
        '\n' +
        'A D. Sancha.\n' +
        '\n' +
        'D. Sancha, peço-lhe que não leia este livro; ou, se o houver lido até\n' +
        'aqui, abandone o resto. Basta fechal-o; melhor será queimal-o, para lhe\n' +
        'não dar tentação e abril-o outra vez. Se, apesar do aviso, quizer ir\n' +
        'até o fim, a culpa é sua; não respondo pelo mal que receber. O que já\n' +
        'lhe tiver feito, contando os gestos daquelle sabbado, esse acabou, uma\n' +
        'vez que os acontecimentos, e eu com elles, desmentimos a minha illusão;\n' +
        'mas o que agora a alcançar, esse é indelevel. Não, amiga minha, não\n' +
        'leia mais. Vá envelhecendo, sem marido nem filha, que eu faço a mesma\n' +
        'cousa, e é ainda o melhor que se póde fazer depois da mocidade. Um dia,\n' +
        'iremos daqui até a porta do ceu, onde nos encontraremos renovados, como\n' +
        'as plantas novas, _come piante novelle_,\n' +
        '\n' +
        '                Rinovalatte di novelle fronde.\n' +
        '\n' +
        'O resto em Dante.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'CXXX\n' +
        '\n' +
        'Um dia...\n' +
        '\n' +
        'Porquanto, um dia Capitú quiz saber o que é que me fazia andar calado\n' +
        'e aborrecido. E propoz-me a Europa, Minas, Petropolis, uma serie de\n' +
        'bailes, mil desses remedios aconselhados aos melancolicos. Eu não\n' +
        'sabia que lhe respondesse; recusei as diversões. Como insistisse,\n' +
        'repliquei-lhe que os meus negocios andavam mal. Capitú sorriu para\n' +
        'animar-me. E que tinha que andassem mal? Tornariam a andar bem, e até\n' +
        'lá as joias, os objectos de algum valor seriam vendidos, e iriamos\n' +
        'residir em algum becco. Viveriamos socegados e esquecidos; depois\n' +
        'tornariamos á tona da agua. A ternura com que me disse isto era de\n' +
        'commover as pedras. Pois nem assim. Respondi-lhe seccamente que\n' +
        'não era preciso vender nada. Deixei-me estar calado e aborrecido.\n' +
        'Ella propoz-me jogar cartas ou damas, um passeio a pé, uma visita a\n' +
        'Matacavallos; e, como eu não acceitasse nada, foi para a sala, abriu o\n' +
        'piano, e começou a tocar; eu aproveitei a ausencia, peguei do chapéo e\n' +
        'saí.\n' +
        '\n' +
        '... Perdão, mas este capitulo devia ser precedido de outro, em que\n' +
        'contasse um incidente, occorrido poucas semanas antes, dous mezes\n' +
        'depois da partida de Sancha. Vou escrevel-o; podia antepôl-o a este,\n' +
        'antes de mandar o livro ao prélo, mas custa muito alterar o numero dos\n' +
        'paginas; vae assim mesmo, depois a narração seguirá direita até o fim.\n' +
        'Demais, é curto.\n'
    },
    {
      src: '/assets/audio/domcasmurro27.mp3',
      titulo: 'Seção 27',
      subtitulo: 'Capítulos CXXXI ao CXXXV',
      leitor: 'Marina Fikota',
      numeroSecao: 27,
      texto: '/assets/texts/secao27.txt',
      tempo: '13min',
      capitulo: 'CXXXI\n' +
        '\n' +
        'Anterior ao anterior.\n' +
        '\n' +
        'Foi o caso que a minha vida em outra vez doce e placida, a banca do\n' +
        'advogado rendia-me bastante, Capitú estava mais bella, Ezequiel ia\n' +
        'crescendo. Começava o anno de 1872.\n' +
        '\n' +
        '--Você já reparou que Ezequiel tem nos olhos uma espressão exquisita?\n' +
        'perguntou-me Capitú. Só vi duas pessoas assim, um amigo de papae e o\n' +
        'defuncto Escobar. Olha, Ezequiel; olha firme, assim, vira para o lado\n' +
        'de papae, não precisa revirar os olhos, assim, assim...\n' +
        '\n' +
        'Era depois de jantar; estavamos ainda á mesa, Capitú brincava com\n' +
        'o filho, ou elle com ella, ou um com outro, porque, em verdade,\n' +
        'queriam-se muito, mas é tambem certo que elle me queria ainda mais a\n' +
        'mim. Approximei-me de Ezequiel, achei que Capitú tinha razão; eram os\n' +
        'olhos de Escobar, mas não me pareceram exquisitos por isso. Afinal\n' +
        'não haveria mais que meia duzia de expressões no mundo, e muitas\n' +
        'semelhanças se dariam naturalmente. Ezequiel não entendeu nada, olhou\n' +
        'espantado para ella e para mim, e afinal saltou-me ao collo:\n' +
        '\n' +
        '--Vamos passear, papae?\n' +
        '\n' +
        '--Logo, meu filho.\n' +
        '\n' +
        'Capitú, alheia a ambos, fitava agora a outra borda da mesa; mas,\n' +
        'dizendo-lhe eu que, na belleza, os olhos de Ezequiel saíam aos da mãe,\n' +
        'Capitú sorriu abanando a cabeça com um ar que nunca achei em mulher\n' +
        'alguma, provavelmente porque não gostei tanto das outras. As pessoas\n' +
        'valem o que vale a affeição da gente, e é dahi que mestre Povo tirou\n' +
        'aquelle adagio que quem o feio ama bonito lhe parece. Capitú tinha meia\n' +
        'duzia de gestos unicos na terra. Aquelle entrou-me pela alma dentro.\n' +
        'Assim fica explicado que eu corresse á minha esposa e amiga e lhe\n' +
        'enchesse a cara de beijos; mas este outro incidente não é radicalmente\n' +
        'necessario á comprehensão do capitulo passado e dos futuros; fiquemos\n' +
        'nos olhos de Ezequiel.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'CXXXII\n' +
        '\n' +
        'O debuxo e o colorido.\n' +
        '\n' +
        'Nem só os olhos, mas as restantes feições, a cara, o corpo, a pessoa\n' +
        'inteira, iam-se apurando com o tempo. Eram como um debuxo primitivo\n' +
        'que o artista vae enchendo e colorindo aos poucos, e a figura entra a\n' +
        'ver, sorrir, palpitar, falar quasi, até que a familia pendura o quadro\n' +
        'na parede, em memoria do que foi e já não póde ser. Aqui podia ser e\n' +
        'era. O costume valeu muito contra o effeito da mudança: mas a mudança\n' +
        'fez-se, não á maneira de theatro, fez-se como a manhã que aponta\n' +
        'vagarosa, primeiro que se possa ler uma carta, depois lê-se a carta na\n' +
        'rua, em casa, no gabinete, sem abrir as janellas; a luz coada pelas\n' +
        'persianas basta a distinguir as lettras. Li a carta, mal a principio e\n' +
        'não toda, depois fui lendo melhor. Fugia-lhe, é certo, mettia o papel\n' +
        'no bolso, corria a casa, fechava-me, não abria as vidraças, chegava a\n' +
        'fechar os olhos. Quando novamente abria os olhos e a carta, a lettra\n' +
        'era clara e a noticia clarissima.\n' +
        '\n' +
        'Escobar vinha assim surgindo da sepultura, do seminario e do Flamengo\n' +
        'para se sentar commigo á mesa, receber-me na escada, beijar-me no\n' +
        'gabinete de manhã, ou pedir-me á noite a benção do costume. Todas\n' +
        'essas acções eram repulsivas; eu tolerava-as e praticava-as, para me\n' +
        'não descobrir a mim mesmo e ao mundo. Mas o que pudesse dissimular\n' +
        'ao mundo, não podia fazel-o a mim, que vivia mais perto de mim que\n' +
        'ninguem. Quando nem mãe nem filho estavam commigo o meu desespero\n' +
        'era grande, e eu jurava matal-os a ambos, ora de golpe, ora devagar,\n' +
        'para dividir pelo tempo da morte todas os minutos da vida embaçada\n' +
        'e agoniada. Quando, porém, tornava a casa e via no alto da escada a\n' +
        'creaturinha que me queria e esperava, ficava desarmado e differia o\n' +
        'castigo de um dia para outro.\n' +
        '\n' +
        'O que se passava entre mim e Capitú naquelles dias sombrios, não se\n' +
        'notará aqui, por ser tão miudo e repetido, e já tão tarde que não\n' +
        'se poderá dizel-o sem falha nem canceira. Mas o principal irá. E o\n' +
        'principal é que os nossos temporaes eram agora continuos e terriveis.\n' +
        'Antes de descoberta aquella má terra da verdade, tivemos outros de\n' +
        'pouca dura; não tardava que o ceu se fizesse azul, o sol claro e o mar\n' +
        'chão, por onde abríamos novamente as velas que nos levavam ás ilhas e\n' +
        'costas mais bellas do universo, até que outro pé de vento desbaratava\n' +
        'tudo, e nós, postos á capa, esperavamos outra bonança, que não era\n' +
        'tardia nem dubia, antes total, proxima e firme.\n' +
        '\n' +
        'Releva-me estas metaphoras; cheiram ao mar e á maré que deram morte ao\n' +
        'meu amigo e comborço Escobar. Cheiram tambem aos olhos de ressaca de\n' +
        'Capitú. Assim, posto sempre fosse homem de terra, conto aquella parte\n' +
        'da minha vida, como um marujo contaria o seu naufragio.\n' +
        '\n' +
        'Já entre nós só faltava dizer a palavra ultima; nós a liamos, porém,\n' +
        'nos olhos um do outro, vibrante e decisiva, e sempre que Ezequiel vinha\n' +
        'para nós não fazia mais que separar-nos. Capitú propoz mettel-o em um\n' +
        'collegio, donde só viesse aos sabbados; custou muito ao menino acceitar\n' +
        'esta situação.\n' +
        '\n' +
        '--Quero ir com papae! Papae ha de ir commigo! bradava elle.\n' +
        '\n' +
        'Fui eu mesmo que o levei um dia de manhã, uma segunda feira. Era no\n' +
        'antigo largo da Lapa, perto da nossa casa. Levei-o a pé, pela mão, como\n' +
        'levára o ataúde do outro. O pequeno ia chorando e fazendo perguntas a\n' +
        'cada passo, se voltaria para casa, e quando, e se eu iria vel-o...\n' +
        '\n' +
        '--Vou.\n' +
        '\n' +
        '--Papae não vae!\n' +
        '\n' +
        '--Vou sim.\n' +
        '\n' +
        '--Jura, papae!\n' +
        '\n' +
        '--Pois sim.\n' +
        '\n' +
        '--Papae não diz que jura.\n' +
        '\n' +
        '--Pois juro.\n' +
        '\n' +
        'E lá o levei e deixei. A ausencia temporaria não atalhou o mal, e toda\n' +
        'a arte fina de Capitú para fazel-o attenuar, ao menos, foi como se\n' +
        'não fosse; eu sentia-me cada vez peor. A mesma situação nova aggravou\n' +
        'a minha paixão. Ezequiel vivia agora mais fóra da minha vista; mas a\n' +
        'volta delle, ao fim das semanas, ou pelo descostume em que eu ficava,\n' +
        'ou porque o tempo fosse andando e completando a semelhança, era a\n' +
        'volta de Escobar mais vivo e ruidoso. Até a voz; dentro de pouco, já\n' +
        'me parecia a mesma. Aos sabbados, buscava não jantar em casa e só\n' +
        'entrar quando elle estivesse dormindo; mas não escapava ao domingo, no\n' +
        'gabinete, quando eu me achava entre jornaes e autos. Ezequiel entrava\n' +
        'turbulento, expansivo, cheio de riso e de amor, porque o demo do\n' +
        'pequeno cada vez morria mais por mim. Eu, a falar verdade, sentia agora\n' +
        'uma aversão que mal podia disfarçar, tanto a ella como aos outros. Não\n' +
        'podendo encobrir inteiramente esta disposição moral, cuidava de me\n' +
        'não fazer encontradiço com elle, ou só o menos que pudesse; ora tinha\n' +
        'trabalho que me obrigava a fechar o gabinete, ora saía ao domingo para\n' +
        'ir passear pela cidade o arrebaldes o meu mal secreto.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'CXXXIII\n' +
        '\n' +
        'Uma ideia.\n' +
        '\n' +
        'Um dia,--era uma sexta feira,--não pude mais. Certa ideia, que\n' +
        'negrejava em mim, abriu as azas e entrou a batel-as de um lado para\n' +
        'outro, como fazem as ideias que querem sair. O ser sexta-feira creio\n' +
        'que foi acaso, mas tambem póde ter sido proposito; fui educado no\n' +
        'terror daquelle dia; ouvi cantar balladas em casa, vindas da roça e\n' +
        'da antiga metropole, nas quaes a sexta-feira era o dia de agouro.\n' +
        'Entretanto, não havendo almanaks no cerebro, é provavel que a ideia\n' +
        'não batesse as azas senão pela necessidade que sentia do vir ao ar e\n' +
        'á vida. A vida é tão bella que a mesma ideia da morte precisa de vir\n' +
        'primeiro a ella, antes de se ver cumprida. Já me vás entendendo; lê\n' +
        'agora outro capitulo.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'CXXXIV\n' +
        '\n' +
        'O dia de sabbado.\n' +
        '\n' +
        'A ideia saiu finalmente do cerebro. Era noite, e não pude dormir, por\n' +
        'mais que a sacudisse de mim. Tambem nenhuma noite me passou tão curta.\n' +
        'Amanheceu, quando cuidava não ser mais que uma ou duas horas. Sai,\n' +
        'suppondo deixar a ideia em casa; ella veiu commigo. Cá fóra tinha a\n' +
        'mesma côr escura, as mesmas azas trepidas, e posto avoasse com ellas,\n' +
        'era como se fosse fixa; eu a levava na retina, não que me encobrisse as\n' +
        'cousas externas, mas via-as atra vez della, com a côr mais pallida que\n' +
        'de costume, e sem se demorarem nada.\n' +
        '\n' +
        'Não me lembra bem o resto do dia. Sei que escrevi algumas cartas,\n' +
        'comprei uma substancia, que não digo, para não espertar o desejo de\n' +
        'proval-a. A pharmacia falliu, é verdade; o dono fez-se banqueiro, e\n' +
        'o banco prospera. Quando me achei com a morte no bolso senti tamanha\n' +
        'alegria como se acabasse de tirar a sorte grande, ou ainda maior,\n' +
        'porque o premio da loteria gasta-se, e a morte não se gasta. Fui a\n' +
        'casa de minha mãe, com o fim de despedir-me, a titulo de visita. Ou de\n' +
        'verdade ou por illusão, tudo alli me pareceu melhor nesse dia, minha\n' +
        'mãe menos triste, tio Cosme esquecido do coração, prima Justina da\n' +
        'lingua. Passei uma hora em paz. Cheguei a abrir mão do projecto. Que\n' +
        'era preciso para viver? Nunca mais deixar aquella casa, ou prender\n' +
        'aquella hora a mim mesmo...\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'CXXXV\n' +
        '\n' +
        'Othello.\n' +
        '\n' +
        'Jantei fóra. De noite fui ao theatro. Representava-se justamente\n' +
        '_Othello_, que eu não vira nem lera nunca; sabia apenas o assumpto,\n' +
        'e estimei a coincidencia. Vi as grandes raivas do mouro, por causa\n' +
        'de um lenço,--um simples lenço!--e aqui dou materia á meditação dos\n' +
        'psychologos deste e de outros continentes, pois não me pude furtar á\n' +
        'observação de que um lenço bastou a accender os ciumes de Othello e\n' +
        'compor a mais sublime tragedia deste mundo. Os lenços perderam-se, hoje\n' +
        'são precisos os proprios lençóes; alguma vez nem lençóes ha, e valem\n' +
        'só as camisas. Taes eram as ideias que me iam passando pela cabeça,\n' +
        'vagas e turvas, á medida que o mouro rolava convulso, e Iago distilava\n' +
        'a sua calumnia. Nos intervallos não me levantava da cadeira; não queria\n' +
        'expôr-me a encontrar algum conhecido. As senhoras ficavam quasi todas\n' +
        'nos camarotes, emquanto os homens iam fumar. Então eu perguntava a\n' +
        'mim mesmo se alguma daquellas não teria amado alguem que jazesse agora\n' +
        'no cemiterio, e vinham outras incoherencias, até que o panno subia e\n' +
        'continuava a peça. O ultimo acto mostrou-me que não eu, mas Capitú\n' +
        'devia morrer. Ouvi as supplicas de Desdemona, as suas palavras amorosas\n' +
        'e puras, e a furia do mouro, e a morte que este lhe deu entre applausos\n' +
        'freneticos do publico.\n' +
        '\n' +
        '--E era innocente, vinha eu dizendo rua abaixo;--que faria o publico,\n' +
        'se ella devéras fosse culpada, tão culpada como Capitú? E que morte lhe\n' +
        'daria o mouro? Um travesseiro não bastaria; era preciso sangue e fogo,\n' +
        'um fogo intenso e vasto, que a consumisse de todo, e a reduzisse a pó,\n' +
        'e o pó seria lançado ao vento, como eterna extincção...\n' +
        '\n' +
        'Vaguei pelas ruas o resto da noite. Ceei, é verdade, um quasi nada,\n' +
        'mas o bastante para ir até á manhã. Vi as ultimas horas da noite e\n' +
        'as primeiras do dia, vi os derradeiros passeadores e os primeiros\n' +
        'varredores, as primeiras carroças, os primeiros ruidos, os primeiros\n' +
        'albores, um dia que vinha depois do outro e me veria ir para nunca mais\n' +
        'voltar. As ruas que eu andava como que me fugiam por si mesmas. Não\n' +
        'tornaria a contemplar o mar da Gloria, nem a serra dos Orgãos, nem a\n' +
        'fortaleza de Santa-Cruz e as outras. A gente que passava não era tanta,\n' +
        'como nos dias communs da semana, mas era já numerosa e ia a algum\n' +
        'trabalho, que repetiria depois; eu é que não repetiria mais nada.\n' +
        '\n' +
        'Cheguei a casa, abri a porta devagarinho, subi pé ante-pé, e metti-me\n' +
        'no gabinete; iam dar seis horas. Tirei o veneno do bolso, fiquei em\n' +
        'mangas de camisa, e escrevi ainda uma carta, a ultima, dirigida a\n' +
        'Capitú. Nenhuma das outras era para ella; senti necessidade de lhe\n' +
        'dizer uma palavra em que lhe ficasse o remorso da minha morte. Escrevi\n' +
        'dous textos. O primeiro queimei-o por ser longo e diffuso. O segundo\n' +
        'continha só o necessário, claro e breve. Não lhe lembrava o nosso\n' +
        'passado, nem as lutas havidas, nem alegria alguma; falava-lhe só de\n' +
        'Escobar e da necessidade de morrer.\n'
    },
    {
      src: '/assets/audio/domcasmurro28.mp3',
      titulo: 'Seção 28',
      subtitulo: 'Capítulos CXXXVI ao CXL',
      leitor: 'Marina Fikota',
      numeroSecao: 28,
      texto: '/assets/texts/secao28.txt',
      tempo: '13min',
      capitulo: 'CXXXVI\n' +
        '\n' +
        'A chicara de café.\n' +
        '\n' +
        'O meu plano foi esperar o café, dissolver nelle a droga e ingeril-a.\n' +
        'Até lá, não tendo esquecido de todo a minha historia romana, lembrou-me\n' +
        'que Catão, antes de se matar, leu e releu um livro de Platão. Não tinha\n' +
        'Platão commigo; mas um tomo truncado de Plutarcho, em que era narrada\n' +
        'a vida do celebre romano, bastou-me a occupar aquelle pouco tempo, e,\n' +
        'para em tudo imital-o, estirei-me no canapé. Nem era só imital-o nisso;\n' +
        'tinha necessidade de incutir em mim a coragem delle, assim como elle\n' +
        'precisára dos sentimentos do philosopho, para intrepidamente morrer. Um\n' +
        'dos males da ignorancia é não ter este remedio á ultima hora. Ha muita\n' +
        'gente que se mata sem elle, e nobremente expira; mas estou que muita\n' +
        'mais gente poria termo aos seus dias, se pudesse achar essa especie de\n' +
        'cocaina moral dos bons livros. Entretanto, querendo fugir a qualquer\n' +
        'suspeita de imitação, lembra-me bem que, para não ser encontrado ao pé\n' +
        'de mim o livro de Plutarcho, nem ser dada a noticia nas gazetas com a\n' +
        'da côr das calças que eu então vestia, assentei de pôl-o novamente no\n' +
        'seu logar, antes de beber o veneno.\n' +
        '\n' +
        'O copeiro trouxe o café. Ergui-me, guardei o livro, e fui para a\n' +
        'mesa onde ficára a chicara. Já a casa estava em rumores; era tempo\n' +
        'de acabar commigo. A mão tremeu-me ao abrir o papel em que trazia a\n' +
        'droga embrulhada. Ainda assim tive animo de despejar a substancia\n' +
        'na chicara, e comecei a mexer o café, os olhos vagos, a memoria em\n' +
        'Desdemona innocente; o espectaculo da vespera vinha intrometter-se na\n' +
        'realidade da manhã. Mas a photographia de Escobar deu-me o animo que me\n' +
        'ia faltando; lá estava elle, com a mão nas costas da cadeira, a olhar\n' +
        'ao longe...\n' +
        '\n' +
        '--Acabemos com isto, pensei.\n' +
        '\n' +
        'Quando ia a beber, cogitei se não seria melhor esperar que Capitú e o\n' +
        'filho saissem para a missa; beberia depois; era melhor. Assim disposto,\n' +
        'entrei a passear no gabinete. Ouvi a voz de Ezequiel no corredor, vi-o\n' +
        'entrar e correr a mim bradando:\n' +
        '\n' +
        '--Papae! papae!\n' +
        '\n' +
        'Leitor, houve aqui um gesto que eu não descrevo por havel-o\n' +
        'inteiramente esquecido, mas crê que foi bello e tragico.\n' +
        'Effectivamente, a figura do pequeno fez-me recuar até dar de costas na\n' +
        'estante. Ezequiel abraçou-me os joelhos, esticou-se na ponta dos pés,\n' +
        'como querendo subir e dar-me o beijo do costume; e repetia, puxando-me:\n' +
        '\n' +
        '--Papae! papae!\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'CXXXVII\n' +
        '\n' +
        'Segundo impulso.\n' +
        '\n' +
        'Se eu não olhasse para Ezequiel, é provavel que não estivesse aqui\n' +
        'escrevendo este livro, porque o meu primeiro impeto foi correr ao café\n' +
        'e bebel-o. Cheguei a pegar na chicara, mas o pequeno beijava-me a mão,\n' +
        'como de costume, e a vista delle, como o gesto, deu-me outro impulso\n' +
        'que me custa dizer aqui; mas vã lá, diga-se tudo. Chamem-me embora\n' +
        'assassino; não serei eu que os desdiga ou contradiga; o meu segundo\n' +
        'impulso foi criminoso. Inclinei-me e perguntei a Ezequiel se já tomára\n' +
        'café.\n' +
        '\n' +
        '--Já, papae; vou á missa com mamãe.\n' +
        '\n' +
        '--Toma outra chicara, meia chicara só.\n' +
        '\n' +
        '--E papae?\n' +
        '\n' +
        '--Eu mando vir mais; anda, bebe!\n' +
        '\n' +
        'Ezequiel abriu a boca. Cheguei-lhe a chicara, tão tremulo que quasi a\n' +
        'entornei, mas disposto a fazel-a cair pela guela abaixo, caso o sabor\n' +
        'lhe repugnasse, ou a temperatura, porque o café estava frio... Mas não\n' +
        'sei que senti que me fez recuar. Puz a chicara em cima da mesa, e dei\n' +
        'por mim a beijar doudamente a cabeça do menino.\n' +
        '\n' +
        '--Papae papae! exclamava Ezequiel.\n' +
        '\n' +
        '--Não, não, eu não sou teu pae!\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'CXXXVIII\n' +
        '\n' +
        'Capitú que entra.\n' +
        '\n' +
        'Quando levantei a cabeça, dei com a figura de Capitú deante de mim.\n' +
        'Eis ahi outro lance, que parecerá de theatro, e é tão natural como o\n' +
        'primeiro, uma vez que a mãe e o filho iam á missa, e Capitú não saía\n' +
        'sem falar-me. Era já um falar secco e breve; a mór parte das vezes, eu\n' +
        'nem olhava para ella. Ella olhava sempre, esperando.\n' +
        '\n' +
        'Desta vez, ao dar com ella, não sei se era dos meus olhos, mas Capitú\n' +
        'pareceu-me livida. Seguiu-se um daquelles silencios, a que, sem mentir,\n' +
        'se pódem chamar de um seculo, tal é a extensão do tempo nas grandes\n' +
        'crises. Capitú recompoz-se; disse ao filho que se fosse embora, e\n' +
        'pediu-me que lhe explicasse...\n' +
        '\n' +
        '--Não ha que explicar, disse eu.\n' +
        '\n' +
        '--Ha tudo; não entendo as tuas lagrimas nem as de Ezequiel. Que houve\n' +
        'entre vocês?\n' +
        '\n' +
        '--Não ouviu o que lhe disse?\n' +
        '\n' +
        'Capitú respondeu que ouvira choro e rumor de palavras. Eu creio que\n' +
        'ouvira tudo claramente, mas confessal-o seria perder a esperança do\n' +
        'silencio e da reconciliação; por isso negou a audiencia e confirmou\n' +
        'unicamente a vista. Sem lhe contar o episodio do café, repeti-lhe as\n' +
        'palavras do final do capitulo.\n' +
        '\n' +
        '--O que? perguntou ella como se ouvira mal.\n' +
        '\n' +
        '--Que não é meu filho.\n' +
        '\n' +
        'Grande foi a estupefacção de Capitú, e não menor a indignação que\n' +
        'lhe succedeu, tão naturaes ambas que fariam duvidar as primeiras\n' +
        'testemunhas de vista do nosso fôro. Já** ouvi que as ha para varios\n' +
        'casos, questão de preço; eu não creio, tanto mais que a pessoa que me\n' +
        'contou isto acabava de perder uma demanda. Mas, haja ou não testemunhas\n' +
        'alugadas, a minha era verdadeira; a propria natureza jurava por si, e\n' +
        'eu não queria duvidar della. Assim que, sem attender á linguagem de\n' +
        'Capitú, aos seus gestos, á dôr que a retorcia, a cousa nenhuma, repeti\n' +
        'as palavras ditas duas vezes com tal resolução que a fizeram afrouxar.\n' +
        'Após alguns instantes, disse-me ella:\n' +
        '\n' +
        '--Só se póde explicar tal injuria pela convicção sincera; entretanto,\n' +
        'você que era tão cioso dos menores gestos, nunca revelou a menor sombra\n' +
        'de desconfiança. Que é que lhe deu tal ideia? Diga,--continuou vendo\n' +
        'que eu não respondia nada,--diga tudo; depois do que ouvi, posso ouvir\n' +
        'o resto, não póde ser muito. Que é que lhe deu agora tal convicção?\n' +
        'Ande, Bentinho, fale! fale! Despeça-me d\'aqui, mas diga tudo primeiro.\n' +
        '\n' +
        '--Ha cousas que se não dizem.\n' +
        '\n' +
        '--Que se não dizem só metade; mas já que disse metade, diga tudo.\n' +
        '\n' +
        'Tinha-se sentado n\'uma cadeira ao pé da mesa. Podia estar um tanto\n' +
        'confusa, o porte não era de accusada. Pedi-lhe ainda uma vez que não\n' +
        'teimasse.\n' +
        '\n' +
        '--Não, Bentinho, ou conte o resto, para que eu me defenda, se você acha\n' +
        'que tenho defesa, ou peço-lhe desde já a nossa separação: não posso\n' +
        'mais!\n' +
        '\n' +
        '--A separação é cousa decidida, redargui pegando-lhe na proposta. Era\n' +
        'melhor que a fizessemos por meias palavras ou em silencio; cada um iria\n' +
        'com a sua ferida. Uma vez, porém, que a senhora insiste, aqui vae o que\n' +
        'lhe posso dizer, e é tudo.\n' +
        '\n' +
        'Não disse tudo; mal pude alludir aos amores de Escobar sem proferir-lhe\n' +
        'o nome. Capitú não poude deixar de rir, de um riso que eu sinto\n' +
        'não poder transcrever aqui; depois, em um tom juntamente ironico e\n' +
        'melancolico:\n' +
        '\n' +
        '--Pois até os defunctos! Nem os mortos escapam aos seus ciumes!\n' +
        '\n' +
        'Concertou a capinha e ergueu-se. Suspirou, creio que suspirou, emquanto\n' +
        'eu, que não pedia outra cousa mais que a plena justificação della,\n' +
        'disse-lhe não sei que palavras adequadas a este fim. Capitú olhou para\n' +
        'mim com desdem, e murmurou:\n' +
        '\n' +
        '--Sei a razão disto; é a casualidade da semelhança... A vontade de\n' +
        'Deus explicará tudo... Ri-se? É natural; apesar do seminario, não\n' +
        'acredita em Deus; eu creio... Mas não falemos nisto; não nos fica bem\n' +
        'dizer mais nada.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'CXXXIX\n' +
        '\n' +
        'A photographia.\n' +
        '\n' +
        'Palavra que estive a pique de crer que era victima de uma grande\n' +
        'illusão, uma phantasmagoria de allucinado; mas a entrada repentina de\n' +
        'Ezequiel, gritando:--«Mamãe! mamãe! é hora da missa!» restituiu-me\n' +
        'á consciencia da realidade. Capitú e eu, involuntariamente, olhámos\n' +
        'para a photographia de Escobar, e depois um para o outro. Desta vez\n' +
        'a confusão della fez-se confissão pura. Este era aquelle; havia por\n' +
        'força alguma photographia de Escobar pequeno que seria o nosso pequeno\n' +
        'Ezequiel. De bocca, porém, não confessou nada; repetiu as ultimas\n' +
        'palavras, puxou do filho e sairam para a missa.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'CXL\n' +
        '\n' +
        'Volta da egreja.\n' +
        '\n' +
        'Ficando só, era natural pegar do café e bebel-o. Pois, não, senhor;\n' +
        'tinha perdido o gosto á morte. A morte era uma solução; eu acabava de\n' +
        'achar outra, tanto melhor quanto que não era definitiva, e deixava\n' +
        'a porta aberta á reparação, se devesse havel-a. Não disse _perdão_,\n' +
        'mas _reparação_, isto é, justiça. Qualquer que fosse a razão do acto,\n' +
        'rejeitei a morte, e esperei o regresso de Capitú. Este foi mais\n' +
        'demorado que de costume; cheguei a temer que ella houvesse ido á casa\n' +
        'de minha mãe, mas não foi.\n' +
        '\n' +
        '--Confiei a Deus todas as minhas amarguras, disse-me Capitú ao voltar\n' +
        'da egreja; ouvi dentro de mim que a nossa separação é indispensavel, e\n' +
        'estou ás suas ordens.\n' +
        '\n' +
        'Os olhos com que me disse isto eram embuçados, como espreitando um\n' +
        'gesto de recusa ou de espera. Contava com a minha debilidade ou com\n' +
        'a propria incerteza em que eu podia estar da paternidade do outro,\n' +
        'mas falhou tudo. Acaso haveria em mim um homem novo, um que apparecia\n' +
        'agora, desde que impressões novas e fortes o descobriam? Nesse caso era\n' +
        'um homem apenas encoberto. Respondi-lhe que ia pensar, e fariamos o que\n' +
        'eu pensasse. Em verdade vos digo que tudo estava pensado e feito.\n' +
        '\n' +
        'No intervallo, evocára as palavras do finado Gurgel, quando me\n' +
        'mostrou em casa delle o retrato da mulher, parecido com Capitú. Has\n' +
        'de lembrar-te dellas; se não, relê o capitulo, cujo numero não ponho\n' +
        'aqui, por não me lembrar já qual seja, mas não fica longe. Reduzem-se\n' +
        'a dizer que ha taes semelhanças inexplicaveis... Pelo dia adeante, e\n' +
        'nos outros dias, Ezequiel ia ter commigo ao gabinete, e as feições\n' +
        'do pequeno davam ideia clara das do outro, ou eu ia attentando\n' +
        'mais nellas. De envolta, lembravam-me episodios vagos e remotos,\n' +
        'palavras, encontros e incidentes, tudo em que a minha cegueira não\n' +
        'poz malicia, e a que faltou o meu velho ciume. Uma vez em que os fui\n' +
        'achar sósinhos e calados, um segredo que me fez rir, uma palavra\n' +
        'della sonhando, todas essas reminiscencias vieram vindo agora, em tal\n' +
        'atropello que me atordoaram... E porque os não esganei um dia, quando\n' +
        'desviei os olhos da rua onde estavam duas andorinhas trepadas no fio\n' +
        'telegraphico? Dentro, as minhas outras andorinhas estavam trepadas no\n' +
        'ar, os olhos enfiados nos olhos, mas tão cautelosos que se desenfiaram\n' +
        'logo, dizendo-me uma palavra amiga e alegre. Contei-lhes o namoro\n' +
        'das andorinhas de fóra, e acharam-lhe graça; Escobar declarou que,\n' +
        'para elle, seria melhor se as andorinhas, em vez de trepadas no fio\n' +
        'de arame, estivessem á mesa do jantar cosidas. «Nunca comi os ninhos\n' +
        'dellas, continuou, mas devem ser bons, se os chins os inventaram.» E\n' +
        'ficámos a tratar dos chins e dos classicos que falaram delles, emquanto\n' +
        'Capitú, confessando que a aborreciamos, foi a outros cuidados. Agora\n' +
        'lembrava-me tudo o que então me pareceu nada.\n'
    },
    {
      src: '/assets/audio/domcasmurro29.mp3',
      titulo: 'Seção 29',
      subtitulo: 'Capítulos CXLI ao CXLV',
      leitor: 'Rachel Moraes',
      numeroSecao: 29,
      texto: '/assets/texts/secao29.txt',
      tempo: '16min',
      capitulo: 'CXLI\n' +
        '\n' +
        'A solução.\n' +
        '\n' +
        'Aqui está o que fizemos. Pegámos em nós e fomos para a Europa,\n' +
        'não passear, nem ver nada, novo nem velho; parámos na Suissa. Uma\n' +
        'professora do Rio-Grande, que foi comnosco, ficou de companhia a\n' +
        'Capitú, ensinando a lingua materna a Ezequiel, que apprenderia o resto\n' +
        'nas escolas do paiz. Assim regulada a vida, tornei ao Brazil.\n' +
        '\n' +
        'Ao cabo de alguns mezes, Capitú começára a escrever-me cartas, a que\n' +
        'respondi com brevidade e sequidão. As della eram submissas, sem odio,\n' +
        'acaso affectuosas, e para o fim saudosas; pedia-me que a fosse ver.\n' +
        'Embarquei um anno depois, mas não a procurei, e repeti a viagem com o\n' +
        'mesmo resultado. Na volta, os que se lembravam della, queriam noticias,\n' +
        'e eu dava-lh\'as, como se acabasse de viver com ella; naturalmente as\n' +
        'viagens eram feitas com o intuito de simular isto mesmo, e enganar a\n' +
        'opinião. Um dia, finalmente...\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'CXLII\n' +
        '\n' +
        'Uma santa.\n' +
        '\n' +
        'Entenda-se que, se nas viagens que fiz á Europa, José Dias não foi\n' +
        'commigo, não é que lhe faltasse vontade; ficava de companhia a tio\n' +
        'Cosme, quasi invalido, e a minha mãe, que envelheceu depressa. Tambem\n' +
        'elle estava velho, posto que rijo. Ia a bordo despedir-se de mim, e\n' +
        'as palavras que me dizia, os gestos de lenço, os proprios olhos que\n' +
        'enxugava eram taes que me commoviam tambem. A ultima vez não foi o\n' +
        'bordo.\n' +
        '\n' +
        '--Venha...\n' +
        '\n' +
        '--Não posso.\n' +
        '\n' +
        '--Está com medo?\n' +
        '\n' +
        '--Não; não posso. Agora, adeus, Bentinho, não sei sé me verá mais;\n' +
        'creio que vou para a outra Europa, a eterna...\n' +
        '\n' +
        'Não foi logo; minha mãe embarcou primeiro. Procura no cemiterio de S.\n' +
        'João Baptista uma sepultura sem nome, com esta unica indicação: _Uma\n' +
        'santa._ É ahi. Fiz fazer essa inscripção com alguma difficuldade. O\n' +
        'esculptor achou-a exquisita; o administrador do cemiterio consultou o\n' +
        'vigario da parochia; este ponderou-me que as santas estão no altar e no\n' +
        'ceu.\n' +
        '\n' +
        '--Mas, perdão, atalhei, eu não quero dizer que naquella sepultura está\n' +
        'uma canonisada. A minha ideia é dar com tal palavra uma definição\n' +
        'terrena de todas as virtudes que a finada possuiu na vida. Tanto é\n' +
        'assim que, sendo a modestia uma dellas, desejo conserval-a postuma, não\n' +
        'lhe escrevendo o nome.\n' +
        '\n' +
        '--Todavia, o nome, afiliação, as datas...\n' +
        '\n' +
        '--Quem lhe importará com datas, filiação, nem nomes, depois que eu\n' +
        'acabar?\n' +
        '\n' +
        '--Quer dizer que era uma santa senhora, não?\n' +
        '\n' +
        '--Justamente. O protonotario Cabral, se fosse vivo, confirmaria aqui o\n' +
        'que lhe digo.\n' +
        '\n' +
        '--Nem eu contesto a verdade, hesito só na formula. Conheceu então o\n' +
        'protonotario?\n' +
        '\n' +
        '--Conheci-o. Era um padre-modelo.\n' +
        '\n' +
        '--Bom canonista, bom latinista, pio e caridoso, continuou o vigário.\n' +
        '\n' +
        '--E possuia algumas prendas de sociedade, disse eu; lá em casa sempre\n' +
        'ouvi que era insigne parceiro ao gamão...\n' +
        '\n' +
        '--Tinha muito bom dado! suspirou lentamente o vigario. Um dado de\n' +
        'mestre!\n' +
        '\n' +
        '--Então, parece-lhe...?\n' +
        '\n' +
        '--Uma vez que não ha outro sentido, nem poderia havel-o, sim, senhor,\n' +
        'admitte-se...\n' +
        '\n' +
        'José Dias assistiu a estas diligencias, com grande melancolia. No fim,\n' +
        'quando saimos, disse mal do padre, chamou-lhe meticuloso. Só lhe achava\n' +
        'desculpa por não ter conhecido minha mãe, nem elle nem os outros homens\n' +
        'do cemiterio.\n' +
        '\n' +
        '--Não a conheceram; se a conhecessem, mandariam esculpir _santissima._\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'CXLIII\n' +
        '\n' +
        'O ultimo superlativo.\n' +
        '\n' +
        'Não foi o ultimo superlativo de José Dias. Outros teve que não vale\n' +
        'a pena escrever aqui, até que veiu o ultimo, o melhor delles, o mais\n' +
        'doce, o que lhe fez da morte um pedaço de vida. Já então morava\n' +
        'commigo; posto que minha mãe lhe deixasse uma pequena lembrança, veiu\n' +
        'dizer-me que, com legado ou sem elle, não se separaria de mim. Talvez a\n' +
        'esperança delle fosse enterrar-me. Correspondia-se com Capitú, a quem\n' +
        'pedia que lhe mandasse o retrato de Ezequiel; mas Capitú ia adiando a\n' +
        'remessa de correio a correio, até que elle não pediu mais nada, a não\n' +
        'ser o coração do joven estudante; pedia-lhe tambem que não deixasse de\n' +
        'falar a Ezequiel no velho amigo do pae e do avô, «destinado pelo ceu\n' +
        'a amar o mesmo sangue.» Era assim que elle preparava os cuidados da\n' +
        'terceira geração; mas a morte veiu antes de Ezequiel. A doença foi\n' +
        'rapida. Mandei chamar um medico homeopatha.\n' +
        '\n' +
        '--Não, Bentinho, disse elle; basta um allopatha; em todas as escolas se\n' +
        'morre. Demais, foram ideias da mocidade, que o tempo levou; converto-me\n' +
        'á fé de meus paes. A allopathia é o catholicismo da medicina...\n' +
        '\n' +
        'Morreu sereno, após uma agonia curta. Pouco antes ouviu que o ceu\n' +
        'estava lindo, e pediu que abrissemos a janella.\n' +
        '\n' +
        '--Não, o ar póde fazer-lhe mal.\n' +
        '\n' +
        '--Que mal? Ar é vida.\n' +
        '\n' +
        'Abrimos a janella. Realmente, estava um ceu azul e claro. José Dias\n' +
        'soergueu-se e olhou para fóra; após alguns instantes, deixou cair a\n' +
        'cabeça, murmurando: Lindissimo! Foi a ultima palavra que proferiu neste\n' +
        'mundo. Pobre José Dias! Porque hei de negar que chorei por elle?\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'CXLIV\n' +
        '\n' +
        'Uma pergunta tardia.\n' +
        '\n' +
        'Assim chorem por mim todos os olhos de amigos e amigas que deixo neste\n' +
        'mundo, mas não é provavel. Tenho-me feito esquecer. Móro longe e saio\n' +
        'pouco. Não é que haja effectivamente ligado as duas pontas da vida.\n' +
        'Esta casa do Engenho Novo, comquanto reproduza a de Matacavallos,\n' +
        'apenas me lembra aquella, e mais por effeito de comparação e de\n' +
        'reflexão que de sentimento. Já disse isto mesmo.\n' +
        '\n' +
        'Hão de perguntar-me por que razão, tendo a propria casa velha, na mesma\n' +
        'rua antiga, não impedi que a demolissem e vim reproduzil-a nesta. A\n' +
        'pergunta devia ser feita a principio, mas aqui vae a resposta. A razão\n' +
        'é que, logo que minha mãe morreu, querendo ir para lá, fiz primeiro\n' +
        'uma longa visita de inspecção por alguns dias, e toda a casa me\n' +
        'desconheceu. No quintal a aroeira e a pitangueira, o poço, a caçamba\n' +
        'velha e o lavadouro, nada sabia de mim. A casuarina era a mesma que eu\n' +
        'deixara ao fundo, mas o tronco, em vez de recto, como outr\'ora, tinha\n' +
        'agora um ar de ponto de interrogação; naturalmente pasmava do intruso.\n' +
        'Corri os olhos pelo ar, buscando algum pensamento que alli deixasse, e\n' +
        'não achei nenhum. Ao contrario, a ramagem começou a sussurrar alguma\n' +
        'cousa que não entendi logo, e parece que era a cantiga das manhãs\n' +
        'novas. Ao pé dessa musica sonora e jovial, ouvi tambem o grunhir dos\n' +
        'porcos, especie de troça concentrada e philosophica.\n' +
        '\n' +
        'Tudo me era extranho e adverso. Deixei que demolissem a casa, e,\n' +
        'mais tarde, quando vim para o Engenho Novo, lembrou-me fazer esta\n' +
        'reproducção por explicações que dei ao architecto segundo contei em\n' +
        'tempo.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'CXLV\n' +
        '\n' +
        'O regresso.\n' +
        '\n' +
        'Ora, foi já nesta casa que um dia, estando a vestir-me para almoçar,\n' +
        'recebi um cartão com este nome:\n' +
        '\n' +
        '     EZEQUIEL A. DE SANTIAGO\n' +
        '\n' +
        '--A pessoa está ahi? perguntei ao criado.\n' +
        '\n' +
        '--Sim, senhor; ficou esperando.\n' +
        '\n' +
        'Não fui logo, logo; fil-o esperar um dez ou quinze minutos na sala.\n' +
        'Só depois é que me lembrou que cumpria ter certo alvoroço e correr,\n' +
        'abraçal-o, falar-lhe na mãe. A mãe,--creio que ainda não disse que\n' +
        'estava morta e enterrada. Estava; lá repousa na velha Suissa. Acabei de\n' +
        'vestir-me ás pressas. Quando saí do quarto, tomei ares de pae, um pae\n' +
        'entre manso e crespo, metade Dom Casmurro. Ao entrar na sala, dei com\n' +
        'um rapaz, de costas, mirando o busto de Massinissa, pintado na parede.\n' +
        'Vim cauteloso, e não fiz rumor. Não obstante, ouviu-me os passos, e\n' +
        'voltou-se depressa. Conheceu-me pelos retratos e correu para mim. Não\n' +
        'me mexi; era nem mais nem menos o meu antigo e joven companheiro do\n' +
        'seminario de S. José, um pouco mais baixo, menos cheio de corpo, e,\n' +
        'salvo as cores, que eram vivas, o mesmo rosto do meu amigo. Trajava á\n' +
        'moderna, naturalmente, e as maneiras eram differentes, mas o aspecto\n' +
        'geral reproduzia a pessoa morta. Era o proprio, o exacto, o verdadeiro\n' +
        'Escobar. Era o meu comborço; era o filho de seu pae. Vestia de luto\n' +
        'pela mãe; eu tambem estava de preto. Sentámo-nos.\n' +
        '\n' +
        '--Papae não faz differença dos ultimos retratos, disse-me elle.\n' +
        '\n' +
        'A voz era a mesma de Escobar, o sotaque era afrancezado. Expliquei-lhe\n' +
        'que realmente pouco diferia do que era, e comecei um interrogatorio\n' +
        'para ter menos que falar e dominar assim a minha emoção. Mas isto mesmo\n' +
        'dava animação á cara delle, e o meu collega do seminario ia resurgindo\n' +
        'cada vez mais do cemiterio. Eil-o aqui, deante de mim, com egual riso\n' +
        'e maior respeito; total, o mesmo obsequio e a mesma graça. Anciava por\n' +
        'ver-me. A mãe falava muito em mim, louvando-me extraordinariamente,\n' +
        'como o homem mais puro do mundo, o mais digno de ser querido.\n' +
        '\n' +
        '--Morreu bonita, concluiu.\n' +
        '\n' +
        '--Vamos almoçar.\n' +
        '\n' +
        'Se pensas que o almoço foi amargo, enganas-te. Teve seus minutos de\n' +
        'aborrecimento, é verdade; a principio doeu-me que Ezequiel não fosse\n' +
        'realmente meu filho, que me não completasse e continuasse. Se o rapaz\n' +
        'tem saido á mae, eu acabava crendo tudo, tanto mais facilmente quanto\n' +
        'que elle parecia haver-me deixado na vespera, evocava a meninice,\n' +
        'scenas e palavras, a ida para o collegio...\n' +
        '\n' +
        '--Papae ainda se lembra quando me levou para o collegio? perguntou\n' +
        'rindo.\n' +
        '\n' +
        '--Pois não hei de lembrar-me?\n' +
        '\n' +
        '--Era na Lapa; eu ia desesperado, e papae não parava, dava-me cada\n' +
        'puxão, e eu com as perninhas.... Sim, senhor, acceito.\n' +
        '\n' +
        'Estendeu o copo ao vinho que eu lhe offerecia, bebeu um gole, e\n' +
        'continuou a comer. Escobar comia assim tambem, com a cara mettida no\n' +
        'prato. Contou-me a vida na Europa, os estudos, particularmente os de\n' +
        'archeologia, que era a sua paixão. Falava da antiguidade com amor,\n' +
        'contava o Egypto e os seus milhares de seculos, sem se perder nos\n' +
        'algarismos; tinha a cabeça arithmetica do pae. Eu, posto que a ideia\n' +
        'da paternidade do outro me estivesse já familiar, não gostava da\n' +
        'resurreição. Ás vezes, fechava os olhos para não ver gestos nem nada,\n' +
        'mas o diabrete falava e ria, e o defuncto falava e ria por elle.\n' +
        '\n' +
        'Não havendo remedio senão ficar com elle, fiz-me pae deveras. A ideia\n' +
        'de que pudesse ter visto alguma photographia de Escobar, que Capitú por\n' +
        'descuido levasse comsigo, não me acudiu, nem, se acudisse, persistiria.\n' +
        'Ezequiel cria em mim, como na mãe. Se fosse vivo José Dias, acharia\n' +
        'nelle a minha propria pessoa. Prima Justina quiz vel-o, mas estando\n' +
        'enferma, pediu-me que o levasse lá. Conhecia aquella parenta. Creio que\n' +
        'o desejo de ver Ezequiel era para o fim de verificar no moço o debuxo\n' +
        'que por ventura houvesse achado no menino. Seria um regalo ultimo;\n' +
        'atalhei-o a tempo.\n' +
        '\n' +
        '--Está muito mal, disse eu a Ezequiel que queria ir vel-a, qualquer\n' +
        'emoção póde trazer-lhe a morte. Iremos vel-a, quando ficar melhor.\n' +
        '\n' +
        'Não fomos; a morte levou-a dentro de poucos dias. Ella descança no\n' +
        'Senhor ou como quer que seja. Ezequiel viu-lhe a cara no caixão e não a\n' +
        'conheceu, nem podia, tão outra a fizeram os annos e a morte. No caminho\n' +
        'para o cemiterio, iam-lhe lembrando uma porção de cousas, alguma rua,\n' +
        'alguma torre, um trecho de praia, e era todo alegria. Assim acontecia\n' +
        'sempre que voltava para casa, ao fim do dia; contava-me as recordações\n' +
        'que ia recebendo das ruas e das casas. Admirava-se que muitas destas\n' +
        'fossem as mesmas que elle deixára, como se as casas morressem meninas.\n' +
        '\n' +
        'Ao cabo de seis mezes, Ezequiel falou-me em uma viagem á Grecia, ao\n' +
        'Egypto, e á Palestina, viagem scientifica, promessa feita a alguns\n' +
        'amigos.\n' +
        '\n' +
        '--De que sexo? perguntei rindo.\n' +
        '\n' +
        'Sorriu vexado, e respondeu-me que as mulheres eram creaturas tão\n' +
        'da moda e do dia que nunca haviam de entender uma ruina de trinta\n' +
        'seculos. Eram dous collegas da universidade. Prometti-lhe recursos,\n' +
        'e dei-lhe logo os primeiros dinheiros precisos. Commigo disse que\n' +
        'uma das consequencias dos amores furtivos do pae era pagar eu as\n' +
        'archeologias do filho; antes lhe pagasse a lepra.... Quando esta ideia\n' +
        'me atravessou o cerebro, senti-me tão cruel e perverso que peguei no\n' +
        'rapaz, e quiz apertal-o ao coração, mas recuei; encarei-o depois, como\n' +
        'se faz a um filho de verdade; os olhos que elle me deitou foram ternos\n' +
        'e agradecidos.\n'
    },
    {
      src: '/assets/audio/domcasmurro30.mp3',
      titulo: 'Seção 30',
      subtitulo: 'Capítulos CXLVI ao CXLVIII',
      leitor: 'Lucas Oliveira',
      numeroSecao: 30,
      texto: '/assets/texts/secao30.txt',
      tempo: '5min',
      capitulo: 'CXLVI\n' +
        '\n' +
        'Não houve lepra.\n' +
        '\n' +
        'Não houve lepra, mas ha febres por todas essas terras humanas, sejam\n' +
        'velhas ou novas. Onze mezes depois, Ezequiel morreu de uma febre\n' +
        'typhoide, e foi enterrado nas immediações de Jerusalem, onde os dous\n' +
        'amigos da universidade lhe levantaram um tumulo com esta inscripção,\n' +
        'tirada do propheta Ezequiel, em grego: «Tu eras perfeito nos teus\n' +
        'caminhos.» Mandaram-me ambos os textos, grego e latino, o desenho da\n' +
        'sepultura, a conta das despesas e o resto do dinheiro que elle levava;\n' +
        'pagaria o triplo para não tornar a vel-o.\n' +
        '\n' +
        'Como quizesse verificar o texto, consultei a minha Vulgata, e achei que\n' +
        'era exacto, mas tinha ainda um complemento: «Tu eras perfeito nos teus\n' +
        'caminhos, _desde o dia da tua creação._» Parei e perguntei calado:\n' +
        '«Quando seria o dia da creação de Ezequiel?» Ninguem me respondeu. Eis\n' +
        'ahi mais um mysterio para ajuntar aos tantos deste mundo. Apesar de\n' +
        'tudo, jantei bem e fui ao theatro.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'CXLVII\n' +
        '\n' +
        'A exposição retrospectiva.\n' +
        '\n' +
        'Já sabes que a minha alma, por mais lacerada que tenha sido, não\n' +
        'ficou ahi para um canto como uma flor livida e solitaria. Não lhe dei\n' +
        'essa côr ou descôr. Vivi o melhor que pude, sem me faltarem amigas\n' +
        'que me consolassem da primeira. Caprichos de pouca dura, é verdade.\n' +
        'Ellas é que me deixavam como pessoas que assistem a uma exposição\n' +
        'retrospectiva, e, ou se fartam de vel-a, ou a luz da sala esmorece. Uma\n' +
        'só dessas visitas tinha carro á porta e cocheiro de libré. As outras\n' +
        'iam modestamente, _calcante pede_, e, se chovia, eu é que ia buscar um\n' +
        'carro de praça, e as mettia dentro, com grandes despedidas, e maiores\n' +
        'recommendações:\n' +
        '\n' +
        '--Levas o catalogo?\n' +
        '\n' +
        '--Levo; até amanhã.\n' +
        '\n' +
        '--Até amanhã.\n' +
        '\n' +
        'Não voltavam mais. Eu ficava á porta, esperando, ia até á esquina,\n' +
        'espiava, consultava o relogio, e não via nada nem ninguem. Então, se\n' +
        'apparecia outra visita, dava-lhe o braço, entravamos, mostrava-lhe\n' +
        'as paizagens, os quadros historicos ou de genero, uma aquarella,\n' +
        'um pastel, uma _gouache_, e tambem esta cançava, e ia embora com o\n' +
        'catalogo na mão....\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'CXLVIII\n' +
        '\n' +
        'E bem, e o resto?\n' +
        '\n' +
        'Agora, porque é que nenhuma dessas caprichosas me fez esquecer a\n' +
        'primeira amada do meu coração? Talvez porque nenhuma tinha os olhos\n' +
        'de ressaca, nem os de cigana obliqua e dissimulada. Mas não é este\n' +
        'propriamente o resto do livro. O resto é saber se a Capitú da praia\n' +
        'da Gloria já estava dentro da de Matacavallos, ou se esta foi mudada\n' +
        'naquella por effeito de algum caso incidente. Jesus, filho de Sirach,\n' +
        'se soubesse dos meus primeiros ciumes, dir-me-hia, como no seu cap. IX,\n' +
        'vers. 1: «Não tenhas ciumes de tua mulher para que ella não se metta a\n' +
        'enganar-te com a malicia que apprender de ti.» Mas eu creio que não,\n' +
        'e tu concordarás commigo; se te lembras bem da Capitú menina, has de\n' +
        'reconhecer que uma estava dentro da outra, como a fruta dentro da casca.\n' +
        '\n' +
        'E bem, qualquer que seja a solução, uma cousa fica, e é a summa das\n' +
        'summas, ou o resto dos restos, a saber, que a minha primeira amiga e\n' +
        'o meu maior amigo, tão extremosos ambos e tão queridos tambem, quiz o\n' +
        'destino que acabassem juntando-se e enganando-me.... A terra lhes seja\n' +
        'leve! Vamos á _Historia dos suburbios._\n' +
        '\n' +
        '\n' +
        'FIM\n'
    },
  ];

  getAudios(): AudioData[] {
    return this.audios;
  }

  getCapitulo(index: number): string | null {
    const audioData = this.audios[index];
    if (audioData) {
      return audioData.capitulo;
    }
    return null;
  }

  getNextAudio (numeroSecao: number): AudioData | null {
    if(numeroSecao < this.audios.length) {
      return this.audios[numeroSecao + 1];
    }
    return null;
  }

  getPreviousAudio (numeroSecao: number): AudioData | null {
    if(numeroSecao > 0) {
      return this.audios[numeroSecao - 1];
    }
    return null;
  }

  constructor() { }
}
