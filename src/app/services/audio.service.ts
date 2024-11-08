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
      capitulo: ''
    },
    {
      src: '/assets/audio/domcasmurro05.mp3',
      titulo: 'Seção 5',
      subtitulo: 'Capítulos XXI ao XXV',
      leitor: 'Dey Andriotti',
      numeroSecao: 5,
      texto: '/assets/texts/secao5.txt',
      capitulo: ''
    },
    {
      src: '/assets/audio/domcasmurro06.mp3',
      titulo: 'Seção 6',
      subtitulo: 'Capítulos XXVI ao XXX',
      leitor: 'Rachel Moraes',
      numeroSecao: 6,
      texto: '/assets/texts/secao6.txt',
      capitulo: ''
    },
    {
      src: '/assets/audio/domcasmurro07.mp3',
      titulo: 'Seção 7',
      subtitulo: 'Capítulos XXXI ao XXXV',
      leitor: 'Mayah',
      numeroSecao: 7,
      texto: '/assets/texts/secao7.txt',
      capitulo: ''
    },
    {
      src: '/assets/audio/domcasmurro08.mp3',
      titulo: 'Seção 8',
      subtitulo: 'Capítulos XXXVI ao XL',
      leitor: 'Rachel Moraes',
      numeroSecao: 8,
      texto: '/assets/texts/secao8.txt',
      capitulo: ''
    },
    {
      src: '/assets/audio/domcasmurro09.mp3',
      titulo: 'Seção 9',
      subtitulo: 'Capítulos XLI ao XLV',
      leitor: 'Jane Nogueira',
      numeroSecao: 9,
      texto: '/assets/texts/secao9.txt',
      capitulo: ''
    },
    {
      src: '/assets/audio/domcasmurro10.mp3',
      titulo: 'Seção 10',
      subtitulo: 'Capítulos XLVI ao L',
      leitor: 'Rachel Moraes',
      numeroSecao: 10,
      texto: '/assets/texts/secao10.txt',
      capitulo: ''
    },
    {
      src: '/assets/audio/domcasmurro11.mp3',
      titulo: 'Seção 11',
      subtitulo: 'Capítulos LI ao LV',
      leitor: 'Marina Fikota',
      numeroSecao: 11,
      texto: '/assets/texts/secao11.txt',
      capitulo: ''
    },
    {
      src: '/assets/audio/domcasmurro12.mp3',
      titulo: 'Seção 12',
      subtitulo: 'Capítulos LVI ao LX',
      leitor: 'Mayah',
      numeroSecao: 12,
      texto: '/assets/texts/secao12.txt',
      capitulo: ''
    },
    {
      src: '/assets/audio/domcasmurro13.mp3',
      titulo: 'Seção 13',
      subtitulo: 'Capítulos LXI ao LXV',
      leitor: 'Thiago',
      numeroSecao: 13,
      texto: '/assets/texts/secao13.txt',
      capitulo: ''
    },
    {
      src: '/assets/audio/domcasmurro14.mp3',
      titulo: 'Seção 14',
      subtitulo: 'Capítulos LXVI ao LXX',
      leitor: 'Pier',
      numeroSecao: 14,
      texto: '/assets/texts/secao14.txt',
      capitulo: ''
    },
    {
      src: '/assets/audio/domcasmurro15.mp3',
      titulo: 'Seção 15',
      subtitulo: 'Capítulos LXXI ao LXXV',
      leitor: 'Rachel Moraes',
      numeroSecao: 15,
      texto: '/assets/texts/secao15.txt',
      capitulo: ''
    },
    {
      src: '/assets/audio/domcasmurro16.mp3',
      titulo: 'Seção 16',
      subtitulo: 'Capítulos LXXVI ao LXXX',
      leitor: 'gtavares97',
      numeroSecao: 16,
      texto: '/assets/texts/secao16.txt',
      capitulo: ''
    },
    {
      src: '/assets/audio/domcasmurro17.mp3',
      titulo: 'Seção 17',
      subtitulo: 'Capítulos LXXXI ao LXXXV',
      leitor: 'Maria de Fátima da Silva',
      numeroSecao: 17,
      texto: '/assets/texts/secao17.txt',
      capitulo: ''
    },
    {
      src: '/assets/audio/domcasmurro18.mp3',
      titulo: 'Seção 18',
      subtitulo: 'Capítulos LXXXVI ao XC',
      leitor: 'Maria de Fátima da Silva',
      numeroSecao: 18,
      texto: '/assets/texts/secao18.txt',
      capitulo: ''
    },
    {
      src: '/assets/audio/domcasmurro19.mp3',
      titulo: 'Seção 19',
      subtitulo: 'Capítulos XCI ao XCV',
      leitor: 'Maria de Fátima da Silva',
      numeroSecao: 19,
      texto: '/assets/texts/secao19.txt',
      capitulo: ''
    },
    {
      src: '/assets/audio/domcasmurro20.mp3',
      titulo: 'Seção 20',
      subtitulo: 'Capítulos XCVI ao C',
      leitor: 'Dey Andriotti',
      numeroSecao: 20,
      texto: '/assets/texts/secao20.txt',
      capitulo: ''
    },
    {
      src: '/assets/audio/domcasmurro21.mp3',
      titulo: 'Seção 21',
      subtitulo: 'Capítulos CI ao CV',
      leitor: 'Pier',
      numeroSecao: 21,
      texto: '/assets/texts/secao21.txt',
      capitulo: ''
    },
    {
      src: '/assets/audio/domcasmurro22.mp3',
      titulo: 'Seção 22',
      subtitulo: 'Capítulos CVI ao CX',
      leitor: 'Rachel Moraes',
      numeroSecao: 22,
      texto: '/assets/texts/secao22.txt',
      capitulo: ''
    },
    {
      src: '/assets/audio/domcasmurro23.mp3',
      titulo: 'Seção 23',
      subtitulo: 'Capítulos CXI ao CXV',
      leitor: 'jessicapmaximo',
      numeroSecao: 23,
      texto: '/assets/texts/secao23.txt',
      capitulo: ''
    },
    {
      src: '/assets/audio/domcasmurro24.mp3',
      titulo: 'Seção 24',
      subtitulo: 'Capítulos CXVI ao CXX',
      leitor: 'gtavares97',
      numeroSecao: 24,
      texto: '/assets/texts/secao24.txt',
      capitulo: ''
    },
    {
      src: '/assets/audio/domcasmurro25.mp3',
      titulo: 'Seção 25',
      subtitulo: 'Capítulos CXXI ao CXXV',
      leitor: 'Rachel Moraes',
      numeroSecao: 25,
      texto: '/assets/texts/secao25.txt',
      capitulo: ''
    },
    {
      src: '/assets/audio/domcasmurro26.mp3',
      titulo: 'Seção 26',
      subtitulo: 'Capítulos CXXVI ao CXXX',
      leitor: 'Isa',
      numeroSecao: 26,
      texto: '/assets/texts/secao26.txt',
      capitulo: ''
    },
    {
      src: '/assets/audio/domcasmurro27.mp3',
      titulo: 'Seção 27',
      subtitulo: 'Capítulos CXXXI ao CXXXV',
      leitor: 'Marina Fikota',
      numeroSecao: 27,
      texto: '/assets/texts/secao27.txt',
      capitulo: ''
    },
    {
      src: '/assets/audio/domcasmurro28.mp3',
      titulo: 'Seção 28',
      subtitulo: 'Capítulos CXXXVI ao CXL',
      leitor: 'Marina Fikota',
      numeroSecao: 28,
      texto: '/assets/texts/secao28.txt',
      capitulo: ''
    },
    {
      src: '/assets/audio/domcasmurro29.mp3',
      titulo: 'Seção 29',
      subtitulo: 'Capítulos CXLI ao CXLV',
      leitor: 'Rachel Moraes',
      numeroSecao: 29,
      texto: '/assets/texts/secao29.txt',
      capitulo: ''
    },
    {
      src: '/assets/audio/domcasmurro30.mp3',
      titulo: 'Seção 30',
      subtitulo: 'Capítulos CXLVI ao CXLVIII',
      leitor: 'Lucas Oliveira',
      numeroSecao: 30,
      texto: '/assets/texts/secao30.txt',
      capitulo: ''
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
