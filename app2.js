// app.js

// Objeto de dados para a seção Home
const homeContent = {
    title: "Bem-vindo à ",
    stilizedCName: "Maxlimp",
    stilizedCSubname: "Rio",
    description: "Sua solução em produtos de Limpeza e Higiene.",
    buttonText: "FALE COM UM VENDEDOR",
    buttonLink: "#s-contact"
};

// Função para renderizar a seção Home
function renderHomeSection() {
    const homeSectionElement = $("#s-home");

    const textButtonBlock = $("<div>");
    textButtonBlock.addClass("s-home-text-button-block");

    const hstitleElement = $("<h1>");
    hstitleElement.text(homeContent.title);

    const titleElementmainName = $("<span>");
    titleElementmainName.addClass("s-home-text-cname");
    titleElementmainName.text(homeContent.stilizedCName);

    const titleElementsubName = $("<small>");
    titleElementsubName.addClass("s-home-text-csubname");
    titleElementsubName.text(homeContent.stilizedCSubname);

    // Anexando os spans e small DENTRO do h1
    hstitleElement.append(titleElementmainName);
    hstitleElement.append(titleElementsubName);

    const descriptionElement = $('<p>');
    descriptionElement.text(homeContent.description);

    const btnElement = $("<a>");
    btnElement.attr('href', homeContent.buttonLink);
    btnElement.text(homeContent.buttonText);
    btnElement.addClass('btn btn-primary'); // CORREÇÃO: Alterado de 'btn-cta' para 'btn-primary'

    // Anexando todos os elementos ao bloco de texto/botão
    textButtonBlock.append(hstitleElement);
    textButtonBlock.append(descriptionElement);
    textButtonBlock.append(btnElement);

    // Anexando o bloco de texto/botão à seção Home
    homeSectionElement.append(textButtonBlock);
}

// Objeto de dados para a seção Sobre Nós
const aboutContent = {
    title: "Sobre Nós",
    description: "Na MaxLimp Rio, somos especialistas em soluções completas de limpeza profissional e descartáveis para empresas no Rio de Janeiro. Nossa missão é simplificar a gestão de suprimentos, garantindo qualidade, economia e agilidade. Oferecemos uma ampla variedade de produtos de alta performance, com preços especiais para compras em volume. Asseguramos entregas rápidas em até 48 horas, frete grátis e faturamento via boleto bancário, garantindo total competitividade. Ao escolher a MaxLimp Rio, você obtém economia real, qualidade comprovada e suporte personalizado para seu negócio. Estamos prontos para atender suas demandas no atacado e varejo, e será um prazer apresentar uma proposta sob medida para sua próxima cotação. Conte conosco para um ambiente sempre limpo, seguro e produtivo."
};

// Função para renderizar a seção "Sobre Nós"
function renderAbout() {
    const aboutSectionElement = $("#s-about"); // Seleciona a seção #s-about

    // 1. Criar o contêiner principal do conteúdo
    const sectionContentDiv = $("<div>"); // CORREÇÃO: Usar $("<div>") para criar um novo div
    sectionContentDiv.addClass("section-content about-content");

    // 2. Criar o título da seção
    const abtitleElement = $("<h2>"); // CORREÇÃO: Usar $("<h2>") para criar um novo h2
    abtitleElement.addClass("section-title");
    abtitleElement.text(aboutContent.title);

    // 3. Criar o bloco de texto (parágrafos)
    const textBlockDiv = $("<div>"); // CORREÇÃO: Usar $("<div>") para criar um novo div
    textBlockDiv.addClass("about-text-block"); // CORREÇÃO: Usar .addClass() corretamente

    // Criar o parágrafo de descrição
    const descriptionP = $("<p>"); // CORREÇÃO: Usar $("<p>") para criar um novo parágrafo
    descriptionP.text(aboutContent.description);
    textBlockDiv.append(descriptionP);


    // 4. Anexar os elementos ao sectionContentDiv
    sectionContentDiv.append(abtitleElement); // CORREÇÃO: Usar abtitleElement
    sectionContentDiv.append(textBlockDiv);

    // 5. Anexar o sectionContentDiv à seção principal
    aboutSectionElement.append(sectionContentDiv);
}

// Objeto de dados para a seção Contato
const contactContent = {
    title: "Contato",
    description: "Fale conosco para dúvidas e orçamentos.",
    whatsappNum: "5521998355672",
    buttonText: "Fale no WhatsApp",
    phone: "21 98765-4321", // Adicionado para completar o objeto de dados
    email: "contato.maxlimp@gmail.com"
};

// Função para renderizar a seção Contato
function renderContact() {
    const contactSectionElement = $("#s-contact");
    const sectionContentDiv = $("<div>");
    sectionContentDiv.addClass("section-content contact-content");

    const cttitleElement = $("<h2>");
    cttitleElement.addClass("section-title");
    cttitleElement.text(contactContent.title);

    const descriptionP = $("<p>");
    descriptionP.addClass("contact-description");
    descriptionP.text(contactContent.description);

    const whatsappButton = $("<a>");
    whatsappButton.addClass("btn btn-whatsapp");
    whatsappButton.attr({
        "href": `https://wa.me/${contactContent.whatsappNum}`,
        "target": "_blank",
        "rel": "noopener noreferrer"
    });

    const whatsappIcon = $("<img>");
    whatsappIcon.attr({
        "src": "assets/whatsapp-icon.svg", // Verifique se o caminho e nome do arquivo estão corretos
        "alt": "Ícone Whatsapp",
        "class": "whatsapp-icon"
    });
    whatsappButton.append(whatsappIcon);
    whatsappButton.append(contactContent.buttonText);

    const contactInfoDiv = $("<div>");
    contactInfoDiv.addClass("contact-info");

    const phoneP = $("<p>"); // Criando o parágrafo para o telefone
    phoneP.html(`<strong>Telefone:</strong> ${contactContent.phone}`); // Usando phone do contactContent

    const emailP = $("<p>");
    emailP.html(`<strong>E-mail:</strong> ${contactContent.email}`);

    contactInfoDiv.append(phoneP); // Anexando o parágrafo do telefone
    contactInfoDiv.append(emailP);

    sectionContentDiv.append(cttitleElement);
    sectionContentDiv.append(descriptionP);
    sectionContentDiv.append(whatsappButton);
    sectionContentDiv.append(contactInfoDiv);

    contactSectionElement.append(sectionContentDiv);
}

// Objeto de dados para o Rodapé
const footerContent = {
    copy: "&copy; 2025 Maxlimp Rio. Todos os direitos reservados.",
    creditsText: "Desenvolvido por:",
    githubUser: "@pedronrs",
    githubLink: "https://github.com/pedronrs"
};

// Função para renderizar o Rodapé
function renderFooter() {
    const footerElement = $("#main-footer");

    const copyP = $("<p>");
    copyP.addClass("footer-copy");
    copyP.html(footerContent.copy);

    const creditsSmall = $("<small>");
    creditsSmall.addClass("footer-credits");
    creditsSmall.text(footerContent.creditsText + " ");
    const githubLink = $("<a>");
    githubLink.attr({
        "href": footerContent.githubLink,
        "target": "_blank",
        "rel": "noopener noreferrer"
    });
    githubLink.text(footerContent.githubUser);
    creditsSmall.append(githubLink);

    footerElement.append(copyP);
    footerElement.append(creditsSmall);
}

// Chamada das funções de renderização quando o DOM estiver pronto
$(document).ready(function() {
    renderHomeSection();
    renderAbout();
    renderContact();
    renderFooter();
});
