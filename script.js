const starterCourses = [
    {
      id: 1,
      code: "000070",
      name: "Informática para Melhor Idade",
      category: "Informática",
      level: "Essencial",
      duration: "10 meses",
      hours: 72,
      audience: "Pessoas da melhor idade que precisam aprender informática com calma, prática e segurança.",
      description: "Curso introdutório para desenvolver autonomia no computador, internet, aplicativos e ferramentas essenciais do Microsoft 365.",
      modules: [
        ["Introdução à Informática", "8h"],
        ["Internet, redes sociais e aplicativos", "20h"],
        ["Digitação", "20h"],
        ["Windows 11 Essencial", "12h"],
        ["Microsoft 365 - Word Essencial", "8h"],
        ["Desvendando segredos da era digital", "8h"]
      ]
    },
    {
      id: 2,
      code: "000071",
      name: "Operador de Computador Completo",
      bestSeller: 1,
      category: "Informática",
      level: "Essencial",
      duration: "12 meses",
      hours: 90,
      audience: "Iniciantes, jovens em busca do primeiro emprego e adultos que precisam de base em informática.",
      description: "Curso completo para aprender informática do zero, com Windows, pacote Microsoft 365, Excel e aulas práticas integradas.",
      modules: [
        ["Introdução à Informática", "8h"],
        ["Windows 11 Essencial", "12h"],
        ["Microsoft 365 - PowerPoint Avançado", "8h"],
        ["Microsoft 365 - Word Avançado", "8h"],
        ["Microsoft 365 - Excel Essencial", "8h"],
        ["Microsoft 365 - Excel Intermediário", "8h"],
        ["Microsoft 365 - Excel Avançado", "8h"],
        ["Aulas práticas - Operador Completo", "30h"]
      ]
    },
    {
      id: 3,
      code: "000140",
      name: "Designer Gráfico",
      category: "Informática",
      level: "Profissionalizante",
      duration: "12 meses",
      hours: 92,
      audience: "Alunos que querem atuar com criação visual, peças gráficas, redes sociais e identidade visual.",
      description: "Formação prática em design gráfico com CorelDRAW e ferramentas Adobe para criação de materiais visuais profissionais.",
      modules: [
        ["CorelDRAW - Graphics Suite - Módulo I", "12h"],
        ["CorelDRAW - Graphics Suite - Módulo II", "16h"],
        ["Adobe Photoshop", "16h"],
        ["Adobe Photoshop - Módulo avançado", "16h"],
        ["Adobe Premiere", "16h"],
        ["Adobe Illustrator", "16h"]
      ]
    },
  
    {
      id: 4,
      code: "000092",
      name: "Desenvolvedor de Games",
      category: "Informática",
      level: "Profissionalizante",
      duration: "14 meses",
      hours: 111,
      audience: "Jovens e iniciantes que gostam de jogos e querem aprender lógica, criação e desenvolvimento de games.",
      description: "Trilha prática para introduzir o aluno ao universo de games, lógica, pixel art, Kodu, Minecraft e desenvolvimento 3D.",
      modules: [
        ["Lógica de Programação - Versão 1", "15h"],
        ["Pixel Art", "12h"],
        ["Kodu Game Lab", "8h"],
        ["Minecraft", "12h"],
        ["Desenvolvimento de Games", "24h"],
        ["Desenvolvimento de Games 3D", "24h"],
        ["Desenvolvimento de Games 3D - Módulo final", "16h"]
      ]
    },
  
  
    {
      id: 37,
      code: "EXC-001",
      name: "Excel na Prática",
      category: "Informática",
      level: "Essencial",
      duration: "6 meses",
      hours: 34,
      audience: "Alunos e profissionais que querem dominar planilhas para o trabalho, estudos e rotinas do dia a dia.",
      description: "Curso prático de Excel do nível essencial ao avançado, complementado com Planilhas Google para trabalhar online e em equipe.",
      modules: [
        ["Microsoft 365 - Excel Essencial", "8h"],
        ["Microsoft 365 - Excel Intermediário", "8h"],
        ["Microsoft 365 - Excel Avançado", "8h"],
        ["Planilhas Google", "10h"]
      ]
    },
    {
      id: 38,
      code: "000285",
      name: "YouTube na Prática",
      category: "Informática",
      level: "Profissionalizante",
      duration: "10 meses",
      hours: 72,
      audience: "Pessoas que querem criar e manter um canal de sucesso no YouTube, produzindo conteúdo com qualidade visual profissional.",
      description: "Trilha prática para quem quer ter um canal de sucesso no YouTube, unindo estratégia de canal, edição de vídeo com After Effects, design com Canva e criação de artes com Photoshop.",
      modules: [
        ["Como ter um canal de sucesso: YouTube na prática", "8h"],
        ["Adobe After Effects Creative Cloud", "16h"],
        ["Design com Canva – Da Ideia à Criação Visual", "16h"],
        ["Adobe Photoshop - Creative Cloud - Módulo I", "16h"],
        ["Adobe Photoshop - Creative Cloud – Módulo III", "16h"]
      ]
    },
    {
      id: 5,
      code: "ADM-001",
      name: "Assistente Administrativo",
      category: "Gestão & Atendimento",
      level: "Profissionalizante",
      duration: "12 meses",
      hours: null,
      audience: "Pessoas que querem trabalhar em rotinas administrativas, departamento pessoal, finanças e apoio empresarial.",
      description: "O profissional terá capacidade para gerenciar um departamento administrativo, realizar fechamentos fiscais e contábeis, operar folhas de pagamento complexas e criar ferramentas automatizadas no Excel.",
      modules: [
        ["Rotinas Administrativas", "2 meses"],
        ["Departamento Pessoal", "4,5 meses"],
        ["Excel Essencial", "1 mês"],
        ["Excel Intermediário", "1 mês"],
        ["Excel Avançado", "1 mês"],
        ["Assistente Contábil", "2 meses"]
      ]
    },
    {
      id: 6,
      code: "BI-001",
      name: "Analista Exbi",
      category: "Informática",
      level: "Avançado",
      duration: "10 meses",
      hours: null,
      audience: "Profissionais que querem trabalhar melhor com dados, relatórios, automação e tomada de decisão.",
      description: "Trilha de alta performance para transformar o aluno em especialista em dados e produtividade, unindo Excel Avançado/VBA, Power BI e IA com automação de fluxos.",
      modules: [
        ["Excel Essencial", "1 mês"],
        ["Excel Intermediário", "1 mês"],
        ["Excel Avançado", "1 mês"],
        ["Power BI Módulo I", "2 meses"],
        ["Power BI Módulo II", "2 meses"],
        ["Power BI Módulo III", "2 meses"],
        ["Automatização com IA", "1 mês"]
      ]
    },
    {
      id: 7,
      code: "CONT-001",
      name: "Assistente Contábil",
      category: "Gestão & Atendimento",
      level: "Profissionalizante",
      duration: "10 meses",
      hours: null,
      audience: "Alunos que querem atuar com apoio contábil, cobrança, finanças e apresentações executivas.",
      description: "Abordagem prática para dominar legislação tributária brasileira, ferramentas de alta performance, HP 12C e PowerPoint para apresentações executivas.",
      modules: [
        ["Assistente Contábil", "2 meses"],
        ["Crédito e Cobrança", "1,5 meses"],
        ["Matemática Financeira na HP12C", "1 mês"],
        ["PowerPoint Essencial", "1 mês"],
        ["PowerPoint Avançado", "1 mês"],
        ["Excel Essencial", "1 mês"],
        ["Excel Intermediário", "1 mês"],
        ["Excel Avançado", "1 mês"]
      ]
    },
   {
      id: 8,
      code: "GP-001",
      name: "Gestão de Projetos",
      category: "Gestão & Atendimento",
      level: "Profissionalizante",
      duration: "6 meses",
      hours: null,
      audience: "Profissionais que querem liderar projetos, organizar processos e transformar ideias em resultados.",
      description: "Curso para preparar o profissional para liderar iniciativas complexas, dominando planejamento detalhado, metodologias e ferramentas de gestão.",
      modules: [
        ["Fundamentos da Gestão de Projetos", "2 meses"],
        ["Metodologias de Gestão de Projetos", "2 meses"],
        ["Ferramentas para Gestão de Projetos", "2 meses"]
      ]
    },
   /* {
      id: 9,
      code: "IA-001",
      name: "IA na Prática Profissional",
      category: "Informática",
      level: "Avançado",
      duration: "4 meses",
      hours: null,
      audience: "Pessoas que querem usar IA no trabalho para ganhar produtividade em vendas, marketing e gestão.",
      description: "Curso prático para aplicar Inteligência Artificial nas principais áreas de uma empresa, delegando tarefas operacionais e focando em estratégia.",
      modules: [
        ["Automatização com IA", "1 mês"],
        ["Vendas com IA", "1 mês"],
        ["Marketing com IA", "1 mês"],
        ["Gestão com IA", "1 mês"]
      ]
    },*/
    /*{
      id: 10,
      code: "ADMIA-001",
      name: "Pro Adm + IA",
      category: "Informática",
      level: "Avançado",
      duration: "8 meses",
      hours: null,
      audience: "Alunos que querem atuar em rotinas administrativas modernas com apoio de IA.",
      description: "Formação administrativa com finanças, vendas, gestão, pessoas e Inteligência Artificial aplicada à produtividade profissional.",
      modules: [
        ["Rotinas Administrativas", "2 meses"],
        ["Auxiliar de Serviços Financeiros", "2 meses"],
        ["Vendas com IA", "1 mês"],
        ["Gestão com IA", "1 mês"],
        ["Gestão de Pessoas", "1 mês"]
      ]
    },*/
    {
      id: 13,
      code: "000244",
      name: "Administrativo Essencial",
      category: "Gestão & Atendimento",
      level: "Essencial",
      duration: "12 meses",
      hours: 92,
      audience: "Alunos que querem começar na área administrativa, com base em rotinas, contabilidade, RH, departamento pessoal e gestão de pessoas.",
      description: "Curso administrativo de base para preparar o aluno para rotinas essenciais de escritório e apoio empresarial.",
      modules: [
        ["Rotinas Administrativas - New", "16h"],
        ["Assistente Contábil - New", "16h"],
        ["Assistente de Recursos Humanos", "16h"],
        ["Departamento Pessoal", "36h"],
        ["Gestão de Pessoas", "8h"]
      ]
    },
    {
      id: 14,
      code: "000088",
      name: "Pacote Office",
      category: "Informática",
      level: "Essencial",
      duration: "12 meses",
      hours: 86,
      audience: "Alunos que já têm noções básicas de computador e precisam dominar ferramentas de escritório para estudo, trabalho e produtividade.",
      description: "Formação prática em Microsoft 365 e ferramentas Google, com foco em documentos, apresentações, planilhas e uso profissional do pacote Office.",
      modules: [
        ["Microsoft 365 - PowerPoint Essencial", "8h"],
        ["Microsoft 365 - PowerPoint Avançado", "8h"],
        ["Apresentações Google", "10h"],
        ["Microsoft 365 - Word Essencial", "8h"],
        ["Microsoft 365 - Word Avançado", "8h"],
        ["Documentos Google", "10h"],
        ["Microsoft 365 - Excel Essencial", "8h"],
        ["Microsoft 365 - Excel Intermediário", "8h"],
        ["Microsoft 365 - Excel Avançado", "8h"],
        ["Planilhas Google", "10h"]
      ]
    },
    {
      id: 15,
      code: "000019",
      name: "Info Kids",
      category: "Informática",
      level: "Essencial",
      duration: "12 meses",
      hours: 64,
      audience: "Crianças e pré-adolescentes que querem aprender informática, lógica e criação de jogos de forma lúdica.",
      description: "O Info Kids prepara as crianças para utilizar a tecnologia com criatividade, segurança e autonomia. Durante o curso, os alunos aprendem informática básica, segurança e ética digital, produção de textos, apresentações, planilhas, ferramentas de comunicação e inteligência artificial, desenvolvendo habilidades essenciais para os estudos e para o futuro.",
      modules: [
        ["Exploradores Digitais", "Primeiros Passos"],
        ["Aventura Digital Segura", "Ética"],
        ["Palavras que Conectam", "Criando Textos"],
        ["Apresente-se", "Dê Vida Às Suas Ideias com Power Point"],
        ["Desafio das Planilhas", "Lógica e Organização com Excel"],
        ["Conectados!", "Comunicação e Ferramentas para o Mundo"],
        ["Laboratório de IA", "Descobrindo o Mundo"]
      ]
    },
    {
      id: 16,
      code: "000010",
      name: "Montagem e Manutenção de Computadores",
      category: "Informática",
      level: "Profissionalizante",
      duration: "8 meses",
      hours: 64,
      audience: "Alunos que querem aprender manutenção, redes e suporte técnico para computadores.",
      description: "Curso prático para entender infraestrutura, redes, lógica, montagem e manutenção de computadores.",
      modules: [
        ["Redes - Cabeamento e Infraestrutura", "13h"],
        ["Redes - Tecnologias Wireless", "8h"],
        ["Redes - Lógica e Estruturação", "12h"],
        ["Montagem e Manutenção de Computadores", "16h"],
        ["Montagem Prática", "15h"]
      ]
    },
    {
      id: 17,
      code: "000201",
      name: "Power BI",
      category: "Informática",
      level: "Avançado",
      duration: "6 meses",
      hours: 48,
      audience: "Alunos e profissionais que querem criar dashboards, relatórios e análises visuais para tomada de decisão.",
      description: "Curso focado nos módulos essenciais de Microsoft Power BI, com construção de relatórios e visualização de dados.",
      modules: [
        ["Microsoft Power BI - Módulo I", "16h"],
        ["Microsoft Power BI - Módulo II", "16h"],
        ["Microsoft Power BI - Módulo III", "16h"]
      ]
    },
    {
      id: 18,
      code: "000260",
      name: "Rotinas Administrativas Essencial",
      category: "Gestão & Atendimento",
      level: "Essencial",
      duration: "6 meses",
      hours: 40,
      audience: "Alunos que querem começar na área administrativa e entender rotinas básicas de escritório, RH, contabilidade e gestão.",
      description: "Curso de entrada para a área administrativa, com módulos essenciais para apoio em empresas e escritórios.",
      modules: [
        ["Assistente de Recursos Humanos", "16h"],
        ["Assistente Contábil - New", "16h"],
        ["Gestão de Pessoas", "8h"]
      ]
    },
    {
      id: 19,
      code: "000224",
      name: "Técnicas de Vendas e Marketing Digital",
      category: "Gestão & Atendimento",
      level: "Profissionalizante",
      duration: "8 meses",
      hours: 62,
      audience: "Alunos que querem atuar com vendas, telemarketing, marketing digital e campanhas online.",
      description: "Curso voltado para técnicas comerciais e marketing digital, com prática em vendas, telemarketing, marketing e Google Ads.",
      modules: [
        ["Agente de Vendas", "16h"],
        ["Telemarketing", "12h"],
        ["Marketing Digital I", "16h"],
        ["Marketing Digital II", "12h"],
        ["Google Adwords", "6h"]
      ]
    },
    {
      id: 20,
      code: "000118",
      name: "Informática Premium - Operador de Computador + Manutenção",
      category: "Informática",
      level: "Profissionalizante",
      duration: "20 meses",
      hours: 156,
      audience: "Alunos que querem uma formação ampla em informática, pacote Office, redes e manutenção de computadores.",
      description: "Trilha completa que une Operador de Computador com fundamentos de redes e manutenção, formando uma base técnica mais robusta.",
      modules: [
        ["Introdução à Informática", "8h"],
        ["Windows 11 Essencial", "12h"],
        ["Windows 11 Avançado", "8h"],
        ["Microsoft 365 - Outlook Essencial", "8h"],
        ["Microsoft 365 - PowerPoint Essencial", "8h"],
        ["Microsoft 365 - PowerPoint Avançado", "8h"],
        ["Microsoft 365 - Word Essencial", "8h"],
        ["Microsoft 365 - Word Avançado", "8h"],
        ["Microsoft 365 - Excel Essencial", "8h"],
        ["Microsoft 365 - Excel Intermediário", "8h"],
        ["Microsoft 365 - Excel Avançado", "8h"],
        ["Redes - Tecnologias Wireless", "8h"],
        ["Redes - Lógica e Estruturação", "12h"],
        ["Redes - Cabeamento e Infraestrutura", "13h"],
        ["Montagem e Manutenção de Computadores", "16h"],
        ["Montagem Prática", "15h"]
      ]
    },
    {
      id: 21,
      code: "000061",
      name: "Gestor Administrativo Informatizado",
      category: "Gestão & Atendimento",
      level: "Profissionalizante",
      duration: "24 meses",
      hours: 179,
      audience: "Alunos que querem uma formação administrativa completa unindo informática, Office, RH, departamento pessoal, contabilidade e gestão.",
      description: "Curso avançado que une informática profissional com formação administrativa completa, preparando o aluno para atuar em múltiplos setores empresariais.",
      modules: [
        ["Introdução à Informática", "8h"],
        ["Windows 11 Essencial", "12h"],
        ["Windows 11 Avançado", "8h"],
        ["Microsoft 365 - Word Essencial", "8h"],
        ["Microsoft 365 - Word Avançado", "8h"],
        ["Microsoft 365 - PowerPoint Essencial", "8h"],
        ["Microsoft 365 - PowerPoint Avançado", "8h"],
        ["Microsoft 365 - Excel Essencial", "8h"],
        ["Microsoft 365 - Excel Intermediário", "8h"],
        ["Microsoft 365 - Excel Avançado", "8h"],
        ["Assistente de Recursos Humanos", "16h"],
        ["Assistente Contábil", "17h"],
        ["Gestão de Pessoas", "8h"],
        ["Departamento Pessoal", "36h"],
        ["Rotinas Administrativas", "16h"],
        ["Desenvolvimento Profissional", "2h"]
      ]
    },
    {
      id: 22,
      code: "000021",
      name: "Atendente de Farmácia",
      category: "Gestão & Atendimento",
      level: "Profissionalizante",
      duration: "8 meses",
      hours: 58,
      audience: "Alunos que querem trabalhar em farmácias, drogarias e atendimento ao público na área farmacêutica.",
      description: "Curso voltado para introduzir o aluno ao atendimento em farmácias, vendas, operação de caixa e comunicação com clientes.",
      modules: [
        ["Como Conquistar um Emprego", "5h"],
        ["Agente de Vendas", "16h"],
        ["Atendente de Farmácia", "13h"],
        ["Operador de Caixa", "12h"],
        ["Telemarketing", "12h"]
      ]
    },
    {
      id: 23,
      code: "0000222",
      name: "Marketing Pro: Canva + IA",
      category: "Informática",
      level: "Profissionalizante",
      duration: "8 meses",
      hours: 60,
      audience: "Alunos que querem desenvolver expertise em marketing digital, social media, design no Canva e marketing em geral.",
      description: "Curso voltado para introduzir o aluno ao marketing digital e a criação de conteúdo para a internet",
      modules: [
        ["Marketing Digital - Módulo 1", "12h"],
        ["Marketing Digital - Módulo 2", "16h"],
        ["IA Criativa", "8h"],
        ["Marketing com IA", "8h"],
        ["Design com Canva", "16h"]
      ]
    },
    {
      id: 24,
      code: "ING-001",
      name: "Inglês",
      bestSeller: 2,
      category: "Inglês",
      level: "Essencial",
      duration: "1 ano por módulo",
      hours: null,
      audience: "Pessoas que querem aprender e dominar o idioma inglês.",
      description: "Fazemos teste de nivelamento, turmas multinível, duas horas por semana.",
      modules: [
        ["Básico I", "1 ano"],
        ["Básico II", "1 ano"],
        ["Intermediário I", "1 ano"],
        ["Intermediário II", "1 ano"],
        ["Avançado I", "1 ano"],
        ["Avançado II", "1 ano"]
      ]
    },
    {
      id: 25,
      code: "ARH-001",
      name: "Analista de Recursos Humanos",
      category: "Gestão & Atendimento",
      level: "Avançado",
      duration: "16 meses",
      hours: null,
      audience: "Profissionais que desejam atuar na área de Recursos Humanos e Departamento Pessoal de forma completa.",
      description: "Formação completa em RH, desde rotinas e cálculos até gestão avançada de pessoas e Excel.",
      modules: [
        ["Rotinas Administrativas", "2 meses"],
        ["Matemática Financeira na HPC", "1 mês"],
        ["Assistente Contábil", "2,2 meses"],
        ["Gestão de Pessoas", "1 mês"],
        ["Excel Essencial", "1 mês"],
        ["Excel Intermediário", "1 mês"],
        ["Excel Avançado", "1 mês"],
        ["Departamento Pessoal", "5 meses"],
        ["Assistente de Recursos Humanos", "2 meses"]
      ]
    },
    {
      id: 26,
      code: "ING-KIDS",
      name: "Inglês Kids",
      category: "Inglês",
      level: "Essencial",
      duration: "1 ano por módulo",
      hours: null,
      audience: "Inglês para crianças a partir de 9 anos.",
      description: "Curso de inglês voltado para o público infantil.",
      modules: [
        ["Kids I", "1 ano"],
        ["Kids II", "1 ano"],
        ["Kids III", "1 ano"],
        ["Kids IV", "1 ano"],
        ["Kids V", "1 ano"]
      ]
    },
    /*{
      id: 27,
      code: "G-KIDS",
      name: "Games Kids",
      category: "Informática",
      level: "Essencial",
      duration: "6 meses",
      hours: null,
      audience: "Crianças a partir de 9 anos.",
      description: "O curso Games Kids apresenta o universo da criação de jogos de maneira divertida, prática e educativa. Ao longo das aulas, os alunos desenvolvem criatividade, raciocínio lógico, noções de programação e resolução de problemas por meio de ferramentas como Minecraft, Kodu Game Lab, Roblox e Pixel Art.",
      modules: [
        ["Minecraft", ""],
        ["Kodu Game Lab", ""],
        ["Roblox", ""],
        ["Pixel Art", ""]
      ]
    },*/
    {
      id: 28,
      code: "PREM-29",
      name: "Info Games Kids",
      category: "Premium",
      level: "Essencial",
      isPremium: true,
      duration: "18 meses",
      hours: 64,
      audience: "Alunos buscando formação completa.",
      description: "Formação completa unindo dois cursos para maior desenvolvimento de habilidades em informática e games para crianças.",
      modules: [
        ["Exploradores Digitais", "Primeiros Passos"],
        ["Aventura Digital Segura", "Ética"],
        ["Palavras que Conectam", "Criando Textos"],
        ["Apresente-se", "Dê Vida Às Suas Ideias com Power Point"],
        ["Desafio das Planilhas", "Lógica e Organização com Excel"],
        ["Conectados!", "Comunicação e Ferramentas para o Mundo"],
        ["Laboratório de IA", "Descobrindo o Mundo"],
        ["Minecraft", ""],
        ["Kodu Game Lab", ""],
        ["Roblox", ""],
        ["Pixel Art", ""]
      ]
    },
    {
      id: 29,
      code: "PREM-30",
      name: "Informática Master",
      category: "Premium",
      level: "Profissionalizante",
      isPremium: true,
      duration: "24 meses",
      hours: 182,
      audience: "Alunos buscando formação completa.",
      description: "Formação completa unindo dois cursos para criar um profissional em T.",
      modules: [
        ["Introdução à Informática", "8h"],
        ["Windows 11 Essencial", "12h"],
        ["Microsoft 365 - PowerPoint Avançado", "8h"],
        ["Microsoft 365 - Word Avançado", "8h"],
        ["Microsoft 365 - Excel Essencial", "8h"],
        ["Microsoft 365 - Excel Intermediário", "8h"],
        ["Microsoft 365 - Excel Avançado", "8h"],
        ["Aulas práticas - Operador Completo", "30h"],
        ["CorelDRAW - Graphics Suite - Módulo I", "12h"],
        ["CorelDRAW - Graphics Suite - Módulo II", "16h"],
        ["Adobe Photoshop", "16h"],
        ["Adobe Photoshop - Módulo avançado", "16h"],
        ["Adobe Premiere", "16h"],
        ["Adobe Illustrator", "16h"]
      ]
    },
    {
      id: 30,
      code: "PREM-31",
      name: "Designer Pro",
      category: "Premium",
      level: "Profissionalizante",
      isPremium: true,
      duration: "20 meses",
      hours: 152,
      audience: "Alunos buscando formação completa.",
      description: "Formação completa unindo dois cursos para criar um profissional em T.",
      modules: [
        ["CorelDRAW - Graphics Suite - Módulo I", "12h"],
        ["CorelDRAW - Graphics Suite - Módulo II", "16h"],
        ["Adobe Photoshop", "16h"],
        ["Adobe Photoshop - Módulo avançado", "16h"],
        ["Adobe Premiere", "16h"],
        ["Adobe Illustrator", "16h"],
        ["Marketing Digital - Módulo 1", "12h"],
        ["Marketing Digital - Módulo 2", "16h"],
        ["IA Criativa", "8h"],
        ["Marketing com IA", "8h"],
        ["Design com Canva", "16h"]
      ]
    },
    {
      id: 31,
      code: "PREM-32",
      name: "Gestor Administrativo",
      category: "Premium",
      level: "Profissionalizante",
      isPremium: true,
      duration: "22 meses",
      hours: 0,
      audience: "Alunos buscando formação completa.",
      description: "Formação completa unindo dois cursos para criar um profissional em T.",
      modules: [
        ["Rotinas Administrativas", "2 meses"],
        ["Departamento Pessoal", "4,5 meses"],
        ["Excel Essencial", "1 mês"],
        ["Excel Intermediário", "1 mês"],
        ["Excel Avançado", "1 mês"],
        ["Assistente Contábil", "2 meses"],
        ["Excel Essencial", "1 mês"],
        ["Excel Intermediário", "1 mês"],
        ["Excel Avançado", "1 mês"],
        ["Power BI Módulo I", "2 meses"],
        ["Power BI Módulo II", "2 meses"],
        ["Power BI Módulo III", "2 meses"],
        ["Automatização com IA", "1 mês"]
      ]
    },
    {
      id: 32,
      code: "PREM-33",
      name: "Gestor Projetizado",
      category: "Premium",
      level: "Profissionalizante",
      isPremium: true,
      duration: "18 meses",
      hours: 0,
      audience: "Alunos buscando formação completa.",
      description: "Formação completa unindo dois cursos para criar um profissional em T.",
      modules: [
        ["Rotinas Administrativas", "2 meses"],
        ["Departamento Pessoal", "4,5 meses"],
        ["Excel Essencial", "1 mês"],
        ["Excel Intermediário", "1 mês"],
        ["Excel Avançado", "1 mês"],
        ["Assistente Contábil", "2 meses"],
        ["Fundamentos da Gestão de Projetos", "2 meses"],
        ["Metodologias de Gestão de Projetos", "2 meses"],
        ["Ferramentas para Gestão de Projetos", "2 meses"]
      ]
    },
    {
      id: 33,
      code: "PREM-34",
      name: "Gestor Contábil",
      category: "Premium",
      level: "Profissionalizante",
      isPremium: true,
      duration: "20 meses",
      hours: 0,
      audience: "Alunos buscando formação completa.",
      description: "Formação completa unindo dois cursos para criar um profissional em T.",
      modules: [
        ["Assistente Contábil", "2 meses"],
        ["Crédito e Cobrança", "1,5 meses"],
        ["Matemática Financeira na HP12C", "1 mês"],
        ["PowerPoint Essencial", "1 mês"],
        ["PowerPoint Avançado", "1 mês"],
        ["Excel Essencial", "1 mês"],
        ["Excel Intermediário", "1 mês"],
        ["Excel Avançado", "1 mês"],
        ["Excel Essencial", "1 mês"],
        ["Excel Intermediário", "1 mês"],
        ["Excel Avançado", "1 mês"],
        ["Power BI Módulo I", "2 meses"],
        ["Power BI Módulo II", "2 meses"],
        ["Power BI Módulo III", "2 meses"],
        ["Automatização com IA", "1 mês"]
      ]
    },
    {
      id: 34,
      code: "PREM-35",
      name: "Gestor de RH",
      category: "Premium",
      level: "Profissionalizante",
      isPremium: true,
      duration: "22 meses",
      hours: 48,
      audience: "Alunos buscando formação completa.",
      description: "Formação completa unindo dois cursos para criar um profissional em T.",
      modules: [
        ["Rotinas Administrativas", "2 meses"],
        ["Matemática Financeira na HPC", "1 mês"],
        ["Assistente Contábil", "2,2 meses"],
        ["Gestão de Pessoas", "1 mês"],
        ["Excel Essencial", "1 mês"],
        ["Excel Intermediário", "1 mês"],
        ["Excel Avançado", "1 mês"],
        ["Departamento Pessoal", "5 meses"],
        ["Assistente de Recursos Humanos", "2 meses"],
        ["Microsoft Power BI - Módulo I", "16h"],
        ["Microsoft Power BI - Módulo II", "16h"],
        ["Microsoft Power BI - Módulo III", "16h"]
      ]
    },
   {
      id: 35,
      code: "PREM-36",
      name: "Gestor Digital Pro",
      category: "Premium",
      level: "Profissionalizante",
      isPremium: true,
      duration: "16 meses",
      hours: 60,
      audience: "Alunos buscando formação completa.",
      description: "Formação completa unindo dois cursos para criar um profissional em T.",
      modules: [
        ["Rotinas Administrativas", "2 meses"],
        ["Auxiliar de Serviços Financeiros", "2 meses"],
        ["Vendas com IA", "1 mês"],
        ["Gestão com IA", "1 mês"],
        ["Gestão de Pessoas", "1 mês"],
        ["Marketing Digital - Módulo 1", "12h"],
        ["Marketing Digital - Módulo 2", "16h"],
        ["IA Criativa", "8h"],
        ["Marketing com IA", "8h"],
        ["Design com Canva", "16h"]
      ]
    },
    {
      id: 36,
      code: "PREM-37",
      name: "Informática Master (Manutenção)",
      category: "Premium",
      level: "Profissionalizante",
      isPremium: true,
      duration: "20 meses",
      hours: 154,
      audience: "Alunos buscando formação completa.",
      description: "Formação completa unindo dois cursos para criar um profissional em T.",
      modules: [
        ["Introdução à Informática", "8h"],
        ["Windows 11 Essencial", "12h"],
        ["Microsoft 365 - PowerPoint Avançado", "8h"],
        ["Microsoft 365 - Word Avançado", "8h"],
        ["Microsoft 365 - Excel Essencial", "8h"],
        ["Microsoft 365 - Excel Intermediário", "8h"],
        ["Microsoft 365 - Excel Avançado", "8h"],
        ["Aulas práticas - Operador Completo", "30h"],
        ["Redes - Cabeamento e Infraestrutura", "13h"],
        ["Redes - Tecnologias Wireless", "8h"],
        ["Redes - Lógica e Estruturação", "12h"],
        ["Montagem e Manutenção de Computadores", "16h"],
        ["Montagem Prática", "15h"]
      ]
    }
  ];
  
  /* ===== Categorias =====
     Para mudar um curso de categoria, altere o "id do curso" em AREA_BY_ID.
     Cursos premium têm categoria normal + a marca isPremium (filtro "Premium"). */
  const ICONS = {
    informatica: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',
    dados: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    design: '<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>',
    games: '<rect x="2" y="6" width="20" height="12" rx="4"/><path d="M6 12h4M8 10v4"/><circle cx="15" cy="13" r="1"/><circle cx="18" cy="11" r="1"/>',
    gestao: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>',
    vendas: '<path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7A8.4 8.4 0 1 1 21 11.5z"/>',
    idiomas: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/>',
    outros: '<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>',
    todas: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
    star: '<path d="M12 2l3 6.9 7.5.7-5.7 5 1.7 7.4L12 18l-6.5 4 1.7-7.4-5.7-5 7.5-.7z"/>'
  };
  
  const AREAS = [
    { id: "informatica", name: "Informática & Suporte", color: "#1f6feb" },
    { id: "dados",       name: "Dados & Automação",     color: "#0f9b8e" },
    { id: "design",      name: "Design & Marketing",    color: "#c2410c" },
    { id: "games",       name: "Games & Kids",          color: "#7c3aed" },
    { id: "gestao",      name: "Administração & Gestão", color: "#0d2f5e" },
    { id: "vendas",      name: "Vendas & Atendimento",  color: "#d71920" },
    { id: "idiomas",     name: "Idiomas",               color: "#0e7490" },
    { id: "outros",      name: "Outros cursos",         color: "#667085" }
  ];
  
  const AREA_BY_ID = {
    // Informática & Suporte
    1: "informatica", 2: "informatica", 14: "informatica", 16: "informatica",
    20: "informatica", 29: "informatica", 36: "informatica",
    // Dados & Automação
    6: "dados", 17: "dados",
    6: "dados", 17: "dados", 37: "dados",
    // Design & Marketing
    3: "design", 23: "design", 30: "design", 35: "design", 38: "design",
    // Games & Kids
    4: "games", 15: "games", 28: "games",
    // Administração & Gestão
    5: "gestao", 13: "gestao", 18: "gestao", 21: "gestao", 25: "gestao",
    31: "gestao", 32: "gestao", 33: "gestao", 34: "gestao",
    // Vendas & Atendimento
    19: "vendas", 22: "vendas",
    // Idiomas
    24: "idiomas", 26: "idiomas"
  };
  
  const LEVELS = ["Essencial", "Profissionalizante", "Avançado"];
  const areaOf = id => AREAS.find(a => a.id === id) || AREAS[AREAS.length - 1];
  const svg = (paths, extra = "") => `<svg viewBox="0 0 24 24" aria-hidden="true" ${extra}>${paths}</svg>`;
  const norm = s => String(s || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  
  let courses = starterCourses.map(c => ({
    ...c,
    area: AREA_BY_ID[c.id] || "outros",
    _text: norm([c.name, c.level, c.audience, c.description, areaOf(AREA_BY_ID[c.id] || "outros").name, c.isPremium ? "premium" : "", c.modules.flat().join(" ")].join(" "))
  }));
  let selectedId = courses[0]?.id;
  
  const state = { q: "", area: "todas", level: "todos", premium: false, sort: "relevancia" };
  
  const search = document.getElementById("search");
  const sortSelect = document.getElementById("sortSelect");
  const chipsEl = document.getElementById("areaChips");
  const catWrap = document.getElementById("catWrap");
  const catToggle = document.getElementById("catToggle");
  const catLabel = document.getElementById("catLabel");
  const levelSeg = document.getElementById("levelSeg");
  const resultsInfo = document.getElementById("resultsInfo");
  const clearBtn = document.getElementById("clearBtn");
  const coursesEl = document.getElementById("courses");
  const detailsEl = document.getElementById("details");
  
  function parseDuration(text) {
    const match = String(text).replace(",", ".").match(/[0-9]+([.][0-9]+)?/);
    return match ? Number(match[0]) : 0;
  }
  const monthsOf = c => parseDuration(c.duration) * (/ano/i.test(c.duration) ? 12 : 1);
  
  /* Filtra ignorando uma dimensão (usado para calcular os contadores de cada filtro) */
  function matches(c, skip) {
    if (skip !== "q" && state.q && !c._text.includes(norm(state.q.trim()))) return false;
    if (skip !== "area" && state.area !== "todas" && c.area !== state.area) return false;
    if (skip !== "level" && state.level !== "todos" && c.level !== state.level) return false;
    if (skip !== "premium" && state.premium && !c.isPremium) return false;
    return true;
  }
  
  function sortList(list) {
    const byName = (a, b) => a.name.localeCompare(b.name, "pt-BR");
    const s = state.sort;
    return list.sort((a, b) => {
      if (s === "az") return byName(a, b);
      if (s === "menor") return monthsOf(a) - monthsOf(b) || byName(a, b);
      if (s === "maior") return monthsOf(b) - monthsOf(a) || byName(a, b);
      const ba = a.bestSeller || 99, bb = b.bestSeller || 99;
      if (ba !== bb) return ba - bb;
      if (!!a.isPremium !== !!b.isPremium) return a.isPremium ? 1 : -1;
      return byName(a, b);
    });
  }
  
  const filteredCourses = () => sortList(courses.filter(c => matches(c)));
  const filtersActive = () => state.q.trim() || state.area !== "todas" || state.level !== "todos" || state.premium;
  
  function renderChips() {
    const scroll = chipsEl.scrollLeft;
    const base = courses.filter(c => matches(c, "area"));
    const chip = (id, label, count, color, icon, extra = "") => `
      <button type="button" class="chip ${extra} ${state.area === id && !extra.includes("chip-premium") ? "active" : ""} ${count === 0 ? "zero" : ""}"
        data-area="${id}" style="--c:${color}" aria-pressed="${state.area === id}">
        ${svg(icon)}<span>${label}</span><em>${count}</em>
      </button>`;
  
    let html = chip("todas", "Todos", base.length, "#071d3a", ICONS.todas);
    html += AREAS.filter(a => courses.some(c => c.area === a.id))
      .map(a => chip(a.id, a.name, base.filter(c => c.area === a.id).length, a.color, ICONS[a.id])).join("");
  
    const premCount = courses.filter(c => matches(c, "premium") && c.isPremium).length;
    html += '<span class="chip-sep"></span>' + `
      <button type="button" class="chip chip-premium ${state.premium ? "active" : ""} ${premCount === 0 && !state.premium ? "zero" : ""}"
        data-premium="1" style="--c:#b8862b" aria-pressed="${state.premium}">
        ${svg(ICONS.star)}<span>Premium</span><em>${premCount}</em>
      </button>`;
  
    chipsEl.innerHTML = html;
    chipsEl.scrollLeft = scroll;
    catLabel.textContent = (state.area === "todas" ? "Todos" : areaOf(state.area).name) + (state.premium ? " + Premium" : "");
  }
  
  function renderLevels() {
    const base = courses.filter(c => matches(c, "level"));
    const btn = (val, label, n) => `<button type="button" data-level="${val}" class="${state.level === val ? "active" : ""}" aria-pressed="${state.level === val}">${label}<small>${n}</small></button>`;
    levelSeg.innerHTML = btn("todos", "Todos", base.length) +
      LEVELS.map(l => btn(l, l, base.filter(c => c.level === l).length)).join("");
  }
  
  function badgesHTML(c, withLevel = true) {
    return [
      withLevel ? `<span class="badge">${c.level || "Nível a definir"}</span>` : "",
      c.isPremium ? `<span class="badge badge-premium">${svg(ICONS.star)}Premium</span>` : "",
      c.bestSeller ? '<span class="badge badge-best">Mais vendido</span>' : ""
    ].join("");
  }
  
  let cardIndex = 0;
  function cardHTML(c) {
    const a = areaOf(c.area);
    return `
      <article class="course-card ${c.id === selectedId ? "active" : ""} ${c.isPremium ? "is-premium" : ""}"
        data-id="${c.id}" tabindex="0" role="button" style="--i:${Math.min(cardIndex++, 14)}">
        <div class="card-top">
          <span class="area-tag" style="--c:${a.color}">${svg(ICONS[a.id])}${a.name}</span>
          <div class="pill">${c.duration}</div>
        </div>
        <h3>${c.name}</h3>
        <p>${c.audience || c.description}</p>
        <div class="badges">${badgesHTML(c)}</div>
      </article>`;
  }
  
  function renderCourses(list) {
    cardIndex = 0;
    if (!list.length) {
      coursesEl.innerHTML = '<div class="empty">Nenhum curso encontrado com esses filtros.<br><br><button type="button" class="btn light" data-action="clear">Limpar filtros</button></div>';
      return;
    }
    const grouped = state.sort === "relevancia" && state.area === "todas";
    if (grouped) {
      coursesEl.innerHTML = AREAS.map(a => {
        const items = list.filter(c => c.area === a.id);
        if (!items.length) return "";
        return `
          <section class="group">
            <div class="group-head" style="--c:${a.color}">
              <span class="group-icon">${svg(ICONS[a.id])}</span>
              <h2>${a.name}</h2><span class="count">${items.length}</span>
            </div>
            <div class="group-grid">${items.map(cardHTML).join("")}</div>
          </section>`;
      }).join("");
    } else {
      coursesEl.innerHTML = `<div class="group-grid">${list.map(cardHTML).join("")}</div>`;
    }
  }
  
  function renderInfo(list) {
    const n = list.length;
    let txt = `<strong>${n}</strong> ${n === 1 ? "curso encontrado" : "cursos encontrados"}`;
    if (state.area !== "todas") txt += ` em <strong>${areaOf(state.area).name}</strong>`;
    if (state.premium) txt += " · somente Premium";
    resultsInfo.innerHTML = txt;
    clearBtn.hidden = !filtersActive();
  }
  
  function render() {
    const list = filteredCourses();
    if (list.length && !list.some(c => c.id === selectedId)) selectedId = list[0].id;
    renderChips();
    renderLevels();
    renderInfo(list);
    renderCourses(list);
    if (list.length) renderDetails(); else detailsEl.innerHTML = "";
  }
  
  function clearFilters() {
    Object.assign(state, { q: "", area: "todas", level: "todos", premium: false });
    search.value = "";
    render();
  }
  
  catToggle.addEventListener("click", () => {
    const open = catWrap.classList.toggle("open");
    catToggle.setAttribute("aria-expanded", open);
  });
  chipsEl.addEventListener("click", e => {
    const b = e.target.closest(".chip");
    if (!b) return;
    if (b.dataset.premium) state.premium = !state.premium;
    else state.area = b.dataset.area;
    render();
    catWrap.classList.remove("open");
    catToggle.setAttribute("aria-expanded", "false");
  });
  levelSeg.addEventListener("click", e => {
    const b = e.target.closest("button[data-level]");
    if (!b) return;
    state.level = b.dataset.level;
    render();
  });
  coursesEl.addEventListener("click", e => {
    if (e.target.closest("[data-action='clear']")) return clearFilters();
    const card = e.target.closest(".course-card");
    if (card) selectCourse(Number(card.dataset.id));
  });
  coursesEl.addEventListener("keydown", e => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const card = e.target.closest(".course-card");
    if (card) { e.preventDefault(); selectCourse(Number(card.dataset.id)); }
  });
  search.addEventListener("input", () => { state.q = search.value; render(); });
  sortSelect.addEventListener("change", () => { state.sort = sortSelect.value; render(); });
  clearBtn.addEventListener("click", clearFilters);
  
  function renderDetails() {
    const course = courses.find(c => c.id === selectedId) || courses[0];
    if (!course) return;
  
    detailsEl.innerHTML = `
      <button class="mobile-close" onclick="closeDetails()" aria-label="Fechar detalhes">×</button>
      <div class="print-header">
        <img class="print-logo" src="LOGO_SEM FUNDO(2).png" alt="Decole Cursos Profissionalizantes e Idiomas" />
        <div class="print-title">
          <small>Ficha de curso</small>
          <h1>${course.name}</h1>
        </div>
      </div>
  
      <div class="details-banner">
        <div class="code">Código ${course.code || 'sem código'}</div>
        <h2>${course.name}</h2>
        <div class="details-badges">${badgesHTML(course, false)}</div>
      </div>
      <div class="details-content">
        <div class="detail-grid">
          <div class="mini"><small>Duração</small><strong>${course.duration}</strong></div>
          <div class="mini"><small>Nível</small><strong>${course.level || 'A definir'}</strong></div>
          <div class="mini"><small>Categoria</small><strong>${areaOf(course.area).name}</strong></div>
        </div>
  
        <h3 class="section-title">Para quem é</h3>
        <p>${course.audience || 'Público-alvo ainda não cadastrado.'}</p>
  
        <h3 class="section-title">Objetivo do curso</h3>
        <p>${course.description || 'Descrição ainda não cadastrada.'}</p>
  
        <h3 class="section-title">Módulos do curso</h3>
        <div class="modules">
          ${course.modules.map((module, index) => `
            <div class="module">
              <div class="num">${index + 1}</div>
              <strong>${module[0]}</strong>
              <small>${module[1] || ''}</small>
            </div>
          `).join("")}
        </div>
  
        <div class="modal-actions">
          <a class="btn whatsapp" href="https://wa.me/5521991143254?text=${encodeURIComponent('Olá, tenho interesse em saber mais sobre esse curso: ' + course.name)}" target="_blank" style="text-decoration: none; display: inline-block; text-align: center;">WhatsApp</a>
        </div>
      </div>
    `;
  }
  
  function selectCourse(id) {
    selectedId = id;
    coursesEl.querySelectorAll(".course-card").forEach(el => el.classList.toggle("active", Number(el.dataset.id) === id));
    renderDetails();
    if (window.matchMedia("(max-width: 980px)").matches) {
      document.body.classList.add("details-open");
    }
  }
  
  function closeDetails() {
    document.body.classList.remove("details-open");
  }
  
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeDetails();
  });
  
  render();