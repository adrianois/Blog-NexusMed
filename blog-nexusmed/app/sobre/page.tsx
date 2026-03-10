export const metadata = {
  title: 'Sobre | Blog NexusMed',
  description: 'Conheça o Blog NexusMed e nossa missão de apoiar gestores de clínicas.',
};

export default function SobrePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="nexus-gradient rounded-2xl p-10 text-white mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
            <span className="text-xl">🏥</span>
          </div>
          <span className="text-sm font-semibold uppercase tracking-widest opacity-80">NexusMed</span>
        </div>
        <h1 className="text-4xl font-bold mb-3">Sobre o Blog NexusMed</h1>
        <p className="text-lg opacity-90">
          Gestão completa para clínicas modernas.
        </p>
      </div>
      <div className="prose">
        <h2>Nossa Missão</h2>
        <p>
          O Blog NexusMed nasceu para ser a principal referência em conteúdo sobre gestão clínica no Brasil.
          Publicamos artigos práticos e aprofundados para ajudar gestores, médicos e equipes administrativas
          a tornarem suas clínicas mais eficientes, lucrativas e focadas no paciente.
        </p>
        <h2>O que você encontra aqui</h2>
        <ul>
          <li>Estratégias de gestão financeira para clínicas</li>
          <li>Dicas para melhorar a experiência do paciente</li>
          <li>Conformidade com CFM, LGPD e regulamentações de saúde</li>
          <li>Tendências em tecnologia e saúde digital</li>
          <li>Marketing médico ético e eficaz</li>
          <li>Gestão de equipes e cultura organizacional</li>
        </ul>
        <h2>NexusMed — A Plataforma</h2>
        <p>
          A NexusMed é uma plataforma SaaS de gestão clínica que integra agendamento, prontuário eletrônico,
          faturamento e relacionamento com pacientes em um único sistema. Este blog é parte do nosso compromisso
          de entregar valor além do software.
        </p>
      </div>
    </div>
  );
}
