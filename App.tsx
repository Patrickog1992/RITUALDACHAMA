
import React, { useState, useEffect } from 'react';
import { ChevronDown, ShieldCheck, Flame, Star, X, Loader2, Zap, Heart, ThumbsUp } from 'lucide-react';

const App: React.FC = () => {
  const [showRitualModal, setShowRitualModal] = useState(false);
  const [ritualStep, setRitualStep] = useState(0); // 0: inputs, 1: loading, 2: success
  const [names, setNames] = useState({ user: '', target: '' });
  const [loadingPhrase, setLoadingPhrase] = useState('');
  const [notification, setNotification] = useState<{ name: string; city: string } | null>(null);

  // Link de Checkout solicitado
  const checkoutLink = 'https://pay.kirvano.com/562d86be-b4f9-49fc-b88f-bf16e2fdb785';

  // Data dinâmica para o banner de atenção
  const currentDate = new Date().toLocaleDateString('pt-BR', { 
    day: 'numeric', 
    month: 'long' 
  });

  // Lógica de Prova Social Extra Minimalista
  useEffect(() => {
    const namesList = ["Aline", "Juliana", "Carla", "Renata", "Beatriz", "Camila", "Fernanda", "Gabriela", "Mariana", "Patrícia", "Luciana", "Vanessa"];
    const citiesList = ["São Paulo", "Rio", "BH", "Curitiba", "Porto Alegre", "Brasília", "Salvador", "Fortaleza", "Manaus", "Recife", "Goiânia", "Campinas"];

    const showRandomNotification = () => {
      const randomName = namesList[Math.floor(Math.random() * namesList.length)];
      const randomCity = citiesList[Math.floor(Math.random() * citiesList.length)];
      setNotification({ name: randomName, city: randomCity });

      setTimeout(() => {
        setNotification(null);
      }, 4000);
    };

    const interval = setInterval(() => {
      showRandomNotification();
    }, 10000);

    const initialTimeout = setTimeout(showRandomNotification, 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimeout);
    };
  }, []);

  const openModal = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setShowRitualModal(true);
    setRitualStep(0);
  };

  const handleStartRitual = (e: React.FormEvent) => {
    e.preventDefault();
    if (!names.user || !names.target) return;
    
    setRitualStep(1);
    const phrases = [
      "Invocando a Sacerdotisa Azara...",
      `Conectando à alma de ${names.target}...`,
      "Sintonizando com o Fogo Sagrado Atar...",
      "Preparando o pergaminho de vinculação..."
    ];

    let current = 0;
    setLoadingPhrase(phrases[0]);

    const interval = setInterval(() => {
      current++;
      if (current < phrases.length) {
        setLoadingPhrase(phrases[current]);
      } else {
        clearInterval(interval);
        setRitualStep(2);
      }
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-['Poppins'] selection:bg-red-100 relative">
      
      {/* Notificação de Prova Social Tema Escuro Minimalista */}
      <div className={`fixed top-4 right-4 z-[110] transition-all duration-1000 transform ${notification ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'}`}>
        <div className="bg-gray-900/95 backdrop-blur-md border border-white/10 shadow-2xl rounded-xl p-2 px-4 flex items-center gap-3 max-w-[260px]">
          <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-[0_0_10px_rgba(220,38,38,0.5)]">
            <Flame size={12} className="text-white animate-pulse" fill="currentColor" />
          </div>
          {notification && (
            <div className="flex flex-col leading-tight animate-in fade-in duration-500">
              <span className="text-[10px] font-bold text-white tracking-tight">
                {notification.name} de {notification.city}
              </span>
              <span className="text-[9px] text-gray-400 font-medium uppercase tracking-tighter">
                recebeu o ritual da chama agora
              </span>
            </div>
          )}
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-6 pt-12 pb-24 space-y-12">
        
        {/* Banner de Atenção - Fonte Reduzida conforme pedido */}
        <div className="bg-red-600 rounded-xl p-4 text-center shadow-lg border-2 border-red-500">
          <p className="text-white text-[10px] md:text-[12px] font-bold leading-relaxed uppercase">
            <span className="text-yellow-400 underline decoration-yellow-400 decoration-1">ATENÇÃO :</span> O fim de ano é um período raro de transição energética. Durante essa virada, e no dia <span className="text-yellow-400 font-black">{currentDate}</span> o Ritual da Chama de 5 Noites atua com intensidade maior, acelerando o retorno e a obsessão.
          </p>
        </div>

        {/* Headline Principal */}
        <section className="text-center space-y-8">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight uppercase tracking-tighter text-gray-900">
            SUSSURRE O NOME DELE NESTA <span className="fire-gradient-text">CHAMA SAGRADA…</span> E EM ATÉ 5 NOITES ELE VAI FICAR <span className="underline decoration-red-600 decoration-4">TOTALMENTE OBCECADO</span> POR VOCÊ
          </h1>
          
          <div className="rounded-2xl overflow-hidden shadow-2xl ring-4 ring-red-500/10">
            <img 
              src="https://i.imgur.com/rJhARQH.jpeg" 
              alt="Chama Sagrada" 
              className="w-full h-auto object-cover"
            />
          </div>

          <p className="text-xl md:text-2xl font-medium italic text-gray-700 leading-relaxed">
            "Ele vai se revirar na cama à noite, incapaz de tirar você da cabeça. E, na quinta noite, vai rastejar de volta para você como se a vida dele dependesse disso."
          </p>
        </section>

        {/* Bloco Narrativo 1 */}
        <section className="space-y-6 text-lg md:text-xl leading-relaxed">
          <p>Eu não imploro para homens.</p>
          <p>Eu não corro atrás deles.</p>
          <p>E com certeza não fico sentada chorando, me perguntando por que ele “precisa de espaço”.</p>
          <p className="font-bold">Porque eu encontrei algo mais antigo. Mais sombrio. Algo contra o qual ele não consegue lutar.</p>
          <p>Tudo o que fiz foi entregar o nome dele a uma sacerdotisa que guarda uma chama antiga que queima há mais de 1.500 anos.</p>
          <p className="font-bold text-red-600">Ela sussurrou o nome dele no fogo.</p>
          <p>E em menos de 48 horas, ele estava explodindo meu celular.</p>
          <p>Implorando. Chorando. Rastejando de volta como um homem que perdeu completamente o controle.</p>
        </section>

        {/* Bloco Narrativo 2 */}
        <section className="space-y-10">
          <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100">
            <h2 className="text-3xl font-black mb-6 uppercase">A Última Vez Que Ele Se Afastou…</h2>
            <div className="space-y-4 text-lg">
              <p>Ele achou que podia simplesmente sumir.</p>
              <p>Me deixar no vácuo.</p>
              <p>Agir como se o que tivemos não tivesse significado nada.</p>
              <p className="text-red-500 font-bold text-2xl italic tracking-widest">Ahhh que fofo.</p>
              <p>Entreguei o nome dele à Sacerdotisa Azara. Ela acendeu a vela sagrada em seu templo de fogo, pronunciou o nome dele na chama e deixou o fogo fazer o trabalho.</p>
            </div>
          </div>

          <div className="text-center space-y-6">
            <h3 className="text-2xl font-black uppercase tracking-[0.3em] text-red-600">SACERDOTISA</h3>
            <img 
              src="https://i.imgur.com/kkGFDp4.jpeg" 
              alt="Sacerdotisa Azara" 
              className="w-full max-md mx-auto rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </section>

        {/* O que aconteceu na vida real */}
        <section className="space-y-6 border-l-8 border-red-600 pl-8 py-4">
          <div className="space-y-4 text-lg md:text-xl">
            <p><span className="font-black text-red-600 uppercase">Na manhã seguinte?</span> Uma mensagem do nada: “Tive o sonho mais estranho com você. Não consigo parar de pensar em você.”</p>
            <p><span className="font-black text-red-600 uppercase">Na terceira noite?</span> 27 ligações perdidas. Mensagens sem parar: “Me desculpa. Não sei o que está acontecendo comigo. Eu preciso te ver.”</p>
            <p><span className="font-black text-red-600 uppercase">Na quinta noite?</span> Ele estava na minha porta. Olhos vermelhos. Voz tremendo. Jurando que nunca mais me deixaria.</p>
            <p className="font-bold bg-yellow-100 inline-block px-2">Disse que sentia o peito em chamas e que eu era a única coisa capaz de apagar aquele fogo.</p>
            <p className="text-2xl font-black pt-4">Tudo isso em menos de 5 noites.</p>
          </div>
        </section>

        {/* Por Que Isso Funciona */}
        <section className="space-y-8 bg-black text-white p-10 md:p-16 rounded-[3rem] shadow-fire">
          <h2 className="text-3xl md:text-4xl font-black uppercase leading-tight">Por Que Isso Funciona (E Por Que Todo o Resto Falha)</h2>
          <div className="space-y-6 text-lg opacity-90">
            <p>A maioria das mulheres faz tudo errado.</p>
            <p>Elas choram abraçadas ao travesseiro.</p>
            <p>Mandam mensagens patéticas de “só passando para saber como você está”.</p>
            <p>Stalkeiam as redes sociais dele, morrendo por dentro toda vez que ele posta algo.</p>
            <p>Ouvem amigas dizendo: “Dá espaço, ele volta.”</p>
            <p className="text-red-500 font-black text-2xl uppercase pt-4 italic">Deixa eu te contar a verdade: ele não volta.</p>
            <p>Homens não voltam por causa de “espaço”.</p>
            <p>Não voltam porque você implorou.</p>
            <p>Não voltam porque você “deu tempo para ele pensar”.</p>
            <p className="font-bold border-l-4 border-red-500 pl-4 text-xl">Eles voltam quando algo se agarra à alma deles e não solta mais.</p>
            <p>E é exatamente isso que essa chama faz.</p>
            <p>Ela não pede. Não convence. Ela queima o seu nome no espírito dele até você ser tudo em que ele consegue pensar.</p>
          </div>
        </section>

        {/* Templos de Fogo da Pérsia */}
        <section className="space-y-10 py-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-tight">O Segredo Proibido dos Templos de Fogo da Pérsia</h2>
            <img 
              src="https://i.imgur.com/RfnM0Aw.jpeg" 
              alt="Templos de Fogo" 
              className="w-full rounded-2xl shadow-xl border border-gray-100"
            />
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-gray-800">
            <p>Isso não é um truque moderno de “manifestação”.</p>
            <p>Não são velas de loja barata e pensamentos positivos.</p>
            <p>É um ritual de fogo antigo que remonta a mais de 3.000 anos, às sacerdotisas zoroastristas da Pérsia.</p>
            <p>Elas sabiam algo que foi escondido das mulheres por séculos:</p>
            <p className="font-black text-xl bg-orange-50 p-6 rounded-2xl border-l-8 border-orange-500 italic">Todo homem tem um ponto na alma que pode ser incendiado. E quando é aceso, ele queima por uma mulher — e apenas uma.</p>
            <p>Rainhas usavam isso para manter seus reis leais. Tão leais que abandonavam amantes, largavam guerras pela metade e atravessavam reinos inteiros apenas para estar perto dela novamente.</p>
            <p>Os sacerdotes odiavam isso. Chamavam de perigoso. Tentaram enterrar esse conhecimento.</p>
            <p>Mas os sussurros nunca cessaram.</p>
            <p className="font-bold text-red-600">Porque toda mulher que usava sabia a verdade: Uma vez que o nome dele entra na chama sagrada, a alma dele fica ligada a você. E esse fogo nunca se apaga.</p>
          </div>
        </section>

        {/* Interruptor da Obsessão */}
        <section className="bg-gray-900 text-white p-12 rounded-[3.5rem] text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-black uppercase">Os Homens Acham Que Estão no Controle</h2>
          <p className="text-4xl md:text-6xl text-red-600 font-black uppercase italic tracking-tighter">Não estão.</p>
          <div className="max-w-2xl mx-auto space-y-6 text-lg text-left opacity-90">
            <p>Todo homem tem um interruptor escondido dentro dele. Chame de circuito da obsessão. Instinto primitivo. O que quiser.</p>
            <p><span className="text-red-500 font-black uppercase tracking-widest">Quando está ligado?</span> Ele não consegue pensar direito. Não consegue dormir. Não para de te imaginar. O corpo inteiro dele anseia por você.</p>
            <p><span className="text-gray-500 font-black uppercase tracking-widest">Quando está desligado?</span> Ele fica frio. Distante. Some.</p>
            <p className="bg-red-600/10 p-8 rounded-2xl border border-red-500/30 mt-8 font-medium italic text-center">
              O que a maioria das mulheres não sabe: O Ritual da Chama de 5 Noites liga esse interruptor novamente. E, uma vez ligado, ele permanece ligado.
            </p>
            <p className="text-center font-bold text-xl">Por isso as mulheres chamam de “ritual do Homem em Chamas”. Porque quando o nome dele toca a chama, ele queima por você. E somente por você.</p>
          </div>
        </section>

        {/* Timeline das 5 Noites */}
        <section className="space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase">O Que Acontece Ao Longo das 5 Noites</h2>
            <img 
              src="https://i.imgur.com/EcmtW16.jpeg" 
              alt="Processo de 5 Noites" 
              className="w-full rounded-3xl shadow-2xl"
            />
          </div>
          
          <div className="space-y-6 text-lg md:text-xl">
            <p>Isso não são meses de espera. Não são anos de terapia. Não é “manifestar por seis meses e torcer para dar certo”.</p>
            <p className="font-bold">A Sacerdotisa Azara sussurra o nome dele na chama sagrada e, em até 5 noites, o mundo dele vira de cabeça para baixo.</p>
          </div>

          <div className="space-y-10">
            <NightStep night="Noite 1" title="A Primeira Faísca" desc="No momento em que o nome dele entra na chama, algo muda. Ele vai se sentir inquieto naquela noite. Vai se revirar às 3 da manhã sem saber por quê. Seu rosto vai piscar na mente dele. Ele sentirá uma dor estranha no peito que não consegue explicar." />
            <NightStep night="Noite 2" title="O Calor Aumenta" desc="Ele começa a pensar em você mais. Muito mais. Vai se pegar olhando fotos antigas suas. Revivendo conversas. A ideia de você com outro homem vai deixá-lo enjoado." />
            <NightStep night="Noite 3" title="O Fogo se Espalha" desc="Agora ele não consegue mais se livrar de você. Vai sonhar com você de forma tão real que acorda confuso. Os amigos vão perceber que algo está errado. Ele vai mandar uma mensagem fraca só para “testar o terreno”, porque não aguenta mais a pressão." />
            <NightStep night="Noite 4" title="O Incêndio" desc="Ele está perdendo o controle. Não consegue focar no trabalho. Não sente prazer em nada. Todas as outras mulheres parecem sem graça perto de você. O fogo queimou tudo. Só você restou na mente dele." />
            <NightStep night="Noite 5" title="Rendição Total" desc="Ele quebra. O orgulho? Sumiu. As semelhanças? Viraram cinzas. Ele liga. Ele manda mensagem. Ele aparece. Chora, pede desculpas e jura que nunca mais vai te deixar. Diz coisas como: “Não sei o que aconteceu comigo, mas não consigo viver sem você.”" />
          </div>
        </section>

        {/* Aviso */}
        <section className="bg-red-600 text-white p-12 rounded-[3.5rem] text-center space-y-6 shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Mas Preciso Te Avisar…</h2>
          <div className="text-xl md:text-2xl space-y-6 max-w-2xl mx-auto opacity-95">
            <p>Isso não é brincadeira. Não é um “trabalho energético” inofensivo.</p>
            <p>Quando a Sacerdotisa Azara realiza esse ritual, os homens não apenas voltam. Eles grudam. Eles se tornam obcecados. Eles não se cansam de você.</p>
            <p className="bg-white text-red-600 p-4 rounded-xl font-black uppercase">Se você não está pronta para ele te desejar a cada segundo de todos os dias… não faça isso.</p>
          </div>
        </section>

        {/* Comentários das mulheres */}
        <section className="space-y-12 py-12 border-y border-gray-100">
          <h2 className="text-3xl md:text-4xl font-black text-center uppercase">Histórias Reais de Mulheres Que Usaram a Chama</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Testimonial name="Aline M." image="https://i.imgur.com/Sza1ZfT.png" text="Fiz o ritual na segunda, na quinta ele apareceu na minha porta com o olho inchado de chorar. Ele disse que sentia um vazio no peito que só passava quando ele via minha foto. Nunca vi ele assim em 4 anos." />
            <Testimonial name="Carla S." image="https://i.imgur.com/GJZpDHa.png" text="Ele estava com outra há 3 meses. Ontem ele me ligou dizendo que terminou tudo porque não conseguia parar de ter sonhos comigo. A Sacerdotisa Azara é poderosa demais." />
            <Testimonial name="Juliana R." image="https://i.imgur.com/UA8o4Kz.png" text="O ritual do homem em chamas é real. Ele me mandou mensagem pedindo perdão por tudo e disse que aceita qualquer condição pra gente voltar. Ele tá totalmente na minha mão agora." />
            <Testimonial name="Renata P." image="https://i.imgur.com/oOLHMGS.jpg" text="Estávamos bloqueados. Ele criou um Instagram falso só pra vir falar comigo e dizer que estava morrendo de saudade e que não conseguia focar em mais nada. Funcionou na 4ª noite." />
          </div>
        </section>

        {/* História Proibida */}
        <section className="space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase leading-tight">A História Proibida Que Tentaram Enterrar</h2>
            <div className="text-lg md:text-xl space-y-6 text-left max-w-2xl mx-auto">
              <p>Acha que eu inventei isso? Não. Esse ritual é mais antigo que a igreja. Mais antigo que a terapia. Mais antigo que qualquer conselho de relacionamento que você já ouviu.</p>
              <p>Mulheres usam o fogo para ligar homens há milhares de anos. Em templos persas antigos. Em câmaras escondidas. Em cerimônias secretas passadas de mãe para filha.</p>
              <p className="font-black text-red-600 text-center text-2xl py-6 italic uppercase">Porque toda mulher que aprendia isso sabia de uma coisa: Homens são fracos. Homens podem ser controlados. Homens podem ser ligados. E o fogo era como elas faziam isso.</p>
            </div>
          </div>

          <div className="text-center space-y-8">
            <h3 className="text-2xl md:text-3xl font-black uppercase">Rainhas Que Fizeram Reis Rastejarem</h3>
            <img 
              src="https://i.imgur.com/1sAIPUI.jpeg" 
              alt="Rainha no Trono" 
              className="w-full rounded-3xl shadow-2xl grayscale"
            />
            <div className="text-lg text-left space-y-6">
              <p>Existem histórias — sussurradas, apagadas dos livros de história — sobre rainhas que usaram a chama sagrada para trazer seus reis de volta.</p>
              <p>Uma rainha mandou realizar o ritual enquanto seu rei estava em guerra, com outra mulher em sua tenda. Cinco noites depois? Ele abandonou a amante. Abandonou a guerra. Abandonou o exército. Cavalgou de volta até ela, pálido e tremendo, sussurrando: “Não consigo respirar sem você.”</p>
              <p className="bg-red-50 p-6 rounded-2xl border-l-4 border-red-500 font-bold italic">Os generais chamaram de loucura. Os sacerdotes chamaram de bruxaria. Ela chamou de poder.</p>
            </div>
          </div>

          <div className="bg-gray-50 p-10 rounded-[3rem] space-y-6 border border-gray-100">
            <h4 className="text-2xl font-black uppercase">Tentaram Destruir Isso</h4>
            <div className="text-lg space-y-6 opacity-90 leading-relaxed">
              <p>Quando os sacerdotes perceberam o que as mulheres faziam com a chama sagrada? Entraram em pânico. Chamaram de mal. Disseram que ameaçava a ordem natural.</p>
              <p>Por quê? Porque funcionava. Porque homens “lógicos” desmoronavam como crianças. Porque homens “fortes” choravam como bebês. Porque homens “fiéis” abandonavam tudo para rastejar de volta a uma mulher.</p>
              <p>Então proibiram. Queimaram os textos. Espalharam as sacerdotisas. Mas sussurros nunca morrem. O conhecimento sobreviveu. Passado em segredo de guardiã para guardiã. E agora está aqui. Pronto para ligar a alma do seu homem à sua.</p>
            </div>
          </div>
        </section>

        {/* Perfil Azara */}
        <section className="text-center space-y-10 py-12">
          <h2 className="text-3xl md:text-4xl font-black uppercase">Quem É a Sacerdotisa Azara?</h2>
          <img 
            src="https://i.imgur.com/S0BPoDO.jpeg" 
            alt="Sacerdotisa Azara" 
            className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full object-cover border-[12px] border-red-600 shadow-2xl"
          />
          <div className="text-lg md:text-xl space-y-6 text-left max-w-2xl mx-auto leading-relaxed">
            <p>A Sacerdotisa Azara é descendente direta dos guardiões do fogo zoroastristas da antiga Pérsia. A família dela guarda a chama sagrada — o Atar — há mais de 1.500 anos. Quando os templos foram destruídos, eles fugiram com as brasas, mantendo a tradição viva em segredo.</p>
            <p>Hoje, she realiza o ritual da chama em seu templo particular para um número limitado de mulheres por semana. Ela não faz isso por dinheiro. É o chamado dela. O propósito dela. Garantir que esse poder antigo não se perca no mundo.</p>
            <p className="font-bold text-red-600 bg-red-50 p-4 rounded-xl text-center">Mas o ritual a drena. Cada um exige dias de preparação e recuperação. Por isso ela só pode ajudar um número limitado de mulheres.</p>
          </div>
        </section>

        {/* Como Funciona Steps */}
        <section className="space-y-12">
          <h2 className="text-3xl md:text-4xl font-black text-center uppercase tracking-tight">Como Funciona</h2>
          <div className="space-y-6">
            <Step num="1" text="Você clica no botão abaixo e preenche um formulário curto com o nome dele e alguns detalhes da sua situação." />
            <Step num="2" text="A Sacerdotisa Azara realiza o Ritual da Chama de 5 Noites em seu templo, sussurrando o nome dele no fogo sagrado a cada noite." />
            <Step num="3" text="Você segue com a sua vida enquanto a chama faz o trabalho na alma dele." />
            <Step num="4" text="Em até 5 noites, veja ele rastejar de volta." />
          </div>
          <p className="text-center text-2xl font-black uppercase tracking-tight">É isso. Você não precisa fazer nada além de estar pronta quando ele quebrar.</p>
        </section>

        {/* Preço e Oferta */}
        <section className="bg-gray-900 text-white p-12 rounded-[3.5rem] shadow-2xl space-y-12 text-center">
          <div className="space-y-8">
            <div className="text-lg opacity-80 space-y-6 max-w-2xl mx-auto leading-relaxed text-left">
              <p className="font-medium">A Sacerdotisa Azara não faz isso por lucro. Mas precisamos cobrir os custos de manter este site e o templo dela.</p>
              <p>Então concordamos em um valor acessível para qualquer mulher, independentemente da situação.</p>
              <div className="flex flex-col gap-1 text-red-600 font-black text-2xl italic">
                <p>Não $500.</p>
                <p>Não $200.</p>
                <p>Nem mesmo $100.</p>
              </div>
            </div>

            <div className="space-y-6 pt-10 border-t border-white/10">
              <p className="text-xl md:text-2xl font-bold text-green-500 uppercase tracking-tight leading-relaxed">
                Hoje, você pode ter o Ritual da Chama de 5 Noites realizado por apenas R$37,00
              </p>
              <div className="bg-white/5 p-10 rounded-3xl border border-white/10 inline-block">
                <p className="text-5xl md:text-7xl font-black text-green-500">R$ 37,00</p>
                <p className="text-2xl font-black mt-2 uppercase tracking-widest text-green-500 italic">Trinta e sete reais.</p>
              </div>
              <p className="text-lg font-medium pt-4 italic opacity-80">Menos que um jantar fora. Pelo poder de fazer ele queimar por você para sempre.</p>
            </div>
            
            <button 
              onClick={openModal}
              className="bg-green-pulsante text-white text-xl md:text-2xl font-black py-6 px-10 rounded-full inline-block shadow-lg hover:scale-105 transition-transform uppercase tracking-tighter"
            >
              Acenda a Chama – Garanta Seu Ritual Agora
            </button>
          </div>
        </section>

        {/* Agir Agora */}
        <section className="flex flex-col md:flex-row items-center gap-12 py-12">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl font-black uppercase leading-none tracking-tighter italic">Mas Você Precisa Agir Agora</h2>
            <img 
              src="https://i.imgur.com/gLqf1pr.jpeg" 
              alt="Fogo de Urgência" 
              className="w-full rounded-3xl shadow-2xl md:hidden"
            />
            <div className="text-lg md:text-xl space-y-6">
              <p>A Sacerdotisa Azara só consegue realizar um número limitado de rituais por semana. A energia dela não é infinita. Quando as vagas acabam, acabam — até ela se recuperar.</p>
              <p className="text-red-600 font-bold italic">Se você fechar esta página e voltar amanhã, sua vaga pode já ter sido tomada.</p>
              <p>Cada noite que você espera é more uma noite em que ele se afasta. Mais uma noite em que ela crava as garras mais fundo nele. Mais uma noite que você perde.</p>
            </div>
          </div>
          <div className="hidden md:block flex-1">
            <img 
              src="https://i.imgur.com/gLqf1pr.jpeg" 
              alt="Fogo de Urgência" 
              className="w-full rounded-3xl shadow-2xl"
            />
          </div>
        </section>

        {/* Verdade Sombria Final */}
        <section className="text-center space-y-12 py-16">
          <h2 className="text-4xl font-black uppercase tracking-tighter">E Aqui Está a Verdade Mais Sombria…</h2>
          <div className="text-xl md:text-2xl max-w-3xl mx-auto space-y-8 italic leading-relaxed text-gray-700">
            <p>Esta página pode não ficar no ar. Eles já tentaram enterrar esse ritual antes. Terapeutas, coaches de relacionamento, toda a indústria de “autoajuda” — eles adorariam ver isso desaparecer.</p>
            <p className="font-bold text-gray-900 not-italic">Porque quando mulheres têm esse poder, os homens não têm chance. Não posso prometer que esta página estará aqui amanhã.</p>
          </div>
          <div className="space-y-6 font-black text-2xl md:text-3xl text-left max-w-2xl mx-auto">
            <p className="flex gap-4 items-start leading-tight"><span className="text-red-600">👉</span> <span>Se você agir agora, a Sacerdotisa Azara começará seu ritual ainda hoje à noite.</span></p>
            <p className="flex gap-4 items-start leading-tight text-red-600 uppercase"><span className="text-red-600">👉</span> <span>Se você esperar, talvez nunca mais veja esta página — ou ele — novamente.</span></p>
          </div>
          <button 
            onClick={openModal}
            className="bg-green-pulsante text-white w-full py-6 text-xl md:text-2xl font-black rounded-2xl shadow-lg uppercase tracking-tighter transition-all hover:scale-[1.01] active:scale-95"
          >
            Sim, Estou Pronta – Acender a Chama Agora
          </button>
        </section>

        {/* Garantia */}
        <section className="bg-red-50 border-4 border-dashed border-red-600 p-8 md:p-10 rounded-[3rem] flex flex-col items-center text-center space-y-6 shadow-inner">
          <ShieldCheck size={64} className="text-red-600" />
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">O Risco É 100% Meu</h2>
          <div className="text-lg md:text-xl space-y-4 max-w-2xl font-medium leading-relaxed">
            <p>Você tem 7 dias completos para ver os resultados.</p>
            <p>Se ele não estiver queimando de obsessão por você… Se ele não voltar rastejando, implorando pelo seu perdão… Se você não ficar completamente chocada com o nível de desespero dele por você…</p>
            <p className="text-xl md:text-2xl font-black text-red-600 uppercase italic bg-white p-3 rounded-lg shadow-sm border border-red-100">Basta enviar um e-mail e você recebe cada centavo de volta.</p>
            <p className="font-bold text-sm md:text-base">Ou você recupera ele, totalmente devoto a você, ou recebe seu dinheiro de volta. Não há risco.</p>
          </div>
          <button 
            onClick={openModal}
            className="bg-green-pulsante text-white px-10 py-5 rounded-full text-xl font-black uppercase hover:scale-105 transition-transform tracking-tighter shadow-lg"
          >
            Garantir Meu Ritual – Estou Pronta
          </button>
        </section>

        {/* Perguntas Frequentes */}
        <section className="space-y-12">
          <h2 className="text-4xl font-black text-center uppercase tracking-tighter">Perguntas Frequentes</h2>
          <div className="space-y-4">
            <FAQItem q="E se ele estiver com outra mulher?" a="Ótimo. Ela é apenas um espaço vazio. A chama não compete com ela — ela apaga. A conexão dele com ela esfria. O toque dela parece errado. A voz dela irrita. Ele olha para ela e sente apenas vazio. E então corre de volta para você." />
            <FAQItem q="E se ele me bloqueou em tudo?" a="Melhor ainda. O bloqueio não o protege. Ele o prende dentro da própria cabeça com o fogo. Ele ficará tão obcecado que dará um jeito de falar com você — uma conta nova, um e-mail, aparecendo pessoalmente. O bloqueio vira a prisão dele, e você é a única saída." />
            <FAQItem q="E se já se passaram meses ou anos?" a="Não importa. O tempo não apaga essa chama. A conexão entre vocês ainda existe como uma brasa enterrada. Esse ritual é o vento que transforma essa brasa em incêndio. Quanto mais tempo passou, mais forte as memórias batem quando voltam." />
            <FAQItem q="E se ele jurou que nunca voltaria?" a="Homens dizem muitas coisas. Palavras grandes. Mas palavras não significam nada quando a alma dele está em chamas. Na quinta noite, ele nem vai lembrar do que jurou. Estará ocupado demais implorando para você aceitá-lo de volta." />
            <FAQItem q="E se eu não acreditar nisso?" a="Você não precisa acreditar. O fogo não liga para crença. Ele queima de qualquer forma. Tudo o que você precisa fazer é entregar o nome dele à Sacerdotisa Azara. Ela cuida do resto." />
            <FAQItem q="Isso é permanente?" a="Sim. Por isso eu avisei. Não é temporário. Uma vez que o nome dele entra na chama, o vínculo é selado. Não faça isso se não tiver certeza de que quer ele ligado a você." />
          </div>
        </section>

        {/* Rodapé Final de Conversão */}
        <section className="text-center py-16 space-y-12 border-t border-gray-100">
          <div className="space-y-4">
            <h2 className="text-5xl font-black uppercase tracking-tighter text-gray-900">Acenda a Chama Hoje</h2>
            <p className="text-xl font-medium opacity-60">Pare de sofrer. Pare de esperar. Tome o controle.</p>
          </div>
          <button 
            onClick={() => window.location.href = checkoutLink}
            className="bg-green-pulsante text-white w-full py-6 rounded-2xl text-xl md:text-2xl font-black shadow-lg transition-all hover:scale-[1.02] active:scale-95 uppercase tracking-tighter"
          >
            Tenho Certeza – Acender a Chama Agora
          </button>
          <div className="flex flex-wrap justify-center gap-6 opacity-30 grayscale pointer-events-none">
            <img src="https://img.shields.io/badge/Pagamento-Seguro-green?style=for-the-badge&logo=shield" alt="Safe" />
            <img src="https://img.shields.io/badge/Satisfação-Garantida-red?style=for-the-badge&logo=flame" alt="Satisfaction" />
            <img src="https://img.shields.io/badge/SSL-Protegido-blue?style=for-the-badge" alt="SSL" />
          </div>
        </section>

      </main>

      {/* Ritual Modal Overlay */}
      {showRitualModal && (
        <div className="fixed inset-0 z-[100] bg-white/95 flex items-center justify-center p-4 backdrop-blur-md overflow-y-auto">
          <div className="max-w-md w-full bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative border-4 border-red-500/20">
            <button 
              onClick={() => setShowRitualModal(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors"
            >
              <X size={28} />
            </button>

            {ritualStep === 0 && (
              <form onSubmit={handleStartRitual} className="space-y-8 animate-in fade-in zoom-in duration-300">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto shadow-fire">
                    <Flame size={32} />
                  </div>
                  <h2 className="text-3xl font-black uppercase tracking-tighter leading-tight">Prepare o Ritual</h2>
                  <p className="text-gray-600 font-medium">A Sacerdotisa Azara precisa dos nomes para vincular a alma dele à sua.</p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Seu Nome Completo</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Ex: Maria Oliveira"
                      className="w-full p-5 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-red-500 focus:outline-none transition-all font-bold text-lg"
                      value={names.user}
                      onChange={(e) => setNames({ ...names, user: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Nome Completo DELE</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Ex: João da Silva"
                      className="w-full p-5 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-red-500 focus:outline-none transition-all font-bold text-lg"
                      value={names.target}
                      onChange={(e) => setNames({ ...names, target: e.target.value })}
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  className="bg-green-pulsante text-white w-full py-6 rounded-2xl text-xl font-black shadow-lg uppercase tracking-tighter transition-all hover:scale-105"
                >
                  Vincular Almas Agora
                </button>
                <p className="text-center text-[10px] uppercase font-black text-gray-400 tracking-widest">Seus dados estão 100% protegidos e privados.</p>
              </form>
            )}

            {ritualStep === 1 && (
              <div className="text-center py-12 space-y-8 animate-in fade-in slide-in-from-bottom duration-500">
                <div className="relative w-32 h-32 mx-auto">
                  <Loader2 size={128} className="text-red-600 animate-spin absolute inset-0 opacity-20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Flame size={64} className="text-red-600 animate-pulse" />
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-2xl font-black uppercase tracking-tighter italic text-red-600 animate-pulse">
                    {loadingPhrase}
                  </p>
                  <p className="text-gray-400 font-medium text-sm">O altar está sendo preparado...</p>
                </div>
              </div>
            )}

            {ritualStep === 2 && (
              <div className="text-center space-y-8 animate-in zoom-in duration-500">
                <div className="w-24 h-24 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto shadow-lg shadow-green-500/30">
                  <Zap size={48} fill="currentColor" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-4xl font-black uppercase tracking-tighter text-green-600 leading-none">CONEXÃO DETECTADA!</h3>
                  <p className="text-xl font-bold text-gray-800 leading-tight">
                    {names.target} está vulnerável à chama hoje. O vínculo espiritual foi mapeado com sucesso.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Tudo está pronto. A Sacerdotisa Azara aguarda apenas a sua confirmação para sussurrar o nome dele no fogo sagrado ainda hoje.
                  </p>
                </div>
                <button 
                  onClick={() => window.location.href = checkoutLink}
                  className="bg-green-pulsante text-white w-full py-8 rounded-3xl text-2xl font-black shadow-lg uppercase tracking-tighter transition-all hover:scale-105"
                >
                  Finalizar Ritual no Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer Legal */}
      <footer className="bg-gray-50 py-16 text-center text-gray-400 text-xs px-6 border-t border-gray-100">
        <div className="max-w-2xl mx-auto space-y-6">
          <p className="font-bold uppercase tracking-widest text-gray-500">&copy; 2024 Ritual do Fogo Sagrado. Todos os direitos reservados.</p>
          <div className="flex justify-center gap-8 font-medium">
            <a href="#" className="hover:text-red-600 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-red-600 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-red-600 transition-colors">Contato</a>
          </div>
          <p className="italic leading-relaxed">Isenção de responsabilidade: Os resultados descritos e depoimentos são baseados em tradições ancestrais e propósitos espirituais. A eficácia do ritual pode variar de acordo com cada caso individual. Este serviço destina-se ao aconselhamento espiritual e entretenimento.</p>
        </div>
      </footer>
    </div>
  );
};

/* Componentes de Suporte */

const NightStep: React.FC<{ night: string; title: string; desc: string }> = ({ night, title, desc }) => (
  <div className="flex flex-col md:flex-row gap-6 md:gap-12 pb-10 border-b border-gray-100 last:border-0 group">
    <div className="flex items-center gap-4 min-w-[160px]">
      <div className="w-14 h-14 bg-red-600 text-white rounded-2xl flex items-center justify-center font-black flex-shrink-0 rotate-3 group-hover:rotate-0 transition-transform">
        <Flame size={28} />
      </div>
      <span className="text-2xl font-black uppercase text-red-600 italic tracking-tighter">{night}</span>
    </div>
    <div className="space-y-3">
      <h4 className="text-2xl md:text-3xl font-black uppercase tracking-tight">{title}</h4>
      <p className="text-lg md:text-xl opacity-80 leading-relaxed text-gray-700">{desc}</p>
    </div>
  </div>
);

const Testimonial: React.FC<{ name: string; text: string; image: string }> = ({ name, text, image }) => (
  <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-50 flex flex-col gap-6 hover:shadow-2xl transition-shadow relative overflow-hidden">
    <div className="flex justify-between items-start">
      <div className="flex gap-1 text-orange-400">
        {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
      </div>
      <div className="flex gap-2">
        <div className="flex items-center gap-1 bg-red-50 px-2 py-1 rounded-full text-red-600">
          <Heart size={14} fill="currentColor" />
        </div>
        <div className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded-full text-blue-600">
          <ThumbsUp size={14} fill="currentColor" />
        </div>
      </div>
    </div>
    <p className="italic text-lg text-gray-800 leading-relaxed font-medium">"{text}"</p>
    <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
      <img src={image} alt={name} className="w-14 h-14 rounded-full object-cover border-2 border-red-100 shadow-sm" />
      <div className="flex flex-col">
        <span className="font-black text-gray-900">{name}</span>
        <span className="text-xs font-bold text-green-600 uppercase tracking-widest flex items-center gap-1">
          <ShieldCheck size={12} /> Compra Verificada
        </span>
      </div>
    </div>
  </div>
);

const Step: React.FC<{ num: string; text: string }> = ({ num, text }) => (
  <div className="flex items-center gap-8 bg-gray-50 p-8 rounded-3xl border border-gray-100 group hover:bg-white hover:shadow-2xl transition-all hover:scale-[1.02]">
    <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center text-2xl font-black flex-shrink-0 group-hover:bg-red-600 transition-colors shadow-lg">
      {num}
    </div>
    <p className="text-xl md:text-2xl font-bold leading-tight tracking-tight">{text}</p>
  </div>
);

const FAQItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-3xl overflow-hidden transition-all duration-300">
      <button 
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-8 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="text-xl font-black uppercase tracking-tight pr-6">{q}</span>
        <ChevronDown className={`transition-transform duration-500 text-red-600 ${open ? 'rotate-180' : ''}`} size={28} />
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-8 pt-0 text-lg md:text-xl opacity-80 border-t border-gray-100 bg-gray-50 leading-relaxed italic">
          {a}
        </div>
      </div>
    </div>
  );
};

export default App;
