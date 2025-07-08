import React, { useState } from "react";

const faqs = [
  {
    title: "O que é a plataforma KingPlay?",
    content: (
      <>
        <p>
          O KingPlay é sua plataforma de streaming definitiva, trazendo o melhor do entretenimento diretamente para você.
          Com uma vasta biblioteca de filmes, séries, esportes ao vivo e canais de TV, temos algo para todos os gostos. Aproveite:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Acesso ilimitado</strong>: Assista o quanto quiser, quando quiser.</li>
          <li><strong>Sem comerciais</strong>: Desfrute de uma experiência contínua, sem interrupções.</li>
          <li><strong>Atualizações constantes</strong>: Sempre há algo novo para descobrir.</li>
          <li><strong>Exclusividades imperdíveis</strong>: Conteúdo que você só encontra aqui.</li>
        </ul>
        <p className="mt-2">Experimente agora e transforme sua forma de assistir TV!</p>
      </>
    ),
  },
  {
    title: "O pagamento é mensal?",
    content: (
      <p>
        Para aproveitar <strong>todos os benefícios e conteúdos exclusivos</strong> do KingPlay, é necessário assinar um plano.
        Oferecemos uma variedade de planos acessíveis para se adaptar às suas necessidades, incluindo opções mensais, trimestrais e anuais.
        <strong> Assine agora e descubra um mundo de entretenimento sem interrupções!</strong>
      </p>
    ),
  },
  {
    title: "Como é a instalação?",
    content: (
      <p>
        Nosso sistema é muito simples de instalar, ensinamos passo a passo detalhado pra você conseguir acompanhar e colocar tudo para funcionar.
      </p>
    ),
  },
  {
    title: "Após a contratação, tenho acesso imediato?",
    content: (
      <p>
        Imediatamente! Após o pagamento ser confirmado, nossa plataforma enviará no seu e-mail o acesso para a plataforma, e todos os tutoriais de como usar em qualquer aparelho.
      </p>
    ),
  },
  {
    title: "Quais dispositivos são compatíveis com o KingPlay?",
    content: (
      <>
        <p>Dispositivos Compatíveis com KingPlay:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Smart TV.</li>
          <li>TV BOX.</li>
          <li>Smartphone Android, IOS.</li>
          <li>Computador, Notebook.</li>
          <li>Chromecast.</li>
          <li>Fire TV Stick.</li>
          <li>Tablet.</li>
          <li>Mi Tv Stick.</li>
          <li>Apple TV.</li>
          <li>Toda linha com sistema Android e IOS são compatíveis.</li>
        </ul>
        <p className="mt-2">E Muito Mais…</p>
      </>
    ),
  },
  {
    title: "O que precisa para utilizar o serviço de IPTV?",
    content: (
      <>
        <p>
          Para usufruir da lista IPTV, é essencial ter uma conexão de internet de alta velocidade e dispositivos compatíveis, como smart TVs,
          computadores, tablets ou set-top boxes específicos para o IPTV Brasil.
        </p>
        <p className="mt-2">
          Uma boa infraestrutura de internet é crucial para uma experiência de qualidade sem interrupções na transmissão.
        </p>
      </>
    ),
  },
  {
    title: "Tenho alguma garantia?",
    content: (
      <>
        <p>Sim, você pode experimentar a KingPlay e todos os conteúdos dela <strong>durante 7 dias.</strong></p>
        <p className="mt-1">
          Se dentro desse período você decidir não continuar com a <strong>KingPlay</strong>, por qualquer motivo que seja,
          é só entrar em contato e nós devolveremos todo o seu dinheiro – sem fazer nenhuma pergunta.
        </p>
      </>
    ),
  },
  {
    title: "Quais são as opções de canais?",
    content: (
      <p>
        Com a KingPlay, você tem acesso a uma ampla gama de canais de TV nacionais e internacionais,
        contendo milhares de opções para que você nunca mais fique sem ter o que assistir.
      </p>
    ),
  },
];

const AccordionItem = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-700">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center py-4 text-left font-semibold text-white hover:text-green-400 transition-colors"
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <svg
          className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-max-height duration-300 ease-in-out text-gray-300`}
        style={{ maxHeight: isOpen ? "1000px" : "0px" }}
      >
        <div className="py-2">{children}</div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto p-6 bg-black/80 rounded-lg my-12 text-white shadow-lg">
      <h2 className="text-4xl font-extrabold mb-8 text-center">Perguntas Frequentes</h2>

      <div>
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            title={faq.title}
            isOpen={openIndex === index}
            onToggle={() => toggleIndex(index)}
          >
            {faq.content}
          </AccordionItem>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
