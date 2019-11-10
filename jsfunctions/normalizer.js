var input = "";
//example to input
(
() => {
    input = `
    São Paulo, SP
    DESCRIPTION

    Are you the C#/.NET Software Developer who wants to live abroad? Do you have a dream to live in Europe? Why not move to Amsterdam to help our eCommerce grow?

    Then albelli is looking for you! Wherever you are in the world, we will happily help you with relocation right to the centre of Amsterdam. Get in touch!

    Purpose

    As a .NET Software Developer for one of our squads, you will be designing, building and maintaining robust, highly scalable, testable and maintainable applications and services in the AWS cloud.

    Main responsibilities

    Design and develop robust, testable and maintainable software solutions;
    Document software, in particular business rules and key technical decisions;
    Ensure that albelli’s eCommerce platform runs smoothly;
    Research and make suggestions on how to improve our existing eCommerce platform.
    Tech keywords

    .NET Core, C#, F#, AWS, Serverless, Teamcity, Jenkins, Docker, Entity Framework, Dapper, Slack, GitHub, OctopusDeploy.

    Requirements

    Excellent C# coding skills;
    Advanced .NET platform knowledge;
    Some experience with Microsoft web technologies (ASP.NET MVC or Web API);
    Experience with SQL Server and an ORM framework of choice;
    Fluent in English.
    We offer

    Freedom to experiment with technologies;
    An international office hosting over 30 nationalities;
    A social atmosphere (lunch, Friday drinks, parties, sports, etc.);
    Central location in one of Europe's most vibrant cities;
    An informal, fun and driven culture as well as good work-life balance;
    Great relocation support..
    Job Type: Full-time

    São Paulo, SP
    R$ 4.000 por mês
    Desenvolvimento de uma plataforma própria no ambiente web, sendo assim, estamos em busca de profissionais que desejam fazer a diferença e agregar ao projeto e a empresa.

    Conhecimentos Necessários:
    Node JS, MongoDB, JavaScript, HTML, CSS, React + Redux..
    Administração de servidores cloud + Nginx, razoável conhecimento de ambiente Linux.

    Tipo de vaga: Tempo Integral

    Salário: R$4.000,00 /mês

    Experiência:

    NodeJS, MongoDB, JavaScript, HTML, CSS, React + Reduz (Preferencial)

    Mogi das Cruzes, SP
    Tempo Integral, Efetivo/CLT
    Experiência com geração de relatórios. Conhecimentos de instruções SQL e extração de dados. Conhecimentos de programação em PL/SQL para desenvolver e verificar scripts de criação de objetos, modelagem de dados e rotinas de manutenção do BD. Conhecimentos para administrar usuários e para executar tarefas básicas de administração do BD (gerenciar tabelas e índices e aplicar patches no BD). Realização de backup/recovery (Export e RMAN). Conhecimentos sobre a arquitetura geral do Banco de Dados. Conhecimentos em ambientes Linux/Unix e rotinas em shell Script. Instalação, upgrade e migração de versões de BD Oracle. Efetuar monitoramento de banco de dados, análise e tuning de performance. Atuar em ambientes de alta disponibilidade e de recuperação de desastres (Data Guard). Conhecimento em administração de containers (CDBs e PDBs).

    Desejável noções de SQL Server....

    Horário: De segunda a sexta, das 15h00 às 23h48.

    Tipo de vaga: Tempo Integral, Efetivo/CLT

    Experiência:

    DBA (Preferencial)
    Escolaridade:

    Ensino Superior completo (Obrigatório)
    Local:

    Mogi das Cruzes, SP (Preferencial)

    Alphaville, SP
    Desenvolvedor Mobile (iOS e Android)

    Nessa função você será responsável por vários novos recursos e será um membro essencial da nossa equipe de desenvolvimento de produtos.

    Irá realizar o desenvolvimento de nossos aplicativos móveis, ajudando-nos a traduzir nossos objetivos em experiências interativas atraentes para nossos clientes.

    Responsabilidades principais :

    Desenvolver, implantar e suportar soluções de aplicativos móveis

    Atuar no suporte técnico e Inovação em TI

    Criar componente da interface do usuário para novas versões

    Suporte à equipe do produto em relação ao conteúdo de UX

    Liberar aplicativos para as lojas Apple and Google Play stores

    Habilidades necessárias :

    Experiência em design de UX / UI para criar as telas com o Adobe XD

    Escrever código confiável, escalável, testável e sustentável

    Experiência com iOS e Android nativos

    Escrever pacotes NPM

    React / React Native / Redux

    JavaScript (ES6/ES7/ES8)

    Experiencia no consumo de APIs REST

    HTML e CSS

    Git

    Impresncindível Inglês avançado e Espanhol intermediário

    Local de Trabalho: Alphaville – SP.

    Tipo de vaga: Tempo Integral

    Experiência:

    design de UX / UI (Preferencial)

    Diadema, SP
    Tempo Integral, Temporário
    R$ 2.000 - R$ 2.500 por mês
    Experiência e cursos de programador de injetora.

    Tipo de vaga: Tempo Integral, Temporário

    Salário: de R$2.000,00 a R$2.500,00 /mês

    São Paulo, SP
    R$ 10.000 - R$ 13.000 por mês
    Testes funcionais baseados em critérios de aceitação; Conhecimento em gestão de defeitos;
    Conhecimento em metodologia ágil, Scrum.
    Conhecimento em fases e tipos de testes;
    Conhecimento em TDD e BDD;
    Conhecimento intermediário na linguagem de programação: Java
    Conhecimento nas ferramentas: Selenium e VSTS
    Conhecimento em Banco de dados (SQL/Oracle) Webservices e API.
    -Autodisciplinado, comunicativo, colaborativo; Desejável: Conhecimento em meios de pagamento.

    Diferencial: Conhecimento em Docker.

    Tipo de vaga: Tempo Integral

    Salário: de R$10.000,00 a R$13.000,00 /mês

    Experiência:

    Testes Automatizados (Obrigatório)
    Java Intermediário (Preferencial)
    Escolaridade:

    Ensino Superior completo (Preferencial)
    Local:

    São Paulo, SP (Preferencial)

    `;
}
)()
/*
//var patt = /(\d\d.\d\d\d)|(\d\d)|([\.][ ])|(\n|\t|[(),;:/+?!-])/g;
var patt = new RegExp("(\\d\\d.\\d\\d\\d)|(\\d\\d)|([ ][\\d][ ])|([\\.][ ])|(R\\$)|(\\n|\\t|[(),;:/+?!])","gi");
var words = input
.trim()
.replace(patt, " ")
.replace(/\. /g, " ")
.replace(/ - /, " ")
.replace(/   /g, " ")
.replace(/  /g, " ")
.replace(/  /g, " ");
console.log(words);
*/

// replace unwanted characters
var text = input.trim()
.replace(/\n|\t|[(),;:/+?!]|R\$| -|- | –|– | —|— /g, " ")
.replace(/\.+ |\d+\.\d+|\d\d/g, "")
.replace(/\s+/g, " ");

// accented characters normalization
text = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
console.log(text);
var words = text.split(" ");

console.log(words);
