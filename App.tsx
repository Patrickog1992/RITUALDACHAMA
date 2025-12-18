
import React, { useState, useEffect } from 'react';
import { ChevronDown, ShieldCheck, Flame, Star, X, Loader2, Zap, Heart, ThumbsUp } from 'lucide-react';

const App: React.FC = () => {
  const [showRitualModal, setShowRitualModal] = useState(false);
  const [ritualStep, setRitualStep] = useState(0); // 0: inputs, 1: loading, 2: success
  const [names, setNames] = useState({ user: '', target: '' });
  const [loadingPhrase, setLoadingPhrase] = useState('');
  const [notification, setNotification] = useState<{ name: string; city: string } | null>(null);
  const [activeNotification, setActiveNotification] = useState<{ name: string; city: string } | null>(null);

  // Link de Checkout solicitado
  const checkoutLink = 'https://pay.kirvano.com/562d86be-b4f9-49fc-b88f-bf16e2fdb785';

  // Data dinâmica para o banner de atenção
  const currentDate = new Date().toLocaleDateString('pt-BR', { 
    day: 'numeric', 
    month: 'long' 
  });

  // Lógica de Prova Social com correção de desaparecimento
  useEffect(() => {
    const namesList = ["Aline", "Juliana", "Carla", "Renata", "Beatriz", "Camila", "Fernanda", "Gabriela", "Mariana", "Patrícia", "Luciana", "Vanessa"];
    const citiesList = ["São Paulo", "Rio", "BH", "Curitiba", "Porto Alegre", "Brasília", "Salvador", "Fortaleza", "Manaus", "Recife", "Goiânia", "Campinas"];

    const showRandomNotification = () => {
      const randomName = namesList[Math.floor(Math.random() * namesList.length)];
      const randomCity = citiesList[Math.floor(Math.random() * citiesList.length)];
      
      const nextNotif = { name: randomName, city: randomCity };
      setActiveNotification(nextNotif);
      setNotification(nextNotif);

      setTimeout(() => {
        setNotification(null);
        // Mantém o activeNotification por mais 1s para a animação de fade-out completar
        setTimeout(() => setActiveNotification(null), 1000);
      }, 4000);
    };

    const interval = setInterval(showRandomNotification, 10000);
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
          {activeNotification && (
            <div className="flex flex-col leading-tight">
              <span className="text-[10px] font-bold text-white tracking-tight">
                {activeNotification.name} de {activeNotification.city}
              </span>
              <span className="text-[9px] text-gray-400 font-medium uppercase tracking-tighter">
                recebeu o ritual da chama agora
              </span>
            </div>
          )}
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-6 pt-12 pb-24 space-y-12">
        
        {/* Banner de Atenção */}
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

        {/* Blocos Narrativos */}
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

        {/* Linha do Tempo */}
        <section className="space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase">O Que Acontece Ao Longo das 5 Noites</h2>
            <img 
              src="https://i.imgur.com/EcmtW16.jpeg" 
              alt="Processo de 5 Noites" 
              className="w-full rounded-3xl shadow-2xl"
            />
          </div>
          <div className="space-y-10">
            <NightStep night="Noite 1" title="A Primeira Faísca" desc="No momento em que o nome dele entra na chama, algo muda. Ele vai se sentir inquieto naquela noite. Vai se revirar às 3 da manhã sem saber por quê. Seu rosto vai piscar na mente dele. Ele sentirá uma dor estranha no peito que não consegue explicar." />
            <NightStep night="Noite 2" title="O Calor Aumenta" desc="Ele começa a pensar em você mais. Muito mais. Vai se pegar olhando fotos antigas suas. Revivendo conversas. A ideia de você com outro homem vai deixá-lo enjoado." />
            <NightStep night="Noite 3" title="O Fogo se Espalha" desc="Agora ele não consegue mais se livrar de você. Vai sonhar com você de forma tão real que acorda confuso. Os amigos vão perceber que algo está errado. Ele vai mandar uma mensagem fraca só para “testar o terreno”, porque não aguenta mais a pressão." />
            <NightStep night="Noite 4" title="O Incêndio" desc="Ele está perdendo o controle. Não consegue focar no trabalho. Não sente prazer em nada. Todas as outras mulheres parecem sem graça perto de você. O fogo queimou tudo. Só você restou na mente dele." />
            <NightStep night="Noite 5" title="Rendição Total" desc="Ele quebra. O orgulho? Sumiu. As defesas? Viraram cinzas. Ele liga. Ele manda mensagem. Ele aparece. Chora, pede desculpas e jura que nunca mais vai te deixar. Diz coisas como: “Não sei o que aconteceu comigo, mas não consigo viver sem você.”" />
          </div>
        </section>

        {/* Depoimentos Atualizados */}
        <section className="space-y-12 py-12 border-y border-gray-100">
          <h2 className="text-3xl md:text-4xl font-black text-center uppercase">Histórias Reais de Mulheres Que Usaram a Chama</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Testimonial name="Aline M." image="https://i.imgur.com/Sza1ZfT.png" text="Fiz o ritual na segunda, na quinta ele apareceu na minha porta com o olho inchado de chorar. Ele disse que sentia um vazio no peito que só passava quando ele via minha foto. Nunca vi ele assim em 4 anos." />
            <Testimonial name="Carla S." image="https://i.imgur.com/GJZpDHa.png" text="Ele estava com outra há 3 meses. Ontem ele me ligou dizendo que terminou tudo porque não conseguia parar de ter sonhos comigo. A Sacerdotisa Azara é poderosa demais." />
            <Testimonial name="Juliana R." image="https://i.imgur.com/UA8o4Kz.png" text="O ritual do homem em chamas é real. Ele me mandou mensagem pedindo perdão por tudo e disse que aceita qualquer condição pra gente voltar. Ele tá totalmente na minha mão agora." />
            <Testimonial name="Renata P." image="https://i.imgur.com/oOLHMGS.jpg" text="Estávamos bloqueados. Ele criou um Instagram falso só pra vir falar comigo e dizer que estava morrendo de saudade e que não conseguia focar em mais nada. Funcionou na 4ª noite." />
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
            <p>Hoje, ela realiza o ritual da chama em seu templo particular para um número limitado de mulheres por semana. Ela não faz isso por dinheiro. É o chamado dela. O propósito dela. Garantir que esse poder antigo não se perca no mundo.</p>
            <p className="font-bold text-red-600 bg-red-50 p-4 rounded-xl text-center">Mas o ritual a drena. Cada um exige dias de preparação e recuperação. Por isso ela só pode ajudar um número limitado de mulheres.</p>
          </div>
        </section>

        {/* CTA Final */}
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

      {/* Modal do Ritual */}
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
                  <div className="space-y-6">
                    <input 
                      required
                      type="text" 
                      placeholder="Seu Nome Completo"
                      className="w-full p-5 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-red-500 focus:outline-none transition-all font-bold"
                      value={names.user}
                      onChange={(e) => setNames({ ...names, user: e.target.value })}
                    />
                    <input 
                      required
                      type="text" 
                      placeholder="Nome Completo DELE"
                      className="w-full p-5 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-red-500 focus:outline-none transition-all font-bold"
                      value={names.target}
                      onChange={(e) => setNames({ ...names, target: e.target.value })}
                    />
                  </div>
                  <button type="submit" className="bg-green-pulsante text-white w-full py-6 rounded-2xl text-xl font-black shadow-lg uppercase tracking-tighter">
                    Vincular Almas Agora
                  </button>
                </div>
              </form>
            )}

            {ritualStep === 1 && (
              <div className="text-center py-12 space-y-8 animate-in fade-in slide-in-from-bottom">
                <Loader2 size={80} className="text-red-600 animate-spin mx-auto opacity-20" />
                <p className="text-2xl font-black uppercase tracking-tighter italic text-red-600 animate-pulse">{loadingPhrase}</p>
              </div>
            )}

            {ritualStep === 2 && (
              <div className="text-center space-y-8 animate-in zoom-in">
                <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto">
                  <Zap size={40} fill="currentColor" />
                </div>
                <h3 className="text-3xl font-black uppercase text-green-600">CONEXÃO DETECTADA!</h3>
                <p className="text-gray-600 font-medium">{names.target} está vulnerável à chama hoje. O vínculo espiritual foi mapeado.</p>
                <button 
                  onClick={() => window.location.href = checkoutLink}
                  className="bg-green-pulsante text-white w-full py-6 rounded-3xl text-xl font-black shadow-lg uppercase tracking-tighter"
                >
                  Finalizar Ritual no Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-50 py-16 text-center text-gray-400 text-xs px-6 border-t border-gray-100">
        <p className="font-bold uppercase tracking-widest text-gray-500">&copy; 2024 Ritual do Fogo Sagrado. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

/* Componentes de Suporte */

const NightStep: React.FC<{ night: string; title: string; desc: string }> = ({ night, title, desc }) => (
  <div className="flex flex-col md:flex-row gap-6 md:gap-12 pb-10 border-b border-gray-100 last:border-0 group">
    <div className="flex items-center gap-4 min-w-[160px]">
      <div className="w-14 h-14 bg-red-600 text-white rounded-2xl flex items-center justify-center font-black flex-shrink-0 rotate-3 transition-transform">
        <Flame size={28} />
      </div>
      <span className="text-2xl font-black uppercase text-red-600 italic tracking-tighter">{night}</span>
    </div>
    <div className="space-y-3 text-left">
      <h4 className="text-2xl md:text-3xl font-black uppercase tracking-tight">{title}</h4>
      <p className="text-lg opacity-80 leading-relaxed text-gray-700">{desc}</p>
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
      <div className="flex flex-col text-left">
        <span className="font-black text-gray-900">{name}</span>
        <span className="text-xs font-bold text-green-600 uppercase tracking-widest flex items-center gap-1">
          <ShieldCheck size={12} /> Compra Verificada
        </span>
      </div>
    </div>
  </div>
);

export default App;
